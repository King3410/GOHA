window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) { // Change 50 to the scroll distance you want
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

 // Select the container and images
 const imageScroll = document.getElementById('imageScroll');

 // Variables for dragging functionality
 let isDragging = false; // Flag for dragging state
 let startX = 0; // Start X position
 let scrollLeft = 0; // Initial scroll position

 // Mouse Down (start dragging)
 imageScroll.addEventListener('mousedown', (e) => {
     isDragging = true; // Enable dragging
     startX = e.pageX - imageScroll.offsetLeft; // Get start position
     scrollLeft = imageScroll.scrollLeft; // Store initial scroll position
     imageScroll.style.cursor = "grabbing"; // Change cursor style
 });

 // Mouse Leave (stop dragging if cursor leaves)
 imageScroll.addEventListener('mouseleave', () => {
     isDragging = false; // Disable dragging
     imageScroll.style.cursor = "default"; // Reset cursor style
 });

 // Mouse Up (stop dragging)
 imageScroll.addEventListener('mouseup', () => {
     isDragging = false; // Disable dragging
     imageScroll.style.cursor = "default"; // Reset cursor style
 });

 // Mouse Move (drag the content)
 imageScroll.addEventListener('mousemove', (e) => {
     if (!isDragging) return; // Exit if not dragging
     e.preventDefault(); // Prevent default behavior
     const x = e.pageX - imageScroll.offsetLeft; // Get current X position
     const walk = x - startX; // Calculate the distance moved
     imageScroll.scrollLeft = scrollLeft - walk; // Update scroll position
 });

 // Touch Start (for mobile)
 imageScroll.addEventListener('touchstart', (e) => {
     isDragging = true; // Enable dragging
     startX = e.touches[0].pageX - imageScroll.offsetLeft; // Get start position
     scrollLeft = imageScroll.scrollLeft; // Store initial scroll position
 });

 // Touch End (stop dragging for mobile)
 imageScroll.addEventListener('touchend', () => {
     isDragging = false; // Disable dragging
 });

 // Touch Move (drag content for mobile)
 imageScroll.addEventListener('touchmove', (e) => {
     if (!isDragging) return; // Exit if not dragging
     e.preventDefault(); // Prevent default behavior
     const x = e.touches[0].pageX - imageScroll.offsetLeft; // Get current X position
     const walk = x - startX; // Calculate the distance moved
     imageScroll.scrollLeft = scrollLeft - walk; // Update scroll position
 });

// Prevent default behavior for images to avoid selection issues
const scrollImages = document.querySelectorAll('#imageScroll img');
scrollImages.forEach((img) => {
img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Accordion AboutUs
function toggleDescription(id) {
const description = document.getElementById(id);
const isVisible = description.style.display === 'block';

// Hide all descriptions
const descriptions = document.querySelectorAll('.accordion-description');
descriptions.forEach(desc => {
desc.style.display = 'none';
});

// Toggle the clicked description
description.style.display = isVisible ? 'none' : 'block';
}

// Timeline
// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
let counter = 0;
for (let i = 0; i < el.length; i++) {
const singleHeight = el[i].offsetHeight;

if (counter < singleHeight) {
counter = singleHeight;
}
}

for (let i = 0; i < el.length; i++) {
el[i].style.height = `${counter}px`;
}
}

// history and card
function toggleDescription(id) {
    const desc = document.getElementById(id);
    desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
}

// Item List
function showDescription(title, description) {
    document.getElementById("descriptionBox").innerHTML = `<h2>${title}</h2><p>${description}</p>`;
}

//Image Gallery