// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  [process.env.NODE_ENV]: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialectOptions:
      process.env.DB_LOCAL === 'true'
        ? {}
        : process.env.DB_SSL === 'true'
          ? {
              ssl: {
                require: true,
                ca: process.env.DB_SSL_CA,
                rejectUnauthorized: true,
              },
            }
          : {
              ssl: {
                require: true,
                rejectUnauthorized: false, // Set to false to accept self-signed certificates
                // ca: [getEnvironmentData('DB_SSL_CA')],
              },
            },
  },
};
