let leftScore = 0;
let rightScore = 0;
let scoreHistory = [];
let gameStarted = false; // �Τ_?�d��?�O�_?�l

function startGame() {
    const playerLeftName = document.getElementById('playerLeft').value;
    const playerRightName = document.getElementById('playerRight').value;

    if (!playerLeftName || !playerRightName) {
        alert('??�J?��?�⪺�W�r�I');
        return;
    }

    // ��l�Ƥ�?�M?�v??
    leftScore = 0;
    rightScore = 0;
    scoreHistory = [];
    document.getElementById('scoreHistory').innerHTML = '';
    updateScoreboard();

    // ??��??�l
    gameStarted = true;

    alert(`��??�l�I\nPlayer 1�G${playerLeftName}\nPlayer 2�G${playerRightName}`);
}

function addScore(player, points) {
    if (!gameStarted) {
        alert('?��??��?�l��?���I');
        return;
    }

    if (player === 'left') {
        leftScore += points;
    } else {
        rightScore += points;
    }
    updateScoreboard();
    addHistory(player, points);
}

function foul(player, points) {
    if (!gameStarted) {
        alert('?��??��?�l��?���I');
        return;
    }

    if (player === 'left') {
        rightScore += points;
    } else {
        leftScore += points;
    }
    updateScoreboard();
    addHistory(player === 'left' ? 'right' : 'left', points, true);
}

function reset() {
    leftScore = 0;
    rightScore = 0;
    scoreHistory = [];
    gameStarted = false;
    updateScoreboard();
    document.getElementById('scoreHistory').innerHTML = '';
}

function updateScoreboard() {
    document.getElementById('leftScore').innerText = leftScore;
    document.getElementById('rightScore').innerText = rightScore;
}

function addHistory(player, points, isFoul = false) {
    const playerName = document.getElementById(`player${player.charAt(0).toUpperCase() + player.slice(1)}`).value || player;
    const historyItem = document.createElement('li');
    historyItem.innerText = `${playerName} ${isFoul ? '��?' : '�o��'} ${points}��`;
    document.getElementById('scoreHistory').appendChild(historyItem);
}