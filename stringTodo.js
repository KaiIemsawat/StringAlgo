// --- Remove Blank
let str = "Pl ayTha tF u nkyM usi c";
function eleminateSpace(str) {
    return str.replaceAll(" ", "");
}
console.log(eleminateSpace(str));

let str2 = "Pl ayTha tF u nkyM usi c";
function eleminateSpaceTwo(str) {
    let tempArr = str.split(" ");
    return tempArr.join("");
}
console.log(eleminateSpaceTwo(str2));

// --- Get Digit
let strNum = "abc8c0d1ngd0j0!8";
function getStrNum(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i))) {
            res += str.charAt(i);
        }
    }
    return res;
}
console.log(getStrNum(strNum));

// --- Acronyms
let str3 = "Live from New York, it's Saturday Night!";
function firstUpper(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str.charAt(0) !== " ") {
            res = str.charAt(0);
        }
        if (str.charAt(i) === " " && i < str.length - 2) {
            res += str.charAt(i + 1);
        }
    }
    return res.toUpperCase();
}
console.log(firstUpper(str3));

// --- Count Non-Spaces
let someSpaces = "Honey pie, you are driving me crazy";
function countNonSpace(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== " ") {
            count++;
        }
    }
    return count;
}
console.log(countNonSpace(someSpaces));

// --- Remove Shorter Strings
let givenArr = ["There", "is", "a", "bug", "in", "the", "system"];
let givenNum = 3;
function removeShortStr(strArr, num) {
    let resArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= num) {
            resArr.push(strArr[i]);
        }
    }
    return resArr;
}
console.log(removeShortStr(givenArr, givenNum));
