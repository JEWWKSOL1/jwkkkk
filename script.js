document.getElementById("imageClickable").addEventListener("click", function() {
    var son = new Audio('sui.mp3');
    son.play();

    generateConfetti();
    generateText();
});

function generateConfetti() {
    var confettiWrapper = document.getElementById("confetti-wrapper");
    confettiWrapper.innerHTML = '';

    for (var i = 0; i < 100; i++) {
        var confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.opacity = Math.random();
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        confettiWrapper.appendChild(confetti);

        setTimeout(() => confetti.remove(), (Math.random() * 3 + 2) * 1000);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateText() {
    var text = document.createElement("div");
    text.className = "sui-text";
    text.textContent = "SUI!!";
    text.style.left = Math.random() * window.innerWidth + 'px';
    text.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(text);

    setTimeout(function() {
        document.body.removeChild(text);
    }, 2000);
}
