const express = require('express');
const router = express.Router();
const controller = require('.././controllers');

router.use('/wallet', controller.post);
router.use('/', (req,res) => {
    res.send("Make your own Wallet!");
})

module.exports = router;