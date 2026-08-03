// click-acak.js
// Klik acak dengan jeda 2-3 detik (langsung jalan)

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

// langsung jalan, gak nunggu load
loop();
