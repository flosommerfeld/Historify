![picture alt](http://i.imgur.com/3COC7f4.png "Logo")




![picture alt](http://i.imgur.com/KkwRdP3.png "Demo screenshot")



### Finally a better history with images. Note: Still in development. - Mozilla Firefox WebExtension ###

* [Install Historify](https://addons.mozilla.org/en-US/firefox/addon/historify/)
* [Learn more about WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)

![Mozilla Add-on version](https://img.shields.io/amo/v/historify_flosommerfeld@example.com)
![Mozilla Add-on rating](https://img.shields.io/amo/stars/historify_flosommerfeld@example.com)
[![Mozilla Add-on](https://img.shields.io/badge/Status-Experimental-yellow.svg)](https://addons.mozilla.org/en-US/firefox/addon/historify/)


## About this Add-on

Historify will store your history with screenshots of visited websites in a gallery. You will definitely need this Add-on if you wish to find websites again that you accidentally closed a while ago. The screenshots will help you to search faster for the website since most people slightly remember what the website looked like. Please be aware that this is still in development and that bugs currently do exist. Neat features will be added soon (e.g. search, visit dates).
<br />
<br />
## Frequently asked questions

**Will the screenshots eat up my hard drive space?**<br />
Good question! Every screenshot gets compressed to reduce their cost of storage. Even though one screenshot might not need that much space, thousands for example will require much more space in comparison to one. Thousands of screenshots probably would go near the 100 MB mark. If you're concerned about your space, Historify has a autocleaner function which will only allow a userdefined maximum to be stored.

**Will you add functionalities from user requests?**<br />
Of course! Im always happy to hear about your thoughts. Without user requests I probably would not even know how to improve the addon. But functionalities will only be added if I am sure that every user can benefit by them.

**Are you going to improve the loading performance of the history?**<br />
Yes, I already worked out many plans to do so. But first of all I am focussing on some other problems.

**Does this slow down my browsers performance?**<br />
Since the addon only takes a screenshot and stores the website information locally after the website has fully loaded, it should not slow down the performance except you have an older device or too many pages in the history.

**It does not take screenshots of every page, what's the problem?**<br />
The trigger to take a screenshot and store all the other data is inside a content script which always starts running when a website is loaded. Some pages dont allow content scripts to run on their page e.g. addons.mozilla.org, since this could lead to a security issue. I am currently working on a new way to take screenshots so that it will even work on these pages.

**Is it legal to take screenshots of websites?**<br />
Yes it is and as long as you don't publish them you won't get any problems.

**How can I support the further development of the addon?**<br />
If you'd like to help me just write a critical review on addons.mozilla.org or encourage your friends to use Historify. A tweet would also be highly appreciated. As long as there are poeple who are using this addon I am fired up to develop it to it's best.

**How can I get in contact?**<br />
You can just write a mail to help.flosommerfeld@gmail.com or get in contact with me at the review section.
<br />
<br />
## Version history
__Version 1.4.1:__
  The text of the navigation tabs is now responsive. Furthermore a GitHub ribbon was added on some pages to advertise the projects GitHub page/repository.

__Version 1.4.0:__
  The WebExtension is now available in various languages: English, German, Spanish, French, Japanese, Portuguese and Russian. Please be aware that some of the languages have been translated via a dictionary.

  Recording the history in an incognito/private window is now disabled by default.

  Once you've changed your settings, a message will appear to notify you that your changes have actually been applied.

__Version 1.3.1:__
  Fixed a small CSS bug that appeared while scrolling through your history.

__Version 1.3.0:__
  Added support for mobile devices and removed remote sources to improve security.

__Version 1.2.7:__
  Fixed the "Enable screenshots" checkbox so that Historify uses a standard placeholder image if you don't want screenshots to be taken. Before this fix the checkbox completely disabled new entries which were supposed to go into the history.

__Version 1.2.6:__
  Historify is now available for download on addons.mozilla.org!



 ## License

The contents of this repository are covered under the [Mozilla Public License 2.0](LICENSE).
