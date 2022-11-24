const express = require ("express")
const morgan = require ("morgan")
const bodyParser = require ("body-parser")
const cookieParser = require("cookie-parser")
const cors = require ("cors")
require("dotenv").config()
const inmuebleRoutes = require("./routes/inmuebleRoutes")
const userRoutes = require("./routes/userRoutes")


const app =express()




//middlewares

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use("/api", userRoutes)


app.get("/api", (req, res) => {
    res.json("Bienvenido a INMUEBLES SRL");
});

app.use("/api", inmuebleRoutes)


const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})