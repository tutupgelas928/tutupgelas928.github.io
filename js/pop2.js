// /js/opop2.js

function showPopup() {
    // Cek apakah popup sudah ada
    if (document.getElementById('popupContainer')) {
        return;
    }

    // Buat elemen popup
    var popupContainer = document.createElement('div');
    popupContainer.id = 'popupContainer';
    popupContainer.style.cssText = 'position: fixed; top:0; left:0; width:100%; height:100vh; z-index: 99999; background:#000; overflow:hidden;';
    
    // Wrapper
    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.style.cssText = 'width:100%;height:100vh;position:fixed;top:0;left:0;right:0;bottom:0;margin:0;background:#000;overflow:hidden;';
    
    // Countdown
    var countdown = document.createElement('div');
    countdown.id = 'countdown';
    countdown.style.cssText = 'position:fixed;top:20px;right:20px;z-index:999999;background:rgba(0,0,0,0.8);color:#fff;padding:10px 15px;border-radius:4px;font-size:14px;font-family:Arial,sans-serif;display:block;pointer-events:none;';
    countdown.innerHTML = 'Close in <span id="timer">20</span>s';
    
    // Close Button
    var closeBtn = document.createElement('button');
    closeBtn.id = 'closeBtn';
    closeBtn.style.cssText = 'position:fixed;top:20px;right:20px;border-radius:4px;background:rgba(248,248,249,0.90);padding:8px;z-index:999999;cursor:pointer;display:none;box-shadow:0 2px 5px rgba(0,0,0,0.3);border:none;';
    closeBtn.innerHTML = '<svg fill="#000000" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 490 490" style="display:block;"><polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337"/></svg>';
    closeBtn.onclick = closePopup;
    
    // Frame
    var frame = document.createElement('div');
    frame.id = 'frame';
    frame.style.cssText = 'width:100%;height:100vh;margin:0;position:fixed;top:0;left:0;z-index:1;background:#000;overflow:hidden;';
    
    // URLs array lengkap
    var urls = [
        "https://desi-porntube.com/embed/502523/?source=1594287872",
        "https://desi-porntube.com/embed/502519/?source=1594287872",
        "https://desi-porntube.com/embed/502493/?source=1594287872",
        "https://desi-porntube.com/embed/502491/?source=1594287872",
        "https://desi-porntube.com/embed/502487/?source=1594287872",
        "https://desi-porntube.com/embed/502481/?source=1594287872",
        "https://desi-porntube.com/embed/502479/?source=1594287872",
        "https://desi-porntube.com/embed/502475/?source=1594287872",
        "https://desi-porntube.com/embed/502471/?source=1594287872",
        "https://desi-porntube.com/embed/502469/?source=1594287872",
        "https://desi-porntube.com/embed/502465/?source=1594287872",
        "https://desi-porntube.com/embed/502463/?source=1594287872",
        "https://desi-porntube.com/embed/502461/?source=1594287872",
        "https://desi-porntube.com/embed/502457/?source=1594287872",
        "https://desi-porntube.com/embed/502453/?source=1594287872",
        "https://desi-porntube.com/embed/502451/?source=1594287872",
        "https://desi-porntube.com/embed/502449/?source=1594287872",
        "https://desi-porntube.com/embed/502447/?source=1594287872",
        "https://desi-porntube.com/embed/502445/?source=1594287872",
        "https://desi-porntube.com/embed/502443/?source=1594287872",
        "https://desi-porntube.com/embed/502441/?source=1594287872",
        "https://desi-porntube.com/embed/502437/?source=1594287872",
        "https://desi-porntube.com/embed/502435/?source=1594287872",
        "https://desi-porntube.com/embed/502433/?source=1594287872",
        "https://desi-porntube.com/embed/502429/?source=1594287872",
        "https://desi-porntube.com/embed/502427/?source=1594287872",
        "https://desi-porntube.com/embed/502397/?source=1594287872",
        "https://desi-porntube.com/embed/502395/?source=1594287872",
        "https://desi-porntube.com/embed/502393/?source=1594287872",
        "https://desi-porntube.com/embed/502387/?source=1594287872",
        "https://desi-porntube.com/embed/502385/?source=1594287872",
        "https://desi-porntube.com/embed/502383/?source=1594287872",
        "https://desi-porntube.com/embed/502381/?source=1594287872",
        "https://desi-porntube.com/embed/502375/?source=1594287872",
        "https://desi-porntube.com/embed/502373/?source=1594287872",
        "https://desi-porntube.com/embed/502371/?source=1594287872",
        "https://desi-porntube.com/embed/502367/?source=1594287872",
        "https://desi-porntube.com/embed/502361/?source=1594287872",
        "https://desi-porntube.com/embed/502359/?source=1594287872",
        "https://desi-porntube.com/embed/502357/?source=1594287872",
        "https://desi-porntube.com/embed/502353/?source=1594287872",
        "https://desi-porntube.com/embed/502351/?source=1594287872",
        "https://desi-porntube.com/embed/502349/?source=1594287872",
        "https://desi-porntube.com/embed/502347/?source=1594287872",
        "https://desi-porntube.com/embed/502345/?source=1594287872",
        "https://desi-porntube.com/embed/502343/?source=1594287872",
        "https://desi-porntube.com/embed/502341/?source=1594287872",
        "https://desi-porntube.com/embed/502339/?source=1594287872",
        "https://desi-porntube.com/embed/502337/?source=1594287872",
        "https://desi-porntube.com/embed/502335/?source=1594287872",
        "https://desi-porntube.com/embed/502331/?source=1594287872",
        "https://desi-porntube.com/embed/502329/?source=1594287872",
        "https://desi-porntube.com/embed/502301/?source=1594287872",
        "https://desi-porntube.com/embed/502297/?source=1594287872",
        "https://desi-porntube.com/embed/502293/?source=1594287872",
        "https://desi-porntube.com/embed/502291/?source=1594287872",
        "https://desi-porntube.com/embed/502287/?source=1594287872",
        "https://desi-porntube.com/embed/502281/?source=1594287872",
        "https://desi-porntube.com/embed/502279/?source=1594287872",
        "https://desi-porntube.com/embed/502275/?source=1594287872",
        "https://desi-porntube.com/embed/502273/?source=1594287872",
        "https://desi-porntube.com/embed/502271/?source=1594287872",
        "https://desi-porntube.com/embed/502269/?source=1594287872",
        "https://desi-porntube.com/embed/502267/?source=1594287872",
        "https://desi-porntube.com/embed/502265/?source=1594287872",
        "https://desi-porntube.com/embed/502263/?source=1594287872",
        "https://desi-porntube.com/embed/502259/?source=1594287872",
        "https://desi-porntube.com/embed/502257/?source=1594287872",
        "https://desi-porntube.com/embed/502255/?source=1594287872",
        "https://desi-porntube.com/embed/502253/?source=1594287872",
        "https://desi-porntube.com/embed/502251/?source=1594287872",
        "https://desi-porntube.com/embed/502249/?source=1594287872",
        "https://desi-porntube.com/embed/502247/?source=1594287872",
        "https://desi-porntube.com/embed/502245/?source=1594287872",
        "https://desi-porntube.com/embed/502239/?source=1594287872",
        "https://desi-porntube.com/embed/502235/?source=1594287872",
        "https://desi-porntube.com/embed/502233/?source=1594287872",
        "https://desi-porntube.com/embed/502207/?source=1594287872",
        "https://desi-porntube.com/embed/502205/?source=1594287872",
        "https://desi-porntube.com/embed/502201/?source=1594287872",
        "https://desi-porntube.com/embed/502199/?source=1594287872",
        "https://desi-porntube.com/embed/502197/?source=1594287872",
        "https://desi-porntube.com/embed/502195/?source=1594287872",
        "https://desi-porntube.com/embed/502193/?source=1594287872",
        "https://desi-porntube.com/embed/502191/?source=1594287872",
        "https://desi-porntube.com/embed/502189/?source=1594287872",
        "https://desi-porntube.com/embed/502187/?source=1594287872",
        "https://desi-porntube.com/embed/502183/?source=1594287872",
        "https://desi-porntube.com/embed/502181/?source=1594287872",
        "https://desi-porntube.com/embed/502179/?source=1594287872",
        "https://desi-porntube.com/embed/502177/?source=1594287872",
        "https://desi-porntube.com/embed/502173/?source=1594287872",
        "https://desi-porntube.com/embed/502167/?source=1594287872",
        "https://desi-porntube.com/embed/502165/?source=1594287872",
        "https://desi-porntube.com/embed/502161/?source=1594287872",
        "https://desi-porntube.com/embed/502159/?source=1594287872",
        "https://desi-porntube.com/embed/502157/?source=1594287872",
        "https://desi-porntube.com/embed/502149/?source=1594287872",
        "https://desi-porntube.com/embed/502147/?source=1594287872",
        "https://desi-porntube.com/embed/502141/?source=1594287872"
    ];
    
    // Random URL
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    
    // Create iframe
    var iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = randomUrl + '&autoplay=1&muted=1';
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('webkitallowfullscreen', '');
    iframe.setAttribute('mozallowfullscreen', '');
    iframe.setAttribute('oallowfullscreen', '');
    iframe.setAttribute('msallowfullscreen', '');
    iframe.setAttribute('scrolling', 'no');
    iframe.style.cssText = 'width:100%;height:100vh;display:block;border:none;position:fixed;top:0;left:0;z-index:1;';
    
    // Append elements
    frame.appendChild(iframe);
    wrapper.appendChild(countdown);
    wrapper.appendChild(closeBtn);
    wrapper.appendChild(frame);
    popupContainer.appendChild(wrapper);
    document.body.appendChild(popupContainer);
    
    // Countdown timer
    var timeLeft = 20;
    var countdownInterval = setInterval(function() {
        timeLeft--;
        var timerEl = document.getElementById('timer');
        if (timerEl) timerEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            var countdownEl = document.getElementById('countdown');
            var closeBtnEl = document.getElementById('closeBtn');
            if (countdownEl) countdownEl.style.display = 'none';
            if (closeBtnEl) closeBtnEl.style.display = 'block';
        }
    }, 1000);
    
    // Set overflow hidden
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup popup
function closePopup() {
    var popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
        popupContainer.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Jalankan otomatis saat file di-load
showPopup();
