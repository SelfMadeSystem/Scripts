var scriptName = "AACHop3.5.0";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";
var AACHop350 = new AACHop350();
var client;

function AACHop350() {
    this.getName = function() {
        return "AACHop3.5.0";
    };

    this.getDescription = function() {
        return "AACHop3.5.0";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
    }
    this.onUpdate = function() {
        if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
          mc.thePlayer.setSprinting(true);
            if (mc.thePlayer.onGround) {
              mc.thePlayer.jump()
              mc.thePlayer.motionX *= 1.01;
              mc.thePlayer.motionZ *= 1.01;
            } else {
              mc.thePlayer.motionY -= 0.0147;
            }
    }
}
    this.onDisable = function () {
      if(strafe == true){
        strafe = true;
        strafeModule.setState(true)
      }else{
        strafe = false;
        strafeModule.setState(false)
      }
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(AACHop350);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}
