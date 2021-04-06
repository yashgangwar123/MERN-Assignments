let n = 12345;
let noOfDigits = 0;
num = n;
while (num > 0) 
{
    num = Math.floor(num / 10);
    noOfDigits++
}
console.log("no. of digits in the number " + n + " are " + noOfDigits);