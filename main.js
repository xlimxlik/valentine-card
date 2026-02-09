const music = document.getElementById('bg-music');
let musicStarted = false;

document.body.addEventListener('click', () => {
  if (!musicStarted) {
    musicStarted = true;
    music.volume = 0; // начинаем с тишины
    music.play();

    // плавное увеличение громкости
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 1) {
        vol += 0.01;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 100); // каждые 0.1 сек +0.01 к громкости
  }
});

