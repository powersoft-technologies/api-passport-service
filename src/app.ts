import express from "express";
import { json } from "body-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import { sequelize } from "./db/db";

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    httpOnly: false
}));
app.use(cors());

sequelize.authenticate().then(() => console.log("Sequelize Connected")).catch((err) => console.log("Sequelize Error: ",err));

app.get('/test', (req, res) => {
    res.send('Hello World!')
  });

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log("listening to port : ", PORT)
});
