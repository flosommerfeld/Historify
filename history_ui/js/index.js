function onError(error) {//log errors
  console.log(`Error: ${error}`);
}

function escapeHTML(str) {//"This method is a last resort which should be used only as a temporary measure in established code bases. It is safe, though inefficient [..]."
                          //See: https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions/XUL_School/DOM_Building_and_HTML_Insertion
     return str.replace(/[&"'<>]/g, (m) => escapeHTML.replacements[m]);
   }
   escapeHTML.replacements = {
     "&": "&amp;",
     '"': "&quot;",
     "'": "&#39;",
     "<": "&lt;",
     ">": "&gt;"
   };

function onGot(item) {
  var pages = item.pages;
  if(pages.length == 0){//remove the loader element from the HTML if there are no saved pages
    $("#overlay").detach();
     $("#overlay-alert").fadeIn(1500);//fade in the alert "You currently have no history."
  }
  else{
    for (i in pages) {//iterate every page and add it to the HTML
      $("#items").prepend("<div title='" + escapeHTML(pages[i].hostname) + "' class='page'><a href='" + escapeHTML(pages[i].url) + "'><img src='" + escapeHTML(pages[i].image) + "'><div class='desc' style='line-height:30px;'>" + escapeHTML(pages[i].title) + "</div></a></div>");
    }
    $("#overlay").detach();//remove the loader element once the iteration is finished
  }
}


$(document).ready(function() {
  let pages = browser.storage.local.get("pages");//get the JSON object
  pages.then(onGot, onError);//promise
});
