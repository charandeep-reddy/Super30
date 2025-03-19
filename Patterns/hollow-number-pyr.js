let rows = 5
let a = ""

for (let i = 1; i <= rows; i++) {
    a = a + i + " "
    if (i == 1 || i == rows) {
        console.log(" ".repeat(rows-i) + a);
    }
    else{
        console.log(" ".repeat(rows-i) + 1 + " ".repeat(2*i-3) + i);
    }
}