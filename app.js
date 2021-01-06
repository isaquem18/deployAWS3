const express = require('express');
const app = express();
const port = 80 || 4444;
      
app.get('/', (req, res) => {
  const { nome } = req.query;
  return res.json({
    pagina: 'HOME',
    nome,
  })
})

app.get('/blog', (req, res) => {
  const { nome } = req.query;
  return res.json({
    pagina: 'BLOG',
    nome,
  })
})

app.get('/produtos', (req, res) => {
  const { nome } = req.query;
  return res.json({
    pagina: 'PRODUTOS',
    nome,
  })
})

app.listen(port);
