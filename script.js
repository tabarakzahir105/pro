// Image Slider for Hero Section
let imageIndex = 0;  // Renamed to avoid conflict with reviewIndex
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[imageIndex].style.display = 'none';
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);

// Order Form Modal
function openOrderForm() {
    document.getElementById("orderForm").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("orderForm").style.display = "none";
}









