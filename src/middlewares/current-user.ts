import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

interface UserPayload {
    // ledgerCode : number;
    username: string;
}

// declare global {
//     namespace Express {
//         interface Request {
//             currentUser?: UserPayload;
//         }
//     }
// }

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization)
    if (!req.headers.authorization){
        return next()
    }

    let token = req.headers.authorization.split(' ')[1];

    try {
        const payload = Jwt.verify(
            token,
            "key"
        ) as UserPayload;
        // let {ledgerCode, userName} = payload
        let {username} = payload
        // console.log(payload, username)
        req.body = {
            ...req.body,
            username
        }
    } catch (err){}

    next()
    
    
}