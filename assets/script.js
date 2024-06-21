document.getElementById('demo').onclick = function(event) {
    event.preventDefault(); // Prevents the default form submission
    // Your code here
    console.log('Button clicked!');
     // Example change
    document.getElementById('kea').innerHTML = Date();
};