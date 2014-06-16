---
layout: index-en
title: Known Issues
categories: [documentation]
---
{% include JB/setup %}

# Known Issues {#wb-cont}

## IE Compatibility Mode

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