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


[Back To Top](#top)
{: .text-right}


## Tools Strings


[Back To Top](#top)
{: .text-right}

### Other Things


[Back To Top](#top)
{: .text-right}