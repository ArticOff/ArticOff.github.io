const paramsString = new URLSearchParams(window.location.search)

const args1 = paramsString.get("id")

if (args1 === null)
{
    null
}
else
{
    window.open(`https://stackoverflow.com/questions/${args1}`, "_blank");
}