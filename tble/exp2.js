function isValidInteger(num) {
    // Check if the input is an integer, positive, and not blank
    return num !== "" && !isNaN(num) &&  num >= 1 ;
}

function do_while() {
    var num = parseInt(document.getElementById("number1").value);
    var length = parseInt(document.getElementById("length1").value);

    if (!isValidInteger(num) || !isValidInteger(length)) {
        document.getElementById("result_do_while").innerHTML = "Please enter valid positive integers for both fields.";
        return;
    }

    var i = 1;
    var result = "Multiplication table using do-while loop for: " + num + "<br>";
    do {
        result += num + " x " + i + " = " + (i * num) + "<br>";
        i++;
    } while (i <= length);

    document.getElementById("result_do_while").innerHTML = result;
}

function for_loop() {
    var num = parseInt(document.getElementById("number2").value);
    var length = parseInt(document.getElementById("length2").value);

    if (!isValidInteger(num) || !isValidInteger(length)) {
        document.getElementById("result_for").innerHTML = "Please enter valid positive integers for both fields.";
        return;
    }

    var result = "Multiplication table using for loop for: " + num + "<br>";
    for (var i = 1; i <= length; i++) {
        result += num + " x " + i + " = " + (i * num) + "<br>";
    }

    document.getElementById("result_for").innerHTML = result;
}

function while_loop() {
    var num = parseInt(document.getElementById("number3").value);
    var length = parseInt(document.getElementById("length3").value);

    if (!isValidInteger(num) || !isValidInteger(length)) {
        document.getElementById("result_while").innerHTML = "Please enter valid positive integers for both fields.";
        return;
    }

    var i = 1;
    var result = "Multiplication table using while loop for: " + num + "<br>";
    while (i <= length) {
        result += num + " x " + i + " = " + (i * num) + "<br>";
        i++;
    }

    document.getElementById("result_while").innerHTML = result;
}
