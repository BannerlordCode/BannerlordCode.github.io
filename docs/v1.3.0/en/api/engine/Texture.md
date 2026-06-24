<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Texture`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Texture.cs`

## Overview

`Texture` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
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

### ReleaseNextFrame
`public void ReleaseNextFrame()`

**Purpose:** Handles logic related to `release next frame`.

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
`public void SaveToFile(string path)`

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

### CreateRenderTarget
`public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)`

**Purpose:** Creates a new `render target` instance or object.

## Usage Example

```csharp
Texture.CreateTextureFromPath(filePath);
```

## See Also

- [Complete Class Catalog](../catalog)