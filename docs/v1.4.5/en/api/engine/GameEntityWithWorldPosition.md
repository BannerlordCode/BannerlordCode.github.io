<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityWithWorldPosition`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameEntityWithWorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class GameEntityWithWorldPosition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## Overview

`GameEntityWithWorldPosition` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |

## Key Methods

### InvalidateWorldPosition
`public void InvalidateWorldPosition()`

**Purpose:** Handles logic related to `invalidate world position`.

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**Purpose:** Sets the value or state of `custom local frame`.

### GetNavMesh
`public UIntPtr GetNavMesh()`

**Purpose:** Gets the current value of `nav mesh`.

### GetNavMeshVec3
`public Vec3 GetNavMeshVec3()`

**Purpose:** Gets the current value of `nav mesh vec3`.

## Usage Example

```csharp
var value = new GameEntityWithWorldPosition();
value.InvalidateWorldPosition();
```

## See Also

- [Complete Class Catalog](../catalog)