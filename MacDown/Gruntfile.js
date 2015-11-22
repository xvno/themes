module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    var config = {
        _src: 'src',
        _dist: 'dist',
        _tmp: 'tmp'
    };
    grunt.initConfig({
        config: config,
        less: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= config._src %>',
                    src: '**/*.less',
                    dest: '<%= config._tmp %>',
                    ext: '.css',
                    extDot: 'last'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config._tmp %>',
                    src: ['!**/*.min.css', '**/*.css'],
                    dest: '<%= config._dist %>',
                    ext: '.min.css',
                    extDot: 'last'
                }]

            }
        },
        watch: {
            css: {
                options: {
                    interrupt: false,
                    spawn: true
                },
                files: '<%= config._src %>/**/*.less',
                tasks: ['less']
            },
            gconf:{
            	options:{
            		reload: true
            	},
            	files: 'Gruntfile.js'
            }
        }
    });

	grunt.registerTask('dev', ['less', 'watch']);
	grunt.registerTask('dist', ['less', 'cssmin']);
    grunt.registerTask('default', ['dev']);

};
