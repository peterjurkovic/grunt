module.exports = function(grunt){

    grunt.initConfig({
        watch : {
            files : ["jurnalist.txt"],
            tasks : ["pat"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("pat", function () {
        grunt.log.writeln("keep gooing");
    });
};
