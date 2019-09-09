# [blog.klair.co](https://blog.klair.co/)

My personal blog. Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RyanFitzgerald/devblog)

## Features
* Fully responsive
* Minimalistic
* Easy to deploy
* Statically-generated via markdown files
* Server-side rendering

## Setup and Configuration

### Setup

#### 1. Install Gatsby CLI

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.

## Creating New Posts

All blog posts can be found in ```/src/pages``` and are statically built once the ```yarn build``` command is run. To create a new post, simply create a new folder in ```/src/pages``` with the name of the url you'd like to have. For example, if you wish to have the url appear as ```myblog.com/hello-world``` you would create the folder as ```hello-world```. Once the folder is created, simply create an ```index.md``` file within it.

The top of the pages must all contain the same markdown which tells Gatsby the needed information about the specific post. The basic template is:

```markdown
---
title: New Beginnings
date: "2018-07-01"
featuredImage: './featured.jpg'
spoiler: A little tag line
---

This top portion is the content of the article.

```

## License

Licensed under MIT License. See [LICENSE.md](LICENSE.md) for more.
