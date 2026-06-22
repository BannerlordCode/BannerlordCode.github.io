<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailCreatorView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/ThumbnailCreatorView.cs`

## Overview

`ThumbnailCreatorView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of ThumbnailCreatorView (View)
ThumbnailCreatorView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)