---
title: "BannerVisualExtensions"
description: "Auto-generated class reference for BannerVisualExtensions."
---
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

**Purpose:** Reads and returns the tableau texture small value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureSmall(banner, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, Action<Texture> setAction)`

**Purpose:** Reads and returns the tableau texture large value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureLarge(banner, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, Action<Texture> setAction, out BannerThumbnailCreationData creationData)`

**Purpose:** Reads and returns the tableau texture large value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureLarge(banner, setAction, creationData);
```

### ConvertToMultiMesh
`public static MetaMesh ConvertToMultiMesh(this Banner banner)`

**Purpose:** Converts to multi mesh into another representation or type.

```csharp
// Static call; no instance required
BannerVisualExtensions.ConvertToMultiMesh(banner);
```

## Usage Example

```csharp
BannerVisualExtensions.GetTableauTextureSmall(banner, setAction);
```

## See Also

- [Area Index](../)