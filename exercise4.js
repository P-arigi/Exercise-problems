//function data(){
  //  let thing="foo"
//}
//data()
//thing;   //Here we will get the "REFERENCE ERROR" because we are invoking thing variable out of the scope.

//We can correct it like this

function data(){
    let thing="foo"
    thing;
    console.log(thing);
}

data()


