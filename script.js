document.getElementById('yessir').addEventListener('click', () => {
    // Grab the <img> inside .image instead of the div background
    const image = document.querySelector('.image img');
    const header = document.querySelector('h1');

    // Change the src of the <img> to val.png
    image.src = "./img/val.png";
    // Add an animation class if desired
    image.classList.add('image-change-animation');

    header.textContent = "You had no options🤍";
    header.classList.add('text-change-animation');
});

const noButton = document.getElementById('nooo');

function moveButton() {
    const xMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    const yMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, {passive: true});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤍'; // Using the heart emoji

    // Randomly position hearts at the start
    heart.style.left = `${Math.random() * 100}%`;

    // Randomize the size of the hearts
    heart.style.fontSize = `${Math.random() * (30 - 10) + 10}px`; // 10px to 30px

    // Randomize the animation duration
    heart.style.animationDuration = `${Math.random() * (5 - 2) + 2}s`; // 2s to 5s

    // Start animation at a random delay
    heart.style.animationDelay = `${Math.random() * 2}s`;

    // Adjust the sideways movement for more natural float
    heart.style.transform = `translateX(${Math.random() * (50 - -50) + -50}%)`;

    document.body.appendChild(heart);

    // Remove heart after it finishes floating
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a new heart every 300 ms
setInterval(createHeart, 300);
