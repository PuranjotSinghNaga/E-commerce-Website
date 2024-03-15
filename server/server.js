import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log("Server started and listening at port", port);
});
