/**
 * Created by Daniel on 31/07/2016.
 */
module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({

       
        'gh-pages': {
            options: {
                base: 'page'
            },
            src: '**/*'
        },
        copy: {
            build: {
                cwd: '',

                src: [ 'assets/**/*','favicon.ico', 'index.html' ],
                dest: 'page',
                expand: true
            }
        },clean: {
            build: {
                src: [ 'page' ]
            }
        }
    });

    // load the tasks

    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    // define the tasks
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the page directory.',
        [ 'clean', 'copy']
    );

    grunt.registerTask(
        'publish',
        'Gets a build off the page and publish it in github Pages',
        [ 'build', 'gh-pages']
    );
};