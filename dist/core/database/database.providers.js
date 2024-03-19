"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_config_1 = require("./database.config");
const models_1 = require("../../db/models");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize(database_config_1.databaseConfig);
            await sequelize.sync();
            await sequelize.authenticate().then(() => {
                console.log(`=> Database connected: ${sequelize.options.database}`);
            }).catch((error) => {
                console.error('=> Error while connecting database:', error);
            });
            sequelize.addModels([
                models_1.User
            ]);
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map