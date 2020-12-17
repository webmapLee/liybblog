---
title: Overlay
sidebarDepth: 2
autoGroup-1: API文档
---

```javascript
import Overlay from 'ol/Overlay';
```

An element to be displayed over the map and attached to a single map location. Like [`module:ol/control/Control~Control`](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html), Overlays are visible widgets. Unlike Controls, they are not in a fixed position on the screen, but are tied to a geographical coordinate, so panning the map will move an Overlay but not a Control.

Example:

```javascript
import Overlay from 'ol/Overlay';

var popup = new Overlay({
  element: document.getElementById('popup')
});
popup.setPosition(coordinate);
map.addOverlay(popup);
```

### new Overlay(options)

| Name               | Type                                                         | Description                                                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`               | number \| string                                             | Set the overlay id. The overlay id can be used with the [`module:ol/Map~Map#getOverlayById`](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getOverlayById) method. |
| `element`          | HTMLElement                                                  | The overlay element.                                         |
| `offset`           | Array.number (defaults to [0, 0])                          | Offsets in pixels used when positioning the overlay. The first element in the array is the horizontal offset. A positive value shifts the overlay right. The second element in the array is the vertical offset. A positive value shifts the overlay down. |
| `position`         | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | The overlay position in map projection.                      |
| `positioning`      | [module:ol/OverlayPositioning](https://openlayers.org/en/latest/apidoc/module-ol_OverlayPositioning.html) (defaults to 'top-left') | Defines how the overlay is actually positioned with respect to its `position` property. Possible values are `'bottom-left'`, `'bottom-center'`, `'bottom-right'`, `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`, `'top-center'`, and `'top-right'`. |
| `stopEvent`        | boolean (defaults to true)                                   | Whether event propagation to the map viewport should be stopped. If `true` the overlay is placed in the same container as that of the controls (CSS class name `ol-overlaycontainer-stopevent`); if `false` it is placed in the container with CSS class name specified by the `className` property. |
| `insertFirst`      | boolean (defaults to true)                                   | Whether the overlay is inserted first in the overlay container, or appended. If the overlay is placed in the same container as that of the controls (see the `stopEvent` option) you will probably set `insertFirst` to `true` so the overlay is displayed below the controls. |
| `autoPan`          | [module:ol/Overlay~PanIntoViewOptions](https://openlayers.org/en/latest/apidoc/module-ol_Overlay.html#~PanIntoViewOptions) \| boolean (defaults to false) | Pan the map when calling `setPosition`, so that the overlay is entirely visible in the current viewport? If `true` (deprecated), then `autoPanAnimation` and `autoPanMargin` will be used to determine the panning parameters; if an object is supplied then other parameters are ignored. |
| `autoPanAnimation` | [module:ol/Overlay~PanOptions](https://openlayers.org/en/latest/apidoc/module-ol_Overlay.html#~PanOptions) | The animation options used to pan the overlay into view. This animation is only used when `autoPan` is enabled. A `duration` and `easing` may be provided to customize the animation. Deprecated and ignored if `autoPan` is supplied as an object. |
| `autoPanMargin`    | number (defaults to 20)                                      | The margin (in pixels) between the overlay and the borders of the map when autopanning. Deprecated and ignored if `autoPan` is supplied as an object. |
| `autoPanOptions`   | [module:ol/Overlay~PanIntoViewOptions](https://openlayers.org/en/latest/apidoc/module-ol_Overlay.html#~PanIntoViewOptions) | The options to use for the autoPan. This is only used when `autoPan` is enabled and has preference over the individual `autoPanMargin` and `autoPanOptions`. |
| `className`        | string (defaults to 'ol-overlay-container ol-selectable')    | CSS class name.                                              |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:element` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:map` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:offset` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:position` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:positioning` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/Object~BaseObject](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html)

### Observable Properties

| Name          | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                                  |
| ------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `element`     | HTMLElement \| undefined                                     | yes      | `change:element`                                             | The Element containing the overlay.                          |
| `map`         | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) \| undefined | yes      | `change:map`                                                 | The map that the overlay is part of.                         |
| `offset`      | Array.number                                               | yes      | `change:offset`                                              | The offset.                                                  |
| `position`    | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) \| undefined | yes      | `change:position`                                            | The spatial point that the overlay is anchored at.           |
| `positioning` | [module:ol/OverlayPositioning](https://openlayers.org/en/latest/apidoc/module-ol_OverlayPositioning.html) | yes      | `change:positioning`                                         | How the overlay is positioned relative to its point on the map. |

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

#### getElement(){HTMLElement|undefined}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 223](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L223)

Get the DOM element of this overlay.



##### Returns:

The Element containing the overlay.

#### getId(){number|string|undefined}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 232](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L232)

Get the overlay identifier which is set on constructor.



##### Returns:

Id.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)|undefined}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 243](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L243)

Get the map associated with this overlay.



##### Returns:

The map that the overlay is part of.

#### getOffset(){Array.number}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 255](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L255)

Get the offset of this overlay.



##### Returns:

The offset.

#### getPosition(){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)|undefined}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 266](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L266)

Get the current position of this overlay.



##### Returns:

The spatial point that the overlay is anchored at.

#### getPositioning(){[module:ol/OverlayPositioning](https://openlayers.org/en/latest/apidoc/module-ol_OverlayPositioning.html)}

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 279](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L279)

Get the current positioning of this overlay.



##### Returns:

How the overlay is positioned relative to its point on the map.

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

#### on(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#on)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L58)

Listen for a certain type of event.

| Name       | Type                     | Description                             |
| ---------- | ------------------------ | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function                 | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### once(type, listener){[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)|Array.<[module:ol/events~EventsKey](https://openlayers.org/en/latest/apidoc/module-ol_events.html#~EventsKey)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#once)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 80](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L80)

Listen once for a certain type of event.

| Name       | Type                     | Description                             |
| ---------- | ------------------------ | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function                 | The listener function.                  |



##### Returns:

Unique key for the listener. If called with an array of event types as the first argument, the return will be an array of keys.

#### panIntoView(opt_panIntoViewOptions)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 415](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L415)

Pan the map so that the overlay is entirely visible in the current viewport (if necessary).

| Name                 | Type                                                         | Description |
| -------------------- | ------------------------------------------------------------ | ----------- |
| `panIntoViewOptions` | Options for the pan actionNameTypeDescription`animation`[module:ol/Overlay~PanOptions](https://openlayers.org/en/latest/apidoc/module-ol_Overlay.html#~PanOptions) (defaults to {})The animation parameters for the pan`margin`number (defaults to 20)The margin (in pixels) between the overlay and the borders of the map when panning into view. |             |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setElement(element)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 361](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L361)

Set the DOM element to be associated with this overlay.

| Name      | Type                     | Description                         |
| --------- | ------------------------ | ----------------------------------- |
| `element` | HTMLElement \| undefined | The Element containing the overlay. |



#### setMap(map)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 372](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L372)

Set the map to be associated with this overlay.

| Name  | Type                                                         | Description                          |
| ----- | ------------------------------------------------------------ | ------------------------------------ |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) \| undefined | The map that the overlay is part of. |



#### setOffset(offset)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 382](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L382)

Set the offset for this overlay.

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| `offset` | Array.number | Offset.     |



#### setPosition(position)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 394](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L394)

Set the position for this overlay. If the position is `undefined` the overlay is hidden.

| Name       | Type                                                         | Description                                        |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------- |
| `position` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) \| undefined | The spatial point that the overlay is anchored at. |



#### setPositioning(positioning)

[Overlay.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js), [line 494](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Overlay.js#L494)

Set the positioning for this overlay.

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `positioning` | [module:ol/OverlayPositioning](https://openlayers.org/en/latest/apidoc/module-ol_OverlayPositioning.html) | how the overlay is positioned relative to its point on the map. |



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

| Name       | Type                     | Description                             |
| ---------- | ------------------------ | --------------------------------------- |
| `type`     | string \| Array.string | The event type or array of event types. |
| `listener` | function                 | The listener function.                  |



#### unset(key, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#unset)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 197](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L197)

Unsets a property.

| Name     | Type    | Description                        |
| -------- | ------- | ---------------------------------- |
| `key`    | string  | Key name.                          |
| `silent` | boolean | Unset without triggering an event. |