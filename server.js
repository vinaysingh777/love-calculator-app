const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');
const LoveCalculation = require('./models/LoveCalculation');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Other routes
app.post('/calculate-love', async (req, res) => {
  const { name1, name2 } = req.body;
  const lovePercentage = Math.floor(Math.random() * 100) + 1;

  try {
    const loveCalculation = await LoveCalculation.create({
      name1,
      name2,
      lovePercentage
    });
    res.json(loveCalculation);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});
