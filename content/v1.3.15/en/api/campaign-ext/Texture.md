---
title: "Texture"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Texture`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**Area:** campaign-ext

## Overview

`Texture` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReleased` | `public bool IsReleased { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `MemorySize` | `public int MemorySize { get; }` |
| `IsRenderTarget` | `public bool IsRenderTarget { get; }` |
| `Name` | `public string Name { get; set; }` |
| `RenderTargetComponent` | `public RenderTargetComponent RenderTargetComponent { get; }` |
| `TableauView` | `public TableauView TableauView { get; }` |
| `UserData` | `public object UserData { get; }` |

## Key Methods

### CreateTextureFromPath
`public static Texture CreateTextureFromPath(PlatformFilePath filePath)`

**Purpose:** Creates a new `texture from path` instance or object.

### GetPixelData
`public void GetPixelData(byte bytes)`

**Purpose:** Gets the current value of `pixel data`.

### TransformRenderTargetToResource
`public void TransformRenderTargetToResource(string name)`

**Purpose:** Handles logic related to `transform render target to resource`.

### GetFromResource
`public static Texture GetFromResource(string resourceName)`

**Purpose:** Gets the current value of `from resource`.

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Handles logic related to `is loaded`.

### GetSDFBoundingBoxData
`public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)`

**Purpose:** Gets the current value of `s d f bounding box data`.

### CheckAndGetFromResource
`public static Texture CheckAndGetFromResource(string resourceName)`

**Purpose:** Handles logic related to `check and get from resource`.

### ScaleTextureWithRatio
`public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)`

**Purpose:** Handles logic related to `scale texture with ratio`.

### PreloadTexture
`public void PreloadTexture(bool blocking)`

**Purpose:** Handles logic related to `preload texture`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### ReleaseImmediately
`public void ReleaseImmediately()`

**Purpose:** Handles logic related to `release immediately`.

### ReleaseAfterNumberOfFrames
`public void ReleaseAfterNumberOfFrames(int frameCount)`

**Purpose:** Handles logic related to `release after number of frames`.

### LoadTextureFromPath
`public static Texture LoadTextureFromPath(string fileName, string folder)`

**Purpose:** Loads `texture from path` data.

### CreateDepthTarget
`public static Texture CreateDepthTarget(string name, int width, int height)`

**Purpose:** Creates a new `depth target` instance or object.

### CreateFromByteArray
`public static Texture CreateFromByteArray(byte data, int width, int height)`

**Purpose:** Creates a new `from byte array` instance or object.

### SaveToFile
`public void SaveToFile(string path, bool isRelativePath)`

**Purpose:** Saves `to file` data.

### SetTextureAsAlwaysValid
`public void SetTextureAsAlwaysValid()`

**Purpose:** Sets the value or state of `texture as always valid`.

### CreateFromMemory
`public static Texture CreateFromMemory(byte data)`

**Purpose:** Creates a new `from memory` instance or object.

### ReleaseGpuMemories
`public static void ReleaseGpuMemories()`

**Purpose:** Handles logic related to `release gpu memories`.

### CreateTableauTexture
`public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**Purpose:** Creates a new `tableau texture` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Texture.CreateTextureFromPath(filePath);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
