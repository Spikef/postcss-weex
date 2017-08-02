# postcss-weex

专治各种weex样式不支持的postcss插件.

## 安装

```bash
$ npm install postcss
$ npm install postcss-weex
```

## 使用

```javascript
// for webpack2

{
    test: /\.vue(\?[^?]+)?$/,
    loader: `weex-loader`,
    options: {
        postcss: [require('postcss-weex')({env: 'weex'})]   // env: weex or web
    }
}
```

## 治疗症状

> 只针对weex不支持的写法, 并不能解决weex不支持的样式属性问题.

* padding简写
* margin简写
* border简写
* background简写
* border-radius简写