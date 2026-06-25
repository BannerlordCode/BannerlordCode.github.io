---
title: "BannerVisualExtensions"
description: "Auto-generated class reference for BannerVisualExtensions."
---
# BannerVisualExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerVisualExtensions`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/BannerVisualExtensions.cs`

## Overview

`BannerVisualExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTableauTextureSmallForBannerEditor
`public static Texture GetTableauTextureSmallForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**Purpose:** Reads and returns the tableau texture small for banner editor value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

### GetTableauTextureLargeForBannerEditor
`public static Texture GetTableauTextureLargeForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**Purpose:** Reads and returns the tableau texture large for banner editor value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureLargeForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

### GetTableauTextureSmall
`public static Texture GetTableauTextureSmall(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**Purpose:** Reads and returns the tableau texture small value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureSmall(banner, debugInfo, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**Purpose:** Reads and returns the tableau texture large value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureLarge(banner, debugInfo, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerTextureCreationData creationData)`

**Purpose:** Reads and returns the tableau texture large value held by the this instance.

```csharp
// Static call; no instance required
BannerVisualExtensions.GetTableauTextureLarge(banner, debugInfo, setAction, creationData);
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
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

## See Also

- [Area Index](../)