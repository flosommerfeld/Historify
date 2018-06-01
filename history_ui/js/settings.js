function switchScreenshots() {//switch between the screenshot value on and off
  if (localStorage.getItem("screenshots") == "off") {
    localStorage.setItem("screenshots", "on");
  } else {
    localStorage.setItem("screenshots", "off");
  }
}

function switchAutocleaner() {//switch between the autocleaner value on and off
  if (localStorage.getItem("autocleaner") == "off") {
    localStorage.setItem("autocleaner", "on");
  } else {
    localStorage.setItem("autocleaner", "off");
  }
}

function initalizeStorage() {//initialization of the localStorage
  if (localStorage.getItem("screenshots") == null) {
    localStorage.setItem("screenshots", "on");
  } else if (localStorage.getItem("screenshots") == "on") {
    $('#screenshots_box').prop('checked', true);
  } else {
    $('#screenshots_box').prop('checked', false);
  }

  if (localStorage.getItem("autocleaner") == null) {
    localStorage.setItem("autocleaner", "on");
  } else if (localStorage.getItem("autocleaner") == "on") {
    $('#autocleaner_box').prop('checked', true);
  } else {
    $('#autocleaner_box').prop('checked', false);
  }

  if (localStorage.getItem("autoclean_at") == null) {
    localStorage.setItem("autoclean_at", "50");
  }
  if (localStorage.getItem("screenshots_quality") == null) {
    localStorage.setItem("screenshots_quality", "medium");
  }

  if (localStorage.getItem("language") != "en" && localStorage.getItem("language") != "de" && localStorage.getItem("language") != "es" && localStorage.getItem("language") != "fr" && localStorage.getItem("language") != "ja"
  && localStorage.getItem("language") != "pt" && localStorage.getItem("language") != "ru") {// TODO: liste erstellen und dann überprüfen ob sprache in liste
    localStorage.setItem("language", "en");
  }

}

$(document).ready(function() {
  initalizeStorage();

  $("#autoclean_at").val(parseInt(localStorage.getItem("autoclean_at")));//add the saved autoclean value to the form
  $("#screenshots_quality").val(localStorage.getItem("screenshots_quality"));//add the saved screenshots quality value to the form
  $("#language").val(localStorage.getItem("language"));//add the language value to the form

  $("#screenshots_box").click(function() {//listen for clicks on the checkbox "Enable screenshots"
    switchScreenshots();//switch
  });
  $("#autocleaner_box").click(function() {//listen for clicks on the checkbox "Enable autocleaner"
    switchAutocleaner();//switch
  });
  $("#delete").click(function() {//delete the history by overwriting the JSON object
    browser.storage.local.set({
      pages: []
    });
  });

  $("#screenshots_quality").on('change', function() {//update the saved screenshot quality value on change
    localStorage.setItem("screenshots_quality", this.value);
  })
  $("#autoclean_at").on('change', function() {//update the saved autoclean value on change
    localStorage.setItem("autoclean_at", this.value);
  })
  $("#language").on('change', function() {//update the saved autoclean value on change
    localStorage.setItem("language", this.value);
    window.location.reload();
  })
});
