function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.size(200, 200);
    video.hide();
}

function draw(){
    stroke(235, 131, 52);
    white = color(255, 255, 255);
    strokeWeight(10);
    fill(white);
    rect(100, 100, 300, 300);
    let circleColour = color(235, 64, 52);
    fill(circleColour);
    noStroke();
    circle(400, 100, 40);
    circle(100, 100, 40);
    circle(100, 400, 40);
    circle(400, 400, 40);
    image(video, 150, 150, 200, 200);
}

function takeSnapshot(){
    save("image.png");
}
