document.getElementById('download-btn').addEventListener('click', function() {
  const url = document.getElementById('tiktok-url').value;
  if (url) {
    fetchDownloadLink(url);
  } else {
    alert('Masukkan URL video TikTok terlebih dahulu.');
  }
});

function fetchDownloadLink(url) {
  const apiUrl = `https://api.tiktok.com/api/download`; // Contoh endpoint API, ganti sesuai API yang valid untuk mengunduh video TikTok

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: url }),
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.videoUrl) {
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = data.videoUrl;
        document.getElementById('result').classList.remove('hidden');
      } else {
        alert('Gagal mendapatkan video, coba lagi.');
      }
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Terjadi kesalahan, coba lagi nanti.');
    });
}
