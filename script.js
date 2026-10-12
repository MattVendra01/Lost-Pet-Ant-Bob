// Funzione per riprodurre lo il suono e aprire la finestra di stampa
function playAndPrint() {
    // Riproduce il suono
    const sound = document.getElementById('click-sound');
    if (sound) {
        sound.play();
    }

    // Mostra la macchia vicino al bottone
    const splash = document.getElementById('splash');
    const button = document.querySelector('.print-ant-btn');
    const rect = button.getBoundingClientRect();

    splash.style.left = rect.left + rect.width/2 - 40 + "px"; // centro orizzontale
    splash.style.top = rect.top + rect.height/2 - 40 + "px"; // centro verticale
    splash.style.opacity = 1;
    splash.style.transform = "scale(1.5)";

    // Dopo 0.3s sparisce
    setTimeout(() => {
        splash.style.opacity = 0;
        splash.style.transform = "scale(0)";
    }, 300);

    // Apri la finestra di stampa
    window.print();
}

// Aggiungi l'evento click al bottone
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.print-ant-btn');
    if (button) {
        button.addEventListener('click', playAndPrint);
    }
});
