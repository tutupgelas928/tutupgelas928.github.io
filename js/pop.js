(function () {
    "use strict";

    /* =====================================================
       CONFIG
    ===================================================== */

    const VAST_URL =
        "https://vast.vstserv.com/vast?spot_id=2026771";

    const YOUTUBE_URL =
        "https://www.youtube.com/embed/lLv5TZv2JLA?autoplay=1&mute=1&rel=0";

    const CLOSE_DELAY = 20;


    /* =====================================================
       CREATE STYLE
       No html/body styling
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

        #closeVastPopup {
            position: absolute;
            top: 15px;
            right: 15px;

            z-index: 2147483647;

            display: block;

            min-width: 100px;
            height: 42px;

            padding: 0 15px;

            border: 0;
            border-radius: 21px;

            background: rgba(0,0,0,.8);
            color: #fff;

            font: 14px Arial,sans-serif;

            cursor: default;
            pointer-events: none;
        }

        #closeVastPopup.ready {
            min-width: 42px;
            width: 42px;

            padding: 0;

            border-radius: 50%;

            font-size: 28px;

            cursor: pointer;
            pointer-events: auto;
        }
    `;

    document.head.appendChild(style);


    /* =====================================================
       CREATE POPUP
    ===================================================== */

    const popup =
        document.createElement("div");

    popup.id =
        "vastPopup";


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
            id="closeVastPopup"
            type="button"
            aria-label="Close"
            aria-disabled="true">
            Close in 20s
        </button>
    `;


    document.body.appendChild(
        popup
    );


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const video =
        document.getElementById(
            "vastVideo"
        );

    const youtube =
        document.getElementById(
            "youtubeFrame"
        );

    const status =
        document.getElementById(
            "vastStatus"
        );

    const closeButton =
        document.getElementById(
            "closeVastPopup"
        );


    /* =====================================================
       CLOSE TIMER
       
       IMPORTANT:
       This timer is completely independent
       from VAST.
    ===================================================== */

    let popupClosed =
        false;

    let closeReady =
        false;

    const timerStart =
        Date.now();

    let lastShown =
        CLOSE_DELAY;


    function updateCloseTimer() {

        if (popupClosed) {
            return;
        }


        const elapsed =
            (Date.now() - timerStart) / 1000;


        const remaining =
            Math.max(
                0,
                Math.ceil(
                    CLOSE_DELAY - elapsed
                )
            );


        /*
         * Update only when
         * the displayed number changes.
         */

        if (
            remaining !== lastShown &&
            remaining > 0
        ) {

            lastShown =
                remaining;


            closeButton.textContent =
                "Close in " +
                remaining +
                "s";
        }


        /*
         * Timer finished.
         */

        if (
            remaining <= 0
        ) {

            closeReady =
                true;


            closeButton.textContent =
                "×";


            closeButton.classList.add(
                "ready"
            );


            closeButton.setAttribute(
                "aria-disabled",
                "false"
            );


            return;
        }


        /*
         * Continue timer.
         */

        setTimeout(
            updateCloseTimer,
            250
        );
    }


    /*
     * Start timer IMMEDIATELY.
     * Nothing related to VAST
     * can stop this timer.
     */

    updateCloseTimer();


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    closeButton.addEventListener(
        "click",
        function () {

            if (!closeReady) {
                return;
            }


            popupClosed =
                true;


            /*
             * Stop VAST.
             */

            try {

                video.pause();

                video.removeAttribute(
                    "src"
                );

                video.load();

            } catch (e) {}


            /*
             * Stop YouTube.
             */

            try {

                youtube.src =
                    "about:blank";

            } catch (e) {}


            /*
             * Remove popup.
             */

            popup.remove();

            style.remove();

        }
    );


    /* =====================================================
       URL HELPERS
    ===================================================== */

    function cleanURL(value) {

        if (!value) {
            return null;
        }


        return value
            .trim()
            .replace(
                /^<!\[CDATA\[/,
                ""
            )
            .replace(
                /\]\]>$/,
                ""
            )
            .trim();
    }


    function absoluteURL(
        url,
        base
    ) {

        try {

            return new URL(
                url,
                base
            ).href;

        } catch (e) {

            return url;

        }
    }


    /* =====================================================
       FIND MEDIA FILE
    ===================================================== */

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


        /*
         * Prefer MP4.
         */

        for (
            const file of files
        ) {

            const type =
                (
                    file.getAttribute(
                        "type"
                    ) || ""
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


        /*
         * Fallback.
         */

        for (
            const file of files
        ) {

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


    /* =====================================================
       FIND WRAPPER
    ===================================================== */

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


    /* =====================================================
       FETCH VAST
    ===================================================== */

    async function fetchVAST(url) {

        console.log(
            "[VAST] Request:",
            url
        );


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


        const parser =
            new DOMParser();


        const xml =
            parser.parseFromString(
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


    /* =====================================================
       RESOLVE VAST
    ===================================================== */

    async function resolveVAST(
        startURL
    ) {

        let currentURL =
            startURL;


        for (
            let attempt = 0;
            attempt < 5;
            attempt++
        ) {

            status.textContent =
                "Loading advertisement...";


            const xml =
                await fetchVAST(
                    currentURL
                );


            const mediaURL =
                findMediaFile(
                    xml
                );


            if (mediaURL) {

                return {

                    mediaURL:
                        absoluteURL(
                            mediaURL,
                            currentURL
                        )

                };
            }


            const wrapperURL =
                findWrapperURL(
                    xml
                );


            if (!wrapperURL) {

                throw new Error(
                    "No MediaFile or VAST Wrapper found"
                );
            }


            currentURL =
                absoluteURL(
                    wrapperURL,
                    currentURL
                );


            console.log(
                "[VAST] Following Wrapper:",
                currentURL
            );
        }


        throw new Error(
            "Too many VAST Wrapper levels"
        );
    }


    /* =====================================================
       SHOW YOUTUBE
    ===================================================== */

    function showYouTube() {

        if (popupClosed) {
            return;
        }


        console.log(
            "[PLAYER] Showing YouTube"
        );


        video.pause();


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
       PLAY VAST
       
       This NEVER touches the
       Close timer.
    ===================================================== */

    async function playVAST() {

        try {

            const result =
                await resolveVAST(
                    VAST_URL
                );


            console.log(
                "[VAST] Media:",
                result.mediaURL
            );


            video.src =
                result.mediaURL;

            video.muted =
                true;

            video.playsInline =
                true;


            video.load();


            status.textContent =
                "Advertisement playing...";


            await video.play();


            console.log(
                "[VAST] Playback started"
            );


        } catch (error) {

            console.error(
                "[VAST] ERROR:",
                error
            );


            status.textContent =
                "Advertisement unavailable";


            /*
             * VAST failed.
             *
             * The Close timer continues
             * independently.
             */

            setTimeout(
                showYouTube,
                1000
            );
        }
    }


    /* =====================================================
       VAST FINISHED
    ===================================================== */

    video.addEventListener(
        "ended",
        function () {

            showYouTube();

        }
    );


    /* =====================================================
       VAST ERROR
    ===================================================== */

    video.addEventListener(
        "error",
        function () {

            console.error(
                "[VAST] Playback error:",
                video.error
            );


            showYouTube();

        }
    );


    /* =====================================================
       START VAST
       
       The Close timer is already
       running independently.
    ===================================================== */

    playVAST();

})();
