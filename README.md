# eStreet.co Web Developer Assessment

Author: Andrew Aquino

## Purpose

> ...we would like you to build a site for http://cindylerner.com/ that is far more in line with the architecture, build, beauty and style as this website https://www.cheribustos.com. We would like to see the product ... built on the web so we can click and navigate

## Description

My new site for Cindy Lerner is built using a static site generator called VuePress. Each page's content is written as a Markdown file, which is then pre-rendered in a fast single-page application.

## How to view the site

~~Clone this repository and open docs/.vuepress/dist/index.html in a web browser.~~

Loading the built site's CSS/JS using file protocol (above) doesn't work, so...

### Simplest approach

Open this link, which is built off of this repository: https://condescending-yonath-54eebc.netlify.com/

### To see the built site yourself

1. Clone this repository.
2. Navigate to the repository path + `docs/.vuepress/dist/` in your terminal.
3. Run your favorite local webserver, e.g.
```sh
python3 -m http.server
```

```sh
python -m SimpleHTTPServer
```
4. Open http://localhost:8000 (or whatever port your webserver uses) in a web browser.

### To build the site yourself

1. Clone this repository.
2. Navigate to the repository path in your terminal.
3. Run `npm install`
4. Run `vuepress dev docs`
5. Open http://0.0.0.0:8080 in a web browser. This is a live development environment, so the site will reload as you save files.