let currentIndex = 0;
const images = document.querySelectorAll('.image');
const totalImages = images.length;

// Функция для обновления видимости изображений
const updateImages=()=> {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}


const nextImage=()=> {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImages();
}

const prevImage=()=> {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImages();
}


const interval = setInterval(nextImage, 3000); // Смена каждые 3 секунды


document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

document.getElementById('next').addEventListener('click', () => clearInterval(interval));
document.getElementById('prev').addEventListener('click', () => clearInterval(interval));
