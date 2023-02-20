import { Sequelize } from "sequelize-typescript";
import { Dialect } from 'sequelize'
import Knex from 'knex';

let port = parseInt(process.env.DB_PORT!)
let host : string = process.env.DB_HOST!
let user: string = process.env.DB_USERNAME! as string
let password: string = process.env.DB_PASSWORD!
let database: string = process.env.DB_NAME! as string

let knex = Knex({
    client: 'mssql',
    connection: {
        host: "103.94.27.38",
        port: 1433,
        user: "webd",
        password: "webd@123",
        database: "AirWin_AaaDemo_2021"
    }
})

let myKnex = Knex({
  client: 'mysql',
  version: '8.0.29',
  connection: {
    host : '103.73.188.58',
    port : 3306,
    user : 'clientAdmin',
    password : 'client@admn123',
    database : 'api_services_demo'
  }

})
// myKnex.raw("SELECT 1").then(() => {
//   console.log("MySQL connected");
// })
// .catch((e) => {
//   console.log("MySQL not connected");
//   console.error(e);
// });

knex.raw("SELECT 1").then(() => {
  console.log("MSSQL connected");
})
.catch((e) => {
  console.log("MSSQL not connected");
  console.error(e);
});

let sequelize = new Sequelize(database, user, password, {
    host,
    dialect: "mssql",
    port,
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 10000
    }
  });

// export {sequelize ,knex}
export {knex, myKnex}