import express from "express";

const app = express();

app.get('/', (req, res) => res.send({ page: '/' }));
app.get('/page', (req, res) => res.send({ page: '/page' }));

app.listen(3000, () => console.log('Started on 3000'));