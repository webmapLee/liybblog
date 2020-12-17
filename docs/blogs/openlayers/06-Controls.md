---
title: Controls
sidebarDepth: 2
autoGroup-1: API文档
---

## [Map default controls](https://openlayers.org/en/latest/apidoc/module-ol_control.html#.defaults)

```javascript
import * as olControl from 'ol/control';
```

### Methods

```javascript
import {defaults} from 'ol/control';
```

Set of controls included in maps by default. Unless configured otherwise, this returns a collection containing an instance of each of the following controls:

- [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html)
- [`module:ol/control/Rotate~Rotate`](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html)
- [`module:ol/control/Attribution~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html)

| Name                 | Type                                                         | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `attribution`        | boolean (defaults to true)                                   | Include [`module:ol/control/Attribution~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html). |
| `attributionOptions` | [module:ol/control/Attribution~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html#~Options) | Options for [`module:ol/control/Attribution~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html). |
| `rotate`             | boolean (defaults to true)                                   | Include [`module:ol/control/Rotate~Rotate`](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html). |
| `rotateOptions`      | [module:ol/control/Rotate~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate.html#~Options) | Options for [`module:ol/control/Rotate~Rotate`](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html). |
| `zoom`               | boolean                                                      | Include [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html). |
| `zoomOptions`        | [module:ol/control/Zoom~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom.html#~Options) | Options for [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html). |

### Type Definitions

**DefaultsOptions****{Object}**

##### Properties:

| Name                 | Type                                                         | Argument   | Default | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ---------- | ------- | ------------------------------------------------------------ |
| `attribution`        | boolean                                                      | optional | true    | Include [`module:ol/control/Attribution~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html). |
| `attributionOptions` | [module:ol/control/Attribution~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html#~Options) | optional |         | Options for [`module:ol/control/Attribution~Attribution`](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html). |
| `rotate`             | boolean                                                      | optional | true    | Include [`module:ol/control/Rotate~Rotate`](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html). |
| `rotateOptions`      | [module:ol/control/Rotate~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate.html#~Options) | optional |         | Options for [`module:ol/control/Rotate~Rotate`](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html). |
| `zoom`               | boolean                                                      | optional |         | Include [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html). |
| `zoomOptions`        | [module:ol/control/Zoom~Options](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom.html#~Options) | optional |         | Options for [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html). |

## [All controls](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

```javascript
import Control from 'ol/control/Control';
```

A control is a visible widget with a DOM element in a fixed position on the screen. They can involve user input (buttons), or be informational only; the position is determined using CSS. By default these are placed in the container with CSS class name `ol-overlaycontainer-stopevent`, but can use any outside DOM element.

This is the base class for controls. You can use it for simple custom controls by creating the element with listeners, creating an instance:

```javascript
var myControl = new Control({element: myElement});
```

and then adding this to the map.

The main advantage of having this as a control rather than a simple separate DOM element is that preventing propagation is handled for you. Controls will also be objects in a [`module:ol/Collection~Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html), so you can use their methods.

You can also extend this base for your own control class. See examples/custom-controls for an example of how to do this.

### new Control(options)

| Name      | Type                  | Description                                                  |
| --------- | --------------------- | ------------------------------------------------------------ |
| `element` | HTMLElement           | The element is the control's container element. This only needs to be specified if you're developing a custom control. |
| `render`  | function              | Function called when the control should be re-rendered. This is called in a `requestAnimationFrame` callback. |
| `target`  | HTMLElement \| string | Specify a target if you want the control to be rendered outside of the map's viewport. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/control/Attribution~Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html)
- [module:ol/control/FullScreen~FullScreen](https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen-FullScreen.html)
- [module:ol/control/MousePosition~MousePosition](https://openlayers.org/en/latest/apidoc/module-ol_control_MousePosition-MousePosition.html)
- [module:ol/control/OverviewMap~OverviewMap](https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap-OverviewMap.html)
- [module:ol/control/Rotate~Rotate](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html)
- [module:ol/control/ScaleLine~ScaleLine](https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html)
- [module:ol/control/ZoomSlider~ZoomSlider](https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomSlider-ZoomSlider.html)
- [module:ol/control/ZoomToExtent~ZoomToExtent](https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomToExtent-ZoomToExtent.html)
- [module:ol/control/Zoom~Zoom](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html)

### Extends

- [module:ol/Object~BaseObject](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html)

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

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)}

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 104](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L104)

Get the map associated with this control.



##### Returns:

Map.

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

#### render(mapEvent)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 143](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L143)

Renders the control.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `mapEvent` | [module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) | Map event.  |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setMap(map)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 115](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L115)

Remove the control from its current map and attach it to the new map. Subclasses may set up event handlers to get notified about changes to the map here.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.(string, *) | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setTarget(target)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L154)

This function is used to set a target element for the control. It has no effect if it is called after the control has been added to the map (i.e. after `setMap` is called on the control). If no `target` is set in the options passed to the control constructor and if `setTarget` is not called then the control is added to the map's overlay container.

| Name     | Type                  | Description |
| -------- | --------------------- | ----------- |
| `target` | HTMLElement \| string | Target.     |



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

## FullScreen

```javascript
import FullScreen from 'ol/control/FullScreen';
```

Provides a button that when clicked fills up the full screen with the map. The full screen source element is by default the element containing the map viewport unless overridden by providing the `source` option. In which case, the dom element introduced using this parameter will be displayed in full screen.

When in full screen mode, a close button is shown to exit full screen mode. The [Fullscreen API](https://www.w3.org/TR/fullscreen/) is used to toggle the map in full screen mode.

### new FullScreen(opt_options)

| Name          | Type                                      | Description                                                  |
| ------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `className`   | string (defaults to 'ol-full-screen')     | CSS class name.                                              |
| `label`       | string \| Text (defaults to '\u2922')     | Text label to use for the button. Instead of text, also an element (e.g. a `span` element) can be used. |
| `labelActive` | string \| Text (defaults to '\u00d7')     | Text label to use for the button when full-screen is active. Instead of text, also an element (e.g. a `span` element) can be used. |
| `tipLabel`    | string (defaults to 'Toggle full-screen') | Text label to use for the button tip.                        |
| `keys`        | boolean (defaults to false)               | Full keyboard access.                                        |
| `target`      | HTMLElement \| string                     | Specify a target if you want the control to be rendered outside of the map's viewport. |
| `source`      | HTMLElement \| string                     | The element to be displayed fullscreen. When not provided, the element containing the map viewport will be displayed fullscreen. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `enterfullscreen` - Triggered after the map entered fullscreen.
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `leavefullscreen` - Triggered after the map leave fullscreen.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

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

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#getMap)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 104](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L104)

Get the map associated with this control.



##### Returns:

Map.

#### getProperties(){Object.<string, *>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

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

#### render(mapEvent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#render)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 143](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L143)

Renders the control.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `mapEvent` | [module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) | Map event.  |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setMap(map)

[control/FullScreen.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/FullScreen.js), [line 230](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/FullScreen.js#L230)

Remove the control from its current map and attach it to the new map. Subclasses may set up event handlers to get notified about changes to the map here.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setTarget(target) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#setTarget)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L154)

This function is used to set a target element for the control. It has no effect if it is called after the control has been added to the map (i.e. after `setMap` is called on the control). If no `target` is set in the options passed to the control constructor and if `setTarget` is not called then the control is added to the map's overlay container.

| Name     | Type                  | Description |
| -------- | --------------------- | ----------- |
| `target` | HTMLElement \| string | Target.     |



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

## MousePosition

```javascript
import MousePosition from 'ol/control/MousePosition';
```

A control to show the 2D coordinates of the mouse cursor. By default, these are in the view projection, but can be in any supported projection. By default the control is shown in the top right corner of the map, but this can be changed by using the css selector `.ol-mouse-position`.

On touch devices, which usually do not have a mouse cursor, the coordinates of the currently touched position are shown.

### new MousePosition(opt_options)

| Name               | Type                                                         | Description                                                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`        | string (defaults to 'ol-mouse-position')                     | CSS class name.                                              |
| `coordinateFormat` | [module:ol/coordinate~CoordinateFormat](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~CoordinateFormat) | Coordinate format.                                           |
| `projection`       | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection. Default is the view projection.                  |
| `render`           | function                                                     | Function called when the control should be re-rendered. This is called in a `requestAnimationFrame` callback. |
| `target`           | HTMLElement \| string                                        | Specify a target if you want the control to be rendered outside of the map's viewport. |
| `undefinedHTML`    | string (defaults to '&#160;')                                | Markup to show when coordinates are not available (e.g. when the pointer leaves the map viewport). By default, the last position will be replaced with `' '` (` `) when the pointer leaves the viewport. To retain the last rendered position, set this option to something falsey (like an empty string `''`). |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:coordinateFormat` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `change:projection` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

### Observable Properties

| Name               | Type                                                         | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                   |
| ------------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | --------------------------------------------- |
| `coordinateFormat` | [module:ol/coordinate~CoordinateFormat](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~CoordinateFormat) \| undefined | yes      | `change:coordinateformat`                                    | The format to render the current position in. |
| `projection`       | [module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) \| undefined | yes      | `change:projection`                                          | The projection to report mouse position in.   |

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

#### getCoordinateFormat(){[module:ol/coordinate~CoordinateFormat](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~CoordinateFormat)|undefined}

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 131](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L131)

Return the coordinate format type used to render the current position or undefined.



##### Returns:

The format to render the current position in.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#getMap)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 104](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L104)

Get the map associated with this control.



##### Returns:

Map.

#### getProjection(){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)|undefined}

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 144](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L144)

Return the projection that is used to report the mouse position.



##### Returns:

The projection to report mouse position in.

#### getProperties(){Object.<string, *>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

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

#### render(mapEvent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_MousePosition-MousePosition.html#render)

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 260](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L260)

Update the projection. Rendering of the coordinates is done in `handleMouseMove` and `handleMouseUp`.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `mapEvent` | [module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) | Map event.  |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setCoordinateFormat(format)

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 196](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L196)

Set the coordinate format type used to render the current position.

| Name     | Type                                                         | Description                                   |
| -------- | ------------------------------------------------------------ | --------------------------------------------- |
| `format` | [module:ol/coordinate~CoordinateFormat](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~CoordinateFormat) | The format to render the current position in. |



#### setMap(map)

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 174](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L174)

Remove the control from its current map and attach it to the new map. Subclasses may set up event handlers to get notified about changes to the map here.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setProjection(projection)

[control/MousePosition.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js), [line 207](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/MousePosition.js#L207)

Set the projection that is used to report the mouse position.

| Name         | Type                                                         | Description                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------- |
| `projection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | The projection to report mouse position in. |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setTarget(target) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#setTarget)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L154)

This function is used to set a target element for the control. It has no effect if it is called after the control has been added to the map (i.e. after `setMap` is called on the control). If no `target` is set in the options passed to the control constructor and if `setTarget` is not called then the control is added to the map's overlay container.

| Name     | Type                  | Description |
| -------- | --------------------- | ----------- |
| `target` | HTMLElement \| string | Target.     |



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

## [ol/control/OverviewMap](https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap.html)~OverviewMap

```javascript
import OverviewMap from 'ol/control/OverviewMap';
```

Create a new control with a map acting as an overview map for another defined map.

### new OverviewMap(opt_options)

| Name             | Type                                                         | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`      | string (defaults to 'ol-overviewmap')                        | CSS class name.                                              |
| `collapsed`      | boolean (defaults to true)                                   | Whether the control should start collapsed or not (expanded). |
| `collapseLabel`  | string \| HTMLElement (defaults to '«')                      | Text label to use for the expanded overviewmap button. Instead of text, also an element (e.g. a `span` element) can be used. |
| `collapsible`    | boolean (defaults to true)                                   | Whether the control can be collapsed or not.                 |
| `label`          | string \| HTMLElement (defaults to '»')                      | Text label to use for the collapsed overviewmap button. Instead of text, also an element (e.g. a `span` element) can be used. |
| `layers`         | Array.<[module:ol/layer/Layer~Layer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html)> \| [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/layer/Layer~Layer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html)> | Layers for the overview map.                                 |
| `render`         | function                                                     | Function called when the control should be re-rendered. This is called in a `requestAnimationFrame` callback. |
| `rotateWithView` | boolean (defaults to false)                                  | Whether the control view should rotate with the main map view. |
| `target`         | HTMLElement \| string                                        | Specify a target if you want the control to be rendered outside of the map's viewport. |
| `tipLabel`       | string (defaults to 'Overview map')                          | Text label to use for the button tip.                        |
| `view`           | [module:ol/View~View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) | Custom view for the overview map (should use same projection as main map). If not provided, a default view with the same projection as the main map will be used. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

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

#### getCollapsed(){boolean}

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 604](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L604)

Determine if the overview map is collapsed.



##### Returns:

The overview map is collapsed.

#### getCollapsible(){boolean}

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 565](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L565)

Return `true` if the overview map is collapsible, `false` otherwise.



##### Returns:

True if the widget is collapsible.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#getMap)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 104](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L104)

Get the map associated with this control.



##### Returns:

Map.

#### getOverviewMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)}

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 644](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L644)

Return the overview map.



##### Returns:

Overview map.

#### getProperties(){Object.<string, *>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 135](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L135)

Get an object of all property names and values.



##### Returns:

Object.

#### getRevision(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html#getRevision)

[Observable.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js), [line 45](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Observable.js#L45)

Get the version number for this object. Each time the object is modified, its version number will be incremented.



##### Returns:

Revision.

#### getRotateWithView(){boolean}

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 613](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L613)

Return `true` if the overview map view can rotate, `false` otherwise.



##### Returns:

True if the control view can rotate.

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

#### render(mapEvent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap-OverviewMap.html#render)

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 653](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L653)

Update the overview map element.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `mapEvent` | [module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) | Map event.  |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setCollapsed(collapsed)

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 592](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L592)

Collapse or expand the overview map according to the passed parameter. Will not do anything if the overview map isn't collapsible or if the current collapsed state is already the one requested.

| Name        | Type    | Description                      |
| ----------- | ------- | -------------------------------- |
| `collapsed` | boolean | True if the widget is collapsed. |



#### setCollapsible(collapsible)

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 574](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L574)

Set whether the overview map should be collapsible.

| Name          | Type    | Description                        |
| ------------- | ------- | ---------------------------------- |
| `collapsible` | boolean | True if the widget is collapsible. |



#### setMap(map)

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 276](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L276)

Remove the control from its current map and attach it to the new map. Subclasses may set up event handlers to get notified about changes to the map here.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setRotateWithView(rotateWithView)

[control/OverviewMap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js), [line 622](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/OverviewMap.js#L622)

Set whether the overview map view should rotate with the main map view.

| Name             | Type    | Description                             |
| ---------------- | ------- | --------------------------------------- |
| `rotateWithView` | boolean | True if the control view should rotate. |



#### setTarget(target) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#setTarget)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L154)

This function is used to set a target element for the control. It has no effect if it is called after the control has been added to the map (i.e. after `setMap` is called on the control). If no `target` is set in the options passed to the control constructor and if `setTarget` is not called then the control is added to the map's overlay container.

| Name     | Type                  | Description |
| -------- | --------------------- | ----------- |
| `target` | HTMLElement \| string | Target.     |



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

## [ol/control/Rotate](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate.html)~Rotate

```javascript
import Rotate from 'ol/control/Rotate';
```

A button control to reset rotation to 0. To style this control use css selector `.ol-rotate`. A `.ol-hidden` css selector is added to the button when the rotation is 0.

### new Rotate(opt_options)

| Name         | Type                                    | Description                                                  |
| ------------ | --------------------------------------- | ------------------------------------------------------------ |
| `className`  | string (defaults to 'ol-rotate')        | CSS class name.                                              |
| `label`      | string \| HTMLElement (defaults to '⇧') | Text label to use for the rotate button. Instead of text, also an element (e.g. a `span` element) can be used. |
| `tipLabel`   | string (defaults to 'Reset rotation')   | Text label to use for the rotate tip.                        |
| `duration`   | number (defaults to 250)                | Animation duration in milliseconds.                          |
| `autoHide`   | boolean (defaults to true)              | Hide the control when rotation is 0.                         |
| `render`     | function                                | Function called when the control should be re-rendered. This is called in a `requestAnimationFrame` callback. |
| `resetNorth` | function                                | Function called when the control is clicked. This will override the default `resetNorth`. |
| `target`     | HTMLElement \| string                   | Specify a target if you want the control to be rendered outside of the map's viewport. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/control/Control~Control](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

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

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#getMap)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 104](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L104)

Get the map associated with this control.



##### Returns:

Map.

#### getProperties(){Object.<string, *>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

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

#### render(mapEvent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html#render)

[control/Rotate.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Rotate.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Rotate.js#L154)

Update the rotate control element.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `mapEvent` | [module:ol/MapEvent~MapEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html) | Map event.  |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setMap(map) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#setMap)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 115](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L115)

Remove the control from its current map and attach it to the new map. Subclasses may set up event handlers to get notified about changes to the map here.

| Name  | Type                                                         | Description |
| ----- | ------------------------------------------------------------ | ----------- |
| `map` | [module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html) | Map.        |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
| `silent` | boolean            | Update without triggering an event. |



#### setTarget(target) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html#setTarget)

[control/Control.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js), [line 154](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/control/Control.js#L154)

This function is used to set a target element for the control. It has no effect if it is called after the control has been added to the map (i.e. after `setMap` is called on the control). If no `target` is set in the options passed to the control constructor and if `setTarget` is not called then the control is added to the map's overlay container.

| Name     | Type                  | Description |
| -------- | --------------------- | ----------- |
| `target` | HTMLElement \| string | Target.     |



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