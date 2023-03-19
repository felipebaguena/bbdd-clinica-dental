const appointController = require('../controllers/appointController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require ('express').Router();

router.get('/appoint',appointController.getAppoint)
router.post('/appoint', verifyToken, appointController.createAppoint)
router.put('/appoint', verifyToken, appointController.updateAppointment)
router.delete('/appoint/:id', verifyToken, appointController.deleteAppointment)
router.get('/admin/appoint', verifyToken, isAdmin, appointController.getAllAppointments)
router.get('/appoint/coming',verifyToken,appointController.getUpcomingAppointments)

module.exports = router;