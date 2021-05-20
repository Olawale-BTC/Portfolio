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





function checkYuGiOh(n) {
    
    for (let n = 0; n <= n + 1; n++)

    if ((n % 30) == 0) {
        return "yu-gi-oh" + " "
    } else if ((n % 10) == 0) {
        return "yu-gi" + " "
    } else if ((n % 2) == 0) {
        return "yu" + " "
    } else if ((n % 3) == 0) {
        return "gi" + " "
    } else if ((n % 5) == 0) {
        return "oh" + " "
    } else {
        return n + " "
    }
}
