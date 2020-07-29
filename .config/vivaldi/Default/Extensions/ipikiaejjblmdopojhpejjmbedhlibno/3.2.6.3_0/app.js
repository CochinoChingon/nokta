var selectedText;

var splitText;
var rawSplitText;
var nonChunkedSplitText;

var wpm;
var chunkSize;
var style;
var highlightMode;
var highlightColor;
var highlightColorUseCustom;
var fontColor;
var fontColorEnabled;
var backgroundColor;
var backgroundColorEnabled;
var letterSpacing;

var font;

var wordDiv;
var wpmDiv;
var fontSizeDiv;

var chunkSizeDiv;
var wordIndex;

var pauseButton;
var playButton;
var rewindButton;
var replayButton;
var forwardButton;

var wordTimer;
var timerDelay = 3; // reading start timer

var width;
var height;

var maxWpm;

var delay;

var slider;
var sliderCheckbox;

var timerCountdown;
var timerTimeout;
var timerBorderWidth;

var inits = 0;
var popupClosed = 0;

var timeEstimate=0;

var hide = 0;

var language = 0; //0 english/unknown. 1 chinese. 2 arabic.

var timerCount = 0;

var readingTimer;
var currentTimeSpent = 0;

var loadingStats;

var totalTimeSpent;
var wordCount;
var currenetWordCount = 0;
var nationalWpmAverage = 250.0;
var statsMode = 0;

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

var articleShareThreshold;
var shareButtons;

var controls;

var curTitle;

var enablemicropauseNumbers;
var enablemicropausePunctuation;
var enablemicropauseLongWords;
var micropauseNumbersFactor;
var micropausePunctuationFactor;
var micropauseLongWordsFactor;
var wpmInterval;

var hotkeyRewind;
var hotkeyReset;
var hotkeyForward;
var hotkeyQuit;
var hotkeyHide;
var hotkeyWPMIncrease;
var hotkeyWPMDecrease;
var hotkeyChunkSizeIncrease;
var hotkeyChunkSizeDecrease;
var hotkeyFontSizeIncrease;
var hotkeyFontSizeDecrease;
var hotkeyFullscreen;

// source tab info
let currentDomain;
let currentTabId;

// current spreed window info
let spreedTabId;
// store the tab id of THIS spreed window
getActiveTab(function(tab) {
	spreedTabId = tab.id;
});

var state = {
	settingsStore: null,
	settingsShown: false,
	isPlaying: false
};

// development url: http://localhost:5001/spreed-9532e/us-central1
// prod url: https://us-central1-spreed-9532e.cloudfunctions.net
const ENV = 'production';
// const ENV = 'development';

let API_URL;
if (ENV === 'development') {
	API_URL = 'http://localhost:5001/spreed-9532e/us-central1';
} else {
	API_URL = 'https://us-central1-spreed-9532e.cloudfunctions.net';
}
if (API_URL.includes('localhost')) {
	console.error('API url is localhost. Change.');
}


//STORAGE FUNCTIONS

function _dictIsEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


function _localStorageSetdefault(key, defaultValue) {
	value = localStorage.getItem(key);
	//console.log("key: "+key);
	//console.log("value: "+value);

	if (value==null || value==undefined) {
		localStorage.setItem(key, defaultValue);
		return defaultValue;
	}
	else {
		return value;
	}
}

function getSetting(key) {
    if (state.settingsStore !== null) {
        return state.settingsStore.getSetting(key);
    } else {
        throw "Cannot get settings from a null settingsStore in state."
    }
}



// a and b are javascript Date objects
function dateDiffInDays(a, b) {

  return Math.round((b - a) / _MS_PER_DAY);
}

function groupWords(splitText, chunkSize) {
	var newSplitText=new Array();
	chunkCount=0;
	for (var i=0; i<splitText.length; i=i+chunkSize) {
		var newChunk="";
		for (var j=0; j<chunkSize; j++) {
			if (i+j<splitText.length) {
				newChunk = newChunk + splitText[i+j] + " ";

			}
		}

		if (newChunk==" ") {
			newChunk = "_";
		}

		newSplitText.push(newChunk);
	}

	//get rid of spaces within chunks, if is chinese

	if (language==1) {
		newSplitText2 = [];
		for (var i=0; i<newSplitText.length; i++) {
			temp = newSplitText[i].split(" ");

			newtemp = temp.join("");

			newSplitText2.push(newtemp);
		}

		return newSplitText2;
	}
	else {
		return newSplitText;
	}


}


function _combineNumbers(theSplitText) {

	newList = Array();
	var i=0;
	while (i<theSplitText.length) {
		curChar = theSplitText[i];
		if (theSplitText[i].match(/[0-9]/)) {
			curChar = "";
			while (theSplitText[i].match(/[0-9]/)) {
				curChar+=theSplitText[i];
				i+=1;
			}
			newList.push(curChar);

		}
		else {
			newList.push(curChar);
			i+=1;
		}
	}
	//console.log(newList);
	return newList;
}

function _combineEnglishWords(theSplitText) {
	//console.log('combine english');

	newList = Array();
	var i=0;
	while (i<theSplitText.length) {
		curChar = theSplitText[i];
		if (theSplitText[i].match(/[a-zA-Z]/)) {
			curChar = "";
			while (theSplitText[i].match(/[a-zA-Z]/)) {
				curChar+=theSplitText[i];
				i+=1;
			}
			newList.push(curChar);

		}
		else {
			newList.push(curChar);
			i+=1;
		}
	}

	return newList;
}

function HasArabicCharacters(text)
{
    var arregex = /[\u0600-\u06FF]/;
    return arregex.test(text);
}

function _splitSelectedText(selectedText) {

	// example: english article with some chinese characters: https://www.theatlantic.com/technology/archive/2018/01/the-shallowness-of-google-translate/551570/

	// detect chinese or japanese
	const allAsianChars = selectedText.match(/[\u3400-\u9FBF]/g); // could be null if there's no match
	// if (allAsianChars) console.log('allAsianChars length:',allAsianChars.length);
	// console.log('selectedText without whitespace:',selectedText.replace(/\s+/g, ""))
	// console.log('selectedText without whitespace length:',selectedText.replace(/\s+/g, "").length);

	//more than 50% of non-space characters
	if (allAsianChars && (1.0*allAsianChars.length / selectedText.replace(/\s+/g, "").length) > 0.5) {

		// split everything at the character level
		var theSplitText = selectedText.split('');
		// naive: BUT don't split numbers, or english words, regroup them into "words"
		theSplitText = _combineNumbers(theSplitText);
		theSplitText = _combineEnglishWords(theSplitText);
		// filter OUT characters that are only whitespace
		theSplitText = theSplitText.filter(character => character.match(/\s+/) ? false : true);

		chunkSize = 3; // default chunk size: 3 characters at a time: this doesn't work because overridden by user setting
		language = 1;

		console.log('language:', language);
	}

	else {
		chunkSize = 1;

		//some stuff for scientific notations?
		selectedText = selectedText.replace(/([\w]+)([\[][\w]+)+/g,'$1 $2');
		selectedText = selectedText.replace(/([\w]+)([\-\=\/])([\w]+)+/g,'$1$2 $3');
		selectedText = selectedText.replace(/([\w]+)([\-\=\/]\[)([\w]+)+/g,'$1$2 $3');

		//split on whitespace
		theSplitText = selectedText.split(/[\s]+/);
	}

	theSplitText = _removeEmpty(theSplitText);

	if (HasArabicCharacters(selectedText)) {
		//console.log('arabic detected!');
		//todo: RIGHT TO LEFT

	}
	return theSplitText;
}

function _preProcessSelectedText(selectedText) {
	//for badly formatted html, strip html tags
	//basic html tags <at least one non whitespace>
	selectedText = selectedText.replace(/\<[^\s]+\>/g, '');
	//then tags with id, class, href, or src
	selectedText = selectedText.replace(/\<.*?(href|id|class|src).*?\>/g, '');

	//replace all . with .[space], to fix paragraph break errors
	//ONLY for cases where it's a lower case followed by a period followed by a non whitespace...
	selectedText = selectedText.replace(/([a-z])\.([^\s])/g,'$1. $2');

	//add space after em dashes
	selectedText = selectedText.replace(/\u2014/g, '\u2014 ');
	return selectedText;
}

function getMicropauseSettings() {
	enablemicropauseNumbers = getSetting(state.settingsStore.SETTING_MICROPAUSE_NUMBERS_ENABLED_KEY);
	enablemicropausePunctuation = getSetting(state.settingsStore.SETTING_MICROPAUSE_PUNCTUATION_ENABLED_KEY);
	enablemicropauseLongWords = getSetting(state.settingsStore.SETTING_MICROPAUSE_LONGWORDS_ENABLED_KEY);

	micropauseNumbersFactor = getSetting(state.settingsStore.SETTING_MICROPAUSE_NUMBERS_FACTOR_KEY);
	micropausePunctuationFactor = getSetting(state.settingsStore.SETTING_MICROPAUSE_PUNCTUATION_FACTOR_KEY);
	micropauseLongWordsFactor = getSetting(state.settingsStore.SETTING_MICROPAUSE_LONGWORDS_FACTOR_KEY);
}
function getTimerDelay() {
	const timerEnabled = getSetting(state.settingsStore.SETTING_START_TIMER_ENABLED_KEY);
	if (timerEnabled === 'true') {
		timerDelay = getSetting(state.settingsStore.SETTING_START_TIMER_LENGTH_KEY);
	}
	else {
		timerDelay = null;
	}
}
function getWPMInterval() {
	wpmInterval = getSetting(state.settingsStore.SETTING_WPM_INTERVAL_KEY);
	if (typeof(wpmInterval) !== "undefined" && wpmInterval !== null) {
		wpmInterval = parseInt(wpmInterval);
	}

}
function getHotkeyRewind() {
	hotkeyRewind = getSetting(state.settingsStore.SETTING_HOTKEY_REWIND_KEY);
}
function getHotkeyReset() {
	hotkeyReset = getSetting(state.settingsStore.SETTING_HOTKEY_RESET_KEY);
}
function getHotkeyForward() {
	hotkeyForward = getSetting(state.settingsStore.SETTING_HOTKEY_FORWARD_KEY);
}
function getHotkeyQuit() {
	hotkeyQuit = getSetting(state.settingsStore.SETTING_HOTKEY_QUIT_KEY);
}
function getHotkeyHide() {
	hotkeyHide = getSetting(state.settingsStore.SETTING_HOTKEY_HIDE_KEY);
}
function getHotkeyWPM() {
	hotkeyWPMIncrease = getSetting(state.settingsStore.SETTING_HOTKEY_WPM_INCREASE_KEY);
	hotkeyWPMDecrease = getSetting(state.settingsStore.SETTING_HOTKEY_WPM_DECREASE_KEY);
}
function getHotkeyChunkSize() {
	hotkeyChunkSizeIncrease = getSetting(state.settingsStore.SETTING_HOTKEY_CHUNK_SIZE_INCREASE_KEY);
	hotkeyChunkSizeDecrease = getSetting(state.settingsStore.SETTING_HOTKEY_CHUNK_SIZE_DECREASE_KEY);
}
function getHotkeyFontSize() {
	hotkeyFontSizeIncrease = getSetting(state.settingsStore.SETTING_HOTKEY_FONT_SIZE_INCREASE_KEY);
	hotkeyFontSizeDecrease = getSetting(state.settingsStore.SETTING_HOTKEY_FONT_SIZE_DECREASE_KEY);
}
function getHotkeyFullscreen() {
	hotkeyFullscreen = getSetting(state.settingsStore.SETTING_HOTKEY_FULLSCREEN_KEY);
}
function reloadAppHotkeys() {
	// console.log('reloading app hotkeys...');
	hotkeys.deleteScope('app');
	hotkeys('*', {scope: 'app'}, checkKeypress);
	// rewind
	getHotkeyRewind();
	hotkeys(hotkeyRewind, {scope: 'app'}, function(event, handler) {
 		replay();
 	});
 	// forward
	getHotkeyForward();
	hotkeys(hotkeyForward, {scope: 'app'}, function(event, handler) {
 		forward();
 	});
	// reset
	getHotkeyReset();
	hotkeys(hotkeyReset, {scope: 'app'}, function(event, handler) {
 		rewind();
 	});
 	// quit
 	getHotkeyQuit();
 	hotkeys(hotkeyQuit, {scope: 'app'}, function(event, handler) {
		close();
 	});
 	// fullscreen
 	getHotkeyFullscreen();
 	hotkeys(hotkeyFullscreen, {scope: 'app'}, function(event, handler) {
		toggleFullScreen();
 	});

 	// // hide
 	// // disabling "hide controls" for now because they already hide when playing
 	// getHotkeyHide();
 	// hotkeys(hotkeyHide, {scope: 'app'}, function(event, handler) {
 	// 	toggleHide();
 	// });
 	// wpm
 	getHotkeyWPM();
 	hotkeys(hotkeyWPMIncrease, {scope: 'app'}, function(event, handler) {
 		increaseWPM();
 	});
 	hotkeys(hotkeyWPMDecrease, {scope: 'app'}, function(event, handler) {
 		decreaseWPM();
 	});
 	// chunk size
 	getHotkeyChunkSize();
 	hotkeys(hotkeyChunkSizeIncrease, {scope: 'app'}, function(e,h) {
 		increaseChunkSize();
 	});
 	hotkeys(hotkeyChunkSizeDecrease, {scope: 'app'}, function(e,h) {
 		decreaseChunkSize();
 	});
 	// font size
 	getHotkeyFontSize();
 	hotkeys(hotkeyFontSizeIncrease, {scope: 'app'}, function(e,h) {
 		increaseFontSize();
 	});
 	hotkeys(hotkeyFontSizeDecrease, {scope: 'app'}, function(e,h) {
 		decreaseFontSize();
 	});

	hotkeys.setScope('app');
}
function addHelpDiv() {
	const helpDiv = `
	<div style="display:none" id="inline-tips-container">
			<div id="inline_tips" style="">
				<h1>Hotkeys</h1>
				<dl class="hotkeys-dd">
					<dt>Space</dt><dd>Play/pause</dd>

					<dt>${hotkeyFullscreen}</dt><dd>Toggle Full-screen</dd>

					<dt>${hotkeyRewind}</dt><dd>Rewind</dd>

					<dt>${hotkeyForward}</dt><dd>Fast-forward</dd>

					<dt>${hotkeyReset}</dt><dd>Reset</dd>

					<dt>1,2...9,0</dt><dd>Seek to position in text</dd>

					<dt>${hotkeyQuit}</dt><dd>Close Spreed window</dd>

					<dt>${hotkeyWPMDecrease} </dt><dt> ${hotkeyWPMIncrease}</dt> <dd>Decrease/Increase WPM</dd>

					<dt>${hotkeyChunkSizeDecrease} </dt><dt> ${hotkeyChunkSizeIncrease}</dt> <dd>Decrease/Increase Chunk Size</dd>

					<dt>${hotkeyFontSizeDecrease} </dt><dt> ${hotkeyFontSizeIncrease}</dt> <dd>Decrease/Increase Font Size</dd>
				</dl>

				<div class="support-contact">Have questions or comments? Reach out to <a href="mailto:support@getspreed.com" target="_blank">support@getspreed.com</a>!</div>
			</div>
		</div>`;
	if ($('#inline-tips-container').length > 0) {
		$('#inline-tips-container').remove();
	}
	$('body').append(helpDiv);
}

function getControlsMessage() {
	const upgradeMessage = '<a href="https://getspreed.com/pro?utm_source=extension&utm_medium=internal&utm_campaign=prelaunch_20200413" target="_blank" class="btn btn-primary">Click here to upgrade</a>';
	const licenseKey = state.settingsStore.getSetting(state.settingsStore.USER_LICENSE_KEY);
	if (licenseKey === null) {
		$('#controls-message').html(upgradeMessage);
	} else {
		$('#controls-message').html("");
	}
}

function getActiveTab(callback) {

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tab = tabs[0];

    // console.log('active tab:',tab);
    if (tab.hasOwnProperty("id") === true) {
      // tab should always have an id
      // console.log('returning active tab:',tab);

      callback(tab);
    } else {
    	pushEvent("error", "no-spreed-window-tab");
    	console.error('No active tab identified for current Spreed window.');
    }

  });
}

function init() {

	// try to get currentDomain and currentTabId, they could be null/undefined though. TODO: handle safely
	currentDomain = localStorage.getItem("currentDomain");
	currentTabId = localStorage.getItem("currentTabId");
	if (currentTabId !== null && typeof(currentTabId) !== "undefined") {
		currentTabId = parseInt(currentTabId);
	}
	// console.log(currentTabId);

	//tokenize selected text (make sure there's stuff in it too)

	//reset congrats div box text
	$('#congrats').html("");
	$('#congrats').hide();

	let checkInterval = 50;
	let timeElapsed = 0;

	// show loading spinner after a small delay
	$('#congrats').css('opacity',0);
	$('#congrats').html(`
		<div style="color: white;">
			<i style="font-size: 2rem;" class="fas fa-circle-notch fa-spin"></i>
			<br><br><p style="font-size: 1rem;">Loading...</p>
		</div>`);
	$('#congrats').show();
	$('#congrats').delay(200).animate({'opacity':'1'},500);

	waitUntil(

	  function () {
	    // init

	    inits+=1;

	    // set timer to check on loading
	    const maxLoadTime = 3000;
	    let elapsedTime = 0;
	    const intervalLength = 100;
	    let loadingTimer = setInterval(function() {
	    	elapsedTime += intervalLength;
	    	if (elapsedTime > maxLoadTime) {
	    		showLoadingError();
	    		clearInterval(loadingTimer);
	    	}
	    }, intervalLength);

		// console.log('selectedText: ', selectedText);

		//split on spaces
		selectedText = _preProcessSelectedText(selectedText);

		// console.log('preprocessed selectedText', selectedText);

		nonChunkedSplitText = _splitSelectedText(selectedText);

		// console.log('nonChunkedSplitText', nonChunkedSplitText);


		//set max wpm
		maxWpm = 1600;

		var settingsStore = new SettingsStore();
	    // console.log('initializing settings store...');
	    settingsStore.isInitialized.then(function() {

	    	// console.log('settings store initialized.');
	    	state.settingsStore = settingsStore;


	    	// set up page turn buttons, but only on read.amazon
	    	if (currentDomain && currentDomain.includes(".amazon.")) {

	    		$("#page-turn-container").show();

	    		const pageTurnLeft = $("#page-turn-left a");
	    		pageTurnLeft.on('click', function(event) {
	    			event.preventDefault();

	    			$("#page-turn-left").html('<i class="fas fa-circle-notch fa-spin"></i>');

	    			// send message to content script in tab to turn page but handle potential nulls
	    			if (!currentTabId) {
	    				pushEvent("error", "failed-kindle-page-turn-event-no-current-tab-id", curUrl);
	    				console.error("No currentTabId, required to send message to turn Kindle page.");
	    			}
	    			if (!spreedTabId) {
	    				pushEvent("error", "failed-kindle-page-turn-event-no-spreed-window-tab-id", curUrl);
	    				console.error("No spreedTabId, required to send message to turn Kindle page.");
	    			}
	    			if (currentTabId && spreedTabId) {
	    				chrome.tabs.sendMessage(currentTabId, {action: "kindlePageTurn", direction: "left", sourceTabId: spreedTabId}, function(response) {
		    				if (response.success === true) {

		    				} else {
		    					// TODO: handle user error with kindle page turn
		    					pushEvent("error", "failed-kindle-page-turn-event-response-not-successful", spreedTabId ? 'has_spreed_tab_id' : spreedTabId);
		    					console.error("Did not extract any text after turning page.");
		    				}
						});
	    			}

	    		});

	    		const pageTurnRight = $("#page-turn-right a");
	    		pageTurnRight.on('click', function(event) {
	    			event.preventDefault();

	    			$("#page-turn-right").html('<i class="fas fa-circle-notch fa-spin"></i>');

	    			// send message to content script in tab to turn page
	    			if (!currentTabId) {
	    				pushEvent("error", "failed-kindle-page-turn-event-no-current-tab-id", curUrl);
	    				console.error("No currentTabId, required to send message to turn Kindle page.");
	    			}
	    			if (!spreedTabId) {
	    				pushEvent("error", "failed-kindle-page-turn-event-no-spreed-window-tab-id", curUrl);
	    				console.error("No spreedTabId, required to send message to turn Kindle page.");
	    			}
	    			if (currentTabId && spreedTabId) {
	    				chrome.tabs.sendMessage(currentTabId, {action: "kindlePageTurn", direction: "right", sourceTabId: spreedTabId}, function(response) {
		    				if (response.success === true) {

		    				} else {
		    					// TODO: handle user error with kindle page turn
		    					pushEvent("error", "failed-kindle-page-turn-event-response-not-successful", spreedTabId ? 'has_spreed_tab_id' : spreedTabId);
		    					console.error("Did not extract any text after turning page.");
		    				}
						});
	    			}

	    		});

	    	} else if (!currentDomain) {
	    		pushEvent("error", "kindle-pageturn-feature-not-added-currentDomain-is-null", curUrl);
	    	}

	    	// get user settings
	    	// forceUpdate the user: talk to server, query database, get any new pro features
	    	unlockProFeatures(forceUpdate=true);

	    	// hotkeys
	    	getHotkeyRewind();

	    	// micropauses
	    	getMicropauseSettings();

	    	// wpm interval
	    	getWPMInterval();

	    	// reading start timer
	    	getTimerDelay();

			// colors and font
			updateCustomStyleElements();
			if (highlightMode === true) {
				$('#word-container').addClass('highlight');
			}

			//wpm
			wpm = 400;
			wpm = parseInt(_localStorageSetdefault("speed", wpm));
			if (!wpm || wpm <= 0) {
				wpm = 400;
			}

			wpmDiv = document.getElementById('wpm');
			wpmDiv.innerHTML = wpm;

			//console.log(wpmDiv.innerHTML);


			//font size
			fontSize=60; //in pixels
			fontSize = parseInt(_localStorageSetdefault("font-size", fontSize));

			//set word font size
			setFontSize($("#word-container"),fontSize);

			fontSizeDiv = document.getElementById('font-size');
			fontSizeDiv.innerHTML = fontSize;


			// text scroller
			getTextScrollerStatusDisplay();

			// get controls message (e.g. to upgrade)
			getControlsMessage();


			//count days
			//do it locally
			today = new Date();
			prevDate = localStorage.getItem("prevDate");
			dayCount = localStorage.getItem("dayCount");
			if (prevDate==null && dayCount==null) {
				//console.log('setting defaults');
				prevDate = today.toString();
				dayCount = 0;
			}

			today = today.toString();
			//console.log('today: '+today+', prevDate: '+prevDate);
			//console.log('today: '+Date.parse(today)+', prevDate: '+Date.parse(prevDate));

			diff = dateDiffInDays(Date.parse(prevDate), Date.parse(today));
			//console.log('diff: '+diff);
			dayCount = parseInt(dayCount)+diff;
			localStorage.setItem("dayCount",dayCount);
			localStorage.setItem("prevDate",today);
			//console.log(dayCount);



			//do it using chrome storage sync
			/*
			chrome.storage.sync.get(['dayCount','prevDate'], function(items) {

				//console.log(items);
				today = new Date();
				today = today.toString()

				if (_dictIsEmpty(items)) {
					//if doesn't exist, set to default
					console.log('empty. setting defaults.');

					prevDate = today;
					dayCount = 0;

				}
				else {
					prevDate = items['prevDate'];
					dayCount = items['dayCount'];
				}
				diff = dateDiffInDays(Date.parse(prevDate), Date.parse(today));
				//console.log('diff: '+diff);
				dayCount = parseInt(dayCount) + diff;
				_setStorage({'dayCount':dayCount});
				_setStorage({'prevDate':today});
				//console.log(dayCount);
			});
			*/




			//chunkSize = 1; //default, set by language
			//because so much logic depends on chunk size, can't sync/callback logic screwy
			if (localStorage.getItem("chunkSize")>0) {
				chunkSize = localStorage.getItem("chunkSize");
			}

			chunkSize = parseInt(chunkSize);
			chunkSizeDiv = document.getElementById('chunk-size');
			chunkSizeDiv.innerHTML = chunkSize;

			//set first word
			wordIndex = 0;


			splitText = nonChunkedSplitText;
			// console.log('non chunked splitText: ', nonChunkedSplitText);

			//recordData();

			//group words depending on chunk size
			splitText = groupWords(splitText,chunkSize);
			// console.log('grouped splitText: ', splitText);

			rawSplitText = splitText;

			// process words
			splitText = splitText.map(processWord);
			// console.log('final splitText: ', splitText);


			wordDiv = document.getElementById('word');




			//estimated time
			//if less than 1 min, < 1
			updateTimeEstimate();


			//autoResizeWord();

			//$("#word").fitText2($("#word-container"));


			pauseButton = document.getElementById('pause');
			pauseButton.style.display = 'none';

			rewindButton = document.getElementById('rewind');
			replayButton = document.getElementById('replay');
			forwardButton = document.getElementById('forward');

			//add play/pause button listeners
			playButton = document.getElementById('play');
			playButton.addEventListener("click", play, false);


			pauseButton.addEventListener("click", pause, false);
			rewindButton.addEventListener("click", rewind, false);
			replayButton.addEventListener("click", replay, false);
			forwardButton.addEventListener("click", forward, false);
			document.getElementById('fullscreen').addEventListener("click", toggleFullScreen, false);
			document.addEventListener("fullscreenchange", function() {
			  if (document.fullscreenElement === null) {
			  	document.getElementById('fullscreen').innerHTML = '<i class="fas fa-expand"></i>';
			  }
			});

			//add increase/decrease listeners
			document.getElementById('increase-wpm').addEventListener("click",increaseWPM,false);
			document.getElementById('decrease-wpm').addEventListener("click",decreaseWPM,false);


			document.getElementById('increase-font-size').addEventListener("click",increaseFontSize,false);
			document.getElementById('decrease-font-size').addEventListener("click",decreaseFontSize,false);

			document.getElementById('increase-chunk-size').addEventListener("click",increaseChunkSize,false);
			document.getElementById('decrease-chunk-size').addEventListener("click",decreaseChunkSize,false);

			//document.getElementById('small-donate-link').addEventListener("click",donateClick,false);
			//document.getElementById('small-review-link').addEventListener("click",reviewClick,false);
			//document.getElementById('small-signup-link').addEventListener("click",signupClick,false);


			document.getElementById('statistics-open').addEventListener("click",function(){
				pushEvent("spreed-app-control", "click-statistics");
				openStatistics('statistics_control');
			},false);

			// add mouse-in listeners to controls
			$('#controls, #status').on('mouseenter', function(event) {
				// TODO: only when playing
				if (state.isPlaying === true) {
					showControls();
				}

			});
			$('#controls, #status').on('mouseleave', function(event) {
				if (state.isPlaying === true) {
					hideControls();
				}
			});



			//update wpm multiplier, depending on word chunk size
			updateWPMMultiplier();

			//put focus on the play button
			playButton.focus();



			//assign hotkeys
			reloadAppHotkeys();



			//set first word
			wordDiv.innerHTML = splitText[wordIndex];

			waitUntil(
			  function () {
			    // the code you want to run here...
			    positionWord();
			  },
			  function() {
			    // the code that tests here... (return true if test passes; false otherwise)
			    return !!(wordDiv.innerHTML !== '');
			  },
			  50 // amount to wait between checks
			)();


			//threshold for sharing buttons to appear
			articleShareThreshold = Math.round((splitText.length-1)*1);
			//console.log('articleShareThreshold: '+articleShareThreshold);

			//slider
			slider = $( "#slider" );

			slider.slider({
			    orientation: "horizontal",
			    max: splitText.length-1,
			    min: 0,
			    slide: function( event, ui ) {
			    	if (event.originalEvent) {
			    		//user changed the slider
			    		wordIndex = ui.value
			            wordDiv.innerHTML = splitText[wordIndex];

			            waitUntil(
						  function () {
						    // the code you want to run here...
						    positionWord();
						  },
						  function() {
						    // the code that tests here... (return true if test passes; false otherwise)
						    return !!(wordDiv.innerHTML !== '');
						  },
						  50 // amount to wait between checks
						)();
			        }
			    }
			});

			sliderCheckbox = $('#slider-checkbox');
			showSlider = true; //default
			if (localStorage.getItem("showSlider") != undefined) {
				showSlider = localStorage.getItem("showSlider");
			}

			if (showSlider=="true" || showSlider==true){
				slider.css("display", "");
				sliderCheckbox.prop('checked', true);

			}
			else {
				slider.css("display", "none");
				sliderCheckbox.prop('checked', false);
			}



			//slider checkbox
			sliderCheckbox.change(function() {
			    if(this.checked) {
			        //show progress slider
			        slider.css("display", "");

			    }
			    else {
			    	//hide progress slider
			    	slider.css("display", "none");
			    }
			    localStorage.setItem("showSlider",this.checked);
			    afterClick();

			});


			// add help popup div (after hotkeys have been loaded)
			addHelpDiv();
			// open quick tips (after hotkeys ahve been loaded)
			openQuickTips();

			// // enable tooltips
			// enableTooltips();


			// track app open
			loadManifest((response) => {
			    // Parse JSON string into object
			    let manifestJson = JSON.parse(response);
			    // track open event
			    let proString = 'free';
			    if (getUserLicense() !== null) {
			    	proString = 'pro';
			    }
			    pushEvent('version-on-app-page-view',manifestJson.version,proString);
			});


			// done loading, clear the timer and hide loading
			clearInterval(loadingTimer);
			hideLoading();


			// start pre-read timer
			waitUntil(
				//wait unti the popup has closed, if it opened on startup
			  function () {
			    // the code you want to run here...
			    		if (inits==1) {
							$(document).bind('keydown.space', 'space', bindPlay);

							if (timerDelay !== null) {
								playButton.style.display = 'none';
								startTimer(timerDelay);
							}

						} else {
							$(document).unbind('keydown.space', bindPlay);
							$(document).bind('keydown.space', 'space', bindPlay);
						}
			  },
			  function() {
			    // the code that tests here... (return true if test passes; false otherwise)
			    return !!(popupClosed==1);
			  },
			  50 // amount to wait between checks
			)();




		});


	  },
	  function(interval) {
	    // the code that tests here... (return true if test passes; false otherwise)

	    timeElapsed+=checkInterval;

	    // if too much time has elapsed
	    if (timeElapsed >= 3000) {
	    	showLoadingError();

	    	clearInterval(interval);

	    }

	    // if there is text, return true if it's not empty and run the "waitUntil" function
	    if (localStorage.getItem("selectedText") != "" && localStorage.getItem("selectedText") != null) {
			//console.log('there was selectedText');
			//console.log(localStorage.getItem("selectedText"));
			selectedText = localStorage.getItem("selectedText");
			// console.log('selectedText:',selectedText);
			//console.log('calling init');


			return !isEmpty(selectedText);

		} else {
			return false;
		}

	  },
	  checkInterval // amount of time to wait between checks
	)();

}

function showLoadingError() {
	$('#congrats').html("<i style='color: #ffc837; font-size: 2rem;' class='fas fa-exclamation-triangle'></i><br><br>Oops! Spreed had trouble extracting text on this page. Please reach out to <a href='mailto:help@getspreed.com' target='_blank'>help@getspreed.com</a> and include the URL of the page.");
	$('#congrats').css('top','150px');
	$('#congrats').css('font-size','16px');
	$('#congrats').css('font-weight','700');
	$('#congrats').css('color','white');
	$('#congrats').show();

	pushEvent("error", "no-selectedText-timeout", curUrl ? curUrl : 'null_curUrl');
}
function hideLoading() {

	$('#congrats').html();
	$('#congrats').hide();
}



function _removeEmpty(splitText) {
	var newSplitText = new Array();

	for (var i=0; i<splitText.length; i=i+1) {
		token = splitText[i];
		if (!isEmpty(token)) {
			newSplitText.push(token);
		}
	}
	return newSplitText;
}

var waitUntil = function (fn, condition, interval) {
    interval = interval || 100;

    var shell = function () {
            var timer = setInterval(
                function () {
                    var check;

                    try { check = !!(condition(timer)); } catch (e) { check = false; }

                    if (check) {
                        clearInterval(timer);
                        delete timer;
                        fn();
                    }
                },
                interval
            );
        };

    return shell;
};



function recordData() {
	//send usage data to api
	$.ajax({
		type: "POST",
		url: "http://spreed.herokuapp.com/api/record",
		data: {"url":curUrl, "title":curTitle, "wordCount":nonChunkedSplitText.length},
		success: function(data) {
			console.log('send success');
		}
	});
}


function startTimer(delay) {
	//console.log('startTimer: '+delay);
	$('#word-container-timer').css('width',(delay*100)+'px');
	timerBorderWidth = (delay*100);

	timerCountdown = setInterval(function(){countdown();},1000);
	timerTimeout = setTimeout(function(){clearInterval(timerCountdown); play();},(delay*1000));

}

function countdown() {
	//decrease width of
	timerBorderWidth -= 100;
	$('#word-container-timer').css('width',timerBorderWidth+'px');
}




function processWord(word){
    var divisor = 2;
    let charOffset = 0;
    // console.log('language:', language);
    if (language === 0 || language === 1) {
    	// if language is english or chinese/japanese
    	divisor = 2;
    	// if english, add a 1 character offset too
    	if (language === 0) charOffset = 1;
    } else {
    	divisor = 2.5;
    }

    var center = Math.max(Math.round(word.length / divisor - 1) - charOffset, 0);
    var letters = word.split('');
    var result = [];
    return letters.map(function(letter, idx){
        if (idx === center){
            return '<span class="highlight">' + letter + '</span>';
        }
        return letter;
    }).join('');
}

function positionWord(){
    //var wordEl = $('#word').get();
    //console.log('position word');
    var wordEl = wordDiv;

    if (typeof wordEl == 'undefined') {
    	return;
    }
    // console.log('#word:',wordEl);
    var highlight = wordEl.firstElementChild; // get highlighted letter, which is always the first child

    // "highlight" could be null if wordEl is somehow empty (e.g. a space)
    // console.log('highlight:',highlight);

    var readerEl = document.getElementById('word-container');

    if (highlight) {

	    //console.log('highlight.offsetWidth:'+highlight.offsetWidth);
	    //console.log('highlight.offsetHeight:'+highlight.offsetHeight);
	    //console.log('highlight.offsetLeft:'+highlight.offsetLeft);
	    //console.log('highlight.offsetTop:'+highlight.offsetTop);

	    //console.log('readerEl.clientWidth:'+readerEl.clientWidth);
	    //console.log('readerEl.clientHeight:'+readerEl.clientHeight);

	    var centerOffsetX = (highlight.offsetWidth / 2) + highlight.offsetLeft;
	    var centerOffsetY = (highlight.offsetHeight / 2) + highlight.offsetTop;

	    wordEl.style.left = ((readerEl.clientWidth / 2) - centerOffsetX) + 'px';
	    wordEl.style.top = ((readerEl.clientHeight / 2) - centerOffsetY) + 'px';

		//highlight
		highlightCenterVisualOnly();

	}

	//update slider
	slider.slider('value',wordIndex);

	// update time estimate
	updateTimeEstimate();
}


function updateTimeEstimate() {
	timeEstimate = (rawSplitText.length - wordIndex + 1)/(wpm);
	// console.log(timeEstimate, rawSplitText.length, (wordIndex + 1));
	timeEstimate = Math.round(timeEstimate * 10) / 10;
	// console.log(timeEstimate);

	if (timeEstimate<1 && timeEstimate>0)
		timeString = "< 1";
	else if (timeEstimate <= 0)
		timeString = "0";
	else
		timeString = Math.round(timeEstimate).toString();

	$('#time-estimate').html(timeString + " min");
}


function updateWPMMultiplier() {
	if (chunkSize>1) {
		wpmDiv = document.getElementById('wpm');
		wpmDiv.innerHTML = wpm+"&#8202;&#215;&#8202;"+chunkSize;
	}
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}


function replay() {
	movePacer(-2);
}
function forward() {
	movePacer(2);
}
function movePacer(seconds) {

	rewindAmount = Math.floor((wpm/60/chunkSize)*seconds);
	wordIndex+=rewindAmount;
	if (wordIndex<0) {
		wordIndex=0;
	}
	//console.log('rewinding '+rewindAmount);

	//display word
	wordDiv.innerHTML = splitText[wordIndex];

	waitUntil(
	  function () {
	    // the code you want to run here...
	    positionWord();
	  },
	  function() {
	    // the code that tests here... (return true if test passes; false otherwise)
	    return !!(wordDiv.innerHTML !== '');
	  },
	  50 // amount to wait between checks
	)();
	afterClick();
}

function rewind() {
	//stop reading timer
	clearInterval(readingTimer);
	state.isPlaying = false;
	currentTimeSpent = 0;

	clearInterval(wordTimer);
	playButton.style.display = '';

	pauseButton.style.display = 'none';


	$(document).unbind('keydown.space', bindPlay);

	showControls();

	init();
}

function play() {
	resetCongrats();

	// hide controls
	hideControls();

	//start reading timer
	readingTimer = setInterval(function(){incrementReadingTimer()}, 1000);
	state.isPlaying = true;


	clearInterval(timerCountdown);
	clearTimeout(timerTimeout);
	$('#word-container-timer').css("width","0px");

	delay = 1/(wpm/60)*1000;
	//alert("play");
	wordTimer = setInterval(function(){nextWord()},delay);
	//disable play, enable pause

	playButton.style.display = 'none';
	$(document).unbind('keydown.space', bindPlay);

	pauseButton.style.display = '';
	$(document).bind('keydown.space', 'space', bindPause);


}

function openStatistics(campaign) {
	chrome.tabs.create({url: "statistics.html?utm_source=extension&utm_medium=internal&utm_campaign="+campaign});
	setTimeout(function()
    {
        close();

    }, 200);

}

function openSpreedLabs() {
	chrome.tabs.create({url: "http://spreedlabs.launchrock.com/"});
}

function openMemoriousSave() {
	var curUrl = localStorage.getItem("curUrl");

	var curTitle = localStorage.getItem("curTitle");
	var htmlSource = localStorage.getItem("htmlSource");


	// extrag original url if pocket or instapaper url
	var h = htmlSource; // inner html
	//console.log(h);
	var q = curUrl;
	var p = curTitle;
	var d = '';

	// taken from bookmarklet
	function extractDomain(url){var domain;if(url.indexOf("://")>-1){domain=url.split("/")[2]}else{domain=url.split("/")[0]}domain=domain.split(":")[0];return domain}domain=extractDomain(q);if(domain.indexOf("getpocket.com")>=0&&q.indexOf("getpocket.com/a/read/")>=0){re=new RegExp("class=\"authorsdomain\".*?getpocket\.com\/redirect\\?url=(.*)\&.*?\">","g");let results=re.exec(h);if(results){q=decodeURIComponent(results[1])}}else if(domain.indexOf("instapaper.com")>=0){re=new RegExp("a class=\"original\" href=\"(.*)\">","g");results=re.exec(h);if(results){q=results[1]}}

	var domain = "https://www.memoriousapp.com";
	//var domain = "https://memorious-staging.herokuapp.com";
	//var domain = "http://127.0.0.1:8000";
	var m_url = domain + "/b/add/";
	var m_url_end = "?mode=spreed&url="+encodeURIComponent(q)+"&description="+encodeURIComponent(d)+"&title="+encodeURIComponent(p);

	var url = m_url+m_url_end;

	window.open(url,"", "menubar=1,titlebar=1,width=1100, height=700");

}

////STATS////

function incrementReadingTimer() {

	/*
	chrome.storage.sync.get("totalTimeSpent", function(items) {
		if (_dictIsEmpty(items)) {
			//if doesn't exist, set to default
			chrome.storage.sync.set({"totalTimeSpent":0}, function() {});
		}
		else {
			totalTimeSpent = items['totalTimeSpent'];
			totalTimeSpent += 1;
			chrome.storage.sync.set({"totalTimeSpent":totalTimeSpent}, function() {});
			console.log(totalTimeSpent);
		}

	});
	*/

	totalTimeSpent+=1;
	localStorage.setItem("totalTimeSpent", totalTimeSpent);
	//console.log(totalTimeSpent);

	//also keep track of current time spent
	currentTimeSpent += 1;
}

function countWord() {

	/*
	chrome.storage.sync.get("wordCount", function(items) {
		//console.log(items);
		if (_dictIsEmpty(items)) {
			//if doesn't exist, set to default
			chrome.storage.sync.set({"wordCount":0}, function() {});
		}
		else {
			wordCount = items['wordCount'];
			wordCount += 1*chunkSize;
			chrome.storage.sync.set({"wordCount":wordCount}, function() {});
			//console.log(wordCount);
		}

	});
	*/

	wordCount += 1*chunkSize;
	currenetWordCount += 1*chunkSize;
	localStorage.setItem("wordCount", wordCount);
	//console.log(wordCount);

}

function syncCountStats() {
	//sync word count and time spent from local vars to google chrome.sync

}

function secondsToString(seconds)
{

	var numdays = Math.floor(seconds / 86400);
	var numhours = Math.floor((seconds % 86400) / 3600);
	var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
	var numseconds = ((seconds % 86400) % 3600) % 60;
	if (numdays > 0) {
		return numdays + " days, " + numhours + " hours, " + numminutes + " minutes, " + numseconds + " seconds";
	} else if (numhours > 0) {
		return numhours + " hours, " + numminutes + " minutes, " + numseconds + " seconds";
	} else {
		return numminutes + " minutes, " + numseconds + " seconds";
	}

}

function displayStats() {
	loadingStats = $('#loading-stats');
	if (statsMode>3) {
		return;
	}
	//console.log(statsMode);

	//add new stats line
	loadingStats.append('<div id="stats-line-'+statsMode.toString()+'"></div>');
	statsLine = $('#stats-line-'+statsMode.toString());
	statsLine.attr('class', 'stats-line');
	statsLine.css("display", "none");

	//console.log(statsLine);
	//console.log("about to add new stat line");

	if (statsMode==0) {
		//time saved
		actualTimeSpent = totalTimeSpent/60.0; //actual user time spent in minutes
		expectedTimeSpent = wordCount/nationalWpmAverage; //expected time spent in minutes

		timeSaved = Math.round((expectedTimeSpent-actualTimeSpent)*60); //convert to seconds
		if (timeSaved == NaN) {
			timeSaved = 0;
		}
		//minutesSaved = Math.floor(timeSaved/60.0);
		//secondsSaved = (timeSaved - minutesSaved*60);
		timeSavedString = secondsToString(timeSaved);

		statsLine.html('Time saved by using Spreed: '+timeSavedString);


	}
	else if (statsMode==1) {
		//average wpm
		if (totalTimeSpent==0) {
			averageWpm = 0;
		}
		else {
			averageWpm = wordCount/(totalTimeSpent/60.0);
		}
		statsLine.html('Your average reading speed: '+Math.round(averageWpm).toString()+ ' WPM');
	}
	else if (statsMode==2) {
		//average wpm
		minutesSpent = Math.round(totalTimeSpent/60.0);
		statsLine.html('Time spent Spreeding: '+Math.round(minutesSpent).toString()+' minutes');
	}
	else if (statsMode==3) {
		//total words read
		statsLine.html('Total words read: '+wordCount.toString());
	}

	statsLine.fadeIn("slow");

	statsMode += 1;
}

function resetCongrats() {
	$('#congrats').hide();
	$('#congrats').html("");
}

function nextWord(first) {

	countWord();

	delay = 1/(wpm/60)*1000;

	first = typeof first !== 'undefined' ? first : 0;
	wordIndex = wordIndex+1;
	if (wordIndex>=splitText.length) {
		//WE'RE DONE READING

		//reset (old)
		//clearInterval(wordTimer);
		//enable play, disable pause
		//playButton.style.display = '';
		//pauseButton.style.display = 'none';


		pause();
		wordIndex=-1;

		//show congratulations div after we're done readingf
		var existingCongrats = $('#congrats').html();
		var congratsMessage = generateRandomCongrats();
		existingCongrats += congratsMessage+" You just read "+String(currenetWordCount)+" words in "+String(secondsToString(currentTimeSpent))+"! <br><u>See and share your reading stats here</u>";
		$('#congrats').css( 'cursor', 'pointer' );
		$('#congrats').on('click', function(e) {
			pushEvent("spreed-app-link", "post-read-see-and-share-stats");
			openStatistics('post_read_see_and_share_stats');
		});
		$('#congrats').html(existingCongrats);
		$('#congrats').show("slow");

	}
	else {
		//should article share buttons appear? if user is done reading past a certain threshold
		//console.log(wordIndex);
		if (wordIndex>=articleShareThreshold) {
			$('#share-spreed-fb').show("slow").delay(1000);
		}

		//old
		curWord = rawSplitText[wordIndex]
		wordDiv.innerHTML = splitText[wordIndex];
		positionWord();


		bonus = 0;

		// enablemicropause = localStorage.getItem("enablemicropause");
		// if (enablemicropause == undefined) {
		// 	enablemicropause = "true";
		// }

		enablemicropause = "true";
		if (enablemicropauseNumbers == undefined) {
			enablemicropauseNumbers = "true";
			micropauseNumbersFactor = 0.05;
		}
		if (enablemicropausePunctuation == undefined) {
			enablemicropausePunctuation = "true";
			micropausePunctuationFactor = 0.05;
		}
		if (enablemicropauseLongWords == undefined) {
			enablemicropauseLongWords = "true";
			micropauseLongWordsFactor = 0.05;
		}

		if (enablemicropause == "true") {
			// MICRO PAUSING

			//if contains a number
			var numbers_re = /(?:^|\s)(\d*\.?\d+|\d{1,4}(?:,\d{1,4})*(?:\.\d+)?)(?!\S)/g;
			var numbers_matched = curWord.match(numbers_re);
			var bonus_factor;
			// console.log(numbers_matched);
			if (numbers_matched && enablemicropauseNumbers === "true") {
				numbers_matched = numbers_matched.join("");
				// console.log('match: ', numbers_matched);
				// console.log('----')
				// console.log('numbers matched length: ', numbers_matched.length);
				// console.log('micropauseNumbersFactor: ', micropauseNumbersFactor);
				// pause constant amount for displayed numbers larger than 1000
				bonus_factor = (Math.round((numbers_matched.length - 1)/3.0) > 0 ? 1 : 0) * micropauseNumbersFactor;
				// console.log('bonus_factor: ', bonus_factor);
				bonus = delay * bonus_factor;
				// console.log('bonus: ',bonus);
				// console.log('delay: ',delay);
			} else {
				if (enablemicropausePunctuation === "true") {
					//if not a number but contains punctuation (which includes comma separated numbers)
					if(curWord.match(/[\,\.\!\;\:\?]/)) {
						bonus_factor = (micropausePunctuationFactor)
						// console.log('bonus_factor: ', bonus_factor);
						bonus = delay*bonus_factor;
					}
				}

			}

			//delay longer words that are not numbers
			if(curWord.length > (8*chunkSize) && enablemicropauseLongWords === "true" && numbers_matched === null) {
				bonus_factor = Math.ceil(curWord.length / (8*chunkSize)) * micropauseLongWordsFactor;
				// console.log('bonus_factor: ', bonus_factor);
				bonus = bonus + delay*bonus_factor;

				// bonus = bonus + ((curWord.length - (6*chunkSize))/(8*chunkSize) * delay);
			}

		}

		// console.log(curWord);
		// console.log(curWord.length);
		// console.log('delay: '+delay);
		// console.log('bonus: '+bonus);

		//delay
		//old
		/*
		clearInterval(wordTimer);
		//disable everything
		$(document).unbind('keydown.space', bindPause);
		$(document).unbind('keydown.space', bindPlay);
		//renable everything
		setTimeout(function(){
			play();
		},bonus);*/

		clearInterval(wordTimer);
		if (wpm<200) {
			bonus = 0;
		}
		wordTimer = setTimeout(function(){nextWord()},(delay+bonus));


	}

	//console.log("#container width: "+$("#container").width());
	//console.log("#word-continer width: "+$("#word-container").width());
}

function donateClick() {
	//chrome.tabs.create({url:'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7BDUJ9WFCEPLG'});
	//chrome.tabs.create({url:'https://chrome.google.com/webstore/detail/ipikiaejjblmdopojhpejjmbedhlibno/'});
}
function reviewClick() {
	//chrome.tabs.create({url:'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7BDUJ9WFCEPLG'});
	chrome.tabs.create({url:'https://chrome.google.com/webstore/detail/ipikiaejjblmdopojhpejjmbedhlibno/'});
}

function signupClick() {
	chrome.tabs.create({url:'http://signup.spreedit.com/'});
}


function pause() {

	//stop reading timer
	clearInterval(readingTimer);
	state.isPlaying = false;

	clearInterval(wordTimer);
	playButton.style.display = '';
	$(document).bind('keydown.space', 'space', bindPlay);

	pauseButton.style.display = 'none';
	$(document).unbind('keydown.space', bindPause);

	showControls();

}

function increaseWPM() {
	// console.log('increasing WPM...');
	interval = wpmInterval;

	if (wpm+interval<=maxWpm) {

		//console.log("increase");
		wpm = wpm+interval;
		wpmDiv.innerHTML = wpm;

		//_setStorage({"speed": wpm});
		localStorage.setItem("speed",wpm);
	}
	updateWPMMultiplier();
	updateTimeEstimate();
	afterClick();
}

function decreaseWPM() {
	// console.log('decreasing WPM...');
	interval = wpmInterval;

	if (wpm-interval>0) {
		wpm = wpm-interval;
		wpmDiv.innerHTML = wpm;

		//_setStorage({"speed": wpm});
		localStorage.setItem("speed", wpm);
	}

	updateWPMMultiplier();
	updateTimeEstimate();
	afterClick();
}

function setFontSize(obj, value) {
	obj.css('font-size', value+"px");
}

function increaseFontSize() {
	if (fontSize+5<155) {
		fontSize = fontSize+5;
		fontSizeDiv.innerHTML=fontSize;

		setFontSize($("#word-container"),fontSize);
		newPadding = fontSize+10;
		$("#word-container").css('padding-top', newPadding+"px");
		$("#word-container").css('padding-bottom',newPadding+"px");

		//_setStorage({"font-size":fontSize});
		localStorage.setItem("font-size", fontSize);

	}
	positionWord();
	afterClick();
}

function decreaseFontSize() {
	if (fontSize-5>=5) {
		fontSize = fontSize-5;
		fontSizeDiv.innerHTML=fontSize;

		setFontSize($("#word-container"),fontSize);
		newPadding = fontSize+10;
		$("#word-container").css('padding-top', newPadding+"px");
		$("#word-container").css('padding-bottom',newPadding+"px");

		//_setStorage({"font-size":fontSize});
		localStorage.setItem("font-size", fontSize);
	}
	positionWord();
	afterClick();
}

function increaseChunkSize() {
	// console.log('increasing chunk size...');
	pause();
	afterClick();
	if (chunkSize+1<=6) {
		chunkSize = chunkSize+1;
		chunkSizeDiv.innerHTML=chunkSize;
		localStorage.setItem("chunkSize",chunkSize);
		//reset
		rewind();
		$(document).unbind('keydown.space', bindPlay);
		$(document).bind('keydown.space', bindPause);

		init();
	}
}

function decreaseChunkSize() {
	// console.log('decreasing chunk size...');
	pause();
	afterClick();
	if (chunkSize-1>=1) {
		chunkSize = chunkSize-1;
		chunkSizeDiv.innerHTML=chunkSize;
		localStorage.setItem("chunkSize",chunkSize);
		//reset
		rewind();
		$(document).unbind('keydown.space', bindPlay);
		$(document).bind('keydown.space', bindPause);

		init();
	}
}

$.fn.removeClassRegex = function(regex) {
  return $(this).removeClass(function(index, classes) {
    return classes.split(/\s+/).filter(function(c) {
      return regex.test(c);
    }).join(' ');
  });
};






function getHighlightSettings() {
	highlightMode = getSetting(state.settingsStore.SETTING_HIHGLIGHT_ENABLED_KEY) === 'true' ? true : false;
	// console.log('highlightMode:', highlightMode);
	highlightColorUseCustom = getSetting(state.settingsStore.SETTING_HIGHLIGHT_COLOR_USE_CUSTOM_KEY) === 'true' ? true : false;
	// console.log('highlightColorUseCustom:', highlightColorUseCustom);
	if (highlightColorUseCustom === true) {
		// use custom color
		highlightColor = getSetting(state.settingsStore.SETTING_HIHGLIGHT_COLOR_KEY);
	} else {
		// use color scheme color
		const [colorSchemes, colorSchemeName] = returnColorSchemeData();

		// console.log(colorSchemes[colorSchemeName]);
		highlightColor = colorSchemes[colorSchemeName][state.settingsStore.SETTING_COLOR_SCHEME_HIGHLIGHT_COLOR_KEY];
	}
	// console.log('highlightColor:',highlightColor);

}
function highlightCenterVisualOnly() {
	if (highlightMode === true) {
		$('#word span.highlight').css({'color': highlightColor});
	}
	else {
		$('#word span.highlight').css({'color': ''});
	}
}
function highlightCenter() {
	//console.log(highlightMode);
	//console.log($('#word span.highlight').css("color"));
	getHighlightSettings();

	highlightCenterVisualOnly();

}
function returnColorSchemeData() {
	const colorSchemes = getSetting(state.settingsStore.SETTING_COLOR_SCHEMES_KEY);
	let colorSchemeName = getSetting(state.settingsStore.SETTING_CURRENT_COLOR_SCHEME_KEY);
	if (typeof(colorSchemes[colorSchemeName]) === 'undefined') {
		// somehow ended up with a non-existent color scheme, so set to default
		colorSchemeName = state.settingsStore.DEFAULT_COLOR_SCHEME;
		state.settingsStore.setSetting(state.settingsStore.SETTING_CURRENT_COLOR_SCHEME_KEY, colorSchemeName);
	}
	return [colorSchemes, colorSchemeName];
}
function returnFontData() {
	const fonts = getSetting(state.settingsStore.SETTING_FONTS_KEY);
	let fontKey = getSetting(state.settingsStore.SETTING_CURRENT_FONT_KEY);
	if (typeof(fonts[fontKey]) === 'undefined') {
		// somehow ended up with a non-existent font name
		fontKey = state.settingsStore.DEFAULT_FONT;
		state.settingsStore.setSetting(state.settingsStore.SETTING_CURRENT_FONT_KEY, fontKey);
	}
	return [fonts, fontKey];
}
function getCustomFontBackgroundSettings() {
	// color scheme colors
	const [colorSchemes, colorSchemeName] = returnColorSchemeData();
	// console.log('setting app color scheme:',colorSchemeName);

	// use custom colors?
	backgroundColorEnabled = getSetting(state.settingsStore.SETTING_BACKGROUND_COLOR_ENABLED_KEY) === 'true' ? true : false;
	fontColorEnabled = getSetting(state.settingsStore.SETTING_FONT_COLOR_ENABLED_KEY)  === 'true' ? true : false;

	if (backgroundColorEnabled === true) {
		// custom colors override
		backgroundColor = getSetting(state.settingsStore.SETTING_BACKGROUND_COLOR_KEY);
	} else {
		backgroundColor = colorSchemes[colorSchemeName][state.settingsStore.SETTING_COLOR_SCHEME_BACKGROUND_COLOR_KEY];
	}

	if (fontColorEnabled === true) {
		// custom colors override
		fontColor = getSetting(state.settingsStore.SETTING_FONT_COLOR_KEY);
	} else {
		fontColor = colorSchemes[colorSchemeName][state.settingsStore.SETTING_COLOR_SCHEME_FONT_COLOR_KEY];
	}

	// fonts
	const [fonts, fontKey] = returnFontData();
	const fontData = fonts[fontKey];
	font = `${fontData[state.settingsStore.SETTING_FONT_NAME_KEY]}, ${fontData[state.settingsStore.SETTING_FONT_BACKUP_KEY]}`;
	// console.log('setting word font:', font);

	// letter spacing
	letterSpacing = getSetting(state.settingsStore.SETTING_LETTER_SPACING_KEY);

}

function updateCustomStyleElements() {
	// update custom colors
	getCustomFontBackgroundSettings();

	// update center letter highlight
	highlightCenter();
	// console.log('setting custom styles:');
	// console.log(backgroundColor);
	// console.log(fontColor);

	const customStyles = `
	<style id='custom-styles'>
		body {
			${"background: "+backgroundColor+";"}
			${"color: "+fontColor+";"}
		}
		body #status .config-group a:hover {
			${"color: "+fontColor+";"}
		}
		body #status .svg-arrow .svg-path {
			${"fill: "+fontColor+";"}
		}
		body #slider {
			${"background: "+fontColor+";"}
		}
		body #slider .ui-slider-handle {
			${"background: "+fontColor+";"}
			${"border-color: "+backgroundColor+";"}
		}
		body #word-container-timer {
			${"border-bottom:3px solid "+fontColor+";"}
		}
		body #word-container {
			font-family: ${font};
		}
		body #word {
			letter-spacing: ${letterSpacing}px;
		}
		body #cboxContent {
			${"background: "+backgroundColor+";"}
		}
	</style>
	`;
	if ($('head style#custom-styles').length > 0) {
		$('head style#custom-styles').remove();
	}
	$('head').append(customStyles);
}



function afterClick() {
	//on focus currently focused element
	if ("activeElement" in document)
	    document.activeElement.blur();
}



window.onresize = resize;

function resize()
{

 localStorage.setItem("width",window.outerWidth);
 localStorage.setItem("height",window.outerHeight);
 //not sure why this is being called when the current window/tab non spreed is being resized...
 positionWord();
}

function toggleFullScreen(event=null) {
  if (event !== null) {
  	pushEvent("spreed-app-action", "click-fullscreen");
  } else {
  	pushEvent("spreed-app-action", "hotkey-fullscreen");
  }

  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById('fullscreen').innerHTML = '<i class="fas fa-compress"></i>';

  } else {
    if (document.fullscreenElement != null) {
      document.exitFullscreen();
    }
  }
}


function bindPlay(k) {
	if (k.keyCode==32) {
		play();
	}
}

function bindPause(k) {
	if (k.keyCode==32) {
		pause();
	}
}


function setHide(set) {
	var hideElements = $('#status, #controls');
	hide = set;

	if (hide==0) {
		//show everything
		hideElements.css('opacity', ''); // remove inline opacity style to use default transparency settings
	}
	else {
		//hide everything
		hideElements.css('opacity', 0);
	}

}

function toggleHide() {
	if (hide==0)
		hide = 1;
	else
		hide = 0

	setHide(hide);
	localStorage.setItem("hide", hide);

}
function hideControls() {
	setHide(1);
}
function showControls() {
	setHide(0);
}


function checkKeypress(k, handler) {
	// // debug
	// console.log(k, handler);
	// console.log(k.keyCode);
	// console.log(String.fromCharCode(k.keyCode));
	// if (hotkeys.cmd) {
	//     console.log('cmd is pressed!');
	// }
	// if (hotkeys.command) {
 //    	console.log('command is pressed!');
 //  	}


 	// seek to position in text
	if (k.keyCode >= 48 && k.keyCode <= 57) {
	    number = parseInt(String.fromCharCode(k.keyCode));
	    if (number==0) number = 10;
	    pct = (number-1)*0.1;

	    //move word to % position
	    wordIndex = Math.round(pct*(splitText.length-1));
		wordDiv.innerHTML = splitText[wordIndex];

        waitUntil(
		  function () {
		    // the code you want to run here...
		    positionWord();
		  },
		  function() {
		    // the code that tests here... (return true if test passes; false otherwise)
		    return !!(wordDiv.innerHTML !== '');
		  },
		  50 // amount to wait between checks
		)();
	}
}

function openQuickTips(){

	//console.log(localStorage.getItem("notfirsttime"));
	if (localStorage.getItem("notfirsttime")>0) {
		openImmediately = false;
		popupClosed = 1;
	}
	else {
		localStorage.setItem("notfirsttime", 1);
		openImmediately = true;
		//openImmediately = false;

	}
	$(".inline").colorbox({
		inline:true,
		width:"70%",
		transition:"none",
		opacity:0.70,
		open:openImmediately,
		onClosed: function () {
			popupClosed = 1;
		}
	});

}

function generateRandomCongrats() {
	var randomInt = Math.floor((Math.random() * 5) + 1);
	switch (randomInt) {
		case 1:
			return "Congratulations!";
			break;
		case 2:
			return "Nice!";
			break;
		case 3:
			return "Awesome!";
			break;
		case 4:
			return "Cool!";
			break;
		case 5:
			return "Wow!";
			break;
	}
}

function unbindMouseWheelScroll() {
	$(window).unbind('mousewheel');
}
function bindMouseWheelTextScroll() {
	$(window).bind('mousewheel', function(e){
		if (state.settingsShown === false) {

			//pause();
		    if(e.originalEvent.wheelDelta > 0)
		    {
		        if (wordIndex<splitText.length-1)
		        	wordIndex+=1;
		    }
		    else
		    {
		    	if (wordIndex>=1)
		        	wordIndex-=1;
		    }
		    wordDiv.innerHTML = splitText[wordIndex];

		    waitUntil(
			  function () {
			    // the code you want to run here...
			    positionWord();
			  },
			  function() {
			    // the code that tests here... (return true if test passes; false otherwise)
			    return !!(wordDiv.innerHTML !== '');
			  },
			  50 // amount to wait between checks
			)();
		}

	});
}
function getTextScrollerStatusDisplay() {
	const textScrollerEnabled = state.settingsStore.getSetting(state.settingsStore.SETTING_TEXT_SCROLLER_ENABLED_KEY) === 'true' ? true : false;

	if (textScrollerEnabled === true) {
		// show text scroller
		$('#slider-container').css('opacity', '1');
		// enabled text scroller listeners
		bindMouseWheelTextScroll();
	} else {
		// hide text scroller
		$('#slider-container').css('opacity', '0');
		// disable text scroller listeners
		unbindMouseWheelScroll();
	}
}





function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}


/* ON LOAD */
$(function(){


	shareButtons = $('#share-article-div');
	shareButtons.hide(); //hide forever, for now

	//$('#congrats').hide(); //hide congrats div until the end

	$('#share-spreed-fb').hide(); //we will re-show this later

	/*
	controls = $('#controls');
	//on mouse enter of controls, show facebook
	controls.mouseenter(function() {
		$('#share-spreed-fb').show("slow");
	});
	//on mouse exit of controls
	controls.mouseleave(function() {
		$('#share-spreed-fb').delay(500).hide("slow");
	});*/


	// get the url and title of the page user is trying to spreed
	curUrl = localStorage.getItem("curUrl");
	curTitle = localStorage.getItem("curTitle");

	// console.log(curUrl);
	//console.log(curTitle);

	// use current url in facebook share url
	fbshareHref = "https://www.facebook.com/plugins/like.php?href="+encodeURIComponent(curUrl)+"&layout=standard&action=like&show_faces=false&share=true&height=35&appId=1420577901545273&colorscheme=dark";


	$('#share-article-fb').attr('src',fbshareHref);
	//console.log(src);


	statsMode = 0; //we have to start displaying stats on loading

	//send google analytic event based on open mode
	//console.log("open mode: "+parseInt(localStorage.getItem("openMode")));

	switch (parseInt(localStorage.getItem("openMode"))) {
		case 0:
			value = "button overlay";
			break;
		case 1:
			value = "alt+v auto text extraction";
			break;
		case 2:
			value = "alt+b text selector";
			break;
		case 3:
			value = "highlight text, alt+v";
			break;
		case 4:
			value = "highlight text, context menu";
			break;
		case 5:
			value = "browser action menu item";
			break;
		case 6:
			value = "pasted text";
			break;
		case 7:
			value = "open text selector from menu";
			break;
		case 8:
			value = "auto text extractor from menu";
			break;
		case 9:
			value = "kindle cloud button overlay";
			break;

		default:
			value = "unknown";
			break;
	}

	_gaq.push(['_trackEvent', 'spreed open mode', value]);

	chrome.storage.sync.get("guid", function (obj) {
		var guid = obj.guid;
	    //console.log(guid);
	});



	/*

	//populate loading stats with time saved first
	wordCount = localStorage.getItem('wordCount');
	if (wordCount==null) {
		wordCount = 0;
	}
	totalTimeSpent = localStorage.getItem('totalTimeSpent');
	if (totalTimeSpent==null) {
		totalTimeSpent = 0;
	}
	wordCount = parseInt(wordCount);
	totalTimeSpent = parseInt(totalTimeSpent);
	*/

	//init: get loading stats from chrome sync
	//populate loading stats with time saved first
	wordCount = parseInt(_localStorageSetdefault("wordCount", 0));
	totalTimeSpent = parseInt(_localStorageSetdefault("totalTimeSpent", 0));


	init();


});





function resetUserFeatures() {
	const defaultFeatures = state.settingsStore.getDefaultSettings()[state.settingsStore.USER_SETTINGS_JSON_KEY];
	state.settingsStore.setSetting(
		state.settingsStore.USER_SETTINGS_JSON_KEY,
		defaultFeatures
	);
}
function resetUserLicense() {
	state.settingsStore.setSetting(
		state.settingsStore.USER_LICENSE_KEY,
		null
	);
}
function getUserLicense() {
	return state.settingsStore.getSetting(state.settingsStore.USER_LICENSE_KEY);
}
function getDefaultUserFeatures() {
	return state.settingsStore.getDefaultSettings()[state.settingsStore.USER_SETTINGS_JSON_KEY];
}
function getUserFeatures() {
	return state.settingsStore.getSetting(state.settingsStore.USER_SETTINGS_JSON_KEY);
}
function setUserLicense(licenseKey) {
	state.settingsStore.setSetting(state.settingsStore.USER_LICENSE_KEY, licenseKey);
}
function setUserFeatures(featuresJSON) {
	state.settingsStore.setSetting(state.settingsStore.USER_SETTINGS_JSON_KEY, featuresJSON);
}

function unlockProFeatures(forceUpdate=false) {
	const licenseKey = getUserLicense();
	const defaultFeatures = getDefaultUserFeatures();
	const curFeatures = getUserFeatures();

	// if license key is null
	if (licenseKey === null) {
		// use default feature json
		setUserFeatures(defaultFeatures);
		// console.log('null licenseKey, using default features');
	} else {
		// non-null license key but default features: try to get new features
		if (JSON.stringify(defaultFeatures).length === JSON.stringify(curFeatures).length) {
			// console.log('non-null licenseKey, but default features: querying for new features');
			requestUserSettingsJsonKey(licenseKey);
		}
		// non-null license key and non-default features: continue. unless we should force updated paid users
		else {
			if (forceUpdate === true) {
				// console.log('forcing update pro user settings');
				requestUserSettingsJsonKey(licenseKey);
			}
			// console.log('non-null licenseKey and non-default features: continue as planned');
		}
	}
}
function requestUserSettingsJsonKey(licenseKey, otherSuccessCallback=null, otherFailureCallback=null) {

	$.ajax({
		url: `${API_URL}/getCustomerFeatures?license_key=${encodeURIComponent(licenseKey)}`,
		timeout: 5000
	}).done(function(data) {
		// console.log('data:',data);

		if (data.exists === true) {
			if (otherSuccessCallback !== null) {
				otherSuccessCallback();
			}

			const proSettingsJson = data.data;
			setUserFeatures(proSettingsJson);
			setUserLicense(licenseKey);
		} else {
			// if no paid user found set to default feature settings
			// console.log('no user found, resetting');
			setUserFeatures(getDefaultUserFeatures());
			setUserLicense(null);

			if (otherFailureCallback !== null) {
				otherFailureCallback({}, "That license key is invalid. Did you enter it correctly?");
			}
		}


	}).fail(function(error) {
		if (otherFailureCallback !== null) {
			otherFailureCallback(error, "Error communicating with server. Are you connected to the internet?");
		}
		else {
			console.error("Error communicating with server to update features. Try again later.");
			console.error(error.status, error.statusText);
		}
	});

}









var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35748958-3']);
_gaq.push(['_trackPageview']);

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

const loadManifest = (callback) => {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'manifest.json', true);
    // Replace 'manifest' with the path to your file
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}






// SET UP MESSAGE LISTENERS
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	// console.log('message received:',request);

  	switch(request.action) {
  		case "reloadSpreed":
  			console.log("reloadSpreed message received");

  			if (request.hasOwnProperty("extractedContent") === true) {
  				localStorage.setItem("selectedText",request.extractedContent);
  			}

  			sendResponse({
  				success: true
  			});
  			location.reload();
  			break;
  	}
  }
);


