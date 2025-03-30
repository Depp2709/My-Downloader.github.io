// Event listener saat tombol di-click
document.getElementById('download-btn').addEventListener('click', function() {
  const url = document.getElementById('tiktok-url').value;
  if (url) {
    toggleLoading(true); // Menampilkan efek loading
    fetchDownloadLink(url); // Memulai pengunduhan
  } else {
    alert('Masukkan URL video TikTok terlebih dahulu.');
  }
});

// Fungsi untuk memulai pengambilan link unduhan video
function fetchDownloadLink(url) {
  const apiUrl = `https://api.tiktok.com/api/download`; // Pastikan ini adalah API yang benar, atau gunakan API yang relevan
  
  // Menyimulasikan proses pengambilan video (gantikan dengan API nyata)
  setTimeout(() => {
    // Simulasi URL video yang diterima setelah request berhasil
    const fakeVideoUrl = "https://www.example.com/video.mp4";
    const success = Math.random() > 0.2; // Simulasi keberhasilan atau kegagalan

    if (success) {
      displayDownloadLink(fakeVideoUrl); // Menampilkan link unduhan
    } else {
      displayError(); // Menampilkan pesan error jika gagal
    }
  }, 3000); // Simulasi delay server selama 3 detik
}

// Fungsi untuk menampilkan link unduhan
function displayDownloadLink(videoUrl) {
  toggleLoading(false); // Menghilangkan efek loading

  const downloadLink = document.getElementById('download-link');
  downloadLink.href = videoUrl;
  downloadLink.textContent = 'Klik untuk Unduh Video';

  // Menggunakan animasi untuk hasil unduhan
  const result = document.getElementById('result');
  result.classList.add('visible');
}

// Fungsi untuk menampilkan pesan error
function displayError() {
  toggleLoading(false); // Menghilangkan efek loading
  alert('Gagal mendapatkan video. Coba lagi nanti.');
}

// Fungsi untuk menampilkan dan menyembunyikan efek loading
function toggleLoading(isLoading) {
  const loadingText = document.getElementById('loading-text');
  const result = document.getElementById('result');
  
  if (isLoading) {
    result.classList.remove('visible'); // Sembunyikan hasil sebelumnya
    loadingText.classList.add('visible'); // Tampilkan teks loading
  } else {
    loadingText.classList.remove('visible'); // Sembunyikan teks loading
  }
}
