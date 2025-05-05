// Fetch all pending properties from pendings.json
fetch("config/pendings.json").then(response => response.json()).then(config => {
    config.forEach(pending => {
        const element = document.getElementById(pending.id);
        if (element) {
            element[pending.property] = pending.value;
            element.classList = pending.style;
        }
    });
});