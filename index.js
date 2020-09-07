const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();
const PORT = process.env.PORT || process.env.ECO_PORT;

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository
);

app.use(cors());

const hereIsTheUpsideDown = process.env.UPSIDE_DOWN === 'true' ? true : false;
console.log(hereIsTheUpsideDown)

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown
  );

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
