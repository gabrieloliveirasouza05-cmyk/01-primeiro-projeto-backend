// Importa o Express (framework que ajuda a criar rotas e o servidor)
import express from 'express';

// Cria um molde completo do servidor (o app representa o servidor / Express)
const app = express();

// Rota GET: recebe a requisição (req) e envia a resposta (res)
app.get('/busca', (req, res) => {
  res.send('Resposta retornada');
  console.log('Enviado');
});

// Liga o servidor e configura a porta (3000 é a padrão)
app.listen(3000, () => {
  console.log('Servidor rodando');
});
