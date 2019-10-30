const router = require('express').Router();
const exerciseController = require('../controllers/exercise-controller');

router.get('/', exerciseController.show);
router.post('/add', exerciseController.add);

module.exports = router;