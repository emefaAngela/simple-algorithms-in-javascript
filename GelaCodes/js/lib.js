

const checkPrime = (number) => {
    let counter = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter++;
        }
    }

    return counter <= 2
}

const countLetters = (string) => {
    const _stringsAsArray = string.split("");
    return _stringsAsArray.length;
}


module.exports = {
    checkPrime,
    countLetters,
    // displayobj
}


