const {Appointment} = require('../models');

const appointController = {}

appointController.getAppoint = (req, res) => {
    res.status(200).send('Todo está correcto');
}

// CREAR CITAS (Sólo pacientes)

appointController.createAppoint = async(req, res) => {
    try {
        const { doctor_id, intervention_id, date, comments } = req.body;
        const userId = req.userId;
        const newAppointment = {
            doctor_id,
            patient_id : userId,
            intervention_id,
            date,
            comments
        }
        const appointment = await Appointment.create(newAppointment)
        return res.json(appointment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

// ACTUALIZAR CITAS (Sólo pacientes)

appointController.updateAppointment = async (req, res) => {
    try {
        const { id, date } = req.body;
        const patient_id = req.userId;

        const appointment = await Appointment.findOne({
            where: {
                id: id,
                patient_id: patient_id
            }
        });

        if (!appointment) {
            return res.status(404).send('Appointment not found');
        }

        await appointment.update({
            date: date
        });

        return res.send('Appointment updated');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// BORRAR CITAS (Disponible para Pacientes y Doctores)

appointController.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const userRoles = req.roles;

        let appointment;

        if (userRoles.includes("Doctor")) {
            appointment = await Appointment.findOne({
                where: {
                    id: id,
                    doctor_id: userId
                }
            });
        } else {
            appointment = await Appointment.findOne({
                where: {
                    id: id,
                    patient_id: userId
                }
            });
        }

        if (!appointment) {
            return res.status(500).send('Appointment not found');
        }

        await appointment.destroy();

        return res.send('Appointment deleted');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// REVISAR CITAS PENDIENTES

const {Patient, Intervention} = require('../models');

const { Op } = require('sequelize');

appointController.getUpcomingAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            where: {
                [Op.and]: [
                    {
                        date: {
                            [Op.gte]: new Date(),
                        },
                    },
                    {
                        [Op.or]: [
                            {
                                patient_id: req.userId,
                            },
                            {
                                doctor_id: req.userId,
                            },
                        ],
                    },
                ],
            },
            include: [
                Intervention,
                {
                    model: Patient,
                    attributes: {
                        exclude: ["user_id", "role_id", "createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["patient_id", "intervention_id"],
            },
        });

        return res.json(appointments);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// REVISAR TODAS LAS CITAS DE LA CLÍNICA (Requiere ser Admin)

appointController.getAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.findAll();
      return res.json(appointments);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


module.exports = appointController;