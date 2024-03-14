import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'admin',
        password: 'Cybercom@123',
        database: 'nest_test',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      // await sequelize.authenticate().then(() => {
      //   console.log(`${sequelize.options.database} database connected !!!`);
      // }).catch((error) => {
      //   console.error('Unable to connect to the database:', error);
      // });
      return sequelize;
    },
  },
];