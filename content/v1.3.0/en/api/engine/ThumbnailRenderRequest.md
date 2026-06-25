---
title: "ThumbnailRenderRequest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailRenderRequest`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct ThumbnailRenderRequest`
**Base:** none
**File:** `TaleWorlds.Engine/ThumbnailRenderRequest.cs`

## Overview

`ThumbnailRenderRequest` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithTexture
`public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, int allocationGroupIndex)`

**Purpose:** Creates a new `with texture` instance or object.

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `without texture` instance or object.

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, int allocationGroupIndex)`

**Purpose:** Creates a new `for cached entity` instance or object.

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Creates a new `for cached entity without texture` instance or object.

## Usage Example

```csharp
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)