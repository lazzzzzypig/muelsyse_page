let backgrounds = ["backgrounds/background_1.png"];
let foregrounds = ["images/char_249_mlyss_1b.png", "images/char_249_mlyss_2b.png", "images/char_249_mlyss_skins_1.png"];
let currentBackgroundIndex = 0;
let currentForegroundIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.container').style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    document.getElementById('foreground').src = foregrounds[currentForegroundIndex];
    updateActiveButton('foreground', currentForegroundIndex);
});


function changeForeground(index) {
    currentForegroundIndex = index;
    document.getElementById('foreground').src = foregrounds[currentForegroundIndex];
    updateActiveButton('foreground', currentForegroundIndex);
}


function updateActiveButton(type, index) {
    const buttons = document.querySelectorAll(`.${type}-buttons button`);
    buttons.forEach((button, i) => {
        const img = button.querySelector('img');
        if (i === index) {
            button.classList.add('active');
            img.src = `images/thumb/elite${i + 1}_blue.png`; // 替换为激活状态的缩略图
        } else {
            button.classList.remove('active');
            img.src = `images/thumb/elite${i + 1}.png`; // 替换为普通状态的缩略图
        }
    });
}