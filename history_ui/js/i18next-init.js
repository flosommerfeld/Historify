i18next.init({
  lng: localStorage.getItem("language"),
  resources: {
    en: {
      translation: {
        nav: {
          tab1: "My browsing history",
          tab2: "Frequently asked questions",
          tab3: "Change settings"
        },

        history: {
          noHistory: "You currently have no browsing history."
        },

        faq: {
          title: "Frequently asked questions",
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
          form2: "Limit disk space usage",
          form3: {
            title: "Language:",
            option1: "English",
            option2: "German",
            option3: "Spanish",
            option4: "French",
            option5: "Japanese",
            option6: "Portuguese",
            option7: "Russian"
          },
          form4: {
            title: "Screenshot quality:",
            option1: "Low",
            option2: "Medium",
            option3: "High"
          },
          form5: "Maximum disk space usage (in MB):",
          button: "Delete history",
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
          form2: "Festplattennutzung limitieren",
          form3: {
            title: "Sprache:",
            option1: "Englisch",
            option2: "Deutsch",
            option3: "Spanisch",
            option4: "Französisch",
            option5: "Japanisch",
            option6: "Portugiesisch",
            option7: "Russisch"
          },
          form4: {
            title: "Screenshotqualität:",
            option1: "Niedrig",
            option2: "Mittel",
            option3: "Hoch"
          },
          form5: "Maximale Festplattennutzung (in MB):",
          button: "Browserverlauf löschen"
        }
      }
    },

    es: {
      translation: {
        nav: {
          tab1: "Historial de exploración",
          tab2: "Preguntas frecuentes",
          tab3: "Cambiar ajustes"
        },

        history: {
          noHistory: "Actualmente no tienes historial de navegación."
        },
        faq: {
          title: "Preguntas frecuentes (solo inglés)"
        },

        settings: {
          title: "Cambiar ajustes",
          form1: "Habilitar capturas de pantalla",
          form2: "Limitar el uso del disco",
          form3: {
            title: "Idioma:",
            option1: "Inglés",
            option2: "Alemán",
            option3: "Español",
            option5: "Japonês",
            option6: "Portugués",
            option7: "Ruso"
          },
          form4: {
            title: "Calidad de captura de pantalla:",
            option1: "Bajo",
            option2: "Medio",
            option3: "Alto",
            option4: "Francés"
          },
          form5: "Uso máximo de disco (en MB):",
          button: "Borrar historial"
        }

      }
    },

    fr: {
      translation: {
        nav: {
          tab1: "Historique de navigation",
          tab2: "Questions fréquemment posées",
          tab3: "Modifier les paramètres"
        },

        history: {
          noHistory: "Vous n'avez actuellement aucun historique de navigation."
        },

        faq: {
          title: "Questions fréquemment posées (que l'anglais)",
        },

        settings: {
          title: "Modifier les paramètres",
          form1: "Activer les captures d'écran",
          form2: "Limiter l'utilisation du disque",
          form3: {
            title: "La langue:",
            option1: "Anglais",
            option2: "Allemand",
            option3: "Espanol",
            option4: "Français",
            option5: "Japanese",
            option6: "Portugais",
            option7: "Russe"
          },
          form4: {
            title: "Qualité d'image:",
            option1: "Faible",
            option2: "Moyen",
            option3: "Haute"
          },
          form5: "Utilisation maximale du disque (en MB):",
          button: "Supprimer l'historique de navigation"
        }
      }
    },

    ja: {
      translation: {
        nav: {
          tab1: "閲覧履歴",
          tab2: "よくある質問",
          tab3: "設定を変更する"
        },

        history: {
          noHistory: "現在閲覧履歴はありません."
        },

        faq: {
          title: "よくある質問 (英語だけ)",
        },

        settings: {
          title: "設定を変更する",
          form1: "スクリーンショット",
          form2: "ディスク使用量を制限する",
          form3: {
            title: "言語:",
            option1: "英語",
            option2: "ドイツ人",
            option3: "スペイン語",
            option4: "フランス語",
            option5: "日本語",
            option6: "ポルトガル語",
            option7: "ロシア"
          },
          form4: {
            title: "スクリーンショットの品質:",
            option1: "低い",
            option2: "中",
            option3: "高い"
          },
          form5: "最大ディスク使用量（メガバイト単位):",
          button: "閲覧履歴の消去"
        }
      }
    },

    pt: {
      translation: {
        nav: {
          tab1: "Histórico de navegação",
          tab2: "Perguntas frequentes",
          tab3: "Mudar configurações"
        },

        history: {
          noHistory: "Você atualmente não tem histórico de navegação."
        },

        faq: {
          title: "Perguntas frequentes (apenas inglês)",
        },

        settings: {
          title: "Mudar configurações",
          form1: "Captura de ecrã",
          form2: "Limite de uso de disco",
          form3: {
            title: "Língua:",
            option1: "Inglês",
            option2: "Alemão",
            option3: "Espanhol",
            option4: "Francês",
            option5: "Japonês",
            option6: "Português",
            option7: "Russo"
          },
          form4: {
            title: "Qualidade de captura de ecrã:",
            option1: "Baixo",
            option2: "Médio",
            option3: "Alto"
          },
          form5: "Uso máximo de disco (em MB):",
          button: "Excluir histórico de navegação"
        }
      }
    },

    ru: {
      translation: {
        nav: {
          tab1: "История браузера",
          tab2: "Часто задаваемые вопросы",
          tab3: "Изменить настройки"
        },

        history: {
          noHistory: "В настоящее время у вас нет истории просмотров."
        },

        faq: {
          title: "Часто задаваемые вопросы (только английский)",
        },

        settings: {
          title: "Изменить настройки",
          form1: "Скриншоты",
          form2: "Oграничение использования диска",
          form3: {
            title: "язык:",
            option1: "английский",
            option2: "Немецкий",
            option3: "испанский",
            option4: "Французский",
            option5: "Японский",
            option6: "португальский",
            option7: "русский"

          },
          form4: {
            title: "Качество снимков экрана:",
            option1: "Низкий",
            option2: "средний",
            option3: "Высокая"
          },
          form5: "Mаксимальное использование диска (в MB):",
          button: "Удалить историю браузера"
        }
      }
    }
  }
}, function(err, t) {
  i18nextJquery.init(i18next, $);
  $('.i18n-ui').localize();
});
