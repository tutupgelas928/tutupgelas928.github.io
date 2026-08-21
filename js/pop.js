(function() {
    'use strict';

    // ===== KONFIGURASI =====
    var VAST_URL = 'https://vast.vstserv.com/vast?spot_id=2026771';
    var FALLBACK = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    // ===== CEK APAKAH UDAH ADA =====
    if (document.getElementById('vastPopup')) return;

    // ===== INJECT CSS =====
    var css = document.createElement('style');
    css.textContent = `
        #vastPopup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #000;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #vastPopup video {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            background: #000;
            display: block;
            border: none;
        }
        #vastPopup video::-webkit-media-controls {
            display: none !important;
        }
        #vastPopup video::-webkit-media-controls-enclosure {
            display: none !important;
        }
        #vastPopup video::-webkit-media-controls-panel {
            display: none !important;
        }
        #vastPopup video::-webkit-media-controls-play-button {
            display: none !important;
        }
        #vastPopup video::-webkit-media-controls-start-playback-button {
            display: none !important;
        }
        .vast-topbar {
            position: absolute;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 30;
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 60px;
            padding: 8px 8px 8px 24px;
            box-shadow: 0 8px 40px rgba(0,0,0,0.5);
            user-select: none;
            transition: opacity 0.4s ease;
            pointer-events: none;
        }
        .vast-topbar * { pointer-events: auto; }
        .vast-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: Arial, sans-serif;
        }
        .vast-badge svg {
            width: 16px;
            height: 16px;
            fill: none;
            stroke: rgba(255,255,255,0.7);
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .vast-badge span {
            font-size: 12px;
            font-weight: 600;
            color: rgba(255,255,255,0.6);
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }
        .vast-separator {
            width: 1px;
            height: 24px;
            background: rgba(255,255,255,0.1);
        }
        .vast-countdown {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: Arial, sans-serif;
        }
        .vast-countdown .vast-icon {
            font-size: 16px;
            opacity: 0.6;
        }
        .vast-countdown .vast-number {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            min-width: 28px;
            text-align: center;
        }
        .vast-countdown .vast-text {
            font-size: 13px;
            font-weight: 400;
            color: rgba(255,255,255,0.4);
        }
        .vast-countdown .vast-dot {
            width: 6px;
            height: 6px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            display: inline-block;
            animation: vast-pulse 1s ease-in-out infinite;
        }
        @keyframes vast-pulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.3); }
        }
        .vast-close {
            display: none;
            align-items: center;
            gap: 10px;
            background: rgba(255,255,255,0.95);
            border: none;
            border-radius: 50px;
            padding: 10px 22px 10px 18px;
            color: #1a1a1a;
            font-size: 15px;
            font-weight: 700;
            font-family: Arial, sans-serif;
            cursor: pointer;
            transition: 0.2s;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            letter-spacing: 0.3px;
        }
        .vast-close:hover {
            background: #fff;
            transform: scale(1.04);
            box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        }
        .vast-close:active {
            transform: scale(0.95);
        }
        .vast-close.vast-show {
            display: flex;
            animation: vast-fadeIn 0.3s ease;
        }
        .vast-close svg {
            width: 18px;
            height: 18px;
            stroke: #1a1a1a;
            stroke-width: 2.5;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        @keyframes vast-fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        .vast-topbar.vast-hide .vast-countdown {
            display: none;
        }
        @media (max-width: 768px) {
            .vast-topbar { top: 18px; padding: 6px 6px 6px 18px; gap: 10px; border-radius: 50px; }
            .vast-badge span { font-size: 11px; }
            .vast-countdown .vast-number { font-size: 16px; min-width: 24px; }
            .vast-countdown .vast-text { font-size: 12px; }
            .vast-countdown .vast-icon { font-size: 14px; }
            .vast-countdown .vast-dot { width: 5px; height: 5px; }
            .vast-separator { height: 20px; }
            .vast-close { padding: 8px 18px 8px 14px; font-size: 13px; gap: 8px; border-radius: 40px; }
            .vast-close svg { width: 16px; height: 16px; }
        }
        @media (max-width: 480px) {
            .vast-topbar { top: 14px; padding: 4px 4px 4px 14px; gap: 8px; border-radius: 40px; }
            .vast-badge svg { width: 13px; height: 13px; }
            .vast-badge span { font-size: 9px; letter-spacing: 0.3px; }
            .vast-countdown .vast-number { font-size: 14px; min-width: 20px; }
            .vast-countdown .vast-text { font-size: 10px; }
            .vast-countdown .vast-icon { font-size: 12px; }
            .vast-countdown .vast-dot { width: 4px; height: 4px; }
            .vast-separator { height: 16px; }
            .vast-close { padding: 6px 12px 6px 10px; font-size: 11px; gap: 6px; border-radius: 30px; }
            .vast-close svg { width: 13px; height: 13px; }
        }
        /* Sembunyikan skip button Fluid Player */
        .fp-ui .fp-skip-ad,
        .fp-ui .fp-skip-button,
        .fp-ui .fp-skip,
        .fp-vast-skip-button {
            display: none !important;
        }
    `;
    document.head.appendChild(css);

    // ===== INJECT HTML =====
    var html = document.createElement('div');
    html.id = 'vastPopup';
    html.innerHTML = `
        <div style="width:100vw;height:100vh;background:#000;position:relative;">
            <div class="vast-topbar" id="vastTopbar">
                <div class="vast-badge">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    <span>Sponsored</span>
                </div>
                <span class="vast-separator"></span>
                <div class="vast-countdown">
                    <span class="vast-icon">⏳</span>
                    <span class="vast-number" id="vastNumber">20</span>
                    <span class="vast-text">sec</span>
                    <span class="vast-dot"></span>
                </div>
                <span class="vast-separator" id="vastSepClose"></span>
                <button class="vast-close" id="vastClose">
                    <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Close
                </button>
            </div>
            <div id="fluidContainer" style="width:100vw;height:100vh;background:#000;">
                <video id="myVideo" playsinline autoplay muted style="width:100%;height:100%;"></video>
            </div>
        </div>
    `;
    document.body.appendChild(html);

    // ===== LOAD FLUID PLAYER =====
    var script = document.createElement('script');
    script.src = 'https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js';
    script.onload = function() {
        initPlayer();
    };
    document.head.appendChild(script);

    function initPlayer() {
        var video = document.getElementById('myVideo');
        var closeBtn = document.getElementById('vastClose');
        var numberEl = document.getElementById('vastNumber');
        var topbar = document.getElementById('vastTopbar');
        var sepClose = document.getElementById('vastSepClose');

        var countdownSeconds = 20;
        var countdownTimer = null;
        var countdownStarted = false;

        video.src = FALLBACK;
        video.load();

        var player = fluidPlayer('myVideo', {
            layoutControls: {
                controlBar: { autoHideTimeout: 0, animated: false, autoHide: true },
                htmlOnPauseBlock: { html: null, height: null, width: null },
                autoplay: true,
                mute: true,
                allowTheatre: false,
                playPauseAnimation: false,
                playbackRateEnabled: false,
                allowDownload: false,
                playButtonShowing: false,
                fillToContainer: true,
                posterImage: ""
            },
            vastOptions: {
                allowVastAdToSkip: false,
                adList: [{ roll: "preRoll", vastTag: VAST_URL }]
            }
        });

        video.play().catch(function() {
            setTimeout(function() { video.play(); }, 100);
        });

        player.on('vastLoaded', function() {
            startCountdown();
        });

        function startCountdown() {
            if (countdownStarted) return;
            countdownStarted = true;
            countdownSeconds = 20;
            numberEl.textContent = countdownSeconds;

            countdownTimer = setInterval(function() {
                countdownSeconds--;
                if (countdownSeconds > 0) {
                    numberEl.textContent = countdownSeconds;
                } else {
                    clearInterval(countdownTimer);
                    topbar.classList.add('vast-hide');
                    closeBtn.classList.add('vast-show');
                    if (sepClose) sepClose.style.display = 'block';
                }
            }, 1000);
        }

        setTimeout(function() {
            if (!countdownStarted) startCountdown();
        }, 10000);

        closeBtn.addEventListener('click', function() {
            var popup = document.getElementById('vastPopup');
            if (popup) popup.style.display = 'none';
            player.pause();
            if (countdownTimer) clearInterval(countdownTimer);
        });
    }
})();
