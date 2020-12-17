---
title: View
sidebarDepth: 2
autoGroup-1: API文档
---

## 概述

```
import View from 'ol/View';
```

​	用于简单的二维简单地图展示的一个视图，该对象可以改变地图的中心店，分辨率和旋转度。

​	一个视图有一个投影坐标系。这个投影决定了中心点的坐标系统，它的单位决定了分辨率的单位（每像素的投影单位）。默认的投影是球星魔卡托（EPSG:3857）

### 视图状态

​	一个视图有三个状态确定：`center`中心、`resolution`分辨率、`rotation`旋转。每个状态有一个getter 和 setter的方法。例如ceter状态的getCenter 和 setCenter。

### 限制条件

​	setCenter`, `setResolution 和 setRotation 可用于修改视图的状态。但任何构造函数中定义的约束对其有影响。一个视图对象有分辨率约束，旋转度约束以及中心点约束。

​	分辨率约束一般是以 min/max 值来确定一个有效的像素值。它有如下参数：resolutions, maxResolution, maxZoom 和 zoomFactor。如果设置了resolutions值，则可以忽略其它三个值。可以参考对应文档查看更多关于这几个参数的信息。默认这个视图只有一个 min/max 的限制，并在缩放时缩放到该区间的缩放级别。

​	旋转约束要求旋转到指定的角度，有以下参数来决定：enableRotation 和 constrainRotation。默认情况下允许旋转，当旋转到水平时，其值为0。

​	中心点约束是由地图范围来决定的。默认情况下，视图中心点完全不受影响。



### 修改视图状态

​	需要注意的是，setZoom, setResolution, setCenter 和 setRotation这几个方法受上述限制条件约束。因此，有时候无法预知视图的实际状态。例如：调用setResolution(10) 方法并不能宝成 getResolution() 将返回10.

​	事实上，当在视图状态上更新值时， 应该使用adjustCenter, adjustRotation, adjustZoom 和 adjustResolution，而不是对应的 seters。这将让视图进行内部计算。此外，这些adjust* 方法也可以通过一个opt_anchor参数指定一个转换的源值。

### 与视图交互

​	视图约束往往在进行交互和动画之前定义。因此，如果用户设置的状态值不在约束范围内（例如，当捕捉角度为0时旋转），则会触发动画交互将视图恢复到稳定的状态。



## new View(opt_options)

| Name                         | Type                                                         | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `center`                     | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 视图初始化中心点，如果未设置投影，则使用可选参数中的投影坐标系。如果可选参数中未设置，则获取不到图层源，但是可以通过 “setCenter”设置中心点。 |
| `constrainRotation`          | boolean \| number (defaults to true)                         | 旋转约束。`false`为未约束，`true`为未约束但是接近于0。数字限制了旋转到该值的数量。 |
| `enableRotation`             | boolean (defaults to true)                                   | 如果为`false`，则始终使用将旋转设置为零的旋转约束 ，且`constrainRotation` 参数不生效 |
| `extent`                     | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | 视图显示范围。                                               |
| `constrainOnlyCenter`        | boolean (defaults to false)                                  | 如果为true，则“范围”约束将仅应用于视图中心，而不是整个范围。 |
| `smoothExtentConstraint`     | boolean (defaults to true)                                   | 如果为true，则将平滑地应用范围约束，即允许视图稍微超出给定的“extent”。 |
| `maxResolution`              | number                                                       | 用于确定分辨率约束的最大分辨率。它与“minResolution”（或“maxZoom”）和“zoomFactor”一起使用。如果未指定，则计算方式应确保投影的有效范围适合256x256 px的平铺。如果投影是球形墨卡托（默认值），则“maxResolution”默认为“40075016.68557849/256=156543.03392804097”。 |
| `minResolution`              | number                                                       | 用于确定分辨率约束的最小分辨率。它与“maxResolution”（或“minZoom”）和“zoomFactor”一起使用。如果未指定，则假定29个缩放级别（系数为2）进行计算。如果投影是Spherical Mercator（默认值），则“minResolution”默认为“40075016.68557849/256/数学.pow（2，28）=0.0005831682455839253`。 |
| `maxZoom`                    | number (defaults to 28)                                      | 用于确定分辨率约束的最大缩放级别。它与“minZoom”（或“maxResolution”）和“zoomFactor”一起使用。请注意，如果还提供了“minResolution”，则它的优先级高于“maxZoom”。 |
| `minZoom`                    | number (defaults to 0)                                       | 用于确定分辨率约束的最小缩放级别。它与“maxZoom”（或“minResolution”）和“zoomFactor”一起使用。请注意，如果还提供了“maxResolution”，则它的优先级高于“minZoom”。 |
| `multiWorld`                 | boolean (defaults to false)                                  | 如果“false”，则视图受到约束，因此只有一个世界可见，并且不能平移到边缘。如果“true”的话，地图可能会以低比例显示多个世界。仅当“projection”为全局时使用。请注意，如果还提供了“extent”，则优先考虑它。 |
| `constrainResolution`        | boolean (defaults to false)                                  | 如果为true，则视图在交互后将始终设置为最接近的缩放级别；false表示允许中间缩放级别。 |
| `smoothResolutionConstraint` | boolean (defaults to true)                                   | 如果为true，则视图在交互后将始终设置为最接近的缩放级别；false表示允许中间缩放级别。 |
| `showFullExtent`             | boolean (defaults to false)                                  | 允许缩小视图以显示完整的配置范围。默认情况下，当视图配置了范围时，用户将无法缩小视图，因此视口在任一维度上都超过了范围。这意味着如果视口比配置的盘区的纵横比更高或更宽，则整个范围可能不可见。如果showFullExtent为true，则用户可以缩小视图，使视口超出配置范围的高度或宽度，但不能同时超出两者，从而允许显示完整范围。 |
| `projection`                 | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) (defaults to 'EPSG:3857') | 投影。默认情况下，球体是墨卡托。                             |
| `resolution`                 | number                                                       | 视图的初始分辨率。单位是每像素的“投影”单位（例如每像素米数）。另一种设置方法是设置“zoom”。如果既没有定义this也没有定义“zoom”，则不会获取层源，但可以稍后使用“#setZoom”或“setResolution”设置它们。 |
| `resolutions`                | Array.number                                                 | `resolutions`来确定分辨率约束。如果设置了“maxResolution”、“minResolution”、“minZoom”、“maxZoom”和“zoomFactor”选项将被忽略。 |
| `rotation`                   | number (defaults to 0)                                       | 以弧度表示的视图的初始旋转（正旋转顺时针，0表示北）          |
| `zoom`                       | number                                                       | 仅在未定义“resolution”时使用。用于计算视图初始分辨率的缩放级别。 |
| `zoomFactor`                 | number (defaults to 2)                                       | 用于计算相应分辨率的缩放因子。                               |

## 方法

#### adjustCenter(deltaCoordinates)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1365](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1365)

将相对坐标添加到视图中心。将应用任何范围约束。

| Name               | Type                                                         | Description      |
| ------------------ | ------------------------------------------------------------ | ---------------- |
| `deltaCoordinates` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 要添加的相对值。 |



#### adjustResolution(ratio, opt_anchor)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1392](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1392)

将视图分辨率乘以一个比率，通常可以选择一个锚。将应用任何分辨率约束。

| Name     | Type                                                         | Description              |
| -------- | ------------------------------------------------------------ | ------------------------ |
| `ratio`  | number                                                       | 应用于视图分辨率的比率。 |
| `anchor` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 转换的锚点。             |



#### adjustRotation(delta, opt_anchor)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1440](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1440)

向旋转视图添加值，通常使用一个锚，适用于任何的旋转限制。

| Name     | Type                                                         | Description                              |
| -------- | ------------------------------------------------------------ | ---------------------------------------- |
| `delta`  | number                                                       | 要添加到缩放旋转的相对值，以弧度为单位。 |
| `anchor` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 旋转中心。                               |



#### adjustZoom(delta, opt_anchor)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1429](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1429)

Adds a value to the view zoom level, optionally using an anchor. Any resolution constraint will apply.

| Name     | Type                                                         | Description                |
| -------- | ------------------------------------------------------------ | -------------------------- |
| `delta`  | number                                                       | 要添加到缩放级别的相对值。 |
| `anchor` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 转换的源。                 |



#### animate(var_args)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 496](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L496)

动画视图。视图的中心、缩放（或分辨率）和旋转可以为视图状态之间的平滑过渡设置动画。例如，要将视图动画设置到新的缩放级别：

```
view.animate({zoom: view.getZoom() + 1});
```

默认情况下，动画持续一秒，并使用 in-and-out 的缓冲。您可以通过包含“duration”（以毫秒为单位）和“easing”选项自定义此行为，参考（[`module:ol/easing`](https://openlayers.org/en/latest/apidoc/module-ol_easing.html)）。

若要将多个动画链接在一起，请调用具有多个动画对象的方法。例如，先缩放，后平移：

```
view.animate({zoom: 10}, {center: [0, 0]});
```

如果您提供一个函数作为animate方法的最后一个参数，它将在动画系列的末尾被调用。如果动画系列自行完成，则使用“true”调用回调；如果取消，则使用“false”调用回调。

通过用户的交互可以取消动画，例如拖动地图，或者调用 `view.setCenter()` 和、`view.setResolution()`、`view.setResolution()`、 `view.setRotation()`等其他交互方法。

**var_args**

动画选项。通过传递多个选项对象，可以连续运行多个动画。若要并行运行多个动画，请多次调用该方法。可选回调可以作为最后一个参数提供。将使用一个布尔值调用回调，该布尔值指示动画是否在未取消的情况下完成。

| Name         | Type                                                         | Description                                                  |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `center`     | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 动画结束时视图的中心                                         |
| `zoom`       | number                                                       | 动画结束时视图的缩放级别。这个优先于`resolution`。           |
| `resolution` | number                                                       | 动画结束时视图的分辨率。如果还提供了“zoom”，则将忽略此选项。 |
| `rotation`   | number                                                       | 动画结束是的旋转。                                           |
| `anchor`     | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 在旋转或分辨率动画期间保持固定的可选锚点。                   |
| `duration`   | number (defaults to 1000)                                    | 动画的持续时间（毫秒）。                                     |
| `easing`     | function                                                     | 动画缓冲（默认`module:ol/easing~inAndOut`）。该函数将为每一帧调用一个代表动画持续时间一部分的数字。函数应返回一个介于0和1之间的数字，表示朝向目标状态的进度。 |

#### beginInteraction()

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1640](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1640)

通知视图交互已开始。如果需要（取决于它的约束），视图状态将被解析为一个稳定的状态。



#### calculateExtent(opt_size){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 898](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L898)

计算当前视图状态的范围和传递的大小。大小是计算范围应适合的窗口的像素尺寸。在大多数情况下，您希望获得整个地图的范围，即`map.getSize()`.

| Name   | Type                                                         | Description                                              |
| ------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| `size` | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) | 窗口像素大小。如果未提供，将使用使用此视图的映射的大小。 |



##### Returns:

Extent.

#### cancelAnimations()

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 629](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L629)

取消任何正在进行的动画。



#### centerOn(coordinate, size, position)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1321](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1321)

以坐标和视图位置为中心。

| Name         | Type                                                         | Description                  |
| ------------ | ------------------------------------------------------------ | ---------------------------- |
| `coordinate` | [module:ol/coordinate~Coordinate                             | 坐标。                       |
| `size`       | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) | 窗口像素大小                 |
| `position`   | [module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel) | 将视图上的位置置于中心位置。 |



#### changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

增加修改的次数，并触发 'change' 事件。



#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

派发一个事件并调用所有侦听器来侦听此类型的事件。事件参数可以是字符串，也可以是具有“type”属性的对象。

| Name    | Type                                                         | Description |
| ------- | ------------------------------------------------------------ | ----------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | 事件对象    |

##### Returns:

`false` 如果在事件对象或者监听器上调用了preventDefault 则返回false。



#### endInteraction(opt_duration, opt_resolutionDirection, opt_anchor)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1654](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1654)

通知视图交互已结束。如果需要（取决于它的约束），视图状态将被解析为一个稳定的状态。

| Name                  | Type                                                         | Description            |
| --------------------- | ------------------------------------------------------------ | ---------------------- |
| `duration`            | number                                                       | 动画持续时间（毫秒）。 |
| `resolutionDirection` | number                                                       | 缩放的方向。           |
| `anchor`              | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | 转变的起源。           |



#### fit(geometryOrExtent, opt_options)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1198](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1198)

根据给定的地图大小和边界拟合给定的几何体或范围。大小是窗口的像素尺寸，以适应范围。在大多数情况下，您需要使用地图大小，即`map.getSize()`. 处理地图角度。

| Name               | Type                                                         | Description                |
| ------------------ | ------------------------------------------------------------ | -------------------------- |
| `geometryOrExtent` | [module:ol/geom/SimpleGeometry~SimpleGeometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_SimpleGeometry-SimpleGeometry.html) \| [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | 适合视图的几何图形或范围。 |

**Options**

| Name            | Type                                                         | Description                                                  |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `size`          | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) | 要适应范围的窗口的大小（以像素为单位）。默认值是使用此视图的DOM中第一个映射的当前大小，如果找不到此类映射，则为“[100，100]”。 |
| `padding`       | Array.{number}(defaults to [0, 0, 0, 0])                     | 视图中可以清楚Padding (以像素为单位) 。数组中Padding的值分别是上、右、下、左。 |
| `nearest`       | boolean (defaults to false)                                  | 如果视图“constraintResolution”选项为“true”，则获取最接近的范围，而不是实际适合该视图的最接近的范围。 |
| `minResolution` | number (defaults to 0)                                       | 缩放的最小分辨率                                             |
| `maxZoom`       | number                                                       | 缩放到的最大缩放级别。如果给定“minResolution”，则忽略此属性。 |
| `duration`      | number                                                       | 动画的持续时间（毫秒）。默认情况下，目标范围内没有动画。     |
| `easing`        | function                                                     | 动画期间使用的缓和功能（默认为`module:ol/easing~inAndOut`). 该函数将为每一帧调用一个代表动画持续时间一部分的数字。函数应返回一个介于0和1之间的数字，表示朝向目标状态的进度。 |
| `callback`      | function                                                     | 视图处于最终位置时的回调函数。如果动画全部完成则返回true。如果有取消则返回false。 |

#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

获取一个值。

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | 键名        |



##### Returns:

Value.

#### getAnimating(){boolean}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 612](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L612)

确定视图是否处于动画中。



##### Returns:

视图是否在动画

#### getCenter(){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)|undefined}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 842](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L842)

获取视图中心



##### Returns:

视图中心

#### getInteracting(){boolean}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 621](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L621)

确定用户是否正在与视图交互，例如平移或缩放。



##### Returns:

正在与视图交互。

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

获取对象属性名称的列表。



##### Returns:

属性名称的列表

#### getMaxResolution(){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 925](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L925)

获取视图的最大分辨率。

##### Returns:

视图的最大分辨率。

#### getMaxZoom(){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 943](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L943)

获取视图的最大缩放级别。

##### Returns:

最大缩放级别。

#### getMinResolution(){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 934](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L934)

获取视图的最小分辨率。

##### Returns:

视图的最小分辨率。

#### getMinZoom(){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 963](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L963)

获取视图的最小缩放级别。

##### Returns:

缩放的最小级别

#### getProjection(){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 992](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L992)

获取视图投影。

##### Returns:

视图的投影

#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

获取一个包含所有属性名和值的对象。

##### Returns:

Object.

#### getResolution(){number|undefined}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1002](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1002)

获取视图分辨率。

##### Returns:

视图分辨率

#### getResolutionForExtent(extent, opt_size){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1024](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1024)

获取给定范围（以地图单位表示）和大小（以像素为单位）的分辨率。

| Name     | Type                                                         | Description    |
| -------- | ------------------------------------------------------------ | -------------- |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Extent.        |
| `size`   | [module:ol/size~Size](https://openlayers.org/en/latest/apidoc/module-ol_size.html#~Size) | 窗口像素大小。 |

##### Returns:

指定范围大小的分辨率。

#### getResolutionForZoom(zoom){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1165)

获取某个缩放级别的分辨率。

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `zoom` | number | 缩放级别。  |

##### Returns:

指定缩放级别的分辨率

#### getResolutions(){Array.(number)|undefined}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1012](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1012)

获取视图的分辨率。这将返回传递给视图构造函数的解析数组，如果没有给定解析，则返回未定义的数组。

##### Returns:

The resolutions of the view.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

获取此对象的版本号。每次修改对象时，其版本号都将递增。

##### Returns:

Revision.

#### getRotation(){number}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1074](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1074)

获取视图旋转。

##### Returns:

以弧度表示的视图旋转。

#### getZoom(){number|undefined}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1125](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1125)

获取当前缩放级别。如果视图不约束分辨率，或者正在进行交互或动画，则此方法可能返回非整数缩放级别。

##### Returns:

Zoom.

#### getZoomForResolution(resolution){number|undefined}

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1140](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1140)

获取分辨率的缩放级别。

| Name         | Type   | Description     |
| ------------ | ------ | --------------- |
| `resolution` | number | The resolution. |

##### Returns:

指定分辨率的缩放级别

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

事件监听

| Name       | Type                   | Description              |
| ---------- | ---------------------- | ------------------------ |
| `type`     | string \| Array.string | 事件类型或事件类型数组。 |
| `listener` | function               | 监听回调函数             |

##### Returns:

侦听器的唯一键。如果以事件类型数组作为第一个参数调用，则返回的是键数组。

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

只监听一次指定类型的事件

| Name       | Type                   | Description              |
| ---------- | ---------------------- | ------------------------ |
| `type`     | string \| Array.string | 事件类型或者事件类型数组 |
| `listener` | function               | 时间监听回调函数         |

##### Returns:

侦听器的唯一键。如果以事件类型数组作为第一个参数调用，则返回的是键数组。

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setCenter(center)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1470](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1470)

设置当前视图的中心。将应用任何范围约束。

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| `center` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) \| undefined | 视图中心    |



#### setConstrainResolution(enabled)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 983](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L983)

是否可以设置视图缩放级别之间的范围

| Name      | Type    | Description        |
| --------- | ------- | ------------------ |
| `enabled` | boolean | 分辨率是否受约束。 |



#### setMaxZoom(zoom)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 954](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L954)

为视图设置新的最大缩放级别。

| Name   | Type   | Description             |
| ------ | ------ | ----------------------- |
| `zoom` | number | The maximum zoom level. |



#### setMinZoom(zoom)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 974](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L974)

为视图设置新的最小缩放级别。

| Name   | Type   | Description             |
| ------ | ------ | ----------------------- |
| `zoom` | number | The minimum zoom level. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

设置键值对的集合。请注意，这将更改任何现有属性并添加新属性（它不会删除任何现有属性）。

| Name     | Type               | Description        |
| -------- | ------------------ | ------------------ |
| `values` | Object.(string, *) | Values.            |
| `silent` | boolean            | 更新而不触发事件。 |



#### setResolution(resolution)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1500](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1500)

设置此视图的分辨率。将应用任何分辨率约束。

| Name         | Type                | Description |
| ------------ | ------------------- | ----------- |
| `resolution` | number \| undefined | 视图分辨率  |



#### setRotation(rotation)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1511](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1511)

设置此视图的旋转。将应用任何旋转约束。

| Name       | Type   | Description            |
| ---------- | ------ | ---------------------- |
| `rotation` | number | 以弧度表示的视图旋转。 |



#### setZoom(zoom)

[View.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js), [line 1521](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/View.js#L1521)

缩放到指定的缩放级别。将应用任何分辨率约束。

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `zoom` | number | Zoom level. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

取消指定类型的监听

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

取消设置某个属性

| Name     | Type    | Description    |
| -------- | ------- | -------------- |
| `key`    | string  | 属性名         |
| `silent` | boolean | 取消不触发事件 |