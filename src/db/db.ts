import { Sequelize } from "sequelize-typescript";
import Knex from 'knex';


let knex = Knex({
    client: 'mssql',
    connection: {
        host: '103.94.27.38',
        port: 1433,
        user: 'saa',
        password: 'saa123',
        database: 'AirWin_AaaDemo_2021'
    }
})

let sequelize = new Sequelize('AirWin_AaaDemo_2021', 'saa', 'saa123', {
    host: '103.94.27.38',
    dialect: 'mssql',
    port: 1433,
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 10000
    }
  });

export {sequelize,knex}