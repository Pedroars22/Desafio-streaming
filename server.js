import express from "express";
import cors from "cors"; //posso tirar
import winston from "winston";
import usuariosRouter from "./src/routes/usuariosRoute.js";
import filmesRouter from "./src/routes/filmesRoute.js";
import seriesRouter from "./src/routes/seriesRoute.js"

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "streaming-api.log" })
    ],
    format: combine(
        label({ label: "streaming-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/usuario", usuariosRouter);
app.use("/filme", filmesRouter);
app.use("/serie", seriesRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message })
})

app.listen(3000, () => console.log("API Started."));