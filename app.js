const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const productRoutes = require('./routes/product');

const sequelize = require('./utils/database');

const Product = require('./models/product');

app.use(productRoutes);

const PORT = 4000;

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err) => console.log(err));
