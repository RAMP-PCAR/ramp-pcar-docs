---
layout: index-secmenu-en
title: RAMP Localization Setup
categories: [documentation]
---

<a name="top" />

# RAMP Localization Setup {#wb-cont}

This document explains how RAMP handles the localization of text in different scenarios.

<div class="toc"></div>

## WET Theme Template Strings

### Primary Site Strings

Text displayed in the WET theme portion of the site are defined in the theme repositories.  Specifically, the text lookups can be found in directory __src\locales__.  In this directory, there is a directory for each specific locale (e.g. en-CA or fr-CA for Canadian English and French), and in the specific folder there is a file called translation.json containing the strings.

Strings can be defined in both the core RAMP repository, as well as in a specific theme repository (e.g. canada.ca theme).  Any entries in a theme repository will override an entry in the core RAMP repository.

[Back To Top](#top)
{: .text-right}

### Mega-menu String Settings

To configure text in the megamenu of specific themes, edit the files __fullmenu-[lang].hbs__ in folder __site\includes__

If the files don't exist, a copy may be found in folder __lib\gcweb\site\includes\__.  Copy the files to __site\includes__ and feel free to modify the copy

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

As the Advanced Toolbar tools act as plugins, any language displayed on tool interfaces and popups are stored in their own language file.  The convention for the file name and location is __src\locales\<localeName>\tools\<toolName>.json__.  In the tool javascript module, the language files are accessed using the [i18n library](external-libraries-en.html#i18n)

[Back To Top](#top)
{: .text-right}

