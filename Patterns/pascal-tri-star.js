let rows = 5

for (let i = 1; i <= rows; i++) {
    if (i == 1 || i == rows) {
        console.log(" ".repeat(rows-i) + "* ".repeat(i));
    }
    else{
        console.log(" ".repeat(rows-i) + "*" + " ".repeat(2*i-3) + "*");
    }
}