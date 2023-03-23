const {User, Role, UserRole, Patient, Appointment, Intervention, Doctor} = require('../models');

const userController = {}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/////// ZONA USER ///////

// REGISTRO DE USUARIO (Genera la id de paciente, el rol de usuario y establece un método de pago predefinido)

userController.createUser = async(req,res)=>{
    try{
        const {name, surname, email, password, nif, direction, birth_date, phone} = req.body;

        const encryptedPassword = bcrypt.hashSync(password,10);

        const newUser = {

            name,
            surname,
            email,
            password: encryptedPassword,
            nif,
            direction,
            birth_date,
            phone
        }
        const user = await User.create(newUser)

        await UserRole.create({
            user_id : user.id,
            role_id : 3
        })

        await Patient.create({
            id: user.id,
            user_id : user.id,
            payment: "cash"
        })

        return res.json(user)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

// LOGIN DE USUARIO (Almacena la id y los roles en el token)

userController.login = async(req,res)=>{
    try {
        const{ email, password } = req.body;

        const user = await User.findOne(
            {
                where:{
                    email: email
                },
                include: [Role]
            }
        );
        if(!user){
            return res.send("Wrong credentials")
        }
        const isMatch = bcrypt.compareSync(password,user.password);

        if(!isMatch){
            return res.send("Wrong credentials")
        }

        const userRoles = user.Roles;

        const token = jwt.sign(
            {
                userId: user.id,
                name: user.name,
                email: user.email,
                roles: userRoles.map((role)=> role.privilege)
            },
            'secreto',
            {expiresIn: '2h'}
        );
    return res.json(token)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// BORRADO DE USUARIO (Sólo disponible para el Admin)

userController.deleteUser = async(req, res) =>{
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({where: {id: userId}})
        return res.json(deleteUser);
    } catch (error) {
        return res.status(500).send(error.message)

    }
}

// PERFIL DE USUARIO (Acceso sólo para el propio usuario)

userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(user);
    } catch (erro) {
        return res.status(500).json(    
            {
                success: false,
                message:"Something went wrong",
                error_message: error.message
            }
        )
    }
}

// ACTUALIAR DATOS DE USUARIO (Acceso sólo para el propio usuario)

userController.updateUser = async (req, res) => {
    try {
        const { name, surname, email, password, nif, direction, birth_date, phone } = req.body;
        const userId = req.userId;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUSer = await User.update(
            {

            name,
            surname,
            email,
            password: encryptedPassword,
            nif,
            direction,
            birth_date,
            phone

            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUSer) {
            return res.send('User not updated')
        }

        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// VER CITAS (Los usuarios ven sus propias citas y los doctores verán las que tienen asignadas)

userController.getAppointment = async (req, res) => {
  try {
    let userAppointment;

      userAppointment = await Appointment.findAll({
        where: {
          patient_id: req.userId,
        },
        include: [
          {
              model: Intervention,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Patient,
            include: [
              {
                  model: User,
                  attributes: ['name', 'surname'],
              },
            ],
            attributes: {
              exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
            },
          },
          {
            model: Doctor,
            include: [
              {
                  model: User,
                  attributes: ['name', 'surname'],
              },
            ],
            attributes: {
              exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
            },
          },
        ],
        attributes: {
          exclude: ['patient_id', 'intervention_id'],
        },
      });

    return res.json(userAppointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


// VER CITAS (Como doctor)


userController.getAppointmentDoctor = async (req, res) => {
  try {
    let userAppointmentDoctor;

      userAppointmentDoctor = await Appointment.findAll({
        where: {
          doctor_id: req.userId,
        },
        include: [
          {
              model: Intervention,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Patient,
            include: [
              {
                  model: User,
                  attributes: ['name', 'surname'],
              },
            ],
            attributes: {
              exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
            },
          },
          {
            model: Doctor,
            include: [
              {
                  model: User,
                  attributes: ['name', 'surname'],
              },
            ],
            attributes: {
              exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
            },
          },
        ],
      });

    return res.json(userAppointmentDoctor);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



// userController.getAppointment = async (req, res) => {
//     try {
//       let userAppointment;
  
//       if (req.roles.includes('Doctor')) {
//         userAppointment = await Appointment.findAll({
//           where: {
//             doctor_id: req.userId,
//           },
//           include: [
//             {
//                 model: Intervention,
//                 attributes: { exclude: ['createdAt', 'updatedAt'] },
//             },
//             {
//               model: Patient,
//               include: [
//                 {
//                     model: User,
//                     attributes: { exclude: ['id', 'password', 'updatedAt'] }
//             }],
//               attributes: {
//                 exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
//               },
//             },
//           ],
//           attributes: {
//             exclude: ['patient_id', 'intervention_id'],
//           },
//         });
//       } else {
//         userAppointment = await Appointment.findAll({
//           where: {
//             patient_id: req.userId,
//           },
//           include: [
//             {
//                 model: Intervention,
//                 attributes: { exclude: ['createdAt', 'updatedAt'] },
//             },
//             {
//               model: Patient,
//               include: [
//                 {
//                     model: User,
//                     attributes: ['name', 'surname'],
//                 },
//               ],
//               attributes: {
//                 exclude: ['user_id', 'role_id', 'createdAt', 'updatedAt'],
//               },
//             },
//           ],
//           attributes: {
//             exclude: ['patient_id', 'intervention_id'],
//           },
//         });
//       }
  
//       return res.json(userAppointment);
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
//   };

// ACTUALIZACIÓN FORMA DE PAGO (Para los clientes)

userController.updatePayment = async (req, res) => {
    try {
      const { payment } = req.body;
      
      const patient = await Patient.findOne({
        where: {
          user_id: req.userId
        }
      });
      
      if (!patient) {
        return res.send('Patient not found');
      }
      
      patient.payment = payment;
      await patient.save();
  
      return res.send('Patient payment updated');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  

/////// ZONA ADMIN ///////

// VER TODOS LOS USUARIOS

userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// VER TODOS LOS DOCTORES

userController.getDoctors = async (req, res) => {
    try {
        const doctors = await User.findAll({
            include: [
              {
                model: Role,
                where: {
                  privilege: "Doctor",
                },
              },
            ],
            attributes: { exclude: ['password'] },
          });
      return res.json(doctors);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

// AÑADIR ROLES A LOS USUARIOS

userController.addRole = async(req,res)=>{
    try{
        const {user_id, role_id} = req.body;

        const addRole = {
            user_id,
            role_id
        }
        
        const urole = await UserRole.create(addRole)

        return res.json(urole)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

// REVISAR ROLES DE USUARIOS (Por id)

userController.getUserRole = async(req, res) =>{
    try {
        const userId = req.params.id;

        const userrole= await User.findByPk(userId,{
          include:{all: true},
          attributes: {exclude: ['password']}
      })
        return res.json(userrole);
    } catch (error) {
        return res.status(500).send(error.message)

    }
}

/////// ZONA DOCTOR ///////

// ALTA COMO DOCTOR (Especialidad y número de colegiado. Requiere el ROL Doctor)

userController.createDoctor = async(req,res)=>{
    try{
        const {speciality_id, doctor_number} = req.body;
        const userId = req.userId;

        const newDoctor = {
            id: userId,
            user_id: userId,
            speciality_id,
            doctor_number,
        }
        
        const doctor = await Doctor.create(newDoctor)

        return res.json(doctor)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;
