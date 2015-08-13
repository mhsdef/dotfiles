/*
    title:      Hew's Firefox/Gecko Configuration
    modified:   29-JUL-2015
    author:     @hewsut, derived from 12bytes.org
*/

/////////////////////////////////////////////
//// === SECURITY / PRIVACY, GENERAL === ////
/////////////////////////////////////////////
user_pref("beacon.enabled", false);                                                         // [boolean] whether to send additional analytics to web servers
user_pref("browser.polaris.enabled", false);                                                // [boolean] whether to enable tracking protection (privacy.trackingprotection.enabled), turn on DNT, and expose the tracking protection pref in the privacy preferences UI - interesting feature, but should not be needed when using content filters such as uMatrix/uBlock - v39+
user_pref("browser.send_pings", false);                                                     // [boolean] whether to allow HTML5 ping tracking when clicking a link
user_pref("browser.send_pings.require_same_host", true);                                    // [boolean] whether to require the same host if sending pings
user_pref("datareporting.healthreport.service.enabled", false);                             // [boolean] disable Mozilla health report service which collects various browser data and sends it home
user_pref("datareporting.healthreport.uploadEnabled", false);                               // [boolean] disable uploading health reports to Mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false);                             // [boolean] whether to enable data report submission
user_pref("devtools.devedition.promo.url", "https://www.mozilla.org/firefox/developer/");   // [string] remove UTM tracking params from intor to Firefox Developer edition URL
user_pref("media.getusermedia.screensharing.enabled", false);                               // [boolean] whether to enable screen sharing - should not be strictly necessary to disallow this as user should be prompted before the connection is allowed
user_pref("media.navigator.enabled", false);                                                // [boolean] unsure, but it is part of WebRTC - see: media.peerconnection.enabled
user_pref("media.peerconnection.enabled", false);                                           // [boolean] whether to enable WebRTC - Real-Time Communications between peers for voice, video, file and desktop sharing, etc. - potential security/privacy risk - WebRTC can be controlled with HTTP UserSgaent cleaner
user_pref("media.webspeech.recognition.enable", false);                                     // [boolean] unknown, sounds like a potential privacy threat
user_pref("privacy.trackingprotection.enabled", false);                                     // [boolean] whether to enable tracking protection (see: browser.polaris.enabled) - not needed if using other means, such as uBlock - when enabled, a new icon in address bar will appear when a site is being blocked, allowing to disable per domain - note that enabling this allows the download of a list from Mozilla
user_pref("signon.autofillForms", false);                                                   // [boolean] Whether to allow the password manager to auto-fill log-on forms - potential security risk - if false, the password will still be set after the user name is manually entered, which can usualy be done quickly from a drop-down list
user_pref("startup.homepage_welcome_url", "about:about");                                   // [string] what content to display when the browser is started with a new profile
user_pref("browser.newtabpage.enhanced", false);

///////////////////////////////
//// === SAFE BROWSING === ////
///////////////////////////////
/*
    --- Google Safe Browsing ---
    We disable safe browsing entirely because we are using OpenDNS in combination with
    uBlock Origin and its anti-malware filter lists to mitigate the threat of domains hosting malware.
    The concern here is that at least "bad" URLs, if not more, may be sent to Google along with our IP address.
    For more see: https://www.google.com/intl/en/chrome/browser/privacy/
*/
user_pref("browser.safebrowsing.downloads.enabled", false);         // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.enabled", false);                   // [boolean] whether to compare URLs against a blacklist or submit URLs to a third party to determine whether a site is legitimate
user_pref("browser.safebrowsing.malware.enabled", false);           // [boolean] whether to download data about malware and use it to screen downloads
user_pref("browser.safebrowsing.remoteLookups", false);             // [boolean] whether to consult a third-party provider to determine whether a site is phishy - if false, it will fall back to the local urlclassifier2.sqlite file - dependent upon whether browser.safebrowsing.enabled is enabled

///////////////////////////////////
//// === SOCIAL NETWORKING === ////
///////////////////////////////////
user_pref("social.enabled", false);                 // [boolean] whether to enable social networking features
user_pref("social.remote-install.enabled", false);  // [boolean] unknown, sounds scary o_O
user_pref("social.whitelist", "");                  // [string] URL of whitelisted social service providers
user_pref("loop.enabled", false);                   // [boolean] whether to enable Firefox Hello - can also be controlled via Classic Theme Restorer
user_pref("browser.pocket.enabled", false);         // [boolean] whether to enable 3rd party Pocket service for storing/sharing content saved from webpages
user_pref("browser.pocket.site", "");               // [boolean] site used for 3rd party Pocket service

////////////////////////
//// === SEARCH === ////
////////////////////////
user_pref("browser.search.geoip.url", "");               // [string] disable contacting Mozilla to set the default search engine
user_pref("browser.search.showOneOffButtons", false);    // [boolean] whether to enable the new search panel UI - can be set in Classic Theme Restorer
user_pref("browser.search.suggest.enabled", false);      // [boolean] whether to enable search suggestions for search bar
user_pref("keyword.URL", "https://duckduckgo.com/?q=");

/////////////////////////
//// === NETWORK === ////
/////////////////////////
user_pref("network.cookie.cookieBehavior", 2);         // [integer] 0=allow all, 1=allow same host, 2=disallow all, 3= allow 3rd party if it has already set a cookie - should use Self Destructing Cookies
user_pref("network.dns.disablePrefetch", true);        // [boolean] disable nameserver lookups for sites not yet visited
user_pref("network.prefetch-next", false);             // [boolean] disable prefetching pages not yet visited

/////////////////////////
//// === PLUGINS === ////
/////////////////////////
user_pref("media.gmp-gmpopenh264.enabled", false);              // [boolean] whether to enable the OpenH264 plugin - appears to be used only for Firefox Hello/WebRTC as of v37
user_pref("media.gmp-provider.enabled", false);                 // [boolean] whether to show the OpenH264 plugin in the plugins UI
user_pref("plugin.default.state", 1);                           // [integer] 0=disabled, 1=ask to activate, 2=active
user_pref("plugins.notifyMissingFlash", false);                 // [boolean] whether to notify if Flash is needed but not installed - URL bar will still indicate if Flash is missing
user_pref("plugins.click_to_play", true);                       // [boolean] whether to block plugin dependent content and make it so user has to click to enable the content

//////////////////////
//// === MISC === ////
//////////////////////
user_pref("browser.startup.page", 1);                           // [integer] page to display on startup - 1=home, 2=blank, 3=restore last session
user_pref("browser.startup.homepage", "https://duckduckgo.com");    // [string] page to display when clicking the Home button
user_pref("browser.backspace_action", 2);                       // [integer] keyboard backspace key action: 0=go back, 1=page up, 2=disable
user_pref("general.warnOnAboutConfig", false);                  // [boolean] whether to display a warning when using about:config
