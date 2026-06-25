---
title: "WorldPosition"
description: "Auto-generated class reference for WorldPosition."
---
# WorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WorldPosition`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/WorldPosition.cs`

## Overview

`WorldPosition` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### SetVec3
`public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)`

**Purpose:** Assigns a new value to vec3 and updates the object's internal state.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
worldPosition.SetVec3(navMesh, position, false);
```

### GetNavMesh
`public UIntPtr GetNavMesh()`

**Purpose:** Reads and returns the nav mesh value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMesh();
```

### GetNavMeshMT
`public UIntPtr GetNavMeshMT()`

**Purpose:** Reads and returns the nav mesh m t value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshMT();
```

### GetNearestNavMesh
`public UIntPtr GetNearestNavMesh()`

**Purpose:** Reads and returns the nearest nav mesh value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNearestNavMesh();
```

### GetNavMeshZ
`public float GetNavMeshZ()`

**Purpose:** Reads and returns the nav mesh z value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshZ();
```

### GetNavMeshZMT
`public float GetNavMeshZMT()`

**Purpose:** Reads and returns the nav mesh z m t value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshZMT();
```

### GetGroundZ
`public float GetGroundZ()`

**Purpose:** Reads and returns the ground z value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundZ();
```

### GetGroundZMT
`public float GetGroundZMT()`

**Purpose:** Reads and returns the ground z m t value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundZMT();
```

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**Purpose:** Reads and returns the nav mesh vec3 value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshVec3();
```

### GetNavMeshVec3MT
`public Vec3 GetNavMeshVec3MT()`

**Purpose:** Reads and returns the nav mesh vec3 m t value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetNavMeshVec3MT();
```

### GetGroundVec3
`public Vec3 GetGroundVec3()`

**Purpose:** Reads and returns the ground vec3 value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundVec3();
```

### GetGroundVec3MT
`public Vec3 GetGroundVec3MT()`

**Purpose:** Reads and returns the ground vec3 m t value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetGroundVec3MT();
```

### GetVec3WithoutValidity
`public Vec3 GetVec3WithoutValidity()`

**Purpose:** Reads and returns the vec3 without validity value held by the this instance.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.GetVec3WithoutValidity();
```

### SetVec2MT
`public void SetVec2MT(Vec2 value)`

**Purpose:** Assigns a new value to vec2 m t and updates the object's internal state.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
worldPosition.SetVec2MT(value);
```

### SetVec2
`public void SetVec2(Vec2 value)`

**Purpose:** Assigns a new value to vec2 and updates the object's internal state.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
worldPosition.SetVec2(value);
```

### DistanceSquaredWithLimit
`public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)`

**Purpose:** Executes the DistanceSquaredWithLimit logic.

```csharp
// Obtain an instance of WorldPosition from the subsystem API first
WorldPosition worldPosition = ...;
var result = worldPosition.DistanceSquaredWithLimit(targetPoint, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorldPosition worldPosition = ...;
worldPosition.SetVec3(navMesh, position, false);
```

## See Also

- [Area Index](../)