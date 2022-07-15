const fixme = require('fixme');
const path = require('path');

fixme({
  path:                 path.resolve(__dirname, './src'),
  ignored_directories:  ['node_modules/**', '.git/**'],
  file_patterns:        ['**/*.js', '**/*.ts'],
  file_encoding:        'utf8',
  line_length_limit:    40,
  skip:                 ['note']
});