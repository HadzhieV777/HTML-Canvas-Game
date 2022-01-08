const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) +20; //top height of the obstacle
        this.bottom = (Math.random() * canvas.height/3) + 20;//bot of the obstacle 
        this.x = canvas.width;//how wide will be the obstacles 
        this.width = 90;
        this.color = 'hsl(' + hue + ', 100%, 50%';
        this.counted = false;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);//bot obstacle
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);//top obstacle
    }
    update(){//will push obstacles to the left, because the game goes right
        this.x -= gamespeed;
        if (!this.counted && this.x < bird.x){ // we passed the obstacle  
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    if (frame % 150 === 0){//in every 50 frame 
        obstaclesArray.unshift(new Obstacle);//add new obstacle 
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();//calculate the current poossition of each obstacle 
    }
    if(obstaclesArray.length > 20){//preventing endless array, removes one obstacle on every 20 
        obstaclesArray.pop(obstaclesArray[0]);
    }
}   