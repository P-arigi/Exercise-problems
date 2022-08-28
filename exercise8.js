/*function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();*/

/*First we are removing SyntaxErrors in above code
1)In foor loop it is ended with colon, but according to syntax of for loop there is no colon at the end.(line 4)
2) In if statement there ended with colon, but there is no colon according to  the syntax (lin 5)
3) In if statement we need to use comparision operators == or ===. If we use = we get error (line 5)
Logical Errors are:
4)In for loop we gave "i<numbers.length-1" so it will not take the last element in list. So we can replace like this
  i<numbers.length or i<=numbers.length-1 to take the total elements in the list.
5)In if condition we want to check with the elements of the list "numbers" so we want to replace "numbers" with "numbers[i]"
6) We need  to replace 'i' with 'numbers[i]' in (line 6) 
7)We need to replace return evenNumbers outside the for block otherwise the function will be terminated after a single interation*/

function displayEvenNumbers(){
    let numbers=[1,2,3,4,5,6,7,8];
    let evenNumbers=[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers())