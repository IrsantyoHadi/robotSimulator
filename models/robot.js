module.exports = class Robot {
  constructor(X, Y, F) {
    this.X = X,
    this.Y = Y,
    this.F = F
  }

  place(X, Y, F) {
    if (!X || !Y || !F) {
      console.error('wrong input')
      return
    } else {
      const coordX = +X
      const coordY = +Y
      const face = F
      const validFace = /NORTH|EAST|SOUTH|WEST/
      if (!validFace.test(face)) {
        console.error(`${face} is invalid`)
        return
      }
      if (coordX > 4 || coordX < 0) {
        console.error(`invalid coordinat X , coordinat value must within the range 0-4`)
        return
      }
      if (coordY > 4 || coordY < 0) {
        console.error(`invalid coordinat Y , coordinat value must within the range 0-4`)
        return
      }

      this.X = coordX
      this.Y = coordY
      this.F = face
    }
  }

  turn(direction) {
    if (direction === 'RIGHT') {
      const possibleDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST', 'NORTH']
      let currentDirection = possibleDirection.indexOf(this.F)
      currentDirection++
      this.F = possibleDirection[currentDirection]
      return
    }
    else if (direction === 'LEFT') {
      const possibleDirection = ['NORTH', 'WEST', 'SOUTH', 'EAST', 'NORTH']
      let currentDirection = possibleDirection.indexOf(this.F)
      currentDirection++
      this.F = possibleDirection[currentDirection]
      return
    }
  }

  move() {
    switch (this.F) {
      case 'NORTH':
        if (this.Y + 1 > 4) {
          return
        }
        this.Y++
        break;
      case 'SOUTH':
        if (this.Y - 1 < 0) {
          return
        }
        this.Y--
        break;
      case 'WEST':
        if (this.X - 1 < 0) {
          return
        }
        this.X--
        break;
      case 'EAST':
        if (this.X + 1 > 4) {
          return
        }
        this.X++
        break;
      default:
        break;
    }
  }

  report(){
    let report = ''
    for(let key in this){
      report += ',' + this[key] 
    }
    console.log(report.slice(1))
  }
}