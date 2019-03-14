# enfold-child-starter

## Description

A simple Enfold child theme starter kit for WordPress Enfold theme by Kreisi (https://kriesi.at/themes/enfold-overview/) builded with Gulp, SASS, and js/sass lint for better coding
#### Start by running `git clone https://github.com/rsinko/enfold-child-starter.git`

## How to Run
1. Make sure you have installed [gulp-cli](https://gulpjs.com/), and [Yarn](https://yarnpkg.com) if you like to install your develop dependencies faster.
1. on *root* folder run `npm install` or `yarn install`.
1. Run `gulp`.
1. Start coding.

## Purpose

This project is trying to give you a quick starter pack for your next Enfold Theme based WordPress  page focused on good FrontEnd practices without taking away the simplicity.\
The following libraries have been curated to get the best from *npm*

## Develop Tools

* [Gulp](https://gulpjs.com/)
* [SASS](http://sass-lang.com/)
* [Yarn](https://yarnpkg.com)
* ES6 thanks to [Babel](https://babeljs.io/)
* [browser-sync](https://browsersync.io/)
* [imagemin](https://github.com/sindresorhus/gulp-imagemin)
* [stylelint](https://github.com/stylelint/stylelint)
* [jshint](http://jshint.com/)
* Run pre-commits for linting with [Husky](https://github.com/typicode/husky)

## Project Workflow

All the development files are located in `src/` folder, please do not modify  any *css* or *js* from the *enfold-child* folder, it will be overwritten.

> When committing, a wild pre-commit will spawn and will check all your *js*, *sass* code quality, so you may need to install *jshint* client `npm install -g jshint`.

