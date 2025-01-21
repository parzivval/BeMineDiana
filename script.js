// Handle "Yes" button click
document.getElementById('yessir').addEventListener('click', () => {
  const imageDiv = document.querySelector('.image');
  const header = document.querySelector('h1');

  // Change the image from the GIF to another image
  imageDiv.style.backgroundImage = "url('./img/val.png')";
  imageDiv.classList.add('image-change-animation');

  header.textContent = "You had no options🤍";
  header.classList.add('text-change-animation');
});

// Handle "No" button movement
const noButton = document.getElementById('nooo');

function moveButton() {
  // Generate random values between -100 and 100
  const xMove = Math.floor(Math.random() * 201) - 100;
  const yMove = Math.floor(Math.random() * 201) - 100;
  noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, { passive: true });

// Generate floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '🤍'; // Or use another emoji if you like

  // Start at a random left position
  heart.style.left = `${Math.random() * 100}%`;
  
  // Randomize the size
  heart.style.fontSize = `${Math.random() * (30 - 10) + 10}px`; // between 10px and 30px
  
  // Randomize the animation duration (2s to 5s)
  heart.style.animationDuration = `${Math.random() * (5 - 2) + 2}s`;
  
  // Add a random delay
  heart.style.animationDelay = `${Math.random() * 2}s`;
  
  // Give an initial horizontal shift
  heart.style.transform = `translateX(${Math.random() * 100 - 50}%)`;
  
  document.body.appendChild(heart);

  // Remove heart after it finishes floating
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);
