/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api/locations", (req, res) => {
	res.send(JSON.stringify(locations));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
