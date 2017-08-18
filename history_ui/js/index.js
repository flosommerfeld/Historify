function onError(error) { //log errors
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var pages = item.pages;
  if (pages.length == 0) { //remove the loader element from the HTML if there are no saved pages
    $("#overlay").detach();
    $("#overlay-alert").fadeIn(1500); //fade in the alert "You currently have no history."
  } else {
    for (i in pages) { //iterate every page and add it to the HTML
       if (pages[i].url.startsWith('http') && (pages[i].image.startsWith('data:image/jpeg;base64,') || pages[i].image == "img/noImage.jpg")) { // making sure the url is a url and the image is a data uri graphic or the standard image
        let div = document.createElement('div');
        let div2 = div.cloneNode(false); // making a clone

        div.title = pages[i].hostname;
        div.className = 'page';

        let a = document.createElement('a');
        a.href = pages[i].url;

        let img = document.createElement('img');
        img.src = pages[i].image;

        div2.className = 'desc';
        div2.setAttribute('style', 'line-height:30px;');
        div2.textContent = pages[i].title;

        a.appendChild(img);
        a.appendChild(div2);
        div.appendChild(a);

        $("#items").prepend(div);//adding the div to the HTML
      }
    }
    $("#overlay").detach(); //remove the loader element once the iteration is finished
  }
}


$(document).ready(function() {
  let pages = browser.storage.local.get("pages"); //get the JSON object
  pages.then(onGot, onError); //promise
});
