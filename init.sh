#!/bin/bash

# remove directories
rm -rf bower_components node_modules build

# install node modules (e.g., bower, grunt-cli)
npm install

# install bower dependencies
bower install

# copy bower dependencies into source directory
grunt bowercopy