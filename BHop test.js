var scriptName = "Bhop test";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

var BhopTest = new BhopTest();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var client;

function BhopTest() {
	var ticks = 0;
    this.getName = function() {
        return "BhopTest";
    };

    this.getDescription = function() {
        return "Bhop test";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
    }
    this.onUpdate = function() {
      ticks++
        if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
          mc.thePlayer.setSprinting(true);
          if(mc.thePlayer.onGround) {
            mc.thePlayer.jump();
            mc.timer.timerSpeed = 2 //changeable
            mc.thePlayer.speedInAir = 0.0125; //changeable
         if(ticks == 2 || ticks == 4 || ticks == 6 || ticks ==8 || ticks == 12 || ticks == 16 || ticks == 18 || ticks == 20) {
           //just examples
           //hClip(1)
         }else {
           //speedinair
           //mc.thePlayer.motionX = 0;
			    //mc.thePlayer.motionZ = 0;
        }
          }
        } else {
          mc.thePlayer.speedInAir = 0.02;
          mc.timer.timerSpeed = 1
        }
       if(ticks == 20) {
         	ticks = 0;
       }
}
    this.onDisable = function () {
            mc.thePlayer.speedInAir = 0.02;
            mc.timer.timerSpeed = 1
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(BhopTest);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}
