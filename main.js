status="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modeloaded);
    document.getElementById("status").innerHTML="Status=Detecting objects";
}

function modeloaded(){
    console.log("Model loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}



function draw(){
    image(img,0,0,600,400);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}