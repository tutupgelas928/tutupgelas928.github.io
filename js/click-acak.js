// click-acak.js
// Klik acak di halaman dengan jeda 2-3 detik
// Menunggu halaman selesai dimuat sebelum mulai

function randomDelay() {
  return 2000 + Math.random() * 1000; // 2 - 3 detik
}

function clickAnywhere() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  const el = document.elementFromPoint(x, y);

  if (el) {
    el.dispatchEvent(new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y
    }));
  }
}

function loop() {
  clickAnywhere();
  setTimeout(loop, randomDelay());
}

// tunggu halaman selesai dimuat
window.addEventListener("load", function() {
  loop();
});
