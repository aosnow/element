const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let Components = require('../../components.json');

const themes = ['theme-chalk', 'theme-yinhe'];
const basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  }
  catch (err) {
    return false;
  }
}

themes.forEach(theme => {
  const isSCSS = theme !== 'theme-default';
  let indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';

  Object.keys(Components).forEach(key => {
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;

    const fileName = key + (isSCSS ? '.scss' : '.css');
    indexContent += '@import "./' + fileName + '";\n';

    const filePath = path.resolve(basepath, theme, 'src', fileName);

    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'), indexContent);

  console.log(`\n\n-- begin gen ${theme}:`);
  execSync(`gulp build --gulpfile packages/${theme}/gulpfile.js`);
  console.log(`-- endof gen css files by ${theme}.\n\n`);

  console.log(`-- begin copy ${theme} to lib/${theme}:`);
  execSync(`cp-cli packages/${theme}/lib lib/${theme}`);
  console.log('-- endof copyed css files.');
});

// // "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
// gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk

