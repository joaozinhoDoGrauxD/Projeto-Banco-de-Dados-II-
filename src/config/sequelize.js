import {Sequelize} from "sequelize";
import pg from "pg";

const database = process.env.DATABASE_PG;
const username = process.env.USER_PG;
const password = process.env.PASS_PG;
const host = process.env.HOST_PG;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: "postgres",
    dialectModule: pg,
});

export default sequelize;

