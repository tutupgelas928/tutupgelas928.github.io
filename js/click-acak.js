function randomKlik() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let elemen = document.elementFromPoint(x, y);
    if (elemen) {
        elemen.click();
    }
    setTimeout(randomKlik, Math.floor(Math.random() * 2000) + 1000);
}
randomKlik();
