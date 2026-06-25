---
title: "BannerThumbnailCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerThumbnailCache`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCache : ThumbnailCache<BannerThumbnailCreationData>`
**Base:** `ThumbnailCache<BannerThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs`

## Overview

`BannerThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDefaultBannerCamera
`public static Camera CreateDefaultBannerCamera()`

**Purpose:** Creates a new `default banner camera` instance or object.

### CreateNineGridBannerCamera
`public static Camera CreateNineGridBannerCamera()`

**Purpose:** Creates a new `nine grid banner camera` instance or object.

## Usage Example

```csharp
var implementation = new CustomBannerThumbnailCache();
```

## See Also

- [Complete Class Catalog](../catalog)