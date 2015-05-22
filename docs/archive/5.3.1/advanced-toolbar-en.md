---
layout: index-secmenu-5.3.1-en
title: "Advanced Toolbar"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# Advanced Toolbar {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

##Using the Advanced Toolbar

The advanced toolbar provides powerful tools that fall outside the realm of accessibility.  This is mainly due to the mouse-dependant nature of the tools.  One tool at a time can be activated from the advanced toolbar.  Selecting a tool a second time, or closing the toolbar, will de-activate the tool.  Only one tool can be active at one time.

### Population Tool

This tool allows a user to draw a polygon on the map.  The population of people living within that polygon will be displayed.  All numbers are derived from the [ESRI World Population Service](http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/GPServer/PopulationSummary).

### Buffer Tool

This tool allows a user to specify a buffer size in kilometers, and draw a polygon on the map.  A buffer of the desired size will be applied to the polygon.

### Area Tool

This tool allows a user to draw a polygon on the map.  The area and circumference of the polygon will be displayed.

### Distance Tool

This tool allows a user to draw a line on the map.  The length of the line will be displayed.

[Back To Top](#top)
{: .text-right}

##Adding New Tools

A RAMP implementor can add new tools to the application.  The following areas should be considered and adjusted appropriately.

### Tools Module

A module should be made for the specific tool, and should reside in src/js/RAMP/Tools.  The module should inherit from baseTool.js, as this will provide a standard interface for handling toolbar activations and results output.  Copying an existing tool module will provide a good starting template.  At a minimum, the following methods and properties should be implemented:

activate
: a method that handles when the tool is clicked on by a user

deactivate
: a method that handles when the tool is clicked off or the toolbar closes

name
: a property defining the tool.  it should match the values in the config section (VERIFY)

init
: a method to initialize the tool at load time.  any one-time actions should be done here, not in activate

displayOutput
: a method that handles the output of results when a tool finishes.  Baseclass function displayTemplateOutput should be utilized to easily call the templating engine and have the result display in the standard tool output popup

### Tool Template

The tools_template.json file provides a home for the template that will format the output of the tool.  The template engine allows flexibility, and the tool module can generate a custom data object to work with the template.

### Language File

Any visible language used by the tool (e.g. text on the input / output panel) should be included in a tool specific language file.  The file should be located in the src/locales/{language folder}/tools/toolName.json.  The tool template should use language from the file.

### Config File

The advancedToolbar node in the config file controls some toolbar behaviors.  The toolbar can be removed from the application by disabling it.  As well, individual tools can be removed from the toolbar.   New tools need to be added to the tools collection before they will appear on the site.

[Back To Top](#top)
{: .text-right}