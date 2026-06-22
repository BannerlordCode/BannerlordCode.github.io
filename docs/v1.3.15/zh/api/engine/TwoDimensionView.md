<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`

## 概述

`TwoDimensionView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateTwoDimension
```csharp
public static TwoDimensionView CreateTwoDimension(string viewName)
```

### BeginFrame
```csharp
public void BeginFrame()
```

### EndFrame
```csharp
public void EndFrame()
```

### Clear
```csharp
public void Clear()
```

### CreateMeshFromDescription
```csharp
public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)
```

### CreateTextMeshFromCache
```csharp
public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)
```

### CreateTextMeshFromDescription
```csharp
public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)
```

### GetOrCreateMaterial
```csharp
public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)
```

## 使用示例

```csharp
// TwoDimensionView (View) 的典型用法
TwoDimensionView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)