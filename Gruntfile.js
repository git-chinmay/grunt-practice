module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        //pass in options, plugins , refrences to files ..etc
        concat:{
            js: {
                //src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/scripts.js']
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['CSS/*.css'],
                dest: 'build/styles.js'
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat')

    //REGISTER TASKS NEED TO RUN
    //Examples
    // grunt.registerTask('run', ()=>{
    //     console.log("Running task 'RUN'.");
    // })

    // grunt.registerTask('sleep', ()=>{
    //     console.log("Running task 'SLEEP'.");
    // })

    // grunt.registerTask('all', ['run', 'sleep'])
    
    //Actual Tasks
    grunt.registerTask('concat-js', ['concat:js'])

    grunt.registerTask('concat-css', ['concat:css'])

}