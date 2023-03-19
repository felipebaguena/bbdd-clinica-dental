const isDoctor = (req, res, next) => {
    try {
      const isDoctor = req.roles.map((role) => role === 'Doctor').includes(true);
      if (isDoctor) {
        next();
      } else {
        return res.send('Permission denied');
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  module.exports = isDoctor;
  