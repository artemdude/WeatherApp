/**
 * Created by Superman on 8/4/2014.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};