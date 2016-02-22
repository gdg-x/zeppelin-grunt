'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        buildcontrol: 'grunt-build-control'
        });

    grunt.initConfig({
        app: {
            source: 'app',
            dist: 'dist',
            baseurl: '',
            git_repo: 'git@github.com:gdg-eskisehir/wtm16-grunt.git',
            branch: 'gh-pages'
        },
        watch: {
            sass: {
                files: ['<%= app.source %>/_assets/scss/**/*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer']
            },
            scripts: {
                files: ['<%= app.source %>/_assets/js/**/*'],
                tasks: ['uglify:server']
            },
            jekyll: {
                files: ['<%= app.source %>/**/*.{html,yml,md,mkd,markdown,json,xml}'],
                tasks: ['jekyll:server']
            },
            images: {
                files: ['<%= app.source %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'],
                tasks: ['copy:server']
            }
        },
        browserSync: {
            options: {
                notify: false,
                port: 9000,
                open: true,
                startPath: '/<%= app.baseurl %>'
            },
            server: {
                options: {
                    watchTask: true,
                    injectChanges: true,
                    server: {
                        baseDir: ['.jekyll', '.tmp']
                    }
                },
                src: [
                    '.jekyll/**/*.{css,html,js,json,xml}',
                    '.tmp/**/*.{css,html,js,json,xml}',
                    '<%= app.source %>/**/*.{css,html,js,json,xml}'
                ]
            },
            dist: {
                options: {
                    server: {
                        baseDir: '<%= app.dist %>'
                    }
                },
                src: [
                    '<%= app.dist %>/**/*.{css,html,js,json,xml}',
                    '.tmp/**/*.{css,html,js,json,xml}'
                ]
            }
        },
        clean: {
            server: [
                '.jekyll',
                '.tmp'
            ],
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= app.dist %>/*',
                        '!<%= app.dist %>/.git*'
                    ]
                }]
            }
        },
        jekyll: {
            options: {
                config: '_config.yml,_config.build.yml',
                src: '<%= app.source %>'
            },
            server: {
                options: {
                    config: '_config.yml',
                    dest: '.jekyll/<%= app.baseurl %>'
                }
            },
            dist: {
                options: {
                    dest: '<%= app.dist %>/<%= app.baseurl %>',
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: '**/*.html',
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },
        uglify: {
            server: {
                options: {
                    mangle: false,
                    beautify: true
                },
                files: {
                    '.tmp/<%= app.baseurl %>/js/libraries.js': [
                        'bower_components/sticky-kit/jquery.sticky-kit.js',
                        'bower_components/svg4everybody/svg4everybody.js',
                        'bower_components/typed.js/js/typed.js',
                        'bower_components/waves/dist/waves.js',
                        '<%= app.source %>/_assets/js/vendor/jquery.appear.js',
                        '<%= app.source %>/_assets/js/vendor/jquery.countTo.min.js'
                    ],

                    '.tmp/<%= app.baseurl %>/js/scripts.js': [
                        '<%= app.source %>/_assets/js/scripts.js'
                    ]
                }
            },
            dist: {
                options: {
                    compress: true,
                    preserveComments: false,
                    report: 'min'
                },
                files: {
                    '<%= app.dist %>/<%= app.baseurl %>/js/libraries.js': [
                        'bower_components/sticky-kit/jquery.sticky-kit.js',
                        'bower_components/svg4everybody/svg4everybody.js',
                        'bower_components/typed.js/js/typed.js',
                        'bower_components/waves/dist/waves.js',
                        '<%= app.source %>/_assets/js/vendor/jquery.appear.js',
                        '<%= app.source %>/_assets/js/vendor/jquery.countTo.min.js'
                    ],

                    '<%= app.dist %>/<%= app.baseurl %>/js/scripts.js': [
                        '<%= app.source %>/_assets/js/scripts.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                includePaths: [
                    'bower_components/animate-sass',
                    'bower_components/bootstrap-sass/assets/stylesheets',
                    'bower_components/waves/src/scss'
                ]
            },
            server: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/_assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '.tmp/<%= app.baseurl %>/css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/_assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= app.baseurl %>/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= app.baseurl %>/css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/css',
                    src: '**/*.css',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css'
                }]
            }
        },
        critical: {
            dist: {
                options: {
                    base: './',
                    css: [
                        '<%= app.dist %>/<%= app.baseurl %>/css/main.css'
                    ],
                    minify: true,
                    width: 320,
                    height: 480
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: ['**/*.html'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },
        cssmin: {
            dist: {
                options: {
                    keepSpecialComments: 0,
                    check: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/css',
                    src: ['*.css'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>/css'
                }]
            }
        },
        imagemin: {
            options: {
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/img'
                }]
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {
                        cleanupIDs : false
                    },
                    {
                        collapseGroups: false
                    },
                    {
                        addClassesToSVGElement : false
                    }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
                    src: '**/*.svg',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/img'
                }]
            }
        },
        copy: {
            server: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= app.source %>',
                    src: ['img/**/*'],
                    dest: '.tmp/<%= app.baseurl %>'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/bootstrap-sass/assets/javascripts',
                    src: 'bootstrap.min.js',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/js'
                },
                {
                    expand: true,
                    cwd: 'bower_components/jquery/dist',
                    src: ['jquery.min.js', 'jquery.min.map'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>/js'
                }]
            }
        },
        buildcontrol: {
            dist: {
                options: {
                    dir: '<%= app.dist %>/<%= app.baseurl %>',
                    remote: '<%= app.git_repo %>',
                    branch: '<%= app.branch %>',
                    commit: true,
                    push: true,
                    connectCommits: false
                }
            }
        }
    });

    // Define Tasks
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }

        grunt.task.run([
            'clean:server',
            'jekyll:server',
            'copy:server',
            'sass:server',
            'autoprefixer:server',
            'uglify:server',
            'browserSync:server',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'jekyll:dist',
        'imagemin',
        'svgmin',
        'uglify:dist',
        'sass:dist',
        'autoprefixer:dist',
        'cssmin',
        'critical',
        'copy:dist',
        'htmlmin'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'buildcontrol'
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};
