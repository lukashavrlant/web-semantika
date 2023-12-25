if (navigator.sendBeacon) {
    navigator.sendBeacon('https://www.matweb.cz/api.php', JSON.stringify({
        "type": "analytics",
        "articleId": location.pathname.replace('/', '').replace(/\/$/, '') || 'index',
        "referrer": getReferrer(),
        "fullUrl": location.href
    }));
}

function getReferrer() {
    try {
        return new URL(document.referrer).host.replace('www.', '') || 'na';
    } catch (error) {
        return 'na';
    }
}
