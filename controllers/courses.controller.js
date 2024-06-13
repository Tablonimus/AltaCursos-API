import courses from "../data/courses.json" assert { type: "json" };
import JavascriptCourse from "../data/javascript.json" assert { type: "json" };
import FundamentosCourse from "../data/fundamentos-de-desarrollo-web.json" assert { type: "json" };
import CssCourse from "../data/css-avanzado.json" assert { type: "json" };

export const getAll = async (req, res) => {
  try {
    return res.status(200).json(courses);
  } catch (error) {
    console.log(error);
    return res.status(code).json({ ok: false, msg: error.message });
  }
};

export const getCss = async (req, res) => {
  try {
    return res.status(200).json(CssCourse);
  } catch (error) {
    console.log(error);
    return res.status(code).json({ ok: false, msg: error.message });
  }
};

export const getFundamentos = async (req, res) => {
  try {
    return res.status(200).json(FundamentosCourse);
  } catch (error) {
    console.log(error);
    return res.status(code).json({ ok: false, msg: error.message });
  }
};
export const getJavascript = async (req, res) => {
  try {
    return res.status(200).json(JavascriptCourse);
  } catch (error) {
    console.log(error);
    return res.status(code).json({ ok: false, msg: error.message });
  }
};
