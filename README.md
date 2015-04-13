# grunt-example

An example client-side project setup with Grunt for running build tasks. Uses AngularJS, Sass, jshint, Bower, and Karma, among other things.

Includes a hastily thrown together To-do List app for demonstration purposes.

## Project Structure

```
/
... build/
... src/
...... style/
...... js/
...... vendor/
... test/
... .bowerrc
... .jshintrc
... Gruntfile.js
... index.html
... karma.conf.js
... package.json
```

* `build/` - Output directory for compiles CSS and JS files
* `src/` - Directory for Sass and JS source files
    * `style/` - Sass source files
    * `js/` - JavaScript source files
    * `vendor/` - Directory for libraries installed through bower
* `test/` - Directory for JS unit tests
* `.bowerrc` - Config file for Bower
* `.jshintrc` - Contains jshint settings
* `Gruntfile.js` - Contains grunt tasks
* `index.html` - Main file for the demo app
* `karma.conf.js` - Config file for karma test runner
* `package.json` - Contains package info and dependencies

## Grunt Tasks

* `grunt` or `grunt dev` - Run all build tasks and watch for changes
* `grunt build` - Compile Sass, copy Angular views, minify and concat CSS and JS files
* `grunt serve` - Run app in local web server at http://localhost:8000/ 
