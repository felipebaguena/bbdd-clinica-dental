const interventionController = require('../controllers/interventionController')
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require ('express').Router();

router.post('/intervention', verifyToken, isAdmin, interventionController.newIntervention)
router.get('/intervention', interventionController.getAllIntervention)

module.exports = router;