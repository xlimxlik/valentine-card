// Управление конвертом
$(document).ready(function() {
  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnReset = $("#reset");
  const music = document.getElementById('bg-music');
  
  // Функция запуска музыки (вызывается при любом клике)
  const startMusic = () => {
    music.play().catch(e => console.log("Autoplay blocked:", e));
    document.removeEventListener('click', startMusic);
    document.removeEventListener('touchstart', startMusic);
  };
  
  // Запуск музыки при первом клике на странице
  document.addEventListener('click', startMusic);
  document.addEventListener('touchstart', startMusic);
  
  // Открытие/закрытие конверта
  const openEnvelope = () => {
    envelope.addClass("open").removeClass("close");
    // Гарантируем запуск музыки при открытии
    startMusic();
  };
  
  const closeEnvelope = () => {
    envelope.addClass("close").removeClass("open");
  };
  
  // Обработчики событий
  envelope.add(btnOpen).on('click', openEnvelope);
  btnReset.on('click', closeEnvelope);
  
  // После загрузки убираем контейнер для запуска анимаций цветов
  document.body.classList.remove("container");
});

