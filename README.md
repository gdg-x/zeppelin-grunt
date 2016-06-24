Grunt version of Project Zeppelin / GDG DevFest 2014 site template
=============

### About 
Project Zeppelin allows you to setup awesome GDG DevFest site in 5 minutes. 

Grunt version of this project allows you to get easier more optimized site. Several commands will simplify development process. Furthermore, now project supports i18n.

You can find original project [here](https://github.com/gdg-x/zeppelin).

Template is brought by [GDG Lviv](http://lviv.gdg.org.ua/) team.

### Live demo [http://gdg-x.github.io/zeppelin-grunt/](http://gdg-x.github.io/zeppelin-grunt/)

### Features
* Easy to setup
* Simple and responsive design
* Integrated speakers and sessions management
* i18n
* SVG icons
* SEO friendly
* Optimized

### Quick-start guide
1.  [Fork](https://github.com/gdg-x/zeppelin-grunt/fork) this repo
2.  Clone locally
3.  Install [Node.js](www.nodejs.org) and [Ruby](https://www.ruby-lang.org/)
4.  Run `gem install bundler`
5.  Install 'grunt-cli' and 'bower' globally with `npm install -g grunt-cli bower`
6.  `$cd` to the directory and run `bundle install`
7.  Run `npm install` to install the necessary "npm" dependencies
8.  Then run `bower install` to install the front-end dependencies
9.  Edit site variables


In `Gruntfile.js` edit **baseurl** and **git_repo** (destination repository):
```
grunt.initConfig({
        app: {
            source: 'app',
            dist: 'dist',
            baseurl: 'zeppelin-grunt',  // Here
            git_repo: 'git@github.com:gdg-x/zeppelin-grunt.git'  // And here
        },
    ...
```

In `_config.yml` you should also update **baseurl** and **url**:
```
# Site settings
baseurl: "/zeppelin-grunt"  // Here
url: "http://gdg-x.github.io"  // And here
permalink: '/blog/:title'
...
```

**Now you are ready for development**. Following commands are available:

1.  `grunt` (by default it runs `grunt serve`) - build and start your site for **development** (with livereload, js uglifing and sass compilation) 
2.  `grunt serve:dist` - build and start your site with **production** configs (this is how it will look online)
3.  `grunt deploy` - build and deploy your site into a repository you defined in previous steps

#### More documentation you can find [here](https://github.com/gdg-x/zeppelin-grunt/wiki).

### Who is using template?
Going to use template? Go on! The only thing we ask - let us know at [*lviv@gdg.org.ua*](mailto:lviv@gdg.org.ua) so we can include you to this list, or make a pull request.

View [known sites](https://github.com/gdg-x/zeppelin#who-is-using-template) that use the original project.

| [Android Developer Days 2015](http://www.androiddeveloperday.com/2015/) | [droidcon Vienna 2016](https://droidcon.at/) |  |
|-----------------------------|-----------------------------|-----------------------------|
### Used libraries
* [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
* [Animate.css Sass](https://github.com/tgdev/animate-sass)
* [Waves](https://github.com/publicis-indonesia/Waves)
* [jquery.appear](https://github.com/bas2k/jquery.appear)
* [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Sticky-kit](https://github.com/leafo/sticky-kit)

### Contributors
Created by [Oleh Zasadnyy](https://github.com/ozasadnyy), [GDG Lviv](https://plus.google.com/102444623953913144164).

See [list of contributors](https://github.com/gdg-x/zepplin-grunt/graphs/contributors).

Maintainer: [@ozasadnyy](https://github.com/ozasadnyy).

######GDG Apps, GDG[x] are not endorsed and/or supported by Google, the corporation.

### License
Project is published under the [MIT license](https://github.com/ozasadnyy/zeppelin-grunt/blob/master/LICENSE). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
