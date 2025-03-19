let rows = parseInt(prompt("Enter the number of rows: "));

if(rows%2 != 0){
    let top = Math.floor(rows/2)
    for (let i = 1; i <= top; i++) {
        let space = " ".repeat(rows-2*i);
        console.log("*".repeat(i) + space + "*".repeat(i));
    }

    console.log("*".repeat(rows))

    for (let i = top; i >= 1; i--) {
        let space = " ".repeat(rows-2*i);
        console.log("*".repeat(i) + space + "*".repeat(i));
    }
}
else{
    let top = Math.floor((rows-1)/2)
    for (let i = 1; i <= top; i++) {
        let space = " ".repeat((rows-1)-2*i);
        console.log("*".repeat(i) + space + "*".repeat(i));
    }

    console.log("*".repeat(rows-1))
    console.log("*".repeat(rows-1))

    for (let i = top; i >= 1; i--) {
        let space = " ".repeat((rows-1)-2*i);
        console.log("*".repeat(i) + space + "*".repeat(i));
    }
}