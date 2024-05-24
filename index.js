document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login_form form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get input values
        const username = form.querySelector('.username').value.trim();
        const password = form.querySelector('[name="password"]').value.trim();

        // Simple validation - check if username and password are not empty
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            return; // Exit the function
        }

        // Assuming validation passed, you can proceed with form submission
        // For now, let's just log the username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // Reset the form
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search input[type="text"]');
    const searchButton = document.querySelector('.search button[type="submit"]');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (searchTerm !== '') {
            // Redirect to the appropriate page based on the search term
            if (searchTerm.includes('product')) {
                window.location.href = 'products.html?search=' + encodeURIComponent(searchTerm);
            } else if (searchTerm.includes('log in forms')) {
                window.location.href = 'LogInForms.html?search=' + encodeURIComponent(searchTerm);
            } else if (searchTerm.includes('contact us')) {
                window.location.href = 'contactus.html?search=' + encodeURIComponent(searchTerm);
            } else {
                window.location.href = 'aboutus.html?search=' + encodeURIComponent(searchTerm);
            }
        } else {
            alert("Please enter a search term.");
        }
    });

    // Optional: Listen for Enter key press to trigger search
    searchInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            searchButton.click();
        }
    });
});


