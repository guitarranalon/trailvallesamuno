module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'sass/**/*.sass',
          'sass/**/*.scss'
        ],
        tasks: ['compass:dev']
      },
      js: {
        files: [
          'javascripts/c1nn/**/*.js',
          'javascripts/desarrollo/**/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      },
      coffee:{
		files: ['javascripts/desarrollo/coffeescript/**/*.coffee'],
		tasks: ['coffee']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          outputStyle: 'compressed'
        }
      },
      dev:{
		options: {
			sassDir:'sass',
			cssDir:'stylesheets'
		}
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
		force:true
      },
      all: ['Gruntfile.js', 'javascripts/desarrollo/c1nn.jquery.mobileMenuAndSearch.js', 'javascripts/desarrollo/jquery.scrollUp.js', 'javascripts/desarrollo/c1nn.jquery.ie11detect.js']
    },
	coffee:{
      compile: {
			options: {
				bare: true
			},
			files: {
				'javascripts/desarrollo/c1nn.js': ['javascripts/desarrollo/coffeescript/**/*.coffee'] // compile and concat into single file
			}	
		}
	},
	removelogging: {
		dist: {
			src: 'javascripts/all.js',
			dest: 'javascripts/all.js',

			options: {
				// see below for options. this is optional.
			}
		}
	},
	'min': {
		'dist': {
			'src': 'javascripts/all.js',
			'dest': 'javascripts/all.min.js'
		}
	},
	
	concat: {
		dist: {
		  src: [
		  		'javascripts/desarrollo/jquery-1.12.3.min.js',
		  		'javascripts/desarrollo/svg4everybody.js',
		  		'javascripts/desarrollo/jquery.menu-aim.js',
		  		'javascripts/desarrollo/tvs.jquery.menu-aim-call.js',
		  		'javascripts/desarrollo/tvs.jquery.mobileMenuAndSearch.js',
		  		'javascripts/desarrollo/tvs.jquery.randomCollaborators.js',
		  		'javascripts/desarrollo/jquery.scrollUp.js',
				'javascripts/desarrollo/featherlight.js',
				'javascripts/desarrollo/featherlight.gallery.js',
				'javascripts/desarrollo/ease.min.js',
				'javascripts/desarrollo/segment.min.js',
				'javascripts/desarrollo/roadbook.js',
		  		'javascripts/desarrollo/analytics.js',
		  		'javascripts/desarrollo/docCookies.js',
				'javascripts/desarrollo/cookiesWarning.js',
				'javascripts/desarrollo/jquery-scrollspy.js',
				'javascripts/desarrollo/progressBarsAnimations.js',
				'javascripts/desarrollo/indexAnimations.js',
		  		'javascripts/desarrollo/invocations.js',
		  	],
		  dest: 'javascripts/all.js',
		  nonull: true,
		},
	},
	
	yuidoc: {
		compile: {
			name: '<%= pkg.name %>',
			description: '<%= pkg.description %>',
			version: '<%= pkg.version %>',
			url: '<%= pkg.homepage %>',
			options: {
				paths: 'javascripts/desarrollo',
				outdir: 'javascripts/doc'
			}
		}	
	},
	imagemin:{
		dynamic:{
			files:[{
				expand: true,
				cwd: 'images/desarrollo/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'images/c1nn/'
			}]
		}
	}	
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('prod',['compass:dist', 'concat', 'jshint', 'removelogging', 'min']);
};