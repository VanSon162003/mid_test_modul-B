function printChristmasTree(n, character) {
    // Kiểm tra điều kiện đầu vào
    if (
        typeof n !== "number" ||
        n <= 0 ||
        n >= 100 ||
        typeof character !== "string" ||
        character.length !== 1
    ) {
        return "Invalid";
    }

    // Tán cây thông noel
    let result = "";
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = character.repeat(2 * i - 1);
        result += spaces + stars + "\n";
    }

    // Phần gốc cây
    let trunk = " ".repeat(n - 1) + character;
    result += trunk;

    console.log(result);
    return result;
}

// Ví dụ sử dụng
printChristmasTree(5, "*");
console.log(); // Dòng trống giữa các ví dụ
printChristmasTree(4, "o");
console.log(); // Dòng trống giữa các ví dụ
console.log(printChristmasTree(-10, "x"));
