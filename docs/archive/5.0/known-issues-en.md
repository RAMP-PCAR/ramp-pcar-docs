---
layout: index-secmenu-5.0-en
title: Known Issues
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# Known Issues {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

##IE 9 Dataset Patch

Internet Explorer 9, prior to the May 2014 security patch, would break on loading datasets with a large amount of numeric data.
This would result in a script error and prevent the map from rendering correctly.  Any IE9 clients should be patched to ensure
RAMP functions correctly.  See this <a href="http://stackoverflow.com/questions/11833319/ie-error-2147024882/11909547#11909547">
bug report</a> for more details.

[Back To Top](#top)
{: .text-right}

##IE Compatibility Mode

RAMP will only render correctly if Internet Explorer is running in standards compliant mode.  The recommended way to enforce
this is to have the web server it is hosted on send a ```X-UA-Compatible``` header.  See the examples below for some of the
more common configurations.

### IIS7+

{% highlight xml %}
<system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="X-UA-Compatible" value="IE=edge" />
      </customHeaders>
    </httpProtocol>
</system.webServer>
{% endhighlight %}

### Apache

{% highlight apache %}
# make sure headers_module is enabled
<IfModule headers_module>
   Header set X-UA-Compatible: IE=edge
</IfModule>
{% endhighlight %}

### Nginx

{% highlight c %}
add_header "X-UA-Compatible" "IE=Edge";
{% endhighlight %}

[Back To Top](#top)
{: .text-right}
