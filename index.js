const Sentry = require("@sentry/node");
// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

const ecosystemRoutes = require("./routes/ecosystem")
// Initialize express and define a port
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/setup', async (req, res) => {})

app.get('/ecosystem', ecosystemRoutes)

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

