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
    y: 30
    }
    this.velocity = {

        x:0,
        y:0
    }
    this.width = 30
    this. height = 45
    this.punch = {
        position: this.position,
        width: 50,
        height: 15
    }
    }
        


// call the image
draw() {  
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)

    //draw the punch
c.fillStyle = 'blue'
    c.fillRect(this.punch.position.x, this.punch.position.y, this.punch.width, this.punch.height)

}
//call update function to update character
    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Enemy {
    constructor() {
    this.position = {
    x: 0,
    y: 0
    }
    this.velocity = {
        x:0,
        y:0
    }
    this.rotation = 0
    const image = new Image()
    image.src = './img/xrider.jpg'
    image.onload = () => {

     const scale = 1
      
        this.image = image
        
        this.width = image.width
        this.height = image.height
        this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height /2
         }} }

         // call the image
draw() {  
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)

    c.save()
    c.translate(
        player.position.x + player.width / 2,
        player.position.y + player.height / 2
    )
    

}


//call update function to update character
    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

//create platforms
class Platform {
constructor(){

    this.position = {
        x:0,
        y:500
    }
    this.width = 300
    this.height = 20
}

draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
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


const player = new Player()
const projectiles = []
const platform = new Platform
const keys = {

    right: {
    pressed: false
    },
    left: {
        pressed: false
        }
}


//call animate function to constantly call

function animate() {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    platform.draw()
    player.update()
    projectiles.forEach(projectile => {projectile.update()})
    if (keys.right.pressed){player.velocity.x = 5}
    else if (keys.left.pressed){player.velocity.x = -5}
    else player.velocity.x = 0


        if( player.position.y + player.height <= platform.position.y
             && player.position.y + player.height + player.velocity.y 
             >= platform.position.y && player.position.x + player.width 
              >= platform.position.x && player.position.x <= platform.position.x
               + platform.width)
               
               {player.velocity.y = 0}
        }


animate()

//Select keys when they are pressed

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