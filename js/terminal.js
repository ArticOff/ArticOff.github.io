$('body').terminal({
    hello: function(what) {
        return this.echo(`
Hello, ${what}.
        `);
    },
    discord: function(type) {
        if (type === "account") {
            return this.echo(`
Artic#3065
            `);
        } else if (type === "server") {
            return this.echo(`
https://discord.gg/h7YFnP45jv
            `);
        } else {
            return this.echo(`
Please enter a valid type.
- account
- server
            `);
        }
    },
    clear: function() {
        return this.clear();
    },
    info: function() {
        return this.echo(`
I am Artic, a young developer who makes Discord bots and websites !\nI live in Strasbourg, France.
        `);
    },
    tableflip: function() {
        return this.echo(`
(╯°□°）╯︵ ┻━┻
        `);
    },
    unflip: function() {
        return this.echo(`
┬─┬ ノ( ゜-゜ノ)
        `);
    },
    why: function() {
        return this.echo(`
¯\\_(ツ)_/¯
        `);
    },
    social: function() {
        return this.echo(`
YouTube - https://www.youtube.com/channel/UC5BiFPCXBe_aNAaO6IhNXRg
Twitch - https://www.twitch.tv/articoffi
TikTok - https://www.tiktok.com/@articoffi
Instagram - https://www.instagram.com/articoffi
Twitter - https://twitter.com/articoffi
Discord - https://discord.com/users/855783629047988274
GitHub - https://github.com/ArticOff
Pypi - https://pypi.org/user/Artic/  
        `);
    },
    onlyfan: function() {
        return window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    },
    index: function() {
        return window.location.replace("../index")
    },
    help: function() {
        this.echo(`
CLEAR       clears the terminal
DISCORD     show discord account or server
HELP        show this help
HELLO       say hello to someone
INDEX       brings you back to the main page
INFO        show info about me
ONLYFAN     show a video that only fans can see
UNFLIP      unflip the table
SOCIAL      show my social media
TABLEFLIP   flip the table
WHY         show why you are here
        `);
    }
}, {
    greetings: 'Hello user,\nType "help" to see all commands.\n\nCongratulations!\n',
});