let n = 12345;
let reverseNo = 0;
num = n;
while (num > 0) 
{
    temp = num % 10;
    reverseNo = (reverseNo * 10) + temp;
    num = Math.floor(num/10);
}
console.log("Reverse of the number "+n+" is => "+reverseNo);