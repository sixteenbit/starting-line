# Starting Line

> The worst is over

## Features

- Build workflow using [gulp.js](https://gulpjs.com/)
- [Font Awesome](https://fontawesome.com/)

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Getting started

This theme isn't meant to be used _as_ a theme but to be used as a starting point for a new theme. Clone it, run `yarn`, change settings in `config.yml` and run `gulp rename:theme` to change the name.

### Clone the repository into wp-content/themes

```bash
git clone https://github.com/sixteenbit/starting-line.git
```

### From the root of wp-content/themes/starting-line run the following:

```bash
yarn
```

## Commands

### Default task to build the project

```bash
gulp
```

### Builds the project

```bash
gulp build
```

### Runs the build task and watches for file changes

```bash
gulp watch
```

### Runs the styles task

```bash
gulp styles
```

### Runs the javascript task

```bash
gulp javascript
```

### Starts Browsersync

```bash
gulp server
```

### Copy theme to release folder for production

```bash
gulp release --production
```
