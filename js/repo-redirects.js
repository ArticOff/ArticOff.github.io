const paramsString = new URLSearchParams(window.location.search)

const args1 = paramsString.get("q")
let args2 = paramsString.get("user")
if (args2 === null)
{
    args2 = "ArticOff";
}

window.location.href = `https://github.com/${args2}/${args1}`;