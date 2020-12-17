---
title: interaction
sidebarDepth: 2
autoGroup-1: API文档
---



## ol/interaction

```javascript
import * as olInteraction from 'ol/interaction';
```

### Methods

```javascript
import {defaults} from 'ol/interaction';
```

Set of interactions included in maps by default. Specific interactions can be excluded by setting the appropriate option to false in the constructor options, but the order of the interactions is fixed. If you want to specify a different order for interactions, you will need to create your own [`module:ol/interaction/Interaction`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction.html) instances and insert them into a [`module:ol/Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection.html) in the order you want before creating your [`module:ol/Map~Map`](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) instance. Changing the order can be of interest if the event propagation needs to be stopped at a point. The default set of interactions, in sequence, is:

- [`module:ol/interaction/DragRotate~DragRotate`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotate-DragRotate.html)
- [`module:ol/interaction/DoubleClickZoom~DoubleClickZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DoubleClickZoom-DoubleClickZoom.html)
- [`module:ol/interaction/DragPan~DragPan`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragPan-DragPan.html)
- [`module:ol/interaction/PinchRotate~PinchRotate`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchRotate-PinchRotate.html)
- [`module:ol/interaction/PinchZoom~PinchZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchZoom-PinchZoom.html)
- [`module:ol/interaction/KeyboardPan~KeyboardPan`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardPan-KeyboardPan.html)
- [`module:ol/interaction/KeyboardZoom~KeyboardZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html)
- [`module:ol/interaction/MouseWheelZoom~MouseWheelZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom-MouseWheelZoom.html)
- [`module:ol/interaction/DragZoom~DragZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragZoom-DragZoom.html)

| Name                 | Type                        | Description                                                  |
| -------------------- | --------------------------- | ------------------------------------------------------------ |
| `altShiftDragRotate` | boolean (defaults to true)  | Whether Alt-Shift-drag rotate is desired.                    |
| `onFocusOnly`        | boolean (defaults to false) | Interact only when the map has the focus. This affects the `MouseWheelZoom` and `DragPan` interactions and is useful when page scroll is desired for maps that do not have the browser's focus. |
| `doubleClickZoom`    | boolean (defaults to true)  | Whether double click zoom is desired.                        |
| `keyboard`           | boolean (defaults to true)  | Whether keyboard interaction is desired.                     |
| `mouseWheelZoom`     | boolean (defaults to true)  | Whether mousewheel zoom is desired.                          |
| `shiftDragZoom`      | boolean (defaults to true)  | Whether Shift-drag zoom is desired.                          |
| `dragPan`            | boolean (defaults to true)  | Whether drag pan is desired.                                 |
| `pinchRotate`        | boolean (defaults to true)  | Whether pinch rotate is desired.                             |
| `pinchZoom`          | boolean (defaults to true)  | Whether pinch zoom is desired.                               |
| `zoomDelta`          | number                      | Zoom level delta when using keyboard or double click zoom.   |
| `zoomDuration`       | number                      | Duration of the zoom animation in milliseconds.              |

##### Returns:

A collection of interactions to be used with the [`module:ol/Map~Map`](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) constructor's `interactions` option.

### Type Definitions

##### Properties:

| Name                 | Type    | Argument   | Default | Description                                                  |
| -------------------- | ------- | ---------- | ------- | ------------------------------------------------------------ |
| `altShiftDragRotate` | boolean | optional | true    | Whether Alt-Shift-drag rotate is desired.                    |
| `onFocusOnly`        | boolean | optional | false   | Interact only when the map has the focus. This affects the `MouseWheelZoom` and `DragPan` interactions and is useful when page scroll is desired for maps that do not have the browser's focus. |
| `doubleClickZoom`    | boolean | optional | true    | Whether double click zoom is desired.                        |
| `keyboard`           | boolean | optional | true    | Whether keyboard interaction is desired.                     |
| `mouseWheelZoom`     | boolean | optional | true    | Whether mousewheel zoom is desired.                          |
| `shiftDragZoom`      | boolean | optional | true    | Whether Shift-drag zoom is desired.                          |
| `dragPan`            | boolean | optional | true    | Whether drag pan is desired.                                 |
| `pinchRotate`        | boolean | optional | true    | Whether pinch rotate is desired.                             |
| `pinchZoom`          | boolean | optional | true    | Whether pinch zoom is desired.                               |
| `zoomDelta`          | number  | optional |         | Zoom level delta when using keyboard or double click zoom.   |
| `zoomDuration`       | number  | optional |         | Duration of the zoom animation in milliseconds.              |

## [ol/interaction/Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction.html)~Interaction

```javascript
import Interaction from 'ol/interaction/Interaction';
```

Abstract base class; normally only used for creating subclasses and not instantiated in apps. User actions that change the state of the map. Some are similar to controls, but are not associated with a DOM element. For example, [`module:ol/interaction/KeyboardZoom~KeyboardZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html) is functionally the same as [`module:ol/control/Zoom~Zoom`](https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html), but triggered by a keyboard event not a button element event. Although interactions do not have a DOM element, some of them do render vectors and so are visible on the screen.

### new Interaction(opt_options)

| Name          | Type     | Description                                                  |
| ------------- | -------- | ------------------------------------------------------------ |
| `handleEvent` | function | Method called by the map to notify the interaction that a browser event was dispatched to the map. If the function returns a falsy value, propagation of the event to other interactions in the map's interactions chain will be prevented (this includes functions with no explicit return). The interactions are traversed in reverse order of the interactions collection of the map. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/interaction/DoubleClickZoom~DoubleClickZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DoubleClickZoom-DoubleClickZoom.html)
- [module:ol/interaction/DragAndDrop~DragAndDrop](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop-DragAndDrop.html)
- [module:ol/interaction/KeyboardPan~KeyboardPan](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardPan-KeyboardPan.html)
- [module:ol/interaction/KeyboardZoom~KeyboardZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html)
- [module:ol/interaction/MouseWheelZoom~MouseWheelZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom-MouseWheelZoom.html)
- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)
- [module:ol/interaction/Select~Select](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html)

### Extends

- [module:ol/Object~BaseObject](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean}

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)}

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



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

#### handleEvent(mapBrowserEvent){boolean}

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 77](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L77)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html).

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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



#### setActive(active)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



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



## [ol/interaction/Select](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select.html)~Select

```javascript
import Select from 'ol/interaction/Select';
```

Interaction for selecting vector features. By default, selected features are styled differently, so this interaction can be used for visual highlighting, as well as selecting features for other actions, such as modification or output. There are three ways of controlling which features are selected: using the browser event as defined by the `condition` and optionally the `toggle`, `add`/`remove`, and `multi` options; a `layers` filter; and a further feature filter using the `filter` option.

Selected features are added to an internal unmanaged layer.

### new Select(opt_options)

| Name              | Type                                                         | Description                                                  |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `addCondition`    | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. By default, this is `module:ol/events/condition~never`. Use this if you want to use different events for add and remove instead of `toggle`. |
| `condition`       | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. This is the event for the selected features as a whole. By default, this is `module:ol/events/condition~singleClick`. Clicking on a feature selects that feature and removes any that were in the selection. Clicking outside any feature removes all from the selection. See `toggle`, `add`, `remove` options for adding/removing extra features to/ from the selection. |
| `layers`          | Array.<[module:ol/layer/Layer~Layer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html)> \| function | A list of layers from which features should be selected. Alternatively, a filter function can be provided. The function will be called for each layer in the map and should return `true` for layers that you want to be selectable. If the option is absent, all visible layers will be considered selectable. |
| `style`           | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) \| null | Style for the selected features. By default the default edit style is used (see `module:ol/style`). Set to `null` if this interaction should not apply any style changes for selected features. If set to a falsey value, the selected feature's style will not change. |
| `removeCondition` | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. By default, this is `module:ol/events/condition~never`. Use this if you want to use different events for add and remove instead of `toggle`. |
| `toggleCondition` | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. This is in addition to the `condition` event. By default, `module:ol/events/condition~shiftKeyOnly`, i.e. pressing `shift` as well as the `condition` event, adds that feature to the current selection if it is not currently selected, and removes it if it is. See `add` and `remove` if you want to use different events instead of a toggle. |
| `multi`           | boolean (defaults to false)                                  | A boolean that determines if the default behaviour should select only single features or all (overlapping) features at the clicked map position. The default of `false` means single select. |
| `features`        | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Collection where the interaction will place selected features. Optional. If not set the interaction will create a collection. In any case the collection used by the interaction is returned by [`module:ol/interaction/Select~Select#getFeatures`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html#getFeatures). |
| `filter`          | [module:ol/interaction/Select~FilterFunction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select.html#~FilterFunction) | A function that takes an [`module:ol/Feature`](https://openlayers.org/en/latest/apidoc/module-ol_Feature.html) and an [`module:ol/layer/Layer`](https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer.html) and returns `true` if the feature may be selected or `false` otherwise. |
| `hitTolerance`    | number (defaults to 0)                                       | Hit-detection tolerance. Pixels inside the radius around the given position will be checked for features. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.
- `select` ([module:ol/interaction/Select~SelectEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-SelectEvent.html)) - Triggered when feature(s) has been (de)selected.

### Extends

- [module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getFeatures(){[module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)>}

[interaction/Select.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js), [line 274](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js#L274)

Get the selected features.



##### Returns:

Features collection.

#### getHitTolerance(){number}

[interaction/Select.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js), [line 283](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js#L283)

Returns the Hit-detection tolerance.



##### Returns:

Hit tolerance in pixels.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getLayer(feature){[module:ol/layer/Vector~VectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)}

[interaction/Select.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js), [line 296](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js#L296)

Returns the associated `vectorlayer` of the (last) selected feature. Note that this will not work with any programmatic method like pushing features to [`collection`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html#getFeatures).

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| `feature` | [module:ol/Feature~FeatureLike](https://openlayers.org/en/latest/apidoc/module-ol_Feature.html#~FeatureLike) | Feature     |



##### Returns:

Layer.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setHitTolerance(hitTolerance)

[interaction/Select.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js), [line 307](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js#L307)

Hit-detection tolerance. Pixels inside the radius around the given position will be checked for features.

| Name           | Type   | Description              |
| -------------- | ------ | ------------------------ |
| `hitTolerance` | number | Hit tolerance in pixels. |



#### setMap(map)

[interaction/Select.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js), [line 317](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Select.js#L317)

Remove the interaction from its current map, if any, and attach it to a new map, if any. Pass `null` to just remove the interaction from the current map.

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

## [ol/interaction/Draw](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html)~Draw

```javascript
import Draw from 'ol/interaction/Draw';
```

Interaction for drawing feature geometries.

### new Draw(options)

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`              | [module:ol/geom/GeometryType](https://openlayers.org/en/latest/apidoc/module-ol_geom_GeometryType.html) | Geometry type of the geometries being drawn with this instance. |
| `clickTolerance`    | number (defaults to 6)                                       | The maximum distance in pixels between "down" and "up" for a "up" event to be considered a "click" event and actually add a point/vertex to the geometry being drawn. The default of `6` was chosen for the draw interaction to behave correctly on mouse as well as on touch devices. |
| `features`          | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Destination collection for the drawn features.               |
| `source`            | [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) | Destination source for the drawn features.                   |
| `dragVertexDelay`   | number (defaults to 500)                                     | Delay in milliseconds after pointerdown before the current vertex can be dragged to its exact position. |
| `snapTolerance`     | number (defaults to 12)                                      | Pixel distance for snapping to the drawing finish.           |
| `stopClick`         | boolean (defaults to false)                                  | Stop click, singleclick, and doubleclick events from firing during drawing. |
| `maxPoints`         | number                                                       | The number of points that can be drawn before a polygon ring or line string is finished. By default there is no restriction. |
| `minPoints`         | number                                                       | The number of points that must be drawn before a polygon ring or line string can be finished. Default is `3` for polygon rings and `2` for line strings. |
| `finishCondition`   | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether the drawing can be finished. |
| `style`             | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) | Style for sketch features.                                   |
| `geometryFunction`  | [module:ol/interaction/Draw~GeometryFunction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html#~GeometryFunction) | Function that is called when a geometry's coordinates are updated. |
| `geometryName`      | string                                                       | Geometry name to use for features created by the draw interaction. |
| `condition`         | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. By default `module:ol/events/condition~noModifierKeys`, i.e. a click, adds a vertex or deactivates freehand drawing. |
| `freehand`          | boolean (defaults to false)                                  | Operate in freehand mode for lines, polygons, and circles. This makes the interaction always operate in freehand mode and takes precedence over any `freehandCondition` option. |
| `freehandCondition` | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | Condition that activates freehand drawing for lines and polygons. This function takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. The default is `module:ol/events/condition~shiftKeyOnly`, meaning that the Shift key activates freehand drawing. |
| `wrapX`             | boolean (defaults to false)                                  | Wrap the world horizontally on the sketch overlay.           |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `drawabort` ([module:ol/interaction/Draw~DrawEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html)) - Triggered upon feature draw abortion
- `drawend` ([module:ol/interaction/Draw~DrawEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html)) - Triggered upon feature draw end
- `drawstart` ([module:ol/interaction/Draw~DrawEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html)) - Triggered upon feature draw start
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

### Methods

#### abortDrawing()

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 978](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L978)

Stop drawing without adding the sketch feature to the target layer.



#### appendCoordinates(coordinates)

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 994](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L994)

Append coordinates to the end of the geometry that is currently being drawn. This can be used when drawing LineStrings or Polygons. Coordinates will either be appended to the current LineString or the outer ring of the current Polygon.

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `coordinates` | [module:ol/interaction/Draw~LineCoordType](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html#~LineCoordType) | Linear coordinates to be appended into the coordinate array. |



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

#### extend(feature)

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 1030](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L1030)

Initiate draw mode by starting from an existing geometry which will receive new additional points. This only works on features with `LineString` geometries, where the interaction will extend lines by adding points to the end of the coordinates array. This will change the original feature, instead of drawing a copy.

The function will dispatch a `drawstart` event.

| Name      | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html).<[module:ol/geom/LineString~LineString](https://openlayers.org/en/latest/apidoc/module-ol_geom_LineString-LineString.html)> | Feature to be extended. |



#### finishDrawing()

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 913](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L913)

Stop drawing and add the sketch feature to the target layer. The `module:ol/interaction/Draw~DrawEventType.DRAWEND` event is dispatched before inserting the feature.



#### get(key){*} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#get)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L113)

Gets a value.

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Key name.   |



##### Returns:

Value.

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getOverlay(){[module:ol/layer/Vector~VectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)}

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 490](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L490)

Get the overlay layer that this interaction renders sketch features to.



##### Returns:

Overlay layer.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### handleEvent(event){boolean}

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 500](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L500)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html) and may actually draw or finish the drawing.

| Name    | Type                                                         | Description        |
| ------- | ------------------------------------------------------------ | ------------------ |
| `event` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### removeLastPoint()

[interaction/Draw.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js), [line 876](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Draw.js#L876)

Remove last point of the feature currently being drawn.



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



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

## [ol/interaction/Modify](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify.html)~Modify

```javascript
import Modify from 'ol/interaction/Modify';
```

Interaction for modifying feature geometries. To modify features that have been added to an existing source, construct the modify interaction with the `source` option. If you want to modify features in a collection (for example, the collection used by a select interaction), construct the interaction with the `features` option. The interaction must be constructed with either a `source` or `features` option.

By default, the interaction will allow deletion of vertices when the `alt` key is pressed. To configure the interaction with a different condition for deletion, use the `deleteCondition` option.

### new Modify(options)

| Name                    | Type                                                         | Description                                                  |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`             | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event will be considered to add or move a vertex to the sketch. Default is `module:ol/events/condition~primaryAction`. |
| `deleteCondition`       | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. By default, `module:ol/events/condition~singleClick` with `module:ol/events/condition~altKeyOnly` results in a vertex deletion. |
| `insertVertexCondition` | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether a new vertex should be added to the sketch features. Default is `module:ol/events/condition~always`. |
| `pixelTolerance`        | number (defaults to 10)                                      | Pixel tolerance for considering the pointer close enough to a segment or vertex for editing. |
| `style`                 | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) | Style used for the features being modified. By default the default edit style is used (see `module:ol/style`). |
| `source`                | [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) | The vector source with features to modify. If a vector source is not provided, a feature collection must be provided with the features option. |
| `features`              | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | The features the interaction works on. If a feature collection is not provided, a vector source must be provided with the source option. |
| `wrapX`                 | boolean (defaults to false)                                  | Wrap the world horizontally on the sketch overlay.           |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `modifyend` ([module:ol/interaction/Modify.ModifyEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify.ModifyEvent.html)) - Triggered upon feature modification end
- `modifystart` ([module:ol/interaction/Modify.ModifyEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify.ModifyEvent.html)) - Triggered upon feature modification start
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getOverlay(){[module:ol/layer/Vector~VectorLayer](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)}

[interaction/Modify.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js), [line 467](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js#L467)

Get the overlay layer that this interaction renders sketch features to.



##### Returns:

Overlay layer.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### removePoint(){boolean}

[interaction/Modify.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js), [line 1194](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js#L1194)

Removes the vertex currently being pointed.



##### Returns:

True when a vertex was removed.

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active)

[interaction/Modify.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js), [line 443](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Modify.js#L443)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



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

## 

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |

## [ol/interaction/Extent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent.html)~Extent

```javascript
import Extent from 'ol/interaction/Extent';
```

Allows the user to draw a vector box by clicking and dragging on the map. Once drawn, the vector box can be modified by dragging its vertices or edges. This interaction is only supported for mouse devices.

### new Extent(opt_options)

| Name             | Type                                                         | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`      | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. Default is `module:ol/events/condition~always`. |
| `extent`         | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Initial extent. Defaults to no initial extent.               |
| `boxStyle`       | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) | Style for the drawn extent box. Defaults to `module:ol/style/Style~createEditing()['Polygon']` |
| `pixelTolerance` | number (defaults to 10)                                      | Pixel tolerance for considering the pointer close enough to a segment or vertex for editing. |
| `pointerStyle`   | [module:ol/style/Style~StyleLike](https://openlayers.org/en/latest/apidoc/module-ol_style_Style.html#~StyleLike) | Style for the cursor used to draw the extent. Defaults to `module:ol/style/Style~createEditing()['Point']` |
| `wrapX`          | boolean (defaults to false)                                  | Wrap the drawn extent across multiple maps in the X direction? Only affects visuals, not functionality. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `extentchanged` ([module:ol/interaction/Extent~ExtentEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent-ExtentEvent.html)) - Triggered after the extent is changed
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getExtent(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)}

[interaction/Extent.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js), [line 417](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js#L417)

Returns the current drawn extent in the view projection (or user projection if set)



##### Returns:

Drawn extent in the view projection.

#### getExtentInternal(){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)}

[interaction/Extent.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js), [line 430](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js#L430)

Returns the current drawn extent in the view projection



##### Returns:

Drawn extent in the view projection.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

#### getProperties(){Object.（string, *）} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getProperties)

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setExtent(extent)

[interaction/Extent.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js), [line 440](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Extent.js#L440)

Manually sets the drawn extent, using the view projection.

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| `extent` | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Extent      |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.（string, *） | Values.                             |
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

## [ol/interaction/DoubleClickZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DoubleClickZoom.html)~DoubleClickZoom

```javascript
import DoubleClickZoom from 'ol/interaction/DoubleClickZoom';
```

Allows the user to zoom by double-clicking on the map.

### new DoubleClickZoom(opt_options)

| Name       | Type                     | Description                                  |
| ---------- | ------------------------ | -------------------------------------------- |
| `duration` | number (defaults to 250) | Animation duration in milliseconds.          |
| `delta`    | number (defaults to 1)   | The zoom delta applied on each double click. |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/DragAndDrop](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop.html)~DragAndDrop

```javascript
import DragAndDrop from 'ol/interaction/DragAndDrop';
```

Handles input of vector data by drag and drop.

#### new DragAndDrop(opt_options)

| Name                 | Type                                                         | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formatConstructors` | Array.<Class.<[module:ol/format/Feature~FeatureFormat](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature-FeatureFormat.html)>> | Format constructors.                                         |
| `source`             | [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) | Optional vector source where features will be added. If a source is provided all existing features will be removed and new features will be added when they are dropped on the target. If you want to add features to a vector source without removing the existing features (append only), instead of providing the source option listen for the "addfeatures" event. |
| `projection`         | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Target projection. By default, the map's view's projection is used. |
| `target`             | HTMLElement                                                  | The element that is used as the drop target, default is the viewport element. |

### Fires:

- `addfeatures` ([module:ol/interaction/DragAndDrop~DragAndDropEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop-DragAndDropEvent.html)) - Triggered when features are added
- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                            |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



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

#### handleEvent(mapBrowserEvent){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#handleEvent)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 77](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L77)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html).

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active)

[interaction/DragAndDrop.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragAndDrop.js), [line 188](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragAndDrop.js#L188)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/DragBox](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox.html)~DragBox

```javascript
import DragBox from 'ol/interaction/DragBox';
```

Allows the user to draw a vector box by clicking and dragging on the map, normally combined with an [`module:ol/events/condition`](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html) that limits it to when the shift or other key is held down. This is used, for example, for zooming to a specific area of the map (see [`module:ol/interaction/DragZoom~DragZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragZoom-DragZoom.html) and [`module:ol/interaction/DragRotateAndZoom`](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom.html)).

### new DragBox(opt_options)

| Name              | Type                                                         | Description                                                  |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className`       | string (defaults to 'ol-dragbox')                            | CSS class name for styling the box.                          |
| `condition`       | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. Default is `ol/events/condition~mouseActionButton`. |
| `minArea`         | number (defaults to 64)                                      | The minimum area of the box in pixel, this value is used by the default `boxEndCondition` function. |
| `boxEndCondition` | [module:ol/interaction/DragBox~EndCondition](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox.html#~EndCondition) | A function that takes a [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and two [`module:ol/pixel~Pixel`](https://openlayers.org/en/latest/apidoc/module-ol_pixel.html#~Pixel)s to indicate whether a `boxend` event should be fired. Default is `true` if the area of the box is bigger than the `minArea` option. |
| `onBoxEnd`        | function                                                     | Code to execute just before `boxend` is fired.               |

### Fires:

- `boxdrag` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered on drag when box is active.
- `boxend` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered upon drag box end.
- `boxstart` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered upon drag box start.
- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/interaction/DragZoom~DragZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragZoom-DragZoom.html)

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getGeometry(){[module:ol/geom/Polygon~Polygon](https://openlayers.org/en/latest/apidoc/module-ol_geom_Polygon-Polygon.html)}

[interaction/DragBox.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragBox.js), [line 167](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragBox.js#L167)

Returns geometry of last drawn box.



##### Returns:

Geometry.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### handleEvent(mapBrowserEvent){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#handleEvent)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 131](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L131)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html) and may call into other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are detected.

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/DragPan](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragPan.html)~DragPan

```javascript
import DragPan from 'ol/interaction/DragPan';
```

Allows the user to pan the map by dragging the map.

### new DragPan(opt_options)

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`   | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. Default is `module:ol/events/condition~noModifierKeys` and `module:ol/events/condition~primaryAction`. |
| `onFocusOnly` | boolean (defaults to false)                                  | When the map's target has a `tabindex` attribute set, the interaction will only handle events when the map has the focus. |
| `kinetic`     | [module:ol/Kinetic~Kinetic](https://openlayers.org/en/latest/apidoc/module-ol_Kinetic-Kinetic.html) | Kinetic inertia to apply to the pan.                         |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### handleEvent(mapBrowserEvent){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#handleEvent)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 131](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L131)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html) and may call into other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are detected.

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/DragZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragZoom.html)~DragZoom

```javascript
import DragZoom from 'ol/interaction/DragZoom';
```

Allows the user to zoom the map by clicking and dragging on the map, normally combined with an [`module:ol/events/condition`](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html) that limits it to when a key, shift by default, is held down.

To change the style of the box, use CSS and the `.ol-dragzoom` selector, or your custom one configured with `className`.

#### new DragZoom(opt_options)

| Name        | Type                                                         | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `className` | string (defaults to 'ol-dragzoom')                           | CSS class name for styling the box.                          |
| `condition` | [module:ol/events/condition~Condition](https://openlayers.org/en/latest/apidoc/module-ol_events_condition.html#~Condition) | A function that takes an [`module:ol/MapBrowserEvent~MapBrowserEvent`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) and returns a boolean to indicate whether that event should be handled. Default is `module:ol/events/condition~shiftKeyOnly`. |
| `duration`  | number (defaults to 200)                                     | Animation duration in milliseconds.                          |
| `out`       | boolean (defaults to false)                                  | Use interaction for zooming out.                             |
| `minArea`   | number (defaults to 64)                                      | The minimum area of the box in pixel, this value is used by the parent default `boxEndCondition` function. |

### Fires:

- `boxdrag` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered on drag when box is active.
- `boxend` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered upon drag box end.
- `boxstart` ([module:ol/interaction/DragBox~DragBoxEvent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBoxEvent.html)) - Triggered upon drag box start.
- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/DragBox~DragBox](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html)

### Observable Properties

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getGeometry(){[module:ol/geom/Polygon~Polygon](https://openlayers.org/en/latest/apidoc/module-ol_geom_Polygon-Polygon.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html#getGeometry)

[interaction/DragBox.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragBox.js), [line 167](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/DragBox.js#L167)

Returns geometry of last drawn box.



##### Returns:

Geometry.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### handleEvent(mapBrowserEvent){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#handleEvent)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 131](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L131)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html) and may call into other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are detected.

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/Snap](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Snap.html)~Snap

```javascript
import Snap from 'ol/interaction/Snap';
```

Handles snapping of vector features while modifying or drawing them. The features can come from a [`module:ol/source/Vector`](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector.html) or [`module:ol/Collection~Collection`](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html) Any interaction object that allows the user to interact with the features using the mouse can benefit from the snapping, as long as it is added before.

The snap interaction modifies map browser event `coordinate` and `pixel` properties to force the snap to occur to any interaction that them.

```javascript
import Snap from 'ol/interaction/Snap';

const snap = new Snap({
  source: source
});

map.addInteraction(snap);
```

### new Snap(opt_options)

| Name             | Type                                                         | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `features`       | [module:ol/Collection~Collection](https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html).<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Snap to these features. Either this option or source should be provided. |
| `edge`           | boolean (defaults to true)                                   | Snap to edges.                                               |
| `vertex`         | boolean (defaults to true)                                   | Snap to vertices.                                            |
| `pixelTolerance` | number (defaults to 10)                                      | Pixel tolerance for considering the pointer close enough to a segment or vertex for snapping. |
| `source`         | [module:ol/source/Vector~VectorSource](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) | Snap to features from this source. Either this option or features should be provided |

### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Extends

- [module:ol/interaction/Pointer~PointerInteraction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                             |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise. |

### Methods

#### addFeature(feature, opt_listen)

[interaction/Snap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Snap.js), [line 207](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Snap.js#L207)

Add a feature to the collection of features that we may snap to.

| Name      | Type                                                         | Description                                                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature.                                                     |
| `listen`  | boolean                                                      | Whether to listen to the feature change or not Defaults to `true`. |



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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html#getPointerCount)

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### removeFeature(feature, opt_unlisten)

[interaction/Snap.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Snap.js), [line 329](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Snap.js#L329)

Remove a feature from the collection of features that we may snap to.

| Name       | Type                                                         | Description                                                  |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `feature`  | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature                                                      |
| `unlisten` | boolean                                                      | Whether to unlisten to the feature change or not. Defaults to `true`. |



#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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

## [ol/interaction/Pointer](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer.html)~PointerInteraction

```javascript
import PointerInteraction from 'ol/interaction/Pointer';
```

Base class that calls user-defined functions on `down`, `move` and `up` events. This class also manages "drag sequences".

When the `handleDownEvent` user function returns `true` a drag sequence is started. During a drag sequence the `handleDragEvent` user function is called on `move` events. The drag sequence ends when the `handleUpEvent` user function is called and returns `false`.

### new PointerInteraction(opt_options)

| Name              | Type     | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| `handleDownEvent` | function | Function handling "down" events. If the function returns `true` then a drag sequence is started. |
| `handleDragEvent` | function | Function handling "drag" events. This function is called on "move" events during a drag sequence. |
| `handleEvent`     | function | Method called by the map to notify the interaction that a browser event was dispatched to the map. The function may return `false` to prevent the propagation of the event to other interactions in the map's interactions chain. |
| `handleMoveEvent` | function | Function handling "move" events. This function is called on "move" events. This functions is also called during a drag sequence, so during a drag sequence both the `handleDragEvent` function and this function are called. If `handleDownEvent` is defined and it returns true this function will not be called during a drag sequence. |
| `handleUpEvent`   | function | Function handling "up" events. If the function returns `false` then the current drag sequence is stopped. |
| `stopDown`        | function | Should the down event be propagated to other interactions, or should be stopped? |

##### Fires:

- `change` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic change event. Triggered when the revision counter is increased.
- `change:active` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html))
- `error` ([module:ol/events/Event~BaseEvent](https://openlayers.org/en/latest/apidoc/module-ol_events_Event-BaseEvent.html)) - Generic error event. Triggered when an error occurs.
- `propertychange` ([module:ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html)) - Triggered when a property is changed.

### Subclasses

- [module:ol/interaction/DragBox~DragBox](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html)
- [module:ol/interaction/DragPan~DragPan](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragPan-DragPan.html)
- [module:ol/interaction/DragRotateAndZoom~DragRotateAndZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom.html)
- [module:ol/interaction/DragRotate~DragRotate](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotate-DragRotate.html)
- [module:ol/interaction/Draw~Draw](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html)
- [module:ol/interaction/Extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent-Extent.html)
- [module:ol/interaction/Modify~Modify](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html)
- [module:ol/interaction/PinchRotate~PinchRotate](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchRotate-PinchRotate.html)
- [module:ol/interaction/PinchZoom~PinchZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchZoom-PinchZoom.html)
- [module:ol/interaction/Snap~Snap](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Snap-Snap.html)
- [module:ol/interaction/Translate~Translate](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-Translate.html)

### Extends

- [module:ol/interaction/Interaction~Interaction](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)

### Observable Properties

| Name     | Type    | Settable | [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) type | Description                                            |
| -------- | ------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| `active` | boolean | yes      | `change:active`                                              | `true` if the interaction is active, `false` otherwise |

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

#### getActive(){boolean} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 58](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L58)

Return whether the interaction is currently active.



##### Returns:

`true` if the interaction is active, `false` otherwise.

#### getKeys(){Array.string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#getKeys)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L126)

Get a list of object property names.



##### Returns:

List of property names.

#### getMap(){[module:ol/PluggableMap~PluggableMap](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#getMap)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L67)

Get the map associated with this interaction.



##### Returns:

Map.

#### getPointerCount(){number}

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 102](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L102)

Returns the current number of pointers involved in the interaction, e.g. `2` when two fingers are used.



##### Returns:

The number of pointers.

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

#### handleEvent(mapBrowserEvent){boolean}

[interaction/Pointer.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js), [line 131](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Pointer.js#L131)

Handles the [`map browser event`](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent.html) and may call into other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are detected.

| Name              | Type                                                         | Description        |
| ----------------- | ------------------------------------------------------------ | ------------------ |
| `mapBrowserEvent` | [module:ol/MapBrowserEvent~MapBrowserEvent](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html) | Map browser event. |



##### Returns:

`false` to stop event propagation.

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

#### set(key, value, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#set)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 165](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L165)

Sets a value.

| Name     | Type    | Description                         |
| -------- | ------- | ----------------------------------- |
| `key`    | string  | Key name.                           |
| `value`  | *       | Value.                              |
| `silent` | boolean | Update without triggering an event. |



#### setActive(active) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html#setActive)

[interaction/Interaction.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js), [line 87](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/interaction/Interaction.js#L87)

Activate or deactivate the interaction.

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| `active` | boolean | Active.     |



#### setProperties(values, opt_silent) [inherited](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#setProperties)

[Object.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js), [line 185](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/Object.js#L185)

Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).

| Name     | Type               | Description                         |
| -------- | ------------------ | ----------------------------------- |
| `values` | Object.<string, *> | Values.                             |
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