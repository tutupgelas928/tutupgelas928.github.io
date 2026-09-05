// ============================================
// AUTO CONFIG - ZERO HARDCODE - RELATIVE PATH
// ============================================

const CONFIG = (function() {
    // ===== DETEKSI DOMAIN =====
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    
    let subdomain = '';
    let domain = '';
    let tld = '';
    
    if (parts.length >= 3) {
        subdomain = parts[0];
        domain = parts[1];
        tld = parts.slice(2).join('.');
    } else if (parts.length === 2) {
        domain = parts[0];
        tld = parts[1];
    } else {
        domain = parts[0];
    }
    
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || 
                    hostname.startsWith('192.168.') || hostname.startsWith('10.');
    
    // ===== GENERATE NAMA =====
    function generateSiteName() {
        if (isLocal) return 'LocalTools';
        if (subdomain && subdomain !== 'www') {
            return subdomain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        if (domain) {
            return domain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        return 'Tools';
    }
    
    // ===== GENERATE TAGLINE =====
    function generateTagline() {
        const taglines = [
            'Free Online Tools',
            'Fast & Secure Web Tools',
            'Simple Online Utilities',
            'Free Web Tools Collection',
            'Online Tools for Everyone'
        ];
        const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return taglines[hash % taglines.length];
    }
    
    // ===== GENERATE DESKRIPSI =====
    function generateDescription(siteName) {
        return `${siteName} - free online tools. Fast, secure, and privacy-friendly. No registration required.`;
    }
    
    // ===== GENERATE WARNA =====
    function generateColors() {
        const palettes = [
            { primary: '#6366f1', primaryDark: '#4f46e5', secondary: '#8b5cf6' },
            { primary: '#10b981', primaryDark: '#059669', secondary: '#34d399' },
            { primary: '#f59e0b', primaryDark: '#d97706', secondary: '#fbbf24' },
            { primary: '#ef4444', primaryDark: '#dc2626', secondary: '#f87171' },
            { primary: '#3b82f6', primaryDark: '#2563eb', secondary: '#60a5fa' },
            { primary: '#ec4899', primaryDark: '#db2777', secondary: '#f472b6' },
            { primary: '#8b5cf6', primaryDark: '#7c3aed', secondary: '#a78bfa' },
            { primary: '#14b8a6', primaryDark: '#0d9488', secondary: '#2dd4bf' },
            { primary: '#f97316', primaryDark: '#ea580c', secondary: '#fb923c' },
            { primary: '#06b6d4', primaryDark: '#0891b2', secondary: '#22d3ee' }
        ];
        const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return palettes[hash % palettes.length];
    }
    
    // ===== GENERATE LOGO =====
    function generateLogo() {
        const emojis = ['⚡', '🛠️', '🔧', '💻', '✨', '🚀', '🎯', '🔨', '⚙️', '📦', '🧰', '🔩'];
        const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return emojis[hash % emojis.length];
    }
    
    // ===== BUILD =====
    const siteName = generateSiteName();
    const colors = generateColors();
    
    return {
        siteName: siteName,
        tagline: generateTagline(),
        description: generateDescription(siteName),
        logoEmoji: generateLogo(),
        colors: colors,
        isLocal: isLocal,
        hostname: hostname,
        
        adsense: {
            enabled: false,
            clientId: '',
            slots: { header: '', content: '', footer: '' }
        },
        
        // ===== RELATIVE PATH =====
        tools: [
            { id: 'word-counter', name: 'Word Counter', icon: '📝', file: 'word-counter.html', description: 'Count words, characters, and sentences instantly.', color: '#e0e7ff' },
            { id: 'case-converter', name: 'Case Converter', icon: '🔤', file: 'case-converter.html', description: 'Convert text to UPPERCASE, lowercase, Title Case.', color: '#fce7f3' },
            { id: 'age-calculator', name: 'Age Calculator', icon: '🎂', file: 'age-calculator.html', description: 'Calculate exact age in years, months, and days.', color: '#d1fae5' },
            { id: 'color-converter', name: 'Color Converter', icon: '🎨', file: 'color-converter.html', description: 'Convert colors between HEX, RGB, and HSL.', color: '#fef3c7' },
            { id: 'lorem-ipsum', name: 'Lorem Ipsum', icon: '📄', file: 'lorem-ipsum.html', description: 'Generate placeholder text for your projects.', color: '#e0e7ff' },
            { id: 'json-formatter', name: 'JSON Formatter', icon: '💻', file: 'json-formatter.html', description: 'Format and validate JSON data easily.', color: '#dcfce7' }
        ],
        
        navigation: [
            { name: 'Home', file: 'index.html' },
            { name: 'About', file: 'about.html' },
            { name: 'Contact', file: 'contact.html' }
        ],
        
        footerLinks: [
            { name: 'About', file: 'about.html' },
            { name: 'Contact', file: 'contact.html' },
            { name: 'Privacy Policy', file: 'privacy-policy.html' },
            { name: 'Terms', file: 'terms.html' }
        ]
    };
})();

// ============================================
// HELPER FUNCTIONS - RELATIVE
// ============================================

function applyColors() {
    const root = document.documentElement;
    if (CONFIG.colors) {
        if (CONFIG.colors.primary) root.style.setProperty('--primary', CONFIG.colors.primary);
        if (CONFIG.colors.primaryDark) root.style.setProperty('--primary-dark', CONFIG.colors.primaryDark);
        if (CONFIG.colors.secondary) root.style.setProperty('--secondary', CONFIG.colors.secondary);
    }
}

function renderHeader() {
    const navLinks = CONFIG.navigation.map(link => 
        `<a href="${link.file}">${link.name}</a>`
    ).join('');
    
    return `
        <header>
            <div class="header-container">
                <a href="index.html" class="logo">
                    <div class="logo-icon">${CONFIG.logoEmoji}</div>
                    <span>${CONFIG.siteName}</span>
                </a>
                <nav>${navLinks}</nav>
            </div>
        </header>
    `;
}

function renderFooter() {
    const footerLinks = CONFIG.footerLinks.map(link => 
        `<li><a href="${link.file}">${link.name}</a></li>`
    ).join('');
    
    const popularTools = CONFIG.tools.slice(0, 4).map(tool => 
        `<li><a href="${tool.file}">${tool.icon} ${tool.name}</a></li>`
    ).join('');
    
    const year = new Date().getFullYear();
    
    return `
        <footer>
            <div class="footer-container">
                <div class="footer-section">
                    <h4>${CONFIG.logoEmoji} ${CONFIG.siteName}</h4>
                    <p>${CONFIG.tagline}</p>
                </div>
                <div class="footer-section">
                    <h4>Links</h4>
                    <ul>${footerLinks}</ul>
                </div>
                <div class="footer-section">
                    <h4>Tools</h4>
                    <ul>${popularTools}</ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${year} ${CONFIG.siteName}. All rights reserved.</p>
            </div>
        </footer>
    `;
}

function renderBreadcrumb(pageName) {
    return `
        <div class="breadcrumb">
            <a href="index.html">Home</a> → 
            <span>${pageName}</span>
        </div>
    `;
}

function renderToolCards() {
    return CONFIG.tools.map(tool => `
        <a href="${tool.file}" class="tool-card">
            <div class="tool-icon" style="background: ${tool.color};">${tool.icon}</div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        </a>
    `).join('');
}

function renderRelatedTools(currentId) {
    const related = CONFIG.tools.filter(t => t.id !== currentId).slice(0, 3);
    return related.map(tool => `
        <a href="${tool.file}" class="related-tool">${tool.icon} ${tool.name}</a>
    `).join('');
}

function renderAdsense(slotName) {
    if (!CONFIG.adsense.enabled || !CONFIG.adsense.clientId) return '';
    const slot = CONFIG.adsense.slots[slotName];
    if (!slot) return '';
    
    return `
        <div class="ad-container">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${CONFIG.adsense.clientId}"
                 data-ad-slot="${slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    `;
}

function setPageTitle(pageName) {
    document.title = `${pageName} | ${CONFIG.siteName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageName !== 'Home') {
        metaDesc.content = `${pageName} - free online tool. ${CONFIG.description}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applyColors();
    
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = renderHeader();
    
    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = renderFooter();
    
    const breadcrumbEl = document.getElementById('breadcrumb');
    const pageName = document.body.getAttribute('data-page-name');
    if (breadcrumbEl && pageName) breadcrumbEl.innerHTML = renderBreadcrumb(pageName);
    
    const toolsGrid = document.getElementById('tools-grid');
    if (toolsGrid) toolsGrid.innerHTML = renderToolCards();
    
    const relatedEl = document.getElementById('related-tools');
    const currentId = document.body.getAttribute('data-tool-id');
    if (relatedEl && currentId) relatedEl.innerHTML = renderRelatedTools(currentId);
    
    if (pageName) setPageTitle(pageName);
    
    const adHeader = document.getElementById('ad-header');
    if (adHeader) adHeader.innerHTML = renderAdsense('header');
    
    const adContent = document.getElementById('ad-content');
    if (adContent) adContent.innerHTML = renderAdsense('content');
    
    const adFooter = document.getElementById('ad-footer');
    if (adFooter) adFooter.innerHTML = renderAdsense('footer');
});
