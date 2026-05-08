const playlist = {
    // REALITY CLUB
    'rc1': { judul: 'Anything You Want', artis: 'Reality Club', url: 'music/anything.mp3', lirik : 'Lirik lagu Anything You Want...', lrcFile: 'lyrics/anything.lrc' },
    'rc2': { judul: '2112', artis: 'Reality Club', url: 'music/2112.mp3', lirik: 'Lirik lagu 2112...', lrcFile: 'lyrics/2112.lrc' },
    'rc3': { judul: 'Alexandra', artis: 'Reality Club', url: 'music/alexandra.mp3', lirik: 'Lirik lagu Alexandra...', lrcFile: 'lyrics/alexandra.lrc' },
    'rc4': { judul: 'A Sorrowful Reunion', artis: 'Reality Club', url: 'music/sorrowful.mp3', lirik: 'Lirik lagu A Sorrowful Reunion...', lrcFile: 'lyrics/sorrowful.lrc' },
    'rc5': { judul: 'Am I Boring You?', artis: 'Reality Club', url: 'music/boring.mp3', lirik: 'Lirik lagu am I boring you now?...', lrcFile: 'lyrics/boring.lrc' },
    'rc6': { judul: 'You ll Find Lovers Like You and Me', artis: 'Reality Club', url: 'music/lover.mp3', lirik: 'Lirik lagu You will find a lover like you and me...', lrcFile: 'lyrics/lover.lrc' },

    // HINDIA
    'h1': { judul: 'Cincin', artis: 'Hindia', url: 'music/cincin.mp3', lirik: 'Lirik lagu Cincin', lrcFile: 'lyrics/cincin.lrc' },
    'h2': { judul: 'Secukupnya', artis: 'Hindia', url: 'music/secukupnya.mp3', lirik: 'Lirik lagu Secukupnya', lrcFile: 'lyrics/secukupnya.lrc' },
    'h3': { judul: 'Evakuasi', artis: 'Hindia', url: 'music/evakuasi.mp3', lirik: 'Lirik lagu Evakuasi', lrcFile: 'lyrics/evakuasi.lrc' },
    'h4': { judul: 'Evaluasi', artis: 'Hindia', url: 'music/evaluasi.mp3', lirik: 'Lirik lagu Evaluasi', lrcFile: 'lyrics/evaluasi.lrc' },
    'h5': { judul: 'Janji Palsu', artis: 'Hindia', url: 'music/janji_palsu.mp3', lirik: 'Lirik lagu Janji Palsu', lrcFile: 'lyrics/janji_palsu.lrc' },
    'h6': { judul: 'Masalah Masa Depan', artis: 'Hindia', url: 'music/mmd.mp3', lirik: 'Lirik lagu Masalah Masa Depan', lrcFile: 'lyrics/mmd.lrc' },
    'h7': { judul: 'Berdansalah, Karir Ini Tak Ada Artinya', artis: 'Hindia', url: 'music/berdansalah.mp3', lirik: 'Lirik lagu Berdanslah, Karir Ini Tak Ada Artinya', lrcFile: 'lyrics/berdansalah.lrc' },
    'h8': { judul: 'Ramai Sepi Bersama', artis: 'Hindia', url: 'music/ramai_sepi.mp3', lirik: 'Lirik lagu Ramai Sepi Bersama', lrcFile: 'lyrics/ramai_sepi.lrc' },
    'h9': { judul: 'Rumah ke Rumah', artis: 'Hindia', url: 'music/rumah.mp3', lirik: 'Rumah ke Rumah', lrcFile: 'lyrics/rumah.lrc' },
    'h10': { judul: 'Mata Air', artis: 'Hindia', url: 'music/mata_air.mp3', lirik: 'Lirik lagu Mata Air', lrcFile: 'lyrics/mata_air.lrc' },
    'h11': { judul: 'kids', artis:'Hindia', url: 'musik/kids.mp3', lirik: 'Lirik lagu kids', lrcFile: 'lyrics/kids.lrc' },
            
    // .FEAST
    'f1': { judul: 'Peradaban', artis: '.Feast', url: 'music/peradaban.mp3', lirik: 'Bawa pesan ini ke persekutuanmu...', lrcFile: 'lyrics/peradaban.lrc' },
    'f2': { judul: 'Padi Milik Rakyat', artis: '.Feast', url: 'music/Padi_Rakyat.mp3', lirik: 'Lirik lagu Padi Milik Rakyat', lrcFile: 'lyrics/nabi_palsu.lrc' },
    'f3': { judul: 'Tarian Penghancur Raya', artis: '.Feast', url: 'music/tarian.mp3', lirik: 'Lirik lagu Tarian Penghancur Raya...', lrcFile: 'lyrics/tarian.lrc' },
    'f4': { judul: 'Nina', artis: '.Feast', url: 'music/nina.mp3', lirik: 'Lirik lagu Nina', lrcFile: 'lyrics/nina.lrc' },
    'f5': { judul: 'Kami Belum Tentu', artis: '.Feast', url: 'music/kami_belum.mp3', lirik: 'Lirik lagu Kami Belum Tentu...', lrcFile: 'lyrics/kami_belum.lrc' },
    'f6': { judul: 'Gugatan Rakyat Semesta', artis: '.Feast', url: 'music/gugatan.mp3', lirik: 'Lirik lagu Gugatan Rakyat Semesta...', lrcFile: 'lyrics/gugatan.lrc' },

    // FOR REVENGE
    'fr1': { judul: 'Serana', artis: 'For Revenge', url: 'music/serana.mp3', lirik: 'Lirik lagu Serana...', lrcFile: 'lyrics/serana.lrc' },
    'fr2': { judul: 'Penyangkalan', artis: 'For Revenge', url: 'music/penyangkalan.mp3', lirik: 'Lirik lagu Penyangkalan...', lrcFile: 'lyrics/penyangkalan.lrc' },
    'fr3': { judul: 'Bandung Hari Ini', artis: 'For Revenge', url: 'music/bandung.mp3', lirik: 'Lirik lagu Bandung Hari Ini.', lrcFile: 'lyrics/bandung.lrc' },
    'fr4': { judul: 'Sadrah', artis: 'For Revenge', url: 'music/sadrah.mp3', lirik: 'Lirik lagu Sadrah.', lrcFile: 'lyrics/sadrah.lrc' },
    'fr5': { judul: 'Derana', artis: 'For Revenge', url: 'music/derana.mp3', lirik: 'Lirik lagu Derana...', lrcFile: 'lyrics/derana.lrc' },
    'fr6': { judul: 'Jakarta Hari Ini', artis: 'For Revenge', url: 'music/jakarta.mp3', lirik: 'Lirik lagu Jakarta Hari Ini.', lrcFile: 'lyrics/jakarta.lrc' },
    'fr7': { judul: 'Perayaan Patah Hati', artis: 'For Revenge', url: 'music/perayaan_ph.mp3', lirik: 'Rayakanlah patah hatimu...\ndan biarkan ia menjadi abadi.', lrcFile: 'lyrics/perayaan_ph.lrc' },
    'fr8': { judul: 'Sendiri', artis: 'For Revenge', url: 'music/sendiri.mp3', lirik: 'Mungkin memang lebih baik sendiri...\ndan membiarkan semua ini pergi.', lrcFile: 'lyrics/sendiri.lrc' },
    'fr9': { judul: 'Pulang', artis: 'For Revenge', url: 'music/pulang.mp3', lirik: 'Bawa aku pulang...\nke tempat di mana aku merasa tenang.', lrcFile: 'lyrics/pulang.lrc' }
};

// ========== VARIABEL UNTUK LIRIK SINKRON ==========
let kashiInstance = null;
let currentAudio = null;
let currentLrcFile = null;

// ========== RENDER LAGU KE PLAYLIST ==========
function renderLagu() {
    const container = document.getElementById('playlist');
    container.innerHTML = '';
    for (let key in playlist) {
        const lagu = playlist[key];
        container.innerHTML += `
            <div class="song-card" onclick="putar('${key}')">
                <h3>${lagu.judul}</h3>
                <p>${lagu.artis}</p>
            </div>`;
    }
}

// ========== FUNGSI LOAD LIRIK SINKRON DENGAN KASHI ==========
function loadSyncLyrics(lrcUrl) {
    if (!lrcUrl) {
        document.getElementById('lyric-text').innerHTML = "📝 Lirik tidak tersedia untuk lagu ini";
        if (kashiInstance) kashiInstance = null;
        return;
    }
    
    currentLrcFile = lrcUrl;
    
    fetch(lrcUrl)
        .then(response => {
            if (!response.ok) throw new Error("File lirik tidak ditemukan");
            return response.text();
        })
        .then(lrcContent => {
            const blob = new Blob([lrcContent], { type: 'text/plain' });
            const file = new File([blob], "lyrics.lrc");
            
            const container = document.getElementById('lyric-text');
            container.innerHTML = ""; // Kosongkan container
            
            // Inisialisasi Kashi
            kashiInstance = new Kashi({
                file: file,
                container: container,
                emptyLineText: "🎵",
                activeClass: "kashi-active"
            });
            
            console.log("sinkronisasi dimuat:", lrcUrl);
        })
        .catch(error => {
            console.log("load lirik:", LrcUrl);
            document.getElementById('lyric-text').innerHTML = "File lyrics:'lyrics/'";
            kashiInstance = null;
        });
}

// ========== SINKRONKAN AUDIO DENGAN LIRIK ==========
function syncAudioWithLyrics() {
    if (!currentAudio) return;
    
    // Hapus listener lama
    if (currentAudio._timeUpdateListener) {
        currentAudio.removeEventListener('timeupdate', currentAudio._timeUpdateListener);
    }
    
    // Buat listener baru untuk sinkronisasi
    const timeUpdateListener = () => {
        if (kashiInstance && currentAudio && !currentAudio.paused) {
            kashiInstance.seek(currentAudio.currentTime);
        }
    };
    
    currentAudio.addEventListener('timeupdate', timeUpdateListener);
    currentAudio._timeUpdateListener = timeUpdateListener;
}

// ========== FUNGSI PUTAR YANG SUDAH DITAMBAH SINKRON LIRIK ==========
function putar(key) {
    const data = playlist[key];
    currentAudio = document.getElementById('main-audio');
    const lyricText = document.getElementById('lyric-text');
    
    // Set source audio
    currentAudio.src = data.url;
    currentAudio.load();
    currentAudio.play().catch(e => console.log("Auto-play diblokir browser:", e));
    
    // Update info yang sedang diputar
    document.getElementById('target-judul').innerText = data.judul;
    document.getElementById('target-artis').innerText = data.artis;
    
    // Load lirik sinkron (pakai file .lrc jika ada)
    if (data.lrcFile) {
        loadSyncLyrics(data.lrcFile);
        // Tunggu sebentar biar Kashi siap, lalu sinkronkan
        setTimeout(() => {
            syncAudioWithLyrics();
        }, 100);
    } else {
        // Fallback ke lirik biasa jika belum punya file .lrc
        lyricText.innerText = data.lirik || "Lirik belum tersedia";
        if (kashiInstance) kashiInstance = null;
    }
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// ========== FITUR SEARCH ==========
document.getElementById('search').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let cards = document.getElementsByClassName('song-card');
    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toUpperCase();
        cards[i].style.display = text.includes(filter) ? "" : "none";
    }
});

// ========== INIT ==========
renderLagu();

// Reset lirik saat audio selesai
document.getElementById('main-audio').addEventListener('ended', () => {
    if (kashiInstance) {
        document.getElementById('lyric-text').innerHTML = "🎵 Lagu selesai 🎵";
        kashiInstance = null;
    }
});
