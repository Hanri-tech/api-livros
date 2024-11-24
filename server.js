import express, { json } from "express";
import dotenv from "dotenv";
import conectarBd from "./src/config/configBd.js";
import routers from "./src/routes/postsRouters.js";

dotenv.config();

const app = express();

routers(app);
await conectarBd();

app.listen(3000, () => {
    console.log("[LOG-INFO] - Servidor Executando...");
});