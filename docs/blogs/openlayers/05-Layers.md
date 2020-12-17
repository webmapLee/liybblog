---
title: Layers
sidebarDepth: 2
autoGroup-1: API文档
---

## 概述

Layers 是轻量级的容器，容器中的数据从[sources](https://openlayers.org/en/latest/apidoc/module-ol_source_Source-Source.html)中获取，有四个图层接口[ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html)，[ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html)，[ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)，[ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html)

## Source

`import Source from 'ol/source/Source';`

抽象基类；通常只用于创建子类，不在应用程序中实例化。[`module:ol/layer/Layer~Layer`](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html) 资源的基类。

当source状态改变时将触发一个 ‘change’的普通事件。

### new Source(options)

| Name                      | Type                                                         | Description                                 |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| `attributions`            | [module:ol/source/Source~AttributionLike](https://openlayers.org/en/latest/apidoc/module-ol_source_Source.html#~AttributionLike) |                                             |
| `attributionsCollapsible` | boolean (defaults to true)                                   | Attributions are collapsible.               |
| `projection`              | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection. Default is the view projection. |
| `state`                   | [module:ol/source/State](https://openlayers.org/en/latest/apidoc/module-ol_source_State.html) (defaults to 'ready') |                                             |
| `wrapX`                   | boolean (defaults to false)                                  |                                             |

### 事件:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### 子类

- [module:ol/source/Image~ImageSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html)
- [module:ol/source/Tile~TileSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html)
- [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html)

### 继承

- [module:ol/Object~BaseObject](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html)

### 方法

#### changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

增加修改的次数并且触发"change"事件。



#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

分派一个事件并调用所有侦听器来侦听此类型的事件。事件参数可以是字符串，也可以是具有“type”属性的对象

| Name    | Type                                                         | Description   |
| ------- | ------------------------------------------------------------ | ------------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | Event object. |



##### Returns:

`false` if anyone called preventDefault on the event object or if any of the listeners returned false.

#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.

##### Returns:

List of property names.



#### getProjection(){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)}

[source/Source.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js), [line 115](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js#L115)

Get the projection of the source.

##### Returns:

Projection.



#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.

##### Returns:

Object.



#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

获取此对象的版本号。每次修改对象时，其版本号都将递增。

##### Returns:

Revision.

#### getState(){[module:ol/source/State](https://openlayers.org/en/latest/apidoc/module-ol_source_State.html)}

[source/Source.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js), [line 132](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js#L132)

Get the state of the source, see `module:ol/source/State~State` for possible states.

##### Returns:

State.

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |

##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.



#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### refresh()

[source/Source.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js#L154)

Refreshes the source. The source will be cleared, and data from the server will be reloaded.



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setAttributions(attributions)

[source/Source.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/source/Source.js#L165)

Set the attributions of the source.

| Name           | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `attributions` | [module:ol/source/Source~AttributionLike](https://openlayers.org/en/latest/apidoc/module-ol_source_Source.html#~AttributionLike) \| undefined | Attributions. Can be passed as `string`, `Array`, [`module:ol/source/Source~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_source_Source.html#~Attribution), or `undefined`. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

Unlisten for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |



## [ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile.html)~TileLayer

```javascript
import TileLayer from 'ol/layer/Tile';
```

对切片资源进行预渲染。注意参数中的任何一个属性集都是一个ol/Object~BaseObject模块；例如，在参数选项中设置 title:'My Title' 意味着title是可观察的，并且具有 get/set访问器。



### new TileLayer(opt_options)

| Name                     | Type                                                         | Description                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`              | string (defaults to 'ol-layer')                              | 设置layer元素的css属性值。                                   |
| `opacity`                | number (defaults to 1)                                       | 不透明度 (0, 1).                                             |
| `visible`                | boolean (defaults to true)                                   | 是否可见.                                                    |
| `extent`                 | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | 图层渲染的边界范围。                                         |
| `zIndex`                 | number                                                       | 图层渲染你的z-index值。渲染时，将图层排序，首先按照z-index排序，其次按position排序。当为‘undefined’时，则相当于z-index值为0 的图层添加到图层几何中。或者当使用图层的setMap()方法时，则值为`Infinity`。 |
| `minResolution`          | number                                                       | 图层的最小分辨率                                             |
| `maxResolution`          | number                                                       | 图层最大分辨率                                               |
| `minZoom`                | number                                                       | 最小缩放级别                                                 |
| `maxZoom`                | number                                                       | 最大缩放级别                                                 |
| `preload`                | number (defaults to 0)                                       | 预加载。将低分辨率的切片加载到preload的级别。0则不预加载     |
| `source`                 | [module:ol/source/Tile~TileSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html) | 图层资源                                                     |
| `map`                    | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | 图层覆盖的地图对象。这个map对象不会再图层集中管理此图层。并且此图层将会渲染到地图顶层。这适用于临时添加图层。标准添加图层的方式请使用`module:ol/Map#addLayer`。 |
| `useInterimTilesOnError` | boolean (defaults to true)                                   | 报错时是否使用临时切片                                       |

### 事件

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:extent` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:opacity` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:preload` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:source` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:useInterimTilesOnError` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:visible` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:zIndex` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `postrender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered after a layer is rendered.
- `prerender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered before a layer is rendered.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### 继承

- [module:ol/layer/BaseTile~BaseTileLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html)

### Observable Properties

| Name                     | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description  |
| ------------------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | ------------ |
| `extent`                 | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | yes      | `change:extent`                                              | 图层范围     |
| `maxResolution`          | number                                                       | yes      | `change:maxresolution`                                       | 最大分辨率   |
| `maxZoom`                | number                                                       | yes      | `change:maxzoom`                                             | 最大缩放级别 |
| `minResolution`          | number                                                       | yes      | `change:minresolution`                                       | 最小分辨率   |
| `minZoom`                | number                                                       | yes      | `change:minzoom`                                             | 最小缩放级别 |
| `opacity`                | number                                                       | yes      | `change:opacity`                                             | 不透明度     |
| `preload`                | number                                                       | yes      | `change:preload`                                             | 预加载的级别 |
| `source`                 | SourceType                                                   | yes      | `change:source`                                              | 图层资源     |
| `useInterimTilesOnError` | boolean                                                      | yes      | `change:useinterimtilesonerror`                              | 默认切片     |
| `visible`                | boolean                                                      | yes      | `change:visible`                                             | 图层是否可见 |
| `zIndex`                 | number                                                       | yes      | `change:zindex`                                              | 图层z-index  |

### 方法

- changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

  增加修改的次数，并触发 'change' 事件。

  

#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

派发一个事件并调用所有侦听器来侦听此类型的事件。事件参数可以是字符串，也可以是具有“type”属性的对象。

| Name    | Type                                                         | Description |
| ------- | ------------------------------------------------------------ | ----------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | 事件对象    |

##### Returns:

`false` 如果在事件对象或者监听器上调用了preventDefault 则返回false。



#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getExtent(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 152](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L152)

Return the [`extent`](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) of the layer or `undefined` if it will be visible regardless of extent.



##### Returns:

The layer extent.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMaxResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 164](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L164)

Return the maximum resolution of the layer.



##### Returns:

The maximum resolution of the layer.

#### getMaxZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 194](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L194)

Return the maximum zoom level of the layer.



##### Returns:

The maximum zoom level of the layer.

#### getMinResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 174](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L174)

Return the minimum resolution of the layer.



##### Returns:

The minimum resolution of the layer.

#### getMinZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 184](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L184)

Return the minimum zoom level of the layer.



##### Returns:

The minimum zoom level of the layer.

#### getOpacity(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 204](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L204)

Return the opacity of the layer (between 0 and 1).



##### Returns:

The opacity of the layer.

#### getPreload(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html#getPreload)

[layer/BaseTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js), [line 75](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js#L75)

Return the level as number to which we will preload tiles up to.



##### Returns:

The level to preload tiles up to.

#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.



##### Returns:

Object.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

Get the version number for this object. Each time the object is modified, its version number will be incremented.



##### Returns:

Revision.

#### getSource(){SourceType} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#getSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 168](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L168)

Get the layer source.



##### Returns:

The layer source (or `null` if not yet set).

#### getUseInterimTilesOnError(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html#getUseInterimTilesOnError)

[layer/BaseTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js), [line 95](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js#L95)

Whether we use interim tiles on error.



##### Returns:

Use interim tiles on error.

#### getVisible(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 222](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L222)

Return the visibility of the layer (`true` or `false`).



##### Returns:

The visibility of the layer.

#### getZIndex(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 233](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L233)

Return the Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.



##### Returns:

The Z-index of the layer.

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setExtent(extent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L244)

Set the extent at which the layer is visible. If `undefined`, the layer will be visible at all extents.

| Name     | Type                                                         | Description              |
| -------- | ------------------------------------------------------------ | ------------------------ |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | The extent of the layer. |



#### setMap(map) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setMap)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L244)

Sets the layer to be rendered on top of other layers on a map. The map will not manage this layer in its layers collection, and the callback in `module:ol/Map#forEachLayerAtPixel` will receive `null` as layer. This is useful for temporary layers. To remove an unmanaged layer from the map, use `#setMap(null)`.

To add the layer to a map and have it managed by the map, use `module:ol/Map#addLayer` instead.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setMaxResolution(maxResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 254](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L254)

Set the maximum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `maxResolution` | number | The maximum resolution of the layer. |



#### setMaxZoom(maxZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 276](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L276)

Set the maximum zoom (exclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `maxZoom` | number | The maximum zoom of the layer. |



#### setMinResolution(minResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 264](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L264)

Set the minimum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `minResolution` | number | The minimum resolution of the layer. |



#### setMinZoom(minZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 288](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L288)

Set the minimum zoom (inclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `minZoom` | number | The minimum zoom of the layer. |



#### setOpacity(opacity) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 298](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L298)

Set the opacity of the layer, allowed values range from 0 to 1.

| Name      | Type   | Description               |
| --------- | ------ | ------------------------- |
| `opacity` | number | The opacity of the layer. |



#### setPreload(preload) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html#setPreload)

[layer/BaseTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js#L85)

Set the level as number to which we will preload tiles up to.

| Name      | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `preload` | number | The level to preload tiles up to. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setSource(source) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 286](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L286)

Set the layer source.

| Name     | Type       | Description       |
| -------- | ---------- | ----------------- |
| `source` | SourceType | The layer source. |



#### setUseInterimTilesOnError(useInterimTilesOnError) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html#setUseInterimTilesOnError)

[layer/BaseTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js), [line 107](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseTile.js#L107)

Set whether we use interim tiles on error.

| Name                     | Type    | Description                 |
| ------------------------ | ------- | --------------------------- |
| `useInterimTilesOnError` | boolean | Use interim tiles on error. |



#### setVisible(visible) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 309](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L309)

Set the visibility of the layer (`true` or `false`).

| Name      | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| `visible` | boolean | The visibility of the layer. |



#### setZIndex(zindex) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 320](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L320)

Set Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.

| Name     | Type   | Description               |
| -------- | ------ | ------------------------- |
| `zindex` | number | The z-index of the layer. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

Unlisten for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |

## [ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image.html)~ImageLayer

```javascript
import ImageLayer from 'ol/layer/Image';
```

Server-rendered images that are available for arbitrary extents and resolutions. Note that any property set in the options is set as a [`module:ol/Object~BaseObject`](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html) property on the layer object; for example, setting `title: 'My Title'` in the options means that `title` is observable, and has get/set accessors.



### new ImageLayer(opt_options)

| Name            | Type                                                         | Description                                                  |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`     | string (defaults to 'ol-layer')                              | A CSS class name to set to the layer element.                |
| `opacity`       | number (defaults to 1)                                       | Opacity (0, 1).                                              |
| `visible`       | boolean (defaults to true)                                   | Visibility.                                                  |
| `extent`        | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | The bounding extent for layer rendering. The layer will not be rendered outside of this extent. |
| `zIndex`        | number                                                       | The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()` method was used. |
| `minResolution` | number                                                       | The minimum resolution (inclusive) at which this layer will be visible. |
| `maxResolution` | number                                                       | The maximum resolution (exclusive) below which this layer will be visible. |
| `minZoom`       | number                                                       | The minimum view zoom level (exclusive) above which this layer will be visible. |
| `maxZoom`       | number                                                       | The maximum view zoom level (inclusive) at which this layer will be visible. |
| `map`           | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Sets the layer as overlay on a map. The map will not manage this layer in its layers collection, and the layer will be rendered on top. This is useful for temporary layers. The standard way to add a layer to a map and have it managed by the map is to use `module:ol/Map#addLayer`. |
| `source`        | [module:ol/source/Image~ImageSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html) | Source for this layer.                                       |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:extent` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:opacity` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:source` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:visible` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:zIndex` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `postrender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered after a layer is rendered.
- `prerender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered before a layer is rendered.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/layer/BaseImage~BaseImageLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseImage-BaseImageLayer.html)

### Observable Properties

| Name            | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                  |
| --------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | -------------------------------------------- |
| `extent`        | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | yes      | `change:extent`                                              | The layer extent.                            |
| `maxResolution` | number                                                       | yes      | `change:maxresolution`                                       | The maximum resolution of the layer.         |
| `maxZoom`       | number                                                       | yes      | `change:maxzoom`                                             | The maximum zoom level of the layer.         |
| `minResolution` | number                                                       | yes      | `change:minresolution`                                       | The minimum resolution of the layer.         |
| `minZoom`       | number                                                       | yes      | `change:minzoom`                                             | The minimum zoom level of the layer.         |
| `opacity`       | number                                                       | yes      | `change:opacity`                                             | The opacity of the layer.                    |
| `source`        | SourceType                                                   | yes      | `change:source`                                              | The layer source (or `null` if not yet set). |
| `visible`       | boolean                                                      | yes      | `change:visible`                                             | The visibility of the layer.                 |
| `zIndex`        | number                                                       | yes      | `change:zindex`                                              | The Z-index of the layer.                    |

### Methods

#### changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

Increases the revision counter and dispatches a 'change' event.



#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

Dispatches an event and calls all listeners listening for events of this type. The event parameter can either be a string or an Object with a `type` property.

| Name    | Type                                                         | Description   |
| ------- | ------------------------------------------------------------ | ------------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | Event object. |



##### Returns:

`false` if anyone called preventDefault on the event object or if any of the listeners returned false.

#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getExtent(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 152](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L152)

Return the [`extent`](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) of the layer or `undefined` if it will be visible regardless of extent.



##### Returns:

The layer extent.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMaxResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 164](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L164)

Return the maximum resolution of the layer.



##### Returns:

The maximum resolution of the layer.

#### getMaxZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 194](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L194)

Return the maximum zoom level of the layer.



##### Returns:

The maximum zoom level of the layer.

#### getMinResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 174](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L174)

Return the minimum resolution of the layer.



##### Returns:

The minimum resolution of the layer.

#### getMinZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 184](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L184)

Return the minimum zoom level of the layer.



##### Returns:

The minimum zoom level of the layer.

#### getOpacity(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 204](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L204)

Return the opacity of the layer (between 0 and 1).



##### Returns:

The opacity of the layer.

#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.



##### Returns:

Object.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

Get the version number for this object. Each time the object is modified, its version number will be incremented.



##### Returns:

Revision.

#### getSource(){SourceType} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#getSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 168](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L168)

Get the layer source.



##### Returns:

The layer source (or `null` if not yet set).

#### getVisible(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 222](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L222)

Return the visibility of the layer (`true` or `false`).



##### Returns:

The visibility of the layer.

#### getZIndex(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 233](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L233)

Return the Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.



##### Returns:

The Z-index of the layer.

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setExtent(extent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L244)

Set the extent at which the layer is visible. If `undefined`, the layer will be visible at all extents.

| Name     | Type                                                         | Description              |
| -------- | ------------------------------------------------------------ | ------------------------ |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | The extent of the layer. |



#### setMap(map) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setMap)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L244)

Sets the layer to be rendered on top of other layers on a map. The map will not manage this layer in its layers collection, and the callback in `module:ol/Map#forEachLayerAtPixel` will receive `null` as layer. This is useful for temporary layers. To remove an unmanaged layer from the map, use `#setMap(null)`.

To add the layer to a map and have it managed by the map, use `module:ol/Map#addLayer` instead.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setMaxResolution(maxResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 254](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L254)

Set the maximum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `maxResolution` | number | The maximum resolution of the layer. |



#### setMaxZoom(maxZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 276](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L276)

Set the maximum zoom (exclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `maxZoom` | number | The maximum zoom of the layer. |



#### setMinResolution(minResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 264](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L264)

Set the minimum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `minResolution` | number | The minimum resolution of the layer. |



#### setMinZoom(minZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 288](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L288)

Set the minimum zoom (inclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `minZoom` | number | The minimum zoom of the layer. |



#### setOpacity(opacity) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 298](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L298)

Set the opacity of the layer, allowed values range from 0 to 1.

| Name      | Type   | Description               |
| --------- | ------ | ------------------------- |
| `opacity` | number | The opacity of the layer. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setSource(source) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 286](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L286)

Set the layer source.

| Name     | Type       | Description       |
| -------- | ---------- | ----------------- |
| `source` | SourceType | The layer source. |



#### setVisible(visible) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 309](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L309)

Set the visibility of the layer (`true` or `false`).

| Name      | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| `visible` | boolean | The visibility of the layer. |



#### setZIndex(zindex) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 320](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L320)

Set Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.

| Name     | Type   | Description               |
| -------- | ------ | ------------------------- |
| `zindex` | number | The z-index of the layer. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

Unlisten for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |



## [ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector.html)~VectorLayer

```javascript
import VectorLayer from 'ol/layer/Vector';
```

Vector data that is rendered client-side. Note that any property set in the options is set as a [`module:ol/Object~BaseObject`](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html) property on the layer object; for example, setting `title: 'My Title'` in the options means that `title` is observable, and has get/set accessors.

### new VectorLayer(opt_options)

| Name                     | Type                                                         | Description                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`              | string (defaults to 'ol-layer')                              | A CSS class name to set to the layer element.                |
| `opacity`                | number (defaults to 1)                                       | Opacity (0, 1).                                              |
| `visible`                | boolean (defaults to true)                                   | Visibility.                                                  |
| `extent`                 | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | The bounding extent for layer rendering. The layer will not be rendered outside of this extent. |
| `zIndex`                 | number                                                       | The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()` method was used. |
| `minResolution`          | number                                                       | The minimum resolution (inclusive) at which this layer will be visible. |
| `maxResolution`          | number                                                       | The maximum resolution (exclusive) below which this layer will be visible. |
| `minZoom`                | number                                                       | The minimum view zoom level (exclusive) above which this layer will be visible. |
| `maxZoom`                | number                                                       | The maximum view zoom level (inclusive) at which this layer will be visible. |
| `renderOrder`            | [module:ol/render~OrderFunction](https://openlayers.org/en/latest/apidoc/module-ol_render.html#~OrderFunction) | Render order. Function to be used when sorting features before rendering. By default features are drawn in the order that they are created. Use `null` to avoid the sort, but get an undefined draw order. |
| `renderBuffer`           | number (defaults to 100)                                     | The buffer in pixels around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label. |
| `source`                 | [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) | Source.                                                      |
| `map`                    | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Sets the layer as overlay on a map. The map will not manage this layer in its layers collection, and the layer will be rendered on top. This is useful for temporary layers. The standard way to add a layer to a map and have it managed by the map is to use `module:ol/Map#addLayer`. |
| `declutter`              | boolean (defaults to false)                                  | Declutter images and text. Decluttering is applied to all image and text styles of all Vector and VectorTile layers that have set this to `true`. The priority is defined by the z-index of the layer, the `zIndex` of the style and the render order of features. Higher z-index means higher priority. Within the same z-index, a feature rendered before another has higher priority. |
| `style`                  | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) \| null | Layer style. When set to `null`, only features that have their own style will be rendered. See `module:ol/style` for default style which will be used if this is not set. |
| `updateWhileAnimating`   | boolean (defaults to false)                                  | When set to `true`, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to `false`, batches will be recreated when no animation is active. |
| `updateWhileInteracting` | boolean (defaults to false)                                  | When set to `true`, feature batches will be recreated during interactions. See also `updateWhileAnimating`. |

##### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:extent` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:opacity` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:source` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:visible` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:zIndex` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `postrender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered after a layer is rendered.
- `prerender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered before a layer is rendered.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/layer/Graticule~Graticule](https://openlayers.org/en/latest/apidoc/module-ol_layer_Graticule-Graticule.html)
- [module:ol/layer/Heatmap~Heatmap](https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap-Heatmap.html)

### Extends

- [module:ol/layer/BaseVector~BaseVectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html)

### Observable Properties

| Name            | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                  |
| --------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | -------------------------------------------- |
| `extent`        | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | yes      | `change:extent`                                              | The layer extent.                            |
| `maxResolution` | number                                                       | yes      | `change:maxresolution`                                       | The maximum resolution of the layer.         |
| `maxZoom`       | number                                                       | yes      | `change:maxzoom`                                             | The maximum zoom level of the layer.         |
| `minResolution` | number                                                       | yes      | `change:minresolution`                                       | The minimum resolution of the layer.         |
| `minZoom`       | number                                                       | yes      | `change:minzoom`                                             | The minimum zoom level of the layer.         |
| `opacity`       | number                                                       | yes      | `change:opacity`                                             | The opacity of the layer.                    |
| `source`        | SourceType                                                   | yes      | `change:source`                                              | The layer source (or `null` if not yet set). |
| `visible`       | boolean                                                      | yes      | `change:visible`                                             | The visibility of the layer.                 |
| `zIndex`        | number                                                       | yes      | `change:zindex`                                              | The Z-index of the layer.                    |

### Methods

#### changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

Increases the revision counter and dispatches a 'change' event.



#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

Dispatches an event and calls all listeners listening for events of this type. The event parameter can either be a string or an Object with a `type` property.

| Name    | Type                                                         | Description   |
| ------- | ------------------------------------------------------------ | ------------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | Event object. |



##### Returns:

`false` if anyone called preventDefault on the event object or if any of the listeners returned false.

#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getExtent(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 152](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L152)

Return the [`extent`](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) of the layer or `undefined` if it will be visible regardless of extent.



##### Returns:

The layer extent.

#### getFeatures(pixel){Promise.<Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)>>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#getFeatures)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 161](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L161)

Get the topmost feature that intersects the given pixel on the viewport. Returns a promise that resolves with an array of features. The array will either contain the topmost feature when a hit was detected, or it will be empty.

The hit detection algorithm used for this method is optimized for performance, but is less accurate than the one used in [`module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel`](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getFeaturesAtPixel): Text is not considered, and icons are only represented by their bounding box instead of the exact image.

| Name    | Type                                                         | Description |
| ------- | ------------------------------------------------------------ | ----------- |
| `pixel` | [module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel) | Pixel.      |



##### Returns:

Promise that resolves with an array of features.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMaxResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 164](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L164)

Return the maximum resolution of the layer.



##### Returns:

The maximum resolution of the layer.

#### getMaxZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 194](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L194)

Return the maximum zoom level of the layer.



##### Returns:

The maximum zoom level of the layer.

#### getMinResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 174](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L174)

Return the minimum resolution of the layer.



##### Returns:

The minimum resolution of the layer.

#### getMinZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 184](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L184)

Return the minimum zoom level of the layer.



##### Returns:

The minimum zoom level of the layer.

#### getOpacity(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 204](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L204)

Return the opacity of the layer (between 0 and 1).



##### Returns:

The opacity of the layer.

#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.



##### Returns:

Object.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

Get the version number for this object. Each time the object is modified, its version number will be incremented.



##### Returns:

Revision.

#### getSource(){SourceType} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#getSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 168](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L168)

Get the layer source.



##### Returns:

The layer source (or `null` if not yet set).

#### getStyle(){[module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike)|null|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#getStyle)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 188](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L188)

Get the style for features. This returns whatever was passed to the `style` option at construction or to the `setStyle` method.



##### Returns:

Layer style.

#### getStyleFunction(){[module:ol/style/Style~StyleFunction](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleFunction)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#getStyleFunction)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L197)

Get the style function.



##### Returns:

Layer style function.

#### getVisible(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 222](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L222)

Return the visibility of the layer (`true` or `false`).



##### Returns:

The visibility of the layer.

#### getZIndex(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 233](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L233)

Return the Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.



##### Returns:

The Z-index of the layer.

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setExtent(extent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L244)

Set the extent at which the layer is visible. If `undefined`, the layer will be visible at all extents.

| Name     | Type                                                         | Description              |
| -------- | ------------------------------------------------------------ | ------------------------ |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | The extent of the layer. |



#### setMap(map) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setMap)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L244)

Sets the layer to be rendered on top of other layers on a map. The map will not manage this layer in its layers collection, and the callback in `module:ol/Map#forEachLayerAtPixel` will receive `null` as layer. This is useful for temporary layers. To remove an unmanaged layer from the map, use `#setMap(null)`.

To add the layer to a map and have it managed by the map, use `module:ol/Map#addLayer` instead.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setMaxResolution(maxResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 254](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L254)

Set the maximum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `maxResolution` | number | The maximum resolution of the layer. |



#### setMaxZoom(maxZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 276](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L276)

Set the maximum zoom (exclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `maxZoom` | number | The maximum zoom of the layer. |



#### setMinResolution(minResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 264](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L264)

Set the minimum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `minResolution` | number | The minimum resolution of the layer. |



#### setMinZoom(minZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 288](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L288)

Set the minimum zoom (inclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `minZoom` | number | The minimum zoom of the layer. |



#### setOpacity(opacity) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 298](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L298)

Set the opacity of the layer, allowed values range from 0 to 1.

| Name      | Type   | Description               |
| --------- | ------ | ------------------------- |
| `opacity` | number | The opacity of the layer. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setSource(source) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 286](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L286)

Set the layer source.

| Name     | Type       | Description       |
| -------- | ---------- | ----------------- |
| `source` | SourceType | The layer source. |



#### setStyle(opt_style) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#setStyle)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 235](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L235)

Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If set to `null`, the layer has no style (a `null` style), so only features that have their own styles will be rendered in the layer. Call `setStyle()` without arguments to reset to the default style. See `module:ol/style` for information on the default style.

| Name    | Type                                                         | Description  |
| ------- | ------------------------------------------------------------ | ------------ |
| `style` | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) \| null | Layer style. |



#### setVisible(visible) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 309](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L309)

Set the visibility of the layer (`true` or `false`).

| Name      | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| `visible` | boolean | The visibility of the layer. |



#### setZIndex(zindex) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 320](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L320)

Set Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.

| Name     | Type   | Description               |
| -------- | ------ | ------------------------- |
| `zindex` | number | The z-index of the layer. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

Unlisten for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |

## [ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile.html)~VectorTileLayer

```javascript
import VectorTileLayer from 'ol/layer/VectorTile';
```

Layer for vector tile data that is rendered client-side. Note that any property set in the options is set as a [`module:ol/Object~BaseObject`](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html) property on the layer object; for example, setting `title: 'My Title'` in the options means that `title` is observable, and has get/set accessors.

### new VectorTileLayer(opt_options)

| Name                     | Type                                                         | Description                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`              | string (defaults to 'ol-layer')                              | A CSS class name to set to the layer element.                |
| `opacity`                | number (defaults to 1)                                       | Opacity (0, 1).                                              |
| `visible`                | boolean (defaults to true)                                   | Visibility.                                                  |
| `extent`                 | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | The bounding extent for layer rendering. The layer will not be rendered outside of this extent. |
| `zIndex`                 | number                                                       | The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()` method was used. |
| `minResolution`          | number                                                       | The minimum resolution (inclusive) at which this layer will be visible. |
| `maxResolution`          | number                                                       | The maximum resolution (exclusive) below which this layer will be visible. |
| `minZoom`                | number                                                       | The minimum view zoom level (exclusive) above which this layer will be visible. |
| `maxZoom`                | number                                                       | The maximum view zoom level (inclusive) at which this layer will be visible. |
| `renderOrder`            | [module:ol/render~OrderFunction](https://openlayers.org/en/latest/apidoc/module-ol_render.html#~OrderFunction) | Render order. Function to be used when sorting features before rendering. By default features are drawn in the order that they are created. Use `null` to avoid the sort, but get an undefined draw order. |
| `renderBuffer`           | number (defaults to 100)                                     | The buffer in pixels around the tile extent used by the renderer when getting features from the vector tile for the rendering or hit-detection. Recommended value: Vector tiles are usually generated with a buffer, so this value should match the largest possible buffer of the used tiles. It should be at least the size of the largest point symbol or line width. |
| `renderMode`             | [module:ol/layer/VectorTileRenderType](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTileRenderType.html) \| string (defaults to 'hybrid') | Render mode for vector tiles:`'image'`: Vector tiles are rendered as images. Great performance, but point symbols and texts are always rotated with the view and pixels are scaled during zoom animations. When `declutter` is set to `true`, the decluttering is done per tile resulting in labels and point symbols getting cut off at tile boundaries.`'hybrid'`: Polygon and line elements are rendered as images, so pixels are scaled during zoom animations. Point symbols and texts are accurately rendered as vectors and can stay upright on rotated views.`'vector'`: Everything is rendered as vectors. Use this mode for improved performance on vector tile layers with only a few rendered features (e.g. for highlighting a subset of features of another layer with the same source). |
| `source`                 | [module:ol/source/VectorTile~VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html) | Source.                                                      |
| `map`                    | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Sets the layer as overlay on a map. The map will not manage this layer in its layers collection, and the layer will be rendered on top. This is useful for temporary layers. The standard way to add a layer to a map and have it managed by the map is to use `module:ol/Map#addLayer`. |
| `declutter`              | boolean (defaults to false)                                  | Declutter images and text. Decluttering is applied to all image and text styles of all Vector and VectorTile layers that have set this to `true`. The priority is defined by the z-index of the layer, the `zIndex` of the style and the render order of features. Higher z-index means higher priority. Within the same z-index, a feature rendered before another has higher priority. |
| `style`                  | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) | Layer style. See `module:ol/style` for default style which will be used if this is not defined. |
| `updateWhileAnimating`   | boolean (defaults to false)                                  | When set to `true`, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to `false`, batches will be recreated when no animation is active. |
| `updateWhileInteracting` | boolean (defaults to false)                                  | When set to `true`, feature batches will be recreated during interactions. See also `updateWhileAnimating`. |
| `preload`                | number (defaults to 0)                                       | Preload. Load low-resolution tiles up to `preload` levels. `0` means no preloading. |
| `useInterimTilesOnError` | boolean (defaults to true)                                   | Use interim tiles on error.                                  |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:extent` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:maxZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minResolution` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:minZoom` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:opacity` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:preload` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:source` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:useInterimTilesOnError` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:visible` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:zIndex` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `postrender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered after a layer is rendered.
- `prerender` ([module:ol/render/Event~RenderEvent](https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html)) - Triggered before a layer is rendered.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/layer/MapboxVector~MapboxVectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_MapboxVector-MapboxVectorLayer.html)

### Extends

- [module:ol/layer/BaseVector~BaseVectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html)

### Observable Properties

| Name                     | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                  |
| ------------------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | -------------------------------------------- |
| `extent`                 | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | yes      | `change:extent`                                              | The layer extent.                            |
| `maxResolution`          | number                                                       | yes      | `change:maxresolution`                                       | The maximum resolution of the layer.         |
| `maxZoom`                | number                                                       | yes      | `change:maxzoom`                                             | The maximum zoom level of the layer.         |
| `minResolution`          | number                                                       | yes      | `change:minresolution`                                       | The minimum resolution of the layer.         |
| `minZoom`                | number                                                       | yes      | `change:minzoom`                                             | The minimum zoom level of the layer.         |
| `opacity`                | number                                                       | yes      | `change:opacity`                                             | The opacity of the layer.                    |
| `preload`                | number                                                       | yes      | `change:preload`                                             | The level to preload tiles up to.            |
| `source`                 | SourceType                                                   | yes      | `change:source`                                              | The layer source (or `null` if not yet set). |
| `useInterimTilesOnError` | boolean                                                      | yes      | `change:useinterimtilesonerror`                              | Use interim tiles on error.                  |
| `visible`                | boolean                                                      | yes      | `change:visible`                                             | The visibility of the layer.                 |
| `zIndex`                 | number                                                       | yes      | `change:zindex`                                              | The Z-index of the layer.                    |

### Methods

#### changed() [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#changed)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 34](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L34)

Increases the revision counter and dispatches a 'change' event.



#### dispatchEvent(event){boolean|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_events_Target-Target.html#dispatchEvent)

[events/Target.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js), [line 85](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/events/Target.js#L85)

Dispatches an event and calls all listeners listening for events of this type. The event parameter can either be a string or an Object with a `type` property.

| Name    | Type                                                         | Description   |
| ------- | ------------------------------------------------------------ | ------------- |
| `event` | [module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html) \| string | Event object. |



##### Returns:

`false` if anyone called preventDefault on the event object or if any of the listeners returned false.

#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getExtent(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 152](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L152)

Return the [`extent`](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) of the layer or `undefined` if it will be visible regardless of extent.



##### Returns:

The layer extent.

#### getFeatures(pixel){Promise.<Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)>>}

[layer/VectorTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js), [line 142](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js#L142)

Get the topmost feature that intersects the given pixel on the viewport. Returns a promise that resolves with an array of features. The array will either contain the topmost feature when a hit was detected, or it will be empty.

The hit detection algorithm used for this method is optimized for performance, but is less accurate than the one used in [`module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel`](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#getFeaturesAtPixel): Text is not considered, and icons are only represented by their bounding box instead of the exact image.

| Name    | Type                                                         | Description |
| ------- | ------------------------------------------------------------ | ----------- |
| `pixel` | [module:ol/pixel~Pixel](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel) | Pixel.      |



##### Returns:

Promise that resolves with an array of features.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMaxResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 164](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L164)

Return the maximum resolution of the layer.



##### Returns:

The maximum resolution of the layer.

#### getMaxZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 194](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L194)

Return the maximum zoom level of the layer.



##### Returns:

The maximum zoom level of the layer.

#### getMinResolution(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 174](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L174)

Return the minimum resolution of the layer.



##### Returns:

The minimum resolution of the layer.

#### getMinZoom(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 184](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L184)

Return the minimum zoom level of the layer.



##### Returns:

The minimum zoom level of the layer.

#### getOpacity(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 204](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L204)

Return the opacity of the layer (between 0 and 1).



##### Returns:

The opacity of the layer.

#### getPreload(){number}

[layer/VectorTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js), [line 159](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js#L159)

Return the level as number to which we will preload tiles up to.



##### Returns:

The level to preload tiles up to.

#### getProperties(){Object.(string, *)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.



##### Returns:

Object.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

Get the version number for this object. Each time the object is modified, its version number will be incremented.



##### Returns:

Revision.

#### getSource(){SourceType} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#getSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 168](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L168)

Get the layer source.



##### Returns:

The layer source (or `null` if not yet set).

#### getStyle(){[module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike)|null|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#getStyle)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 188](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L188)

Get the style for features. This returns whatever was passed to the `style` option at construction or to the `setStyle` method.



##### Returns:

Layer style.

#### getStyleFunction(){[module:ol/style/Style~StyleFunction](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleFunction)|undefined} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#getStyleFunction)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L197)

Get the style function.



##### Returns:

Layer style function.

#### getUseInterimTilesOnError(){boolean}

[layer/VectorTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js), [line 169](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js#L169)

Whether we use interim tiles on error.



##### Returns:

Use interim tiles on error.

#### getVisible(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 222](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L222)

Return the visibility of the layer (`true` or `false`).



##### Returns:

The visibility of the layer.

#### getZIndex(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#getZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 233](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L233)

Return the Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.



##### Returns:

The Z-index of the layer.

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setExtent(extent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setExtent)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L244)

Set the extent at which the layer is visible. If `undefined`, the layer will be visible at all extents.

| Name     | Type                                                         | Description              |
| -------- | ------------------------------------------------------------ | ------------------------ |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) \| undefined | The extent of the layer. |



#### setMap(map) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setMap)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 244](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L244)

Sets the layer to be rendered on top of other layers on a map. The map will not manage this layer in its layers collection, and the callback in `module:ol/Map#forEachLayerAtPixel` will receive `null` as layer. This is useful for temporary layers. To remove an unmanaged layer from the map, use `#setMap(null)`.

To add the layer to a map and have it managed by the map, use `module:ol/Map#addLayer` instead.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setMaxResolution(maxResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 254](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L254)

Set the maximum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `maxResolution` | number | The maximum resolution of the layer. |



#### setMaxZoom(maxZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMaxZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 276](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L276)

Set the maximum zoom (exclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `maxZoom` | number | The maximum zoom of the layer. |



#### setMinResolution(minResolution) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinResolution)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 264](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L264)

Set the minimum resolution at which the layer is visible.

| Name            | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| `minResolution` | number | The minimum resolution of the layer. |



#### setMinZoom(minZoom) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setMinZoom)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 288](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L288)

Set the minimum zoom (inclusive) at which the layer is visible. Note that the zoom levels for layer visibility are based on the view zoom level, which may be different from a tile source zoom level.

| Name      | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `minZoom` | number | The minimum zoom of the layer. |



#### setOpacity(opacity) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setOpacity)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 298](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L298)

Set the opacity of the layer, allowed values range from 0 to 1.

| Name      | Type   | Description               |
| --------- | ------ | ------------------------- |
| `opacity` | number | The opacity of the layer. |



#### setPreload(preload)

[layer/VectorTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js), [line 181](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js#L181)

Set the level as number to which we will preload tiles up to.

| Name      | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `preload` | number | The level to preload tiles up to. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setSource(source) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html#setSource)

[layer/Layer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js), [line 286](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Layer.js#L286)

Set the layer source.

| Name     | Type       | Description       |
| -------- | ---------- | ----------------- |
| `source` | SourceType | The layer source. |



#### setStyle(opt_style) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html#setStyle)

[layer/BaseVector.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js), [line 235](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/BaseVector.js#L235)

Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If set to `null`, the layer has no style (a `null` style), so only features that have their own styles will be rendered in the layer. Call `setStyle()` without arguments to reset to the default style. See `module:ol/style` for information on the default style.

| Name    | Type                                                         | Description  |
| ------- | ------------------------------------------------------------ | ------------ |
| `style` | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) \| null | Layer style. |



#### setUseInterimTilesOnError(useInterimTilesOnError)

[layer/VectorTile.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js), [line 191](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/VectorTile.js#L191)

Set whether we use interim tiles on error.

| Name                     | Type    | Description                 |
| ------------------------ | ------- | --------------------------- |
| `useInterimTilesOnError` | boolean | Use interim tiles on error. |



#### setVisible(visible) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setVisible)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 309](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L309)

Set the visibility of the layer (`true` or `false`).

| Name      | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| `visible` | boolean | The visibility of the layer. |



#### setZIndex(zindex) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html#setZIndex)

[layer/Base.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js), [line 320](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/layer/Base.js#L320)

Set Z-index of the layer, which is used to order layers before rendering. The default Z-index is 0.

| Name     | Type   | Description               |
| -------- | ------ | ------------------------- |
| `zindex` | number | The z-index of the layer. |



#### un(type, listener) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#un)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 101](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L101)

Unlisten for a certain type of event.

| Name       | Type                   | Description                             |
| ---------- | ---------------------- | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function               | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |