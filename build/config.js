const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');
const saladConfig = require('./salad.config.json');

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
const transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
let externals = {};

const { CurUiScheme } = require('./scheme');

Object.keys(Components).forEach(function(key) {
  externals[`${CurUiScheme}/packages/${key}`] = `${CurUiScheme}/lib/${key}`;
});

externals[`${CurUiScheme}/src/locale`] = `${CurUiScheme}/lib/locale`;
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`${CurUiScheme}/src/utils/${file}`] = `${CurUiScheme}/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`${CurUiScheme}/src/mixins/${file}`] = `${CurUiScheme}/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`${CurUiScheme}/src/transitions/${file}`] = `${CurUiScheme}/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  [CurUiScheme]: path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
