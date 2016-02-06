module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		shell: {
			// Run jspm bundle-sfx command to bundle all modules the "main" module depends on
			// into a single site.js file
			jspmBundle: {
				options: {
					stdin: false
				},
				command: 'jspm bundle-sfx main build/js/site.js'
			}
		},

		uglify: {
			// Minify bundled site.js file created by jspm bundle-sfx command
			build: {
				files: [{
					src: ['build/js/site.js'],
					dest: 'build/js/site.js'
				}]
			}
		},

		cssmin: {
			// Minify all .css files from css/ directory and save minified versions to buid/css/
			// directory
			build: {
				files: [{
					expand: true,
					src: ['css/**/*.css'],
					dest: 'build/'
				}]
			}
		},

		copy: {
			// Copy all .html files to build/ directory for furher processing
			htmlToProcess: {
				files: [{
					expand: true,
					src: [
						'**/*.html',
						'!jspm_packages/**',
						'!node_modules/**',
						'!build/**'
					],
					dest: 'build/'
				}]
			},

			// Copy remaining assets to build/ directory as-is
			assets: {
				files: [{
					expand: true,
					src: [
						'**',
						'!js/**',
						'!css/**',
						'!**/*.html',
						'!jspm_packages/**',
						'!node_modules/**',
						'!build/**',
						'!config.js',
						'!Gruntfile.js',
						'!package.json'
					],
					dest: 'build/'
				}]
			}
		},

		processhtml: {
			// Process all .html files in build/ directory. This is primarily used to replace
			// <script> tags with single tag to include bundled site.js file, but it's also
			// useful for inlining scripts and stylesheets
			build: {
				files: [{
					expand: true,
					src: 'build/**/*.html'
				}]
			}
		},

		clean: {
			// Remove temporary files that were created during build process
			tempFiles: {
				src: ['build/js/site.js.map']
			},

			// Remove previous build results
			all: {
				src: ['build/']
			}
		},
        
        connect: {
            // Serve unbundled site to http://localhost:8000
            unbundled: {
                options: {
                    keepalive: true
                }
            },
            
            // Build and serve site to http://localhost:8000
            bundled: {
                options: {
                    base: 'build',
                    keepalive: true
                }
            }
        }
	});
	
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('build', [
		'clean:all',
		'shell:jspmBundle',
		'uglify:build',
		'cssmin:build',
		'copy:htmlToProcess',
		'processhtml:build',
		'copy:assets',
		'clean:tempFiles'
	]);

	grunt.registerTask('cleanup', ['clean:all']);
    
    grunt.registerTask('debug', ['connect:unbundled']);
    
    grunt.registerTask('run', ['build', 'connect:bundled']);

	grunt.registerTask('default', ['build']);

};