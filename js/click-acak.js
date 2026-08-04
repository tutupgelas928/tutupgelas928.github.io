setInterval(function() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let elemen = document.elementFromPoint(x, y);
    if (elemen) {
        elemen.click();
    }
}, 2000);
