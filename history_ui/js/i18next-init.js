i18next.init({
  lng: 'de',
  resources: {
    en: {
      translation: {
        nav: {
          tab1: "View my history",
          tab2: "Read the FAQ's",
          tab3: "Change settings"
        },

        history: {
          noHistory: "You currently have no history."
        },

        faq: {
          title: "Read the FAQ's",
          question1: "Will the screenshots eat up my hard drive space?",
          question2: "Will you add functionalities from user requests?",
          question3: "Are you going to improve the loading performance of the history?",
          question4: "Does this slow down my browsers performance?",
          question5: "It does not take screenshots of every page, what's the problem?",
          question6: "Is it legal to take screenshots of websites?",
          question7: "How can I support the further development of the addon?",
          question8: "How can I get in contact?",
          answer1: "Good question! Every screenshot gets compressed to reduce their cost of storage. Even though one screenshot might not need that much space, thousands for example will require much more space in comparison to one. Thousands of screenshots would probably go near the 100 MB mark. If you're bothered about your space, Historify has a autocleaner function which will only allow a userdefined maximum to be stored.",
          answer2: "Of course! Im always happy to hear about your thoughts. Without user requests I probably would not even know how to improve the addon. But functionalities will only be added if I am sure that every user can benefit by them.",
          answer3: "Yes, I already worked out many plans to do so. But first of all I am focussing on some other problems.",
          answer4: "Since the addon only takes a screenshot and stores the website information locally after the website has fully loaded, it should not slow down the performance except you have an older device or too many pages in the history.",
          answer5: "The trigger to take a screenshot and store all the other data is inside a content script which always starts running when a website is loaded. Some pages dont allow content scripts to run on their page e.g. <a href='https://addons.mozilla.org'>addons.mozilla.org</a>, since this could lead to a security issue. I am currently working on a new way to take screenshots so that it will even work on these pages.",
          answer6: "Yes it is and as long as you don't publish them you won't get any problems.",
          answer7: "If you'd like to help me just write a critical review on <a href='https://addons.mozilla.org/de/firefox/addon/historify/'' target='_blank'>addons.mozilla.org</a> or encourage your friends to use Historify. A tweet would also be highly appreciated. As long as there are poeple who are using this addon I am fired up to develop it to it's best.",
          answer8: "You can just write a mail to <a href='mailto:flosommerfeld@pm.me?Subject=Historify' target='_blank'>flosommerfeld@pm.me</a> or get in contact with me at the review section.",
        },

        settings: {
          title: "Change settings",
          form1: "Enable screenshots",
          form2: "Enable autocleaner",
          form3: "Screenshot quality:",
          form4: "Autoclean at (in MB):",
          form3option1: "Low",
          form3option2: "Medium",
          form3option3: "High",
          button: "Delete history"
        }

      }
    },
    de: {
      translation: {
        nav: {
          tab1: "Mein Browserverlauf",
          tab2: "Häufig gestellte Fragen",
          tab3: "Einstellungen ändern"
        },

        history: {
          noHistory: "Du hast momentan keinen Browserverlauf."
        },

        faq: {
          title: "Häufig gestellte Fragen",
          question1: "Belegen die Screenshots viel Festplattenspeicher?",
          question2: "Ich wünsche mir mehr Funktionen für die Weberweiterung, kann ich welche vorschlagen?",
          question3: "Kann die Ladegeschwindigkeit des Verlaufs verbessert werden?",
          question4: "Macht die Weberweiterung meinen Browser langsamer?",
          question5: "Die Weberweiterung macht nicht von jeder Seite einen Screenshot, was ist das Problem?",
          question6: "Ist es legal von Webseiten Screenshots zu machen?",
          question7: "Wie kann ich die Entwicklung der Weberweiterung unterstützen?",
          question8: "Wie kann ich Kontakt aufnehmen?",
          answer1: "Die Screenshots werden alle komprimiert, um so gut wie möglich Speicher zu sparen. Obwohl ein Screenshot nicht so viel Speicher braucht, häuft sich natürlich der Speicher und desto mehr Screenshots gespeichert werden desto mehr Speicherplatz wird benötigt. Eintausend Screenshots brauchen ungefähr 100 MB. Falls du dir Sorgen um deinen Speicher machst, kannst du die automatische Screenshotbereinigung in den Einstellungen aktivieren.",
          answer2: "Du kannst sehr gerne welche Vorschlagen, allerdings werde ich nur neue Funktionen hinzufügen von denen wirklich jeder Benutzer einen Nutzen hat.",
          answer3: "Ich habe mir schon ein paar Gedanken gemacht, wie ich die Ladegeschwindigkeit verbessern könnnte. Allerdings möchte ich zuerst andere Probleme beseitigen.",
          answer4: "Da die Weberweiterung erst dann einen Screenshot macht sobald die Webseite geladen ist, sollte die Leistung des Browser eigentlich nicht beeinflusst werden. Es ist möglich, dass auf sehr alten bzw. leistungsschwachen Computern oder Handys die Leistung leicht beeinflusst wird.",
          answer5: "Der Auslöser um einen Screenshot zu machen ist in einem Content Script, welcher ausgeführt wird sobald die Website aufgerufen wurde. Leider verbietet eine sehr geringe Anzahl an Webseiten die Nutzung von Content Scripts auf ihrer Seite (aus Sicherheitsgründen), wodurch dann auch kein Screenshot aufgenommen werden kann. Beispiel: <a href='https://addons.mozilla.org'>addons.mozilla.org</a>",
          answer6: "Ja ist es und solange du keine Screenshots veröffentlichst bin ich mir sicher, dass du in keine Schwierigkeiten gerätst.",
          answer7: "Du könntest der Weberweiterung eine Bewertung auf <a href='https://addons.mozilla.org/de/firefox/addon/historify/'' target='_blank'>addons.mozilla.org</a> geben oder teile deinen Freunden über Twitter etc. mit, dass du diese Weberweiterung benutzt.",
          answer8: "Du kannst mir eine Email an <a href='mailto:flosommerfeld@pm.me?Subject=Historify' target='_blank'>flosommerfeld@pm.me</a> schicken oder mit mir über eine Bewertung in Kontakt treten.",
        },

        settings: {
          title: "Einstellungen ändern",
          form1: "Screenshots aktivieren",
          form2: "Autobereinigung aktivieren",
          form3: "Screenshotqualität:",
          form4: "Autobereinigung ab (in MB)",
          form3option1: "Niedrig",
          form3option2: "Mittel",
          form3option3: "Hoch",
          button: "Browserverlauf löschen"
        }
      }
    }
  }
}, function(err, t) {
  i18nextJquery.init(i18next, $);
  $('.i18n-ui').localize();

  /*$('.lang-select').click(function() {
    i18next.changeLanguage(this.innerHTML);             SPRACHAUSWAHL
    $('.test').localize();
  });*/
});
