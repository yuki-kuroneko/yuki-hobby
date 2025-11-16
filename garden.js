// garden.js
const slides = document.querySelectorAll('.slide');
let currentIndex = 1; // 最初は中央の写真

function rotateCarousel() {
  // 現在のクラスをリセット
  slides.forEach(slide => {
    slide.classList.remove('active', 'left', 'right');
  });

  // 前の写真
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('left');

  // 現在の写真
  slides[currentIndex].classList.add('active');

  // 次の写真
  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add('right');

  // 次のループへ
  currentIndex = (currentIndex + 1) % slides.length;
}

// 5秒ごとに切り替え
setInterval(rotateCarousel,5000);
