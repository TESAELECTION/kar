
function compareStrict() {
    var str1 = document.getElementById("string_1").value;
    var str2 = document.getElementById("string_2").value;
    var result = str1 === str2;
    var resultText = result ? "The strings are identical." : "The strings are different.";
    document.getElementById("result_compare_strict").innerHTML = resultText;
}

function compareLocal() {
    var str1 = document.getElementById("string_1").value.trim();
    var str2 = document.getElementById("string_2").value.trim();

    var comparisonResult = str1.localeCompare(str2);

    var resultText = "";
    if (comparisonResult === 0) {
        resultText = "The strings are identical.";
    } else if (comparisonResult < 0) {
        resultText = "String 1 comes before String 2.";
    } else {
        resultText = "String 1 comes after String 2.";
    }

    document.getElementById("result_compare_local").innerHTML = resultText;
}

function compareLength() {
    var str1 = document.getElementById("string_1").value.trim();
    var str2 = document.getElementById("string_2").value.trim();

    var resultText = "";

    if (str1.length !== str2.length) {
        resultText = "The strings have different lengths, so they are not identical.";
    } else {
        if (str1 === str2) {
            resultText = "The strings have the same length and are identical.";
        } else {
            resultText = "The strings have the same length but are different.";
        }
    }

    // Display the result
    document.getElementById("result_compare_length").innerHTML = resultText;
}


