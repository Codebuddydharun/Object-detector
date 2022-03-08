status="";
object=[];

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
        object=results;
    }
}



function draw(){
    image(img,0,0,600,400);
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status= Object detected";
            fill("#FF0000");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
            nofill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
