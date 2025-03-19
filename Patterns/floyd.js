let rows = 5
let a = 1

for(let i = 1; i <= rows; i++){
    let b = ""
    for(let j = 1; j <= i; j++){
        b = b + a + " "
        a++
    }
    console.log(" ".repeat(rows-i) + b)
}
