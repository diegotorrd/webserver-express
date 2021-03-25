const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//express hbs engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  //res.send("Hola Mundo");

  res.render("home", {
    nombre: "diego torres esquerre xoxo",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
