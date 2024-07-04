// Creating a Promise to compare two strings
let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x === y) {
        resolve(); // Resolve if strings match
    } else {
        reject(); // Reject if strings don't match
    }
});

// Handling success and errors
promise
    .then(function () {
        console.log('Success! You are a GEEK');
    })
    .catch(function () {
        console.log('Some error has occurred');
    });
