function printRange(X,Y,Z){
if(Y===undefined){
    for(i=0;i<X;i++)
        {console.log(i);}
    }
    else if(Z===undefined) {
        for(i=X;i<Y;i=i+1)
            {console.log(i);}
        }
        else{
            for(i=X;i<Y;i=i+Z)
                {console.log(i);}
        }
}
printRange(17)
