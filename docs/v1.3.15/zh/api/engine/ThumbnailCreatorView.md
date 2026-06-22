<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailCreatorView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/ThumbnailCreatorView.cs`

## 概述

`ThumbnailCreatorView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateThumbnailCreatorView
```csharp
public static ThumbnailCreatorView CreateThumbnailCreatorView()
```

### RegisterScene
```csharp
public void RegisterScene(Scene scene, bool usePostFx = true)
```

### RegisterCachedEntity
```csharp
public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)
```

### UnregisterCachedEntity
```csharp
public void UnregisterCachedEntity(string cacheId)
```

### RegisterRenderRequest
```csharp
public void RegisterRenderRequest(ref ThumbnailRenderRequest request)
```

### ClearRequests
```csharp
public void ClearRequests()
```

### CancelRequest
```csharp
public void CancelRequest(string renderID)
```

### GetNumberOfPendingRequests
```csharp
public int GetNumberOfPendingRequests()
```

### IsMemoryCleared
```csharp
public bool IsMemoryCleared()
```

### OnThumbnailRenderCompleteDelegate
```csharp
public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)
```

## 使用示例

```csharp
// ThumbnailCreatorView (View) 的典型用法
ThumbnailCreatorView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)