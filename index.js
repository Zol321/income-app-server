const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const connect = require("./db");

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());
app.use(router);
connect()

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
