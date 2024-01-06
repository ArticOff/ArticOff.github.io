const title = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "visible") {
        document.title = title;
    } else {
        document.title = "Reviens ou jte bute.";
    }
});
