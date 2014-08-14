---
layout: index-secmenu-en
title: External Library Implementations
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# External Library Implementations {#wb-cont}

<div class="toc"></div>

<a name="datatables" />

## Datatables
v 1.10

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


## GSAP - GreenSock Animation Platform
v 1.11.8

<http://www.greensock.com/gsap-js/>

GSAP is a suite of tools for scripted, high-performance HTML5 animations that work in all major browsers.  Specific tools include TweenLite, TimelineLite, EasePack, and CSSPlugin.

Used for the power transitional animation of the layout.

[Back To Top](#top)
{: .text-right}

## jQuery UI
v 1.10.4

<http://jqueryui.com>

A jQuery library with effects, widgets, themes, and other UI-type items in it.

It is used to generate the navigation widget.  The widget is found in file jquery.ui.navigation.js

[Back To Top](#top)
{: .text-right}

## Nestoria Sliders jQuery Plugin
v 1.0.5

<https://github.com/lokku/jquery-nstslider>

Fully customizable with CSS, Single/Double handles, Touch-enabled, IE 7+ Compatibility, Custom Digit Rounding, Non linear step increments!

Power the opacity slider control for the Filter Manager module.

[Back To Top](#top)
{: .text-right}

## Modernizr
v 2.7.1

<http://modernizr.com />

A library that detects if browsers have HTML5 or CSS3 capabilities

Used to allow the tooltipster library to work in browsers that do not support CSS animation.

[Back To Top](#top)
{: .text-right}

## ScrollTo
v 1.4.3.1

<https://github.com/flesler/jquery.scrollTo>

A library for implementing animated scrolling.

Used to scroll the datagrid to the selected row (if row is not on the page).

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

## tmplEx
v 2.4.1

<https://github.com/blueimp/JavaScript-Templates>

A templating engine; applies templates to data and produces HTML.

Used throughout the application to generate content.  E.g. maptip content, detail pane content, grid cell content, filter row content.

[Back To Top](#top)
{: .text-right}

## Tooltipster
v 3.0.1

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