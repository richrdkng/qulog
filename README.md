Qulog
=====
(Quickly Usable Log)

A fast, simple, UMD, cross-browser way to use console.log during development & testing.

To support this project, you can at [the support page](http://richard-kng.github.io/support/) by supporting the developer.

Getting Started
---------------

__NPM__ ([What is NPM?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-npm) [What is Grunt?](http://gruntjs.com/))

    npm install quicklog --save-dev

__Bower__ ([What is Bower?](http://bower.io/))

    bower install quicklog --save-dev

__Download directly__ __(Do not link this directly on your site, the file sent with a plain/text header and can cause loading problems)__

- [qulog.js](https://raw.githubusercontent.com/richard-kng/qulog/master/lib/qulog.js)

API & Usage
-----------
Aiming the convenience and favours of developers, turning on and off the logging made possible with __toggle-pairs__. The toggle-pairs allow to set on/off logging by the properties and functions below __using boolean__ (true/false) values.

| Property    | Functionality | Example |
| ----------- | ------------- | ------- |
| .on         | turns on/off output to console (true/false) | __turns on__ output to console: quicklog.on = __true__ |
| .off        | turns off/on output to console (true/false) | __turns off__ output to console: quicklog.off = __true__ |
| .debug      | __same as .on__                             | __turns on__ output to console: quicklog.debug = __true__ |
| .production | __same as .off__                            | __turns off__ output to console: quicklog.production = __true__ |

| Function    | Functionality | Example |
| ----------- | ------------- | ------- |
| .setOn(true/false)         | turns on/off output to console | __turns on__ output to console: quicklog.setOn(true) |
| .setOff(true/false)        | turns off/on output to console | __turns off__ output to console: quicklog.setOff(true) |
| .setDebug(true/false)      | __same as .setOn()__           | __turns on__ output to console: quicklog.setDebug(true) |
| .setProduction(true/false) | __same as .setOff()__          | __turns off__ output to console: quicklog.setProduction(true) |

### In Node.js
### In Browser (NPM)
### In Browser (Bower)
### In Browser (Downloaded source)

### Somewhere in the code:
During development & testing:
```javascript
    /* after assigned quicklog to a variable called "log" */

    function testFunctionality() {
        /* This below should appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```

Turn off output to console:
```javascript
    /* after assigned quicklog to variable called "log" */
    
    log.on = false; 

    function testFunctionality() {
        /* This below should NOT appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```

Using other functions for achieving the same functionality (toggle-pairs)
```javascript
    /* after assigned quicklog to variable called "log" */
    
    /* These will turn off output to console
       and they are functionally equivalent */
    log.on = false; 
    /* or */
    log.debug = false;
    /* or */
    log.off = true;
    /* or */
    log.production = true;
    
    function testFunctionality() {
        /* This below should NOT appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
    
    /* To turn on again */
    log.on = true;     
    /* or */
    log.debug = true;
    /* or */
    log.off = false;
    /* or */
    log.production = false;     

    function testFunctionality() {
        /* This below should appear in console */
        log("-> testFunctionality was called");
        /* Do logic afterwards */
    };
```

### In IE8 and lower:
```javascript
    /* after assigned quicklog to variable called "log" */
    
    /* Properties (.on/.off/.debug/.production)
       are not available in IE8 and lower
       Use instead the appropriate functions */
    log.setOn(false);  
    /* or */
    log.setDebug(false);
    /* or */
    log.setOff(true);    
    /* or */
    log.setProduction(true);

    function testFunctionality() {
        /* This below should NOT appear in console */
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
Post any occurring suggestions, useful ideas and requests to the project's issue page under the __suggestion/idea/request__ label by clicking [here](https://github.com/richard-kng/quicklog/labels/suggestion/idea/request).

 - Constructive criticism is encouraged and welcomed by contacting the developer or using GitHub.

Issues/Bugs
-----------
In case of any occurring issues and/or bugs, post on the project's [issues](https://github.com/richard-kng/quicklog/issues) page with appropriate label(s).

Support
-------
If you find this tool useful, you can support this project by supporting the developer [here](http://richard-kng.github.io/support/).

Contribution & A Note
---------------------
In the spirit of open source software development, this project is always open to and encourages community code contribution. To get started, just run through the source file, check the comments and general coding style and start to contribute.

- In case you find this tool useful, [support it](http://richard-kng.github.io/support/) by supporting the developer, follow the developer on [social platforms](https://gratipay.com/richard_kng/) or send an email to the developer.

License
-------
Copyright (c) 2014 "Richard KnG" Richárd Szakács. __Licensed under the MIT license__.

The license mentioned above applies to all parts of this software except as
documented below

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses. We recommend you read them, as their terms may differ from
the terms above.