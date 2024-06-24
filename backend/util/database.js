const Sequelize = require("sequelize");

const sequelize = new Sequelize("chats", "root", "Deeseh@7088%", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
