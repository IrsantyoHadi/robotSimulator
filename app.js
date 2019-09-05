const argv = process.argv.slice(2)
const command = argv[0]
const args = argv.slice(1)
const Controller = require('./controllers/robotController')

if (command !== 'PLACE') {
  console.error('please place the robot first')
  console.log(`expect 'PLACE' , received ${command}`);
  return
} else {
  var newRobot = Controller.place(args[0])
}

const validCommands = /LEFT|RIGHT|MOVE|REPORT/
args.slice(1).forEach(el => {
  if (validCommands.test(el)) {
    switch (el) {
      case 'LEFT':
        newRobot = Controller.turn(newRobot, 'LEFT')
        break;
      case 'RIGHT':
        newRobot = Controller.turn(newRobot, 'RIGHT')
        break;
      case 'MOVE':
        newRobot = Controller.move(newRobot)
        break;
      case 'REPORT':
        Controller.report(newRobot)
        break;
      default:
        break;
    }
  } else {
    console.error(`Command ${el} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|PLACE`);
  }
})