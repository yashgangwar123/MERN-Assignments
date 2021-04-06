let n = 5;

let row = 1;
while(row<=n)
{
    let col = 1
    while(col<=row)
    {
        process.stdout.write(col + "    "); // only col will produce error as this print statement only gives string so we had to concate col with string(" ") bcoz whenever we concate anything to string it converts into string
        col++;
    }
    process.stdout.write("\n"); //or console.log();
    row++;
}