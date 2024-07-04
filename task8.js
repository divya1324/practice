// Function to perform Calculation
function calculation(type, a, b) {
    switch (type) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "devide":
            return a / b;
    }
}
// Usage
// console.log("add", calculation("add", 10, 5))
// console.log("sub", calculation("sub", 10, 5))
// console.log("mul", calculation("mul", 10, 5))
// console.log("devide", calculation("devide", 10, 5))



function printTable(t){
    for(let i=1; i<=10; i++)
        console.log(i*t)

}
printTable(12)


