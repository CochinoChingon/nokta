// console.log('spreed button injected');
const curURL = window.location.href;
const curHost = window.location.host;
let curTab;

let kindleIframe = null;
let kindleContent = null;
let extractedContent = "";
let kindleContentLoaded = false;
let totalContentLength = 0;
let previousContentLength = 0;
let previousExtractedContentLength = 0;
let buttonLoaded = false;

let spreedButton = document.createElement("a");
const originalSpreedButtonInnerHTML = "<b>Spreed this page</b><br>";
spreedButton.innerHTML = originalSpreedButtonInnerHTML;
spreedButton.href = "#";
spreedButton.className = "spreed-overlay-button";

// can't get css content scripts working so just do inline styles
spreedButton.style.position = "fixed";
spreedButton.style.zIndex = 2147483647;
spreedButton.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
spreedButton.style.fontSize = "0.75rem";
spreedButton.style.left = "10px";
spreedButton.style.border = "1px solid #666666";
spreedButton.style.borderRadius = "5px";
spreedButton.style.textAlign = "center";
spreedButton.style.padding = "5px 5px";
spreedButton.style.textDecoration = "none";
spreedButton.style.color = "inherit";
spreedButton.style.opacity = "0.7";


// TODO: one day, this "polling promise" pattern can be put into a module and imported
function getExtractedContent(timeout=1000) {
	return new Promise((resolve, reject) => {
		const maxTries = timeout / 100;
		let tries = 0;
		let poll = setInterval(function() {

			if (tries === maxTries) {
				clearInterval(poll);
				// console.log('no content returned in getExtractedContent');
				reject();
			}

			try {
				chrome.runtime.sendMessage({action: "getExtractedContent"}, function(response) {

			    	// console.log('getExtractedContent response:',response);

			    	if (typeof(response.extractedContent) !== "undefined" && response.extractedContent.length > 0) {
			    		clearInterval(poll);
			    		resolve(response.extractedContent);
			    	}
			    });
			} catch (err) {
				clearInterval(poll);
				console.error(err);
				reject(err);
			}


		    tries++;

		}, 250);

	});
}
function getWPMSpeed(timeout=1000) {
	return new Promise((resolve,reject) => {
		const maxTries = timeout / 100;
		let tries = 0;
		let poll = setInterval(function() {

			if (tries === maxTries) {
				clearInterval(poll);
				reject();
			}

			chrome.runtime.sendMessage({action: "getWPMSpeed"}, function(response) {
				clearInterval(poll);
				resolve(response);
			});
			tries++;

		},100);

	});
}


function getCurrentTab() {
	return new Promise((resolve,reject) => {
		chrome.runtime.sendMessage({action: "getCurrentTab"}, function(response) {
			if (response.success === true) resolve(response.tab);
			else reject();
		});
	});
}

function getUserIsPRO() {
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage({action: "userIsPRO"}, function(response) {
			// console.log('userIsPRO message response:', response);
			if (response.success === true) resolve(response.isPRO);
			else reject();
		})
	});
}


async function init() {
	// get current tab
	curTab = await getCurrentTab();
	// console.log('setting curTab:',curTab);

	const isPRO = await getUserIsPRO();

	// // AMAZON KINDLE CLOUD READER OVERLAY BUTTON
	// // only extract if user is PRO
	// if (curHost.includes("read.amazon") && isPRO === true) {
	// 	// detect once book is loaded
	// 	// console.log('on kindle cloud reader');

	// 	// console.log(document);
	// 	// console.log(document.getElementById("KindleReaderIFrame")); // KindleReaderContainer
	// 	// console.log(document.getElementById("KindleReaderContainer"));

	// 	// poll for overlay button
	// 	let checkKindleContent = setInterval(async function() {

	// 		const kindleContentHasLoaded = await waitForKindleContentLoaded();
	// 		if (kindleContentHasLoaded === true) {
	// 			// extract text
	// 			try {
	// 				// pollDomain only extracts text on this domain, when this domain is active
	// 				// do NOT need tabId, because tabId forces extraction of text on the tabId, replacing selectedText
	// 				chrome.runtime.sendMessage({action: "autoExtractContent", pollDomain: "read.amazon"}, function(response) {
	// 		    	});
	// 			} catch(err) {
	// 				console.error(err);
	// 				clearInterval(checkKindleContent);
	// 				delete checkKindleContent;

	// 			}
	// 		    // get extracted text
	// 		    extractedContent = await getExtractedContent().catch((err) => { });
	// 		    console.log('getExtractedContent:', extractedContent);

	// 			if (typeof(extractedContent) === "undefined") {
	// 				console.log("no extracted content. doing nothing");
	// 			}

	// 			else {
	// 				if (buttonLoaded === false) {
	// 					// console.log("adding button because buttonLoaded:",buttonLoaded);
	// 					buttonLoaded = true;

	// 					await loadSpreedButtonInKindleReader(kindleContent).catch((err) => { console.error(err); });

	// 				} else {
	// 					// button already loaded. but text could have changed
	// 					if (extractedContent.length !== previousExtractedContentLength && (await getCurrentTab().id === curTab.id)) {
	// 						// console.log('button already loaded but content changed');
	// 						await loadSpreedButtonInKindleReader(kindleContent).catch((err) => { console.error(err); });
	// 					}
	// 				}

	// 				previousExtractedContentLength = extractedContent.length;
	// 			}
	// 		}


	// 	}, 1000);

	// }
}



function openSpreedFromButton(event) {
	event.preventDefault();
	// console.log('button clicked');

	// wait until there's extracted content
	// console.log("extractedContent on button click:",extractedContent);
	chrome.runtime.sendMessage({action: "openSpreedFromButton", openMode: 9}, function(response) {
	});
}

async function loadSpreedButtonInKindleReader(container) {

	// get wpm speed
	const { wpm, chunkSize } = await getWPMSpeed();
	// console.log('wpm speed:',wpm);
	// console.log('chunk size:',chunkSize);

    // calculate estimated time
    // console.log('extractedContent from button load:',extractedContent);
    const estimatedMinutes = (extractedContent.split(" ").length / (wpm*chunkSize)).toFixed(1);
    // console.log('estimatedMinutes:',estimatedMinutes);

    spreedButton.innerHTML = originalSpreedButtonInnerHTML + ` ${estimatedMinutes} min`;

    // get position of container
	const rightMargin = container.getBoundingClientRect().left;
	// console.log('container:',container.getBoundingClientRect());
	// console.log(rightMargin);

	// remove overlay button if it already exists
	const existingButton = container.querySelector(".spreed-overlay-button");
	if (existingButton !== null && typeof(existingButton) !== "undefined") {
		// console.log('removing existing button');
		existingButton.removeEventListener('click', openSpreedFromButton)
		existingButton.remove();
	}

	// add overlay button
	container.appendChild(spreedButton);

	const newWidth = rightMargin - (spreedButton.getBoundingClientRect().left*2);
	// console.log(spreedButton.getBoundingClientRect());
	// console.log(newWidth);

	spreedButton.style.width = newWidth.toString() + "px";

	// create listener
	const spreedOverlayButton = container.querySelector(".spreed-overlay-button");

	spreedOverlayButton.addEventListener('click', openSpreedFromButton);

}

function getKindleIFrame() {
	kindleIframe = document.getElementById("KindleReaderIFrame");
}
function checkKindleContentLoaded() {
	// console.log('checking if kindle content has loaded...');
	getKindleIFrame();
	if (kindleIframe !== null) {

		kindleContent = kindleIframe.contentWindow.document.getElementById("kindleReader_content");

		// loaded
		if (kindleContent !== null && kindleContent.getBoundingClientRect().width > 0) {

			// console.log(kindleIframe);
			// console.log(kindleContent);

			let contentIframes = kindleContent.getElementsByTagName("iframe");
			// console.log(contentIframes);
			// console.log(contentIframes.length);

			totalContentLength = 0;
			for (iframe of contentIframes) {
				totalContentLength += iframe.contentWindow.document.body.textContent.length;
			}
			// console.log('totalContentLength:',totalContentLength);

			if (contentIframes.length > 0 && totalContentLength > 0 && totalContentLength === previousContentLength) {
				// console.log("kindle content loaded");
				kindleContentLoaded = true;
			} else {
				previousContentLength = totalContentLength;
				buttonLoaded = false;
				kindleContentLoaded = false;
			}


		} else {
			// console.log("waiting for kindle iframe...");
			buttonLoaded = false;
		}
	}
	else {
		// console.log("waiting for kindle iframe...");
		buttonLoaded = false;
	}

}

function waitForKindleContentLoaded(timeout=5000) {
	return new Promise((resolve, reject) => {
		const maxTries = timeout / 100;
		let tries = 0;
		let poll = setInterval(function() {

			if (tries === maxTries) {
				clearInterval(poll);
				delete poll;
				// console.log('no content returned in getExtractedContent');
				reject(false);
			}

			checkKindleContentLoaded();

			if (kindleContentLoaded === true) {
				clearInterval(poll);
				delete poll;
				resolve(true);
			}


		    tries++;

		}, 100);

	});
}

// SET UP MESSAGE LISTENERS
chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse) {
  	// console.log('message received:',request);

  	let sourceTabId;
  	switch(request.action) {
	  case "kindlePageTurn":

	  	(async () => {

	  		// turn page
		  	sourceTabId = request.sourceTabId;
		  	const direction = request.direction;

		  	let pageTurnArea;
		  	getKindleIFrame();
		  	if (direction === "left") {
		  		pageTurnArea = kindleIframe.contentWindow.document.getElementById("kindleReader_pageTurnAreaLeft");
		  	} else {
		  		pageTurnArea = kindleIframe.contentWindow.document.getElementById("kindleReader_pageTurnAreaRight");
		  	}
		  	pageTurnArea.click();

		  	// new page, content has not loaded yet
		  	kindleContentLoaded = false;
		  	totalContentLength = 0;
		  	kindleIframe = null;
			kindleContent = null;

		  	const kindleContentHasLoaded = await waitForKindleContentLoaded();
		  	// console.log('kindleContentHasLoaded:',kindleContentHasLoaded);
		  	// console.log('extractedContent (should be empty):', extractedContent);

		  	// extract content
		  	// console.log('sending message to auto extract content...');
		  	chrome.runtime.sendMessage({action: "autoExtractContent", tabId: curTab.id}, function(response) {
		  	});

		  	// retrieve content
		  	const newExtractedContent = await getExtractedContent().catch((err) => { console.error(err); });

		  	// console.log('kindle page turn, new content:',newExtractedContent);

		  	if (typeof(newExtractedContent) !== "undefined") {
		  		// console.log('content ready');

			  	chrome.runtime.sendMessage({action: "reloadSpreed", extractedContent: newExtractedContent}, function(response) {
			    });

		  	}

		  	sendResponse({
		  		success: true
		  	});




	  	})();

	  	break;


	}

	return true;

});

init();
waitForKindleContentLoaded();