---
title: "BannerEditorTextureCreationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEditorTextureCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEditorTextureCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerEditorTextureCreationData : BannerThumbnailCreationBaseData`
**Base:** `BannerThumbnailCreationBaseData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerEditorTextureCreationData.cs`

## Overview

`BannerEditorTextureCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerEditorTextureCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new BannerEditorTextureCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)