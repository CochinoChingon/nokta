
// don't re-declare variable because content script can be run more than once
contentIframes = $("#KindleReaderIFrame")
		.contents()
		.find("#kindleReader_content iframe[name^='book_iframe']");

// may need to filter out "invisible" elements?
// console.log('starting extraction');

// in "viewport" defined by iframe
wordHeight = 17;
var isInViewport = function (iframe, elem, full=false) {
	var iframeBounding = iframe.getBoundingClientRect();
	var bounding = elem.getBoundingClientRect(); // relative to parent: iframe
	// console.log('iframeBounding:',iframeBounding);
	// console.log('bounding:',bounding);

	// first, is any part of iframe visible?
	if (
		iframeBounding.left <= (window.innerWidth || document.documentElement.clientWidth) &&
		iframeBounding.right >= 0 &&
		iframeBounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		iframeBounding.bottom >= 0
	) {
		// iframe is visible
		// console.log('iframe is partially visible');
	} else {
		return false;
	}

	// true element position in screen is relative to iframe
	const top = bounding.top+iframeBounding.top;
	const bottom = bounding.bottom+iframeBounding.top;
	const left = bounding.left+iframeBounding.left;
	const right = bounding.right+iframeBounding.left;

	// is element visible?

	// // get word height to establish a buffer
	// let elemText = elem.innerText;
	// if (top != bottom && elemText.length > 0) {
	// 	wordHeight = bottom - top;
	// 	// console.log(elem);
	// 	// console.log(wordHeight);
	// 	// console.log('text length:',elemText.length);
	// } else {
	// 	wordHeight = 17;
	// }

	let elementCondition = (
			right >= 0 &&
			left <= (window.innerWidth || document.documentElement.clientWidth) &&
			bottom >= 0 &&
			top <= (window.innerHeight || document.documentElement.clientHeight)
		);
	if (full === true) {
		// fully visible
		elementCondition = (
			left >= 0 &&
			right <= (window.innerWidth || document.documentElement.clientWidth) &&
			top >= 0 &&
			bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

	if (
		elementCondition
	) {
		// console.log('element is partially visible');
		return true;
	} else {
		return false;
	}
};




/**
*
*  Secure Hash Algorithm (SHA1)
*  http://www.webtoolkit.info/
*
**/

function SHA1 (msg) {

	function rotate_left(n,s) {
		var t4 = ( n<<s ) | (n>>>(32-s));
		return t4;
	}

	function lsb_hex(val) {
		var str="";
		var i;
		var vh;
		var vl;

		for( i=0; i<=6; i+=2 ) {
			vh = (val>>>(i*4+4))&0x0f;
			vl = (val>>>(i*4))&0x0f;
			str += vh.toString(16) + vl.toString(16);
		}
		return str;
	}

	function cvt_hex(val) {
		var str="";
		var i;
		var v;

		for( i=7; i>=0; i-- ) {
			v = (val>>>(i*4))&0x0f;
			str += v.toString(16);
		}
		return str;
	}


	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	}

	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;

	msg = Utf8Encode(msg);

	var msg_len = msg.length;

	var word_array = new Array();
	for( i=0; i<msg_len-3; i+=4 ) {
		j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
		msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
		word_array.push( j );
	}

	switch( msg_len % 4 ) {
		case 0:
			i = 0x080000000;
		break;
		case 1:
			i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
		break;

		case 2:
			i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
		break;

		case 3:
			i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8	| 0x80;
		break;
	}

	word_array.push( i );

	while( (word_array.length % 16) !== 14 ) word_array.push( 0 );

	word_array.push( msg_len>>>29 );
	word_array.push( (msg_len<<3)&0x0ffffffff );


	for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

		for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
		for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;

		for( i= 0; i<=19; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}

		for( i=20; i<=39; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}

		for( i=40; i<=59; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}

		for( i=60; i<=79; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}

		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;

	}

	temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

	return temp.toLowerCase();

}




hashes = {};
contentWithBounds = [];

function addText(elem){
	// console.log(elem.outerHTML);
	let hash  = SHA1(elem.outerHTML);
	// console.log(hash);
	const text = elem.innerText;
	if (hashes[hash] === undefined) {
		hashes[hash] = true;

		const bounds = elem.getBoundingClientRect();
		contentWithBounds.push({
			elem: elem,
			text: text,
			x1: bounds.x,
			x2: bounds.x + bounds.width,
			y: bounds.y
		});
	}
}

// EXTRACT TEXT
curText="";
for (let i=0; i<contentIframes.length; i++) {
	// does this show the entire extracted text? seems like it shows even more text beyond what's visible. is this the whole chapter?

	// each body has divs
	const curBodyDivs = $(contentIframes[i]).contents().find("body").children();
	for (let j=0; j<curBodyDivs.length; j++) {

		// console.log(curBodyDivs[j]);
		// console.log('paragraph partially in viewport?',isInViewport(contentIframes[i], curBodyDivs[j]));

		// if paragraph is visible
		if (isInViewport(contentIframes[i], curBodyDivs[j]) === true) {

			// console.log(window.innerWidth, window.innerHeight);
			// console.log(contentIframes[i]);
			// console.log(contentIframes[i].getBoundingClientRect());
			// console.log(curBodyDivs[j]);
			// console.log(curBodyDivs[j].getBoundingClientRect());
			// console.log('text-block partially in viewport?',isInViewport(contentIframes[i], curBodyDivs[j]));

			// loop through each sub-div / word
			const subDivs = $(curBodyDivs[j]).find(".k4w");
			// console.log('subDivs:', subDivs);

			// TODO: render bullet points (LIs)

			for (let k=0; k<subDivs.length; k++) {

				// console.log(window.innerWidth, window.innerHeight);
				// console.log(contentIframes[i]);
				// console.log(contentIframes[i].getBoundingClientRect());
				// console.log(subDivs[k]);
				// console.log(subDivs[k].getBoundingClientRect());
				// console.log('partially in viewport?',isInViewport(contentIframes[i], subDivs[k]));

				if (isInViewport(contentIframes[i], subDivs[k], full=true) === true) {

					// console.log(window.innerWidth, window.innerHeight);
					// // console.log(contentIframes[i]);
					// // console.log(contentIframes[i].getBoundingClientRect());
					// console.log(subDivs[k]);
					// console.log(subDivs[k].getBoundingClientRect());
					// console.log('fully in viewport?',isInViewport(contentIframes[i], subDivs[k], full=true));

					addText(subDivs[k]);

				}

			}

		}


	}

}


// console.log(contentWithBounds);


newContent = [];
curWordQueue = [];
// MERGE WORDS BASED ON SPACING (E.G. TO HANDLE SOME PUNCTUATION)
for (let i=0; i<contentWithBounds.length-1; i++) {
	const curWord = contentWithBounds[i];
	const nextWord = contentWithBounds[i+1];

	curWordQueue.push(curWord.text);

	// heuristic: if current word is very close to the next word and on the same line
	if ((nextWord.x1 - curWord.x2) <= 1 && curWord.y >= nextWord.y-5 && curWord.y <= nextWord.y+5) {
		continue;
	} else {
		// current word is "spaced" from next word. wrap up this word
		const newWord = curWordQueue.join('');
		newContent.push(newWord);
		curWordQueue = [];
	}

}
delete contentWithBounds;
// console.log(newContent);




// console.log(content); // an array
// TODO: deal with punctuation
content = newContent.join(" "); // join with space. join with paragraph separators later?
// console.log(content);



chrome.runtime.sendMessage({action: "pushEvent", eventCategory:'read-format', eventAction: 'extract-text', eventLabel: 'kindle-cloud'}, function(response) {
	// console.log('pushEvent response:',response);
});

// send extracted text
chrome.runtime.sendMessage({action: "extractor", html: content }, function(response) {

});





