import yt_dlp

def download_tiktok_video(url, output_path="downloaded_tiktok_video"):
    # Pengaturan untuk mengunduh video dari TikTok
    ydl_opts = {
        'outtmpl': f'{output_path}.%(ext)s',  # Nama file output
        'format': 'bestvideo+bestaudio/best',  # Mengunduh video dan audio terbaik
        'noplaylist': True,  # Tidak mengunduh playlist
        'quiet': False,  # Menampilkan output proses
        'postprocessors': [{  # Menggabungkan video dan audio jika diperlukan
            'key': 'FFmpegVideoConvertor',
            'preferedformat': 'mp4',  # Mengonversi ke format MP4
        }],
    }

    # Menggunakan yt-dlp untuk mengunduh video
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

if __name__ == "__main__":
    # Masukkan URL video TikTok yang ingin diunduh
    video_url = input("Masukkan URL video TikTok: ")

    # Memanggil fungsi untuk mengunduh video TikTok
    download_tiktok_video(video_url)
    print("Video TikTok berhasil diunduh!")

