document.getElementById("mail").addEventListener("click", function() {
    const text = this.innerText; // Get button text
    navigator.clipboard.writeText(text).then(() => {
        showStatus(`Copied: "${text}"`);
    });
});

function showStatus(message) {
    const status = document.getElementById("status");
    status.innerText = message;
    status.style.opacity = 1;
    setTimeout(() => {
        status.style.opacity = 0;
    }, 1500);
}
