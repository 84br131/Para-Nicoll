document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const content = document.querySelector('.letter .content');
    const heartsContainer = document.getElementById('hearts-container');
    const backgroundHeartsContainer = document.querySelector('.background-hearts');
    let isOpen = false;

    function createBackgroundHearts() {
        const heart = document.createElement('div');
        heart.className = 'background-heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (15 + Math.random() * 10) + 's';
        backgroundHeartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 20000);
    }

    // Iniciar corazones de fondo
    setInterval(createBackgroundHearts, 2000);
    for(let i = 0; i < 10; i++) {
        setTimeout(createBackgroundHearts, i * 200);
    }

    envelope.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isOpen) {
            openEnvelope();
        } else {
            closeEnvelope();
        }
    });

    function openEnvelope() {
        envelope.classList.add('open');
        setTimeout(() => {
            letter.classList.add('open');
            content.style.transform = 'rotateX(0deg)';
        }, 500);
        isOpen = true;
        setTimeout(downloadPDF, 30000);
    }

    function closeEnvelope() {
        content.style.transform = 'rotateX(180deg)';
        letter.classList.remove('open');
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 500);
        isOpen = false;
    }

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = 'carta-de-amor.pdf';
        link.download = 'carta-de-amor.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.textContent = '❤️';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones principales
    createHeart();
    setInterval(createHeart, 300);
});

