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