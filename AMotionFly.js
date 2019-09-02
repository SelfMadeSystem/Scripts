var scriptName = "Demo Script";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

var AMotionFly = new AMotionFly();
var AMotionFlyClient;

var Strafe = moduleManager.getModule("Strafe")

var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
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

function ivClip(offset) {
    mc.thePlayer.setPositionAndUpdate(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}

function ihClip(offset) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.setPositionAndUpdate(mc.thePlayer.posX - (Math.sin(playerYaw) * offset), mc.thePlayer.posY, mc.thePlayer.posZ + (Math.cos(playerYaw) * offset));
}

function hMotion(offset) {
        mc.thePlayer.motionX = parseFloat(Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset)
        mc.thePlayer.motionZ = parseFloat(Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset)
}



function AMotionFly() {
  
  var spoofGround = value.createBoolean("SpoofGround", false);
  var staticMotionY = value.createBoolean("StaticMotionY", true);
  var fallSpeed = value.createFloat("FallSpeed", 0.0, 0.0, 5.0);
  var initSpeed = value.createFloat("InitSpeed", 1.5, 0.0, 5.0);
  var reduceSpeed = value.createFloat("ReduceSpeed", 0.05, 0.0, 5.0);
  var minSpeed = value.createFloat("MinSpeed", 0.2, 0.0, 5.0);
  var type = value.createList("Type", ["Motion", "hClip", "instantHClip"], "Motion");
  
  var motion;
    this.getName = function() {
        return "AMotionFly";
    };

    this.getDescription = function() {
        return "A Motion Fly";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
        motion = initSpeed.get();
    }

    this.onUpdate = function() {
      if(staticMotionY.get()){
        mc.thePlayer.motionY = -fallSpeed.get();
      }
      if(type.get().equals("Motion")){
        hMotion(motion)
      }
      if(type.get().equals("hClip")){
        hClip(motion)
      }
      if(type.get().equals("instantHClip")){
        ihClip(motion)
      }
      if(motion > minSpeed.get()){
       motion -= reduceSpeed.get(); 
      }
      if(spoofGround.get()){
        mc.thePlayer.sendQueue.addToSendQueue(new C03PacketPlayer(true));
      }
    }

    this.onDisable = function() {
        mc.timer.timerSpeed = 1; 
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionZ = 0;
        if(mc.thePlayer.motionY > 0){
          mc.thePlayer.motionY = 0;
        }
    }
    
    this.addValues = function(values) {
      values.add(spoofGround);
      values.add(staticMotionY);
      values.add(fallSpeed);
      values.add(initSpeed);
      values.add(reduceSpeed);
      values.add(minSpeed);
      values.add(type);
    }
}

function onLoad() {
    // Currently this event has to be in every script even if it is not directly needed.
};

function onEnable() {
    AMotionFlyClient = moduleManager.registerModule(AMotionFly);
};

function onDisable() {
    moduleManager.unregisterModule(AMotionFlyClient);
};