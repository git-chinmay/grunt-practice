module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        //pass in options, plugins , refrences to files ..etc
    });

    //Load plugins
    //grunt.loadNpmTasks('<plugin name>')

    //Rgister tasks needs to run
    grunt.registerTask('run', ()=>{
        console.log("Running task 'RUN'.");
    })

    grunt.registerTask('sleep', ()=>{
        console.log("Running task 'SLEEP'.");
    })

    grunt.registerTask('all', ['run', 'sleep'])
}