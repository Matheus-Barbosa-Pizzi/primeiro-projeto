var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ce6e949c-6646-4081-9ac1-4197ce60cbac","1b533b46-6cc1-448e-a63c-25b2f69fe464","2c0d37d5-f672-4eed-ae06-85026ee6f924","ac3a6da8-f19c-422f-9232-0288448615cc","869c9b28-4eb0-41a3-b9dd-02e43582524b","b568751c-6a0d-4382-893f-47ea941e8381","4dc3a124-eebd-4d23-8e2c-21e855e01057","7fbd64e8-2d4c-4d44-9574-03b62bd8ea72"],"propsByKey":{"ce6e949c-6646-4081-9ac1-4197ce60cbac":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"1b533b46-6cc1-448e-a63c-25b2f69fe464":{"name":"jogador","sourceUrl":"assets/api/v1/animation-library/gamelab/to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ/category_people/blue_shirt_ball.png","frameSize":{"x":125,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ/category_people/blue_shirt_ball.png"},"2c0d37d5-f672-4eed-ae06-85026ee6f924":{"name":"jogadorDois","sourceUrl":"assets/api/v1/animation-library/gamelab/5ISeSvWNWn9I0dV83vMNt8yBCHM4a4It/category_people/red_shirt_ball.png","frameSize":{"x":128,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"5ISeSvWNWn9I0dV83vMNt8yBCHM4a4It","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5ISeSvWNWn9I0dV83vMNt8yBCHM4a4It/category_people/red_shirt_ball.png"},"ac3a6da8-f19c-422f-9232-0288448615cc":{"name":"sports","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"dDGYGIVGSzY9Mj2eiYDYxN7CDV9hChOc","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ac3a6da8-f19c-422f-9232-0288448615cc.png"},"869c9b28-4eb0-41a3-b9dd-02e43582524b":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"b568751c-6a0d-4382-893f-47ea941e8381":{"name":"zoro","sourceUrl":"assets/v3/animations/p9ECsdN-6eFItLDiMEqg7y81lOMk5dBphWBSai66KyU/b568751c-6a0d-4382-893f-47ea941e8381.png","frameSize":{"x":156,"y":323},"frameCount":1,"looping":true,"frameDelay":4,"version":"5uWkYSvE_nyWW.8eJ_GDiLRsQx1Om8ch","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":323},"rootRelativePath":"assets/v3/animations/p9ECsdN-6eFItLDiMEqg7y81lOMk5dBphWBSai66KyU/b568751c-6a0d-4382-893f-47ea941e8381.png"},"4dc3a124-eebd-4d23-8e2c-21e855e01057":{"name":"luffy","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"dL8KOTIWNFBwXvb2.eD.ejwJ_tynLZYl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/4dc3a124-eebd-4d23-8e2c-21e855e01057.png"},"7fbd64e8-2d4c-4d44-9574-03b62bd8ea72":{"name":"solado","sourceUrl":null,"frameSize":{"x":236,"y":241},"frameCount":1,"looping":true,"frameDelay":12,"version":"lP4_ndnfYuhLp7w5DTMGLZ5ZUB6qr3o.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":241},"rootRelativePath":"assets/7fbd64e8-2d4c-4d44-9574-03b62bd8ea72.png"}}};
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

var back = createSprite(200,200);
back.setAnimation("sports");

var ball = createSprite(200, 200, 30,30);
ball.setAnimation("solado");
ball.scale=0.1;

var playerPaddle = createSprite(390, 200, 10,100);
playerPaddle.setAnimation("zoro");
playerPaddle.scale=0.3;

var computerPaddle = createSprite(10, 200, 10,100);
computerPaddle.setAnimation("luffy");
computerPaddle.scale=0.3;



ball.shapeColor="black";
playerPaddle.shapeColor="blue";
computerPaddle.shapeColor="red";






createEdgeSprites();



function draw() {
background(220);
  
if (ball.isTouching(playerPaddle)) {
    playSound("assets/oh-my-god-meme.mp3");
  }
    
if (ball.isTouching(computerPaddle)) {
    playSound("assets/oh-my-god-meme.mp3");
  } 
  
  
if (keyDown("up")) {
playerPaddle.y=playerPaddle.y-13;
}
  
  
  
if(keyDown("down")){
playerPaddle.y=playerPaddle.y+13;
  }
  
if(keyDown("space")){
ball.velocityX= 8;
ball.velocityY= -8 ;
}
  
  
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
  
ball.bounceOff(computerPaddle);
ball.bounceOff(playerPaddle);
  
  
computerPaddle.y=ball.y;

  
for (var i = 0; i < 400;i= i+20) {
   
strokeWeight("5");
stroke("yellow");
line(200,i, 200,i+10);
    
  }
  
  
drawSprites();    
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
