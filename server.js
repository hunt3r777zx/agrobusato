const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

let temperatureData = null;
let humidityData = null;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para atualizar os dados de temperatura e umidade
app.post('/update-data', (req, res) => {
    temperatureData = req.body.temperature;
    humidityData = req.body.humidity;

    console.log("Dados de temperatura e umidade atualizados:", temperatureData, humidityData);
    res.sendStatus(200);
});

// Rota para obter os dados de temperatura e umidade
app.get('/data', (req, res) => {
    res.json({ temperature: temperatureData, humidity: humidityData });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
