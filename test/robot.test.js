const chai = require("chai")
const RobotController = require("../controllers/robotController")

const expect = chai.expect

describe('Robot Testing', function () {
  describe('Placing robot', function () {
    it('should create new Object Robot with coordinates X,Y and Facing direction if command place called', function () {
      let newRobot = RobotController.place(`0,0,'NORTH'`)
      expect(newRobot).to.be.an('object')
      expect(newRobot.X).to.be.a('number')
      expect(newRobot.Y).to.be.a('number')
      expect(newRobot.F).to.be.a('string')
    })
    it("should not place a Robot if the command is invalid", function () {
      let newRobot = RobotController.place('asdjascbajkdbajkdbk');

      expect(newRobot).to.be.an("object");
      expect(newRobot.X).to.be.undefined;
      expect(newRobot.Y).to.be.undefined;
      expect(newRobot.F).to.be.undefined;
    })
    it("should not place a Robot if the coordinates is off the board 5x5", function () {
      let newRobot = RobotController.place('5,5,`WEST`');

      expect(newRobot).to.be.an("object");
      expect(newRobot.X).to.be.undefined;
      expect(newRobot.Y).to.be.undefined;
      expect(newRobot.F).to.be.undefined;
    })
  })

  describe('Turn Robot', function () {
    it("should turn the Robot 90 degrees from current direction", function () {
      let newRobot = RobotController.place(`0,0,NORTH`)
      RobotController.turn(newRobot, 'LEFT')
      expect(newRobot).to.be.an("object");
      expect(newRobot.F).to.equal("WEST");
    })
    it("should not turn the Robot if direction invalid", function () {
      let newRobot = RobotController.place(`0,0,NORTH`)
      RobotController.turn(newRobot, 'UP')
      expect(newRobot).to.be.an("object");
      expect(newRobot.F).to.equal("NORTH");
    })
  })

  describe('Move Robot', function(){
    it("should move one coordinate based on current face direction", function(){
      let newRobot = RobotController.place(`0,0,NORTH`)
      RobotController.move(newRobot)
      expect(newRobot).to.be.an("object");
      expect(newRobot.Y).to.equal(1);
    })
    it("should not move if coordinate more than board 5x5", function(){
      let newRobot = RobotController.place(`4,4,NORTH`)
      RobotController.move(newRobot)
      expect(newRobot).to.be.an("object");
      expect(newRobot.Y).to.equal(4);
    })
  })
})