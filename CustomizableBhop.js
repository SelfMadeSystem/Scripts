//Don't edit these stuff.
var scriptName = "Custom bHop";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

var CustomBHop = new CustomBHop();

var Strafe = moduleManager.getModule("Strafe")

var client;

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
          airSpeed(0.02) //Sets your speed in air. 0.02 is default.
          mc.thePlayer.setSprinting(true); //Set sprinting?
          Strafe.setState(true); //Want strafe?
          if (mc.thePlayer.onGround) {
              mc.thePlayer.motionY = 0.42; //You can set this to basically anything. 0.42 is legit jump motion.
              timer(1) //Timer. Default is 1
              hClip(0) //Do you want to hClip? Default 0.
              vClip(0) //Do you want to vClip enstead of jumping? 1.24918707874468 is the jump height. Default 0.
              speedMultiply(1.72) //Ground Speed. I think legit is 1.72
          }else{
            if(mc.thePlayer.motionY <= 0){
              mc.thePlayer.motionY *= 1.0; //You can set this to basically anything. Default1.
              timer(1) //Timer. Default is 1
              airSpeed(0.02) //Sets your speed in air. 0.02 is default.
            }else{
              timer(1) //Timer. Default is 1
              airSpeed(0.02) //Sets your speed in air. 0.02 is default.
            }
              mc.timer.timerSpeed = 1; //Timer. Default is 1
              hClip(0) //Do you want to hClip? Default 0.
              mc.thePlayer.motionY *= 1.0; //You can set this to basically anything. Default 1.
          }
        }else{
          Strafe.setState(false);
        }
        //Under hClip and/or vClip, Replace the `mc.thePlayer.setPosition` with `mc.thePlayer.setPositionAndUpdate` to instantly teleport instead of going to it. Mainly only useful with timer below 0.7
        /*
        * No
        * Need
        * To
        * Go
        * Futher.
        */
}
    this.onDisable = function () {
            mc.thePlayer.speedInAir = 0.02;
            mc.timer.timerSpeed = 1
            Strafe.setState(false);
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
}

function onDisable() {
    moduleManager.unregisterModule(client);
}