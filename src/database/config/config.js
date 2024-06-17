const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });


const username= process.env.DB_USER
const password= process.env.DB_PASSWORD
const database= process.env.DB_NAME
const host= process.env.DB_HOST
const dialect= process.env.DB_DIALECT



const development = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: dialect,
  },
};

module.exports = development;
