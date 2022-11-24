const express = require("express");
const router = express.Router();
const {
  listInmueble,
  inmuebleById,
  inmuebleNuevo,
  modificarInmueble,
  eliminarInmueble,
  filtrarInmuebles,
  info,
} = require("../controllers/inmuebleControllers");
const { verifyToken, verifyPerfil, verifyPerfil2, verifyPerfil3 } = require("../validators/auth");
//b//
router.get("/inmueble/listInmueble",verifyToken,verifyPerfil, listInmueble);
//c//
router.get("/inmueble/:id",verifyToken,verifyPerfil, inmuebleById);
//d//
router.post("/inmueble/nuevo",verifyToken,verifyPerfil2, inmuebleNuevo);
//A//
router.put("/inmueble/modificar",verifyToken,verifyPerfil2, modificarInmueble)
//B//
router.delete("/inmueble/eliminar/:id",verifyToken,verifyPerfil3, eliminarInmueble)
//C//
router.get("/inmuebles/filtro/precio_y_o_metro",verifyToken,verifyPerfil2, filtrarInmuebles)
//D//
router.get("/inmuebles/filtro/info/date",verifyToken,verifyPerfil2, info)


module.exports = router;
