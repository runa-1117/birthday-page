function showBirthdayPage() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('birthday-page').classList.remove('hidden');
    createBalloons();
}

function createBalloons() {
    const container = document.querySelector('.balloon-container');
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // 随机颜色
        balloon.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

        // 随机位置
        balloon.style.left = Math.random() * 100 + 'vw';

        // 随机大小
        let size = Math.random() * 30 + 20;
        balloon.style.width = size + 'px';
        balloon.style.height = size * 1.2 + 'px';

        // 随机动画时长
        balloon.style.animationDuration = (10 + Math.random() * 10) + 's';

        container.appendChild(balloon);
    }
}

