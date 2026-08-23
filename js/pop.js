(function () {
    "use strict";

    /* =====================================================
       CONFIGURATION
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

            background: rgba(0, 0, 0, .65);
            color: #fff;

            font: 13px Arial, sans-serif;
            border-radius: 4px;
        }

        #closeVastPopup {
            position: absolute;
            top: 15px;
            right: 15px;

            z-index: 100;

            display: block;

            min-width: 92px;
            height: 42px;

            padding: 0 14px;

            border: 0;
            border-radius: 21px;

            background: rgba(0, 0, 0, .8);
            color: #fff;

            font: 14px Arial, sans-serif;
            cursor: default;

            opacity: .9;
        }

        #closeVastPopup.is-ready {
            min-width: 42px;
            width: 42px;
            padding: 0;

            border-radius: 50%;

            font-size: 28px;
            line-height: 42px;

            cursor: pointer;
            opacity: 1;
        }

        #closeVastPopup.is-ready:hover {
            background: rgba(0, 0, 0, 1);
        }
    `;

    document.head.appendChild(style);


    /* =====================================================
       CREATE POPUP
    ===================================================== */

    const popup =
        document.createElement("div");

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
            id="closeVastPopup"
            type="button"
            aria-label="Close">
            Close in ${CLOSE_DELAY}s
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
        document.getElementById("closeVastPopup");


    /* =====================================================
       CLOSE COUNTDOWN
       
       IMPORTANT:
       This timer is COMPLETELY INDEPENDENT
       from VAST.
    ===================================================== */

    let remaining =
        CLOSE_DELAY;

    let popupClosed =
        false;

    const countdownTimer =
        setInterval(function () {

            if (popupClosed) {
                return;
            }

            remaining--;

            if (remaining > 0) {

                closeButton.textContent =
                    "Close in " +
                    remaining +
                    "s";

                return;
            }


            /* =============================================
               COUNTDOWN FINISHED
            ============================================= */

            clearInterval(
                countdownTimer
            );


            closeButton.textContent =
                "×";

            closeButton.classList.add(
                "is-ready"
            );

            closeButton.setAttribute(
                "aria-label",
                "Close"
            );

        }, 1000);


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    closeButton.addEventListener(
        "click",
        function () {

            /*
             * Do nothing before countdown finishes.
             */

            if (
                !closeButton.classList.contains(
                    "is-ready"
                )
            ) {
                return;
            }


            popupClosed = true;


            clearInterval(
                countdownTimer
            );


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
       CLEAN URL
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


    /* =====================================================
       ABSOLUTE URL
    ===================================================== */

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
                type === "video/mp4" ||
                type.includes("mp4") ||
                /\.mp4(\?|$)/i.test(url)
            ) {

                return url;

            }

        }


        /*
         * Fallback to first
         * available MediaFile.
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
       FIND VAST WRAPPER
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


        console.log(
            "[VAST] Response received:",
            text.substring(
                0,
                500
            )
        );


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
       
       Supports:
       Inline
       Wrapper
       Multiple Wrapper levels
    ===================================================== */

    async function resolveVAST(
        startURL
    ) {

        let currentURL =
            startURL;


        /*
         * Maximum 5 wrappers.
         */

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


            /*
             * Try MediaFile.
             */

            const mediaURL =
                findMediaFile(
                    xml
                );


            if (mediaURL) {

                console.log(
                    "[VAST] Media found:",
                    mediaURL
                );


                return {
                    mediaURL:
                        absoluteURL(
                            mediaURL,
                            currentURL
                        )
                };
            }


            /*
             * Try Wrapper.
             */

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

        /*
         * Don't do anything if
         * user already closed popup.
         */

        if (popupClosed) {
            return;
        }


        console.log(
            "[PLAYER] Showing YouTube"
        );


        /*
         * Stop VAST.
         */

        try {

            video.pause();

        } catch (e) {}


        video.style.display =
            "none";


        /*
         * Hide status.
         */

        status.style.display =
            "none";


        /*
         * Load YouTube.
         */

        youtube.src =
            YOUTUBE_URL;


        youtube.style.display =
            "block";
    }


    /* =====================================================
       PLAY VAST
       
       IMPORTANT:
       Nothing here controls the
       Close countdown.
    ===================================================== */

    async function playVAST() {

        try {

            status.textContent =
                "Loading advertisement...";


            const result =
                await resolveVAST(
                    VAST_URL
                );


            console.log(
                "[VAST] Final media:",
                result.mediaURL
            );


            /*
             * Load VAST video.
             */

            video.src =
                result.mediaURL;

            video.muted =
                true;

            video.playsInline =
                true;

            video.load();


            status.textContent =
                "Advertisement playing...";


            /*
             * Start playback.
             */

            await video.play();


            console.log(
                "[VAST] Playback started"
            );


        } catch (error) {

            /*
             * Technical error only.
             * Countdown remains untouched.
             */

            console.error(
                "[VAST] ERROR:",
                error
            );


            status.textContent =
                "Advertisement unavailable";


            /*
             * Continue to YouTube.
             */

            setTimeout(
                function () {

                    showYouTube();

                },
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

            console.log(
                "[VAST] Advertisement finished"
            );


            showYouTube();

        }
    );


    /* =====================================================
       VAST PLAYBACK ERROR
    ===================================================== */

    video.addEventListener(
        "error",
        function () {

            console.error(
                "[VAST] Video playback error:",
                video.error
            );


            showYouTube();

        }
    );


    /* =====================================================
       START VAST
       
       Countdown has already started
       independently above.
    ===================================================== */

    playVAST();

})();
