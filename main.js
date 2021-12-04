function preload() {
    
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position( 110,250);
    video = createCapture(VIDEO);
    video.hide();
    filter_colour="";
}

function draw() {
image(video, 0, 0, 640, 480);
tint(filter_colour);
}


function take_snapshot(){save( 'your_photo.png')}

function change_filter(){
filter= document.getElementById("filter_input").value;
}
