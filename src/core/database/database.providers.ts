import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { User } from '../../db/models';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);

      await sequelize.sync();

      await sequelize.authenticate().then(() => {
        console.log(`=> Database connected: ${sequelize.options.database}`);
      }).catch((error) => {
        console.error('=> Error while connecting database:', error);
      });

      // Add your models here
      sequelize.addModels([
        User
      ]);

      return sequelize;
    },
  },
];