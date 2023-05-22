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

        document.getElementById("title-1").innerHTML = "Qui suis-je ?"
        document.getElementById("title-2").innerHTML = "Comment définis-tu la programmation ?"
        document.getElementById("title-3").innerHTML = "Pourquoi la programmation ?"
        document.getElementById("title-4").innerHTML = "Quels sont tes outils ?"
        document.getElementById("title-5").innerHTML = "Note ton niveau dans chaque langage."

        document.getElementById("title1-1").innerHTML = "Je m'appelle Néji, j'ai 14 ans et j'habite en Côte-D'Or. Mon passe temps, c'est le dev."
        document.getElementById("title1-2").innerHTML = `Je sais coder en ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "Python", "Lua", "HTML", "CSS", "JavaScript", "C#", "C", "PotatoLang" ]'`)}`
        document.getElementById("title1-3").innerHTML = "J'apprend à coder depuis mars  2020 en plein confinement en commencant par Python, un excellent langage de programmation, facile à apprendre et ergonomique. Puis l'HTML, le CSS et le JavaScript pour faire du développement web."
        document.getElementById("title1-4").innerHTML = "J'ai continué sur des langages comme le C# et le C pour faire de l'embarqué, je vais apprendre sur le C++ bientôt. Pour finir sur le Lua, un langage très simple niveau syntaxe, C'est beaucoup plus facile que le Python."
        document.getElementById("title1-5").innerHTML = `J'aime le vaste monde de la programmation depuis que j'ai découvert ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}et les langages de programmation.`
        document.getElementById("title1-6").innerHTML = "Et depuis, j'apprend de nouveaux langages..."

        document.getElementById("title2-1").innerHTML = "La programmation, c'est comme être un peintre devant une toile blanche."
        document.getElementById("title2-2").innerHTML = "Je peux faire ce que je veux avec seulement quelques lignes de code."

        document.getElementById("title3-1").innerHTML = "J'ai choisis la programmation car c'est un sujet qui me passionne depuis mon plus jeune âge."
        document.getElementById("title3-2").innerHTML = `Toujours je me disais ${balise('span', 'style="font-style: italic;"', '"Comment marchent les objets électronique du quotidien ?"')}`
        document.getElementById("title3-3").innerHTML = `ou alors ${balise('span', 'style="font-style: italic;"', '"Comment relier le matériel au logiciel ?"')}`
        document.getElementById("title3-4").innerHTML = "Ces questions qui semblent bête et inutile pour certain. Et complètement logique pour d'autre."
        document.getElementById("title3-5").innerHTML = "Et pourtant, Je me les répète à moi-même sans cesse..."

        document.getElementById("title4-1").innerHTML = `En tant qu'IDE, j'utilise ${balise('a', 'href="https://code.visualstudio.com/" target="_blank"', "Visual Studio Code", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}, un éditeur de code très connu et facile à prendre en main, ça me suffit très largement.`
        document.getElementById("title4-2").innerHTML = `J'utilise ${balise('a', 'href="https://docs.microsoft.com/fr-fr/powershell/scripting/overview?view=powershell-7.2" target="_blank"', 'PowerShell', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} pour terminal.`
        document.getElementById("title4-3").innerHTML = `Pour publier mon code sur ${balise('a', 'href="https://github.com/" target="_blank"', "GitHub", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}ou en télécharger, j'utilise ${balise('a', 'href="https://git-scm.com/" target="_blank"', 'Git', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}.`
        document.getElementById("title4-4").innerHTML = "Et c'est tout."

        document.getElementById("title5-1").innerHTML = `${balise('span', 'style="color: yellow"', '1er.')} Python`
        document.getElementById("title5-2").innerHTML = `${balise('span', 'style="color: gray"', '2e.')} PotatoLang`
        document.getElementById("title5-3").innerHTML = `${balise('span', 'style="color: rgb(139, 89, 48)"', '3e.')} HTML`
        document.getElementById("title5-4").innerHTML = "4e. CSS"
        document.getElementById("title5-5").innerHTML = "5e. Javascript"
        document.getElementById("title5-6").innerHTML = "6e. Lua"
        document.getElementById("title5-7").innerHTML = "7e. C"
        document.getElementById("title5-8").innerHTML = "8e. C#"

        document.getElementById("copyright").innerHTML = `© 2022 - aujourd'hui ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Fait avec ❤️ par ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "en-US") {

        document.getElementById("b-accueil").innerHTML = "Home"
        document.getElementById("b-propos").innerHTML = "About"
        document.getElementById("b-projets").innerHTML = "My projects"



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
