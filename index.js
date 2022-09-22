//Create context-
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//add gravity
const gravity = .35



//call class player
class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 30,
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
constructor() {

    this.position = {
        x: 40,
        y: 300
    }
    this.width = 200
    this.height = 80

}

draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x,
        this.position.y, this.width, this.height)
}
update(){
    this.draw()


}}


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

class Grid {
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



const player = new Player()
const projectiles = []
const platform = new Platform 
const grids = [new Grid()]

const keys = {

    right: {
    pressed: false
    },
    left: {
        pressed: false
        }
}
/*
 function init() {
platformImage = src="img/platform.png"
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
}*/
//call animate function to constantly call
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platform.draw();
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
  projectiles.forEach((projectile, i) => {    

    if (
      projectile.position.x - projectile.radius <=
      alien.position.x + alien.width
    ) {
        grid.aliens.splice(i, 1);
        projectiles.splice(i, 1);

    //   setTimeout(() => {
    //     grid.aliens.splice(i, 1);
    //     projectiles.splice(i, 1);
    //   }, 0);
    }

    
  });
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
  }

  if (
    player.position.y + player.height <= platform.position.y &&
    player.position.y + player.height + player.velocity.y >=
      platform.position.y &&
    player.position.x + player.width >= platform.position.x &&
    player.position.x <= platform.position.x + platform.width
  ) {
    player.velocity.y = 0;
  }
  //Grids of Aliens moving
  grids.forEach((grid) => {
    grid.update();
    grid.aliens.forEach((alien, i) => {
      alien.update({ velocity: grid.velocity });
    });
  });
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
             player.velocity.y -= 1
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
             player.velocity.y -= 4.5
            break

        case 40:
            console.log('down')
            break

            case 65:
                console.log('a')
                
            break

    } console.log(keys.right.pressed)})