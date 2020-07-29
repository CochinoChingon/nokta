var state = {
  openedProLanding: false,
  openedProWindowId: null,
  openedProTabId: null,
  settingsStore: null
}

var curTabUrl = "";
var completedFlag = false;


// settings
async function getUserLicense() {
  return state.settingsStore.getSettingFromStorage(state.settingsStore.USER_LICENSE_KEY);
}
function getDefaultUserFeatures() {
  return state.settingsStore.getDefaultSettings()[state.settingsStore.USER_SETTINGS_JSON_KEY];
}
async function getUserFeatures() {
  return state.settingsStore.getSettingFromStorage(state.settingsStore.USER_SETTINGS_JSON_KEY);
}
async function userIsPRO() {
  const userFeatures = await getUserFeatures();
  const defaultUserFeatures = getDefaultUserFeatures();
  const userLicense = await getUserLicense();
  console.log('userFeatures:',userFeatures);
  console.log('defaultUserFeatures:',defaultUserFeatures);
  console.log('userLicense:',userLicense);

  return (JSON.stringify(userFeatures).length !== JSON.stringify(defaultUserFeatures).length && userLicense !== null);
}

var settingsStore = new SettingsStore();
settingsStore.isInitialized.then(function() {
  state.settingsStore = settingsStore;
});

// // maybe one day i'll bring up the updated screen to remind users of spreed
// function onUpdate() {
//     //console.log("Extension Updated");
//     chrome.tabs.create({url: "updated.html"});

//     localStorage.setItem("notfirsttime",0);
//     localStorage.setItem("selectedText","");
// }

// function getVersion() {
//     var details = chrome.app.getDetails();
//     return details.version;
// }

// // Check if the version has changed.
// var currVersion = getVersion();
// var prevVersion = localStorage['spreed-version']
// if (currVersion != prevVersion) {
// // Check if we just installed this extension.
// if (typeof prevVersion == 'undefined') {
//   onInstall();
// } else {

//   //check if major update (3 or fewer version number)
//   tokens = currVersion.split('.');
//   if (tokens.length<=3) {
//     onUpdate();
//   }
// }
//   localStorage['spreed-version'] = currVersion;
// }

chrome.runtime.onInstalled.addListener(function (object) {
    if (chrome.runtime.OnInstalledReason.INSTALL === object.reason) {
      // alert('installed for first time');
      chrome.tabs.create({url: "popup.html"});
    } else if (chrome.runtime.OnInstalledReason.UPDATE === object.reason) {

    }
});


// LOGIC TO GET CURRENTLY ACTIVE TAB
var activeTabId;

chrome.tabs.onActivated.addListener(function(activeInfo) {
  activeTabId = activeInfo.tabId;
  console.log('setting activeTabId:',activeTabId);

  chrome.tabs.get(activeTabId, function(tab) {
    console.log(tab);
  });
});

function getActiveTab(callback) {

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tab = tabs[0];

    // console.log('active tab:',tab);


    if (typeof(tab) !== "undefined" && tab.hasOwnProperty("url") === true) {
      // console.log('returning active tab:',tab);
      callback(tab);
    } else {
      chrome.tabs.get(activeTabId, function (tab) {
        if (tab) {
          // console.log('returning active tab after fetching it:',tab);
          callback(tab);
        } else {
          // console.error('No active tab identified.');
        }
      });

    }

  });
}





var waitUntil = function (fn, condition, interval, timeout=2000) {
    interval = interval || 100;

    const maxTries = timeout / interval;
    let tries = 0;

    var shell = function () {
            var timer = setInterval(
                function () {
                    if (tries === maxTries) {
                      clearInterval(timer);
                      delete timer;
                    }

                    var check;

                    try { check = !!(condition()); } catch (e) { check = false; }

                    if (check) {
                        clearInterval(timer);
                        delete timer;
                        fn();
                    }

                    tries++;
                },
                interval
            );
        };

    return shell;
};


function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}



function openSpreed() {

  //get url
  //getAndStoreUrl();

  //get html
  //getAndStoreHtml();

  setTimeout(function(){setupPopupWindow()},500);

}

//TEXT SELECTION HOTKEY
/* The function that finds and returns the selected text */
var funcToInject = function() {
    var selection = window.getSelection();
    return (selection.rangeCount > 0) ? selection.toString() : '';
};

/* This line converts the above function to string
 * (and makes sure it will be called instantly) */
var jsCodeStr = ';(' + funcToInject + ')();';

function openSpreedTextSelector() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      tab = tabs[0];
      //alert(tab.id);

      chrome.tabs.insertCSS(tab.id, { file: "combined.css" });
      chrome.tabs.executeScript(tab.id, { file: "combined.js" });

  });
}


function preAutoExtractContent(tab) {
  // set currently active tab
    // console.log('tab:',tab);
    localStorage.setItem("currentTabId",tab.id);

    // set currently active tab
    let url = new URL(tab.url);
    let domain = url.hostname;
    localStorage.setItem("currentDomain",domain);

    if (!domain) {
      pushEvent("error", "null-domain-in-preAutoExtractContent", JSON.stringify(tab));
    }

    // reset selected text
    localStorage.setItem("selectedText", "");
}
async function handleAutoExtractContent(tab, domain, pollDomain) {

  let executeScriptsForAmazon = function(tab) {
    // extract text from amazon kindle cloud reader
    // console.log('executing kindle content extractor...');
    pushEvent("content-extractor", "run-kindle-cloud");
    chrome.tabs.executeScript(tab.id, { file: "jquery.js" });
    chrome.tabs.executeScript(tab.id, { file: "js/settings_store.js" });
    chrome.tabs.executeScript(tab.id, { file: "js/kindle_cloud_reader_extractor.js"});
  };

  // console.log('attempting to auto extract content:');
  // console.log('tab:',tab);
  // console.log('domain:',domain);
  // console.log('pollDomain:',pollDomain);

  // check if on kindle cloud reader
  if (
    domain !== null &&
    (
      domain.includes('read.amazon')
        || domain.includes('leer.amazon')
        || domain.includes('lire.amazon')
        || domain.includes('lesen.amazon')
        || domain.includes('leggi.amazon')
        || tab.title.toLowerCase().includes('kindle cloud reader')
    )
  ) {

    if (pollDomain === null || pollDomain === "read.amazon") {

      preAutoExtractContent(tab);

      // user must be on PRO
      if (await userIsPRO() === true) {
        // console.log('on amazon cloud reader...');

        // check permissions

        chrome.permissions.contains({
          permissions: ['tabs'], // TODO: only request permission for current site
          origins: [`https://${domain}/`]
        }, function(result) {
          if (result) {
            // The extension has the permissions.
            // execute
            executeScriptsForAmazon(tab);
          } else {

            // The extension doesn't have the permissions.
            // console.log('requesting permissions');

            // request permissions first, but only if not polling
            if (pollDomain === null) {
              pushEvent("additional-permissions-kindle-cloud", "requested-from-extract", domain);
              chrome.permissions.request({
                permissions: ['tabs'],
                origins: [`https://${domain}/`]
              }, function(granted) {
                // The callback argument will be true if the user granted the permissions.
                if (granted) {
                  pushEvent("additional-permissions-kindle-cloud", "granted-from-extract", domain);

                  executeScriptsForAmazon(tab);


                } else {
                  pushEvent("additional-permissions-kindle-cloud", "denied-from-extract", domain);
                  alert(`Oops! For full speed reading functionality on Kindle Cloud Reader with Spreed, Spreed needs to be able to read and interact with ${domain}. \n\nPlease try again or contact help@getspreed.com with the current URL if you think this is an error.`);
                }
              });

            }

          }
        });

      } else {
        if (pollDomain === null) {
          attemptRedirectToPaid('kindle_cloud_extract');
        }
      }

    } else {
      pushEvent("error", "in-bg-kindle-reader-check-but-non-amazon-pollDomain", pollDomain);
    }

  }

  // other page
  else {
    if (pollDomain === null) {
      // reset selected text
      preAutoExtractContent(tab);

      pushEvent("content-extractor", "run-misc");
      chrome.tabs.executeScript(tab.id, { file: "jquery.js" });
      chrome.tabs.executeScript(tab.id, { file: "extractor.js" });
      // chrome.tabs.executeScript(tab.id, { file: "getPagesSource.js" });
    }

  }
}
function autoExtractContent(pollDomain=null, tabId=null) {

  let url=null;
  let domain=null;
  console.log('---');
  if (tabId === null) {
    getActiveTab(function(tab) {
      console.log('get active tab in auto extract content:',tab);
      // active tab might not have a url (like if it's the extensions page)
      try {
        url = new URL(tab.url);
        domain = url.hostname;
        localStorage.setItem("curUrl", url);
        localStorage.setItem("curDomain", domain);
        if (!url) {
          pushEvent("error", "null-url-in-autoExtractContent", JSON.stringify(tab));
        }
      }
      catch (err) {
        console.error(err);
        console.error(tab);
        pushEvent("error", "error-in-active-tab-autoExtractContent", JSON.stringify(err));
      }
      handleAutoExtractContent(tab, domain, pollDomain);
    });

  } else {
    // TODO: make sure user has tabs permission enabled at this point
    console.log('get specific tab in auto extract content:',tabId);
    chrome.tabs.get(tabId, function(tab) {
      try {
        url = new URL(tab.url);
        domain = url.hostname;
        localStorage.setItem("curUrl", url);
        localStorage.setItem("curDomain", domain);
        if (!url) {
          pushEvent("error", "null-url-in-autoExtractContent", JSON.stringify(tab));
        }
      }
      catch (err) {
        console.error(err);
        console.error(tab);
        pushEvent("error", "error-in-specific-tab-autoExtractContent", JSON.stringify(err));
      }
      // console.log('tab-specific auto extract:', url, domain, tab);
      handleAutoExtractContent(tab, domain, pollDomain);
    });

  }

}

function autoExtractContentAndOpenSpreed() {
  // console.log('auto extract and open spreed called');
  autoExtractContent();

  //wait until selected text is set again, shouldn't take more than a few seconds
  waitUntil(
    function () {
      // the code you want to run here...
      // console.log('open spreed after non-empty selected text');
      openSpreed();
    },
    function() {
      // the code that tests here... (return true if test passes; false otherwise)
      return !!(localStorage.getItem('selectedText') !== '');
    },
    50 // amount to wait between checks
  )();

}


// event tracking
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35748958-3']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
function pushEvent(category, action, label=null) {
  if (label !== null) {
    _gaq.push(['_trackEvent', category, action, label]);
  }
    else {
      _gaq.push(['_trackEvent', category, action]);
    }
}



// redirect
function attemptRedirectToPaid(settingKey) {
  pushEvent("in-app-upgrade-redirect", settingKey);
  if (state.openedProLanding === false) {
    redirectToPaid(settingKey);
  }
  else if (state.openedProWindowId !== null && state.openedProTabId !== null) {
    // try to redirect to existing pro page
    // focus on window of pro page
    chrome.windows.update(state.openedProWindowId, {focused:true}, function(window) {

      if (chrome.runtime.lastError) {
        // can't show window
        console.error(chrome.runtime.lastError.message);

        redirectToPaid(settingKey);
      } else {
        // focus on tab of pro page
        chrome.tabs.update(state.openedProTabId, {active:true}, function(tab) {
          if (chrome.runtime.lastError) {
            // can't show tab, maybe because it was closed already
            // console.error(chrome.runtime.lastError.message);

            redirectToPaid(settingKey);
          }
        });
      }

    });
  }
}
function redirectToPaid(featureName) {
  chrome.tabs.create(
    {
      url: "https://getspreed.com/pro?utm_source=extension&utm_medium=internal&utm_campaign=pro_feature_"+featureName
    },
    function(tab) {
      // focus the window that the new tab is in
      chrome.windows.update(tab.windowId, {focused:true});

      // track that we've redirected once already
      state.openedProLanding = true;
      state.openedProWindowId = tab.windowId;
      state.openedProTabId = tab.id;
    }
  );

}


chrome.commands.onCommand.addListener(function(cmd) {
    if (cmd === 'open-spreed') {

        //alert('open spreed hotkey pressed');
        /* Inject the code into all frames of the active tab */
        chrome.tabs.executeScript({
            code: jsCodeStr,
            allFrames: true   //  <-- inject into all frames, as the selection
                              //      might be in an iframe, not the main page
        }, function(selectedTextPerFrame) {
            if (chrome.runtime.lastError) {
                /* Report any error */
                //alert('Try right clicking to spreed the text. Error: ' + chrome.runtime.lastError.message);
                console.error('Try right clicking to spreed the text. Error: ' + chrome.runtime.lastError.message);
            }
            // console.log('selectedTextPerFrame: ', selectedTextPerFrame);

           if ((selectedTextPerFrame[0].length > 0)
                    && (typeof(selectedTextPerFrame[0]) === 'string')) {

                //alert('something selected');
                /* The results are as expected */
                //alert('Selected text: ' + selectedTextPerFrame[0]);
                //alert(selectedTextPerFrame[0].length);
                localStorage.setItem("openMode", "3");
                localStorage.setItem("selectedText", selectedTextPerFrame[0]);
				        setupPopupWindow();
            }

            else if (selectedTextPerFrame[0].length == 0) {
                //nothing selected, we want to auto content extract
                localStorage.setItem("openMode", "1");
                autoExtractContentAndOpenSpreed();
            }


        });
    }

    // // text (element) selector
    // else if (cmd == 'open-spreed-text-selector') {

    //   openSpreedTextSelector();

    // }

});






chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    // console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    // console.log('message received:',request);
    //alert('message received');

    if (request.action == "divSelect") {
      if (request.allText.length>0) {
        localStorage.setItem("openMode", "2");
        localStorage.setItem("selectedText",request.allText);
        //test = localStorage.getItem("allText");
        //alert(test);
        //sendResponse({farewell: "goodbye"});

      }
    }

    else if (request.action == "getSource") {
      //get page html
      //localStorage.setItem("htmlSource",request.source);
      //alert('htmlSource');
      //alert(localStorage.getItem("htmlSource"));
      htmlSource = request.source;
      //alert(htmlSource);
      localStorage.setItem("htmlSource",htmlSource);

      localStorage.setItem("curTitle",request.title); // update the title that's extracted, since this is called on article extraction

      //send to api in background
      //not yet implemented

    }

    else if (request.action == "openSpreedFromButton") {
      let openMode = 0;
      if (request.hasOwnProperty("openMode") === true) {
        openMode = request.openMode;
      }
      localStorage.setItem("openMode", openMode.toString());
      sendResponse({
        success: true
      });
      autoExtractContentAndOpenSpreed();
    }

    else if (request.action == "getCurDomain") {
      sendResponse({
        curDomain: localStorage.getItem("curDomain"),
        extensionUrl: localStorage.getItem("extensionUrl")  ,
        curUrl: localStorage.getItem("curUrl")
    });
    }

    else if (request.action == "addToBlacklist") {
      blacklistString = localStorage.getItem("blacklist");
      blacklistString += ", "+request.curDomain;
      localStorage.setItem("blacklist",blacklistString);
    }

    else if (request.action == "openSpreedTextSelector") {
      localStorage.setItem("openMode", "2");
      openSpreedTextSelector();
    }

    else if (request.action == "openSpreedTextSelectorFromMenu") {
      localStorage.setItem("openMode", "7");
      openSpreedTextSelector();
    }

    else if (request.action == "openSpreedWithPasted") {
      localStorage.setItem("openMode", "6");
      localStorage.setItem("selectedText", request.pastedText);
      setTimeout(function(){setupPopupWindow()},0);
    }

    else if (request.action == "extractor") { //the end point for all auto content extractor calls
      // console.log('extracted html:',request.html);
      htmlStripped = strip(request.html); // strip html tags
      console.log('storing htmlStripped:',htmlStripped);
      localStorage.setItem("selectedText", htmlStripped);

      sendResponse({
          success: true
      });
    }

    else if (request.action == "openSpreedFromMenu") {
      localStorage.setItem("openMode", "8");
      autoExtractContentAndOpenSpreed();
    }

    else if (request.action == "autoExtractContent") {
      let pollDomain = null;
      if (request.hasOwnProperty("pollDomain") === true) {
        pollDomain = request.pollDomain;
      }
      let tabId = null;
      if (request.hasOwnProperty("tabId") === true) {
        tabId = request.tabId;
      }
      autoExtractContent(pollDomain, tabId);
      sendResponse({
        success: true
      });
    }

    else if (request.action == "getExtractedContent") {
      const extractedContent = localStorage.getItem("selectedText");
      console.log('---start---');
      console.log('getExtractedContent from tab ',sender.tab);
      console.log('sending extracted content:', extractedContent);
      console.log('---end---');
      sendResponse({
        extractedContent: extractedContent
      });

    }

    else if (request.action == "getWPMSpeed") {
      wpm = localStorage.getItem("speed");
      chunkSize = localStorage.getItem("chunkSize");
      if (wpm==null) {
        wpm = 400;
      }
      if (chunkSize==null) {
        chunkSize = 1;
      }
      sendResponse({
            wpm: wpm,
            chunkSize: chunkSize
      });
    }

    else if (request.action == "getCurrentTab") {
      sendResponse({
        success: true,
        tab: sender.tab
      });
    }

    else if (request.action == "userIsPRO") {
      // chrome extensions api promise workaround: https://stackoverflow.com/questions/53024819/chrome-extension-sendresponse-not-waiting-for-async-function
      (async () => {
        const isPRO = await userIsPRO();
        sendResponse({
          success: true,
          isPRO: isPRO
        });
      })();
    }

    else if (request.action == "redirectToPaid") {
      attemptRedirectToPaid(request.featureName);
      sendResponse({
        success: true
      });

    }

    else if (request.action == "pushEvent")  {
      // console.log('background received pushEvent:',request);
      if (request.hasOwnProperty('eventLabel') === true) {
        pushEvent(request.eventCategory, request.eventAction, request.eventLabel);
      }
      else {
        pushEvent(request.eventCategory, request.eventAction);
      }
      sendResponse({
        success: true
      });
    }

    return true;

});


chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks icon
    //launch menu
});
