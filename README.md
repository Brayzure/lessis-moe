# lessis.moe v0.3.1
## Repo for my personal site

Yeah, I chose the domain because I liked the wordplay.

### Stack
- [Node.js](https://nodejs.org/) - Web Server
- [EJS](http://ejs.co/) - Render Engine
- [Myth](http://www.myth.io/) - CSS Preprocessor

### Installation

`npm install` - Installs all packages

`npm run style` - Builds the stylesheet using Myth. If it fails due to an error related to
the `clone-component` module, then run `npm install -g segmentio/myth#pull/143/head` which
will install the version that has support for Node v6.

### Running

`node web.js`

Then open `localhost` in your browser

### Notes

~~Not public yet. Will be implemented once complete.~~ Site is now live at [lessis.moe](http://lessis.moe/).

Still very much in-dev. For example, the `/api` endpoints are not yet implemented, 
since this is a complete rewrite of an existing site. In addition, the CSS and
overall color scheme are in flux.
