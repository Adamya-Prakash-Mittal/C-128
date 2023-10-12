var MU="";
var T="T";
var RX= "";
function preload(){
    MU=loadSound("music.mp3");
    
}
function setup(){
    C=createCanvas(300, 200);
    C.center();
    VC= createCapture(VIDEO);
    VC.hide();
    M= ml5.poseNet(VC, ML);
    M.on("pose", GR);
}
function draw(){
    image(VC, 0, 0, 300, 200);
    if(T=="T"){
    MU.play();
    T="F";
    }
}
function GR(R){
    if (R.length!==0) {
            console.log(R);
            if(R[0].pose.keypoints[10].score>0.2){
                RX=R[0].pose.rightWrist.x;
                console.log("Right wrist x: "+RX);
            }   
    }
}
function ML(){
    console.log("d");
}

