const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,form;
var bgMusic;
var state=0;
var y=500;
var letter1;
var letter2;
var letter3;
var letter4;


function preload(){

    backgroundImg=loadImage("Game Assets/BackgroundTile.png")
    crossImg=loadImage("Game Assets/Cross.png")
    GraveImg=loadImage("Game Assets/tombstone.png")
    mountainImg=loadImage("Game Assets/Mountain.png")
    // tiles=loadImage("Game Assets/GroundTileset2.png")
  bgMusic=loadSound("Mp3/01_Body of Water.mp3")
 }

function setup(){
   createCanvas(displayWidth,displayHeight+250);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(displayWidth/2-30,displayHeight+50,displayWidth+50,displayHeight);
  
    form=new Form();
    player = new Player(700,300);
  


    
    
}

function draw(){
    Engine.update(engine);
    console.log(frameCount);
   if(state===0){
 
        background(backgroundImg);
        y=y-5;
        
       
        if(y<-300){
            y=-300
    //        bgMusic.play();
        }
        
        camera.position.y=displayHeight+y;
        camera.position.x=player.body.position.x;       
     
        
     //   camera.position.y= camera.position.y-1;

        image(mountainImg,0,displayHeight/2-400,displayWidth,displayHeight-150)
        ground.display();
       
        image(crossImg,displayWidth-displayWidth+100,displayHeight/2-45,100,200)

        
    
        image(GraveImg,displayWidth-displayWidth+275,displayHeight/2-35,400,300)
      
        player.display();
        
        form.display();
     
   
   }

          
       if (frameCount===700){
           state=0;
       }
 
  
      
}
function keyPressed(){
    if (keyIsDown(RIGHT_ARROW)){
        player.changePosition(5,0);

    }
}



