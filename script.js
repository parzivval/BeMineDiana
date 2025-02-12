document.getElementById('yessir').addEventListener('click', () => {
    const imageDiv = document.querySelector('.image');
    const header = document.querySelector('h1');
    const whereBtn = document.getElementById('whereBtn');
    const btnContainer = document.querySelector('.btns');
    const slideshow = document.getElementById('slideshow');

    header.textContent = "You had no options 🤍";
    header.classList.add('text-change-animation');

    
    btnContainer.style.display = 'none';
    
   
    whereBtn.style.display = 'block';
    
   
    slideshow.style.display = 'block';
    
    startSlideshow();
});

document.getElementById('whereBtn').addEventListener('click', () => {
    const instructionsContainer = document.getElementById('instructionsContainer');
    instructionsContainer.style.display = 'block';
    instructionsContainer.classList.add('text-change-animation');
});

const noButton = document.getElementById('nooo');

function moveButton() {
    const xMove = Math.floor(Math.random() * 200 - 100);
    const yMove = Math.floor(Math.random() * 200 - 100);
    noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, { passive: true });

let currentSlide = 0;
const slides = [
    './img/IMG_8572.jpg',
    './img/IMG_9067.jpg',
    './img/IMG_9641.jpg',
    './img/IMG_9665.jpg',
    './img/IMG_9713.jpg',
    './img/IMG_9746.jpg',
    './img/IMG_9820.jpg'
];

function startSlideshow() {
    const slideImage = document.getElementById('slide');

    function changeSlide() {
        slideImage.src = slides[currentSlide];
        currentSlide = (currentSlide + 1) % slides.length;
    }

    changeSlide();  
    setInterval(changeSlide, 3000);  
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤍';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * (30 - 10) + 10}px`;
    heart.style.animationDuration = `${Math.random() * (5 - 2) + 2}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heart.style.transform = `translateX(${Math.random() * 50 - 50}%)`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
