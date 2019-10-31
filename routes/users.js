const router = require('express').Router();
const userController = require('../controllers/user-controller');

router.get("/", userController.show);
router.post("/add", userController.add);

module.exports = router;