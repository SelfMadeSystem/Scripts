var scriptName = "Bhop test";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

var BhopTest = new BhopTest();

var client;

function BhopTest() {
	var ticks = 0;
    this.getName = function() {
        return "StutterBhop";
    };

    this.getDescription = function() {
        return "Stutter thing";
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
          }
         if(ticks == 3 || ticks == 6 || ticks == 9 || ticks == 12 || ticks == 15 || ticks == 18 || ticks == 21 || ticks == 24 || ticks == 27 || ticks == 30 || ticks == 33 || ticks == 36  || ticks == 39  || ticks == 42  || ticks == 45  || ticks == 48 || ticks == 51 || ticks == 54 || ticks == 57 || ticks == 60) {
           mc.thePlayer.speedInAir = 0.5;
         }else {
			    mc.thePlayer.motionX = 0;
			    mc.thePlayer.motionZ = 0;
        }
        } else {
          mc.thePlayer.speedInAir = 0.025;
        }
       if(ticks == 60) {
         	ticks = 0;
       }
}
    this.onDisable = function () {
            mc.thePlayer.speedInAir = 0.025;
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(BhopTest);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}