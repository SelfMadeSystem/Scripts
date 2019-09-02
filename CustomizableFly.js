var scriptName = "Custom Stuff";
var scriptVersion = 1.0;
var scriptAuthor = "Sms_Gamer";

var CustomFly = new CustomFly();

var Strafe = moduleManager.getModule("Strafe")

var c03packetplayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");

var client;

function CustomFly() {
  var resetH = value.createBoolean("resetH", false);
  var resetY = value.createBoolean("resetY", false);
  var strafing = value.createBoolean("strafing", false);
  var selfDamage = value.createBoolean("selfDamage", false);
  var airSpeed = value.createFloat("airSpeed", 0.02, 0, 0.5);
  var ticksClip1 = value.createInteger("ticksClip1", 0, 0, 20);
  var ticksClipE1 = value.createInteger("ticksClipE1", 0, 0, 20);
  var hClipDistance1 = value.createFloat("hClipDistance1", 0, -5, 5);
  var yClipDistance1 = value.createFloat("yClipDistance1", 0, -1, 1);
  var ticksClip2 = value.createInteger("ticksClip2", 0, 0, 20);
  var ticksClipE2 = value.createInteger("ticksClipE2", 0, 0, 20);
  var hClipDistance2 = value.createFloat("hClipDistance2", 0, -5, 5);
  var yClipDistance2 = value.createFloat("yClipDistance2", 0, -5, 5);
  var ticksMotion1 = value.createInteger("ticksMotion1", 0, 0, 20);
  var ticksMotionE1 = value.createInteger("ticksMotionE1", 0, 0, 20);
  var hMotionDistanceType1 = value.createList("hMotionDistanceType1", ["Add", "Set", "Times"], "Add");
  var hMotionDistance1 = value.createFloat("hMotionDistance1", 0, -5, 5);
  var yMotionDistanceType1 = value.createList("yMotionDistanceType1", ["Add", "Set", "Times"], "Add");
  var yMotionDistance1 = value.createFloat("yMotionDistance1", 0, -5, 5);
  var ticksMotion2 = value.createInteger("ticksMotion2", 0, 0, 20);
  var ticksMotionE2 = value.createInteger("ticksMotionE2", 0, 0, 20);
  var hMotionDistance2 = value.createFloat("hMotionDistance2", 0, -5, 5);
  var hMotionDistanceType2 = value.createList("hMotionDistanceType2", ["Add", "Set", "Times"], "Add");
  var yMotionDistance2 = value.createFloat("yMotionDistance2", 0, -5, 5);
  var yMotionDistanceType2 = value.createList("yMotionDistanceType2", ["Add", "Set", "Times"], "Add");
  var ticksTimer1 = value.createInteger("ticksTimer1", 0, 0, 20);
  var ticksTimerE1 = value.createInteger("ticksTimerE1", 0, 0, 20);
  var Timer1 = value.createFloat("Timer1", 1, 0.1, 3);
  var ticksTimer2 = value.createInteger("ticksTimer2", 0, 0, 20);
  var ticksTimerE2 = value.createInteger("ticksTimerE2", 0, 0, 20);
  var Timer2 = value.createFloat("Timer2", 1, 0.1, 3);
  
  var dmg;
  
    this.getName = function() {
        return "CustomFly";
    };

    this.getDescription = function() {
        return "Custom Fly";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
    dmg = 0;
		if(selfDamage.get()){
		var damage = 1;
        if (damage < 1)
            damage = 1;
        if (damage > Math.floor(mc.thePlayer.getMaxHealth()))
            damage = Math.floor(mc.thePlayer.getMaxHealth());

        var offset = 0.0625;
        if (mc.thePlayer != null && mc.getNetHandler() != null && mc.thePlayer.onGround) {
            for (var i = 0; i <= ((3 + damage) / offset); i++) { 
                mc.getNetHandler().addToSendQueue(new c03packetplayer.C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY + offset, mc.thePlayer.posZ, false));
                mc.getNetHandler().addToSendQueue(new c03packetplayer.C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY, mc.thePlayer.posZ, (i == ((3 + damage) / offset))));
            }
        }
      }else{
        dmg = 4;
      }
    }
    this.onUpdate = function() {
      if(dmg<4){
        dmg++;
        return;
      }
      if(strafing.get()){
        Strafe.setState(true);
      }
      mc.thePlayer.speedInAir = airSpeed.get();
      if(mc.thePlayer.ticksExisted % ticksClip1.get() == ticksClipE1.get()){
        hClip(hClipDistance1.get());
        vClip(yClipDistance1.get());
      }
      if(mc.thePlayer.ticksExisted % ticksClip2.get() == ticksClipE2.get()){
        hClip(hClipDistance2.get());
        vClip(yClipDistance2.get());
      }
      if(mc.thePlayer.ticksExisted % ticksMotion1.get() == ticksMotionE1.get()){
        mY(yMotionDistanceType1.get(), yMotionDistance1.get());
        mXZ(hMotionDistanceType1.get(), hMotionDistance1.get());
      }
      if(mc.thePlayer.ticksExisted % ticksMotion2.get() == ticksMotionE2.get()){
        mY(yMotionDistanceType2.get(), yMotionDistance2.get());
        mXZ(hMotionDistanceType2.get(), hMotionDistance2.get());
      }
      if(mc.thePlayer.ticksExisted % ticksTimer1.get() == ticksTimerE1.get()){
        mc.timer.timerSpeed = Timer1.get();
      }
      if(mc.thePlayer.ticksExisted % ticksTimer2.get() == ticksTimerE2.get()){
        mc.timer.timerSpeed = Timer2.get();
      }
    }
    this.onDisable = function() {
      mc.thePlayer.speedInAir = 0.02;
      mc.timer.timerSpeed = 1
      Strafe.setState(false);
      if(resetH.get()){
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionZ = 0;
      }
      if(resetY.get() && mc.thePlayer.motionY > 0){
        mc.thePlayer.motionY = 0;
      }
    }
    
    this.addValues = function(values) {
      values.add(resetH);
      values.add(resetY);
      values.add(strafing);
      values.add(selfDamage);
      values.add(airSpeed);
      values.add(ticksClip1);
      values.add(ticksClipE1);
      values.add(hClipDistance1);
      values.add(yClipDistance1);
      values.add(ticksClip2);
      values.add(ticksClipE2);
      values.add(hClipDistance2);
      values.add(yClipDistance2);
      values.add(ticksMotion1);
      values.add(ticksMotionE1);
      values.add(hMotionDistanceType1);
      values.add(hMotionDistance1);
      values.add(yMotionDistanceType1);
      values.add(yMotionDistance1);
      values.add(ticksMotion2);
      values.add(ticksMotionE2);
      values.add(hMotionDistanceType2);
      values.add(hMotionDistance2);
      values.add(yMotionDistanceType2);
      values.add(yMotionDistance2);
      values.add(ticksTimer1);
      values.add(ticksTimerE1);
      values.add(Timer1);
      values.add(ticksTimer2);
      values.add(ticksTimerE2);
      values.add(Timer2);
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

function mY(type, offset){
        if(type.equals("Set")){
          mc.thePlayer.motionY = offset;
        }
        if(type.equals("Times")){
          mc.thePlayer.motionY *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionY += offset;
        }
}
function mXZ(type, offset){
  var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
        if(type.equals("Times")){
          mc.thePlayer.motionX *= offset;
          mc.thePlayer.motionZ *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionX += Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ += Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
        if(type.equals("Set")){
          mc.thePlayer.motionX = Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ = Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
}
function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(CustomFly);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}