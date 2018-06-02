<style lang="scss">
$--color-primary: #0096ff !default;
$--color-success: #3cc33c !default;
$--color-warning: #f5912d !default;
$--color-danger: #f55041 !default;
$--color-info: #bcbcbc !default;

$--color-text-primary: #333333 !default;
$--color-text-regular: #666666 !default;
$--color-text-secondary: #999999 !default;
$--color-text-placeholder: #c0c0c0 !default;

$--border-color-base: #d5d5d5 !default;
$--border-color-light: #e4e4e4 !default;
$--border-color-lighter: #ebebeb !default;
$--border-color-extra-light: #f2f2f2 !default;

  .demo-color-box {
    font-size: 16px;
    border-radius: 3px;
    padding: 20px;
    margin: 5px 0;
    height: 74px;
    box-sizing: border-box;
    color: #fff;

    & .value {
      font-size: 14px;
      opacity: 0.8;
      line-height: 24px;
      text-transform: uppercase;
    }
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
      margin: 0;
    }
    .demo-color-box:first-child {
      border-radius: 3px 3px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 3px 3px;
    }
  }
  .bg-blue {
    background-color: $--color-primary;
  }
  .bg-success {
    background-color: $--color-success;
  }
  .bg-warning {
    background-color: $--color-warning;
  }
  .bg-danger {
    background-color: $--color-danger;
  }
  .bg-info {
    background-color: $--color-info;
  }

  .bg-text-primary {
    background-color: $--color-text-primary;
  }
  .bg-text-regular {
    background-color: $--color-text-regular;
  }
  .bg-text-secondary {
    background-color: $--color-text-secondary;
  }
  .bg-text-placeholder {
    background-color: $--color-text-placeholder;
  }

  .bg-border-base {
    background-color: $--border-color-base;
  }
  .bg-border-light {
    background-color: $--border-color-light;
  }
  .bg-border-lighter {
    background-color: $--border-color-lighter;
  }
  .bg-border-extra-light {
    background-color: $--border-color-extra-light;
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color 色彩

Element-yhui 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element-yhui 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-blue">Blue<div class="value">#0096ff</div></div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-success">Success<div class="value">#3cc33c</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-warning">Warning<div class="value">#f5912d</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-danger">Danger<div class="value">#f55041</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-info">Info<div class="value">#bcbcbc</div></div>
  </el-col>
</el-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">主要文字<div class="value">#333333</div></div>
      <div class="demo-color-box bg-text-regular">常规文字<div class="value">#666666</div></div>
      <div class="demo-color-box bg-text-secondary">次要文字<div class="value">#999999</div></div>
      <div class="demo-color-box bg-text-placeholder">占位文字<div class="value">#c0c0c0</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">一级边框<div class="value">#d5d5d5</div></div>
      <div class="demo-color-box bg-border-light">二级边框<div class="value">#e4e4e4</div></div>
      <div class="demo-color-box bg-border-lighter">三级边框<div class="value">#ebebeb</div></div>
      <div class="demo-color-box bg-border-extra-light">四级边框<div class="value">#f2f2f2</div></div>
    </div>
  </el-col>
</el-row>
