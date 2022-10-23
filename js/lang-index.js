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

        document.getElementById("desc-title").innerHTML = `Je suis Artic, mais aussi ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "développeur", "étudiant", "cool", "passionné" ]'`)}`
        document.getElementById("desc-1").innerHTML = "Je suis Adam, certain me connaissent sous le nom d'Artic."
        document.getElementById("desc-2").innerHTML = `J'aime le vaste monde de la programmation depuis que j'ai découvert ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} et les langages de programmation.`
        document.getElementById("desc-3").innerHTML = "Depuis, j'enchaine les projets..."
        document.getElementById("contact").innerHTML = "Me contacter"
        document.getElementById("links").innerHTML = "Mes réseaux sociaux"

        document.getElementById("copyright").innerHTML = `© 2022 - aujourd'hui ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Fait avec ❤️ par ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "en-US") {

        document.getElementById("b-accueil").innerHTML = "Home"
        document.getElementById("b-propos").innerHTML = "About"
        document.getElementById("b-projets").innerHTML = "My projects"

        document.getElementById("desc-title").innerHTML = `I'm Artic, but also ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "developer", "student", "cool", "passionate" ]'`)}`
        document.getElementById("desc-1").innerHTML = "I'm Adam, better known as Artic."
        document.getElementById("desc-2").innerHTML = `I have loved the vast world of programming since I discovered ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} and programming languages.`
        document.getElementById("desc-3").innerHTML = "Since then, I have been working on a number of projects..."
        document.getElementById("contact").innerHTML = "Contact me"
        document.getElementById("links").innerHTML = "My social networks"

        document.getElementById("copyright").innerHTML = `© 2022 - today ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Made with ❤️ by ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
   
    } else if (lang === "de-DE") {
        document.getElementById("b-accueil").innerHTML = "Startseite"
        document.getElementById("b-propos").innerHTML = "Über"
        document.getElementById("b-projets").innerHTML = "Meine Projekte"
        
        document.getElementById("desc-title").innerHTML = `Ich bin Artic, aber auch ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "entwickler", "studenten", "cool", "leidenschaftlich" ]'`)}`
        document.getElementById("desc-1").innerHTML = "Ich bin Adam, besser bekannt als Artic."
        document.getElementById("desc-2").innerHTML = `Ich liebe die weite Welt der Programmierung, seit ich die ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} und Programmiersprachen.`
        document.getElementById("desc-3").innerHTML = "Seitdem habe ich an einer Reihe von Projekten gearbeitet..."
        document.getElementById("contact").innerHTML = "Kontaktieren Sie mich"
        document.getElementById("links").innerHTML = "Meine sozialen Netzwerke"

        document.getElementById("copyright").innerHTML = `© 2022 - heute ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Hergestellt mit ❤️ von ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "es-ES") {

        document.getElementById("b-accueil").innerHTML = "Inicio"
        document.getElementById("b-propos").innerHTML = "Acerca de"
        document.getElementById("b-projets").innerHTML = "Mis proyectos"

        document.getElementById("desc-title").innerHTML = `Yo soy Artic, pero también ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "desarrollador", "estudiante", "cool", "apasionado" ]'`)}`
        document.getElementById("desc-1").innerHTML = "Soy Adam, más conocido como Artic."
        document.getElementById("desc-2").innerHTML = `Me encanta el vasto mundo de la programación desde que descubrí ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} y lenguajes de programación.`
        document.getElementById("desc-3").innerHTML = "Desde entonces, he estado trabajando en varios proyectos..."
        document.getElementById("contact").innerHTML = "Contacto"
        document.getElementById("links").innerHTML = "Mis redes sociales"

        document.getElementById("copyright").innerHTML = `© 2022 - hoy ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Hecho con ❤️ por ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "it-IT") {

        document.getElementById("b-accueil").innerHTML = "Pagina iniziale"
        document.getElementById("b-propos").innerHTML = "Circa"
        document.getElementById("b-projets").innerHTML = "I miei progetti"

        document.getElementById("desc-title").innerHTML = `Io sono Artic, ma anche ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "sviluppatore", "studente", "cool", "appassionato" ]'`)}`
        document.getElementById("desc-1").innerHTML = "Sono Adam, meglio conosciuto come Artic."
        document.getElementById("desc-2").innerHTML = `Ho amato il vasto mondo della programmazione da quando ho scoperto ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} e linguaggi di programmazione.`
        document.getElementById("desc-3").innerHTML = "Da allora ho lavorato a diversi progetti..."
        document.getElementById("contact").innerHTML = "Contattatemi"
        document.getElementById("links").innerHTML = "Le mie reti sociali"

        document.getElementById("copyright").innerHTML = `© 2022 - oggi ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Realizzato con ❤️ da ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "pt-PT") {

        document.getElementById("b-accueil").innerHTML = "Início"
        document.getElementById("b-propos").innerHTML = "Sobre"
        document.getElementById("b-projets").innerHTML = "Meus projetos"

        document.getElementById("desc-title").innerHTML = `Eu sou Artic, mas também ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "desenvolvedor", "estudante", "cool", "apaixonado" ]'`)}`
        document.getElementById("desc-1").innerHTML = "Eu sou Adam, mais conhecido como Artic."
        document.getElementById("desc-2").innerHTML = `Eu amo o vasto mundo da programação desde que descobri ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} e linguagens de programação.`
        document.getElementById("desc-3").innerHTML = "Desde então, tenho trabalhado em uma série de projetos..."
        document.getElementById("contact").innerHTML = "Contate-me"
        document.getElementById("links").innerHTML = "Minhas redes sociais"

        document.getElementById("copyright").innerHTML = `© 2022 - hoje ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Feito com ❤️ por ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "ja-JP") {

        document.getElementById("b-accueil").innerHTML = "ホーム"
        document.getElementById("b-propos").innerHTML = "について"
        document.getElementById("b-projets").innerHTML = "マイプロジェクト"

        document.getElementById("desc-title").innerHTML = `私はアーティックですが、同時に ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "開発者", "スチューデント", "冷ややか", "熱情的" ]'`)}`
        document.getElementById("desc-1").innerHTML = "私はアダム、通称アーティックです。"
        document.getElementById("desc-2").innerHTML = `に始まり、プログラミングの広大な世界に惚れ込んでいます。 ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'スクラッチ', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} およびプログラミング言語.`
        document.getElementById("desc-3").innerHTML = "それ以来、私はさまざまなプロジェクトに取り組んできました...。"
        document.getElementById("contact").innerHTML = "お問い合わせ"
        document.getElementById("links").innerHTML = "私のソーシャルネットワーク"

        document.getElementById("copyright").innerHTML = `© 2022 - 今日 ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `で作られています。 ❤️ で ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    } else if (lang === "ja") {

        document.getElementById("b-accueil").innerHTML = "ホーム"
        document.getElementById("b-propos").innerHTML = "について"
        document.getElementById("b-projets").innerHTML = "マイプロジェクト"

        document.getElementById("desc-title").innerHTML = `私はアーティックですが、同時に ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "開発者", "スチューデント", "冷ややか", "熱情的" ]'`)}`
        document.getElementById("desc-1").innerHTML = "私はアダム、通称アーティックです。"
        document.getElementById("desc-2").innerHTML = `に始まり、プログラミングの広大な世界に惚れ込んでいます。 ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'スクラッチ', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} およびプログラミング言語.`
        document.getElementById("desc-3").innerHTML = "それ以来、私はさまざまなプロジェクトに取り組んできました...。"
        document.getElementById("contact").innerHTML = "お問い合わせ"
        document.getElementById("links").innerHTML = "私のソーシャルネットワーク"

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

        document.getElementById("desc-title").innerHTML = `I'm Artic, but also ${balise('span', `style="color: #5865f2;" class="txt-rotate" data-period="2000" data-rotate='[ "developer", "student", "cool", "passionate" ]'`)}`
        document.getElementById("desc-1").innerHTML = "I am Adam, better known as Artic."
        document.getElementById("desc-2").innerHTML = `I have loved the vast world of programming since I discovered ${balise('a', 'href="https://scratch.mit.edu/" target="_blank"', 'Scratch', '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')} and programming languages.`
        document.getElementById("desc-3").innerHTML = "Since then, I have been working on a number of projects..."
        document.getElementById("contact").innerHTML = "Contact me"
        document.getElementById("links").innerHTML = "My social networks"

        document.getElementById("copyright").innerHTML = `© 2022 - today ${balise("a", "class='discord-url-invite' href='https://discord.gg/h7YFnP45jv' target='BLANK'", "Artic the Developer", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
        document.getElementById("heart").innerHTML = `Made with ❤️ by ${balise("a", "class='discord-url-invite' href='https://discord.com/users/855783629047988274' target='BLANK'", "Artic", '<svg class="external-link" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-5 w-5 inline-block mb-1" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>')}`
    
    }
}

translate()