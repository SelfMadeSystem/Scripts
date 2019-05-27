var scriptName = "AACVelocity";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";
var AACVelocity = new AACVelocity();
var client;

var strafeModule = moduleManager.getModule("Strafe");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // Converts from degrees to radians.
 Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
  // Converts from radians to degrees.
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vClip(offset) {
    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}

function hClip(offset) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.setPosition(mc.thePlayer.posX - (Math.sin(playerYaw) * offset), mc.thePlayer.posY, mc.thePlayer.posZ + (Math.cos(playerYaw) * offset));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hMotion(offset) {
        mc.thePlayer.motionX = parseFloat(Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
        mc.thePlayer.motionZ = parseFloat(Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setMoveSpeed(movespeed) {
    if (mc.thePlayer.movementInput.moveStrafe == 0 && mc.thePlayer.movementInput.moveForward != 0) {
        mc.thePlayer.motionX = parseFloat(mc.thePlayer.movementInput.moveForward * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) )
        mc.thePlayer.motionZ = parseFloat(mc.thePlayer.movementInput.moveForward * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) )
    } else if (mc.thePlayer.movementInput.moveStrafe != 0 && mc.thePlayer.movementInput.moveForward != 0){  
        mc.thePlayer.motionX = parseFloat((mc.thePlayer.movementInput.moveForward / 1.4142135623730950488016887242097) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) + (mc.thePlayer.movementInput.moveStrafe / 1.4142135623730950488016887242097) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
        mc.thePlayer.motionZ = parseFloat((mc.thePlayer.movementInput.moveForward / 1.4142135623730950488016887242097) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) - (mc.thePlayer.movementInput.moveStrafe / 1.4142135623730950488016887242097) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
    } else if (mc.thePlayer.movementInput.moveStrafe != 0 && mc.thePlayer.movementInput.moveForward == 0){
        mc.thePlayer.motionX = parseFloat((mc.thePlayer.movementInput.moveForward / 1) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) + (mc.thePlayer.movementInput.moveStrafe / 1) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
        mc.thePlayer.motionZ = parseFloat((mc.thePlayer.movementInput.moveForward / 1) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) - (mc.thePlayer.movementInput.moveStrafe / 1) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function playerMoveSpeed(movespeed) {
    if (mc.thePlayer.movementInput.moveStrafe == 0 && mc.thePlayer.movementInput.moveForward != 0) {
        mc.thePlayer.motionX = parseFloat(mc.thePlayer.movementInput.moveForward * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) )
        mc.thePlayer.motionZ = parseFloat(mc.thePlayer.movementInput.moveForward * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) )
    } else if (mc.thePlayer.movementInput.moveStrafe != 0 && mc.thePlayer.movementInput.moveForward != 0){  
        mc.thePlayer.motionX = parseFloat((mc.thePlayer.movementInput.moveForward / 1.4142135623730950488016887242097) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) + (mc.thePlayer.movementInput.moveStrafe / 1.4142135623730950488016887242097) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
        mc.thePlayer.motionZ = parseFloat((mc.thePlayer.movementInput.moveForward / 1.4142135623730950488016887242097) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) - (mc.thePlayer.movementInput.moveStrafe / 1.4142135623730950488016887242097) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)))
    } else if (mc.thePlayer.movementInput.moveStrafe != 0 && mc.thePlayer.movementInput.moveForward == 0){
        mc.thePlayer.motionX = parseFloat((mc.thePlayer.movementInput.moveForward / 1) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)))/* + (mc.thePlayer.movementInput.moveStrafe / 1) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))*/
        mc.thePlayer.motionZ = parseFloat((mc.thePlayer.movementInput.moveForward / 1) * movespeed * Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)))/* - (mc.thePlayer.movementInput.moveStrafe / 1) * movespeed * Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0))))*/
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AACVelocity() {
  var once = false;
    this.getName = function() {
        return "AACVelocity";
    };

    this.getDescription = function() {
        return "AACVelocity";
    };

    this.getCategory = function() {
        return "Combat";
    };
    this.onEnable = function() {
      once = false;
    }
    this.onUpdate = function() {
      if(mc.thePlayer.hurtTime == 9 & once == true & mc.thePlayer.onGround == true){
        //mc.thePlayer.motionY *= 0.9999999
        once = false;
      }
      if(mc.thePlayer.hurtTime > 0 & mc.thePlayer.hurtTime <= 7) {
        mc.thePlayer.motionX *= 0.5
        mc.thePlayer.motionZ *= 0.5
      }
      if(mc.thePlayer.hurtTime == 5) {
        mc.thePlayer.motionX = 0.0
        mc.thePlayer.motionZ = 0.0
        once = true;
      }
      if(mc.thePlayer.hurtTime == 4){
        hClip(0.05)
      }

}
    this.onDisable = function () {
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(AACVelocity);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}