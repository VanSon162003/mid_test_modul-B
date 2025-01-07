function highlightKeyword(content, keyword) {
    if (typeof content !== "string" || typeof keyword !== "string")
        return "Invalid";

    const regex = new RegExp(keyword, "gi");

    const result = content.replace(regex, (e) => {
        return `<strong>${e}</strong>`;
    });

    console.log(result);
}
highlightKeyword(
    "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
    "thú vỊ"
);

highlightKeyword(
    "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
    "hehe"
);
