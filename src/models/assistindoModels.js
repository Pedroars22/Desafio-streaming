import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Filme from "./filmeModel.js";
import Usuario from "./usuarioModel.js";
import Serie from "./serieModel.js";

const Assistindo = db.define('assistido', {
    assistidoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, { underscored: true });

Assistindo.belongsTo(Usuario, {foreignKey: "usuarioId"});
Assistindo.belongsTo(Filme, {foreignKey: "filmeId"});
Assistindo.belongsTo(Serie, {foreignKey: "serieId"});

export default Assistindo;