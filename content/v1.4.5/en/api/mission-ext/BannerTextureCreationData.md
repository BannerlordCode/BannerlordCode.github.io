---
title: "BannerTextureCreationData"
description: "Auto-generated class reference for BannerTextureCreationData."
---
# BannerTextureCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTextureCreationData : BannerThumbnailCreationBaseData`
**Base:** `BannerThumbnailCreationBaseData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerTextureCreationData.cs`

## Overview

`BannerTextureCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerTextureCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BannerTextureCreationData entry = ...;
```

## See Also

- [Area Index](../)