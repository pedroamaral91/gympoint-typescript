require("../bootstrap.ts");

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  storage: "./src/database/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
