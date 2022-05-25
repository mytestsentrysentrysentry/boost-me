const router = require("express").Router();

router.get('/sso', (req, res) => {
  res.send('SSO Login')
})

module.exports = router