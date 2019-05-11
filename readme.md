# NYC Planning Labs Foundation

Boilerplate [Foundation for Sites](http://foundation.zurb.com/sites) styles for Planning Labs websites and applications.

Forked from the official ZURB Template, it has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.


### Local Development

Clone this repository:

```bash
git clone git@github.com:NYCPlanning/labs-foundation.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd labs-foundation
yarn
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.
