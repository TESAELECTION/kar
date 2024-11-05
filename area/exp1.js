function validateInput(value) {
    // Check if the input is a positive number and not NaN
    return !isNaN(value) && value > 0;
}

function rectangle() {
    var l = parseFloat(document.getElementById("length").value);
    var b = parseFloat(document.getElementById("breadth").value);
    
    if (validateInput(l) && validateInput(b)) {
        var str = "Area of Rectangle is: " + (l * b).toFixed(2);
        document.getElementById("area_rectangle").innerHTML = str;
    } else {
        document.getElementById("area_rectangle").innerHTML = "Please enter valid positive numbers.";
    }
}

function circle() {
    var r = parseFloat(document.getElementById("radius").value);
    
    if (validateInput(r)) {
        var str = "Area of Circle is: " + (Math.PI * r * r).toFixed(2);
        document.getElementById("area_circle").innerHTML = str;
    } else {
        document.getElementById("area_circle").innerHTML = "Please enter a valid positive number.";
    }
}

function triangle() {
    var a = parseFloat(document.getElementById("sideA").value);
    var b = parseFloat(document.getElementById("sideB").value);
    var c = parseFloat(document.getElementById("sideC").value);
    
    if (validateInput(a) && validateInput(b) && validateInput(c) && (a + b > c) && (a + c > b) && (b + c > a)) {
        var s = (a + b + c) / 2;
        var str = "Area of Triangle is: " + (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
        document.getElementById("area_triangle").innerHTML = str;
    } else {
        document.getElementById("area_triangle").innerHTML = "Please enter valid positive numbers that form a triangle.";
    }
}
