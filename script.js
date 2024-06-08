// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert('Message sent successfully!');
    // Here you can add code to send form data to a server
});
