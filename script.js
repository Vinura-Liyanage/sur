let noClickCount = 0;

// GIFs that change on each "No" click
const gifLinks = [
    "https://tenor.com/x7Wz.gif",
    "https://media.tenor.com/G4wbpC_TqRAAAAAC/anime-sad.gif",
    "https://media.tenor.com/BB8CArBB3TsAAAAC/cat-flower.gif",
    "https://media.tenor.com/DX6FESs2wI8AAAAC/pleading-kitten.gif",
    "https://media.tenor.com/I2k8J5KMJj8AAAAC/anime-cry.gif",
    "https://media.tenor.com/8pV5Xw0jkyIAAAAC/yes-dance.gif" // Final GIF when "No" is clicked too much
];


// Questions that change with each "No"
const questions = [
    "Are you sure? 🥺",
    "Oi ? Pakki! 😢",
    "Think carefully... 🤔",
    "You can't be serious! 😭",
    "Last chance to change your mind! 🫣",
    "That's it! You HAVE to say YES! 😡"
];

function handleNo() {
    noClickCount++;
    const yesButton = document.getElementById('yesButton');
    const question = document.getElementById('question');
    const gifImage = document.getElementById('gifImage');

    if (noClickCount < gifLinks.length) {
        // Change the GIF
        gifImage.src = gifLinks[noClickCount];

        // Change the question text
        if (noClickCount < questions.length) {
            question.innerText = questions[noClickCount];
        }

        // Increase size of Yes button
        yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
    }

    // If No is clicked too many times, make Yes button take over
    if (noClickCount >= questions.length) {
        yesButton.style.transform = 'scale(10)';
        question.innerText = 'Okay, enough. You HAVE to say YES! 😤';

        setTimeout(() => {
            wwindow.location.href = "https://media.tenor.com/8pV5Xw0jkyIAAAAC/yes-dance.gif";

        }, 2000);
    }
}

function handleYes() {
    window.location.href = "https://media.tenor.com/8pV5Xw0jkyIAAAAC/yes-dance.gif";

}
