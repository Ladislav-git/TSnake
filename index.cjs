const readline = require("readline");

// clears the console
  const clearConsole = () => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  }

// tetraamino blocks

  const tetraamino = []
  // assets

    tetraamino[0] = {
      rotations: [ [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
      ],
      [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
      ],
       [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ],
      [
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
      ],
      ]
    };

    tetraamino[1] = {
      rotations: [ [
        [1,1],
        [1,1]
      ],
      [
        [1,1],
        [1,1]
      ],
      [
        [1,1],
        [1,1]
      ],
      [
        [1,1],
        [1,1]
      ],
      ]
    };

    tetraamino[2] = {
      rotations: [ [
        [0,0,1],
        [0,1,1],
        [0,1,0]
      ],
      [
        [0,0,0],
        [1,1,0],
        [0,1,1]
      ],
       [
        [1,0,0],
        [1,1,0],
        [0,1,0]
      ],
      [
        [0,0,0],
        [0,1,1],
        [1,1,0]
      ],
      ]
    };

    tetraamino[3] = {
     rotations: [ [
        [0,1,0],
        [0,1,0],
        [1,1,0]
      ],
      [
        [1,0,0],
        [1,1,1],
        [0,0,0]
      ],
       [
        [0,1,1],
        [0,1,0],
        [0,1,0]
      ],
      [
        [0,0,0],
        [1,1,1],
        [0,0,1]
      ],
      ]
    };

//this is for testing assets
// let a = 0
// let b = 0
// for (i = 0; i<tetraamino[a].rotations[b].length; i++) {
// console.log(tetraamino[a].rotations[b][i])
// }