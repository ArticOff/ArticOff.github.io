const lang = navigator.language

function balise(balise, options, text, svg) {
    if (svg) {
        return `<${balise} ${options}>${text}${svg}</${balise}>`
    }
    if (text) {
        return `<${balise} ${options}>${text}</${balise}>`
    }
    return `<${balise} ${options}></${balise}>`
}

function translate() {
    if (lang === "fr-FR") {

        document.getElementById("b-accueil").innerHTML = "Accueil"
        document.getElementById("b-propos").innerHTML = "À Propos"
        document.getElementById("b-projets").innerHTML = "Mes projets"

        document.getElementById("projet1").innerHTML = `PotatoLang est un langage de programmation de haut niveau. Créé le 20 juillet 2022 en collaboration avec ${balise("a", 'href="https://discord.gg/H63XBBBkMW" target="_blank"', "CodeSec Community", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}. Ce sont eux qui ont créé ${balise("a", 'href="https://en.wikipedia.org/wiki/Draft:Potato_Lang" target="_blank"', "la page Wikipedia sur PotatoLang", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}.`
        document.getElementById("projet2").innerHTML = `A useless bot est un bot Discord mutlifonction. Designé pour être facile et modulable, ce bot est un de mes plus gros projet et certainement celui qui était le plus travaillé. Malheureusement, ce bot et son ${balise("a", "href='https://aub-team.netlify.app/' target='BLANK'", "site internet", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} resteront down à jamais.`
        document.getElementById("projet3").innerHTML = "robloxAPI est un API wrapper pour Roblox. Ce module contient des fonctionnalités de connexion à des comptes Roblox."
        document.getElementById("projet4").innerHTML = 'discord_akerno est un framework pour les bots Discord. C\'est le même principe que discord-akairo pour discord.js, la différence, c\'est que ce framework est fait pour du Python et designé pour une "transition" entre discord.py et discord.js.'
        document.getElementById("projet5").innerHTML = "Déchiffrer des fichiers Python obfusqué."

        document.getElementById("copyright").innerHTML = `© 2022 - aujourd'hui ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Fait avec ❤️ par ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "en-US") {

        document.getElementById("b-accueil").innerHTML = "Home"
        document.getElementById("b-propos").innerHTML = "About"
        document.getElementById("b-projets").innerHTML = "My projects"

        document.getElementById("projet1").innerHTML = "PotatoLang is a high-level object-oriented programming language. Created on July 20, 2022 in collaboration with CodeSec Community."
        document.getElementById("projet2").innerHTML = "A useless bot is a multipurpose Discord robot."
        document.getElementById("projet3").innerHTML = "robloxAPI is an API wrapper for Roblox."
        document.getElementById("projet4").innerHTML = "discord_akerno is a framework for Discord bots. It is the same principle as discord-akairo for discord.js."
        document.getElementById("projet5").innerHTML = "Decrypt obfuscated Python files."
        
        document.getElementById("copyright").innerHTML = `© 2022 - today ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Made with ❤️ by ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`

    } else if (lang === "de-DE") {

        document.getElementById("b-accueil").innerHTML = "Startseite"
        document.getElementById("b-propos").innerHTML = "Über"
        document.getElementById("b-projets").innerHTML = "Meine Projekte"
        

        document.getElementById("copyright").innerHTML = `© 2022 - heute ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Hergestellt mit ❤️ von ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`

    } else if (lang === "es-ES") {

        document.getElementById("b-accueil").innerHTML = "Inicio"
        document.getElementById("b-propos").innerHTML = "Acerca de"
        document.getElementById("b-projets").innerHTML = "Mis proyectos"



        document.getElementById("copyright").innerHTML = `© 2022 - hoy ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Hecho con ❤️ por ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    } else if (lang === "it-IT") {

        document.getElementById("b-accueil").innerHTML = "Pagina iniziale"
        document.getElementById("b-propos").innerHTML = "Circa"
        document.getElementById("b-projets").innerHTML = "I miei progetti"


        document.getElementById("copyright").innerHTML = `© 2022 - oggi ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Realizzato con ❤️ da ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    } else if (lang === "pt-PT") {

        document.getElementById("b-accueil").innerHTML = "Início"
        document.getElementById("b-propos").innerHTML = "Sobre"
        document.getElementById("b-projets").innerHTML = "Meus projetos"



        document.getElementById("copyright").innerHTML = `© 2022 - hoje ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Feito com ❤️ por ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    } else if (lang === "ja-JP") {

        document.getElementById("b-accueil").innerHTML = "ホーム"
        document.getElementById("b-propos").innerHTML = "について"
        document.getElementById("b-projets").innerHTML = "マイプロジェクト"



        document.getElementById("copyright").innerHTML = `© 2022 - 今日 ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `で作られています。 ❤️ で ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    } else if (lang === "ja") {

        document.getElementById("b-accueil").innerHTML = "ホーム"
        document.getElementById("b-propos").innerHTML = "について"
        document.getElementById("b-projets").innerHTML = "マイプロジェクト"



        document.getElementById("copyright").innerHTML = `© 2022 - 今日 ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `で作られています。 ❤️ で ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    } else if (lang === "ko-KR") {

        document.getElementById("lang").innerHTML = "한국어"

    } else if (lang === "zh-CN") {

        document.getElementById("lang").innerHTML = "简体中文"

    } else if (lang === "zh-TW") {

        document.getElementById("lang").innerHTML = "繁體中文"

    } else {
        document.getElementById("b-accueil").innerHTML = "Home"
        document.getElementById("b-propos").innerHTML = "About"
        document.getElementById("b-projets").innerHTML = "My projects"



        document.getElementById("copyright").innerHTML = `© 2022 - today ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Made with ❤️ by ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        
    }
}

translate()