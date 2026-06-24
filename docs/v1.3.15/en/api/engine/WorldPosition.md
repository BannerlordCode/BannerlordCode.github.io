<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorldPosition`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WorldPosition`
**Base:** none
**File:** `TaleWorlds.Engine/WorldPosition.cs`

## Overview

`WorldPosition` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AsVec2` | `public Vec2 AsVec2 { get; }` |
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### SetVec3
`public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)`

**Purpose:** Sets the value or state of `vec3`.

### GetNavMesh
`public UIntPtr GetNavMesh()`

**Purpose:** Gets the current value of `nav mesh`.

### GetNavMeshMT
`public UIntPtr GetNavMeshMT()`

**Purpose:** Gets the current value of `nav mesh m t`.

### GetNearestNavMesh
`public UIntPtr GetNearestNavMesh()`

**Purpose:** Gets the current value of `nearest nav mesh`.

### GetNavMeshZ
`public float GetNavMeshZ()`

**Purpose:** Gets the current value of `nav mesh z`.

### GetNavMeshZMT
`public float GetNavMeshZMT()`

**Purpose:** Gets the current value of `nav mesh z m t`.

### GetGroundZ
`public float GetGroundZ()`

**Purpose:** Gets the current value of `ground z`.

### GetGroundZMT
`public float GetGroundZMT()`

**Purpose:** Gets the current value of `ground z m t`.

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**Purpose:** Gets the current value of `nav mesh vec3`.

### GetNavMeshVec3MT
`public Vec3 GetNavMeshVec3MT()`

**Purpose:** Gets the current value of `nav mesh vec3 m t`.

### GetGroundVec3
`public Vec3 GetGroundVec3()`

**Purpose:** Gets the current value of `ground vec3`.

### GetGroundVec3MT
`public Vec3 GetGroundVec3MT()`

**Purpose:** Gets the current value of `ground vec3 m t`.

### GetVec3WithoutValidity
`public Vec3 GetVec3WithoutValidity()`

**Purpose:** Gets the current value of `vec3 without validity`.

### SetVec2MT
`public void SetVec2MT(Vec2 value)`

**Purpose:** Sets the value or state of `vec2 m t`.

### SetVec2
`public void SetVec2(Vec2 value)`

**Purpose:** Sets the value or state of `vec2`.

### DistanceSquaredWithLimit
`public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)`

**Purpose:** Handles logic related to `distance squared with limit`.

## Usage Example

```csharp
var value = new WorldPosition();
value.SetVec3(navMesh, position, false);
```

## See Also

- [Complete Class Catalog](../catalog)