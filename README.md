# vue-connextcms-site-template

> A Vue.js based site template for ConnextCMS

This repository was generated from the [vuejs-template/webpack](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) template.
It generates a Vue.js SPA [site template](https://github.com/skagitpublishing/site-template-connextcms) for
[ConnextCMS](http://connextcms.com/) based on the [AdminLTE](https://almsaeedstudio.com/) dashboard.
It borrows inspiration from the [CoPilot](https://github.com/misterGF/CoPilot) project, but is not associated with it.

AdminLTE is an *awesome* Bootstrap-based dashboard. This repository packages the basic AdminLTE dashboard inside several
Vue.js components and then further processes the build output so that it's ready to copy to an installation of ConnextCMS as a site template.
ConnextCMS/KeystoneJS can be used to serve and manage the content of your site, and the Vue.js app is available at the
path `/appdashboard`. Each part (ConnextCMS and the Vue.js SPA) runs independently. This project is intended to speed 
up development for people who need a CMS to easily manage website content and also need an area of the site
set aside for a sophisticated, modern single page application (SPA) using Vue.js.

The Vue.js components in the site template are composed of the following:
* LeftMenu.vue
* ActiveView.vue
* contentHeader.vue
* activeContent.vue
* views/dashboard.vue

They are arranged in the browser as illustrated in [this Wire Frame](https://wireframe.cc/njHhlF):
![vue component layout](component-layout.jpg?raw=true "vue component layout")

## Build Setup
For detailed explanation on how the build commands work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build as a site template for ConnextCMS
npm run connextcms

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Installation
Follow the instructions below to generate a ConnextCMS site template and serve your new site template through ConnextCMS.
It is assumed you are building on server running Ubuntu Linux.

1. Install [docker-connextcms](https://github.com/skagitpublishing/docker-connextcms). The scripts in this repository
assume that the `docker-connextcms` directory is installed in your non-root user home directory, e.g. `~`

2. Install Node.js and NPM on your machine. [This tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
shows how to install it on a Digital Ocean Droplet. The code in this repository has been tested against Node v6.x LTS.

3. After cloning this repository, run `npm install` to install dependencies and then `npm run connextcms` to build
the ConnextCMS site template. 

4. Generate your site template by running the following script:
`./generateSiteTemplate`

5. Copy the site template into the `docker-connextcms/theme` directory by running the following script:
`./uploadToConnextCMS`

6. If the ConnextCMS docker container is running, bring it down by chaning directory into `~/docker-connextcms` and
running the command `docker-compose down`. After that completes, bring it back up with `docker-compose up -d`. ConnextCMS
will boot. The standard site template is available at port 3000. The Vue app is available at path `/appdashboard`. To
bring it up in a webbrowser navigate to `http://xxx.xxx.xxx.xxx:3000/appdashboard`. Replace the x's with the IP
address of your server.


