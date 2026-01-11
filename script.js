// Get the form element by its ID
const myForm = document.getElementById('myForm');

// Add an event listener for the 'submit' event
myForm.addEventListener('submit', function(event) {
    // 1. Prevent the default form submission behavior (page reload)
    event.preventDefault(); 

    // 2. Get the value from the input field
    const nameInput = document.getElementById('name');
    const userName = nameInput.value;

    // 3. Get the message area element
    const messageArea = document.getElementById('messageArea');

    // 4. Display the message
    if (userName.trim() !== "") {
        messageArea.textContent = `Thank you, ${userName}! Your form has been submitted successfully.`;
        
        // Optional: Clear the input field after submission
        nameInput.value = ''; 
    } else {
        messageArea.textContent = 'Please enter your name before submitting.';
        messageArea.style.color = 'red'; // Change color for an error message
    }
});
