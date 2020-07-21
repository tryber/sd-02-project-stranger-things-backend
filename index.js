const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const PORT = process.env.PORT || 3000;

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository
);

app.use(cors());

const hereIsTheUpsideDown = process.env.UP_DOWN === 'true';

app.get('/', (req, res) => {
  console.log(`Estou aqui na porta ${PORT}`)
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown
  );

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
