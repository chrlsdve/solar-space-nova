// Queen data (Replace with actual names, TikTok links, ages, and descriptions)
// const queens = {
//     "minty": {
//         name: "Minty Nova",
//         age: "",
//         tiktok: "https://www.tiktok.com/@mintyfresh_dt1?lang=en",
//         bio: "A cosmic force of nature, dancing through the galaxies.",
//         image: "images/minty.jpg"
//     },
//     "celestia": {
//         name: "Celestia Star",
//         age: "",
//         tiktok: "https://www.tiktok.com/@celestia_nova4?lang=en",
//         bio: "The queen of galaxies and cosmic dreams.",
//         image: "images/celestia.jpg"
//     },
//     "galaxia": {
//         name: "Galaxia Nova",
//         age: "",
//         tiktok: "https://www.tiktok.com/@galaxianovahausofnova?lang=en",
//         bio: "Bringing starry elegance to the universe.",
//         image: "images/galaxia.jpg"
//     },
//     "astrea": {
//         name: "Galaxia Nova",
//         age: 23,
//         tiktok: "https://tiktok.com/@galaxia_nova",
//         bio: "Bringing starry elegance to the universe.",
//         image: "images/galaxia.jpg"
//     },
//     "tauria": {
//         name: "Galaxia Nova",
//         age: 23,
//         tiktok: "https://tiktok.com/@galaxia_nova",
//         bio: "Bringing starry elegance to the universe.",
//         image: "images/galaxia.jpg"
//     },
//     "zur": {
//         name: "Galaxia Nova",
//         age: 23,
//         tiktok: "https://tiktok.com/@galaxia_nova",
//         bio: "Bringing starry elegance to the universe.",
//         image: "images/galaxia.jpg"
//     }
// };

// Function to open modal and display queen info
function openQueenInfo(queenKey) {
    let queen = queens[queenKey];

    if (queen) {
        document.getElementById("queenName").innerText = queen.name;
        document.getElementById("queenAge").innerText = queen.age;
        document.getElementById("queenTikTok").href = queen.tiktok;
        document.getElementById("queenBio").innerText = queen.bio;
        document.getElementById("queenImage").src = queen.image;
        document.getElementById("queenInfoModal").style.display = "flex";
    }
}

// Function to close modal
function closeModal() {
    document.getElementById("queenInfoModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    let modal = document.getElementById("queenInfoModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Attach event listeners to each queen card
document.querySelectorAll(".queen-card img").forEach(img => {
    img.addEventListener("click", function () {
        let queenKey = this.alt.toLowerCase().replace(/\s+/g, '');
        openQueenInfo(queenKey);
    });
});


 // Smooth animations
 document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
    setTimeout(() => {
        document.querySelector('.info-section').classList.add('show');
    }, 500);
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".folder-button");
    const sections = document.querySelectorAll(".queen-container, .star-members-container, .info-section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("onclick").match(/'([^']+)'/)[1];
            toggleFolder(targetId);
        });
    });

    function toggleFolder(folderId) {
        sections.forEach(section => {
            if (section.id === folderId) {
                if (section.classList.contains("show")) {
                    section.classList.remove("show");
                    section.style.opacity = "0";
                    setTimeout(() => {
                        section.style.display = "none";
                    }, 300);
                } else {
                    section.style.display = "grid";
                    setTimeout(() => {
                        section.classList.add("show");
                        section.style.opacity = "1";
                    }, 10);
                }
            } else {
                section.classList.remove("show");
                section.style.opacity = "0";
                setTimeout(() => {
                    section.style.display = "none";
                }, 300);
            }
        });
    }

   

    window.onclick = function(event) {
        let modal = document.getElementById("queenInfoModal");
        if (event.target === modal) {
            closeModal();
        }
    };

    // Smooth scrolling effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});