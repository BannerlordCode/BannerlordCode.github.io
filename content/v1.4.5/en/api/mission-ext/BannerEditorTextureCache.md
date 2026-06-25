---
title: "BannerEditorTextureCache"
description: "Auto-generated class reference for BannerEditorTextureCache."
---
# BannerEditorTextureCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerEditorTextureCache : ThumbnailCache<BannerEditorTextureCreationData>`
**Base:** `ThumbnailCache<BannerEditorTextureCreationData>`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerEditorTextureCache.cs`

## Overview

`BannerEditorTextureCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static BannerEditorTextureCache Current { get; }` |

## Key Methods

### FlushCache
`public void FlushCache()`

**Purpose:** Executes the FlushCache logic.

```csharp
// Obtain an instance of BannerEditorTextureCache from the subsystem API first
BannerEditorTextureCache bannerEditorTextureCache = ...;
bannerEditorTextureCache.FlushCache();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerEditorTextureCache bannerEditorTextureCache = ...;
bannerEditorTextureCache.FlushCache();
```

## See Also

- [Area Index](../)