---
title: 入门教程
---

本入门教程向您展示如何在网页上开发一个简单的地图应用。
工程应用中，我们强烈建议将应用程序及其依赖项捆绑在一起，如构建OpenLayers应用程序教程中所述。

## 第一个地图页面

如下，创建一个工程目录，目录下新建一个文件，复制以下内容，然后在浏览器中打开：

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css" type="text/css">
    <style>
      .map {
        height: 400px;
        width: 100%;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>
    <title>OpenLayers example</title>
  </head>
  <body>
    <h2>My Map</h2>
    <div id="map" class="map"></div>
    <script type="text/javascript">
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
    </script>
  </body>
</html>
```

## 第一个地图页面

创建一个地图页面，需要三步流程：

1. 引入OpenLayers
2. html页面body中创建div地图容器
3. js脚本中创建一个简单的地图

### 引入OpenLayers脚本

```html
  <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>
```

javascript 脚本中引入在线的OpenLayers脚本，您也可以将Openlayers脚本下载下来在本地引用，在实际的工程应用中，我仅需要创建一个我们工程应用中所需模块的自定义的版本库。



注意：如果应用程序要运行在IE或者Android 4.x上，需要在引用OpenLayers之前添加另一个脚本

```html
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>
```

### 创建一个div地图标签

  <div id="map" class="map"></div>

应用程序中的地图包含在一个div元素中。通过这个div元素的css可以设置地图的宽高和边框。以下示例设置了地图的宽为百分比，高为400pixels：

```html
  <style>
    .map {
      height: 400px;
      width: 100%;
    }
  </style>
```


### JavaScript to create a simple map

```javascript
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
  });
```