const Sentry = require("@sentry/node");
// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

const ecosystemRoutes = require("./routes/ecosystem")
const enterpriseRoutes = require("./routes/enterprise");
// Initialize express and define a port
const app = express();
const PORT = 3000;

Sentry.init({
  dsn: "https://184fa695734d4bb4be3b57da95b9a3f5@o1262142.ingest.sentry.io/6440646",
});

app.use(bodyParser.json());

app.get('/setup', async (req, res) => {
  throw new Error("Cannot setup")
})

app.get('/ecosystem', ecosystemRoutes)

app.get("/enterprise", enterpriseRoutes)

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

