var newArray = [1, "apple", -3, "orange", 0.5];
function numbersOnly(newArray){
    for (i=newArray.length-1;i>=01;i--){
        if (typeof newArray[i]==="string")
        {
            newArray.splice(i,1);
        }
    }
}
numbersOnly(newArray);
console.log(newArray);


var newArray3=[];
var newArray4 = [1, "apple", -3, "orange", 0.5];
function numbersOnly2(newArray4){
    for (j=0;j<newArray4.length;j++){
        if (typeof newArray4[j]==="number")
        {
            newArray3.push(newArray4[j]);
        }
    }
}
numbersOnly2(newArray4);
console.log(newArray3);
