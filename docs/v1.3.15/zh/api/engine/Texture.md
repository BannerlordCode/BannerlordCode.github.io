<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Texture`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Texture

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Texture` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)