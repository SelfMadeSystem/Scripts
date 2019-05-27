var scriptName = "AACLowHop3";
var scriptVersion = 1.1;
var scriptAuthor = "Sms_Gamer";
var AACLowHop3 = new AACLowHop3();
var client;

var strafeModule = moduleManager.getModule("Strafe");

function AACLowHop3() {
  var strafe = false;
    this.getName = function() {
        return "AACLowHop3";
    };

    this.getDescription = function() {
        return "AACLowHop3";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
      if(strafeModule.state == true){
        strafe = true;
      }else{
        strafe = false;
        strafeModule.setState(true)
      }
    }
    this.onUpdate = function() {
        if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
            mc.thePlayer.setSprinting(true);
          if (mc.thePlayer.onGround){
            if(!mc.gameSettings.keyBindJump.isKeyDown()){
              mc.thePlayer.jump()
            }
            mc.thePlayer.motionZ *= 1.01;
            mc.thePlayer.motionX *= 1.01;
        }
        mc.thePlayer.motionY -= 0.0149;
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
    client = moduleManager.registerModule(AACLowHop3);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}