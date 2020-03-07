const {readFileSync, writeFileSync} = require('fs');
const merge = require('deepmerge');

const getManifest = (ty = 'base') => JSON.parse(readFileSync(`./src/manifest/${ty}.manifest.json`, {encoding: 'UTF-8'}).toString());
const baseManifest = getManifest('base');

let manifest = {};
const targetBuild = (process.env.BUILD_ENV || 'chrome').toUpperCase();
switch (targetBuild) {
  case 'CHROME':
    manifest = merge(baseManifest, getManifest('chrome'));
    break;
  case 'FIREFOX':
    manifest = merge(baseManifest, getManifest('firefox'))
    break;
  case 'EDGE':
    manifest = merge(baseManifest, getManifest('edge'))
    break;
}

if (Object.keys(manifest).length) {
  writeFileSync('./src/manifest.json', JSON.stringify(manifest, undefined, 4))
} else {
  process.exit(1);
}
