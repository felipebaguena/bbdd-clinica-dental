'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Doctor,
        {
          foreignKey:"doctor_id"
        })
      Appointment.belongsTo(models.Patient,
        {
          foreignKey:"patient_id"
        })
      Appointment.belongsTo(models.Intervention,
        {
          foreignKey:"intervention_id"
        })  
    }
  }
  Appointment.init({
    doctor_id: DataTypes.INTEGER,
    patient_id: DataTypes.INTEGER,
    intervention_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};