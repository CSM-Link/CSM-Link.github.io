const project = "Link";


// Fetch all data from meta.json
fetch("config/meta.json").then(response => response.json()).then(config => {
    // Websites title
    document.title = config.title || `Link`;

    // Name, picture & about
    [
        { id: "name", property: "textContent", value: config.name },
        { id: "picture", property: "innerHTML", value: config.picture ? `<img src="${config.picture}" alt="picture">` : "" },
        { id: "about", property: "textContent", value: config.about }
    ].forEach(({ id, property, value }) => {
        document.getElementById(id)[property] = value;
    });

    // Favicon
    const favicon = document.createElement("link");
    Object.assign(favicon, {
        href: config.favicon || "",
        rel: "icon"
    });
    document.head.appendChild(favicon);
});