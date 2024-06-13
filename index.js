import express from "express";
import router from "./routes/index.routes.js"; //

const PORT = 3000;
const DEPLOY_URL = "http:localhost:3000/api/v1";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/v1`, router);

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

app.use("*", (req, res) => {
  try {
    res.status(404).json({
      title: "La ruta solicitada no es correcta",
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

app.listen(PORT, () => {
  console.log(`Servidor encendido en el puerto ${PORT}`);
});
