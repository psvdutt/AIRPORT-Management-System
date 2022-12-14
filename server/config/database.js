import { Sequelize } from "sequelize";

const db = new Sequelize('DB_NAME', 'DB_USERNAME', 'DB_PASSWORD', {
    host: "HOSTNAME",
    port: "PORT",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

export default db;

