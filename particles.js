const particlesArray = [];

class Particle {
    constructor(){
        this.x = bird.x;// will originate from player possition/ Horisontal
        this.y = bird.y;//Vertical possition
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(' + hue + ',100%, 50%, 0.8)';

    }
    update(){// calculating the frames for each particle
        this.x -= gamespeed;//particles will move left
        this.y += this.speedY;//make the particle move up and down 
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles(){
    particlesArray.unshift(new Particle);// unshift takes what has been passed to it and adds it as a new item to the beggining of the array
    for (i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();//takes x and y possitions
        particlesArray[i].draw();
    }
    //if more than 200, remove 20
    if (particlesArray.length > 200){
        for (let i = 0; i < 20; i++){
            particlesArray.pop(particlesArray[i]);//pop removes the las element of the array
        }
    }
}

/* **** **** **** 22:07 **** **** ****   */