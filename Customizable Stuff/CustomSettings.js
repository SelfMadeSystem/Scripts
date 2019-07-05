

// Custom BHop


//At all times.
var bhopSetSprinting = true; //Set sprinting?
var bhopStrafe = false; //Want strafe?

//When the player is on ground.
var bhopMotionY1 = 0.42; //You can set this to basically anything. 0.42 is legit jump motion.
var bhopTimer1 = 1; //Timer. Default is 1
var bhophClip1 = 0; //Do you want to hClip? Default 0.
var bhopvClip1 = 0; //Do you want to vClip enstead of jumping? 1.24918707874468 is the jump height. Default 0.
var bhopSpeedMultiply1 = 1.71 //Ground Speed. I think legit is 1.71

//When the player isn't on ground.
var bhopTimer2 = 1; //Timer. Default is 1
var bhophClip2 = 0; //Do you want to hClip? Default 0.
var bhopMotionYMultiply1 = 1.0; //You can set this to basically anything. Default1. The motionY multiply

//When the player's motionY is lower than 0
var bhopMotionYMultiply2 = 1.0; //You can set this to basically anything. Default1. The motionY multiply
var bhopTimer3 = 1; //Timer. Default is 1
var bhopAirSpeed1 = 0.02; //Sets your speed in air. 0.02 is default.

//When the player's motionY is higher than 0.
var bhopMotionYMultiply3 = 1.0; //You can set this to basically anything. Default1. The motionY multiply
var bhopTimer4 = 1; //Timer. Default is 1
var bhopAirSpeed2 = 0.02; //Sets your speed in air. 0.02 is default.

//When it gets disabled.
var bhopResetXZ = true; //When it gets disabled, do you want to reset MotionX and MotionZ to 0?
var bhopResetY = false; //When it gets disabled, do you want to reset MotionY to 0?


//Custom Fly.


//When it gets enabled.
var flyCheckGround1 = false; //Should it check for ground when doing these actions?
var flyVClip1 = 0; //Do you want to vClip? Default 0.
var flyHClip1 = 0; //Do you want to hClip? Default 0.

//When on ground.
var flyVClip2 = 0;
var flyHClip2 = 0;
var flyJump1 = false;

//When motionY is less than 0
var flyMotionY1 = 1; //Value for motionY.
var flyMotionYType1 = 0; //Type of value that flyMotionY1 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ1 = 1; //Value for motionX and Z.
var flyMotionXZType1 = 0; //Type of value that flyMotionXZ1 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

//When motionY is more than 0
var flyMotionY2 = 1; //Value for motionY.
var flyMotionYType2 = 0; //Type of value that flyMotionY2 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ2 = 1; //Value for motionX and Z.
var flyMotionXZType2 = 0; //Type of value that flyMotionXZ2 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

//If X ticks is % Z...
var flyTicks1 = 4;
var flyTickse1 = 0;

var flyMotionY3 = 1; //Value for motionY.
var flyMotionYType3 = 0; //Type of value that flyMotionY3 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ3 = 1; //Value for motionX and Z.
var flyMotionXZType3 = 0; //Type of value that flyMotionXZ3 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

var flyTimer1 = 1;
var flyVClip3 = 0;
var flyHClip3 = 0;

//If X ticks is % Z... #2
var flyTicks2 = 4;
var flyTickse2 = 1;

var flyMotionY4 = 1; //Value for motionY.
var flyMotionYType4 = 0; //Type of value that flyMotionY3 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ4 = 1; //Value for motionX and Z.
var flyMotionXZType4 = 0; //Type of value that flyMotionXZ3 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

var flyTimer2 = 1;
var flyVClip4 = 0;
var flyHClip4 = 0;

//If X ticks is % Z... #3
var flyTicks3 = 4;
var flyTickse3 = 2;

var flyMotionY5 = 1; //Value for motionY.
var flyMotionYType5 = 0; //Type of value that flyMotionY3 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ5 = 1; //Value for motionX and Z.
var flyMotionXZType5 = 0; //Type of value that flyMotionXZ3 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

var flyTimer3 = 1;
var flyVClip5 = 0;
var flyHClip5 = 0;

//If X ticks is % Z... #4
var flyTicks4 = 4;
var flyTickse4 = 3;

var flyMotionY6 = 1; //Value for motionY.
var flyMotionYType6 = 0; //Type of value that flyMotionY3 will do to motionY. 0 is *= (multiply) 1 is += (add) 2 is -= (subtract) 3 is /= (divide) 4 is = (set)
var flyMotionXZ6 = 1; //Value for motionX and Z.
var flyMotionXZType6 = 0; //Type of value that flyMotionXZ3 will do to motionX and Z. 0 is *= (multiply) 1 is /= (divide)

var flyTimer4 = 1;
var flyVClip6 = 0;
var flyHClip6 = 0;
