function validateInput() {
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
	var max = 100;

    // Validate input fields
    if (name === "" || name.length >= max) {
        alert("Please enter a valid name.");
        return false;
    }

    if (email === "" || !email.endsWith(".com")) {
        alert("Please enter a valid email.");
        return false;
    } 

    if (subject === "" || subject.length >= max) {
        alert("Please enter a valid subject.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    } else if (message.length > 500) { // Adjust the character limit as needed
        alert("Message exceeds the maximum limit of 500 characters.");
        return false;
    }

    // If all fields are valid, return true
    return true;
}

