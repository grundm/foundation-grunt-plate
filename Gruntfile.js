module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // clean build directory
        clean: ['build'],

        
        // assemble sites
        assemble: {
            options: {
                data: 'src/data/*.json',
                assets: 'build',
                layoutdir: 'src/html/layouts',
                partials: ['src/html/partials/**/*.hbs'],
                flatten: true
            },
            dev: {
                options: {
                    production: false,
                    layout: 'default.hbs'
                },
                src: ['src/html/*.hbs'],
                dest: 'build'
            },
            production: {
                options: {
                    production: true,
                    layout: 'default.hbs'
                },
                src: ['src/html/*.hbs'],
                dest: 'build'
            }
            
        },

        
        // concat js files
        concat: {
            options: { separator: ';' },

            vendor: {
                src: [
                    'src/js/vendor/jquery.js',
                    'src/js/vendor/fastclick.js',
                    'src/js/vendor/foundation.js'
                ],
                dest: 'build/js/vendor.js'
            },

            app: {
                src: 'src/js/app.js',
                dest: 'build/js/app.js'
            }
        },

        
        // uglify js files
        uglify: {
            production: {
                files: [{
                    expand: true,
                    cwd: 'build/js',
                    src: '**/*.js',
                    dest: 'build/js',
                    ext: '.min.js'
                }]
            }
        },

        
        // compile sass files
        sass: {
            dev: {
                options: {},
                files: {
                    'build/css/app.css': 'src/scss/app.scss'
                }
            },

            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/app.css': 'src/scss/app.scss'
                }
            }
        },

        
        // copy imgages & modernizr.js
        copy: {
            images: {
                expand: true,
                cwd: 'src/img',
                src: ['**/*'],
                dest: 'build/img'
            },
            modernizr: {
                expand: true,
                src: 'src/js/vendor/modernizr.js',
                dest: 'build/js',
                flatten: true
            }
        },


        // copy bower components
        bowercopy: {
            vendor: {
                options: {
                    srcPrefix: 'bower_components',
                    destPrefix: 'src'
                },
                files: {
                    'js/vendor/modernizr.js': 'modernizr/modernizr.js',
                    'js/vendor/jquery.js': 'jquery/dist/jquery.js',
                    'js/vendor/fastclick.js': 'fastclick/lib/fastclick.js',
                    'js/vendor/foundation.js': 'foundation/js/foundation.js',
                     
                    'scss/vendor/normalize.scss': 'foundation/scss/normalize.scss',
                    'scss/vendor/foundation.scss': 'foundation/scss/foundation.scss',
                    'scss/vendor/foundation/': 'foundation/scss/foundation/*.scss',
                    'scss/vendor/foundation/components/': 'foundation/scss/foundation/components/*.scss'
                }
            }
        },


        // watch tasks
        watch: {
            options: {
                livereload: 8080
            },
            
            sass: {
                files: 'src/scss/**/*.scss',
                tasks: 'sass:dev'
            },
            
            scripts: {
                files: 'src/js/*.js',
                tasks: 'concat'
            },
            
            html: {
                files: ['src/html/**/*.hbs'],
                tasks: 'assemble:dev'
            },
            
            images: {
                files: 'src/img/*.png,jpg',
                task: 'copy:build:images'
            },
            
            grunt: { files: ['Gruntfile.js'] }
        },
        
        connect: {
            options: {
                port: 4000,
                livereload: 8080,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: 'build'
                }
            }
        }

    });


    // load grunt plugins
    require('load-grunt-tasks')(grunt);    
    grunt.loadNpmTasks('assemble');

    // register tasks
    grunt.registerTask('default', ['dev']);

    grunt.registerTask('dev', [
        'clean',
        'sass:dev',
        'copy',
        'assemble:dev',
        'concat',
        'connect',
        'watch'
    ]);
    
    grunt.registerTask('prod', [
        'clean',
        'sass:production',
        'copy',
        'assemble:production',
        'concat',
        'uglify'
    ]);

};