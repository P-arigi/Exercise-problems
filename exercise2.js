let data={}
data.displayInfo();  //Here we will  get TypeError because data.displayInfo() is not a function.


//We can correct it like this
//Here I am changing variable name data to data1
  let data1={
    displayInfo(){
        let x="Apple";
        console.log(x)
    }

};
data1.displayInfo()