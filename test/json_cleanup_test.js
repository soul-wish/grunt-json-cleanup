'use strict';

var grunt = require('grunt');

exports.json_cleanup = {
  default: function(test) {
    test.expect(2);

    var simpleActualFile = grunt.file.read('tmp/test-simple-format.json');
    var customActualFile = grunt.file.read('tmp/test-custom-format.json');
    var expectedSimpleFile = grunt.file.read('test/expected/simple-format.json');
    var expectedCustomFile = grunt.file.read('test/expected/custom-format.json');
    test.equal(simpleActualFile, expectedSimpleFile, 'Simple files should be identical.');
    test.equal(customActualFile, expectedCustomFile, 'Custom files should be identical.');

    test.done();
  }
};
