function searchGame() {
    const query = document.getElementById('search').value;
    alert('Mencari game: ' + query);
}

function login() {
    alert('Fitur login belum tersedia.');
}

function topUpNow() {
    alert('Fitur top-up belum tersedia.');
}

// Timer Flash Sale
let timer = document.getElementById('timer');
let countdown = 60 * 2 + 21;
setInterval(() => {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    timer.textContent = `${minutes}:${seconds}`;
    countdown--;
}, 1000);
