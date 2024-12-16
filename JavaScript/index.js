document.addEventListener("DOMContentLoaded", () => {
const wrapper = document.querySelector(".news_weather_wrapper");
const newsBlocks = document.querySelectorAll(".news_weather_block");
const buttonRight = document.querySelector(".news_weather button img[src='../Images/Стрелка вправо.png']");
const buttonLeft = document.querySelector(".news_weather button img[src='../Images/Стрелка влево.png']");
const visibleBlocks = 1; // Количество отображаемых блоков
let currentIndex = 0;

// Функция для обновления видимости новостей
const updateNewsVisibility = () => {
    newsBlocks.forEach((block, index) => {
        if (index >= currentIndex && index < currentIndex + visibleBlocks) {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });
};

// Перелистывание вправо
buttonRight.addEventListener("click", () => {
    if (currentIndex < newsBlocks.length - visibleBlocks) {
        currentIndex++;
        updateNewsVisibility();
    }
});
buttonLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateNewsVisibility();
    }
});

// Автоматическая инициализация видимости
updateNewsVisibility();
let reverse = 0
setInterval( () => {
    if (currentIndex == newsBlocks.length - visibleBlocks || (currentIndex != 0 && reverse == 1)){
        reverse = 1
        currentIndex--;
        updateNewsVisibility();
    }else{
        reverse = 0
        currentIndex++;
        updateNewsVisibility();
    }
}, 5000)
});
