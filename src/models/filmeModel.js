import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Filme = db.define('filmes', {
    filmeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoLancamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avaliacao: {
        type: Sequelize.DOUBLE,
        allowNull: true
    }
}, { underscored: true });

export default Filme;