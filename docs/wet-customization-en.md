---
layout: index-secmenu-en
title: WET Template Customization
categories: [documentation]
---

<a name="top" />

# WET Template Customization {#wb-cont}

This document explains how RAMP handles the localization of text in different scenarios.

<div class="toc"></div>

## Structure

RAMP pulls in [WET core repo](https://github.com/wet-boew/wet-boew) as a dependency and uses its template engine to assemble RAMP html pages. The local copy of WET is stored in __./lib/wet-boew__. All RAMP-specific templates are stored in __./site__ folder.

### Templates

RAMP HTML pages, __ramp-en.html__ and __ramp-fr.html__ are generated from __./site/pages/ramp.hbs__ Handlebars template which uses __./site/layouts/default.hbs__ layout. Both the main template and the layout use a number of partials, helpers, and data files.

<section class="alert alert-info">
	<h3>Note</h3>
	<p>Please, avoid modifying WET templates and partials inside <strong>./lib</strong> folder. Use instructions below to properly override templates.</p>
</section>

#### Partials

The build tool looks up partial templates at the following paths where successive partials with the same names will override previous ones:

1. __lib/wet-boew/site/includes/**/*.hbs__
2. __site/includes/**/*.hbs__

To override a WET partial that is not included in the __./site/includes__, copy over a corresponding partial from __./lib/wet-boew/site/includes__ and modify it.

#### Helpers

The build tool looks up Handlebars helpers at the following paths:

1. __lib/wet-boew/site/helpers/helper-*.js__
2. __site/helpers/helper-*.js__

To add a new helper, place it in the __./site/helpers/__ folder.

#### Data

Specifies the data to supply to the templates. Data may be formatted in JSON, YAML, YAML front matter, or passed directly as an object. Wildcard patterns may also be used. The build tool looks up data files at the following paths:

1. __lib/wet-boew/site/data/**/*.{yml,json}__
2. __site/data/**/*.{yml,json}__

Default WET template data is in the __./lib/wet-boew/site/data/site.json__. This file contains a list of non-language-specific stings related to the whole site such as title and descriptions.
To override, create a __site.json__ file in __./site/data__. To augment, copy the original file from __./lib/wet-boew/site/data/site.json__ to __./site/data/site.json__ and modify it.

Read about localization data in [Localization](locale-en.html#wet-strings).




