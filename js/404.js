let path = location.pathname.split("/");

if (path[1] == "mars") {
    const converter = new showdown.Converter();
    converter.setOption('tables', true);

    if (!path || path[2] === "docs") {
        path = "intro";
    }
    fetch(`/md/${path.pop()}.md`)
    .then(async response => {
        let text = await response.text();
        if (response.status !== 200) {
            text = await (await fetch("/md/404.md")).text();
        }
        document.title = `Mars - Documentation | ${path.pop()}`
        const doc = converter.makeHtml(text);
        document.body.innerHTML += doc;
    })
} else {
    const main = document.getElementById("main");
    const h1 = document.createElement("h1");
    h1.innerText = "Tu vas où ???";
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.href = "/"
    a.innerHTML = "Reviens en zone sûre.";
    div.appendChild(a);
    main.appendChild(h1);
    main.appendChild(div);
}
