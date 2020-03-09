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

## Notes

Each FontAwesome icon component was written based off of the `getContent` function of https://github.com/HiYue/vuepress-component-font-awesome/blob/master/index.js, since running that plugin failed to generate the required components.

### Why did I pick VuePress?

I like using static site generators. Jekyll, which is built in Ruby, is more familiar to me. But I've plugged content into Jekyll far more than I've tweaked it&mdash;so I haven't had to touch Ruby much at all. I knew I'd have to heavily modify the theme of whatever SSG I used, so I picked VuePress since I work with JavaScript every day. Plus I heard Vue is lightweight, with a pretty low learning curve. I didn't think I'd be able to figure out WordPress in three days.

All that said, quite a bit of my time on this assessment was spent wrangling VuePress' default theme to get it to do what I wanted. E.g. editing layouts and making nav dropdowns clickable. And even though VuePress has great documentation, it has few official themes, and most of the community themes are for personal blogs.

Gatsby seems to have VuePress's benefits with fewer of its drawbacks. It precedes VuePress by about 3 years, so a lot more relevant learning resources (docs, StackOverflow answers, videos) are available.

If I were to retry this assessment, and build a JS static site generator theme from scratch, I think I would have had a much easier time with Gatsby.