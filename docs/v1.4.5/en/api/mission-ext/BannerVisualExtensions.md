<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerVisualExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerVisualExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerVisualExtensions`
**Area:** mission-ext

## Overview

`BannerVisualExtensions` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTableauTextureSmallForBannerEditor
`public static Texture GetTableauTextureSmallForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**Purpose:** Gets the current value of `tableau texture small for banner editor`.

### GetTableauTextureLargeForBannerEditor
`public static Texture GetTableauTextureLargeForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**Purpose:** Gets the current value of `tableau texture large for banner editor`.

### GetTableauTextureSmall
`public static Texture GetTableauTextureSmall(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**Purpose:** Gets the current value of `tableau texture small`.

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**Purpose:** Gets the current value of `tableau texture large`.

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerTextureCreationData creationData)`

**Purpose:** Gets the current value of `tableau texture large`.

### ConvertToMultiMesh
`public static MetaMesh ConvertToMultiMesh(this Banner banner)`

**Purpose:** Handles logic related to `convert to multi mesh`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
