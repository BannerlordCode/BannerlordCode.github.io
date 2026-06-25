---
title: "BannerVisualExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerVisualExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerVisualExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerVisualExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs`

## Overview

`BannerVisualExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTableauTextureSmall
`public static Texture GetTableauTextureSmall(this Banner banner, Action<Texture> setAction)`

**Purpose:** Gets the current value of `tableau texture small`.

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, Action<Texture> setAction)`

**Purpose:** Gets the current value of `tableau texture large`.

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, Action<Texture> setAction, out BannerThumbnailCreationData creationData)`

**Purpose:** Gets the current value of `tableau texture large`.

### ConvertToMultiMesh
`public static MetaMesh ConvertToMultiMesh(this Banner banner)`

**Purpose:** Handles logic related to `convert to multi mesh`.

## Usage Example

```csharp
BannerVisualExtensions.GetTableauTextureSmall(banner, setAction);
```

## See Also

- [Complete Class Catalog](../catalog)