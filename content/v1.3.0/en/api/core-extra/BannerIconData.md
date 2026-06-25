---
title: "BannerIconData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerIconData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerIconData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BannerIconData`
**Base:** none
**File:** `TaleWorlds.Core/BannerIconData.cs`

## Overview

`BannerIconData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerIconData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialName` | `public string MaterialName { get; }` |
| `TextureIndex` | `public int TextureIndex { get; }` |

## Usage Example

```csharp
var value = new BannerIconData();
```

## See Also

- [Complete Class Catalog](../catalog)