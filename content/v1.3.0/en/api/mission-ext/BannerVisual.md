---
title: "BannerVisual"
description: "Auto-generated class reference for BannerVisual."
---
# BannerVisual

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerVisual : IBannerVisual`
**Base:** `IBannerVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs`

## Overview

`BannerVisual` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |

## Key Methods

### ValidateCreateTableauTextures
`public void ValidateCreateTableauTextures()`

**Purpose:** Checks whether `create tableau textures` satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of BannerVisual from the subsystem API first
BannerVisual bannerVisual = ...;
bannerVisual.ValidateCreateTableauTextures();
```

### GetTableauTextureSmall
`public Texture GetTableauTextureSmall(Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**Purpose:** Reads and returns the `tableau texture small` value held by the current object.

```csharp
// Obtain an instance of BannerVisual from the subsystem API first
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureSmall(setAction, false);
```

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**Purpose:** Reads and returns the `tableau texture large` value held by the current object.

```csharp
// Obtain an instance of BannerVisual from the subsystem API first
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureLarge(setAction, false);
```

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(Action<Texture> setAction, out BannerThumbnailCreationData creationData, bool isTableauOrNineGrid = true)`

**Purpose:** Reads and returns the `tableau texture large` value held by the current object.

```csharp
// Obtain an instance of BannerVisual from the subsystem API first
BannerVisual bannerVisual = ...;
var result = bannerVisual.GetTableauTextureLarge(setAction, creationData, false);
```

### GetMeshMatrix
`public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)`

**Purpose:** Reads and returns the `mesh matrix` value held by the current object.

```csharp
// Static call; no instance required
BannerVisual.GetMeshMatrix(mesh, 0, 0, 0, 0, false, 0, 0);
```

### ConvertToMultiMesh
`public MetaMesh ConvertToMultiMesh()`

**Purpose:** Converts `to multi mesh` into another representation or type.

```csharp
// Obtain an instance of BannerVisual from the subsystem API first
BannerVisual bannerVisual = ...;
var result = bannerVisual.ConvertToMultiMesh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerVisual bannerVisual = ...;
bannerVisual.ValidateCreateTableauTextures();
```

## See Also

- [Area Index](../)