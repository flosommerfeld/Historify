function onError(error) {//log errors
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var pages = item.pages;
  if(pages.length == 0){//remove the loader element from the HTML if there are no pages saved
    $("#overlay").detach();
     $("#overlay-alert").fadeIn(1500);//fade in the alert "You currently have no history."
  }
  else{
    for (i in pages) {//iterate every page and add it to the HTML
      $("#items").prepend("<div title='" + pages[i].hostname + "' class='page'><a href='" + pages[i].url + "'><img src='" + pages[i].image + "'><div class='desc' style='line-height:30px;'>" + pages[i].title + "</div></a></div>");
    }
    $("#overlay").detach();//remove the loader element once the iteration is finished
  }
}


$(document).ready(function() {
  let pages = browser.storage.local.get("pages");//get the JSON object
  pages.then(onGot, onError);//promise
});
