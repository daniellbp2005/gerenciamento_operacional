const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json());
const port = 3305; // banco vai ser 3306 e front 8000 ou 3000
const routesEventos = require("./routes/eventos.js");

<<<<<<< HEAD
app.use(cors());
app.use("/api/eventos",routesEventos);
=======
app.use("/api/eventos",routesEventos)
>>>>>>> 86aca831698f39ff2a91ad891af364f44eea06c2

app.use((erro, req, res, next) => {
  console.error("Erro:", erro);
  res.status(500).json({
    mensagem: "Falha interna no servidor",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});
