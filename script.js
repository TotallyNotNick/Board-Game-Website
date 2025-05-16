/*
/ CODE FOR RULEBOOK OVERLAY
*/
const rulebookIcon = document.getElementById('rulebook-icon');
const rulebookOverlay = document.getElementById('rulebook-overlay');
const closeRulebook = document.getElementById('close-rulebook');

window.onload = function () {
    if (rulebookOverlay.style.display != 'none') {
        rulebookIcon.style.display = 'none'
    } else {
        rulebookIcon.style.display = 'flex';
    }
    rulebookOverlay.classList.remove("rulebook-animation")
    void rulebookOverlay.offsetWidth;
}

rulebookIcon.addEventListener('click', () => {
    rulebookOverlay.classList.remove("rulebook-animation")
    void rulebookOverlay.offsetWidth;
    rulebookOverlay.classList.add("rulebook-animation")
    rulebookOverlay.style.display = 'flex';
    rulebookIcon.style.display = 'none';
});

closeRulebook.addEventListener('click', () => {
    rulebookOverlay.style.display = 'none';
    rulebookIcon.style.display = 'flex';
});

// Optional: click outside to close
rulebookOverlay.addEventListener('click', (e) => {
    if (e.target === rulebookOverlay) {
        rulebookOverlay.style.display = 'none';
        rulebookIcon.style.display = 'flex';
    }
});




