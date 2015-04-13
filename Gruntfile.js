module.exports = function(grunt) {

  'use strict';

  // Loads all grunt tasks from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Variables
    srcRoot:        'src/',
    testRoot:       'test/',
    buildRoot:      'build/',
    scssPath:       '<%= srcRoot %>style/',
    scssFile:       '<%= scssPath %><%= pkg.name %>.scss',
    scssIncludes:   '<%= scssPath %>**/*.scss',
    jsPath:         '<%= srcRoot %>js/',
    jsFiles:        '<%= jsPath %>**/*.js',
    viewFiles:      '<%= jsPath %>**/*.html',
    specPath:       '<%= testRoot %>spec/',
    specFiles:      '<%= specPath %>**/*-spec.js',
    distPath:       '<%= buildRoot %>dist/',
    distCSSFile:    '<%= distPath %><%= pkg.name %>.css',
    distCSSMinFile: '<%= distPath %><%= pkg.name %>.min.css',
    distJSFile:     '<%= distPath %><%= pkg.name %>.js',
    distJSMinFile:  '<%= distPath %><%= pkg.name %>.min.js',
    distJSMapFile:  '<%= distPath %><%= pkg.name %>.min.map',
    distViewFiles:  '<%= distPath %>/views/',

    // Compile Sass to CSS - https://github.com/sindresorhus/grunt-sass
    sass: {
      target: {
        files: {
          '<%= distCSSFile %>': '<%= scssFile %>' 
        }
      }
    },

    // Minify CSS - https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %>.min.css, v<%= pkg.version %>, minified <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      target: {
        files: {
          '<%= distCSSMinFile %>': ['<%= distCSSFile %>']
        }
      }
    },

    // Minify JS - https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>.min.js, v<%= pkg.version %>, minified <%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: true
      },
      min: {
        files: {
            '<%= distJSMinFile %>': ['<%= jsFiles %>']
        }
      }
    },

    // Run a local web server - https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          base: './',
          hostname: '*',
          open: {
            target: 'http://localhost:8000'
          }
        }
      }
    },

    // Watch for changes in CSS/JS files - https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      scss: {
        files: ['<%= scssFile %>', '<%= scssIncludes %>'],
        tasks: ['sass', 'cssmin']
      },
      scripts: {
        files: ['<%= jsFiles %>', '<%= specFiles %>'],
        tasks: ['jshint', 'uglify', 'karma']
      },
      views: {
        files: ['<%= viewFiles %>'],
        tasks: ['copy']
      }
    },

    // Run jshint against JavaScript files - https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      jshintrc: '.jshintrc',
      files: ['Gruntfile.js', '<%= jsFiles %>']
    },

    // Unit test runner - https://github.com/karma-runner/grunt-karma
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        runnerPort: 8001
      }
    },

    // Copy files (i.e. Angular templates) - https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      angular: {
        files: [ {src: '<%= viewFiles %>', dest: '<%= distViewFiles %>', flatten: true, expand: true} ]
      }
    }
  });

  grunt.registerTask('build',     ['sass', 'cssmin', 'copy', 'jshint', 'uglify', 'karma']);
  grunt.registerTask('dev',       ['build', 'watch']);
  grunt.registerTask('serve',     ['connect']);
  grunt.registerTask('default',   ['dev']);

};
