// Fetch all links from links.json
fetch("config/links.json").then(response => response.json()).then(config => {
        config.forEach(link => {
        const object = document.createElement("a");
        Object.assign(object, {
            href: link.url,
            // innerHTML: `<i class="${link.icon}"></i> ${link.text}`,
            innerHTML: `<img class="icon" aria-hidden="true" src="${link.icon}"> <p class="linktext">${link.text}</p>`,
            
            target: "_blank"
        });

        // Add link to the document
        document.getElementById("links").appendChild(object);
    });
});