document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const website = path.replace(/\//g, '');
    document.getElementById('iframeId').src = `https://${website}`
});
