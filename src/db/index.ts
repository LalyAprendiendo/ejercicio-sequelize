import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(`${process.env.DB_URI}`);
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export { DataTypes };
export default sequelize;
