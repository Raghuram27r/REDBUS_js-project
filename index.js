
        function toggleMenu() {
            var nav = document.getElementById("navLinks");
            nav.classList.toggle("active");
        }
        function totalmenu() {
    var menu = document.getElementById("ac-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var menu = document.getElementById("ac-menu");
    var button = document.querySelector(".nav4-button");

    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
})
const offers = [
    { title: "Weekend Special", description: "Get 20% off on weekend bookings!" },
    { title: "First Ride Free", description: "New users get their first ride free!" },
    { title: "Festival Bonanza", description: "Exciting discounts on festive bookings!" },
    { title: "Super Saver", description: "Save up to 30% on group bookings!" },
    { title: "Early Bird", description: "Book early and get exclusive discounts!" },
    { title: "Night Travel Offer", description: "Special fares for night journeys!" },
    { title: "Flash Sale", description: "Limited-time deals on select routes!" },
    { title: "Student Discount", description: "Exclusive discounts for students!" }
];

function loadOffers() {
    const container = document.getElementById("offers");
    offers.forEach(offer => {
        const box = document.createElement("div");
        box.classList.add("offer-box");
        box.innerHTML = `<h2>${offer.title}</h2><p>${offer.description}</p>`;
        container.appendChild(box);
    });
}

let index = 0;
function moveSlide(direction) {
    const container = document.getElementById("offers");
    const totalSlides = offers.length;
    const boxWidth = document.querySelector(".offer-box").offsetWidth + 20;
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    container.style.transform = `translateX(-${index * boxWidth}px)`;
}

document.addEventListener("DOMContentLoaded", loadOffers);