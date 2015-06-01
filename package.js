Package.describe({
  name: 'gadicohen:famous',
  version: '0.5.0_4',
  summary: 'Temporary package for Famo.us Mixed Mode v0.5.0',
  git: 'https://github.com/gadicc/meteor-famous',
});

Package.onUse(function(api) {
  api.use('gadicohen:modules@0.0.5', 'client');
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