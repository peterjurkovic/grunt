module.exports = function (grunt) {

    grunt.initConfig({
        tasks : {
            one : "first",
            two : "second",
            three : "third"
        }

    });

    grunt.registerMultiTask("tasks", function () {
        grunt.log.writeln(this.target + " " + this.data);
    });
1

}
