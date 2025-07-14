const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

app.get('/', (req, res) => {
  res.send('Seu token de verificação é: ${verifyToken});
});

app.listen(port, () => {
  console.log(Servidor rodando na porta ${port}, token=${verifyToken}');
});
