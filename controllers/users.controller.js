import me from "../data/me.json" assert {type:"json"};

export const getUserInfo = async (req, res) => {
  try {
    return res.status(200).json(me);
  } catch (error) {
    console.log(error);
    return res.status(code).json({ ok: false, msg: error.message });
  }
};
