const { User } = require('../models/index')

class Controller {

  static register(req, res, next) {
    let { email, password } = req.body
    let input = { email, password, role }

    User.create(input, {
      returning: true
    })
    .then((data) => {
      return res.status(201).json({message: "User created:" + data.email + 'role:' + data.role})
    })
    .catch((err) => {
      next(err)
    })
  }
}

module.exports = Controller
