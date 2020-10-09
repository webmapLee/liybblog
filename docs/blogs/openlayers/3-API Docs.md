---
title: API文档
sidebarDepth: 2
autoGroup-1: API文档
---

## 核心接口

### [ol/Map](https://openlayers.org/en/latest/apidoc/module-ol_Map.html)~Map

```javascript
import Map from 'ol/Map';
```

​		该地图是OpenLayers的核心组件。要渲染地图，需要一个视图，一个或多个图层以及一个目标容器：

```javascript
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var map = new Map({
  view: new View({
    center: [0, 0],
    zoom: 1
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
});
```

​		上面代码块创建了一个id 为 'map'的地图容器，并使用'ol/source/OSM' 作为地图数据通过'ol/layer/Tile' 接口显示地图服务。

