---
title: "ThumbnailRenderRequest"
description: "Auto-generated class reference for ThumbnailRenderRequest."
---
# ThumbnailRenderRequest

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct ThumbnailRenderRequest`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ThumbnailRenderRequest.cs`

## Overview

`ThumbnailRenderRequest` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithTexture
`public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)`

**Purpose:** Constructs a new `with texture` entity and returns it to the caller.

```csharp
// Static call; no instance required
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", "example", 0);
```

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Constructs a new `without texture` entity and returns it to the caller.

```csharp
// Static call; no instance required
ThumbnailRenderRequest.CreateWithoutTexture(scene, camera, entity, "example", 0, 0, "example", 0);
```

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)`

**Purpose:** Constructs a new `for cached entity` entity and returns it to the caller.

```csharp
// Static call; no instance required
ThumbnailRenderRequest.CreateForCachedEntity(scene, camera, texture, "example", "example", "example", 0);
```

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**Purpose:** Constructs a new `for cached entity without texture` entity and returns it to the caller.

```csharp
// Static call; no instance required
ThumbnailRenderRequest.CreateForCachedEntityWithoutTexture(scene, camera, "example", "example", 0, 0, "example", 0);
```

## Usage Example

```csharp
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", "example", 0);
```

## See Also

- [Area Index](../)