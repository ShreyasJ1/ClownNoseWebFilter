nose_x = 0;
nose_y = 0;


function preload() {
img = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x-10;
        nose_y = results[0].pose.nose.y-10;

        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);

    }
}

function modelLoaded() {
    console.log('PoseNet is initialised');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img,nose_x,nose_y,30,30);

}

function take_snapshot() {
    save('Image1.png');

}