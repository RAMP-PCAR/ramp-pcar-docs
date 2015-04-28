---
layout: index-en
title: Version History
categories:
  - documentation

---
{% include JB/setup %}

# Versioning {#wb-cont}

<div class="toc"></div>

## Major version (e.g, v3.1.x to v4.0.0)

* Typical risk of things breaking: High
* Typical effort to upgrade: High
* Typical changes:
    * Major framework changes (including major breaking changes)
    * Major markup changes (including major breaking changes)
    * Backwards incompatible config file changes
    * Breaking API changes (ex: plugin API or templating)
    * New features and enhancements
    * Bug fixes
* Typical actions required to upgrade:
    * Update or rewrite templates
    * Update or rewrite plugins
    * Significant config file changes

## Minor version (e.g., v3.0.x to v3.1.0)

* Typical risk of things breaking: Low
* Typical effort to upgrade: Moderate
* Typical changes:
    * Minor framework changes
    * Minor markup changes (possibility of minor breaking changes)
    * New features and enhancements
    * Backwards compatible config and API changes
    * Bug fixes
* Typical actions required to upgrade:
    * Update config (to use new features)
    * Small updates to templates

## Maintenance version (e.g., v3.1.0 to v3.1.1)

* Typical risk of things breaking: Minimal
* Typical effort to upgrade: Low
* Typical changes:
    * Bug fixes
* Typical actions required to upgrade:
    * None, maintenance versions should be drop in replacements
