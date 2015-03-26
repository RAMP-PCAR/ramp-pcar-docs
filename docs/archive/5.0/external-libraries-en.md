---
layout: index-secmenu-en
title: External Library Implementations
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# External Library Implementations {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

## Animate.css
v 3.7.1

<https://github.com/daneden/animate.css>

A library supporting CSS animation.

Used for various animation effects.

[Back To Top](#top)
{: .text-right}


## CSV 2 GeoJSIB
v 3.7.1

<https://github.com/mapbox/csv2geojson>

A library to convert CSV files to GeoJSON format.

Used for the Add CSV File function.

[Back To Top](#top)
{: .text-right}

<a name="datatables" />

## Datatables
v 1.10.1

<http://www.datatables.net>

A grid control that allows for rich formatting but keeps the grid in an accessible form.  Features pagination, sorting. Unlike most grids, does not use DIVs for formatting / structure.

Used for the main grid control in the app.

[Back To Top](#top)
{: .text-right}


## Dojo Toolkit
v 1.9.1

<http://dojotoolkit.org/>

Main framework used in RAMP.  Provides a module-based structure that helps javascript behave in a manner similar to object oriented languages.  This framework is also used by the ESRI javascript API, and is imported via that API.

Used throughout the application.

[Back To Top](#top)
{: .text-right}


## ESRI Javascript API
v 3.8

<https://developers.arcgis.com/javascript/>

Main mapping API used in RAMP.  Handles all of the mapping and GIS related functions (e.g. drawing, querying spatial data).

Used throughout the application.

[Back To Top](#top)
{: .text-right}

## Fontawesome
v 4.2.0

<http://fontawesome.io>

Library providing vector based fonts and sybmols.

Used for Toolbar Icons.

[Back To Top](#top)
{: .text-right}

## GSAP - GreenSock Animation Platform
v 1.14.2

<http://www.greensock.com/gsap-js/>

GSAP is a suite of tools for scripted, high-performance HTML5 animations that work in all major browsers.  Specific tools include TweenLite, TimelineLite, EasePack, and CSSPlugin.

Used for the power transitional animation of the layout.

[Back To Top](#top)
{: .text-right}

## Hover Intent
v 1.8.1

<http://cherne.net/brian/resources/jquery.hoverIntent.html>

A tool for determining user intent based on mouse movement.

Used to highlight interactive elements of the site.

[Back To Top](#top)
{: .text-right}

## i18next - i18n for JavaScript
v 1.7.4

<http://i18next.com/>

i18next is a full-featured i18n javascript library for translating your webapplication.

Used for translation of the webmap.

[Back To Top](#top)
{: .text-right}

## jQuery
v 2.1.1

<http://jquery.com>

jQuery makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

[Back To Top](#top)
{: .text-right}

## jQuery UI
v 1.10.4

<http://jqueryui.com>

A jQuery library with effects, widgets, themes, and other UI-type items in it.

It is used to generate the navigation widget. The widget is found in file jquery.ui.navigation.js

[Back To Top](#top)
{: .text-right}

## Nestoria Sliders jQuery Plugin
v 1.0.5

<https://github.com/lokku/jquery-nstslider>

Fully customizable with CSS, Single/Double handles, Touch-enabled, IE 7+ Compatibility, Custom Digit Rounding, Non linear step increments!

Powers the opacity slider control for the Filter Manager module.

[Back To Top](#top)
{: .text-right}

## RandomColor
v 1

<https://github.com/sterlingwes/RandomColor>

Library that picks random colours that look nice.

Used in the symbology generator when adding user-hosted files.

[Back To Top](#top)
{: .text-right}

## ScrollTo
v 1.4.13

<https://github.com/flesler/jquery.scrollTo>

A library for implementing animated scrolling.

Used to scroll the datagrid to the selected row (if row is not on the page).

[Back To Top](#top)
{: .text-right}

## Shapefile JS
v 3.1.5

<https://github.com/calvinmetcalf/shapefile-js>

A library to convert Shapefiles to GeoJSON format.

Used for the Add Shapefile File function.

[Back To Top](#top)
{: .text-right}


## Shorten
v 1.0.0

<https://github.com/viralpatel/jquery.shorten>

A library that allows long text to be truncated, and provides a "show more" option to expand it.

Used in the detail panel to trim long text items

[Back To Top](#top)
{: .text-right}

## Snap
v 0.1.0

<http://snapsvg.io>

A library for working with scalar vector graphics.

Used for managing graphics layers and repositioning anchor maptips in the featureHighlighter module.

[Back To Top](#top)
{: .text-right}

## Terraformer
v 1.0.4

<http://terraformer.io/core/>
<http://terraformer.io/arcgis-parser/>

A library for working with GeoJSON, and converting it to ESRI Geometry JSON.

Used to convert user-hosted files into ESRI Feature Layers.

[Back To Top](#top)
{: .text-right}

## Terraformer-proj4js
v 1

<https://github.com/RAMP-PCAR/terraformer-proj4js>
<http://trac.osgeo.org/proj/>

An implementation of the proj.4 projection libary into the Terraformer library.

Used to reproject user-hosted spatial data to the map's spatial projection.

[Back To Top](#top)
{: .text-right}

## tmplEx
v 2.5.6

<https://github.com/RAMP-PCAR/JavaScript-Templates>
<https://github.com/blueimp/JavaScript-Templates>

A templating engine; applies templates to data and produces HTML.

Used throughout the application to generate content.  E.g. maptip content, detail pane content, grid cell content, filter row content.  We use a modified version of the engine, the forked repo is available on our github site.

[Back To Top](#top)
{: .text-right}

## Tooltipster
v 3.0.1-r

<http://iamceege.github.io/tooltipster />

A library that provides tooltips with CSS enhancements.

Used for maptips, and also tooltips on the datagrid and filter manager rows

[Back To Top](#top)
{: .text-right}

## Urlshortener
v 1.0.1

<http://hayageek.com/jquery-url-shortener />

A library for shortening URLs.

Used in the Get Link widget to allow user to have a shortened link.

[Back To Top](#top)
{: .text-right}

## Web Experience Toolkit
v 4.0.5

<https://github.com/wet-boew/wet-boew />

A front-end framework that focuses on accessibility, usability, and interoperability.  A standard for most Government of Canada websites.

Used to construct the page that contains the RAMP application.

[Back To Top](#top)
{: .text-right}
