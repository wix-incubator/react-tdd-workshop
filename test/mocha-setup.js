require('babel-polyfill');
const {testBaseUrl} = require('./test-common');

require('jsdom-global')(undefined, {url: testBaseUrl});

