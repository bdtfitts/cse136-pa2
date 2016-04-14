module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['validation']);

    grunt.initConfig(
        {
            validation: {
                options: {
                    doctype: 'HTML5',
                    wrapFile: 'assets/templates/wrapfile.html',
                    generateReport: false
                },
                files: {
                    src: ['*.html', 'assets/templates/**/*.tpl.html', 'assets/templates/**/*.html', '!assets/templates/wrapfile.html']
                }
            },
            watch: {
                files: ['*.html', 'assets/templates/**/*.html'],
                tasks: ['validation']
            }
        });


};
