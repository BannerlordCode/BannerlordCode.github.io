---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "core bucket index"
description: "core: canonical bucket with 2 public types. **A deliberate entry-class carve-out**: it holds only the mod loading entries `MBSubModuleBase` and `Module`; the full Core API is in [`../core-extra/`](../core-extra/). This is intended layout, not a duplicate-routing bug."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# core bucket index

**Bucket:** `core`
**Types:** 2
**Routing rule:** `entryPointDirs.MBSubModuleBase`

## Bucket Tour

**A deliberate entry-class carve-out**: it holds only the mod loading entries `MBSubModuleBase` and `Module`; the full Core API is in [`../core-extra/`](../core-extra/). This is intended layout, not a duplicate-routing bug.

> Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.

- - [↑ API reference](..//) · - [↑ version home](../..//) | - [full Core API](../core-extra/)

> 2 further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: MBSubModuleBase, Module.

## Complete Class Catalog

## See Also

- - [↑ API reference](..//)
- - [↑ version home](../..//)
-  [full Core API](../core-extra/)
