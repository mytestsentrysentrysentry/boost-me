const router = require("express").Router;

router.get('/github', (req, res) => {
  res.send('Github')
})

module.exports = router