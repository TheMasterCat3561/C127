noseX=0
noseY=0

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
}

{
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = m15.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet esta inicializando');
}

function gotPoses(results)
{
    if(results.lenght > 0)
{
        console.log(results);
        nosex = results[o].pose.nose.x;
        nosey = results[e].pose.nose.y;
        console.log("nose x -" + results[o].pose.nose.x);
        console.log("nose y -" + results[e].pose.nose.y);
}
}

function draw(){
    Image(video, a,0, 0, 300, 300);
    file(255, 0, 0);
    stroke (255, 0, 0);
    circle(noseX, noseY, 20);
    
}




{
if(results.lenght > e)

console.log(results);
console.log("nose x =" + results[e].pose.nose.x);
console.log("nose y =" + results[e].pose.nose.y);
}