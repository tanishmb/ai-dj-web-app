song="";
song2=""
function preload(){
    song=loadSound("Care Ni Kardi.mp4")
}

function setup(){
canvas=createCanvas(500,400);
 canvas.center();
  video=createCapture(VIDEO);
    video.hide();
    
   
}

function draw(){
    image(video,0,0,500,500);
}
function play(){
    song.play()
}


