---
title: "BannerThumbnailCreationBaseData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerThumbnailCreationBaseData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerThumbnailCreationBaseData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerThumbnailCreationBaseData.cs`

## Overview

`BannerThumbnailCreationBaseData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerThumbnailCreationBaseData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |
| `DebugInfo` | `public BannerDebugInfo DebugInfo { get; }` |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid { get; }` |
| `IsLarge` | `public bool IsLarge { get; }` |

## Usage Example

```csharp
var implementation = new CustomBannerThumbnailCreationBaseData();
```

## See Also

- [Complete Class Catalog](../catalog)