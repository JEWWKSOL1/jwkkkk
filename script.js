document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = '/';
});

document.getElementById('supportButton').addEventListener('click', function() {
    window.location.href = '/support';
});

function generateRandomPercentage() {
    const percentage = document.createElement('div');
    percentage.classList.add('percentage');
    const value = Math.round(Math.random() * 200 - 100);
    percentage.textContent = `${value}%`;
    percentage.style.color = value >= 0 ? 'green' : 'red';
    updatePosition(percentage);
    return percentage;
}

function updatePosition(element) {
    element.style.top = `${Math.random() * 100}%`;
    element.style.left = `${Math.random() * 100}%`;
}

function resetAnimation(element) {
    element.style.animation = 'none';
    setTimeout(() => element.style.animation = '', 0); // Réinitialiser l'animation
}

function populateBackground() {
    const background = document.getElementById('background-percentages');
    for (let i = 0; i < 50; i++) {
        const percentage = generateRandomPercentage();
        setTimeout(() => {
            background.appendChild(percentage);
            // Animation pour faire apparaître et disparaître le pourcentage
            setTimeout(() => percentage.style.animation = 'fadeInOut 5s ease-in-out', i * 100);
			percentage.addEventListener('animationend', () => resetAnimation(percentage));
		}, i * 100);
            // Mettre à jour la position toutes les 5 secondes
            setInterval(() => updatePosition(percentage), 5000);
    }
}

populateBackground();
