const router = require('express').Router();
const exerciseController = require('../controllers/exercise-controller');

router.get('/', exerciseController.show);
router.get('/:id', exerciseController.showOne);
router.post('/add', exerciseController.add);
router.post('/update/:id', exerciseController.update);
router.delete('/:id', exerciseController.remove);

module.exports = router;