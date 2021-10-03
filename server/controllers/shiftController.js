const { Shift } = require('../models/index')

class Controller {

  static async getAll(req, res, next) {
    try {
      const data = await Shift.findAll({
        order: [
          ['startTimestamp', 'ASC']
        ]
      })
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
    }
  }

  static async create(req, res, next) {
    try {
      const payload = req.body

      // add additional params
      payload.startTimestamp = (new Date(payload.dateShift))
      payload.startTimestamp.setHours(payload.startTime.slice(0, 2))
      payload.startTimestamp.setMinutes(payload.startTime.slice(3, 5))
      payload.startTimestamp = payload.startTimestamp.getTime() / 1000

      payload.endTimestamp = (new Date(payload.dateShift))
      payload.endTimestamp.setHours(payload.endTime.slice(0, 2))
      payload.endTimestamp.setMinutes(payload.endTime.slice(3, 5))
      payload.endTimestamp = payload.endTimestamp.getTime() / 1000

      payload.isPublished = false
      payload.UserId = 1

      // check if clashed
      const data = await Shift.findAll({})
      for (let i = 0; i < data.length; i++) {
        const shift = data[i];
        if (payload.startTimestamp > shift.startTimestamp && payload.startTimestamp < shift.endTimestamp) {
          return res.status(400).json({ message: 'clashed!' })
        }
        if (payload.endTimestamp > shift.startTimestamp && payload.startTimestamp < shift.endTimestamp) {
          return res.status(400).json({ message: 'clashed!' })
        }
      }

      // create
      await Shift.create(payload)
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    try {
      const payload = req.body
      const id = +req.params.id

      // add additional params
      payload.startTimestamp = (new Date(payload.dateShift))
      payload.startTimestamp.setHours(payload.startTime.slice(0, 2))
      payload.startTimestamp.setMinutes(payload.startTime.slice(3, 5))
      payload.startTimestamp = payload.startTimestamp.getTime() / 1000

      payload.endTimestamp = (new Date(payload.dateShift))
      payload.endTimestamp.setHours(payload.endTime.slice(0, 2))
      payload.endTimestamp.setMinutes(payload.endTime.slice(3, 5))
      payload.endTimestamp = payload.endTimestamp.getTime() / 1000

      payload.isPublished = false
      payload.UserId = 1

      console.log(payload.startTimestamp, payload.endTimestamp);

      // check if clashed
      const data = await Shift.findAll({})
      for (let i = 0; i < data.length; i++) {
        const shift = data[i];
        if (payload.startTimestamp > shift.startTimestamp && payload.startTimestamp < shift.endTimestamp) {
          return res.status(400).json({ message: 'clashed!' })
        }
        if (payload.endTimestamp > shift.startTimestamp && payload.startTimestamp < shift.endTimestamp) {
          return res.status(400).json({ message: 'clashed!' })
        }
      }

      // update
      await Shift.update(payload,
        { where: { id: id } }
      )
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = +req.params.id

      // delete
      await Shift.destroy({ where: { id: id } })
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }

  static async publishAll(req, res, next) {
    try {
      const action = req.params.action
      const command = (action == 'publish') ? true : false

      await Shift.update({isPublished: command},
        {where: {}}
      )
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }

  static async publish(req, res, next) {
    try {
      const id = +req.params.id

      // publish
      await Shift.update({isPublished: true},
        { where: { id: id } }
      )
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }

  static async unpublish(req, res, next) {
    try {
      const id = +req.params.id

      // unpublish
      await Shift.update({isPublished: false},
        { where: { id: id } }
      )
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller
