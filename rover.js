const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  directions: ['N', 'E', 'S', 'W'],
  commands: ['r', 'r', 'f', 'f', 'l', 'f', 'r', 'f', 'f', 'l'],
  travelLog: [{ x: 0, y: 0 }]
};

const directionsFullName = ['North', 'East', 'South', 'West'];


function turnLeft(rover) {
  turn(rover.command);
  console.log('turnLeft was called!');
}

function turnRight(rover) {
  turn(rover.command);
  console.log('turnRight was called!');
}

function moveForward(rover) {
  roverMovement(rover.direction);
  console.log('moveForward was called');
}

function moveBackward(rover) {
  rover.direction = 'S';
  console.log('moveBackward was called');
}
//push track position rover
function trackingRover(rover){
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
}

//grid position rover
function roverMovement(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y--;
      trackingRover(rover);
      console.log(`rover position --> x: ${rover.x} y: ${rover.y}`);
      break;
    case 'S':
      rover.y++;
      trackingRover(rover);
      console.log(`rover position --> x: ${rover.x} y: ${rover.y}`);
      break;
    case 'W':
      rover.x--;
      trackingRover(rover);
      console.log(`rover position --> x: ${rover.x} y: ${rover.y}`);
      break;
    case 'E':
      rover.x++;
      trackingRover(rover);
      console.log(`rover position --> x: ${rover.x} y: ${rover.y}`);
      break;
    default:
      break;
  }
}

    // let travel;
    // for (let i = 0; i < rover.travelLog.length; i++) {
    //   travel += rover.travelLog[i];
    // }
    // console.log(`Rover a se ha movido ${travel}`);
    // console.log(`Rover propiedad se ha movido ${rover.travelLog}`);

//to know where are you as a number

function directionAsNumber(direction) {
  for (let i = 0; i < 4; i++) {
    if (rover.directions[i] === direction) return i;
  }
}

//turn position rover facing return N E S W
function turn(command) {
  let directionNumber = directionAsNumber(rover.direction);

  directionNumber =
    command === 'l'
      ? (directionNumber + 4 - 1) % 4
      : (directionNumber = (directionNumber + 1) % 4);

  rover.direction = rover.directions[directionNumber];
  console.log(`Rover is facing ${directionsFullName[directionNumber]}`);
}

//receive user commands array
function commandsFunction(commands) {
  if (!commands.length) {
    console.log('Rover wants move! pip pi');
  } else {
    for (let i = 0; i <= commands.length; i++) {
      if(!movingSingleCommand(commands[i])) break;
    }
  }

  console.log(`Rover propiedad se ha movido ${rover.travelLog}`);
}
//switch single command
function movingSingleCommand(command) {
  switch (command.toUpperCase()) {
    case 'F':
      moveForward(rover);
      break;
    case 'L':
      turnLeft(rover);
      break;
    case 'R':
      turnRight(rover);
      break;
    case 'B':
      moveBackward(rover);
      break;
    default:
      break;
  }
}

commandsFunction(rover.commands);
