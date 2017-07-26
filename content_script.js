var title = document.title;//title of the website
var hostname = window.location.hostname;//hostname of the website
var url = window.location.href;//url of the website

function setCharAt(str, index, chr) {//replace char of string at the index argument value with char from the argument
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function checkUrl() {//check if the url has changed
  if(url != window.location.href && title != document.title){
    url = window.location.href;
    title = document.title;
    browser.runtime.sendMessage({"msg": "screenshot", "url": url, "title": title, "hostname": hostname}); //send message to take a screenshot to the background_script
  }
}


if (hostname.charAt(0) == "w" && hostname.charAt(1) == "w" && hostname.charAt(2) == "w" && hostname.charAt(3) == ".") {//remove "www." from hostnames
  for (i = 0; i < 4; i++) {//iterate the first four digits -> "www."
    hostname = setCharAt(hostname, 0, "");
  }
}

browser.runtime.sendMessage({"msg": "screenshot", "url": url, "title": title, "hostname": hostname}); //send message to take a screenshot to the background_script
setInterval(checkUrl, 1000);//check every second if the url has changed 
