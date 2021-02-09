let questionBank = [
    /* 10 POINTS ROW */
    {
        'statement': 'Jupiter is mostly made of this substance.',
        'option1': 'What is gas?',
        'option2': 'What is rock?',
        'option3': 'What is liquid?',
        'option4': 'What is metal?',
        'points': '10',
        'identifier': 'astro',
        'name': 'first-astro',
        'correct': 'option1'
    },
    {
        'statement': 'Harry Potter brought this type of pet to Hogwarts.',
        'option1': 'What is a snake?',
        'option2': 'What is a cat?',
        'option3': 'What is a toad?',
        'option4': 'What is an owl?',
        'points': '10',
        'identifier': 'hp',
        'name': 'first-hp',
        'correct': 'option4'
    },
    {
        'statement': 'It is this season in Australia in December.',
        'option1': 'What is winter?',
        'option2': 'What is spring?',
        'option3': 'What is summer?',
        'option4': 'What is fall?',
        'points': '10',
        'identifier': 'geo',
        'name': 'first-geo',
        'correct': 'option3'
    }, 
    {
        'statement': 'This is the name of Han Solo\'s starship.',
        'option1': 'What is the Kessel Run?',
        'option2': 'What is the Millenium Falcon?',
        'option3': 'What is the Corellian Star?',
        'option4': 'What is the Lando\'s Revenge?',
        'points': '10',
        'identifier': 'sw',
        'name': 'first-sw',
        'correct': 'option2'
    },
    {
        'statement': 'This explorer led the first expedition to sail around the world.',
        'option1': 'Who was Marco Polo?',
        'option2': 'Who was Christopher Columbus?',
        'option3': 'Who was Ferdinand Magellan?',
        'option4': 'Who was Sir Francis Drake?',
        'points': '10',
        'identifier': 'history',
        'name': 'first-history',
        'correct': 'option3'
    },
    /* 20 POINTS ROW */
    {
        'statement': 'The Sun produces huge storms by this name.',
        'option1': 'What are solar storms?',
        'option2': 'What are sunstorms?',
        'option3': 'What are solar flares?',
        'option4': 'What are sundogs?',
        'points': '20',
        'identifier': 'astro',
        'name': 'second-astro',
        'correct': 'option1'
    },
    {
        'statement': 'This magical creature was involved in the second task of the Triwizard Tournament.',
        'option1': 'What are dragons?',
        'option2': 'What are centaurs?',
        'option3': 'What are Blast-Ended Skrewts?',
        'option4': 'What are mermaids?',
        'points': '20',
        'identifier': 'hp',
        'name': 'second-hp',
        'correct': 'option4'
    },
    {
        'statement': 'This is the largest country in the Caribbean.',
        'option1': 'What is the Dominican Republic?',
        'option2': 'What is Cuba?',
        'option3': 'What is Haiti?',
        'option4': 'What is Jamaica?',
        'points': '20',
        'identifier': 'geo',
        'name': 'second-geo',
        'correct': 'option2'
    },
    {
        'statement': 'Anakin Skywalker and Obi-Wan Kenobi duel on this planet in <i>Star Wars: Episode III - Revenge of the Sith</i>.',
        'option1': 'What is Mustafar?',
        'option2': 'What is Geonosis?',
        'option3': 'What is Tatooine?',
        'option4': 'What is Utapau?',
        'points': '20',
        'identifier': 'sw',
        'name': 'second-sw',
        'correct': 'option1'
    },
    {
        'statement': 'This new weapon appeared on September 15, 1916.',
        'option1': 'What is the figther plane?',
        'option2': 'What are chemical weapons?',
        'option3': 'What is the depth charge?',
        'option4': 'What is the tank?',
        'points': '20',
        'identifier': 'history',
        'name': 'second-history',
        'correct': 'option4'
    },
    /* 30 POINTS ROW */
    {
        'statement': 'This is the name of the boundary around a black hole, beyond which events cannot affect an observer.',
        'option1': 'What is the accretion disk?',
        'option2': 'What is the escape velocity?',
        'option3': 'What is the event horizon?',
        'option4': 'What is the singularity?',
        'points': '30',
        'identifier': 'astro',
        'name': 'third-astro',
        'correct': 'option3'
    },
    {
        'statement': 'This is the author of <i>Hogwarts: A History</i>.',
        'option1': 'Who is Mordicus Egg?',
        'option2': 'Who is Bathilda Bagshot?',
        'option3': 'Who is Newt Scamander?',
        'option4': 'Who is Miranda Goshawk?',
        'points': '30',
        'identifier': 'hp',
        'name': 'third-hp',
        'correct': 'option2'
    },
    {
        'statement': 'This is India\'s national bird.',
        'option1': 'What is the pheasant?',
        'option2': 'What is the swan?',
        'option3': 'What is the peacock?',
        'option4': 'What is the quail?',
        'points': '30',
        'identifier': 'geo',
        'name': 'third-geo',
        'correct': 'option3'
    },
    {
        'statement': 'This is the only Rebel Alliance pilot to survive all three movies in the original trilogy.',
        'option1': 'Who is Wedge Antilles?',
        'option2': 'Who is Norra Wexley?',
        'option3': 'Who is Nien Nunb?',
        'option4': 'Who is Biggs Darklighter?',
        'points': '30',
        'identifier': 'sw',
        'name': 'third-sw',
        'correct': 'option1'
    },
    {
        'statement': 'This is the name of the Beatles\' debut album.',
        'option1': 'What is <i>Twist and Shout</i>?',
        'option2': 'What is <i>Introducing... The Beatles</i>?',
        'option3': 'What is <i>A Hard Day\'s Night</i>?',
        'option4': 'What is <i>Please Please Me</i>?',
        'points': '30',
        'identifier': 'history',
        'name': 'third-history',
        'correct': 'option4'
    },
    /* 40 POINTS ROW */
    {
        'statement': 'This is the only moon in our solar system that has an atmosphere.',
        'option1': 'What is Uranus\' moon Oberon?',
        'option2': 'What is Saturn\'s moon Titan?',
        'option3': 'What is Mars\' moon Phobos?',
        'option4': 'What is Jupiter\'s moon Io?',
        'points': '40',
        'identifier': 'astro',
        'name': 'fourth-astro',
        'correct': 'option2'
    },
    {
        'statement': 'Tina Goldstein was sorted into this house at Ilvermorny School of Witchcraft and Wizardry.',
        'option1': 'What is Horned Serpent?',
        'option2': 'What is Wampus?',
        'option3': 'What is Pukwudgie?',
        'option4': 'What is Thunderbird?',
        'points': '40',
        'identifier': 'hp',
        'name': 'fourth-hp',
        'correct': 'option4'
    },
    {
        'statement': 'This country controls Easter Island.',
        'option1': 'What is Chile?',
        'option2': 'What is Peru?',
        'option3': 'What is Argentina?',
        'option4': 'What is Bolivia?',
        'points': '40',
        'identifier': 'geo',
        'name': 'fourth-geo',
        'correct': 'option1'
    },
    {
        'statement': 'Luke Skywalker exiles himself to this planet in <i>Star Wars: Episode VII - The Force Awakens</i>.',
        'option1': 'What is Dagobah?',
        'option2': 'What is Tython?',
        'option3': 'What is Ahch-To?',
        'option4': 'What is Pillio?',
        'points': '40',
        'identifier': 'sw',
        'name': 'fourth-sw',
        'correct': 'option3'
    },
    {
        'statement': 'The League of Nations met for the first time in this European city.',
        'option1': 'What is Brussels?',
        'option2': 'What is Paris?',
        'option3': 'What is The Hague?',
        'option4': 'What is Geneva?',
        'points': '40',
        'identifier': 'history',
        'name': 'fourth-history',
        'correct': 'option4'
    },
    /* 50 POINTS ROW */
    {
        'statement': 'The Horsehead Nebula can be found in this constellation.',
        'option1': 'What is Draco?',
        'option2': 'What is Gemini?',
        'option3': 'What is Andromeda?',
        'option4': 'What is Orion?',
        'points': '50',
        'identifier': 'astro',
        'name': 'fifth-astro',
        'correct': 'option4'
    },
    {
        'statement': 'This is the original owner of the Invisibility Cloak and an ancestor of Harry Potter.',
        'option1': 'Who is Ignotus Peverell?',
        'option2': 'Who is Xavier Rastrick?',
        'option3': 'Who is Godric Gryffindor?',
        'option4': 'Who is Elphias Doge?',
        'points': '50',
        'identifier': 'hp',
        'name': 'fifth-hp',
        'correct': 'option1'
    },
    {
        'statement': 'This is the capital of Bangladesh.',
        'option1': 'What is Chittagong?',
        'option2': 'What is Rangpur?',
        'option3': 'What is Dhaka?',
        'option4': 'What is Patna?',
        'points': '50',
        'identifier': 'geo',
        'name': 'fifth-geo',
        'correct': 'option3'
    },
    {
        'statement': 'This is the species of Omi, the creature living in the garbage masher in which Luke, Leia and Han land in <i>Star Wars: Episode IV: A New Hope</i>.',
        'option1': 'What is a Ysalamiri?',
        'option2': 'What is a Dianoga?',
        'option3': 'What is a Falleen?',
        'option4': 'What is a Sarlacc?',
        'points': '50',
        'identifier': 'sw',
        'name': 'fifth-sw',
        'correct': 'option2'
    },
    {
        'statement': 'This military order was suppressed and disbanded on Friday the 13th of October 1307.',
        'option1': 'Who were the Knights Templar?',
        'option2': 'Who were the Teutonic Knights?',
        'option3': 'Who were the Crusaders?',
        'option4': 'Who were the Order of Saint James?',
        'points': '50',
        'identifier': 'history',
        'name': 'fifth-history',
        'correct': 'option1'
    },
    {
        'statement': 'This is the default behavior in Javascript of moving all variable declarations to the top of the current scope.',
        'option1': 'What is sorting?',
        'option2': 'What is scoping?',
        'option3': 'What is hoisting?',
        'option4': 'What is refactoring?',
        'points': '50',
        'identifier': 'final',
        'name': 'first-final',
        'correct': 'option3'
    },
    {
        'statement': 'This mathematician born in 1815 is considered to be the first ever computer programmer.',
        'option1': 'Who is Michael Faraday?',
        'option2': 'Who is Charles Babbage?',
        'option3': 'Who is Alan Turing?',
        'option4': 'Who is Ada Lovelace?',
        'points': '50',
        'identifier': 'final',
        'name': 'second-final',
        'correct': 'option4'
    }
]