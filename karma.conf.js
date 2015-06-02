// Karma configuration
// Generated on Tue Oct 08 2013 10:05:46 GMT-0600 (MDT)

module.exports = function(config) {
    config.set({

	// base path, that will be used to resolve files and exclude
	basePath: '',


	// frameworks to use
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [
            'public/js/lib/jquery.js',
            'public/js/lib/angular.js',
            'public/js/**/*.js',
            'test/lib/**/*.js',
            'test/**/*Spec.js'
	],


	// list of files to exclude
	exclude: [

	],


	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	reporters: ['progress'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,


	// If browser does not capture in given timeout [ms], kill it
	captureTimeout: 60000,


	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun: true,

	// global config of your BrowserStack account
	browserStack: {
	    username: 'BROWSERSTACK_USERNAME',
	    accessKey: 'BROWSERSTACK_KEY',
	    build: 'jasmine-karma-browserstack-launcher-example',
	    project: 'karma-tests'
	},

	// define browsers
	customLaunchers: {
	    bs_firefox_lion: {
		base: 'BrowserStack',
		browser: 'firefox',
		browser_version: '38.0',
		os: 'OS X',
		os_version: 'Mountain Lion'
	    },
	    bs_chrome_mav: {
		base: 'BrowserStack',
		browser: 'chrome',
		browser_version: '43.0',
		os: 'OS X',
		os_version: 'Mavericks'
	    },
	    bs_firefox_mav: {
		base: 'BrowserStack',
		browser: 'firefox',
		browser_version: '38.0',
		os: 'OS X',
		os_version: 'Mavericks'
	    },
	    bs_safari_yos: {
		base: 'BrowserStack',
		browser: 'safari',
		browser_version: '8.0',
		os: 'OS X',
		os_version: 'Yosemite'
	    },
	    bs_chrome_ml: {
		base: 'BrowserStack',
		browser: 'chrome',
		browser_version: '43.0',
		os: 'OS X',
		os_version: 'Mountain Lion'
	    },
	    bs_chrome_win7: {
		base: 'BrowserStack',
		browser: 'chrome',
		browser_version: '43.0',
		os: 'Windows',
		os_version: '7'
	    },
	    bs_ie_win7: {
		base: 'BrowserStack',
		browser: 'ie',
		browser_version: '9.0',
		os: 'Windows',
		os_version: '7'
	    },
	    bs_ie_win8: {
		base: 'BrowserStack',
		browser: 'ie',
		browser_version: '10.0',
		os: 'Windows',
		os_version: '8'
	    },
	    bs_firefox_win10: {
		base: 'BrowserStack',
		browser: 'firefox',
		browser_version: '37.0',
		os: 'Windows',
		os_version: '10'
	    },

	    bs_iphone5: {
		base: 'BrowserStack',
		device: 'iPhone 5',
		os: 'ios',
		os_version: '6.0'
	    }
	},

	browsers: ['bs_firefox_lion', 'bs_chrome_mav', 'bs_firefox_mav', 'bs_safari_yos', 'bs_chrome_ml', 'bs_chrome_win7', 'bs_ie_win7', 'bs_ie_win8', 'bs_firefox_win10', 'bs_iphone5'],

 	plugins: [
	    'karma-chrome-launcher',
	    'karma-jasmine',
	    'karma-browserstack-launcher'
	]

    });
};
