const router = require('express').Router();
const { initUser } = require('../../server/auth'); 


router.post('/singUp', async function (req, res) {
  console.log('req', req);
  // const { username, password } = req.body;
  // const data = await initUser({ username, password });
  // return res.json(data);
  return res.json({
    message: 'success',
    status: 200,
  })
});


module.exports = router;