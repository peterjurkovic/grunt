module.exports = function (grunt) {



    grunt.initConfig({
        uglify : {
            dist : {
                files : {
                    "dist/app.min.js" : "app/**/*.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
}
