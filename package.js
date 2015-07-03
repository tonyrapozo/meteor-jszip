Package.describe({
  summary: "Create, read and edit .zip files on the client",
  version: "0.0.1",
  name: 'silentcicero:jszip',
  git: "https://github.com/silentcicero/meteor-jszip.git",
  environments: 'client',
});

Npm.depends({
  'jszip': '2.4.0'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('lib/saveas.js', 'client');
  api.export(['JSZip'], 'client');
});
