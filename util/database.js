const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "adhurimbe12", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
