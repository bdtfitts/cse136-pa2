module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

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
                    src: ['*.html', 'assets/templates/**/*.hbs']
                }
            },
            watch: {
                files: ['*.html', 'assets/templates/**/*.html'],
                tasks: ['validation', 'handlebars']
            },
            handlebars: {
                compile: {
                    options: {
                    },
                    files: {
                        'assets/javascript/templates.js': 'assets/templates/**/*.hbs'
                    }
                }
            }

        });

};
