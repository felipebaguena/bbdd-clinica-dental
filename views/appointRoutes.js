const appointController = require('../controllers/appointController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');

const router = require ('express').Router();

router.get('/appoint',appointController.getAppoint)
router.post('/appoint', verifyToken, appointController.createAppoint)
router.put('/appoint', verifyToken, appointController.updateAppointment)
router.delete('/appoint/:id', verifyToken, appointController.deleteAppointment)
router.get('/admin/appoint', verifyToken, isAdmin, appointController.getAllAppointments)
router.get('/appoint/coming',verifyToken,appointController.getUpcomingAppointments)
router.get('/appoint/doctor/coming',verifyToken, isDoctor, appointController.getUpcomingAppointmentsDoctor)
router.get('/appoint/admin/coming',verifyToken, isAdmin, appointController.getUpcomingAppointmentsAdmin)
router.get('/appoint/past',verifyToken, appointController.getUppastAppointments)
router.get('/appoint/doctor/past',verifyToken, isDoctor, appointController.getUppastAppointmentsDoctor)
router.get('/appoint/admin/past',verifyToken, isAdmin, appointController.getUppastAppointmentsAdmin)

module.exports = router;