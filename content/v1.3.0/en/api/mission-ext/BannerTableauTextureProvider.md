---
title: "BannerTableauTextureProvider"
description: "Auto-generated class reference for BannerTableauTextureProvider."
---
# BannerTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/BannerTableauTextureProvider.cs`

## Overview

`BannerTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `IsNineGrid` | `public bool IsNineGrid { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual { get; set; }` |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual { get; set; }` |
| `UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool> UpdateRotationValueManualWithMirror { get; set; }` |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of BannerTableauTextureProvider from the subsystem API first
BannerTableauTextureProvider bannerTableauTextureProvider = ...;
bannerTableauTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableauTextureProvider from the subsystem API first
BannerTableauTextureProvider bannerTableauTextureProvider = ...;
bannerTableauTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of BannerTableauTextureProvider from the subsystem API first
BannerTableauTextureProvider bannerTableauTextureProvider = ...;
bannerTableauTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerTableauTextureProvider bannerTableauTextureProvider = ...;
bannerTableauTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)