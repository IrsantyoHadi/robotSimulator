const argv = process.argv.slice(2)
const command = argv[0]
const args = argv.slice(1)
const Controller = require('./controllers/robotController')
const fs = require('fs');
var newRobot
let input = fs.readFileSync('./input.csv', 'utf8', null).split('\n')
const validCommands = /LEFT|RIGHT|MOVE|REPORT|PLACE/

if (input[0] !== '') {
  newRobot = Controller.place(input[0].split(' ')[1])
  input.slice(1).forEach((el) => {
    if (validCommands.test(el)) {
      switch (el.split(' ')[0]) {
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
        case 'PLACE':
          newRobot = Controller.place(el.split(' ')[1])
          break;
        default:
          break;
      }
    } else {
      console.error(`Command ${el} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|PLACE`);
    }
  })
} else {
  if (command !== 'PLACE') {
    console.error('please place the robot first')
    console.log(`expect 'PLACE' , received ${command}`);
    return
  } else {
    newRobot = Controller.place(args[0])
  }

  for(let i = 0 ; i < args.slice(1).length ; i++){
    let input = args.slice(1)
    if (validCommands.test(input[i])) {
      switch (input[i]) {
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
        case 'PLACE':
          newRobot = Controller.place(input[i+1])
          i++
          break;
        default:
          break;
      }
    } else {
      console.error(`Command ${input[i]} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|PLACE`);
    }
  }
}

