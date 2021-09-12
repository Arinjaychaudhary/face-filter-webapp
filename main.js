noseX = 0;
noseY = 0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/8C85Nb5v/clown-nose.png");
hat=loadImage("https://i.postimg.cc/1tbnVZRW/hat.png");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseModel=ml5.poseNet(video,modelLoaded);
    
    poseModel.on('pose',gotPoses);
}

function draw(){
 image(video,0,0,400,400);
 //fill(255,0,0);
 //stroke(255,0,0);
 //circle(noseX , noseY , 20);
 image(clown_nose,noseX-110,noseY-80,40,40);
 image(hat,noseX-205,noseY-350,250,250);
}

function take_snapshot(){
  save("filterimage.png")
}

function modelLoaded()
{
console.log("Model loaded successfuly");
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+ noseX );
    console.log("nose y = "+ noseY);
  }
}