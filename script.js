// Define Variables
const items = document.querySelectorAll('.item');

// Initialize State
let currentIndex = 0;

// Function to update the slideshow
function updateSlideShow() {
    // Hide all items
    items.forEach(item => item.style.display = 'none');
    
    // Show the current item
    items[currentIndex].style.display = 'block';
    
    // Update currentIndex for the next item, loop back to start if at the end
    currentIndex = (currentIndex + 1) % items.length;
}

// Call updateSlideShow initially to display the first slide
updateSlideShow();

// Automatically change slide every 3 seconds
setInterval(updateSlideShow, 5000);