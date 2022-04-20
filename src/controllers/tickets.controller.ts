import { Request, Response, NextFunction } from "express";
import { knex } from "../db/db";
import moment from "moment";
import Jwt from "jsonwebtoken";
import { convertCircularToJSON } from "../utils/convertJSON";
import { scrape } from "../helpers/indigo";

export class TicketsController {

    async updateTickets(req :Request,res: Response) {
        let data = convertCircularToJSON(req)
        console.log("headers",req.headers)
        // let scrapeValue = await scrape()
        console.log("body", req.body.showprice)
        res.send({ status: "SUCCESS", data })
    }

}
