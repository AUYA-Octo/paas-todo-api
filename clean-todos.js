require("dotenv").config()
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)

squelize.query(`DELETE FROM todos WHERE statis = 'EN_RETARD'`)
