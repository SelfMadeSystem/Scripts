var scriptName = "Debug Info";
var scriptAuthor = "Shoghi Gamer";
var scriptVersion = 1.0;


function Emo() {
  var speed = 0;
  var X = 0;
  var Z = 0;
  var X2 = 0;
  var Z2 = 0;
    this.getName = function() {
        return "Debug";
    }

    this.getCategory = function() {
        return "Fun";   
    }

    this.getDescription = function() {
        return "Debug Information for stuff";
    }
    
    this.onEnable = function() {
      chat.print("To get blocks per tick, use Squeedometer. Much more accurite.");
    }
    
    this.onUpdate = function() {
      chat.print("§"+ Math.floor(Math.random()*9)---------------------------)
      chat.print("mX: " + mc.thePlayer.motionX);
      chat.print("mY: " + mc.thePlayer.motionY);
      chat.print("mZ: " + mc.thePlayer.motionZ);
      chat.print("posX: " + mc.thePlayer.posX);
      chat.print("posY: " + mc.thePlayer.posY);
      chat.print("posZ: " + mc.thePlayer.posZ);
      chat.print("Timer: " + mc.timer.timerSpeed);
      chat.print("OnGround: " + mc.timer.onGround);
      chat.print("Speed: " + speed + " Motion/tick");
      speed = X + Z;
      //mc.thePlayer.timeInPortal = 0;
        X = Math.abs(mc.thePlayer.motionX);
        Z = Math.abs(mc.thePlayer.motionZ);
    }
}

var emo = new Emo();
var emoClient;

function onEnable() {
    emoClient = moduleManager.registerModule(emo);
}

function onDisable() {
    moduleManager.unregisterModule(emoClient);
}
