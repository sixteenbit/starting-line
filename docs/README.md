# Starting Line

> The worst is over

## Features

- Build workflow using [gulp.js](https://gulpjs.com/)
- [Font Awesome](https://fontawesome.com/)

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Getting started

This theme isn't meant to be used _as_ a theme but to be used as a starting point for a new theme.

### Clone the repository into wp-content/themes/awesome-theme

```bash
git clone https://github.com/sixteenbit/starting-line.git awesome-theme
```

### Run yarn to grab all dependencies

```bash
yarn
```

### Update theme name in config.yml

```yaml
# Theme strings used in the `rename` gulp task
THEME:
  ## The current strings in the theme
  CURRENT:
    name: "Starting Line"
    slug: "starting-line"
    prefix: "starting_line_"
    class: "SL_"
  ## The strings to rename in the theme
  NEW:
    name: "Awesome Theme"
    slug: "awesome-theme"
    prefix: "awesome_theme_"
    class: "AT_"
```

### Run the task to rename

```bash
gulp rename:theme
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

### Copy theme to dist folder for production

```bash
gulp release --production
```
