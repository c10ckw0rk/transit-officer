// Karma configuration
// Generated on Tue Dec 20 2016 14:01:43 GMT+1100 (AEDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        preprocessors: {
            'lib/*.js': ['babel'],
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline',
                plugins: ['transform-es2015-modules-umd']
            }
        },


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // helper libraries
            'https://code.jquery.com/jquery-2.2.0.min.js',
            //actual code
            'lib/*.js',

            'test/*.test.js',

            {pattern: 'test/mocks/*.js', served: true, included: false, watched: false},
            {pattern: 'test/mocks/*.css', served: true, included: false, watched: false},
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'verbose'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        client: {
            captureConsole: true
        }
    });
};
