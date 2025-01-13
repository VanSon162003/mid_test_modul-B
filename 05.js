function findSecondLargestNumber(arr) {
    if (arr.length === 0 || !Array.isArray(arr)) return "Invalid";

    if (arr.length === 1) return null;

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
    }

    return max2;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findSecondLargestNumber([100, 101, 102, 103, 104, 105]));
console.log(
    findSecondLargestNumber([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
);
console.log(findSecondLargestNumber([1, 2]));
console.log(findSecondLargestNumber([1]));
console.log(findSecondLargestNumber([]));
console.log(findSecondLargestNumber("asd"));
console.log(findSecondLargestNumber([10, 10, 10, 9]));
console.log(findSecondLargestNumber([1, 1, 1]));
