import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

/* RUTAS  DE NEGOCIO*/
import router from "./routes/index.routes.js"; //

/* CONSTANTES */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;
const API_VERSION = "/api/v1";
const DEPLOY_URL = "http:localhost:3000/api/v1";
const app = express();

/* Middlewares principales */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* RUTAS DE NEGOCIO */
app.use(`${API_VERSION}`, router); //

/* RUTAS BASE */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      title: "Bienvenido a AltaCursos API",
      navigation: {
        routes: {
          user: `${DEPLOY_URL}/users/me`,
          courses: `${DEPLOY_URL}/courses`,
          courses_1: `${DEPLOY_URL}/courses/fundamentos-de-desarrollo-web`,
          courses_2: `${DEPLOY_URL}/courses/css-avanzado`,
          courses_3: `${DEPLOY_URL}/courses/javascript`,
        },
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, statusCode: 500, error: error });
  }
});

app.use("*", (_, res) => {
  try {
    res.status(404).json({ ok: false, msg: "ruta no configurada 😐" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, statusCode: 500, error: error });
  }
});

/* LEVANTAR SERVIDOR */
app.listen(PORT, () => {
  console.log(`Servidor encendido http://localhost:${PORT}`);
});
