---
title: Projections
sidebarDepth: 2
autoGroup-1: API文档
---

## ol/proj

```javascript
import * as olProj from 'ol/proj';
```

### Methods

#### module:ol/proj.addCoordinateTransforms(source, destination, forward, inverse)

```javascript
import {addCoordinateTransforms} from 'ol/proj';
```

Registers coordinate transform functions to convert coordinates between the source projection and the destination projection. The forward and inverse functions convert coordinate pairs; this function converts these into the functions used internally which also handle extents and coordinate arrays.

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `source`      | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Source projection.                                           |
| `destination` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Destination projection.                                      |
| `forward`     | function                                                     | The forward transform function (that is, from the source projection to the destination projection) that takes a [`module:ol/coordinate~Coordinate`](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) as argument and returns the transformed [`module:ol/coordinate~Coordinate`](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate). |
| `inverse`     | function                                                     | The inverse transform function (that is, from the destination projection to the source projection) that takes a [`module:ol/coordinate~Coordinate`](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) as argument and returns the transformed [`module:ol/coordinate~Coordinate`](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate). |

#### module:ol/proj.addEquivalentProjections(projections)

```javascript
import {addEquivalentProjections} from 'ol/proj';
```

Registers transformation functions that don't alter coordinates. Those allow to transform between projections with equal meaning.

| Name          | Type                                                         | Description  |
| ------------- | ------------------------------------------------------------ | ------------ |
| `projections` | Array.<[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)> | Projections. |

#### module:ol/proj.addProjection(projection)

```javascript
import {addProjection} from 'ol/proj';
```

Add a Projection object to the list of supported projections that can be looked up by their code.

| Name         | Type                                                         | Description          |
| ------------ | ------------------------------------------------------------ | -------------------- |
| `projection` | [module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) | Projection instance. |

#### module:ol/proj.equivalent(projection1, projection2){boolean}

```javascript
import {equivalent} from 'ol/proj';
```

Checks if two projections are the same, that is every coordinate in one projection does represent the same geographic point as the same coordinate in the other projection.

| Name          | Type                                                         | Description   |
| ------------- | ------------------------------------------------------------ | ------------- |
| `projection1` | [module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) | Projection 1. |
| `projection2` | [module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) | Projection 2. |

##### Returns:

Equivalent.



#### module:ol/proj.fromLonLat(coordinate, opt_projection){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)}

```javascript
import {fromLonLat} from 'ol/proj';
```

Transforms a coordinate from longitude/latitude to a different projection.

| Name         | Type                                                         | Description                                                  |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `coordinate` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element. |
| `projection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Target projection. The default is Web Mercator, i.e. 'EPSG:3857'. |

##### Returns:

Coordinate projected to the target projection.

#### module:ol/proj.get(projectionLike){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)}

```javascript
import {get} from 'ol/proj';
```

Fetches a Projection object for the code specified.

| Name             | Type                                                         | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectionLike` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Either a code string which is a combination of authority and identifier such as "EPSG:4326", or an existing projection object, or undefined. |

##### Returns:

Projection object, or null if not in list.

#### module:ol/proj.getPointResolution(projection, resolution, point, opt_units){number}

```javascript
import {getPointResolution} from 'ol/proj';
```

Get the resolution of the point in degrees or distance units. For projections with degrees as the unit this will simply return the provided resolution. For other projections the point resolution is by default estimated by transforming the 'point' pixel to EPSG:4326, measuring its width and height on the normal sphere, and taking the average of the width and height. A custom function can be provided for a specific projection, either by setting the `getPointResolution` option in the [`module:ol/proj/Projection~Projection`](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html) constructor or by using [`module:ol/proj/Projection~Projection#setGetPointResolution`](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html#setGetPointResolution) to change an existing projection object.

| Name         | Type                                                         | Description                                                  |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | The projection.                                              |
| `resolution` | number                                                       | Nominal resolution in projection units.                      |
| `point`      | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | Point to find adjusted resolution at.                        |
| `units`      | [module:ol/proj/Units](https://openlayers.org/en/latest/apidoc/module-ol_proj_Units.html) | Units to get the point resolution in. Default is the projection's units. |

##### Returns:

Point resolution.

#### module:ol/proj.getTransform(source, destination){[module:ol/proj~TransformFunction](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~TransformFunction)}

```javascript
import {getTransform} from 'ol/proj';
```

Given the projection-like objects, searches for a transformation function to convert a coordinates array from the source projection to the destination projection.

| Name          | Type                                                         | Description  |
| ------------- | ------------------------------------------------------------ | ------------ |
| `source`      | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Source.      |
| `destination` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Destination. |

##### Returns:

Transform function.

#### module:ol/proj.toLonLat(coordinate, opt_projection){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)}

```javascript
import {toLonLat} from 'ol/proj';
```

Transforms a coordinate to longitude/latitude.

| Name         | Type                                                         | Description                                                  |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `coordinate` | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | Projected coordinate.                                        |
| `projection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the coordinate. The default is Web Mercator, i.e. 'EPSG:3857'. |

##### Returns:

Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element.

#### module:ol/proj.transform(coordinate, source, destination){[module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate)}

```javascript
import {transform} from 'ol/proj';
```

Transforms a coordinate from source projection to destination projection. This returns a new coordinate (and does not modify the original).

See `module:ol/proj~transformExtent` for extent transformation. See the transform method of [`module:ol/geom/Geometry~Geometry`](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) and its subclasses for geometry transforms.

| Name          | Type                                                         | Description                  |
| ------------- | ------------------------------------------------------------ | ---------------------------- |
| `coordinate`  | [module:ol/coordinate~Coordinate](https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate) | Coordinate.                  |
| `source`      | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Source projection-like.      |
| `destination` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Destination projection-like. |

##### Returns:

Coordinate.

#### module:ol/proj.transformExtent(extent, source, destination, opt_stops){[module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent)}

```javascript
import {transformExtent} from 'ol/proj';
```

Transforms an extent from source projection to destination projection. This returns a new extent (and does not modify the original).

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `extent`      | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | The extent to transform.                                     |
| `source`      | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Source projection-like.                                      |
| `destination` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Destination projection-like.                                 |
| `stops`       | number                                                       | Number of stops per side used for the transform. By default only the corners are used. |

##### Returns:

The transformed extent.

### Type Definitions

#### ProjectionLike{[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)} {string} {undefined}

A projection as [`module:ol/proj/Projection`](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection.html), SRS identifier string or undefined.



#### TransformFunction()

[proj.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/proj.js), [line 86](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/proj.js#L86)

A transform function accepts an array of input coordinate values, an optional output array, and an optional dimension (default should be 2). The function transforms the input coordinate values, populates the output array, and returns the output array.