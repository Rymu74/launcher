// script.js

const icons = document.querySelectorAll('.icon');
const iframeContainer = document.getElementById('iframe-container');
const iframe = document.getElementById('iframe');

icons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop propagation to the document click event
        const url = icon.getAttribute('data-url');

        if (url) {
            iframe.src = url;
        }

        // Show the iframe container with animation
        iframeContainer.style.display = 'block';
        setTimeout(() => {
            iframeContainer.style.opacity = 1;
        }, 10);
    });
});

// Close the iframe container when clicking outside
document.addEventListener('click', (event) => {
    if (!iframeContainer.contains(event.target)) {
        closeIframeContainer();
    }
});

function closeIframeContainer() {
    // Hide the iframe container with animation
    iframeContainer.style.opacity = 0;
    setTimeout(() => {
        iframeContainer.style.display = 'none';
        iframe.src = ''; // Clear the iframe source
    }, 300);
}
