let noClickCount = 0;

// Local GIF Paths
const gifLinks = [
    "gifs/gif1.gif",
    "gifs/gif2.gif",
    "gifs/gif3.gif",
    "gifs/gif4.gif",
    "gifs/gif5.gif"
];

// Changing Questions
const questions = [
    "Are you sure? 🥺",
    "Oi? Pakki! 😢",
    "Think carefully... 🤔",
    "You can't be serious! 😭",
    "Last chance to change your mind! 🫣"
];

function handleNo() {
    noClickCount++;
    const yesButton = document.getElementById('yesButton');
    const question = document.getElementById('question');
    const gifImage = document.getElementById('gifImage');

    if (noClickCount < gifLinks.length) {
        gifImage.src = gifLinks[noClickCount];
        question.innerText = questions[noClickCount] || "Come on, say yes! 😡";

        // Increase size of Yes button
        yesButton.style.transform = `scale(${1 + noClickCount * 0.3})`;
    }

    if (noClickCount >= gifLinks.length) {
        question.innerText = 'Okay, enough. You HAVE to say YES! 😤';
        yesButton.style.transform = 'scale(10)';

        // Disable "No" button
        document.getElementById('noButton').style.display = "none";
    }
}

function handleYes() {
    window.location.href = "yes.html"; // Redirect to YES page
}
