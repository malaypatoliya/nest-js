import { Dialect } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { getEnvironmentData } from "src/helpers/general";

export const databaseConfig: SequelizeOptions = {
    dialect: getEnvironmentData('DB_DIALECT') as Dialect,
    host: getEnvironmentData('DB_HOST'),
    port: Number(getEnvironmentData('DB_PORT')),
    username: getEnvironmentData('DB_USERNAME'),
    password: getEnvironmentData('DB_PASSWORD'),
    database: getEnvironmentData('DB_NAME'),
    // dialectOptions: getSSLConfig(),
    logging:
        getEnvironmentData('NODE_ENV') === 'development' ? console.log : false,
}