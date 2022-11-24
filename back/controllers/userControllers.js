const knex = require("../config/knexfile");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



exports.listUser = (req, res) => {
    knex("usuario")
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };

exports.newUser =  async (req, res) => {
  const { email, password, nombre, tipo_usuario } = req.body;
  
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt)

  knex("usuario")
   .where({email:email}).then((resultado)=>{
    if(resultado.length){
        res.status(400).json({error:"El email ya esta siendo utilizado"})
        return
    }
    knex("usuario")
    .insert({ email: email,password:newPassword, nombre:nombre,tipo_usuario:tipo_usuario })
    .then((resultado) => {
      res.json({
        mensaje: "El usuario se a registrado con exito",
        resultado: resultado,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
   })
    .catch((error) => {
        res.status(400).json({ error: error.message });
      });
};

exports.login = (req, res)=>{
    const {email, password} = req.body;

    knex("usuario")
    .where({email: email})
    .then( async(resultado)=>{
        if(!resultado.length){
            res.status(404).json({
                error: "Email y/o contrasenia incorrecta"
            
        })
        return
    }
    const validatePassword = await bcrypt.compare(password, resultado[0].password)
    if(!validatePassword){
        res.status(404).json({
            error: "Email y/o contrasenia incorrecta"
        
    })
    return
    }
    const token = jwt.sign ({
        nombre: resultado[0].nombre,
        email:resultado[0].email,
        id:resultado[0].id,
        tipo_usuario:resultado[0].tipo_usuario
    }, process.env.TOKEN_SECRET)
    res.json({succes: true, token: token})
})
.catch((error) => {
    res.status(400).json({ error: error.message });
  });
}

