var HOUR=7;
var MINUTE=59;
var RANGE = "";
var RELATIVE=""
var PERIOD =""


if(HOUR<12){
  RANGE="in the morning.";
  PERIOD ="am";
}
else{
    HOUR=HOUR-12;
    PERIOD="pm";
    if(HOUR<6){
        RANGE="in the afternoon.";
        }
        else{
          RANGE="in the evening.";
        }
}
if(MINUTE===0){
    RELATIVE="exactly";
}
else if(MINUTE<15&&MINUTE>0){
    RELATIVE="just after";
}
else if(MINUTE<30&&MINUTE>14){
    RELATIVE="quarter past";
}
else if(MINUTE<45&&MINUTE>29){
    RELATIVE="half past";
}
else{
    HOUR=HOUR+1;
    RELATIVE="just before";
}
console.log("It is "+RELATIVE+" "+HOUR+" "+RANGE);
