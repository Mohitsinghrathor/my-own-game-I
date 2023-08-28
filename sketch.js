var bgImg,bg
var hero,heroImg
var levithan,levithanImg
var score
var start,startImg

var restart,restartImg
var spaceS,spaceSImg,timeS,timeSImg,soulS,soulSImg,realityS,realitySImg,mindS,mindSImg,powerS,powerSImg
var levithanGroup
var gameOver,gameOverImg
var PLAY=1
var END=0
var gameState=0



var bgm
function preload(){
bgImg= loadImage("bgp.png");
heroImg = loadImage("iron 2.png")
 leviImg = loadImage("o.png")   
gameOverImg = loadImage("go.png")
  bgm = loadSound("BGM.mp3")
startImg = loadImage("s.png")
restartImg = loadImage("rest.png")


}

function setup() {

    createCanvas(windowWidth, windowHeight);
    
    levithanGroup=new Group();
    

    
    bg = createSprite(windowWidth/2,windowHeight/2);
    bg.addImage("bgp",bgImg);
    bg.scale=2

    start = createSprite(windowWidth/2,windowHeight/2)
    start.addImage("start",startImg)
    start.scale=3
   
    hero = createSprite(100,windowHeight/2)
    hero.addImage("iron",heroImg)
    hero.scale=0.7
    score = 0

    restart = createSprite(windowWidth/2,windowHeight*2+100)
    restart.addImage("restart",restartImg)
    
hero.setCollider("rectangle",0,0,hero.width-70,hero.height-60)
    bgm.loop()
    gameOver = createSprite(77141714,windowHeight/2)
 gameOver.addImage("over",gameOverImg)
}

function draw() {
    background(0)
    
   
    console.log("hello")
    if(!bgm.isPlaying()){
        console.log("not playing")
        bgm.loop()
    }
   
    if(keyDown("space")){gameState=PLAY}
    if(gameState===PLAY){
         restart.visible=false
         
        hero.y=World.mouseY
    if(bg.x<(windowWidth-windowWidth)+windowWidth/3+75){
        bg.x=windowWidth/2
    }
    gameOver.visible=false
     start.visible=false
    bg.velocityX=-3
    score = score + Math.round(getFrameRate()/60);
    bg.velocityX = -(4 + 3* score/500)
    
    

    leviS()
    if(levithanGroup.isTouching(hero)){
        gameState=END
    }
    
   
 if(gameState===END)  {
    levithanGroup.setVelocityXEach(0)
    bg.velocityX=0
    gameOver.visible=true
 gameOver.x=windowWidth/2
 restart.y=windowHeight/2+30
 restart.visible=true
 if(keyDown("space")){
    gameState=PLAY
levithanGroup.destroyEach()
score=0
}
 
 }  } 
 


    drawSprites();
    textSize(20);
    fill(255);
    text("Score:"+ score, windowWidth-100,windowHeight-windowHeight+50);

}

function leviS(){


    if(World.frameCount % 25 === 0){
        var levithan = createSprite (windowWidth+20,(Math.round(random(windowHeight-windowHeight,windowHeight), 10, 10)));
        levithan.velocityX=-15
        levithan.addImage("levi",leviImg)
        levithan.scale=2
        levithan.velocityX = -(15 + 5* score/50) 
        levithanGroup
       
        
        levithan.setCollider("rectangle",0,0,levithan.width-90,levithan.height-20)
        levithanGroup.add(levithan)
        
    }
}

