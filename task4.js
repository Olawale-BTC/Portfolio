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