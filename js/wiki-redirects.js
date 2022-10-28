const paramsString = new URLSearchParams(window.location.search)

const args = paramsString.get("q").replace(" ", "_")

window.location.href = `https://fr.wikipedia.org/wiki/${args}`;