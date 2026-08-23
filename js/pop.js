(function () {
    "use strict";

    const VAST_URL =
        "https://vast.vstserv.com/vast?spot_id=2026771";

    const YOUTUBE_URL =
        "https://www.youtube.com/embed/lLv5TZv2JLA?autoplay=1&mute=1&rel=0";

    const CLOSE_DELAY = 20;


    /* =====================================================
       STYLE
    ===================================================== */

    const style = document.createElement("style");

    style.textContent = `
        #vastPopup {
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            background: #000;
            z-index: 2147483647;
            overflow: hidden;
        }

        #vastVideo,
        #youtubeFrame {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        #vastVideo {
            display: block;
            background: #000;
            object-fit: contain;
        }

        #youtubeFrame {
            display: none;
        }

        #vastStatus {
            position: absolute;
            top: 15px;
            left: 15px;
            z-index: 20;
            padding: 7px 10px;
            background: rgba(0,0,0,.65);
            color: #fff;
            font: 13px Arial,sans-serif;
            border-radius: 4px;
        }


        /* =================================================
           CLOSE BUTTON
        ================================================= */

        #vastClose {
            position: absolute;
            top: 15px;
            right: 15px;

            z-index: 2147483647;

            width: 105px;
            height: 42px;

            padding: 0;

            border: 0;
            border-radius: 21px;

            background: rgba(0,0,0,.85);
            color: #fff;

            font: 14px Arial,sans-serif;

            cursor: default;
            pointer-events: none;

            overflow: hidden;
        }


        /* =================================================
           COUNTDOWN
        ================================================= */

        #vastCountdown {
            position: relative;

            display: block;

            width: 100%;
            height: 100%;

            line-height: 42px;

            text-align: center;
        }

        .vast-count-number {
            position: absolute;

            inset: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            opacity: 0;
        }

        /*
         * 20 numbers.
         * CSS controls the countdown.
         */

        .vast-count-number:nth-child(20) {
            animation: vastCount20 20s steps(20,end) forwards;
        }

        @keyframes vastCount20 {

            0%   { opacity: 1; }
            4.9% { opacity: 1; }

            5%   { opacity: 0; }
            100% { opacity: 0; }
        }


        /*
         * Use a CSS custom animation on the
         * whole countdown container.
         */

        #vastCountdown {
            animation:
                vastCountdownVisibility
                20s
                steps(1,end)
                forwards;
        }

        @keyframes vastCountdownVisibility {

            0% {
                opacity: 1;
            }

            99.99% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =================================================
           INDIVIDUAL NUMBERS
        ================================================= */

        #count20 { animation: c20 20s steps(20,end) infinite; }
        #count19 { animation: c19 20s steps(20,end) infinite; }
        #count18 { animation: c18 20s steps(20,end) infinite; }
        #count17 { animation: c17 20s steps(20,end) infinite; }
        #count16 { animation: c16 20s steps(20,end) infinite; }
        #count15 { animation: c15 20s steps(20,end) infinite; }
        #count14 { animation: c14 20s steps(20,end) infinite; }
        #count13 { animation: c13 20s steps(20,end) infinite; }
        #count12 { animation: c12 20s steps(20,end) infinite; }
        #count11 { animation: c11 20s steps(20,end) infinite; }
        #count10 { animation: c10 20s steps(20,end) infinite; }
        #count9  { animation: c9  20s steps(20,end) infinite; }
        #count8  { animation: c8  20s steps(20,end) infinite; }
        #count7  { animation: c7  20s steps(20,end) infinite; }
        #count6  { animation: c6  20s steps(20,end) infinite; }
        #count5  { animation: c5  20s steps(20,end) infinite; }
        #count4  { animation: c4  20s steps(20,end) infinite; }
        #count3  { animation: c3  20s steps(20,end) infinite; }
        #count2  { animation: c2  20s steps(20,end) infinite; }
        #count1  { animation: c1  20s steps(20,end) infinite; }


        /*
         * Simpler reliable countdown:
         * each number has its own 1-second window.
         */

        .vast-number {
            animation: none !important;
        }


        /* =================================================
           READY STATE
        ================================================= */

        #vastClose.ready {
            width: 42px;

            border-radius: 50%;

            cursor: pointer;
            pointer-events: auto;
        }

        #vastClose.ready #vastCountdown {
            display: none;
        }

        #vastClose.ready #vastCloseIcon {
            display: block;
        }

        #vastCloseIcon {
            display: none;

            width: 100%;
            height: 100%;

            line-height: 42px;

            text-align: center;

            font-size: 28px;
        }
    `;

    document.head.appendChild(style);


    /* =====================================================
       POPUP HTML
    ===================================================== */

    const popup = document.createElement("div");

    popup.id = "vastPopup";

    popup.innerHTML = `
        <video
            id="vastVideo"
            playsinline
            muted
            preload="auto">
        </video>

        <iframe
            id="youtubeFrame"
            src=""
            allow="autoplay; encrypted-media; fullscreen"
            allowfullscreen>
        </iframe>

        <div id="vastStatus">
            Loading advertisement...
        </div>

        <button
            id="vastClose"
            type="button"
            aria-label="Close"
            aria-disabled="true">

            <span id="vastCountdown">
                <span id="count20" class="vast-number">Close in 20s</span>
                <span id="count19" class="vast-number">Close in 19s</span>
                <span id="count18" class="vast-number">Close in 18s</span>
                <span id="count17" class="vast-number">Close in 17s</span>
                <span id="count16" class="vast-number">Close in 16s</span>
                <span id="count15" class="vast-number">Close in 15s</span>
                <span id="count14" class="vast-number">Close in 14s</span>
                <span id="count13" class="vast-number">Close in 13s</span>
                <span id="count12" class="vast-number">Close in 12s</span>
                <span id="count11" class="vast-number">Close in 11s</span>
                <span id="count10" class="vast-number">Close in 10s</span>
                <span id="count9" class="vast-number">Close in 9s</span>
                <span id="count8" class="vast-number">Close in 8s</span>
                <span id="count7" class="vast-number">Close in 7s</span>
                <span id="count6" class="vast-number">Close in 6s</span>
                <span id="count5" class="vast-number">Close in 5s</span>
                <span id="count4" class="vast-number">Close in 4s</span>
                <span id="count3" class="vast-number">Close in 3s</span>
                <span id="count2" class="vast-number">Close in 2s</span>
                <span id="count1" class="vast-number">Close in 1s</span>
            </span>

            <span id="vastCloseIcon">×</span>

        </button>
    `;

    document.body.appendChild(popup);


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const video =
        document.getElementById("vastVideo");

    const youtube =
        document.getElementById("youtubeFrame");

    const status =
        document.getElementById("vastStatus");

    const closeButton =
        document.getElementById("vastClose");


    let closed = false;
    let ready = false;


    /* =====================================================
       REAL CLOSE TIMER
       
       Separate from VAST.
    ===================================================== */

    const closeStart = Date.now();

    function checkCloseReady() {

        if (closed || ready) {
            return;
        }

        if (
            Date.now() - closeStart >=
            CLOSE_DELAY * 1000
        ) {

            ready = true;

            closeButton.classList.add(
                "ready"
            );

            closeButton.setAttribute(
                "aria-disabled",
                "false"
            );

            return;
        }

        setTimeout(
            checkCloseReady,
            200
        );
    }

    checkCloseReady();


    /* =====================================================
       CLOSE
    ===================================================== */

    closeButton.addEventListener(
        "click",
        function () {

            if (!ready) {
                return;
            }

            closed = true;

            try {
                video.pause();
                video.removeAttribute("src");
                video.load();
            } catch (e) {}

            try {
                youtube.src =
                    "about:blank";
            } catch (e) {}

            popup.remove();
            style.remove();
        }
    );


    /* =====================================================
       VAST FUNCTIONS
    ===================================================== */

    function cleanURL(value) {

        if (!value) {
            return null;
        }

        return value
            .trim()
            .replace(/^<!\[CDATA\[/, "")
            .replace(/\]\]>$/, "")
            .trim();
    }


    function absoluteURL(url, base) {

        try {
            return new URL(url, base).href;
        } catch (e) {
            return url;
        }
    }


    function findMediaFile(xml) {

        const files =
            Array.from(
                xml.querySelectorAll(
                    "MediaFile"
                )
            );

        if (!files.length) {
            return null;
        }

        for (const file of files) {

            const type =
                (
                    file.getAttribute("type")
                    || ""
                ).toLowerCase();

            const url =
                cleanURL(
                    file.textContent
                );

            if (!url) {
                continue;
            }

            if (
                type.includes("mp4") ||
                /\.mp4(\?|$)/i.test(url)
            ) {
                return url;
            }
        }

        for (const file of files) {

            const url =
                cleanURL(
                    file.textContent
                );

            if (url) {
                return url;
            }
        }

        return null;
    }


    function findWrapperURL(xml) {

        const node =
            xml.querySelector(
                "VASTAdTagURI"
            );

        if (!node) {
            return null;
        }

        return cleanURL(
            node.textContent
        );
    }


    async function fetchVAST(url) {

        const response =
            await fetch(
                url,
                {
                    method: "GET",
                    mode: "cors",
                    cache: "no-store"
                }
            );

        if (!response.ok) {
            throw new Error(
                "VAST HTTP " +
                response.status
            );
        }

        const text =
            await response.text();

        if (!text) {
            throw new Error(
                "Empty VAST response"
            );
        }

        const xml =
            new DOMParser()
                .parseFromString(
                    text,
                    "application/xml"
                );

        if (
            xml.querySelector(
                "parsererror"
            )
        ) {
            throw new Error(
                "Invalid VAST XML"
            );
        }

        return xml;
    }


    async function resolveVAST(url) {

        let currentURL = url;

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            const xml =
                await fetchVAST(
                    currentURL
                );

            const media =
                findMediaFile(xml);

            if (media) {

                return absoluteURL(
                    media,
                    currentURL
                );
            }

            const wrapper =
                findWrapperURL(xml);

            if (!wrapper) {
                throw new Error(
                    "No VAST media found"
                );
            }

            currentURL =
                absoluteURL(
                    wrapper,
                    currentURL
                );
        }

        throw new Error(
            "Too many VAST wrappers"
        );
    }


    /* =====================================================
       YOUTUBE
    ===================================================== */

    function showYouTube() {

        if (closed) {
            return;
        }

        try {
            video.pause();
        } catch (e) {}

        video.style.display =
            "none";

        status.style.display =
            "none";

        youtube.src =
            YOUTUBE_URL;

        youtube.style.display =
            "block";
    }


    /* =====================================================
       VAST PLAYBACK
       
       Does NOT touch countdown.
    ===================================================== */

    async function playVAST() {

        try {

            status.textContent =
                "Loading advertisement...";

            const mediaURL =
                await resolveVAST(
                    VAST_URL
                );

            if (closed) {
                return;
            }

            video.src =
                mediaURL;

            video.muted =
                true;

            video.playsInline =
                true;

            video.load();

            status.textContent =
                "Advertisement playing...";

            await video.play();

        } catch (error) {

            console.error(
                "[VAST]",
                error
            );

            if (!closed) {

                status.textContent =
                    "Advertisement unavailable";

                setTimeout(
                    showYouTube,
                    1000
                );
            }
        }
    }


    video.addEventListener(
        "ended",
        showYouTube
    );


    video.addEventListener(
        "error",
        showYouTube
    );


    /* =====================================================
       START VAST
    ===================================================== */

    playVAST();

})();
