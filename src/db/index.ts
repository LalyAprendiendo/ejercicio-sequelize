import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://ADA_owner:IZ30WhxVumqA@ep-tiny-river-a5qu19px.us-east-2.aws.neon.tech/ADA?sslmode=require"
);

export default sequelize;
