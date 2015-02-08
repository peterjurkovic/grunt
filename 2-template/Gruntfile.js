module.exports = function (grunt) {

    grunt.initConfig({
        files: [".js", ".html"],
        compile:"<%= files %>"
    })

    grunt.registerTask("default", function () {
        grunt.log.writeln(grunt.config.get("compile"));
        grunt.log.writeln(grunt.template.process("<%= files %>"));
        grunt.log.writeln(grunt.template.today());
    })

}
