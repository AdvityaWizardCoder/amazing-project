function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(510,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(201, 8, 73);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(100, 50, 82);
    fill(22, 200, 245);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
    tint(tint_color);
}

function take_snapshot(){
    save("birthday frame.png");
}
function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}