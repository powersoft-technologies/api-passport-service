import { Request, Response, NextFunction } from "express";
import { knex } from "../db/db";
import bcrypt from "bcrypt";
import { AuthServices } from "../services/auth.service";
import moment from "moment";
// import { User } from "../models/tblWebUser.model";
import Jwt from "jsonwebtoken";

export class AuthController {
    async signUp(req:Request, res:Response){
        let {username, password, role} = req.body

        let existingUser = await knex('tblAUsers')
        .where('username', username)

        if (existingUser[0]) {
            console.log(existingUser)
            res.send({status: 'FAILED', message: "username exists"})
        } else {
            const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
            let hashedPassword = await bcrypt.hash(password, salt);
            console.log(username,hashedPassword)
    
            await knex('tblAUsers').insert({username, password: hashedPassword, role})
            let user = await knex('tblAUsers')
            .where('username', username)
    
            res.send({status: 'SUCCESS', user: user[0] })
        }
    }
    async signInAuthenticate(req: Request, res: Response){
        let {username, password} = req.body

        let existingUser = await knex('tblAUsers')
        .where('username', username)

        if (existingUser[0].username) {
            const validPassword = await bcrypt.compare(password, existingUser[0].password)

            if (validPassword){
                let userJWT = Jwt.sign({
                    // ledgerCode: existingUser[0].ledgerCode,
                    username: existingUser[0].username,
                    agentId: existingUser[0].agentId,
                    role: existingUser[0].role
                }, "key")
        
                res.send({status: 'SUCCESS', jwt: userJWT})
            } else {
                res.send({status: 'FAILED', message: "Invalid Credentials"})
            }
        } 

    }

    async signOut(req: Request, res: Response){
        req.session = null;

        res.send({ status : "SUCCESS"})
    }

    
}