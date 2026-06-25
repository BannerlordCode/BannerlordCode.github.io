---
title: "BannerSmallThumbnailCache"
description: "Auto-generated class reference for BannerSmallThumbnailCache."
---
# BannerSmallThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerSmallThumbnailCache : BannerThumbnailCache`
**Base:** `BannerThumbnailCache`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerSmallThumbnailCache.cs`

## Overview

`BannerSmallThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateTexture
`public override Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Constructs a new texture entity and returns it to the caller.

```csharp
// Obtain an instance of BannerSmallThumbnailCache from the subsystem API first
BannerSmallThumbnailCache bannerSmallThumbnailCache = ...;
var result = bannerSmallThumbnailCache.CreateTexture(thumbnailCreationData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerSmallThumbnailCache bannerSmallThumbnailCache = ...;
bannerSmallThumbnailCache.CreateTexture(thumbnailCreationData);
```

## See Also

- [Area Index](../)