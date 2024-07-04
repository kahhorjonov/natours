const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const { PORT, DATABASE } = process.env;

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.error('DB connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
