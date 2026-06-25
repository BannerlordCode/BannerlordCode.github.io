---
title: "BannerThumbnailCache"
description: "Auto-generated class reference for BannerThumbnailCache."
---
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

**Purpose:** Constructs a new default banner camera entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerThumbnailCache.CreateDefaultBannerCamera();
```

### CreateNineGridBannerCamera
`public static Camera CreateNineGridBannerCamera()`

**Purpose:** Constructs a new nine grid banner camera entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerThumbnailCache.CreateNineGridBannerCamera();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BannerThumbnailCache instance = ...;
```

## See Also

- [Area Index](../)