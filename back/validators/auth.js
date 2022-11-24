const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Acceso al recurso denegado" });
    return;
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "El token es invalido", mensaje: error });
  }
};

exports.verifyPerfil = (req, res, next) => {

  const user = req.user;
  console.log(user)
  if (user.tipo_usuario == 1) {
      next();
  }
  else {
      res.status(401).json({ error: "Acceso al recurso denegado" });
      return;
  }

};

exports.verifyPerfil2 = (req, res, next) => {
  const user = req.user;

  if (user.tipo_usuario == 2) {
      next();
  }
  else {
      res.status(401).json({ error: "Acceso al recurso denegado" });
      return;
  }

}

exports.verifyPerfil3 = (req, res, next) => {
  const user = req.user;

  if (user.tipo_usuario == 3) {
      next();
  }
  else {
      res.status(401).json({ error: "Acceso al recurso denegado" });
      return;
  }

}