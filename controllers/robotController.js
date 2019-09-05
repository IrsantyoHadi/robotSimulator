const robot = require('../models/robot');

module.exports = class robotController {
  static place(args) {
    const input = args.split(',')
    const newRobot = new robot()
    newRobot.place(...input)
    return newRobot
  }

  static turn(newRobot, direction) {
    newRobot.turn(direction)
    return newRobot
  }

  static move(newRobot) {
    newRobot.move()
    return newRobot
  }

  static report(newRobot) {
    newRobot.report()
  }
}