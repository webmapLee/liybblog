---
title: Map
sidebarDepth: 2
autoGroup-1: API文档
---



## 概述

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

​		上面的构造器把一个窗口容器（css 类名称为ol-viewport）放在目标元素中（参考getViewport()），视窗中的另外两个元素：一个的css 类名称为 ol-overlaycontainer-stopevent的控制器和一些覆盖图层，另一个为 CSS 类名称为ol-overlaycontainer的一些其他覆盖图层（参见module：[`ol/Overlay~Overlay`](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html) 的stopEvent选项）。地图本身放置在视口中的另一个元素中，带stopEvent的容器可以阻止冒泡，不带的不会阻止冒泡。

​         图层存储在 一个模块为：[`ol/Collection~Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html)的图层组中。库中提供了一个顶级的容器，这个容器可通过getLayerGroup和setLayerGroup 两个方法读写。在 Layers 参数中添加的图层将被添加到图层组中。通过addLayer和removeLayer 两个方法可以添加和删除图层组中的图层。getLayers 是getLayerGroup().getLayers() 中的一个方法。注意：模块ol/layer/Group~Group 是模块[`ol/layer/Base`](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base.html)的子集。所以Layers 参数中的图层和 通过 addlayer 方法添加的图层都可以组合，同时也可以包含其他的分组。

##  new Map(构造函数参数)

| Name                  | Type                                                         | Description                                                  |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `controls`            | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)> \| Array.<[module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)> | 默认添加到地图中的控件，如果未指定，则使用模块ol/control~defaults |
| `pixelRatio`          | number (defaults to window.devicePixelRatio)                 | 设备物理像素和设备独立像素的比例                             |
| `interactions`        | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)>\| Array.<[module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)> | 默认添加的地图交互。如果未指定，则使用默认的地图交互`module:ol/interaction~defaults` |
| `keyboardEventTarget` | HTMLElement \| Document \| string                            | 用于键盘事件监听的元素，当KeyboardPan和KeyboardZoom交互时触发。例如，如果将此选项设置为document，则键盘交互将始终被触发。如果未指定，则在地图中监听键盘交互。如果这个选项不是document，则需要对目标元素聚焦发出事件，要求目标元素有一个tabindex属性 |
| `layers`              | Array.<[module:ol/layer/Base~BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)> \|[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).   <[module:ol/layer/Base~BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)> \|[module:ol/layer/Group~LayerGroup](https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html) | 如果未指定图层，则地图中没有图层渲染.需要注意的是，图层的渲染顺序和图层设置的顺序有关，如果你要把一个vector layer放到 tile layer上面，则需要把它放到tile layer的后面。 |
| `maxTilesLoading`     | number (defaults to 16)                                      | 同时加载的最大瓦片数量                                       |
| `moveTolerance`       | number (defaults to 1)                                       | 地图移动事件代替点图点击事件光标移动的最小像素。该值越大则更容易点击地图 |
| `overlays`            | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Overlay~Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)> \| Array.<[module:ol/Overlay~Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)> | 默认添加到地图中的覆盖图层，默认没有覆盖图层被添加。         |
| `target`              | HTMLElement \| string                                        | 地图的容器，可以是元素本身或者元素的id。如果未指定，则必须调用[`module:ol/Map~Map#setTarget`](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#setTarget)来渲染地图。 |
| `view`                | [module:ol/View~View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | 地图的视图.必须在实例化时或者通过 [`module:ol/Map~Map#setView`](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#setView)指定才能获取到图层资源。 |

## 事件

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - 一般的change事件. 当修订次数增加的时候触发。
- `change:layerGroup` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:size` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:target` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:view` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `click` ([module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)) - 地图点击事件不带拖拽，双加的话会触发点击和拖拽。
- `dblclick` ([module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)) - 真正的双击事件，不带拖拽。
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - 一般的错误事件，发生错误是触发
- `moveend` ([module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html)) - 地图移动时触发
- `movestart` ([module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html)) - 地图开始移动时触发。
- `pointerdrag` ([module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)) - 拖动指针时触发
- `pointermove` ([module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)) - 移动指针时触发。请注意在触屏设备中当地图平移时触发。所以它和鼠标移动不太一样。
- `postcompose` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - 所有图层渲染完成后触发。这个时间对象没有上下文。
- `postrender` ([module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html)) - 当地图框架渲染后触发。
- `precompose` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - 图层选人之前触发。这个事件没有设置上下文。
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - 当属性发生改变时触发。
- `rendercomplete` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - 当完成渲染时触发，即所有当前窗口的资源和切片完成加载并且所有切片显示出来的时候触发。该事件对象没有指定上下文。
- `singleclick` ([module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)) - 一个真正的单击，没有拖动和双击。请注意，此事件延迟250毫秒，以确保它不是双击

## 集成父类

- [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)



## 可见属性

| Name         | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description          |
| ------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | -------------------- |
| `layerGroup` | [module:ol/layer/Group~LayerGroup](https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html) | yes      | `change:layergroup`                                          | 图层组               |
| `size`       | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) \| undefined | yes      | `change:size`                                                | 地图对象像素大小     |
| `target`     | HTMLElement \| string \| undefined                           | yes      | `change:target`                                              | 地图的元素和或元素id |
| `view`       | [module:ol/View~View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | yes      | `change:view`                                                | 控制地图的视图       |

## 方法

- **addControl**(control) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#addControl)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 482](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L482)

  添加地图控件

- **addInteraction**(interaction) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#addInteraction)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 495](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L495)

  添加地图交互。如果你要再集合中的其它地方添加一个交互，请使用`getInteraction()`以及[`module:ol/Collection~Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html)中的方法，这样可以阻止事件冒泡，这些交互处理事件的顺序和集合的顺序相反

- **addLayer**(layer) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#addLayer)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 506](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L506)

  在地图的顶层添加指定的图层。如果要添加到其它的图层集中，使用getLayers()获取，这个方法适用于[`module:ol/Collection~Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).

  

- **addOverlay**(overlay) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#addOverlay)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 516](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L516)

  地图中添加覆盖层

- **changed**() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

  增加修订次数并派发'change'事件。

- **dispatchEvent**(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

  派发一个事件并调用所有的侦听器侦听此类型的事件。这个事件的参数可以是string 类型的，也可以是带`type`属性的Object 类型

  Returns:`false`  如果事件对象或者任务的侦听器调用了preventDefault 则返回false。

- **forEachFeatureAtPixel**(pixel, callback, opt_options){T|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#forEachFeatureAtPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 561](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L561)

  监测与指定像素点相交的要素，并对相交的要素执行一个回调。可以通过opt_options中`layerFilter` 参数来配置监测的图层。

  | Name       | Type                                                         | Description                                                  |
  | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | `pixel`    | [module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel) | 像素点                                                       |
  | `callback` | function                                                     | 回调函数。这个回调有两个参数，第一个参数是这个像素点上的要素，第二个参数是这个要素的图层。如果要停止检测，回调函数可以返回一个真值。 |
  | `options`  | Optional options                                             |                                                              |

  Optional options

  | Name           | Type                      | Description                                                  |
  | -------------- | ------------------------- | ------------------------------------------------------------ |
  | `layerFilter`  | undefined \|function      | 图层过滤函数。这个函数会接受一个参数[`layer-candidate`](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer.html)，返回一个boolean 值。只有可见的图层和这个函数返回true时才会被过滤出来，默认过滤所有的可见图层。 |
  | `hitTolerance` | number(defaults to 0)     | 像素检测容差.。像素容差范围内的要素才会被检查到。            |
  | `checkWrapped` | boolean(defaults to true) | Check-Wrapped 将检查包裹在 +/- 1 世界宽度范围内的几何图形，只有投影坐标系下才能生效 |

  Returns:回调结果，即回调函数执行返回值，或第一个回调实际返回值。

- **forEachLayerAtPixel**(pixel, callback, opt_options){T|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#forEachLayerAtPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 627](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L627)

  检测视窗内像素点处有颜色的图层，对每一个匹配的图层执行一个回调。可以通过`opt_layerFilter`配置可检测的图层。请注意：如果不给图层分配不同的“classname”属性，可能回导致异常。

  参数同forEachFeatureAtPixel

  Returns:回调结果，即回调函数执行返回值，或第一个回调实际返回值。

- **get**(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

  获取一个值。 

- getControls(){[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getControls)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 787](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L787)

  获取图层控件。修改此集合将会改变与地图相关联的控件。

- getCoordinateFromPixel(pixel){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getCoordinateFromPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 756](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L756)

  根据指定的像素点获取坐标。坐标系为用户使用的投影坐标系。

  Returns:返回像素点位置的坐标值。

- getEventCoordinate(event){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getEventCoordinate)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 683](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L683)

  返回用户投影坐标系的坐标

- getEventPixel(event){[module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getEventPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 702](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L702)

  返回视窗地图中事件相关的像素点。  

- getFeaturesAtPixel(pixel, opt_options){Array.<[module:ol/Feature~FeatureLike](https://openlayers.org/en/latest/apidoc/module-ol_Feature.html#~FeatureLike)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getFeaturesAtPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 594](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L594)

  获取视窗内与该像素点相交的所有要素

  参数同**forEachFeatureAtPixel**

  返回：检测到的要素，如果没有检测到，则返回空数组。

- getInteractions(){[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getInteractions)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 822](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L822)

  获取地图交互，修改此集合将会修改地图中的交互。地图交互有平移，缩放和旋转。

  返回：地图交互类。

- getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

  获取Object对象的属性名称数组。

- getLayerGroup(){[module:ol/layer/Group~LayerGroup](https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getLayerGroup)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 832](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L832)

- 获取地图的图层组。

  返回：地图中包括图层的一个图层组

  Get the layergroup associated with this map.Returns:A layer group containing the layers in this map.  

- getLayers(){[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/layer/Base~BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getLayers)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 841](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L841)

  获取地图中的图层集合。 

- getOverlayById(id){[module:ol/Overlay~Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getOverlayById)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 809](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L809)

  根据覆盖图层的唯一id(这个值可以通过overlay.getId()获取)获取overlay。

  注意：索引对于字符串和数值进行同等的处理。例如 `map.getOverlayById(2)`将会返回id 为 ‘2’或者 2 的overlay。

- getOverlays(){[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Overlay~Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getOverlays)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 797](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L797)

  获取地图的所有覆盖层。修改覆盖层集合将会改变地图上的覆盖层。  

- getPixelFromCoordinate(coordinate){[module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getPixelFromCoordinate)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 868](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L868)

  根据坐标返回像素点。根据用户投影坐标系返回响应的坐标点。

- getProperties(){Object.<string, *>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

  返回Object对象的属性名和值。

- getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

  获取该对象的版本号 ，每次修改该对象，版本号都会增加。

- getSize(){[module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getSize)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 908](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L908)

  获取地图容器的像素大小。  

- getTarget(){HTMLElement|string|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getTarget)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 725](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L725)

  获取地图目标对象，根据元素id和 元素获取。

- getTargetElement(){HTMLElement} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getTargetElement)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 738](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L738)

  获取地图的DOM 元素。与getTarget相比，此方法使用返回 dom 元素。如果没有则返回null。

- getView(){[module:ol/View~View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getView)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 921](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L921)

  获取地图的视图 ，视图管理注入中心和像素等属性。 

- getViewport(){HTMLElement} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getViewport)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 930](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L930)

  获取用于地图视窗的元素。  

- hasFeatureAtPixel(pixel, opt_options){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#hasFeatureAtPixel)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 654](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L654)

  判断视窗内指定像素点是否有要素。被检测的图层可以通过opt_layerFilter来配置

  可选参数同**forEachFeatureAtPixel**

- on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

  事件监听。

- once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

  监听一次指定类型的时间。  

- removeControl(control){[module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#removeControl)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1322](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1322)

  移动指定的地图组件

- removeInteraction(interaction){[module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#removeInteraction)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1333](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1333)

  移除指定地图交互。

- removeLayer(layer){[module:ol/layer/Base~BaseLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#removeLayer)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1344](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1344)

  移除指定的图层。 

- removeOverlay(overlay){[module:ol/Overlay~Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#removeOverlay)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1356](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1356)

  移除指定的覆盖层。

- render() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#render)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1309](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1309)

  请求渲染地图（在下一个动画帧时）。

- renderSync() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#renderSync)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1285](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1285)

  以同步方式立即渲染地图。

- set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

  设置属性值。

- setLayerGroup(layerGroup) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#setLayerGroup)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1456](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1456)

  设置图层组。

- setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

  设置键值对几何。注意：这可以更改现有属性和添加新属性，但是不会删除任何现有属性。

  | Name     | Type               | Description                         |
  | -------- | ------------------ | ----------------------------------- |
  | `values` | Object.<string, *> | Values.                             |
  | `silent` | boolean            | Update without triggering an event. |

- setSize(size) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#setSize)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1466](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1466)

  设置地图大小

  | Name   | Type                                                         | Description                               |
  | ------ | ------------------------------------------------------------ | ----------------------------------------- |
  | `size` | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) \| undefined | The size in pixels of the map in the DOM. |

- setTarget(target) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#setTarget)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1477](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1477)

  设置地图显示的对象。

  | Name     | Type                               | Description                                                  |
  | -------- | ---------------------------------- | ------------------------------------------------------------ |
  | `target` | HTMLElement \| string \| undefined | The Element or id of the Element that the map is rendered in. |

- setView(view) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#setView)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1487](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1487)

  设置地图视图

  | Name   | Type                                                         | Description                      |
  | ------ | ------------------------------------------------------------ | -------------------------------- |
  | `view` | [module:ol/View~View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | The view that controls this map. |

- un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

  取消指定类型的监听。

- unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

  取消设置属性。

- updateSize() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#updateSize)[PluggableMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js), [line 1496](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/PluggableMap.js#L1496)

  强制重新计算地图视窗的大小。当第三方代码在更改地图视窗大小的时候调用此函数。