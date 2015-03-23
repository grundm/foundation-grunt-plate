# Foundation Grunt Boilerplate

This template is a launch pad for responsive websites. It fulfills the following requirements:
* [Foundation](http://foundation.zurb.com) as [Bower](http://bower.io) dependency to facilitate updates 
* [Grunt](http://gruntjs.com) to handle the build process
    * compile SASS to CSS ([grunt-contrib-sass](https://www.npmjs.com/package/grunt-contrib-sass))
    * minify JS ([grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify))
    * assemble HTML snippets into layouts ([assemble](https://www.npmjs.com/package/assemble))
    * watch changes and livereload ([grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch), [grunt-contrib-connect](https://www.npmjs.com/package/grunt-contrib-connect))
    

## Prerequisites

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com) (comes with Node.js)

### Updating

#### Node.js
```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
(see http://davidwalsh.name/upgrade-nodejs)

#### npm
```bash
sudo npm install -g npm
```

## Installation

```bash
sudo ./init.sh
```
* installs Node modules (e.g., [grunt-cli](http://gruntjs.com), [bower](http://bower.io), ...)
* installs Bower dependencies and copies the relevant ones to src/

## Usage

* `grunt dev` - makes a build and starts a livereload server (http://localhost:4000)
* `grunt prod` - makes a production ready build (minifies JS & CSS)
* edit "package.json" or "bower.json" if you want to update Node modules or the Foundation version and run then `sudo ./init.sh`

## Settings

* Google Analytics - Within 'src/data/data.json' you can define the tracking ID
* Add additional variables in data.json (e.g., phone numbers as `"office_phone": "1234"`) to reuse them easily within the HTML snippets `{{office_number}}`, see http://assemble.io/docs/Data.htm