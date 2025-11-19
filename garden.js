// garden.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.carousel .slide'));
  if (slides.length === 0) return;

  // 初期 active を探す（無ければ0番をactiveに）
  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current === -1) current = 0;

  function updateClasses() {
    const n = slides.length;
    // 全スライドのクラスをリセット
    slides.forEach(s => s.classList.remove('left', 'active', 'right', 'gone'));
    const left = (current - 1 + n) % n;
    const right = (current + 1) % n;

    slides[left].classList.add('left');
    slides[current].classList.add('active');
    slides[right].classList.add('right');

    // その他は画面外へ退避させる
    slides.forEach((s, i) => {
      if (i !== left && i !== current && i !== right) s.classList.add('gone');
    });
  }

  // 初回レンダリング
  updateClasses();

  // 3秒ごとに「左から中央へ」移動する -> current を左へ移動させる
  setInterval(() => {
    const n = slides.length;
    current = (current - 1 + n) % n; // 左のスライドを次の active にする
    updateClasses();
  }, 3000);
});
