//
function nthPrimeNum(n) {
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (i % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log(nthPrimeNum(7));
