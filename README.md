# Aurelia • [TodoMVC](http://todomvc.com)

> *Aurelia* is a next generation JavaScript client framework that leverages simple conventions to empower your creativity.

## Local Installation

Requirements:

- [NodeJS](http://nodejs.org/download/)
- [jspm](http://jspm.io/)
- [gulp](http://gulpjs.com/)

Clone the repository:

    git clone https://github.com/mhoyer/todomvc-aurelia

Install jspm and npm packages:

    npm install
    jspm install

Simply build, test, bundle, export:

    gulp

Run tests and HTTP-server:

    gulp watch

## Resources

- [Aurelia TodoMVC source](https://github.com/mhoyer/todomvc-aurelia)
- [TodoMVC](https://github.com/tastejs/todomvc) home of all TodoMVC apps
- [Aurelia Website](http://aurelia.io/)
- [Aurelia Documentation](http://aurelia.io/docs.html)
- [Durandal Blog](http://blog.durandal.io/)

### Support

- [Twitter @pixelplastic](http://twitter.com/pixelplastic)
- [Gitter Aurelia/Discuss](https://gitter.im/Aurelia/Discuss)

*Let us [know](https://github.com/tastejs/todomvc/issues) if you discover anything worth sharing.*

## Implementation

- Following the getting started tutorial: http://aurelia.io/get-started.html
- Attempt to go TDD where possible

### Changelog

#### 0.1.1

- Prepared all assets (README, learn.json, index.html, etc) to fulfill the [Contribution Docs](https://github.com/tastejs/todomvc/blob/master/contributing.md)
- Cleaned up obsolete files (```*.src.js```, empty ```css/app.css```
- Fixed #6
- Fixed #7
- Fixed #9

#### 0.1.0

- Finished functional implementation to fulfill [TodoMVC Application Specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
- Includes bundling (jspm) and exporting (for easy sync with [todomvc/examples/aurelia](https://github.com/tastejs/todomvc/tree/master/examples/aurelia))

### Open Questions While Developing

- See [Issues](https://github.com/mhoyer/todomvc-aurelia/issues/)

## Credit

Created by [Marcel Hoyer](http://marcelhoyer.de)
