let leftScore = 0;
let rightScore = 0;
let scoreHistory = [];

function addScore(player, points) {
    if (player === 'left') {
        leftScore += points;
    } else {
        rightScore += points;
    }
    updateScoreboard();
    addHistory(player, points);
}

function foul(player, points) {
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
    historyItem.innerText = `${playerName} ${isFoul ? '¥Ç?' : '±o¤À'} ${points}¤À`;
    document.getElementById('scoreHistory').appendChild(historyItem);
}