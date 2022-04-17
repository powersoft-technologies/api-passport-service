import { Request, Response, NextFunction } from "express";
import { knex } from "../db/db";
import moment from "moment";
import Jwt from "jsonwebtoken";
import { convertCircularToJSON } from "../utils/convertJSON";

export class TicketsController {

    async updateTickets(req :Request,res: Response) {
        let data = convertCircularToJSON(req)
        console.log("headers",req.headers)
        res.send({ status: "SUCCESS", data })
    }

}
