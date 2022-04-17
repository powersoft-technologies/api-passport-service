import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import { sequelize } from "./db/db";
import { authRoute } from "./routes/auth.routes";
import { ticketsRoute } from "./routes/ticket.routes";

const app = express();
app.use(json());
app.use(urlencoded({extended: true}))
app.use(cookieSession({
    signed: false,
    httpOnly: false
}));
app.use(cors());

sequelize.authenticate().then(() => console.log("Sequelize Connected")).catch((err) => console.log("Sequelize Error: ",err));
app.use('/auth',authRoute);
app.use('/tickets',ticketsRoute);



app.get('/test', (req, res) => {
    res.send('Hello World!')
  });

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log("listening to port : ", PORT)
});
