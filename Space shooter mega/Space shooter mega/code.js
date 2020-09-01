var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a553f8f2-44ab-45a0-b27e-ad7cbd22c8ac","b948a762-3337-4d3f-b332-2e357b53a6ed","c2590200-41c7-4c9c-b8da-11a21c5a23f7","a8ad09fc-662f-4598-ad8b-6b8c44095620","a354b1ef-a12a-45d4-b94f-8ac9373b8344","15878125-9a0e-480a-984e-0b337f9837bb","9c7121ce-a385-4d8c-819c-d1e191b9cd9a","9c7d6342-69bc-4587-97fa-c747f0d20e8f","ad98453a-d51e-4ecc-9dc3-cb699f71a45c","28c5fe4d-72fa-4e93-b4e9-d14073e5e5eb","8ee39e9a-80a4-4ece-976b-698690917c5a","563839ea-5041-4cbf-a11b-30bf9a5cab3e","8e624221-ec75-4a92-9992-4f72991a91e1","a9109b9f-1e9b-44da-9cc7-505802e1cc4b","02b3e277-4155-4609-9cac-217d6349c2ef"],"propsByKey":{"a553f8f2-44ab-45a0-b27e-ad7cbd22c8ac":{"name":"animation_1.","sourceUrl":null,"frameSize":{"x":36,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"XeQfRJB8vKF8GMKuiwsoT3y3nRaoM6mb","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":44},"rootRelativePath":"assets/a553f8f2-44ab-45a0-b27e-ad7cbd22c8ac.png"},"b948a762-3337-4d3f-b332-2e357b53a6ed":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"hcEw.PjHRNvpJ6ztjP7HRwcTJnPJIlSW","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/b948a762-3337-4d3f-b332-2e357b53a6ed.png"},"c2590200-41c7-4c9c-b8da-11a21c5a23f7":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"2hb28yagsvkf9ToyObv1C4oCi2s5Y4UR","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/c2590200-41c7-4c9c-b8da-11a21c5a23f7.png"},"a8ad09fc-662f-4598-ad8b-6b8c44095620":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"a2TUqthz_sse1KEvxq2OVEaVoqgY2UmJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/a8ad09fc-662f-4598-ad8b-6b8c44095620.png"},"a354b1ef-a12a-45d4-b94f-8ac9373b8344":{"name":"animation1.","sourceUrl":null,"frameSize":{"x":32,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"hGOpIz0OQrpQBPbHLKahtcsAPAwxMVTf","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":31},"rootRelativePath":"assets/a354b1ef-a12a-45d4-b94f-8ac9373b8344.png"},"15878125-9a0e-480a-984e-0b337f9837bb":{"name":"animation2.","sourceUrl":null,"frameSize":{"x":32,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"FX6lKPGG_3AV0tYMQtDImmNGJ6cpKwI3","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":31},"rootRelativePath":"assets/15878125-9a0e-480a-984e-0b337f9837bb.png"},"9c7121ce-a385-4d8c-819c-d1e191b9cd9a":{"name":"animation3.","sourceUrl":null,"frameSize":{"x":32,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"PcBf4XCgS7z1BIaYaanngfTJGuTCj7B.","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":30},"rootRelativePath":"assets/9c7121ce-a385-4d8c-819c-d1e191b9cd9a.png"},"9c7d6342-69bc-4587-97fa-c747f0d20e8f":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"FZ761a98eSk99DiGSMcLjy4XLzyliVEQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/9c7d6342-69bc-4587-97fa-c747f0d20e8f.png"},"ad98453a-d51e-4ecc-9dc3-cb699f71a45c":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"PbzkiKWM3WOfJO0oYKYC9qymvdViG8xZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":393},"rootRelativePath":"assets/ad98453a-d51e-4ecc-9dc3-cb699f71a45c.png"},"28c5fe4d-72fa-4e93-b4e9-d14073e5e5eb":{"name":"animation1","sourceUrl":null,"frameSize":{"x":174,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"wkpAuSZNeogo4e5y4NWGxLjmsdlMh1s5","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":400},"rootRelativePath":"assets/28c5fe4d-72fa-4e93-b4e9-d14073e5e5eb.png"},"8ee39e9a-80a4-4ece-976b-698690917c5a":{"name":"animation2","sourceUrl":null,"frameSize":{"x":332,"y":346},"frameCount":1,"looping":true,"frameDelay":12,"version":"FbHOYLFZzpu7E.TFCQ2XrNIrWeYDsYHh","loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":346},"rootRelativePath":"assets/8ee39e9a-80a4-4ece-976b-698690917c5a.png"},"563839ea-5041-4cbf-a11b-30bf9a5cab3e":{"name":"animation3","sourceUrl":null,"frameSize":{"x":148,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"vcHReUZIywFJwhKmPSIvgWvCHpeEJwZQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":400},"rootRelativePath":"assets/563839ea-5041-4cbf-a11b-30bf9a5cab3e.png"},"8e624221-ec75-4a92-9992-4f72991a91e1":{"name":"restart","sourceUrl":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png"},"a9109b9f-1e9b-44da-9cc7-505802e1cc4b":{"name":"gameOver","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"02b3e277-4155-4609-9cac-217d6349c2ef":{"name":"pause","sourceUrl":"assets/api/v1/animation-library/gamelab/oWKjH7DDauBri1Z2uZMyPH4kdm0AVvMu/category_gameplay/flatDark43.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"oWKjH7DDauBri1Z2uZMyPH4kdm0AVvMu","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oWKjH7DDauBri1Z2uZMyPH4kdm0AVvMu/category_gameplay/flatDark43.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var Enemy = createGroup();
var Bullet = createGroup();
var back=createSprite(200,200,400,400);
back.setAnimation("space_1");
back.y=back.width /2;
var playerPaddle=createSprite(390,350,30,30);
playerPaddle.setAnimation("animation_1");
playerPaddle.scale=0.2;
var count=0;

var gameOver = createSprite(200,200);
var restart = createSprite(200,240);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.8;

gameOver.visible = false;
restart.visible = false;
function draw() {
background("black");
back.velocityY = 2;
playerPaddle.x=World.mouseX;
if(gameState === PLAY){
if (World.frameCount%45==0) {
  enemy1();
  enemy1.x=randomNumber(100,300);
 }
if (back.y >400){
    back.y = back.width/2;
  }
if (keyWentDown("space") || mouseWentUp("leftButton")) {
    var bollet = createSprite(200,200,2,8);
    bollet.shapeColor = "red";
    bollet.lifetime=80;
    bollet.x=playerPaddle.x;
    bollet.y=playerPaddle.y;
    bollet.velocityY=-5;
    bollet.depth=back.depth+2;
    Bullet.add(bollet);
  }

if (Enemy.isTouching(Bullet)) {
   count=count+1;
   Enemy.destroyEach();
   Bullet.destroyEach();
   }
   createEdgeSprites();
if(Enemy.isTouching(bottomEdge)){
  count=count-1;
  Enemy.destroyEach();
}
   
   if(Enemy.isTouching(playerPaddle)){
    
    gameState = END;
    }
    
}
else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    back.velocityY=0;
    playerPaddle.visible=false;
    Enemy.setVisibleEach(false);
    score.visible =false; 
    
}

if(mousePressedOver(restart)) {
    reset();
  }
  
  
  
drawSprites();
score ();
}
function enemy1(){
var enemy1 = createSprite(100,30,10,10);
var rand = randomNumber(1,3);
enemy1.setAnimation("animation"+rand);
enemy1.velocityY =  8;
enemy1.scale=0.3;
enemy1.x=randomNumber(100,300);
enemy1.lifetime=134;
Enemy.add(enemy1);

}

function score (){
  textSize(18);
  fill("red");
  textFont("Georgia");
  text("score="+count,300,90);
}  

function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
  count=0;
  playerPaddle.visible=true;
  score.depth=back.depth+10;
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
