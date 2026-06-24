<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerVisual`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerVisual

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerVisual : IBannerVisual`
**Base:** `IBannerVisual`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/BannerVisual.cs`

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

**Purpose:** Handles logic related to `validate create tableau textures`.

### GetTableauTextureSmall
`public Texture GetTableauTextureSmall(in BannerDebugInfo debugInfo, Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**Purpose:** Gets the current value of `tableau texture small`.

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture> setAction, bool isTableauOrNineGrid = true)`

**Purpose:** Gets the current value of `tableau texture large`.

### GetTableauTextureLarge
`public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerTextureCreationData creationData, bool isTableauOrNineGrid = true)`

**Purpose:** Gets the current value of `tableau texture large`.

### GetMeshMatrix
`public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)`

**Purpose:** Gets the current value of `mesh matrix`.

### ConvertToMultiMesh
`public MetaMesh ConvertToMultiMesh()`

**Purpose:** Handles logic related to `convert to multi mesh`.

## Usage Example

```csharp
var value = new BannerVisual();
value.ValidateCreateTableauTextures();
```

## See Also

- [Complete Class Catalog](../catalog)