const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "watermelon"
];

let score = 0;
let time = 60;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = getRandomWord();
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}

function updateTime() {
    const timeElement = document.getElementById("time");
    timeElement.textContent = time;
}

function startGame() {
    score = 0;
    time = 60;
    updateWord();
    updateScore();
    updateTime();
    document.getElementById("input").value = "";

    const messageElement = document.getElementById("message");
    messageElement.textContent = "ゲームを開始しました！";

    const inputElement = document.getElementById("input");
    inputElement.disabled = false;
    inputElement.focus();

    const gameInterval = setInterval(function () {
        if (time > 0) {
            time--;
            updateTime();
        } else {
            clearInterval(gameInterval);
            messageElement.textContent = "ゲームオーバー！ スコア: " + score;
            inputElement.disabled = true;
        }
    }, 1000);
}

document.getElementById("input").addEventListener("input", function (event) {
    const inputText = event.target.value;
    const currentWord = document.getElementById("word").textContent;

    if (inputText === currentWord) {
        score++;
        updateScore();
        updateWord();
        event.target.value = "";
        const messageElement = document.getElementById("message");
        messageElement.textContent = "正解！";
    }
});

startGame();
