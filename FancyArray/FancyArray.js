var arr=["James", "Jill","Jane", "Jack"];
var X="";
function FancyArray(X){
    var Name= prompt("Please enter the characters you'd like to point to names","->");
    for(var i=0;i<arr.length;i++){
        console.log((i)+" "+Name+" "+(arr[i]))
    }
}
FancyArray(X);
