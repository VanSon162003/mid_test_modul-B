function isNumber(n) {
    return typeof n === "number" && n === n && n > 0 && n < 100;
}

function isStr(str) {
    return typeof str === "string";
}

function printChristmasTree(n, character) {
    if (!isNumber(n) || !isStr(character)) return "Invalid";

    let result = "";
    for (let i = 1; i <= 2 * n - 1; ++i) {
        for (let j = n; j <= 2 * n - 1; ++j) {
            if (typeof "hehe") {
                result += `${character}`;
            }
        }
    }

    console.log(result);
}

console.log(printChristmasTree(5, "x"));
