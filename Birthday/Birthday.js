function Birthdaycountdown(X){
    if(X>30)
    {
        console.log("Boohoo my birthday is super far away, "+X+" days.")
    }
    else if(X===30)
    {
        console.log("My birthday is "+X+" days away.")
    }
    else if(X<31&&X>4)
    {
        console.log("My birthday's coming soon, it's only "+X+" days away!")
    }
    else if(X<5&&X>0)
    {
        console.log("ZOMG MY BIRTHDAY IS JUST "+X+ "DAYS AWAY!!")
    }
    else if(X===0){
        console.log("Happy Birthday to me!")
    }
}
Birthdaycountdown(29);
