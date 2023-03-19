const isAdmin = (req, res, next) => {
    try {
      const isAdmin = req.roles.map((role) => role === 'Admin').includes(true);
      if (isAdmin) {
        next();
      } else {
        return res.send('Permission denied');
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  module.exports = isAdmin;
  