---
title: Format
sidebarDepth: 2
autoGroup-1: API文档
---

## [ol/format/EsriJSON](https://openlayers.org/en/latest/apidoc/module-ol_format_EsriJSON.html)~EsriJSON

```javascript
import EsriJSON from 'ol/format/EsriJSON';
```

Feature format for reading and writing data in the EsriJSON format.

### new EsriJSON(opt_options)

| Name           | Type   | Description                                  |
| -------------- | ------ | -------------------------------------------- |
| `geometryName` | string | Geometry name to use when creating features. |

### Extends

- [module:ol/format/JSONFeature~JSONFeature](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html)

### Methods

#### readFeature(source, opt_options){[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readFeature)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 37](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L37)

Read a feature. Only works for a single feature. Use `readFeatures` to read a feature collection.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Feature.

#### readFeatures(source, opt_options){Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readFeatures)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 53](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L53)

Read all features. Works with both a single feature and a feature collection.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Features.

#### readGeometry(source, opt_options){[module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readGeometry)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 90](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L90)

Read a geometry.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Geometry.

#### readProjection(source){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readProjection)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 115](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L115)

Read the projection.

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| `source` | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |



##### Returns:

Projection.

#### writeFeature(feature, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeFeature)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 137](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L137)

Encode a feature as string.

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature.    |
| `options` | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded feature.

#### writeFeatureObject(feature, opt_options){Object}

[format/EsriJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js), [line 199](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js#L199)

Encode a feature as a esriJSON Feature object.

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature.    |
| `options` | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Object.

#### writeFeatures(features, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeFeatures)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 159](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L159)

Encode an array of features as string.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `features` | Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Features.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded features.

#### writeFeaturesObject(features, opt_options){module:ol/format/EsriJSON~EsriJSONFeatureSet}

[format/EsriJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js), [line 240](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js#L240)

Encode an array of features as a EsriJSON object.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `features` | Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Features.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

EsriJSON Object.

#### writeGeometry(geometry, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeGeometry)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 181](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L181)

Encode a geometry as string.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `geometry` | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded geometry.

#### writeGeometryObject(geometry, opt_options){module:ol/format/EsriJSON~EsriJSONGeometry}

[format/EsriJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js), [line 187](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/EsriJSON.js#L187)

Encode a geometry as a EsriJSON object.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `geometry` | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Object.

## [ol/format/Feature](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature.html)~FeatureFormat

```javascript
import FeatureFormat from 'ol/format/Feature';
```

Abstract base class; normally only used for creating subclasses and not instantiated in apps. Base class for feature formats. [`module:ol/format/Feature~FeatureFormat`](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature-FeatureFormat.html) subclasses provide the ability to decode and encode [`module:ol/Feature~Feature`](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) objects from a variety of commonly used geospatial file formats. See the documentation for each format for more details.

### new FeatureFormat()

[format/Feature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/Feature.js), [line 67](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/Feature.js#L67)



### Subclasses

- [module:ol/format/JSONFeature~JSONFeature](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html)
- [module:ol/format/MVT~MVT](https://openlayers.org/en/latest/apidoc/module-ol_format_MVT-MVT.html)
- [module:ol/format/TextFeature~TextFeature](https://openlayers.org/en/latest/apidoc/module-ol_format_TextFeature-TextFeature.html)
- [module:ol/format/XMLFeature~XMLFeature](https://openlayers.org/en/latest/apidoc/module-ol_format_XMLFeature-XMLFeature.html)

### Type Definitions

- ReadOptions{Object}

  Properties:

  | Name                | Type                                                         | Argument   | Description                                                  |
  | ------------------- | ------------------------------------------------------------ | ---------- | ------------------------------------------------------------ |
  | `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | optional | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
  | `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | optional | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
  | `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | optional | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

- WriteOptions{Object}

  Properties:

| Name                | Type                                                         | Argument   | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ---------- | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | optional | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | optional | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | optional | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | optional | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

## ol/format/filter

### Methods

#### module:ol/format/filter.and(conditions){module:ol/format/filter/And~And}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 29](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L29)

```javascript
import {and} from 'ol/format/filter';
```

Create a logical `` operator between two or more filter conditions.

| Name         | Type                                  | Description        |
| ------------ | ------------------------------------- | ------------------ |
| `conditions` | module:ol/format/filter/Filter~Filter | Filter conditions. |



##### Returns:

`` operator.

#### module:ol/format/filter.bbox(geometryName, extent, opt_srsName){[module:ol/format/filter/Bbox~Bbox](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Bbox-Bbox.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 68](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L68)

```javascript
import {bbox} from 'ol/format/filter';
```

Create a `` operator to test whether a geometry-valued property intersects a fixed bounding box

| Name           | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `geometryName` | string                                                       | Geometry name to use.                                        |
| `extent`       | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Extent.                                                      |
| `srsName`      | string                                                       | SRS name. No srsName attribute will be set on geometries when this is not provided. |



##### Returns:

`` operator.

#### module:ol/format/filter.between(propertyName, lowerBoundary, upperBoundary){[module:ol/format/filter/IsBetween~IsBetween](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsBetween-IsBetween.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 213](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L213)

```javascript
import {between} from 'ol/format/filter';
```

Creates a `` comparison operator to test whether an expression value lies within a range given by a lower and upper bound (inclusive).

| Name            | Type   | Description                              |
| --------------- | ------ | ---------------------------------------- |
| `propertyName`  | string | Name of the context property to compare. |
| `lowerBoundary` | number | The lower bound of the range.            |
| `upperBoundary` | number | The upper bound of the range.            |



##### Returns:

`` operator.

#### module:ol/format/filter.contains(geometryName, geometry, opt_srsName){[module:ol/format/filter/Contains~Contains](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Contains-Contains.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 83](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L83)

```javascript
import {contains} from 'ol/format/filter';
```

Create a `` operator to test whether a geometry-valued property contains a given geometry.

| Name           | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `geometryName` | string                                                       | Geometry name to use.                                        |
| `geometry`     | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.                                                    |
| `srsName`      | string                                                       | SRS name. No srsName attribute will be set on geometries when this is not provided. |



##### Returns:

`` operator.

#### module:ol/format/filter.during(propertyName, begin, end){[module:ol/format/filter/During~During](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_During-During.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 260](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L260)

```javascript
import {during} from 'ol/format/filter';
```

Create a `` temporal operator.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |
| `begin`        | string | The begin date in ISO-8601 format.       |
| `end`          | string | The end date in ISO-8601 format.         |



##### Returns:

`` operator.

#### module:ol/format/filter.equalTo(propertyName, expression, opt_matchCase){[module:ol/format/filter/EqualTo~EqualTo](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_EqualTo-EqualTo.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 126](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L126)

```javascript
import {equalTo} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type             | Description                              |
| -------------- | ---------------- | ---------------------------------------- |
| `propertyName` | string           | Name of the context property to compare. |
| `expression`   | string \| number | The value to compare.                    |
| `matchCase`    | boolean          | Case-sensitive?                          |



##### Returns:

`` operator.

#### module:ol/format/filter.greaterThan(propertyName, expression){[module:ol/format/filter/GreaterThan~GreaterThan](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_GreaterThan-GreaterThan.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 175](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L175)

```javascript
import {greaterThan} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |
| `expression`   | number | The value to compare.                    |



##### Returns:

`` operator.

#### module:ol/format/filter.greaterThanOrEqualTo(propertyName, expression){[module:ol/format/filter/GreaterThanOrEqualTo~GreaterThanOrEqualTo](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_GreaterThanOrEqualTo-GreaterThanOrEqualTo.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 187](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L187)

```javascript
import {greaterThanOrEqualTo} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |
| `expression`   | number | The value to compare.                    |



##### Returns:

`` operator.

#### module:ol/format/filter.intersects(geometryName, geometry, opt_srsName){[module:ol/format/filter/Intersects~Intersects](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Intersects-Intersects.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 98](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L98)

```javascript
import {intersects} from 'ol/format/filter';
```

Create a `` operator to test whether a geometry-valued property intersects a given geometry.

| Name           | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `geometryName` | string                                                       | Geometry name to use.                                        |
| `geometry`     | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.                                                    |
| `srsName`      | string                                                       | SRS name. No srsName attribute will be set on geometries when this is not provided. |



##### Returns:

`` operator.

#### module:ol/format/filter.isNull(propertyName){[module:ol/format/filter/IsNull~IsNull](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsNull-IsNull.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 199](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L199)

```javascript
import {isNull} from 'ol/format/filter';
```

Creates a `` comparison operator to test whether a property value is null.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |



##### Returns:

`` operator.

#### module:ol/format/filter.lessThan(propertyName, expression){[module:ol/format/filter/LessThan~LessThan](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_LessThan-LessThan.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 151](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L151)

```javascript
import {lessThan} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |
| `expression`   | number | The value to compare.                    |



##### Returns:

`` operator.

#### module:ol/format/filter.lessThanOrEqualTo(propertyName, expression){[module:ol/format/filter/LessThanOrEqualTo~LessThanOrEqualTo](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_LessThanOrEqualTo-LessThanOrEqualTo.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 163](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L163)

```javascript
import {lessThanOrEqualTo} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| `propertyName` | string | Name of the context property to compare. |
| `expression`   | number | The value to compare.                    |



##### Returns:

`` operator.

#### module:ol/format/filter.like(propertyName, pattern, opt_wildCard, opt_singleChar, opt_escapeChar, opt_matchCase){[module:ol/format/filter/IsLike~IsLike](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_IsLike-IsLike.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 233](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L233)

```javascript
import {like} from 'ol/format/filter';
```

Represents a `` comparison operator that matches a string property value against a text pattern.

| Name           | Type    | Description                                                  |
| -------------- | ------- | ------------------------------------------------------------ |
| `propertyName` | string  | Name of the context property to compare.                     |
| `pattern`      | string  | Text pattern.                                                |
| `wildCard`     | string  | Pattern character which matches any sequence of zero or more string characters. Default is '*'. |
| `singleChar`   | string  | pattern character which matches any single string character. Default is '.'. |
| `escapeChar`   | string  | Escape character which can be used to escape the pattern characters. Default is '!'. |
| `matchCase`    | boolean | Case-sensitive?                                              |



##### Returns:

`` operator.

#### module:ol/format/filter.not(condition){[module:ol/format/filter/Not~Not](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Not-Not.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 53](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L53)

```javascript
import {not} from 'ol/format/filter';
```

Represents a logical `` operator for a filter condition.

| Name        | Type                                  | Description       |
| ----------- | ------------------------------------- | ----------------- |
| `condition` | module:ol/format/filter/Filter~Filter | Filter condition. |



##### Returns:

`` operator.

#### module:ol/format/filter.notEqualTo(propertyName, expression, opt_matchCase){[module:ol/format/filter/NotEqualTo~NotEqualTo](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_NotEqualTo-NotEqualTo.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 139](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L139)

```javascript
import {notEqualTo} from 'ol/format/filter';
```

Creates a `` comparison operator.

| Name           | Type             | Description                              |
| -------------- | ---------------- | ---------------------------------------- |
| `propertyName` | string           | Name of the context property to compare. |
| `expression`   | string \| number | The value to compare.                    |
| `matchCase`    | boolean          | Case-sensitive?                          |



##### Returns:

`` operator.

#### module:ol/format/filter.or(conditions){[module:ol/format/filter/Or~Or](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Or-Or.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 41](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L41)

```javascript
import {or} from 'ol/format/filter';
```

Create a logical `` operator between two or more filter conditions.

| Name         | Type                                  | Description        |
| ------------ | ------------------------------------- | ------------------ |
| `conditions` | module:ol/format/filter/Filter~Filter | Filter conditions. |



##### Returns:

`` operator.

#### module:ol/format/filter.within(geometryName, geometry, opt_srsName){[module:ol/format/filter/Within~Within](https://openlayers.org/en/latest/apidoc/module-ol_format_filter_Within-Within.html)}

[format/filter.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js), [line 113](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/filter.js#L113)

```javascript
import {within} from 'ol/format/filter';
```

Create a `` operator to test whether a geometry-valued property is within a given geometry.

| Name           | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `geometryName` | string                                                       | Geometry name to use.                                        |
| `geometry`     | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.                                                    |
| `srsName`      | string                                                       | SRS name. No srsName attribute will be set on geometries when this is not provided. |



##### Returns:

`` operator.

## [ol/format/GeoJSON](https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON.html)~GeoJSON

```javascript
import GeoJSON from 'ol/format/GeoJSON';
```

Feature format for reading and writing data in the GeoJSON format.

### new GeoJSON(opt_options)

| Name                  | Type                                                         | Description                                                  |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`      | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) (defaults to 'EPSG:4326') | Default data projection.                                     |
| `featureProjection`   | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection for features read or written by the format. Options passed to read or write methods will take precedence. |
| `geometryName`        | string                                                       | Geometry name to use when creating features.                 |
| `extractGeometryName` | boolean (defaults to false)                                  | Certain GeoJSON providers include the geometry_name field in the feature GeoJSON. If set to `true` the GeoJSON reader will look for that field to set the geometry name. If both this field is set to `true` and a `geometryName` is provided, the `geometryName` will take precedence. |

### Extends

- [module:ol/format/JSONFeature~JSONFeature](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html)

### Methods

#### readFeature(source, opt_options){[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readFeature)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 37](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L37)

Read a feature. Only works for a single feature. Use `readFeatures` to read a feature collection.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Feature.

#### readFeatures(source, opt_options){Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)>} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readFeatures)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 53](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L53)

Read all features. Works with both a single feature and a feature collection.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Features.

#### readGeometry(source, opt_options){[module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readGeometry)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 90](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L90)

Read a geometry.

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| `source`  | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |
| `options` | Read options.                                          |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the `dataProjection` of the format is assigned (where set). If the projection can not be derived from the data and if no `dataProjection` is set for a format, the features will not be reprojected. |
| `extent`            | [module:ol/extent~Extent](https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent) | Tile extent in map units of the tile being read. This is only required when reading data with tile pixels as geometry units. When configured, a `dataProjection` with `TILE_PIXELS` as `units` and the tile's pixel extent as `extent` needs to be provided. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries created by the format reader. If not provided, features will be returned in the `dataProjection`. |

##### Returns:

Geometry.

#### readProjection(source){[module:ol/proj/Projection~Projection](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#readProjection)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 115](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L115)

Read the projection.

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| `source` | ArrayBuffer \| Document \| Element \| Object \| string | Source.     |



##### Returns:

Projection.

#### writeFeature(feature, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeFeature)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 137](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L137)

Encode a feature as string.

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature.    |
| `options` | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded feature.

#### writeFeatureObject(feature, opt_options){module:ol/format/GeoJSON~GeoJSONFeature}

[format/GeoJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js), [line 195](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js#L195)

Encode a feature as a GeoJSON Feature object.

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| `feature` | [module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) | Feature.    |
| `options` | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Object.

#### writeFeatures(features, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeFeatures)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 159](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L159)

Encode an array of features as string.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `features` | Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Features.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded features.

#### writeFeaturesObject(features, opt_options){module:ol/format/GeoJSON~GeoJSONFeatureCollection}

[format/GeoJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js), [line 237](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js#L237)

Encode an array of features as a GeoJSON object.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `features` | Array.<[module:ol/Feature~Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)> | Features.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

GeoJSON Object.

#### writeGeometry(geometry, opt_options){string} [inherited](https://openlayers.org/en/latest/apidoc/module-ol_format_JSONFeature-JSONFeature.html#writeGeometry)

[format/JSONFeature.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js), [line 181](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/JSONFeature.js#L181)

Encode a geometry as string.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `geometry` | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Encoded geometry.

#### writeGeometryObject(geometry, opt_options){module:ol/format/GeoJSON~GeoJSONGeometry|[module:ol/format/GeoJSON~GeoJSONGeometryCollection](https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON.html#~GeoJSONGeometryCollection)}

[format/GeoJSON.js](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js), [line 257](https://github.com/openlayers/openlayers/blob/v6.4.3/src/ol/format/GeoJSON.js#L257)

Encode a geometry as a GeoJSON object.

| Name       | Type                                                         | Description |
| ---------- | ------------------------------------------------------------ | ----------- |
| `geometry` | [module:ol/geom/Geometry~Geometry](https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html) | Geometry.   |
| `options`  | Write options.                                               |             |

| Name                | Type                                                         | Description                                                  |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dataProjection`    | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the data we are writing. If not provided, the `dataProjection` of the format is assigned (where set). If no `dataProjection` is set for a format, the features will be returned in the `featureProjection`. |
| `featureProjection` | [module:ol/proj~ProjectionLike](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike) | Projection of the feature geometries that will be serialized by the format writer. If not provided, geometries are assumed to be in the `dataProjection` if that is set; in other words, they are not transformed. |
| `rightHanded`       | boolean                                                      | When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If `true`, the right-hand rule will be applied. If `false`, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries. |
| `decimals`          | number                                                       | Maximum number of decimal places for coordinates. Coordinates are stored internally as floats, but floating-point arithmetic can create coordinates with a large number of decimal places, not generally wanted on output. Set a number here to round coordinates. Can also be used to ensure that coordinates read in can be written back out with the same number of decimals. Default is no rounding. |

##### Returns:

Object.