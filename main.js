document.getElementById('start').onclick = () => {
    document.getElementById('bgMusic').play();
    document.body.classList.remove('paused'); // запускаем анимации
    setTimeout(() => {
        const text = document.createElement('div');
        text.className = 'greeting';
        text.innerText = 'Будешь моей Валентинкой? 💖';
        document.body.appendChild(text);
        setTimeout(() => text.classList.add('show'), 50);
    }, 5000);
    document.getElementById('start').remove(); // убираем кнопку
};


