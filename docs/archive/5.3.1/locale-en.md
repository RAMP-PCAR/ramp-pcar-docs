---
layout: index-secmenu-5.3.1-en
title: RAMP Localization Setup
categories: [documentation]
---

<a name="top" />

# RAMP Localization Setup {#wb-cont}

This document explains how RAMP handles the localization of text in different scenarios.

<div class="toc"></div>

## Template Strings

### WET Strings

Read about how locale strings are loaded during the build in [WET Customization](wet-customization-en.html#data).

Language-specific strings used in WET templates are stored in __./lib/wet-boew/site/data/i18n__ - one flat file per language.

To override, create a file name as the corresponding language and place in __./site/data/i18__. To augment, copy the original file from __./lib/wet-boew/site/data/i18n__ to __./site/data/i18__ and modify.

To insert a string in the template, use assemble-contrib-i18n helper:

{% highlight html %}
<li class="wb-slc">
    <a class="wb-sl" href="#wb-cont">{% raw %}{{{i18n "tmpl-skip-cont"}}}{% endraw %}</a>
</li>
{% endhighlight %}


### RAMP Strings

Text displayed on the site and related to the content of the site is defined separately from WET strings. Specifically, the text lookups can be found in directory __./src/locales__. In this directory, there is a directory for each specific locale (e.g. en-CA or fr-CA for Canadian English and French), and in the specific folder there is a file called __translation.json__ containing the strings. 

These files are used as resources for [i18next](http://i18next.com/) localization library.

To insert RAMP strings into Handlebars templates, use helper-i18n (deep lookup is possible):

{% highlight html %}
<li><a href="#implement" class="item">{{t "page.menu.link1Title"}}</a>
	<ul class="sm list-unstyled" id="implement" role="menu">
		<li><a href="...">{% raw %}{{t "page.menu.link1sub1Title"}}{% endraw %}</a></li>
		<li><a href="...">{% raw %}{{t "page.menu.link1sub2Title"}}{% endraw %}</a></li>
		<li><a href="...">{% raw %}{{t "page.menu.link1sub3Title"}}{% endraw %}</a></li>
		<li><a href="...">{% raw %}{{t "page.menu.link1sub4Title"}}{% endraw %}</a></li>
	</ul>
</li>
{% endhighlight %}

To insert a string using JS, use a global call:

{% highlight js %}
    i18n.t('gui.actions.close');
{% endhighlight %}

#### RAMP Themes

RAMP Themes have their own localization files located in __./src/locales__ same as RAMP Core. During build, both JSON files are merged (__./src/locales/[locale]/translation.json__ and __./lib/ramp-pcar/src/locales/[locale]/translation.json__) to allow easy augmentation of defaults strings without duplication. 

Any entries in a theme repository will override an entry in the core RAMP repository.

[Back To Top](#top)
{: .text-right}

### Mega-menu String Settings

<section class="alert alert-info">
	<h3>Note</h3>
	<p>Please, avoid modifying megamenu templates inside <strong>./lib</strong> folder. Use instructions below to properly override templates.</p>
</section>

#### RAMP Core

To configure text in the megamenu, edit the file __fullmenu.hbs__ in folder __./site/includes__.

If the file doesn't exist, a copy may be found in folder __./lib/wet-boew/site/includes/__. Copy the files to __./site/includes__ and feel free to modify the copy. Use use helper-i18n to insert strings as described above.

#### RAMP Intranet and Usability Themes

To configure text in the megamenu for RAMP Intranet and Usability these, edit the file __fullmenu.hbs__ in folder __./site/includes__.

If the file doesn't exist, a copy may be found in folder __./lib/theme-gc-intranet/site/includes/__ or __./lib/theme-gcwu-fegc/site/includes/__.  Copy the file to __./site/includes__ and feel free to modify the copy.

#### RAMP Canada.ca Theme

To configure text in the megamenu for RAMP Intranet and Usability these, edit the files __fullmenu-[locale].hbs__ in folder __./site/includes__.

If the files don't exist, a copy may be found in folder __./lib/gcweb/site/includes/__.  Copy the file to __./site/includes__ and feel free to modify the copy.


[Back To Top](#top)
{: .text-right}

## Static Config File String

To simplify maintenance of the app configuration, the RAMP source code has a single config file (config.json).  When the build process runs, two language-specific config files are generated and can be found in the build folder.  To allow these language-specific files to have the appropriate text, RAMP utilizes placeholders in the source config file that point to text elements in the locale translation files.

Here is an example for defining the display name of a feature layer.

In the feature object of __src\config.json__, we use the @@ notation followed by the JSON path of the element in the locale translation files.

{% highlight js %}
{
    "displayName": "@@config.layers.feature.duckLayer.displayName"	    
}
{% endhighlight %}

In the English locale file __src\locales\en-CA\translation.json__

{% highlight js %}
{
    "config": {        
        "layers": {
            "feature": {
                "duckLayer": {
                    "displayName": "Ducks"
                }
			}
		}
	}
}
{% endhighlight %}

In the French locale file __src\locales\fr-CA\translation.json__

{% highlight js %}
{
    "config": {        
        "layers": {
            "feature": {
                "duckLayer": {
                    "displayName": "Canards"
                }
			}
		}
	}
}
{% endhighlight %}

When the build process runs, the resultant files __config.en.json__ and __config.fr.json__ will have display name values "Ducks" and "Canards" respectively.


[Back To Top](#top)
{: .text-right}


## Advanced Tools Strings

As the Advanced Toolbar tools act as plugins, any language displayed on tool interfaces and popups are stored in their own language file.  The convention for the file name and location is __./src/locales/<localeName>/tools/<toolName>.json__.  In the tool javascript module, the language files are accessed using the [i18n library](external-libraries-en.html#i18next---i18n-for-javascript)

[Back To Top](#top)
{: .text-right}

