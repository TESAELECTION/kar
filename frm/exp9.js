function handleSubmit() { 
    const name = document.getElementById("name").value.trim(); 
    const address = document.getElementById("address").value.trim(); 
    const city = document.getElementById("city").value.trim(); 
    const state = document.getElementById("state").value.trim(); 
    const gender = document.getElementById("gender").value; 
        const mobile = document.getElementById("mobile").value.trim(); 
        const email = document.getElementById("email").value.trim(); 
        const result = document.getElementById("result"); 
     
        let errorMessages = ""; 
     
        const alphabetPattern = /^[A-Za-z\s]+$/;
        // Validate name 
        if (!name || !alphabetPattern.test(name)) { 
            errorMessages += "Please enter a valid name.\n"; 
        } 
     
        // Validate address 
        if (!address || !alphabetPattern.test(address)) { 
            errorMessages += "Please enter an address.\n"; 
        } 
     
        // Validate city 
        if (!city || !alphabetPattern.test(city)) { 
            errorMessages += "Please enter a city.\n"; 
        } 
     
        // Validate state 
        if (!state || !alphabetPattern.test(state)) { 
            errorMessages += "Please enter a state.\n"; 
        } 
     
        // Validate gender 
        if (!gender) { 
            errorMessages += "Please select a gender.\n"; 
        } 
     
        // Validate mobile number 
        const mobilePattern = /^[0-9]{10}$/; 
        if (!mobile) { 
            errorMessages += "Please enter a mobile number.\n"; 
        } else if (!mobilePattern.test(mobile)) { 
            errorMessages += "Invalid mobile number. It should contain exactly 10 digits.\n"; 
        } 
     
        // Validate email 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!email) { 
            errorMessages += "Please enter an email address.\n"; 
        } else if (!emailPattern.test(email)) { 
            errorMessages += "Invalid email address.\nExample address: example@xyz.com\n"; 
        } 
     
    // Display error messages if any 
    if (errorMessages) { 
    result.textContent = errorMessages; 
    result.style.color = "red"; 
    return false; 
    } 
    // Redirect to success page upon successful validation 
    window.location.href = "success.html"; 
    }