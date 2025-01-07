const listCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function isNumber(n) {
    return typeof n === "number" && n === n && n > 0 && n < 100;
}

function isStr(str) {
    return typeof str === "string" && str.length <= 10;
}

function generateId(length, prefix = "") {
    // Xử lý và return về kết quả

    if (!isNumber(length) || !isStr(prefix))
        return "dữ liệu nhập vào không hợp lệ";

    let result = prefix;
    // console.log(result);

    for (let i = 0; i < length; ++i) {
        let random = Math.floor(Math.random() * (listCharacters.length + 1));

        result += listCharacters[random];
    }

    console.log(result);

    return result;
}

generateId(8, "user"); // Output: "user5a3Fb2DF"
generateId(4, "product - "); // Output: "product - 3a2f"
generateId(6, "category - "); // Output: "category - 2Fb3aD"
generateId(10); // Output: "5a3Fb2DFc1"
