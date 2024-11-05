function getReverseString(str) {
    return str.split("").reverse().join("");
}

function reverseString() {
    var str = document.getElementById("input_string").value;
    let rev_str = getReverseString(str);
    // console.log(rev_str);
    var result = "String reversed using split(), reverse() and join(): " + rev_str;
    document.getElementById("result_reverse").innerHTML = result;
}

function replaceAt(str, index, replacement) {
    if (index >= 0 && index < str.length) {
        return str.substring(0, index) + replacement + str.substring(index + 1);
    } else {
        return -1;
    }
}

function replaceCharByIndex() {
    var str = document.getElementById("input_string").value;
    var index = parseInt(document.getElementById("index_position").value);
    var replacement = document.getElementById("replacement_char").value;
    var new_str = replaceAt(str, index, replacement);
    if (new_str != -1) {
        var result = "Replaced a character at index using substring(): " + new_str;
        document.getElementById("result_replace").innerHTML = result;
    } else {
        document.getElementById("result_replace").innerHTML = "Index out of bound";
    }
}

function checkPalindrome() {
    var str = document.getElementById("input_string").value;
    var cleanedStr=str.toLowerCase();
    var reversedStr = getReverseString(cleanedStr);
    var result = cleanedStr == reversedStr ? "The string is a palindrome." : "The string is not a palindrome.";
    document.getElementById("result_palindrome").innerHTML = result;
}
