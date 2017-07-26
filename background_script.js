var url;
var title;
var hostname;
var imageQuality = 30;
var autocleanValue = 500000000;
var options = {
  format: "jpeg",
  quality: imageQuality
};


function onError(error) {//log the error
  console.log(`Error: ${error}`);
}

function onGot(item) {
  autocleanValue = parseInt(localStorage.getItem("autoclean_at")) * 1000000;//Converts the autoclean value vaguely to bytes

  if (localStorage.getItem("screenshots") == "on") {//if screenshots are turned on it will save the screenshot
    item.pages.push({
      "image": localStorage.getItem("screenshotUri"),
      "url": url,
      "title": title,
      "hostname": hostname
    });
  } else {//it won't save the screenshot and uses a deafault image
    item.pages.push({
      "image": "img/noImage.jpg",
      "url": url,
      "title": title,
      "hostname": hostname
    });
  }

  if (localStorage.getItem("autocleaner") == "on") {
    while (roughSizeOfObject(item) > autocleanValue) { //removes pages until the storage is below the maximum storage
      item.pages = item.pages.slice(1, item.pages.length);
    }
  }

  let setting = browser.storage.local.set(item);//save changes to the JSON object
  setting.then(null, onError);//promise
}

function onCaptured(screenshotUri) { //save the screenshot locally and get the JSON object to go on..
  localStorage.setItem("screenshotUri", screenshotUri);
  let gettingItem = browser.storage.local.get("pages");
  gettingItem.then(onGot, onError);

}

function getMessage(message) {//gets a message to take screenshots from the content_script
  url = message.url;
  title = message.title;
  hostname = message.hostname;
  if (message.msg == "screenshot") { //if message says to take a screenshot

    if (localStorage.getItem("screenshots_quality") == "low") {//initialize the image quality for the screenshot
      imageQuality = 15;
    } else if (localStorage.getItem("screenshots_quality") == "medium") {
      imageQuality = 45;
    } else {
      imageQuality = 90;
    }

    options = {
      format: "jpeg",
      quality: imageQuality
    };

    var screenshot = browser.tabs.captureVisibleTab(options); //take the screenshot
    screenshot.then(onCaptured, onError); //promise
  }
}

function getCurrentWindowTabs() {//get the tabs in the current window
  return browser.tabs.query({
    currentWindow: true
  });
}

function handleClick() {//onclick listener for the icon in the toolbar
  function callOnActiveTab(callback) {
    getCurrentWindowTabs().then((tabs) => {
      for (var tab of tabs) {
        if (tab.active) {
          callback(tab, tabs);
        }
      }
    });
  }
  browser.tabs.create({
    url: "../history_ui/index.html"
  });
}

function roughSizeOfObject(object) {//calculate the size of the JSON object which is saved locally
  var objectList = [];
  var recurse = function(value) {
    var bytes = 0;
    if (typeof value === 'boolean') {
      bytes = 4;
    } else if (typeof value === 'string') {
      bytes = value.length * 2;
    } else if (typeof value === 'number') {
      bytes = 8;
    } else if (
      typeof value === 'object' &&
      objectList.indexOf(value) === -1
    ) {
      objectList[objectList.length] = value;
      for (i in value) {
        bytes += 8; // an assumed existence overhead
        bytes += recurse(value[i])
      }
    }
    return bytes;
  }
  return recurse(object);
}


if (localStorage.getItem("screenshots") == null) {//screenshot initialization
  localStorage.setItem("screenshots", "on");
  browser.storage.local.set({ //JSON object initialization
    pages: []
  });
}
if (localStorage.getItem("autocleaner") == null) {//autocleaner initialization
  localStorage.setItem("autocleaner", "on");
}
if (localStorage.getItem("autoclean_at") == null) {//autocleaner value initialization
  localStorage.setItem("autoclean_at", "50");
}
if (localStorage.getItem("screenshots_quality") == null) {//screenshot quality initialization
  localStorage.setItem("screenshots_quality", "medium");
}


browser.runtime.onMessage.addListener(getMessage); //listen to messages from the content_script
browser.browserAction.onClicked.addListener(handleClick); //listen to clicks from the icon on the toolbar
