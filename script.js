let noClickCount = 0;

// GIFs that change on each "No" click
const gifLinks = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fpikachu-crying-gifs&psig=AOvVaw0sEVCxy43FvIQPMw1J0VlB&ust=1739127579939000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjQ957htIsDFQAAAAAdAAAAABAI",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F724516658778449419%2F&psig=AOvVaw3Cnoxg9PXwyQNKstCKsssU&ust=1739127631755000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCVoLjhtIsDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fpikachu-flowers-pokemon-gif-24289296&psig=AOvVaw2Ne-mhEtSk3qy3a4Qhs89k&ust=1739127686560000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjS6dPhtIsDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fcat-flower-gifs&psig=AOvVaw2nStIUiEpPiNp4CUwmdOIP&ust=1739127725945000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjBp-ThtIsDFQAAAAAdAAAAABAR",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fpokemon-anime-aNFT7eG2rIKK715uLk&psig=AOvVaw34VqMN7SNkDoDQ8dN8VkIV&ust=1739127780624000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIih5v7htIsDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fgifgangnam3gif--495255290257321261%2F&psig=AOvVaw3yrxWsLUt0jGskxb0ISMW0&ust=1739127822403000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDex5LitIsDFQAAAAAdAAAAABAQ"  // Final GIF when "No" is clicked too much
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
            window.location.href = "https://your-final-yes-gif.com"; // Redirect to the final "Yes" message
        }, 2000);
    }
}

function handleYes() {
    window.location.href = "https://your-final-yes-gif.com"; // Redirect when Yes is clicked
}
