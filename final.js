const Sequelize = require('sequelize');
var sequelize = new Sequelize('berxvwgt', 'berxvwgt', '31i6hIv2JGXtNytTiW83bV_prG7PERs1', {
    host: 'https://rich-erin-outerwear.cyclic.app',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

