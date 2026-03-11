function bukaHadiah(){

document.getElementById("hadiah").style.display="block";

startConfetti()

}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<150;i++){

pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*3+1
})

}

function startConfetti(){

setInterval(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height)

for(let p of pieces){

ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`

ctx.fillRect(p.x,p.y,p.size,p.size)

p.y+=p.speed

if(p.y>canvas.height) p.y=0

}

},30)

}
