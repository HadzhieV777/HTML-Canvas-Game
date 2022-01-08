const dragonSprite = new Image();
dragonSprite.src = '/FlappyBird/img/dragon.png'

class Bird {
   constructor(){
       this.x = 150;
       this.y = 200;
       this.vy = 0;//bird falling speed
       this.originalWidth = 941;
       this.originalHeight = 680;
       this.width = this.originalWidth/20;
       this.height = this.originalHeight/20;
       this.weight = 1;// pulls the player down 
      this.frameX = 0;
   }
   update(){// will calculate the possition speed of the character in every frame
    let curve = Math.sin(angle) * 20;
    if(this.y > canvas.height - (this.height * 3) + curve){//to stop player get out from bottom side ofcanvas
        this.y = canvas.height - (this.height * 3) + curve;
        this.vy = 0;
    } else {
     this.vy += this.weight;
     this.y += this.vy;
    }
    if (this.y < 0 + this.height){//stop the player to go out from the up side of canvas
        this.vy *= 0.9;//to manage better the movement 
        this.y = 0 + this.height;
        this.vy = 0;//to make player fall instant after space is released 
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
   }
   draw(){
       ctx.fillStyle = 'red';
       //ctx.fillRect(this.x, this.y, this.width, this.height);
       ctx.drawImage(dragonSprite, this.frameX * this.originalWidth , 0, this.originalWidth, this.originalHeight, this.x - 30, this.y - 22, this.
        width * 2, this.height * 3);
   }
   flap(){
       this.vy -= 2;//push player upwards
       if(this.frameX >= 3) this.frameX = 0;
       else if (frame % 4 === 0) this.frameX++;
   }
}
const bird = new Bird();