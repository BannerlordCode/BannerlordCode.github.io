<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailRenderRequest`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** struct
**Area:** Engine

## Overview

> This is an auto-generated stub. `ThumbnailRenderRequest` is a struct in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CreateWithTexture

```csharp
public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)
```

### CreateWithoutTexture

```csharp
public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)
```

### CreateForCachedEntity

```csharp
public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)
```

### CreateForCachedEntityWithoutTexture

```csharp
public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)