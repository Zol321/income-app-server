const express = require("express");
const cors = require('cors');

const app = express();
const port = 8080;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});