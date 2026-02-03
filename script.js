function checkPassword() {
    const secret = "212021"; // <--- CHANGE THIS to your real password
    const input = document.getElementById('password-input').value;
    if (input === secret) {
        document.getElementById('login-overlay').style.display = 'none';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}// 1. The "Impossible" No Button
const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', () => {
    // Calculate random position
    const i = Math.floor(Math.random() * (window.innerWidth - 100));
    const j = Math.floor(Math.random() * (window.innerHeight - 100));
    
    // Move the button
    noBtn.style.position = 'absolute';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// 2. The Journey Starts (Clicking Yes)
function startJourney() {
    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Switch Screens
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('gallery-screen').style.display = 'block';
    
    // Start the floating hearts
    setInterval(createHeart, 300);
}

// 3. Floating Hearts Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);

}
