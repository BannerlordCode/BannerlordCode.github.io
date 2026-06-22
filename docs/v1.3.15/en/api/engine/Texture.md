<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Texture`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Texture

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Texture` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static Texture CreateTextureFromPath(PlatformFilePath filePath)
```

### GetPixelData

```csharp
public void GetPixelData(byte bytes)
```

### TransformRenderTargetToResource

```csharp
public void TransformRenderTargetToResource(string name)
```

### GetFromResource

```csharp
public static Texture GetFromResource(string resourceName)
```

### IsLoaded

```csharp
public bool IsLoaded()
```

### GetSDFBoundingBoxData

```csharp
public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)
```

### CheckAndGetFromResource

```csharp
public static Texture CheckAndGetFromResource(string resourceName)
```

### ScaleTextureWithRatio

```csharp
public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)
```

### PreloadTexture

```csharp
public void PreloadTexture(bool blocking)
```

### Release

```csharp
public void Release()
```

### ReleaseImmediately

```csharp
public void ReleaseImmediately()
```

### ReleaseAfterNumberOfFrames

```csharp
public void ReleaseAfterNumberOfFrames(int frameCount)
```

### LoadTextureFromPath

```csharp
public static Texture LoadTextureFromPath(string fileName, string folder)
```

### CreateDepthTarget

```csharp
public static Texture CreateDepthTarget(string name, int width, int height)
```

### CreateFromByteArray

```csharp
public static Texture CreateFromByteArray(byte data, int width, int height)
```

### SaveToFile

```csharp
public void SaveToFile(string path, bool isRelativePath)
```

### SetTextureAsAlwaysValid

```csharp
public void SetTextureAsAlwaysValid()
```

### CreateFromMemory

```csharp
public static Texture CreateFromMemory(byte data)
```

### ReleaseGpuMemories

```csharp
public static void ReleaseGpuMemories()
```

### CreateTableauTexture

```csharp
public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)