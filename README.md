# NYC Planning Digital Style Guide

NYC Planning's Digital Style Guide defines standards for the creation, formatting, and design of our digital products. These best practices and UI patterns ensure consistency both within specific applications, and throughout our products and services.

## Built on Foundation

This style guide is built upon [Foundation for Sites](http://foundation.zurb.com/sites). This repo is forked from the ZURB Template and has a Gulp-powered build system with the following features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Requirements

- [NodeJS](https://nodejs.org/en/) **version listed in .nvmrc** 
- [Git](https://git-scm.com/)


## Local Development

- Clone this repository: `git clone git@github.com:NYCPlanning/nyc-planning-style-guide.git`
- Navigate to the directory: `cd nyc-planning-style-guide`
- Install dependencies: `yarn`
- `yarn start` to run Gulp
- The site will be compiled in `dist` and viewable at `http://localhost:8000`
- To create compressed, production-ready assets, run `yarn run build`

## Publishing / Deploying

Before deploying the docs, a new release should be created and published via npm (unless deploying changes that only affect the docs).

- Bump the version number in `src/data/release.json`
- Bump the version number in `package.json`
- Run `npm publish` — a prepublish script is run on npmjs.com, which makes CDN files available at [unpkg.com/browse/nyc-planning-style-guide/](https://unpkg.com/browse/nyc-planning-style-guide/)

Docs deployment is handled through Netlify, which serves the `dist` directory. To deploy to [nyc-planning-style-guide.netlify.com](https://nyc-planning-style-guide.netlify.com/), simply push changes to the `master` branch.
