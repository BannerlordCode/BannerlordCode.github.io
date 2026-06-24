<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailRenderRequest`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct ThumbnailRenderRequest`
**Area:** engine

## Overview

`ThumbnailRenderRequest` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithTexture
`public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `with texture` instance or object.

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `without texture` instance or object.

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `for cached entity` instance or object.

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `for cached entity without texture` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", "example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
