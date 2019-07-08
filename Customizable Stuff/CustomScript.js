//Don't edit these stuff.
var scriptName = "Custom Stuff";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

script.import("CustomSettings.js");

var CustomBHop = new CustomBHop();
var CustomFly = new CustomFly();

var Strafe = moduleManager.getModule("Strafe")

var client;
var client2;

function CustomBHop() {
    this.getName = function() {
        return "CustomBHop"; //Name
    };

    this.getDescription = function() {
        return "Custom bHop"; //
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
    }
    this.onUpdate = function() {
        if ((mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) && !mc.thePlayer.isSneaking()) {
          mc.thePlayer.setSprinting(bhopSetSprinting); //Set sprinting?
          Strafe.setState(bhopStrafe); //Want strafe?
          if (mc.thePlayer.onGround) {
              mc.thePlayer.motionY = bhopMotionY1; //You can set this to basically anything. 0.42 is legit jump motion.
              timer(bhopTimer1) //Timer. Default is 1
              hClip(bhophClip1) //Do you want to hClip? Default 0.
              vClip(bhopvClip1) //Do you want to vClip enstead of jumping? 1.24918707874468 is the jump height. Default 0.
              speedMultiply(bhopSpeedMultiply1) //Ground Speed. I think legit is 1.72
          }else{
            mc.timer.timerSpeed = bhopTimer2; //Timer. Default is 1
            hClip(bhophClip2) //Do you want to hClip? Default 0.
        if(bhopMotionYType1 == 0){
          mc.thePlayer.motionY *= bhopMotionY2;
        }
        if(bhopMotionYType1 == 1){
          mc.thePlayer.motionY += bhopMotionY2;
        }
        if(bhopMotionYType1 == 2){
          mc.thePlayer.motionY -= bhopMotionY2;
        }
        if(bhopMotionYType1 == 3){
          mc.thePlayer.motionY /= bhopMotionY2;
        }
        if(bhopMotionYType1 == 4){
          mc.thePlayer.motionY = bhopMotionY2;
        }
            if(mc.thePlayer.motionY <= 0){
        if(bhopMotionYType2 == 0){
          mc.thePlayer.motionY *= bhopMotionY2;
        }
        if(bhopMotionYType2 == 1){
          mc.thePlayer.motionY += bhopMotionY3;
        }
        if(bhopMotionYType2 == 2){
          mc.thePlayer.motionY -= bhopMotionY3;
        }
        if(bhopMotionYType2 == 3){
          mc.thePlayer.motionY /= bhopMotionY3;
        }
        if(bhopMotionYType2 == 4){
          mc.thePlayer.motionY = bhopMotionY3;
        }
              timer(bhopTimer3) //Timer. Default is 1
              airSpeed(bhopAirSpeed1) //Sets your speed in air. 0.02 is default.
            }else{
        if(bhopMotionYType3 == 0){
          mc.thePlayer.motionY *= bhopMotionY4;
        }
        if(bhopMotionYType3 == 1){
          mc.thePlayer.motionY += bhopMotionY4;
        }
        if(bhopMotionYType3 == 2){
          mc.thePlayer.motionY -= bhopMotionY4;
        }
        if(bhopMotionYType3 == 3){
          mc.thePlayer.motionY /= bhopMotionY4;
        }
        if(bhopMotionYType3 == 4){
          mc.thePlayer.motionY = bhopMotionY4;
        }
              timer(bhopTimer4) //Timer. Default is 1
              airSpeed(bhopAirSpeed2) //Sets your speed in air. 0.02 is default.
            }
          }
        }else{
          Strafe.setState(false);
        }
}
    this.onDisable = function () {
            mc.thePlayer.speedInAir = 0.02;
            mc.timer.timerSpeed = 1
            Strafe.setState(false);
            if(bhopResetXZ){
              mc.thePlayer.motionX = 0;
              mc.thePlayer.motionZ = 0;
            }
            if(bhopResetY){
              mc.thePlayer.motionY = 0;
            }
    }
}

function CustomFly() {
    this.getName = function() {
        return "CustomFly"; //Name
    };

    this.getDescription = function() {
        return "Custom Fly"; //
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
      if(mc.thePlayer.onGround || !flyCheckGround1){
        vClip(flyVClip1)
        hClip(flyHClip1)
      }
    }
    this.onUpdate = function() {
      mc.thePlayer.setSprinting(flySetSprinting); //Set sprinting?
      Strafe.setState(flyStrafe); //Want strafe?
      if(mc.thePlayer.onGround){
        if(flyJump1){
          mc.thePlayer.jump();
        }
        vClip(flyVClip2)
        hClip(flyHClip2)
      }
      if(mc.thePlayer.motionY < 0 & !mc.thePlayer.onGround){
        if(flyMotionYType1 == 0){
          mc.thePlayer.motionY *= flyMotionY1;
        }
        if(flyMotionYType1 == 1){
          mc.thePlayer.motionY += flyMotionY1;
        }
        if(flyMotionYType1 == 2){
          mc.thePlayer.motionY -= flyMotionY1;
        }
        if(flyMotionYType1 == 3){
          mc.thePlayer.motionY /= flyMotionY1;
        }
        if(flyMotionYType1 == 4){
          mc.thePlayer.motionY = flyMotionY1;
        }
        if(flyMotionXZType1 == 0){
          mc.thePlayer.motionX *= flyMotionXZ1;
          mc.thePlayer.motionZ *= flyMotionXZ1;
        }
        if(flyMotionXZType1 == 1){
          mc.thePlayer.motionX /= flyMotionXZ1;
          mc.thePlayer.motionZ /= flyMotionXZ1;
        }
      }
      if(mc.thePlayer.motionY > 0 & !mc.thePlayer.onGround){
        if(flyMotionYType2 == 0){
          mc.thePlayer.motionY *= flyMotionY2;
        }
        if(flyMotionYType2 == 1){
          mc.thePlayer.motionY += flyMotionY2;
        }
        if(flyMotionYType2 == 2){
          mc.thePlayer.motionY -= flyMotionY2;
        }
        if(flyMotionYType2 == 3){
          mc.thePlayer.motionY /= flyMotionY2;
        }
        if(flyMotionYType2 == 4){
          mc.thePlayer.motionY = flyMotionY2;
        }
        if(flyMotionXZType2 == 0){
          mc.thePlayer.motionX *= flyMotionXZ2;
          mc.thePlayer.motionZ *= flyMotionXZ2;
        }
        if(flyMotionXZType2 == 1){
          mc.thePlayer.motionX /= flyMotionXZ2;
          mc.thePlayer.motionZ /= flyMotionXZ2;
        }
      }
      if(mc.thePlayer.ticksExisted % flyTicks1 == flyTickse1){
        if(flyMotionYType3 == 0){
          mc.thePlayer.motionY *= flyMotionY3;
        }
        if(flyMotionYType3 == 1){
          mc.thePlayer.motionY += flyMotionY3;
        }
        if(flyMotionYType3 == 2){
          mc.thePlayer.motionY -= flyMotionY3;
        }
        if(flyMotionYType3 == 3){
          mc.thePlayer.motionY /= flyMotionY3;
        }
        if(flyMotionYType3 == 4){
          mc.thePlayer.motionY = flyMotionY3;
        }
        if(flyMotionXZType3 == 0){
          mc.thePlayer.motionX *= flyMotionXZ3;
          mc.thePlayer.motionZ *= flyMotionXZ3;
        }
        if(flyMotionXZType3 == 1){
          mc.thePlayer.motionX /= flyMotionXZ3;
          mc.thePlayer.motionZ /= flyMotionXZ3;
        }
        mc.timer.timerSpeed = flyTimer1;
        vClip(flyVClip3)
        hClip(flyHClip3)
      }
      if(mc.thePlayer.ticksExisted % flyTicks2 == flyTickse2){
        if(flyMotionYType4 == 0){
          mc.thePlayer.motionY *= flyMotionY4;
        }
        if(flyMotionYType4 == 1){
          mc.thePlayer.motionY += flyMotionY4;
        }
        if(flyMotionYType4 == 2){
          mc.thePlayer.motionY -= flyMotionY4;
        }
        if(flyMotionYType4 == 3){
          mc.thePlayer.motionY /= flyMotionY4;
        }
        if(flyMotionYType4 == 4){
          mc.thePlayer.motionY = flyMotionY4;
        }
        if(flyMotionXZType4 == 0){
          mc.thePlayer.motionX *= flyMotionXZ4;
          mc.thePlayer.motionZ *= flyMotionXZ4;
        }
        if(flyMotionXZType4 == 1){
          mc.thePlayer.motionX /= flyMotionXZ4;
          mc.thePlayer.motionZ /= flyMotionXZ4;
        }
        mc.timer.timerSpeed = flyTimer2;
        vClip(flyVClip4)
        hClip(flyHClip4)
      }
      if(mc.thePlayer.ticksExisted % flyTicks3 == flyTickse3){
        if(flyMotionYType5 == 0){
          mc.thePlayer.motionY *= flyMotionY5;
        }
        if(flyMotionYType5 == 1){
          mc.thePlayer.motionY += flyMotionY5;
        }
        if(flyMotionYType5 == 2){
          mc.thePlayer.motionY -= flyMotionY5;
        }
        if(flyMotionYType5 == 3){
          mc.thePlayer.motionY /= flyMotionY5;
        }
        if(flyMotionYType5 == 4){
          mc.thePlayer.motionY = flyMotionY5
        }
        if(flyMotionXZType5 == 0){
          mc.thePlayer.motionX *= flyMotionXZ5;
          mc.thePlayer.motionZ *= flyMotionXZ5;
        }
        if(flyMotionXZType5 == 1){
          mc.thePlayer.motionX /= flyMotionXZ5;
          mc.thePlayer.motionZ /= flyMotionXZ5;
        }
        mc.timer.timerSpeed = flyTimer3;
        vClip(flyVClip5)
        hClip(flyHClip5)
      }
      if(mc.thePlayer.ticksExisted % flyTicks4 == flyTickse4){
        if(flyMotionYType6 == 0){
          mc.thePlayer.motionY *= flyMotionY6;
        }
        if(flyMotionYType6 == 1){
          mc.thePlayer.motionY += flyMotionY6;
        }
        if(flyMotionYType6 == 2){
          mc.thePlayer.motionY -= flyMotionY6;
        }
        if(flyMotionYType6 == 3){
          mc.thePlayer.motionY /= flyMotionY6;
        }
        if(flyMotionYType6 == 4){
          mc.thePlayer.motionY = flyMotionY6;
        }
        if(flyMotionXZType6 == 0){
          mc.thePlayer.motionX *= flyMotionXZ6;
          mc.thePlayer.motionZ *= flyMotionXZ6;
        }
        if(flyMotionXZType6 == 1){
          mc.thePlayer.motionX /= flyMotionXZ6;
          mc.thePlayer.motionZ /= flyMotionXZ6;
        }
        mc.timer.timerSpeed = flyTimer4;
        vClip(flyVClip6)
        hClip(flyHClip6)
      }

      //still onEnable
    }
    this.onDisable = function() {
            mc.thePlayer.speedInAir = 0.02;
            mc.timer.timerSpeed = 1
            Strafe.setState(false);
            if(flyResetXZ){
              mc.thePlayer.motionX = 0;
              mc.thePlayer.motionZ = 0;
            }
            if(flyResetY){
              mc.thePlayer.motionY = 0;
            }
    }
}

 // Converts from degrees to radians.
 Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
  // Converts from radians to degrees.
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };


function vClip(offset) {
    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ); 
}

function hClip(offset) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.setPosition(mc.thePlayer.posX - (Math.sin(playerYaw) * offset), mc.thePlayer.posY, mc.thePlayer.posZ + (Math.cos(playerYaw) * offset));
}

function airSpeed(offset) {
    mc.thePlayer.speedInAir = offset;
}

function speedMultiply(offset) {
  mc.thePlayer.motionX *= offset;
  mc.thePlayer.motionZ *= offset;
}

function timer(offset){
  mc.timer.timerSpeed = offset;
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(CustomBHop);
    client2 = moduleManager.registerModule(CustomFly);
}

function onDisable() {
    moduleManager.unregisterModule(client);
    moduleManager.unregisterModule(client2);
}
