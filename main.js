function setup() {
    video = createCapture(VIDEO);
    video.size(870, 500);
    video.position(150, 150)
    
    canvas = createCanvas(550, 500);
    canvas.position(930,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#12927F')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}