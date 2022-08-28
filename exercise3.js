let data={};
data.displayInfo.foo="bar";
 //Here we get the "TYPE ERROR" because we didn't define the 
// displayInfo and foo variables in code, it is will give undefined. And we cannot set propertieds of undefined.

//We can correct like this

let data1={
    displayInfo:{
        foo:"status"
    }
};
data1.displayInfo.foo="bar";
console.log(data1.displayInfo.foo)

