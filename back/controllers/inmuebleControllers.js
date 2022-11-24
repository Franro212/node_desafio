const knex = require("../config/knexfile");

exports.listInmueble = (req, res) => {
  knex("inmuebles")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.inmuebleById = (req, res) => {
  const id = req.params.id;
  knex("inmuebles")
    .where("inmuebles.id_inmueble", id)
    .then((resultado) => {
      if (resultado.length) {
        res.json(resultado);
      } else {
        res.status(404).json({ error: "No existe el Id en la base de datos" });
      }
    });
};

exports.inmuebleNuevo = (req, res) => {
  const { nombre, metros_cuadrados, precio_venta } = req.body;
console.log(nombre, metros_cuadrados, precio_venta);
  knex("inmuebles")

    .insert({
      nombre: nombre,
      metros_cuadrados: metros_cuadrados,
      precio_venta: precio_venta,
    })
    .then(() => {
      res.json({
        mensaje: "El inmueble fue ingresado correctamente",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.modificarInmueble = (req, res) => {
    const id = req.params.id;
    const { nombre, metroscuadrados, precioventa } = req.body;

    knex("inmuebles")
        .where("inmuebles.id_inmueble", id)
        .update({ nombre, metroscuadrados, precioventa })
        .then(() => {
            res.json({ mensaje: "El inmueble se ingresó correctamente" })
        })
        .catch((error) => {

            res.status(400).json({ error: error })
        })
}

exports.eliminarInmueble = (req, res) => {
    const id = req.params.id;

    knex("inmuebles")
        .where("inmuebles.id_inmueble", id)
        .del()
        .then(() => {
            res.json({ mensaje: "El inmueble se borró correctamente" })
        })
        .catch((error) => {

            res.status(404).json({ error: error })
        })
}

exports.filtrarInmuebles = (req, res) => {
  const {metros_cuadrados, precio_venta} = req.body
  knex("inmuebles")
      .where({metros_cuadrados: metros_cuadrados, precio_venta: precio_venta})
      .then((respuesta) => {
          res.json(respuesta)
      })
      .catch((error) => {

          res.status(404).json({ error: error.message })
      })
}
exports.info = (req, res) => {
  let today = new Date();

let now = today.toLocaleString();

  knex("inmuebles")
      .then((respuesta) => {
          res.json(`Cantida de registros : ${respuesta.length}, Fecha y hora de la consulta: ${now}`)
      })
      .catch((error) => {

          res.status(404).json({ error: error.message })
      })
}
