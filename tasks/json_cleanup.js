'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('json_cleanup', 'A plugin for removing empty strings from JSON files', function() {
    function replacer(name, value) {
      return (value === '') ? undefined : value;
    }

    this.files.forEach(function(file) {
      file.src.map(function(filepath) {
        var fileName = filepath.split("/").slice(-1).pop();
        var fileContent = JSON.parse(grunt.file.read(filepath));

        return grunt.file.write(file.dest + fileName, JSON.stringify(fileContent, replacer, 4));
      });
    });
    grunt.log.success('All files were processed 🎉');
  });
};
