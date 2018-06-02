const fs = require('fs');
const path = require('path');
const version = process.env.VERSION || require('../../package.json').version;

// 各历史版本对应的根路径
// 如：http://ui.com/2.1/#/zh-CN
const content = {};

// 当前正在开发的版本
if (!content[version]) content[version] = '1.0';

// 将版本号存储到文件，发布后的 website 会引用该版本文件
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
