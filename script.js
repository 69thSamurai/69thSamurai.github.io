document.addEventListener("DOMContentLoaded", function () {
    // Fetch the current domain name and update the header
    const domainNameElement = document.getElementById("domain-name");
    const currentDomain = window.location.hostname;
    if (currentDomain) {
        domainNameElement.textContent = currentDomain;
    } else {
        domainNameElement.textContent = "این دامنه";
    }
    // Increment hit counter
    const hitCounter = localStorage.getItem('hitCounter') || 0;
    localStorage.setItem('hitCounter', parseInt(hitCounter) + 1);
    document.getElementById('hit-counter').textContent = hitCounter;
});
