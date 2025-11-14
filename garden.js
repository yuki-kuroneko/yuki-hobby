// garden.js
const slides = document.querySelectorAll('.slide');

function setState(activeIndex) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'left', 'right');
    if (i === activeIndex) {
      slide.classList.add('active');
    } else if (i < activeIndex) {
      slide.classList.add('left');   // クリックより左側は左へ退避
    } else {
      slide.classList.add('right');  // クリックより右側は右へ退避
    }
  });
}

// 初期状態（真ん中を主役にしたいなら 1、左を主役なら 0）
setState(1);

// クリックで状態切り替え
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => setState(index));
});
