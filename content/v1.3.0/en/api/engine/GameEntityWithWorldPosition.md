---
title: "GameEntityWithWorldPosition"
description: "Auto-generated class reference for GameEntityWithWorldPosition."
---
# GameEntityWithWorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class GameEntityWithWorldPosition`
**Base:** none
**File:** `TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## Overview

`GameEntityWithWorldPosition` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |

## Key Methods

### InvalidateWorldPosition
`public void InvalidateWorldPosition()`

**Purpose:** **Purpose:** Executes the InvalidateWorldPosition logic.

```csharp
// Obtain an instance of GameEntityWithWorldPosition from the subsystem API first
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.InvalidateWorldPosition();
```

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**Purpose:** **Purpose:** Assigns a new value to custom local frame and updates the object's internal state.

```csharp
// Obtain an instance of GameEntityWithWorldPosition from the subsystem API first
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.SetCustomLocalFrame(customLocalFrame);
```

### GetNavMesh
`public UIntPtr GetNavMesh()`

**Purpose:** **Purpose:** Reads and returns the nav mesh value held by the this instance.

```csharp
// Obtain an instance of GameEntityWithWorldPosition from the subsystem API first
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
var result = gameEntityWithWorldPosition.GetNavMesh();
```

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**Purpose:** **Purpose:** Reads and returns the nav mesh vec3 value held by the this instance.

```csharp
// Obtain an instance of GameEntityWithWorldPosition from the subsystem API first
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
var result = gameEntityWithWorldPosition.GetNavMeshVec3();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameEntityWithWorldPosition gameEntityWithWorldPosition = ...;
gameEntityWithWorldPosition.InvalidateWorldPosition();
```

## See Also

- [Area Index](../)