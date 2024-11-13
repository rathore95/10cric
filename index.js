function updateImage() {
    const imageElements = document.querySelectorAll('.image2'); // Select all elements with class 'image2'
    imageElements.forEach((imageElement, index) => {
        if (window.innerWidth < 885) {
            // Change to different second image sources based on index
            switch (index) {
                case 0:
                    imageElement.src = 'Cricket/newasset 23.png'; // Change to your second image source for the first image
                    break;
                case 1:
                    imageElement.src = 'Cricket/newasset 21.png'; // Change to your second image source for the second image
                    break;
                case 2:
                    imageElement.src = 'Cricket/newasset 22.png'; // Change to your second image source for the third image
                    break;
            }
        } else {
            // Change back to original images
            switch (index) {
                case 0:
                    imageElement.src = 'Cricket/asset 23.png';
                    break;
                case 1:
                    imageElement.src = 'Cricket/asset 21.png';
                    break;
                case 2:
                    imageElement.src = 'Cricket/asset 22.png';
                    break;
            }
        }
    });
}

// Initial check
updateImage();

// Add event listener for window resize
window.addEventListener('resize', updateImage);


let lastScrollTop = 0;
const scrollDiv = document.getElementById('scrollDiv10');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        scrollDiv.style.display = 'block';
    } else {
        // Scrolling up
        scrollDiv.style.display = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});