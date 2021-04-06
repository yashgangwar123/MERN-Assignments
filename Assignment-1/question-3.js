//Euclidean algorithm
let a = 98;
let b = 56;
while(b != 0)
{
    let temp = a;
    a=b;
    b=temp%b;
}
console.log("GCD of given two no. is "+a);

//ALTERNATIVE METHOD
// let a = 98;
// let b = 56;
// while ((a != 0 || b != 0) && a != b) {
//     if (a > b) {
//         a = a - b;
//     }
//     else {
//         b = b - a;
//     }
// }
// if (a == 0) {
//     console.log(b)
// }
// if (b == 0) {
//     console.log(a)
// }
// if (a == b) {
//     console.log(a)
// }