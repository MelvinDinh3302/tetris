document.addEventListener("DOMContentLoaded", () => {
  // Add highlight when clicked on navbar item
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {

        const navItems = document.querySelectorAll("nav ul li");
        const links = document.querySelectorAll(".links a");

        navItems.forEach((navItem, index) => {
            navItem.addEventListener("click", () => {
            links.forEach((link) => link.classList.remove("highlight"));

            if (links[index]) {
                links[index].classList.add("highlight");
            }
            });
        });
    }

    //Add home button function
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    //Add scroll to top function
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    });

    //Add lightbox
    const thumbnails = document.querySelectorAll("img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeBtn = lightbox.querySelector(".close");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
        lightboxImage.src = thumbnail.src;
        lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
        lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
        lightbox.style.display = "none";
        }
    });

});



