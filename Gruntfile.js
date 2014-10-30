"use strict";
module.exports = function(grunt) {
    var licenseMainLine
            = "Quicklog <%= pkg.version %> Copyright (c) 2014 \"Richard KnG\" Richárd Szakács",
        licenseItselfLine
            = "Licensed under the MIT license.",
        licenseForDetailsLine
            = "see: <%= pkg.homepage %> for details";

    var bannerProductionNormal = "/*" + "\n"
        + " " +  licenseMainLine + "\n"
        + " " +  licenseItselfLine + "\n"
        + " " +  licenseForDetailsLine + "\n"
        + "*/",

        bannerProductionMinimized = "/* "
            + licenseMainLine + " | "
            + licenseItselfLine + " | "
            + licenseForDetailsLine
            + " */";

    var licenseBanner = "/*" + "\n"
        + " <%= pkg.name %> <%= pkg.version %> Copyright (c) 2014 \"Richard KnG\" Richárd Szakács" + "\n"
        + " Licensed under the MIT license." + "\n"
        + " see: <%= pkg.homepage %> for details" + "\n"
        + "*/";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            src: ["src/<%= pkg.name %>.js"]
        },
        clean: [
            "lib/<%= pkg.name %>.js",
            "lib/<%= pkg.name %>.min.js"
        ],
        uglify: {
            dist: {
                files: {"lib/<%= pkg.name %>.min.js": ["src/<%= pkg.name %>.js"]}
            }
        },
        copy: {
            main: {
                src: "src/<%= pkg.name %>.js",
                dest: 'lib/<%= pkg.name %>.js'
            }
        },
        usebanner: {
            normal: {
              options: {
                position: 'top',
                banner: bannerProductionNormal,
                linebreak: true
              },
              files: {
                src: "lib/<%= pkg.name %>.js"
              }
            },
            minimized: {
              options: {
                position: 'top',
                banner: bannerProductionMinimized,
                linebreak: true
              },
              files: {
                src: "lib/<%= pkg.name %>.min.js"
              }
            }
        },

        // Tests
        jasmine_node: {
            specNameMatcher: 'spec',
            projectRoot: 'test/spec/'
        },
        jasmine: {
            browserGlobal: {
                src: ["src/<%= pkg.name %>.js"],
                options: {
                    specs: 'test/spec/**/*.spec.js'
                }
            },
            browserAMD: {
                src: ["src/<%= pkg.name %>.js"],
                options: {
                    specs: 'test/spec/**/*.spec.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');

    // For tests
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask("build", ["jshint", "clean", "uglify", "copy", "usebanner"]);
    grunt.registerTask("default", ["jshint", "jasmine_node", "jasmine"]);
};