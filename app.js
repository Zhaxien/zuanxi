// Database Lirik (Hasil Generate AI)
const databaseLirik = {
    '4p4SAnKx8U07D8h3zS9F2S': `Mungkinkah, mungkinkah
Kau akan tumbuh di sana?
Gala bunga matahari
Yang kusemai dengan doa

Jika nanti kau telah mekar
Sampaikan salamku pada angin...`,

    '1v9Msh70V9622p0W72Q8S3': `Takkan pernah siap
Untuk kehilanganmu
Sialnya hidup harus berjalan
Tanpa ada kamu di sisi

Bagaimana cara melupakan
Segala kenangan yang tertanam?`
};

function putar(id, judul, artis) {
    const playerDiv = document.getElementById('spotify-player');
    const lyricText = document.getElementById('lyric-text');
    const targetJudul = document.getElementById('target-judul');
    const targetArtis = document.getElementById('target-artis');

    // 1. Putar Musik
    playerDiv.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

    // 2. Munculkan Lirik dari Database AI
    lyricText.innerText = databaseLirik[id] || "Lirik tidak ditemukan untuk lagu ini.";
    
    // 3. Update Info
    targetJudul.innerText = judul;
    targetArtis.innerText = artis;

    // 4. Animasi Scroll ke Lirik
    document.getElementById('lyric-screen').scrollTop = 0;
}
