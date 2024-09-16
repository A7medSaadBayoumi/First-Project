document.getElementById('languageButton').addEventListener('click', function () {
    var menu = document.getElementById('languageMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

function changeLanguage(lang) {
    if (lang === 'en') {
        alert('Language changed to English');
    } else if (lang === 'ar') {
        alert('تم تغيير اللغة إلى العربية');
    }
    document.getElementById('languageMenu').style.display = 'none';
}


let carousel = document.querySelector('.carousel');
let carouselInner = document.querySelector('.carousel-inner');
let carouselItems = document.querySelectorAll('.carousel-item');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let currentSlide = 0;
let slideInterval;

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    }
    updateCarousel();
    resetInterval();
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }
    updateCarousel();
    resetInterval();
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentSlide) {
            item.classList.add('active');
        }
    });
}
function autoSlide() {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }
    updateCarousel();
}

document.getElementById("likeButton").addEventListener("click", function () {
    let heartIcon = document.getElementById("heartIcon");
    heartIcon.classList.toggle("red");
});



document.getElementById("likebut").addEventListener("click", function () {
    let likeIcon = document.getElementById("likeIcon");
    likeIcon.classList.toggle("blue");
});


//the automatic sliding
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds
}
function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
}
startAutoSlide();

let likes = 0;
let liked = false;

function likePost() {
    const likeButton = document.getElementById("likeBt");
    const likeCounter = document.getElementById("likeCounter");

    if (!liked) {
        likes += 1;
        likeButton.classList.add("like");
        liked = true;
    } else {
        likes -= 1;
        likeButton.classList.remove("like");
        liked = false;
    }

    likeCounter.innerText = likes;
}


//  social media links
let socialLinks = document.querySelectorAll('.social-media a');

socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(event.target.href, '_blank');
    });
});



// السهم
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
