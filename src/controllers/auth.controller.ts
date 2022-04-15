import { Request, Response, NextFunction } from "express";
import { knex } from "../db/db";
import { AuthServices } from "../services/auth.service";
import moment from "moment";
// import { User } from "../models/tblWebUser.model";
import Jwt from "jsonwebtoken";

export class AuthController {
    async signInAuthenticate(req: Request, res: Response){
        let {userName, password} = req.body

        let existingUser = await knex('tblWebUser')
        .where('userName', userName)

        if (password != existingUser[0].password){
            return res.send({status: 'FAILED', message: "Invalid Credentials"}).end()
        }


        let userJWT = Jwt.sign({
            ledgerCode: existingUser[0].ledgerCode,
            userName: existingUser[0].userName
        }, "key")

        // req.session = {
        //     jwt : userJWT
        // }
        
        // res.cookie("access_token", userJWT)
        // res.set

        res.send({status: 'SUCCESS', jwt: userJWT})

    }

    async signOut(req: Request, res: Response){
        req.session = null;

        res.send({ status : "SUCCESS"})
    }

    
}