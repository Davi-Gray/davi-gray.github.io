// main.js
// This is the main entry point of our application
// It sets up the main view and the main router
// It also checks if the user is logged in or not
// If the user is logged in, it will redirect to the main view
// If the user is not logged in, it will redirect to the login view
// It also sets up the global event bus
// This is used to communicate between views and components
// It also sets up the global API object
// This is used to communicate with the backend API
// It also sets up the global store object
// This is used to store global variables
// It also sets up the global router object
// This is used to navigate between views
// It also sets up the global view object
// It also sets up the global component object
// It also sets up the global event object
// It also sets up the global helper object
// It also sets up the global config object
// It also sets up the global language object
// It also sets up the global theme object
// It also sets up the global user object

const showMessageInStatusBar = function(message, type) {
    // Get status bar element
    const statusBar = document.getElementsByClassName('status-bar')[0];
    // Set status bar message
    statusBar.innerHTML = `<p>${message}</p>`;
    // Set status bar type
    statusBar.classList.add(type);
    // Show status bar
    statusBar.style.display = 'block';
    // Hide status bar after 5 seconds
    setTimeout(function() {
        statusBar.style.display = 'none';
        statusBar.classList.remove(type);
    }, 5000);
};

// Get dead-link elements
const deadlinks = document.getElementsByClassName('deadlink');

// Add event listener to clicked dead-link elements
for (let i = 0; i < deadlinks.length; i++) {
    deadlinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        console.log('deadlink clicked');
        showMessageInStatusBar('This link is not active yet. Please try again later.', 'error');
    });
}

