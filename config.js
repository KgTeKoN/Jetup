const port = 7000;
const urlTeam = 'https://jetup.digital/team';
const employeesClassName = '.text-block-item';
const tagNames = 'h2';
const tagPosition = 'h3';
const tagEssay = 'p';
require('dotenv').config({path: `${__dirname}/.env`});
const pgConnectionHost = process.env.PG_CONNECTION_HOST;
const pgConnectionPort = process.env.PG_CONNECTION_PORT;
const pgConnectionUser = process.env.PG_CONNECTION_USER;
const pgConnectionPassword = process.env.PG_CONNECTION_PASSWORD;
const pgConnectionDB = process.env.PG_CONNECTION_DB;
const knexTableName = 'knex_migration'

module.exports = { port, urlTeam, employeesClassName, tagNames, tagPosition, tagEssay, pgConnectionHost,
    pgConnectionPort, pgConnectionUser, pgConnectionPassword, pgConnectionDB, knexTableName }
