function loadHome() {
    document.getElementById('content').innerHTML = `
        <h1>Welcome to MovieSceneSpotlight</h1>
        <p>This is the home page.</p>
    `;
}

function loadAbout() {
    document.getElementById('content').innerHTML = `
        <h1>About Us</h1>
        <p>This is the about page.</p>
    `;
}

function loadContact() {
    document.getElementById('content').innerHTML = `
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
    `;
}

// Load the home page by default
window.onload = loadHome;
