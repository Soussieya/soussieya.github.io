// Function to toggle deep learning buttons visibility
function toggleDeepLearningButtons() {
    let btns = document.querySelector('.hidden-buttons');
    btns.style.display = (btns.style.display === "block") ? "none" : "block";
}

// Function to display an image
function showImage(imageSrc) {
    let imgElement = document.getElementById("deep-learning-img");
    let nvidiaImg = document.getElementById("nvidia-cert-img");

    // Reset NVIDIA image if showing
    if (nvidiaImg) nvidiaImg.classList.add("hidden");

    // Set the image source
    imgElement.src = imageSrc;
    imgElement.classList.remove("hidden");
}
