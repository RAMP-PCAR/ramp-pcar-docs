---
layout: index-secmenu-3.0-en
title: Proxy Configuration and Resources
categories: [documentation]
---

<a name="top" />

# Proxy Configuration and Resources {#wb-content}



<div class="toc"></div>

## What is Proxy

RAMP uses proxy to access resources on a different domain where Cross Origin Resource Sharing (CORS) support is not available.
For more information on proxy, please refer to ESRI ArcGIS API for JavaScript [Using the proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html). 

## RAMP Proxy Configuration 

The location of the proxy is stored in configuration file to allow your application to route request through proxy when needed. 
In RAMP, the proxy page is setup in the /proxy folder. To setup proxy at different location, you will need to update
the location in the configuration file.

In config.en.json:

{% highlight js %}

...
"proxyUrl": "proxy/proxy.ashx",
...

{% endhighlight js %}

## Get the Proxy

ESRI provides three proxies; each targeting a specific service-side platform: [ASP.NET](https://github.com/Esri/resource-proxy/tree/master/DotNet), [Java/JSP](https://github.com/Esri/resource-proxy/tree/master/Java), and [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP).
They are available through [GitHub](https://github.com/Esri/resource-proxy).

Detailed instructions and requirements are available in each folder of specific platform.


Note: for anyone configuring a proxy server, please ensure that it is restricted in some form; either by limiting the 
websites reachable or by requiring some form of authentication.

