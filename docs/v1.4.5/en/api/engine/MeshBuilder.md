<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MeshBuilder`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MeshBuilder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class MeshBuilder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/MeshBuilder.cs`

## Overview

`MeshBuilder` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)`

**Purpose:** Adds `face corner` to the current collection or state.

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**Purpose:** Adds `face` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Finalize
`public Mesh Finalize()`

**Purpose:** Handles logic related to `finalize`.

### CreateUnitMesh
`public static Mesh CreateUnitMesh()`

**Purpose:** Creates a new `unit mesh` instance or object.

### CreateTilingWindowMesh
`public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)`

**Purpose:** Creates a new `tiling window mesh` instance or object.

### CreateTilingButtonMesh
`public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)`

**Purpose:** Creates a new `tiling button mesh` instance or object.

## Usage Example

```csharp
var value = new MeshBuilder();
value.AddFaceCorner(position, normal, uvCoord, 0);
```

## See Also

- [Complete Class Catalog](../catalog)