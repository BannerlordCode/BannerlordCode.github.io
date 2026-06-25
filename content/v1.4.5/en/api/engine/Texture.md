---
title: "Texture"
description: "Auto-generated class reference for Texture."
---
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Texture.cs`

## Overview

`Texture` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReleased` | `public bool IsReleased { get; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### CreateTextureFromPath
`public static Texture CreateTextureFromPath(PlatformFilePath filePath)`

**Purpose:** Constructs a new `texture from path` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateTextureFromPath(filePath);
```

### GetPixelData
`public void GetPixelData(byte bytes)`

**Purpose:** Reads and returns the `pixel data` value held by the current object.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.GetPixelData(0);
```

### TransformRenderTargetToResource
`public void TransformRenderTargetToResource(string name)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.TransformRenderTargetToResource("example");
```

### GetFromResource
`public static Texture GetFromResource(string resourceName)`

**Purpose:** Reads and returns the `from resource` value held by the current object.

```csharp
// Static call; no instance required
Texture.GetFromResource("example");
```

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Determines whether the current object is in the `loaded` state or condition.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
var result = texture.IsLoaded();
```

### GetSDFBoundingBoxData
`public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)`

**Purpose:** Reads and returns the `s d f bounding box data` value held by the current object.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.GetSDFBoundingBoxData(min, max);
```

### CheckAndGetFromResource
`public static Texture CheckAndGetFromResource(string resourceName)`

**Purpose:** Verifies whether `and get from resource` holds true for the current object.

```csharp
// Static call; no instance required
Texture.CheckAndGetFromResource("example");
```

### ScaleTextureWithRatio
`public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Texture.ScaleTextureWithRatio(tableauSizeX, tableauSizeY);
```

### PreloadTexture
`public void PreloadTexture(bool blocking)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.PreloadTexture(false);
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.Release();
```

### ReleaseImmediately
`public void ReleaseImmediately()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.ReleaseImmediately();
```

### ReleaseAfterNumberOfFrames
`public void ReleaseAfterNumberOfFrames(int frameCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.ReleaseAfterNumberOfFrames(0);
```

### LoadTextureFromPath
`public static Texture LoadTextureFromPath(string fileName, string folder)`

**Purpose:** Reads `texture from path` from persistent storage or a stream.

```csharp
// Static call; no instance required
Texture.LoadTextureFromPath("example", "example");
```

### CreateDepthTarget
`public static Texture CreateDepthTarget(string name, int width, int height)`

**Purpose:** Constructs a new `depth target` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateDepthTarget("example", 0, 0);
```

### CreateFromByteArray
`public static Texture CreateFromByteArray(byte data, int width, int height)`

**Purpose:** Constructs a new `from byte array` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateFromByteArray(0, 0, 0);
```

### SaveToFile
`public void SaveToFile(string path, bool isRelativePath)`

**Purpose:** Writes `to file` to persistent storage or a stream.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.SaveToFile("example", false);
```

### SetTextureAsAlwaysValid
`public void SetTextureAsAlwaysValid()`

**Purpose:** Assigns a new value to `texture as always valid` and updates the object's internal state.

```csharp
// Obtain an instance of Texture from the subsystem API first
Texture texture = ...;
texture.SetTextureAsAlwaysValid();
```

### CreateFromMemory
`public static Texture CreateFromMemory(byte data)`

**Purpose:** Constructs a new `from memory` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateFromMemory(0);
```

### ReleaseGpuMemories
`public static void ReleaseGpuMemories()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Texture.ReleaseGpuMemories();
```

### CreateTableauTexture
`public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**Purpose:** Constructs a new `tableau texture` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateTableauTexture("example", eventHandler, objectRef, 0, 0);
```

### CreateRenderTarget
`public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)`

**Purpose:** Constructs a new `render target` entity and returns it to the caller.

```csharp
// Static call; no instance required
Texture.CreateRenderTarget("example", 0, 0, false, false, false, false);
```

## Usage Example

```csharp
Texture.CreateTextureFromPath(filePath);
```

## See Also

- [Area Index](../)