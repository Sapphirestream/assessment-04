const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  drawTarot,
  addTarot,
  deleteTarot,
  changeTarot,
} = require("./controller");
const { application } = require("express");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/tarot", drawTarot);

app.post("/api/tarot", addTarot);

app.delete("/api/tarot/:card", deleteTarot);

app.put("/api/tarot", changeTarot);

app.listen(4000, () => console.log("Server running on 4000"));
