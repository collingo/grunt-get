/*
 * grunt-get
 * https://github.com/collingo/grunt-get
 *
 * Copyright (c) 2013 Nick Collings (@collingo)
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('get', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('get'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('get', function() {
    return 'get!!!';
  });

};
