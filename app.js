// app.js - Logika Pemutar Musik Zuanxi

function putar(videoId, judul, artis) {
    // 1. Ambil elemen-elemen yang dibutuhkan
    const frame = document.getElementById('youtube-frame');
    const display = document.getElementById('player-display');
    const targetJudul = document.getElementById('target-judul');
    const targetArtis = document.getElementById('target-artis');

    // 2. Munculkan kotak player (yang tadinya sembunyi)
    display.style.display = "block";

    // 3. Masukkan link video YouTube ke dalam frame
    // Menggunakan youtube-nocookie agar lebih lancar di web
    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

    // 4. Update teks judul dan artis di bagian bawah
    targetJudul.innerText = judul;
    targetArtis.innerText = artis;

    // 5. Scroll otomatis ke atas supaya player terlihat
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fitur Pencarian Lagu
const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toUpperCase();
    const songCards = document.getElementsByClassName('song-card');

    for (let i = 0; i < songCards.length; i++) {
        let title = songCards[i].getElementsByTagName('h3')[0].innerText;
        let artist = songCards[i].getElementsByTagName('p')[0].innerText;

        if (title.toUpperCase().indexOf(filter) > -1 || artist.toUpperCase().indexOf(filter) > -1) {
            songCards[i].style.display = ""; // Tampilkan jika cocok
        } else {
            songCards[i].style.display = "none"; // Sembunyikan jika tidak cocok
        }
    }
});
