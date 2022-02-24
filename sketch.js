var box;

//runs once at the start of the code, is used for creating things
function setup() {
  createCanvas(windowWidth,windowHeight);
  box= createSprite(200,200,20,20);
}

function draw() 
{
  background(30);

  if (keyDown(LEFT_ARROW)){
    box.x -=4
  }
  if (keyDown(RIGHT_ARROW)){
    box.x +=4
  }

  if (keyDown(UP_ARROW)){
    box.y -=4
  }

  if (keyDown(DOWN_ARROW)){
    box.y +=4
  }


  drawSprites();
}




