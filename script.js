// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Scroll to Top Button
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = function() {
        scrollFunction();
    };
    function showText() {
        // Get the link element
        let link = document.getElementById("more");
        // Get the hidden text element
        let hiddenText = document.getElementById("text");
    
        // Show the hidden text
        hiddenText.style.display = "inline";
    
        // Hide the link
        link.style.display = "none";
    }
    
    // Add event listener to the link
    document.getElementById("more").addEventListener("click", showText);
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
    scrollToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Show/Hide Project Descriptions
    let projectImages = document.querySelectorAll(".project img");
    projectImages.forEach(image => {
        image.addEventListener("click", function() {
            let projectDescription = this.nextElementSibling;
            projectDescription.classList.toggle("show");
        });
    });

    // Light/Dark Mode Toggle
    // script.js

    document.addEventListener("DOMContentLoaded", function() {
    // Toggle button click event
    let toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

});
