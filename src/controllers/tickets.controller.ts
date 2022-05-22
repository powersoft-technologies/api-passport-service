import { Request, Response, NextFunction } from "express";
import { knex } from "../db/db";
import moment from "moment";
import Jwt from "jsonwebtoken";
import { convertCircularToJSON } from "../utils/convertJSON";
// import { scrape } from "../helpers/indigo";
import { scrape } from "../helpers/scrapeindigo"
import { PythonShell } from "python-shell"

export class TicketsController {

    async updateTickets(req :Request,res: Response) {
        // let data = convertCircularToJSON(req)
        let data: any
        console.log("headers",req.headers)
        let options = {
            pythonOptions: ['-u'], // get print  results in real-time
              scriptPath: 'src/helpers', //If you are having python_test.py script in same folder, then it's optional.
            // args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
        };
        await PythonShell.run("indigo.py", { mode: 'text', ...options}, (err, result) => {
            if (err) {
                console.log(err)
                res.send({status: "Failed"})
            }
            data = result?.toString()
            console.log(result)
        })
        // let scrapeValue = await scrape()
        // console.log("body", req.body.showprice)
        res.send({ status: "SUCCESS", data })
    }

    async saveTicket(req :Request,res: Response) {
        let data = convertCircularToJSON(req)
        console.log("headers",req.headers)
        // let scrapeValue = await scrape()
        console.log("body", req.body.booking_date)
        let {
            showprice
        } = req.body
        res.send({ status: "SUCCESS", data })
    }

}
