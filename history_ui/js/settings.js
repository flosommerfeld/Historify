var languages = ["en", "de", "es", "fr", "ja", "pt", "ru"];

function showAlert(){// TODO: implement a better way for detecting if any settings were changed
  $(".alert").stop();
  $(".alert").fadeIn("slow").delay(2500).fadeOut();
}

function switchScreenshots() { //switch between the screenshot value on and off
  if (localStorage.getItem("screenshots") == "off") {
    localStorage.setItem("screenshots", "on");
    $("#screenshots_quality").removeAttr('disabled');
    $("#screenshots_quality_wrapper").css("opacity", "1");
  } else {
    localStorage.setItem("screenshots", "off");

    $("#screenshots_quality").attr("disabled", "disabled"); //disable the other form which sets the quality// TODO: improve code (make a function etc.)
    $("#screenshots_quality_wrapper").css("opacity", "0.3");

  }
}

function switchAutocleaner() { //switch between the autocleaner value on and off
  if (localStorage.getItem("autocleaner") == "off") {
    localStorage.setItem("autocleaner", "on");
    $("#autoclean_at").removeAttr('disabled');
    $("#autoclean_at_wrapper").css("opacity", "1");
  } else {
    localStorage.setItem("autocleaner", "off");

    $("#autoclean_at").attr("disabled", "disabled"); //disable the other form which sets the MB limit // TODO: improve code (make a function etc.)
    $("#autoclean_at_wrapper").css("opacity", "0.3");
  }
}

function initalizeStorage() { //initialization of the localStorage
  if (localStorage.getItem("screenshots") == null) {
    localStorage.setItem("screenshots", "on");
  } else if (localStorage.getItem("screenshots") == "on") {
    $('#screenshots_box').prop('checked', true);
  } else {
    $('#screenshots_box').prop('checked', false);

    $("#screenshots_quality").attr("disabled", "disabled"); //disable the other form which sets the quality // TODO: improve code
    $("#screenshots_quality_wrapper").css("opacity", "0.3");

  }

  if (localStorage.getItem("autocleaner") == null) {
    localStorage.setItem("autocleaner", "on");
  } else if (localStorage.getItem("autocleaner") == "on") {
    $('#autocleaner_box').prop('checked', true);
  } else {
    $('#autocleaner_box').prop('checked', false);

    $("#autoclean_at").attr("disabled", "disabled"); //disable the other form which sets the MB limit// TODO: improve code
    $("#autoclean_at_wrapper").css("opacity", "0.3");
  }

  if (localStorage.getItem("autoclean_at") == null) {
    localStorage.setItem("autoclean_at", "50");
  }
  if (localStorage.getItem("screenshots_quality") == null) {
    localStorage.setItem("screenshots_quality", "medium");
  }

  if (languages.indexOf(localStorage.getItem("language")) == -1) { //Check if the language in the local storage is supported - if not then set english as default
    localStorage.setItem("language", "en");
  }

}


$(document).ready(function() {
  initalizeStorage();

  $("#autoclean_at").val(parseInt(localStorage.getItem("autoclean_at"))); //add the saved autoclean value to the form
  $("#screenshots_quality").val(localStorage.getItem("screenshots_quality")); //add the saved screenshots quality value to the form
  $("#language").val(localStorage.getItem("language")); //add the language value to the form

  $("#screenshots_box").click(function() { //listen for clicks on the checkbox "Enable screenshots"
    switchScreenshots(); //switch

    showAlert();

  });
  $("#autocleaner_box").click(function() { //listen for clicks on the checkbox "Enable autocleaner"
    switchAutocleaner(); //switch

    showAlert();

  });
  $("#delete").click(function() { //delete the history by overwriting the JSON object
    browser.storage.local.set({
      pages: []
    });
    showAlert();
  });

  $("#screenshots_quality").on('change', function() { //update the saved screenshot quality value on change
    localStorage.setItem("screenshots_quality", this.value);

showAlert();

  })
  $("#autoclean_at").on('change', function() { //update the saved autoclean value on change
    localStorage.setItem("autoclean_at", this.value);

showAlert();

  })
  $("#language").on('change', function() { //update the saved autoclean value on change
    localStorage.setItem("language", this.value);

showAlert();

    window.location.reload();
  })
});
