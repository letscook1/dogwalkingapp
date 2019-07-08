module.exports = {
  env: 'production',

  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'Veganism4Life!',
    database: 'production',
    host: '<insert public ip here>',
    logging: console.log,
    operatorsAliases: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl: '<insert client url here>',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: '<place a generated random value here>',
};
