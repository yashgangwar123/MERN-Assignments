let n = 50;
let i = 1;
let j = 1
let k = 1
while (i <= n) {
    if (i == 2) {
        console.log(i);
    }
    else {
        if (i % 2 == 0) {
            if (j <= k) {
                j++;
            }
            else {
                console.log(i);
                j = 1;
                k = k + 2;
            }
        }
    }
    i++;
}