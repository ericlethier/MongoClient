/* jshint node: true */
'use strict';

module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    // Configure a mochaTest task
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'src/*.js'],
      options: {
        maxlen: 80,
        quotmark: 'single'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/models/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');
  //grunt.registerTask('default', ['jshint', 'mochaTest']);

};
