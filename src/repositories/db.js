import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://sgaxlsbm:8SBadmj1PSu0uOrVEBz1gd33Nn82O-QO@motty.db.elephantsql.com/sgaxlsbm",
    {
        dialect: "postgres",
        define: { timestamps: false }
    }
);

export default sequelize;