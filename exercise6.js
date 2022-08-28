//function addIfEven(num){
  //  if(num%2=0){          // It will throw an error because we used the single operator =,so have to use comparision operators == or ===
    //    return num+5;
   // }
    //return num;
//}

//Here correct code

function addIfEven(num){
    if(num%2===0){
        return num+5;
    };
    return num;
};
a=addIfEven(4)
console.log(a)