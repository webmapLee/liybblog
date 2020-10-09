---
title: 获取OpenLayers
---

## ol插件包

建议通过ol 插件来使用OpenLayers。您可以使用npm安装最新版本（可以在npm官网直接搜索ol，ol的npm地址：https://www.npmjs.com/package/ol）：

```javascript
npm install ol
```

## 开发使用

如果你不想下载任何包想使用OpenLayers（不建议用于工程应用），可以在你的页面中添加以下引用：

```html
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css">
```

### 下载v6.4.3版本

| Archive                                                      | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [v6.4.3-dist.zip](https://github.com/openlayers/openlayers/releases/download/v6.4.3/v6.4.3-dist.zip) | 包括完整的开发包（ol.js），source map(ol.js.map),以及css(也包括ol.css的source map) |
| [v6.4.3.zip](https://github.com/openlayers/openlayers/releases/download/v6.4.3/v6.4.3.zip) | 包括以上所有内容以及示例，API文档和源代码                    |

有关更改日志和任何特殊的升级说明，请参考 [v6.4.3 release page](https://github.com/openlayers/openlayers/releases/tag/v6.4.3) 

以前的版本分支，请参考[complete list of releases](https://github.com/openlayers/openlayers/releases/)