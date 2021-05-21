// Question 1

function convertFahrToCelcius(Fahr) {
    degreeCelcius = 0;
    errorMessage = JSON.stringify(Fahr)
    if (typeof Fahr == "number" || typeof Fahr == "string") {
        degreeCelcius = (Fahr - 32) * (5/9);
        return degreeCelcius.toFixed(4)
    } else if(Array.isArray(Fahr)) {
        return `${errorMessage} is not a valid number but a/an array`
    } else {
        return `${errorMessage} is not a valid number but a/an ${typeof Fahr}`
    }
}



//Question 2

function checkYuGiOh(n) {
    for (let a = 1; a <= n ; a++)
    if ((a % 30) == 0) {
        console.log("yu-gi-oh");
    } 
    else if ((a % 10) == 0) {
        console.log("yu-gi");
    } 
    else if ((a % 2) == 0) {
        console.log("yu");
    } 
    else if ((a % 3) == 0) {
        console.log("gi");
    } 
    else if ((a % 5) == 0) {
        console.log("oh");
    } 
    else {
        console.log(a);
    }
}

