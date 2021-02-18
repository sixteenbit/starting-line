# Starting Line

> The worst is over

![Starting Line](screenshot.png)

## Features

- Build workflow using [gulp.js](https://gulpjs.com/)
- [Font Awesome](https://fontawesome.com/)

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Getting started

This theme isn't meant to be used _as_ a theme but to be used as a starting point for a new theme. Clone it, run `yarn`, change settings in `config.yml` and run `gulp rename:theme` to change the name.

```bash
# Clone the repository into wp-content/themes
git clone https://github.com/sixteenbit/starting-line.git
```

```bash
# From the root of wp-content/themes/starting-line run the following:
yarn
```

## Commands

```bash
# Removes the release dir and builds the project
gulp

# Builds the project
gulp build

# Runs the build task and watches for file changes
gulp watch

# Runs the styles task
gulp styles

# Runs the javascript task
gulp javascript

# Starts Browsersync
gulp server

# Copy theme to release folder for production
gulp release --production
```
