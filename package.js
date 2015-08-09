Package.describe({
  name: 'gadicohen:famous',
  version: '0.7.1',
  summary: 'Temp package for Famo.us "Mixed Mode" Engine',
  git: 'https://github.com/gadicc/meteor-famous',
});

Package.onUse(function(api) {
  api.use('gadicohen:modules@0.1.0', 'client');
  api.addFiles('lib/modules.require', 'client');
  api.export('famous', 'client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:famous');
  api.addFiles('famous-tests.js');
});
*/
