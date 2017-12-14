import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      messages: [{ who: 'bot greeting', text: '<h2>Hallo 😄,</h2> ich bin der Chatbot von SiR MaRY und beantworte deine Fragen zu SiR MaRY. <br><br>Was möchtest du wissen?' }],
      newMsg: '',
      mainClass: 'home',
      santaClient: 'temp',
      isOverview: true,
      buttonMsg: '&times;',
      isTeamShuffled: false,
      isLogoBlurred: false,
      santaIsTyping: true,
      logoColor: 'black',
      santaMsgs: [],
      santaActions: 0,
      keyData: [
        {
          id: 10,
          q: 'Wer arbeitet bei SiR MaRY?',
          o: null,
          f: [
            'wer',
            'sirmary',
            'sirmary',
            'agentur',
            'mitarbeiter',
            'arbeitet',
            'team'
          ]
        },
        {
          id: 14,
          q: 'Was ist das Angebot von SiR MaRY?',
          o: null,
          f: [
            'was',
            'sirmary',
            'sirmary',
            'bietet',
            'angebot',
            'kann',
            'k\u00f6nnt',
            'skills',
            'knowhow',
            'know-how',
            'knowhow',
            'aufgabenbereich',
            'kompetenzen',
            'kompetenz',
            'kernkompetenz',
            'kernkompetenzen',
            'dienstleistung',
            'dienstleistungen',
            'leistung',
            'leistungen',
            'erfahrung',
            'erfahrungen',
            'valueproposition',
            'kreation',
            'strategie',
            'media',
            'technologie',
            'produktion',
            'socialmedia',
            'tv',
            'tv-spot',
            'tvc',
            'video',
            'film',
            'spot',
            'produktion',
            'strategie',
            'digitalisierung',
            'disruption',
            'agentur',
            'digital',
            'beratung',
            'consulting',
            'werbeagentur',
            'kommunikation',
            'kommunikationsagentur',
            'programmatic',
            'retargeting',
            're-targeting',
            'digitalmedia',
            'reality',
            'augmentedreality',
            'virtualreality',
            'content',
            'bigdata',
            'social',
            'socialads',
            'youtube',
            'native',
            'nativeads',
            'display',
            'banner',
            'adwords',
            'kampagne',
            'kampagnen'
          ]
        },
        { id: 19, q: 'Wer bist du?', o: 0, f: ['bist'] },
        { id: 22, q: 'Was machst du?', o: 0, f: ['machst'] },
        { id: 26, q: 'Wie heisst du?', o: 0, f: ['heisst', 'name'] },
        {
          id: 27,
          q: 'Was kannst du?',
          o: 0,
          f: ['kannst', 'machst', 'wozu', 'machen']
        },
        { id: 28, q: 'Was willst du von mir?', o: 0, f: ['willst'] },
        {
          id: 33,
          q: 'Wer oder was ist SiR MaRY?',
          o: 1,
          f: [
            'wer',
            'was',
            'sirmary',
            'sirmary',
            'agentur',
            'werbeagentur',
            'antwort',
            '\u00fcberuns'
          ]
        },
        {
          id: 37,
          q: 'Was kann man dich fragen?',
          o: 0,
          f: ['frage', 'fragen']
        },
        { id: 38, q: 'Kannst du Witze?', o: 0, f: ['kannst', 'witze'] },
        {
          id: 40,
          q: 'Bist du ein Roboter?',
          o: 0,
          f: ['bist', 'roboter', 'bot', 'maschine', 'mensch']
        },
        {
          id: 41,
          q: 'Hast du Gef\u00fchle?',
          o: 0,
          f: ['hast', 'gef\u00fchl']
        },
        { id: 44, q: 'Was kannst du nicht?', o: 0, f: ['kannst'] },
        { id: 45, q: 'Warum bist du noch in der Beta?', o: 0, f: ['warum'] },
        { id: 47, q: 'Kann ich dir vertrauen?', o: 0, f: ['vertrauen'] },
        {
          id: 48,
          q: 'Dein Lieblingsbuch?',
          o: 0,
          f: ['lieblings', 'buch', 'lieblingsbuch']
        },
        {
          id: 50,
          q: 'Dein Lieblingsfilm?',
          o: 0,
          f: ['lieblings', 'film', 'lieblingsfilm']
        },
        {
          id: 60,
          q: 'Coke oder Pepsi?',
          o: 0,
          f: ['coke', 'coca', 'cola', 'pepsi']
        },
        {
          id: 62,
          q: 'Dein Lieblingsrestaurant?',
          o: 0,
          f: ['lieblings', 'restaurant']
        },
        { id: 64, q: 'Erz\u00e4hlst du mir was?', o: 0, f: ['erz\u00e4hl'] },
        { id: 65, q: 'Ist dir langweilig?', o: 0, f: ['langweilig'] },
        { id: 68, q: 'Bist du angezogen?', o: 0, f: ['bist', 'nackt'] },
        { id: 73, q: 'Bist du weiblich?', o: 0, f: ['frau', 'weiblich'] },
        { id: 76, q: 'Hast du einen Freund?', o: 0, f: ['hast', 'freund'] },
        { id: 80, q: 'Hast du Probleme?', o: 0, f: ['hast', 'problem'] },
        {
          id: 81,
          q: 'Was ist deine Lieblingsfarbe?',
          o: 0,
          f: ['lieblings', 'farbe']
        },
        { id: 84, q: 'Was gibt 1+1?', o: 0, f: ['gibt', 'rechnen'] },
        {
          id: 86,
          q: 'Kann man dich heiraten?',
          o: 0,
          f: ['heiraten', 'verheiratet']
        },
        {
          id: 89,
          q: 'Was wirst du oft gefragt?',
          o: 0,
          f: ['fragen', 'gefragt']
        },
        {
          id: 91,
          q: 'Die blaue oder die rote Pille?',
          o: 0,
          f: ['pille', 'rot', 'blau']
        },
        { id: 95, q: 'What does the fox say?', o: 0, f: ['what'] },
        {
          id: 96,
          q: 'Was ist die Philosophie von SiR MaRY?',
          o: 0,
          f: [
            'philosophie',
            'arbeitsweise',
            'ansatz',
            'konzept',
            'credo',
            'glaubt',
            'glauben',
            'leitsatz'
          ]
        },
        {
          id: 97,
          q: 'Kannst du mir Geld leihen?',
          o: 0,
          f: ['kannst', 'geld']
        },
        { id: 101, q: 'Was ist deine Lieblingsmarke?', o: 0, f: ['lieblings'] },
        { id: 103, q: 'Hey Siri', o: 0, f: ['siri'] },
        { id: 110, q: 'Liebst du mich?', o: 0, f: ['liebst'] },
        {
          id: 111,
          q: 'Befolgst du die drei Robotergesetze?',
          o: 0,
          f: ['roboter', 'bot']
        },
        {
          id: 116,
          q: 'Wie arbeitet SiR MaRY?',
          o: 0,
          f: [
            'wie',
            'skills',
            'knowhow',
            'know-how',
            'knowhow',
            'aufgabenbereich',
            'kompetenzen',
            'kompetenz',
            'kernkompetenz',
            'arbeitsweise'
          ]
        },
        {
          id: 119,
          q: 'Ist SiR MaRY eine Agentur?',
          o: 0,
          f: ['agentur', 'cocktail']
        },
        {
          id: 121,
          q: 'Ist SiR MaRY eine Digitalagentur?',
          o: 0,
          f: ['digital', 'digitalagentur', 'seidihr']
        },
        { id: 122, q: 'Warum ist Digital von gestern?', o: 0, f: ['digital'] },
        {
          id: 123,
          q: 'Wann wurde SiR MaRY gegr\u00fcndet?',
          o: 0,
          f: [
            'gr\u00fcndung',
            'gegr\u00fcndet',
            'entstanden',
            'wann',
            'lange',
            'seitwann',
            'gibt'
          ]
        },
        {
          id: 124,
          q: 'Wer ist in der Gesch\u00e4ftsleitung?',
          o: 0,
          f: [
            'gesch\u00e4ftsleitung',
            'gesch\u00e4ftsf\u00fchrung',
            'managingdirector',
            'chef',
            'ceo'
          ]
        },
        {
          id: 126,
          q: 'Warum sollte ich mit SiR MaRY arbeiten?',
          o: 0,
          f: [
            'sirmary',
            'sirmary',
            'gr\u00fcnde',
            'arbeiten',
            'wieso',
            'weshalb',
            'warum',
            'bringt'
          ]
        },
        {
          id: 128,
          q: 'Was kann ich sonst noch mit SiR MaRY machen?',
          o: 0,
          f: [
            'porn',
            'porno',
            'ficken',
            'spass',
            'cocktail',
            'sex',
            'gutschein',
            'trinken',
            'drink',
            'raygrodski',
            'schmeckt',
            'kann',
            'sirmary',
            'sirmary'
          ]
        },
        {
          id: 129,
          q: 'Wie kontaktiere ich SiR MaRY?',
          o: 1,
          f: [
            'wie',
            'sirmary',
            'sirmary',
            'kontakt',
            'kontaktieren',
            'standort',
            'standorte',
            'adresse',
            'strasse',
            'telefon',
            'anrufen',
            'mail',
            'e-mail',
            'email',
            'mailen',
            'ort',
            'b\u00fcro',
            'office',
            'bertastrasse',
            'bertastr',
            'z\u00fcrich',
            'impressum',
            'termin',
            'woist',
            'woseid',
            'wobist',
            'wo',
            'kontaktiere',
            'erreichbar'
          ]
        },
        {
          id: 130,
          q: 'Wer ist die Konkurrenz von SiR MaRY?',
          o: 0,
          f: ['konkurrenz', 'mitbewerber']
        },
        {
          id: 132,
          q: 'Wie gross ist SiR MaRY?',
          o: 0,
          f: ['gr\u00f6sse', 'gross', 'anzahl', 'mitarbeiter']
        },
        {
          id: 133,
          q: 'Was heisst SiR MaRY?',
          o: 0,
          f: [
            'was',
            'name',
            'bedeutet',
            'heisst',
            'agenturname',
            'agenturnamen',
            'manifest'
          ]
        },
        {
          id: 136,
          q: 'Warum heisst SiR MaRY SiR MaRY?',
          o: 0,
          f: [
            'warum',
            'wieso',
            'woher',
            'name',
            'firmenname',
            'firmennamen',
            'agenturname',
            'agenturnamen',
            'heisst'
          ]
        },
        {
          id: 138,
          q: 'Kann ich bei SiR MaRY arbeiten?',
          o: 1,
          f: [
            'arbeiten',
            'bewerben',
            'bewerbung',
            'jobs',
            'karriere',
            'cv',
            'vakanzen',
            'vakanz',
            'offene',
            'stelle',
            'stellen'
          ]
        },
        {
          id: 140,
          q: 'Was unterscheidet SiR MaRY von anderen Agenturen?',
          o: null,
          f: [
            'usp',
            'besonders',
            'besonderheit',
            'einzigart',
            'unterschied',
            'unterscheidet',
            'anders',
            'differenzierung'
          ]
        },
        { id: 142, q: 'Kann ich euch vertrauen?', o: 0, f: ['vertrauen'] },
        {
          id: 143,
          q: 'Gibt\'s SiR MaRY wirklich?',
          o: 0,
          f: ['sirmary', 'sirmary', 'gibt', 'existiert']
        },
        { id: 144, q: 'Was ist der Sinn des Lebens?', o: 0, f: ['sinn'] },
        {
          id: 145,
          q: 'Was kostet ihr?',
          o: 0,
          f: ['kostet', 'offerte', 'preisliste', 'preise', 'honorar']
        },
        {
          id: 147,
          q: 'Welche Kunden betreut SiR MaRY?',
          o: 1,
          f: ['ubs', 'sharo', 'sharoo', 'ringier', 'samsung', 'kunden', 'kunde']
        },
        {
          id: 148,
          q: 'Wo finde ich Arbeiten von SiR MaRY?',
          o: 0,
          f: [
            'wo',
            'referenzen',
            'referenz',
            'cases',
            'case',
            'portfolio',
            'kampagne',
            'kampagnen',
            'arbeiten',
            'projekte',
            'kunden',
            'kunde'
          ]
        },
        { id: 154, q: 'Wovor hast du Angst?', o: 0, f: ['angst'] },
        { id: 155, q: 'Bist du menschlich?', o: null, f: ['bist', 'mensch'] },
        { id: 157, q: 'Kannst du singen?', o: 0, f: ['kannst', 'singen'] },
        { id: 158, q: 'Warum bin ich hier?', o: 0, f: ['warum', 'weshalb'] },
        {
          id: 159,
          q: 'Warum rede ich mit dir?',
          o: 0,
          f: ['warum', 'weshalb']
        },
        {
          id: 162,
          q: 'Kennst du Vujo?',
          o: 0,
          f: ['kennst', 'vujo', 'bachelor']
        },
        {
          id: 167,
          q: 'Gibt es Ausserirdische?',
          o: 0,
          f: ['ausserirdische', 'aliens']
        },
        { id: 169, q: 'Betr\u00fcgst du mich?', o: 0, f: ['betr\u00fcgen'] },
        { id: 173, q: 'Willst du ein Spiel spielen?', o: 0, f: ['spielen'] },
        { id: 175, q: 'Kennst du Hal 9000?', o: 0, f: ['kennst'] },
        {
          id: 177,
          q: 'Wem geh\u00f6rt SiR MaRY?',
          o: 0,
          f: [
            'geh\u00f6rt',
            'eigent\u00fcmer',
            'gr\u00fcnder',
            'gesch\u00e4ftsleitung',
            'teilhaber',
            'inhaber',
            'ceo',
            'mitinhaber'
          ]
        },
        {
          id: 178,
          q: 'Was will SiR MaRY?',
          o: 0,
          f: ['ziel', 'absicht', 'vision', 'will', 'wollt']
        },
        {
          id: 179,
          q: 'Maurizio Rugghia - Founder',
          o: 0,
          f: ['mauri', 'maurizio', 'rugghia', 'rughia', 'rugia']
        },
        {
          id: 180,
          q: 'Florian Beck - Founder',
          o: null,
          f: ['florian', 'beck']
        },
        {
          id: 181,
          q: 'Daniel Zuberb\u00fchler - Founder',
          o: 0,
          f: ['dani', 'daniel', 'zuberb\u00fchler', 'zubi']
        },
        {
          id: 182,
          q: 'Pascal Baumann - Creative Director',
          o: 0,
          f: ['pascal', 'baumann', 'pi']
        },
        {
          id: 183,
          q: 'Tino Elsener - Account Director',
          o: 0,
          f: ['tino', 'elsener']
        },
        {
          id: 185,
          q: 'Nicolas Hostettler - Strategy Director',
          o: 0,
          f: ['nicolas', 'nico', 'hostettler', 'hofstetter', 'hofstettler']
        },
        {
          id: 186,
          q: 'Vanessa Habisreutinger - Account Director Media & Technology',
          o: 0,
          f: ['vanessa', 'habisreutinger']
        },
        {
          id: 187,
          q: 'Fabian Habisreutinger - Account Director Media & Technology',
          o: 0,
          f: ['fabian', 'habisreutinger']
        },
        {
          id: 190,
          q: 'Geri Aebi',
          o: 0,
          f: ['geri', 'aebi', 'gerhard', 'gary']
        },
        {
          id: 191,
          q: 'Bene Abegglen',
          o: 0,
          f: ['bene', 'bernhard', 'abegglen', 'ben\u00e4']
        },
        { id: 195, q: 'Bist du sicher?', o: 0, f: ['sicher'] },
        { id: 206, q: 'L\u00fcgst du', o: 0, f: ['l\u00fcgst', 'l\u00fcgen'] },
        { id: 217, q: 'Nimmst du Drogen?', o: 0, f: ['drogen'] },
        {
          id: 230,
          q: 'SiR MaRY bietet Digital Consulting',
          o: null,
          f: ['strategie', 'strategy', 'consulting', 'digital']
        },
        {
          id: 231,
          q: 'SiR MaRY bietet Creative Campaigning',
          o: null,
          f: [
            'creation',
            'kreation',
            'kampagnen',
            'kampagne',
            'campaign',
            'creativecampaigning'
          ]
        },
        {
          id: 233,
          q: 'SiR MaRY bietet Media Distribution',
          o: null,
          f: ['media', 'distribution']
        },
        {
          id: 245,
          q: 'Dein Lieblingsessen?',
          o: null,
          f: ['essen', 'liebling', 'lieblingsessen']
        }
      ],
      santaCodes: [
        {
          'name': 'Samsung',
          'slug': 'samsung',
          'code': 'f472',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/1azphd1kb84u9'
        },
        {
          'name': 'Allianz Evia',
          'slug': 'allianz',
          'code': 'c493',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/2ewkgssxdcisr'
        },
        {
          'name': 'UBS',
          'slug': 'ubs',
          'code': 't699',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/l5hu5qol9h0z'
        },
        {
          'name': 'Globus',
          'slug': 'globus',
          'code': 'q915',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/1jlh88m9er560'
        },
        {
          'name': 'Sharoo',
          'slug': 'sharoo',
          'code': 'x064',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/28wyfa8aujqyr'
        },
        {
          'name': 'Schweiz Tourismus',
          'slug': 'schweiz-tourismus',
          'code': 'w570',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/1n15xnyxgzfpw'
        },
        {
          'name': 'Swisslos',
          'slug': 'swisslos',
          'code': 'y234',
          'wishlist': 'https://www.amazon.de/hz/wishlist/ls/13nshifx8t864'
        }
      ]
    }
  })

export default store
