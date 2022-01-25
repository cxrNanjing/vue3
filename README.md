# 14cli3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### editorconfig

### prettier

```
用npm run preitter 来格式化
```

### husky

```
用来提交代码时的根式化

npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### vue.config.js

```
修改vue-cli 的配置 基于webpack
```

### element-plus

```
按需引入npm install babel-plugin-import -D
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
```

### axios 的基本使用

```
get, post, all ,interceptor
```

### 区分环境

```
 publicPath: './', 使用于打包时用于在本地模拟生产 生产时要去掉
```
