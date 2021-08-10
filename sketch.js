var spaceStationImage, spaceStation;
var bgImg;
var spaceCraftLeftImg, spaceCraftRightImg, spaceCraftBothImg, spaceCraftNoneImg;
var spaceCraft;
var gameState = 0;
var arrow, arrowImg;

function preload() {
  spaceStationImage = loadImage('iss.png');
  bgImg = loadImage('spacebg.jpg');
  spaceCraftNoneImg = loadImage('spaceCraft1.png');
  spaceCraftBothImg = loadImage('spaceCraft2.png');
  spaceCraftLeftImg = loadImage('spaceCraft4.png');
  spaceCraftRightImg = loadImage('spaceCraft3.png');
  arrowImg = loadImage('Arrow.png');
}
function setup() {
  createCanvas(1400, 800);

  spaceCraft = createSprite(700, 670, 50, 50);
  spaceCraft.addImage('spaceCraft', spaceCraftBothImg);
  spaceCraft.scale = 0.35

  spaceStation = createSprite(600, 310, 50, 50);
  spaceStation.addImage('spaceStation', spaceStationImage);
  spaceStation.scale = 1.2;

  arrow = createSprite(520, 430, 20, 20)
  arrow.addImage('up', arrowImg);
  arrow.scale = 0.4
}

function draw() {
  background(bgImg);
  console.log(gameState)
  console.log(spaceCraft.x + ',' + spaceCraft.y)
  if (gameState === 0) {
    spaceCraft.addImage('none', spaceCraftNoneImg)
    spaceCraft.changeAnimation('none', spaceCraftNoneImg)
    textSize(30)
    fill('white')
    text('Use the arrow keys to move the space shuttle and dock it here', 240, 540)
    text('Press space key to start', 500, 570)
  }
  if (keyCode === 32) {
    gameState = 1
    arrow.visible = false
  }
  if (gameState === 1) {
    if (keyWentDown('left')) {
      spaceCraft.velocityX = -2
      spaceCraft.addImage('left', spaceCraftLeftImg)
      spaceCraft.changeAnimation('left', spaceCraftLeftImg)
    }
    if (keyWentUp('left')) {
      spaceCraft.velocityX = 0
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }

    if (keyWentDown('right')) {
      spaceCraft.velocityX = 2
      spaceCraft.addImage('right', spaceCraftRightImg)
      spaceCraft.changeAnimation('right', spaceCraftRightImg)
    }
    if (keyWentUp('right')) {
      spaceCraft.velocityX = 0
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }

    if (keyWentDown('up')) {
      spaceCraft.velocityY = -2
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }
    if (keyWentUp('up')) {
      spaceCraft.velocityY = 0
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }

    if (keyWentDown('down')) {
      spaceCraft.velocityY = 2
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }
    if (keyWentUp('down')) {
      spaceCraft.velocityY = 0
      spaceCraft.addImage('both', spaceCraftBothImg)
      spaceCraft.changeAnimation('both', spaceCraftBothImg)
    }
    /*if (keyCode === 38) 
    { 
      spaceCraft.y = spaceCraft.y - 3
      spaceCraft.addImage('up', spaceCraftBothImg)
      spaceCraft.changeAnimation('up',spaceCraftBothImg)
    }
    if (keyCode === 39) 
    {
      spaceCraft.x = spaceCraft.x + 3
      spaceCraft.addImage('right', spaceCraftRightImg)
      spaceCraft.changeAnimation('right',spaceCraftRightImg)
    }
    if (keyCode === 40) 
    {
      spaceCraft.y = spaceCraft.y + 3
      spaceCraft.addImage('down', spaceCraftBothImg)
      spaceCraft.changeAnimation('down',spaceCraftBothImg)
    }*/

  }
  if ((spaceCraft.x === 510 || spaceCraft.x === 511 || spaceCraft.x === 512 || spaceCraft.x === 513 || spaceCraft.x === 514 || spaceCraft.x === 515) && (spaceCraft.y === 460 || spaceCraft.y === 461 || spaceCraft.y === 462 || spaceCraft.y === 463 || spaceCraft.y === 464 || spaceCraft.y === 465)) {
    gameState = 2
    spaceCraft.velocityX = 0
    spaceCraft.velocityY = 0
  }
  if (gameState === 2) {
    textSize(50);
    fill('white');
    text('Docking Sucessful!!!', 500, 700)
  }
  drawSprites();

}