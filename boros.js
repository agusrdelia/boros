/*!
 * Boros.js
 * https://github.com/agusrdelia/boros
 *
 * Copyright 2012, @agusrdelia
 * Released under the MIT license
 */
;(function(window, userAgent){
	var BOROS = BOROS || {};
	BOROS.start = function(myUserAgent){
		var ua = (myUserAgent || userAgent).toLowerCase(),
			OS,
			OSversion,
			browser,
			browserVersion,
			isDevice = false;
			objRegExp = RegExp,
			html = document.documentElement,
			is = function( test ){
				return ua.indexOf( test ) > -1;
			},
			test = function(rExp, twoVersions, changeToDot){
				return (rExp).test(ua) ?
					(twoVersions ? objRegExp.$2 :  changeToDot ? objRegExp.$1.replace(/\./g, '_') : objRegExp.$1)
					: 'no-detected'
			};
		is('dows nt')? 
			(OS = 'os-win',OSversion = is('nt 6.2') ? '8' :	is('nt 6.1') ? '7' : is('nt 6.0')? 'vista' : is('nt 5.2')? 'xp64' : is('nt 5.1')? 'xp' : 'os-win-old')	
			:
			is('dows phone') ?
				(isDevice = true,OS = "os-win-phone",OSversion = test(/phone os ((\d)(\.?)(\d?))/, false, true))
				:
				is('android') ?
					(isDevice = true,OS = "os-android",OSversion = test(/android ((\d)(\.?)(\d?)(\.?)(\d?))/, false, true))
					:
					is('ipod') ?
						(isDevice = true,OS = "ios-ipod",OSversion = test(/os ((\d)(\_?)(\d?)(\_?)(\d?))/))
						:
						is('iphone') ?
							(isDevice = true,OS = "ios-iphone",OSversion = test(/os ((\d)(\_?)(\d?)(\_?)(\d?))/))
							:
							is('ipad') ? 
								(isDevice = true,OS = "ios-ipad",OSversion = test(/os ((\d)(\_?)(\d?)(\_?)(\d?))/))
								:
								is('macintosh') ?
									(OS = "mac-osx",OSversion = test(/os x ((\d)(\_?)(\d?)(\_?)(\d?))/))
									:
									is('linux') ?
										(OS = "os-lin", OSversion = "no-detected")
										: 
										is('bb10') || is('blackberry')?
											(isDevice = true,OS = 'os-bb',OSversion = test(/version\/((\d\d?)(\.?)(\d?))/, false, true))
											:
											is('playbook')?
												(isDevice = true,OS = 'os-bb-playbook',OSversion = test(/version\/((\d\d?)(\.?)(\d?))/, false, true))
											:	
											(OS = OSversion = "no-detected")
		is('opera') ?
			(browser = 'nav-op',browserVersion = test(/(version\/|opera )(\d\d?)/, true, true))
			:
			is('firefox/') ? 
				(browser = 'nav-ff',browserVersion = test(/firefox\/((\d)(\.?)(\d?))/, false, true))
				:			
				is('chrome/') ?
					(browser = 'nav-ch',browserVersion = test(/chrome\/((\d)(\.?)(\d?))/, false, true))
					:
					is('msie') ?
						(browser = 'nav-ie',browserVersion = test(/msie (\d\d?)/))
						:
						is('safari') ?
						(browser = 'nav-sa',browserVersion = test(/version\/((\d)(\.?)(\d?))/, false, true))
						:
						(browser = browserVersion = "no-detected")
		html.className += ' ' + OS + ' os-v-' + OSversion + ' ' + browser + ' nav-v-' + browserVersion + ' ' + (isDevice? 'isDevice' : 'noDevice');			
		return BOROS.data = {
			'OS' : OS,
			'OSversion' : OSversion,
			'Browser': browser,
			'BrowserVersion' : browserVersion,
			'isDevice': isDevice
		}
	};
	BOROS.start(userAgent);	
	window.BOROS = BOROS;
})(window, navigator.userAgent);