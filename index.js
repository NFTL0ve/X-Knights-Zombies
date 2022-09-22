//Create context-
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//add gravity
let gravity = .35



//call class player
class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 300,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 45;
    this.punch = {
      position: this.position,
      width: 50,
      height: 15,
    };
  }

  // call the image
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    //draw the punch
    c.fillStyle = "blue";
    c.fillRect(
      this.punch.position.x,
      this.punch.position.y,
      this.punch.width,
      this.punch.height
    );
  }
  //call update function to update character
  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

class Alien {
    constructor({ position }) {
    this.velocity = {
        x:0,
        y:0
    }
  
    const image = new Image()
    image.src = './img/alien.png'
    image.onload = () => {

     const scale = .08
      
        this.image = image
        
        this.width = 2048 * scale
        this.height = 2048 * scale
        this.position = {
            x: position.x,
            y: position.y
         }} }

         // call the image
draw() {  
   //c.fillStyle = 'red'
    //c.fillRect(this.position.x, this.position.y, this.height, this.width)
    c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height)


}


//call update function to update character
    update({velocity}) {
       if (this.image){

        this.draw()

        this.position.x += velocity.x
        this.position.y += velocity.y
    }
}
}

//create platforms
class Platform {
  constructor(horizontalPosition) {
    this.position = {
      x: horizontalPosition,
      y: 550,
    };
    this.width = 150;
    this.height = 40;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
  }
}

class Platformgreen {
    constructor(horizontalPosition, verticalPosition) {
      this.position = {
        x: horizontalPosition,
        y: verticalPosition,
      };
      this.width = 50;
      this.height = 500
      
    }
  
    draw() {
      c.fillStyle = "green";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
      this.draw();
    }
  }

  class Platformpurple {
    constructor(horizontalPosition, verticalPosition) {
      this.position = {
        x: horizontalPosition,
        y: verticalPosition,
      };
      this.width = 50;
      this.height = 50
      
    }
  
    draw() {
      c.fillStyle = "purple";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
      this.draw();
    }}

    class Platformpink {
        constructor(horizontalPosition, verticalPosition) {
          this.position = {
            x: horizontalPosition,
            y: verticalPosition,
          };
          this.width = 30;
          this.height = 30
          
        }
      
        draw() {
          c.fillStyle = "gold";
          c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        update() {
          this.draw();
        }}

        class Platformsilver {
            constructor(horizontalPosition, verticalPosition) {
              this.position = {
                x: horizontalPosition,
                y: verticalPosition,
              };
              this.width = 40;
              this.height = 40
              
            }
          
            draw() {
              c.fillStyle = "silver";
              c.fillRect(this.position.x, this.position.y, this.width, this.height);
            }
            update() {
              this.draw();
            }}

    class Roof {
        constructor() {
          this.position = {
            x: 0,
            y: 0,
          };
          this.width = 500000000;
          this.height = 10
          
        }
      
        draw() {
          c.fillStyle = "black";
          c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        update() {
          this.draw();
        }

  }

class Projectile {
    constructor({ position, velocity }){
this.position = position
this.velocity = velocity
this.radius = 7}


    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 4)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()
    }
    update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
}
}

/* class Grid {
    constructor() {

        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x:0 ,
            y:0
        }
        
        this.aliens = []
        
        const columns = Math.floor(Math.random()+ 2)
        const rows = Math.floor(Math.random()+ 2)
        this.width = columns * 5
        for (let x = 50; x > columns; x--) {
            for (let y = 5; y > rows; y--) {
            this.aliens.push(new Alien({
                position: {
                    x: 100 * x,
                    y: 100 * y
                }
            } 
            )
            )
        }
    }
console.log(this.aliens)
    }
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.x = 0

        if (this.position.y + this.width >= canvas.width || this.position.y <= 0) {
            this.velocity.y = this.velocity.y
            this.velocity.x = -.4 + .01
        }
    }
}

*/

const player = new Player()
const projectiles = []
const platform = new Platform(20 * 1.2);
const platform1 = new Platform(400 * 1.2);
const platform2 = new Platform(900 * 1.2);
const platform3 = new Platform(1400 * 1.2);
const platform4 = new Platform(1750 * 1.2);
const platform5 = new Platform(2100 * 1.2);
const platform6 = new Platform(3550 * 1.2);
const platform7 = new Platform(4000 * 1.2);
const platform8 = new Platform(4300 * 1.2);
const platform9 = new Platform(4700 * 1.2);
const platform10 = new Platform(8000 * 1.2);
const platformgreen = new Platformgreen (350, 350)
const platformgreen1 = new Platformgreen(700, 400);
const platformgreen2 = new Platformgreen(900, 300);
const platformgreen3 = new Platformgreen(1400, 400);
const platformgreen4 = new Platformgreen(2000, 400);
const platformgreen5 = new Platformgreen(3300, 500);
const platformgreen6 = new Platformgreen(3900, 500);
const platformgreen7 = new Platformgreen(4000, 500);
const platformgreen8 = new Platformgreen(4500, 300);
const platformgreen9 = new Platformgreen(5000, 250);
const platformgreen10 = new Platformgreen(5500, 350);
const platformpurple = new Platformpurple(200, 300)
const platformpurple1 = new Platformpurple(600, 400);
const platformpurple2 = new Platformpurple(1700, 300);
const platformpurple3 = new Platformpurple(2500, 400);
const platformpink = new Platformpink(2900, 400);
const platformsilver = new Platformsilver(5800, 400);
const roof = new Roof
// const grids = [new Grid()]
// const myGrid = new Grid();
// myGrid.aliens  ---> here you prob. have an array of aliens

const keys = {

    right: {
    pressed: false
    },
    left: {
        pressed: false
        }
}

 /*function init() {
platformImage = 
player = new Player ()
platforms = [
    new Platform({
        x: 500,
        y: 70,
        image: platformImage
    }),
    new Platform({ x: platformImage.width - 3, y: 470, image: platformImage }),
    new Platform({
        x: platformImage.width * 2 + 100,
        y: 70,
        image: platformImage
    })

]
} /*/
//call animate function to constantly call
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platform.draw();
  platform1.draw();
  platform2.draw();
  platform3.draw();
  platform4.draw();
  platform5.draw();
  platform6.draw();
  platform7.draw();
  platform8.draw();
  platform9.draw();
  platform10.draw();
  platformgreen.draw();
  platformgreen1.draw();
  platformgreen2.draw();
  platformgreen3.draw();
  platformgreen4.draw();
  platformgreen5.draw();
  platformgreen6.draw();
  platformgreen7.draw();
  platformgreen8.draw();
  platformgreen9.draw();
  platformgreen10.draw();
  platformpurple.draw();
  platformpurple1.draw();
  platformpurple2.draw();
  platformpurple3.draw();
  platformpink.draw();
  platformsilver.draw();
  roof.draw();
  //projectiles shoot

  projectiles.forEach((projectile) => {
    projectile.update();
  });

  if (keys.right.pressed) {
    player.velocity.x = 5;
  } else if (keys.left.pressed) {
    player.velocity.x = -5;
  } else player.velocity.x = 0;

  //projectiles kill
  // projectiles.forEach((projectile, i) => {    

    // if (
    //   projectile.position.x - projectile.radius <=
    //   alien.position.x + alien.width
    // ) {
    //     grid.aliens.splice(i, 1);
    //     projectiles.splice(i, 1);

    // //   setTimeout(() => {
    // //     grid.aliens.splice(i, 1);
    // //     projectiles.splice(i, 1);
    // //   }, 0);
    // }

    

    
   
  // )
 ;
  //platform Animate
  
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platform.position.x -= 5;
    } else if (keys.left.pressed) {
      platform.position.x += 5;
    }
    if (keys.right.pressed) {
        platform1.position.x -= 5;
      } else if (keys.left.pressed) {
        platform1.position.x += 5;
      }
      if (keys.right.pressed) {
        platform2.position.x -= 5;
      } else if (keys.left.pressed) {
        platform2.position.x += 5;
      }
      if (keys.right.pressed) {
        platform3.position.x -= 5;
      } else if (keys.left.pressed) {
        platform3.position.x += 5;
      }
      if (keys.right.pressed) {
        platform4.position.x -= 5;
      } else if (keys.left.pressed) {
        platform4.position.x += 5;
      }
      if (keys.right.pressed) {
        platform5.position.x -= 5;
      } else if (keys.left.pressed) {
        platform5.position.x += 5;
      }
      if (keys.right.pressed) {
        platform6.position.x -= 5;
      } else if (keys.left.pressed) {
        platform6.position.x += 5;
      }
      if (keys.right.pressed) {
        platform7.position.x -= 5;
      } else if (keys.left.pressed) {
        platform7.position.x += 5;
      }
      if (keys.right.pressed) {
        platform8.position.x -= 5;
      } else if (keys.left.pressed) {
        platform8.position.x += 5;
      }
      if (keys.right.pressed) {
        platform9.position.x -= 5;
      } else if (keys.left.pressed) {
        platform9.position.x += 5;
      }
      if (keys.right.pressed) {
        platform10.position.x -= 5;
      } else if (keys.left.pressed) {
        platform10.position.x += 5;
      }
  }

  if (
    player.position.y + player.height <= platform.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform.position.y &&
    player.position.x + player.width >= platform.position.x &&
    player.position.x <= platform.position.x + platform.width
  ) {
    player.velocity.y = -14;
  }
  if (
    player.position.y + player.height <= platform1.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform1.position.y &&
    player.position.x + player.width >= platform1.position.x &&
    player.position.x <= platform1.position.x + platform1.width
  ) {
    player.velocity.y = -18;
    player.velocity.x = -10;
  }
  if (
    player.position.y + player.height <= platform2.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform2.position.y &&
    player.position.x + player.width >= platform2.position.x &&
    player.position.x <= platform2.position.x + platform2.width
  ) {
    player.velocity.y = -18;

  }
  if (
    player.position.y + player.height <= platform3.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform3.position.y &&
    player.position.x + player.width >= platform3.position.x &&
    player.position.x <= platform3.position.x + platform3.width
  ) {
    player.velocity.y = -12;
  }
  if (
    player.position.y + player.height <= platform4.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform4.position.y &&
    player.position.x + player.width >= platform4.position.x &&
    player.position.x <= platform4.position.x + platform4.width
  ) {
    player.velocity.y = -11;
  }
  if (
    player.position.y + player.height <= platform5.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform5.position.y &&
    player.position.x + player.width >= platform5.position.x &&
    player.position.x <= platform5.position.x + platform5.width
  ) {
    player.velocity.y = -16;
  }
  if (
    player.position.y + player.height <= platform6.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform6.position.y &&
    player.position.x + player.width >= platform6.position.x &&
    player.position.x <= platform6.position.x + platform6.width
  ) {
    player.velocity.y = -19;
    gravity = .35

  }
  if (
    player.position.y + player.height <= platform7.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform7.position.y &&
    player.position.x + player.width >= platform7.position.x &&
    player.position.x <= platform7.position.x + platform7.width
  ) {
    player.velocity.y = -17;
  }
  if (
    player.position.y + player.height <= platform8.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform8.position.y &&
    player.position.x + player.width >= platform8.position.x &&
    player.position.x <= platform8.position.x + platform8.width
  ) {
    player.velocity.y = -14;
  }
  if (
    player.position.y + player.height <= platform9.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform9.position.y &&
    player.position.x + player.width >= platform9.position.x &&
    player.position.x <= platform9.position.x + platform9.width
  ) {
    player.velocity.y = -13;
  }
  if (
    player.position.y + player.height <= platform10.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform10.position.y &&
    player.position.x + player.width >= platform10.position.x &&
    player.position.x <= platform10.position.x + platform10.width
  ) {
    player.velocity.y = -1;
    gravity = .35
  }

//---------------------------













//-------------------------

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platformgreen.position.x -= 5;
    } else if (keys.left.pressed) {
      platformgreen.position.x += 5;
    }
    if (keys.right.pressed) {
        platformgreen1.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen1.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen2.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen2.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen3.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen3.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen4.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen4.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen5.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen5.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen6.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen6.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen7.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen7.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen8.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen8.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen9.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen9.position.x += 5;
      }
      if (keys.right.pressed) {
        platformgreen10.position.x -= 5;
      } else if (keys.left.pressed) {
        platformgreen10.position.x += 5;
      }
  }

  if (
    player.position.y + player.height <= platformgreen.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen.position.y &&
    player.position.x + player.width >= platformgreen.position.x &&
    player.position.x <= platformgreen.position.x + platformgreen.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -10;
  }
  if (
    player.position.y + player.height <= platformgreen1.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen1.position.y &&
    player.position.x + player.width >= platformgreen1.position.x &&
    player.position.x <= platformgreen1.position.x + platformgreen1.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -10;

  }
  if (
    player.position.y + player.height <= platformgreen2.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen2.position.y &&
    player.position.x + player.width >= platformgreen2.position.x &&
    player.position.x <= platformgreen2.position.x + platformgreen2.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;

  }
  if (
    player.position.y + player.height <= platformgreen3.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen3.position.y &&
    player.position.x + player.width >= platformgreen3.position.x &&
    player.position.x <= platformgreen3.position.x + platformgreen3.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen4.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen4.position.y &&
    player.position.x + player.width >= platformgreen4.position.x &&
    player.position.x <= platformgreen4.position.x + platformgreen4.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen5.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen5.position.y &&
    player.position.x + player.width >= platformgreen5.position.x &&
    player.position.x <= platformgreen5.position.x + platformgreen5.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen6.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen6.position.y &&
    player.position.x + player.width >= platformgreen6.position.x &&
    player.position.x <= platformgreen6.position.x + platformgreen6.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;

  }
  if (
    player.position.y + player.height <= platformgreen7.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen7.position.y &&
    player.position.x + player.width >= platformgreen7.position.x &&
    player.position.x <= platformgreen7.position.x + platformgreen7.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen8.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen8.position.y &&
    player.position.x + player.width >= platformgreen8.position.x &&
    player.position.x <= platformgreen8.position.x + platformgreen8.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen9.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen9.position.y &&
    player.position.x + player.width >= platformgreen9.position.x &&
    player.position.x <= platformgreen9.position.x + platformgreen9.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }
  if (
    player.position.y + player.height <= platformgreen10.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformgreen10.position.y &&
    player.position.x + player.width >= platformgreen10.position.x &&
    player.position.x <= platformgreen10.position.x + platformgreen10.width
  ) {
    player.velocity.y = +2;
    player.velocity.x = -8;
  }



  //--------------------------






  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platformpurple.position.x -= 5;
    } else if (keys.left.pressed) {
      platformpurple.position.x += 5;
    }
    if (keys.right.pressed) {
        platformpurple1.position.x -= 5;
      } else if (keys.left.pressed) {
        platformpurple1.position.x += 5;
      }
      if (keys.right.pressed) {
        platformpurple2.position.x -= 5;
      } else if (keys.left.pressed) {
        platformpurple2.position.x += 5;
      }
      if (keys.right.pressed) {
        platformpurple3.position.x -= 5;
      } else if (keys.left.pressed) {
        platformpurple3.position.x += 5;
      }

  }

  if (
    player.position.y + player.height <= platformpurple.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformpurple.position.y &&
    player.position.x + player.width >= platformpurple.position.x &&
    player.position.x <= platformpurple.position.x + platformpurple.width
  ) {
    player.velocity.y = -30;
  }
  if (
    player.position.y + player.height <= platformpurple1.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformpurple1.position.y &&
    player.position.x + player.width >= platformpurple1.position.x &&
    player.position.x <= platformpurple1.position.x + platformpurple1.width
  ) {
    player.velocity.y = -30;

  }
  if (
    player.position.y + player.height <= platformpurple2.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformpurple2.position.y &&
    player.position.x + player.width >= platformpurple2.position.x &&
    player.position.x <= platformpurple2.position.x + platformpurple2.width
  ) {
    
    player.velocity.y = -30;

  }
  if (
    player.position.y + player.height <= platformpurple3.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformpurple3.position.y &&
    player.position.x + player.width >= platformpurple3.position.x &&
    player.position.x <= platformpurple3.position.x + platformpurple3.width
  ) {

    player.velocity.y = -30;
  }
  











  //---------------------------







  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      roof.position.x -= 5;
    } else if (keys.left.pressed) {
      roof.position.x += 5;
    }
  

  }

  if ( player.position.y + player.height + player.velocity.y <=
      roof.position.y
    
  ) {
    player.velocity.y = Math.random() * 5 + 20;
  }
  









  //--------------------------------



 
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platformpink.position.x -= 5;
    } else if (keys.left.pressed) {
      platformpink.position.x += 5;
    }


  }

  if (
    player.position.y + player.height <= platformpink.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformpink.position.y &&
    player.position.x + player.width >= platformpink.position.x &&
    player.position.x <= platformpink.position.x + platformpink.width
  ) {
    player.velocity.y = -4;
    gravity = gravity * .27
  }


  //---------------------------------

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      platformsilver.position.x -= 5;
    } else if (keys.left.pressed) {
      platformsilver.position.x += 5;
    }


  }

  if (
    player.position.y + player.height <= platformsilver.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platformsilver.position.y &&
    player.position.x + player.width >= platformsilver.position.x &&
    player.position.x <= platformsilver.position.x + platformsilver.width
  ) {
    player.velocity.y = -4;
    gravity = gravity * .2
  }


 /* //Grids of Aliens moving
  grids.forEach((grid) => {
    grid.update();
    grid.aliens.forEach((alien, i) => {
      alien.update({ velocity: grid.velocity });
    });
  }); */
// }
}
animate()
//Select keys when they are pressed§
addEventListener('keydown', ({ keyCode }) => {

    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = true
            break
          
        case 39:
             console.log('right')
             keys.right.pressed = true
            break
        case 38:
             console.log('up')
             player.velocity.y -= .85
            break

        case 40:
            console.log('down')
            player.velocity.y += 1
            break

        case 65:
                console.log('a')
                projectiles.push(
                new Projectile({
                    position: {
                       x: player.position.x,
                       y: player.position.y
                    },
                    velocity :{
                        x: 15,
                        y: 0
                    }
                
                    }
                ))
                break

    }
    console.log(keys.right.pressed)
})

//When keys are not pressed


addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            console.log('left')
           keys.left.pressed = false
            break
        case 39:
             console.log('right')
            keys.right.pressed = false
            break
        case 38:
             console.log('up')
             player.velocity.y -= .01
            break

        case 40:
            console.log('down')
            break

            case 65:
                console.log('a')
                
            break

    } console.log(keys.right.pressed)})