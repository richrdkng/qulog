Qulog [![Build Status](https://travis-ci.org/richard-kng/qulog.svg?branch=master)](https://travis-ci.org/richard-kng/qulog)
=====
(Quickly Usable Log) ["que-log"]

__A fast, simple, UMD, cross-browser way to use console.log during development & testing.__

To support this project, you can at [the support page](http://richard-kng.github.io/support/) by supporting the developer.

Getting Started
---------------

__NPM__ ([What is NPM?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-npm) [What is Grunt?](http://gruntjs.com/))

    npm install qulog --save-dev

__Bower__ ([What is Bower?](http://bower.io/))

    bower install qulog --save-dev

__Download directly__ __(Do not link this directly on your site, the file is sent with a plain/text header and can cause loading problems)__

- [qulog.js](https://raw.githubusercontent.com/richard-kng/qulog/master/lib/qulog.js)

API & Usage
-----------
Aiming the convenience and favours of developers, turning on and off the logging made possible with __toggle-pairs__. The toggle-pairs allow to set on/off logging by the properties and functions below __using boolean__ (true/false) values.

| Property    | Functionality | Example |
| ----------- | ------------- | ------- |
| .on         | turns __on__ or __off__ output to console (true/false) | qulog.on = __true__ __OR__ qulog.on = __false__ |
| .off        | turns __off__ or __on__ output to console (true/false) | qulog.off = __true__ __OR__ qulog.off = __false__ |
| .debug      | __same as .on__                                        | qulog.debug = __true__ __OR__ qulog.debug = __false__ |
| .production | __same as .off__                                       | qulog.production = __true__ __OR__ qulog.production = __false__ |

| Function    | Functionality | Example |
| ----------- | ------------- | ------- |
| .setOn(true/false)         | turns __on__ or __off__ output to console (true/false) | qulog.setOn(true) __OR__ qulog.setOn(false) |
| .setOff(true/false)        | turns __off__ or __on__ output to console (true/false) | qulog.setOff(true) __OR__ qulog.setOff(false) |
| .setDebug(true/false)      | __same as .setOn()__                                   | qulog.setDebug(true) __OR__ qulog.setDebug(false) |
| .setProduction(true/false) | __same as .setOff()__                                  | qulog.setProduction(true) __OR__ qulog.setProduction(false) |

By default, qulog is __turned on__. (qulog.on === __true__)

__In Node.js__
```javascript
    var qulog = require("./node_modules/qulog");
```
__In Browser (NPM)__
```html
    <script src="node_modules/qulog/qulog.js"></script>
```
__In Browser (Bower)__
```html
    <script src="bower_components/qulog/qulog.js"></script>
```
__In Browser (Require.js)__
```html
    <script>
        require(["scripts/qulog"], function(qulog) {
                /* qulog is accessible from now on */
        });
    </script>
```
__In Browser (Directly downloaded source)__
```html
    <script src="scripts/qulog.js"></script>
```
In the code:
----------------------
__During development & testing:__
```javascript
    /* after assigned qulog to a variable called "log" */
    function testFunctionality() {
        /* This below should appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```
__Turn off output to console:__
```javascript
    /* after assigned qulog to variable called "log" */
    log.on = false; 

    function testFunctionality() {
        /* This below SHOULD NOT appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```
__Using other functions for achieving the same functionality (toggle-pairs)__
```javascript
    /* after assigned qulog to variable called "log" */

    /* These will turn off output to console
       and they are functionally equivalent, toggle-pairs */
    log.on = false; /* or */ log.debug = false;
    /* or */
    log.off = true; /* or */ log.production = true;
    
    function testFunctionality() {
        /* This below SHOULD NOT appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
    
    /* To turn on output to console again */
    log.on = true; /* or */ log.debug = true;
    /* or */
    log.off = false; /* or */ log.production = false;

    function testFunctionality() {
        /* This below should appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```
__In Internet Explorer 8 and Below:__
```javascript
    /* after assigned qulog to variable called "log" */
    
    /* Properties (.on/.off/.debug/.production)
       are not available in IE8 and lower
       Use instead the appropriate functions */
    log.setOn(false); /* or */ log.setDebug(false);
    /* or */
    log.setOff(true); /* or */ log.setProduction(true);

    function testFunctionality() {
        /* This below SHOULD NOT appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```

Internet Explorer 8 and Below
-----------------------------
As this tool is intended to use with and tested too with IE9+ and with modern browsers, although works well with IE8, it is not recommended to use with IE8 or lower.

 - __use setOn/setOff and setDebug/setProduction instead of .on/.off/.debug/.production properties__ ([IE8 properties issue](http://stackoverflow.com/questions/21175290/object-defineproperty-alternative-for-ie8))
 - __jasmine tests in IE8 or lower will fail__

Suggestions, Ideas & Requests
-----------------------------
Post any occurring suggestions, useful ideas and requests to the project's issue page under the __suggestion/idea/request__ label by clicking [here](https://github.com/richard-kng/qulog/labels/suggestion/idea/request).

 - Constructive criticism is encouraged and welcomed by contacting the developer or using GitHub.

Issues/Bugs
-----------
In case of any occurring issues and/or bugs, post on the project's [issues](https://github.com/richard-kng/qulog/issues) page with appropriate label(s).

Support
-------
If you find this tool useful, you can support this project by supporting the developer [here](http://richard-kng.github.io/support/).

Contribution & A Note
---------------------
In the spirit of open source software development, this project is always open to and encourages community code contribution. To get started, just run through the source file, check the comments and general coding style and start to contribute.

- In case you find this tool useful, [support it](http://richard-kng.github.io/support/) by supporting the developer, follow the developer on [social platforms](http://richard-kng.github.io/support/#social) or send an email to the developer.

License
-------
Copyright (c) 2014 "Richard KnG" Richárd Szakács. __Licensed under the MIT license__.

The license mentioned above applies to all parts of this software except as
documented below

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses. We recommend you read them, as their terms may differ from
the terms above.