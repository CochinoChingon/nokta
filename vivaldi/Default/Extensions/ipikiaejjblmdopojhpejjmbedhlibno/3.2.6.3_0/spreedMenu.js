spreedThis =function() {
    pushEvent("spreed menu item", "spreed current page");
	//spreed this page. current default is text selector mode
	window.close();

	chrome.runtime.sendMessage({action: "openSpreedFromMenu"}, function(response) {
      //console.log(response.farewell);

    });

}

spreedPasted =function(e) {
    e.preventDefault();
	pushEvent("spreed menu item", "open paste window");

    setTimeout(function()
    {
        chrome.tabs.create({url: "spreedPaste.html"});

    }, 200);

}

showStatistics =function(e) {
    e.preventDefault();
    pushEvent("spreed menu item", "open stats window");


    setTimeout(function()
    {
        chrome.tabs.create({url: "statistics.html?utm_source=extension_menu&utm_medium=internal&utm_campaign=statistics_menu_item"});

    }, 200);

}


showHowtouse =function(e) {
    e.preventDefault();
    pushEvent("spreed menu item", "open how to use");
    setTimeout(function()
    {
        chrome.tabs.create({url: "popup.html"});

    }, 200);


}

showDonate =function(e) {
    e.preventDefault();
    pushEvent("spreed menu item", "click-donate");
    setTimeout(function()
    {
        chrome.tabs.create({url:'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S76JFJWDVUEPQ'});

    }, 500);


}

showKindleCloud = function(e) {
    e.preventDefault();

    setTimeout(function()
    {
        pushEvent("spreed menu item", "open kindle cloud");
        chrome.tabs.create({url:'pages/kindle_cloud_reader_instructions.html'});

    }, 500);


}

$(document).ready(function(){
    //add click listeners
    $('#menu-link-spreedthis').click(spreedThis);
    $('#menu-link-spreedpasted').click(spreedPasted);
    $('#menu-link-statistics').click(showStatistics);
    $('#menu-link-howtouse').click(showHowtouse);
    $('#menu-link-donate').click(showDonate);
    $('#menu-link-kindle-cloud').click(showKindleCloud);

    //active tooltip
    $('.tooltip').tooltipster();

    // get open spreed hotkey
    chrome.commands.getAll(function(commands) {
        for (command of commands) {
            if (command.name === 'open-spreed') {
                // update ui
                $('#spreedthis-hotkey').html(command.shortcut);
            }
        }
    });

});


