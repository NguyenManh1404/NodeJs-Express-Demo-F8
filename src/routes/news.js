const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.use('/:new-host',newsController.newHot);
router.use('/',newsController.index);

module.exports=router;