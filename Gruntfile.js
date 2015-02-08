module.exports = function (grunt) {

    grunt.initConfig({
        stylus : {
            compile : {
                options : {compress : false},
                files : {
                    'app/css/style.css' : 'styl/app.styl'
                }
            }
        },
        watch : {
            stylus : {
                files: ['styl/**.styl'],
                tasks : ['stylus:compile']
            },
            css : {
                options: {
                    livereload : true
                },
                files : ['app/css/**.css'],
                tasks : ['reloadWatcher']
            },
            html : {
                options: {
                    livereload : true
                },
                files : ['index.html'],
                tasks : ['reloadWatcher']
            }

        },

        concat : {
            js : {
                src: ['js/angular.js', 'js/app.js', 'js/**.js'],
                dest : 'build/app.js'
            }
        },

        uglify : {
            js : {
                src: ['build/app.js'],
                dest : 'build/app.js'
            }
        },

        clean : {
            build : 'build'
        }


    });

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("build",  ['clean:build', 'concat', 'uglify'] );

    grunt.registerTask("reloadWatcher", function () {
        grunt.log.writeln("file changed");
    })

}
