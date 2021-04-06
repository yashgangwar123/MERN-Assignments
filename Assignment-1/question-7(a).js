let n = 5;

let row = 1;
while(row<=n)
{
    let col = 1
    while(col<=row)
    {
        process.stdout.write("*     ");  
        col++;
    }
    process.stdout.write("\n"); //or console.log();
    row++;
}