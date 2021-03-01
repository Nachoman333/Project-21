var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edge1 = createSprite(0,300,1,600);
    edge1.visible = false;

    edge2 = createSprite(400,0,800,1);
    edge2.visible = false;

    edge3 = createSprite(800,300,1,600);
    edge3.visible = false;
    //create 4 different surfaces
    surface1 = createSprite(107.5,550,175,50);
    surface1.shapeColor = "orange";

    surface2 = createSprite(302.5,550,175,50);
    surface2.shapeColor = "green";

    surface3 = createSprite(497.5,550,175,50);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(692.5,550,175,50);
    surface4.shapeColor = "red";


    //create box sprite and give velocity
    box = createSprite(random(20,720),200,50,50);
    box.velocityY = random(3,6);
    box.velocityX = random(3,6);
    box.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box
    if(isTouching(box,surface1)){
        box.shapeColor = "orange";
        box.velocityY = box.velocityY*(-1);
    }

    if(isTouching(box,surface2)){
        box.shapeColor = "green";
        box.velocityY = box.velocityY*(-1);
    }

    if(isTouching(box,surface3)){
        box.shapeColor = "yellow";
        box.velocityY = box.velocityY*(-1);
    }

    if(isTouching(box,surface4)){
        box.shapeColor = "red";
        box.velocityY = box.velocityY*(-1);
    }

    if(isTouching(box,edge1)){
        box.velocityX = box.velocityX*(-1);
    }
    
    if(isTouching(box,edge2)){
        box.velocityY = box.velocityY*(-1);
    }
    
    if(isTouching(box,edge3)){
        box.velocityX = box.velocityX*(-1);
    }
    drawSprites();
}
function isTouching(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 && object2.x - object1.x <= object1.width/2 + object2.width/2 && object1.y - object2.y <= object1.height/2 + object2.height/2&&object2.y - object1.y <= object1.height/2 + object2.height/2){
        return true;
      }
      else{
        return false;
     }
}
