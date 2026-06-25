---
title: "BannerTableauTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerTableauTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/BannerTableauTextureProvider.cs`

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
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Handles logic related to `clear`.

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new BannerTableauTextureProvider();
value.Clear(false);
```

## See Also

- [Complete Class Catalog](../catalog)