// ==UserScript==
// @name         Bing to Google
// @namespace    https://github.com/Fred-szy/bing-to-google
// @version      1.1.0
// @description  Automatically redirects Bing searches to Google when Google is accessible
// @author       Fred-szy
// @match        https://www.bing.com/search*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    const TIMEOUT_MS = 1500;
    const query = new URLSearchParams(window.location.search).get('q');

    if (!query) return;

    const img = new Image();
    let done = false;

    function stay() {
        if (done) return;
        done = true;
        img.src = '';
    }

    function jump() {
        if (done) return;
        done = true;
        clearTimeout(timer);
        window.location.replace(
            'https://www.google.com/search?q=' + encodeURIComponent(query)
        );
    }

    const timer = setTimeout(stay, TIMEOUT_MS);

    img.onload = jump;
    img.onerror = stay;

    img.src = 'https://www.google.com/favicon.ico?_=' + Date.now();
})();
