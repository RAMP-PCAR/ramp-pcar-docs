---
layout: index-secmenu-en
title: "User Added Data"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# User Added Data {#wb-cont}

<div class="toc"></div>

## Adding Datasets

RAMP can now accept user loaded data either via the FileReader API or making
XmlHttpRequests to specific URLs.  This page documents in the API exposed by
the new DataLoader module.  DataLoader requests of the form get* or loadDataSet
all use the Promise API for asynchronous loading.

### IE9 Support

IE9 does not support the FileReader API and since reading the local filesystem
requires support from the underlying browser it is not possible to build a pure
javascript polyfill (any polyfills will use a plugin like flash, java, activex,
etc.).  For now we have decided to leave IE9 support for geojson / shapefiles
as supporting loading from remote servers only.

## Adding a Service

Currently ESRI feature services and WMSes are supported.

DataLoader exposes the following methods:

- getFeatureLayer( esriUrl ) -> Promise
- getWmsLayerList( wmsUrl ) -> Promise

*getFeatureLayer* resolves with basic metadata about the layer (enough to call
the FeatureLayer constructor)

*getWmsLayerList* resolves with a set of supported getFeatureInfo mime types and
a listing of available layers, internally it uses dojo/query to help with XML
parsing

[Back To Top](#top)
{: .text-right}

## Adding a File

GeoJSON, Shapefiles and CSV files are supported.  GeoJSON is used as an
intermediate format by the other formats.  This part of the API depends
heavily on third party libraries for much of the conversion.

DataLoader exposes the following methods for loading files:

- loadDataSet( file/url ) -> Promise
- buildCsv( csvText ) -> Promise
- buildShapefile( data ) -> Promise
- buildGeoJson( geoJson ) -> Promise
- makeGeoJsonLayer( geoJson, opts ) -> FeatureLayer
- csvPeek( csvText ) -> [header]

*loadDataSet* resolves with a string or an ArrayBuffer based on the type supplied
in the args, typically this will be the first call made

*buildGeoJson* technically does not require a Promise as it makes no async calls,
it directly calls makeGeoJsonLayer but it returns a Promise for API consistency

*buildCsv* takes in a string and some optional details about which columns
contain lat/long data and what delimiter to use; all CSV data is assumed to be
point data; resolves with a FeatureLayer

*buildShapefile* takes an ArrayBuffer and resolves with a FeatureLayer

*csvPeek* is a convenience wrapper around csv2geojson for reading the top row
to allow for header selection

*makeGeoJsonLayer* takes in GeoJSON and converts it to a FeatureLayer; internally
it handles reprojection and conversion to esri compatible JSON

[Back To Top](#top)
{: .text-right}
