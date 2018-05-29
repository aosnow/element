# element-theme-yinhe
> element component of yinhe theme.


## Installation
```shell
npm i element-theme-yinhe -S
```

## Usage

Use Sass import
```css
@import 'element-theme-yinhe';
```

Or Use webpack
```javascript
import 'element-theme-yinhe';
```

Or
```html
<link rel="stylesheet" href="path/to/node_modules/element-theme-yinhe/lib/index.css">
```

##  Import on demand
```javascript
import 'element-theme-yinhe/lib/input.css';
import 'element-theme-yinhe/lib/select.css';

// ...
```

## 注意事项
一般直接借用 `babel-plugin-component` 插件来进行按需加载相对应的 `css` 样式，而不需要按以上说明进行额外使用了。因为在`element-yhui` 中已经包含所有的`css`内容。
