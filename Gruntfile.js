module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['validation']);

    grunt.initConfig(
        {
            validation: {
                options: {
                },
                files: {
                    src: ['*.html', 'assets/templates/**/*.html']
                }
            },
            watch: {
                files: ['*.html', 'assets/templates/**/*.html'],
                tasks: ['validation']
            }
        });


};
