# grunt-example

An example client-side project setup with Grunt for running build tasks. Uses Sass, jshint, and Jasmine.

## Project Structure

```
/
... build/
... src/
...... style/
...... js/
... test/
... .jshintrc
... Gruntfile.js
... index.html
... package.json
```

* `build/` - Output directory for compiles CSS and JS files
* `src/` - Directory for Sass and JS source files
* `test/` - Directory for JS unit tests
* `.jshintrc` - Contains jshint settings
* `Gruntfile.js` - Contains grunt tasks
* `index.html` - Mail file for the demo app
* `package.json` - Contains package info and dependencies

## Grunt Tasks

* `grunt` or `grunt dev` - Run all build tasks and watch for changes
* `grunt build` - Compile Sass, minify and concat CSS and JS files
* `grunt serve` - Run app in local web server at http://localhost:8000/ 

