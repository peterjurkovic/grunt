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
                src: ['js/angular.js', 'js/angular.js', 'js/**.js'],
                dest : 'build/app.js'
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask("build",  [] );

    grunt.registerTask("reloadWatcher", function () {
        grunt.log.writeln("file changed");
    })

}
