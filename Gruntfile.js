module.exports = function (grunt) {

    grunt.registerTask('default', ['validation']);
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig(
        {
            validation: {
                options: {
                },
                files: {
                    src: ['**/*.html']
                }
            },
            watch: {
                files: ['**/*.html'],
                tasks: ['validation']
            }
        });


};
