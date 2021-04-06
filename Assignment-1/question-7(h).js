let n = 5;

let row = 1;
let row_mirr = 1;
while (row_mirr <= n * 2 - 1) 
{
    let col = 1
    let col_mirr=1;
    while(col_mirr<=n*2-1)
    {
        if(col <= n-row+1) 
        {
            process.stdout.write("* ");
        }
        else
        {
            process.stdout.write("  ");
        }

        if(col_mirr<=n-1)
        {
            col++;
        }
        else
        {
            col--
        }
        col_mirr++;
    }
    process.stdout.write("\n");
    if (row_mirr <= n - 1) 
    {
        row++
    }
    else 
    {
        row--
    }
    row_mirr++;
}