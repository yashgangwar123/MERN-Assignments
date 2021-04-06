let n = 5;
let row = 1;
let k=n*2-2;

while(row<=n)
{
    let sp = 1;
    while(sp<=k)
    {
        process.stdout.write(" ");
        sp++;
    }
    k=k-2;

    let i = 1;
    while(i<=row)
    {
        process.stdout.write(i+" ")
        i++;
    }
    
    let j=row-1;
    while(j>=1)
    {
        process.stdout.write(j+" ")
        j--;
    }
    console.log();
    row++;
}
