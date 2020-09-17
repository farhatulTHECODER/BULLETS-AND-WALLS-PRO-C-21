var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

//CREATING THE CAR OBJECT
bullet = createSprite(50,200,50,20);
 
//CREATING THE WALL OBJECT
wall = createSprite(750,200,80,200);

}

/*ALL THE FUNCTIONS
     ARE DRAWN INSIDE IT*/ 
  function draw() {

    //SETTING THE BACKGROUND
  background(255,255,255);  

  //SHAPE COLOR
  wall.shapeColor = color(80,80,80);

bullet.velocityX=speed;

 if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
   var damage=0.5*width*speed*speed/(thickness*thickness*thickness);

   if (damage>10){
     wall.shapeColor=color(225,0,0);
   }
   
   if (damage<10){
     wall.shapeColor=color(0,225,0);
   }



    }

    drawSprites();
  }
 




/* ####  #         #   #
   #    # #           #
   ##  # # #      ( #
   #  #     #         ## )
   #              ( #
    */