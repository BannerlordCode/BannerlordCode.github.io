---
title: "MeshBuilder"
description: "Auto-generated class reference for MeshBuilder."
---
# MeshBuilder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class MeshBuilder`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MeshBuilder.cs`

## Overview

`MeshBuilder` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)`

**Purpose:** Adds `face corner` to the current collection or state.

```csharp
// Obtain an instance of MeshBuilder from the subsystem API first
MeshBuilder meshBuilder = ...;
var result = meshBuilder.AddFaceCorner(position, normal, uvCoord, 0);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**Purpose:** Adds `face` to the current collection or state.

```csharp
// Obtain an instance of MeshBuilder from the subsystem API first
MeshBuilder meshBuilder = ...;
var result = meshBuilder.AddFace(0, 0, 0);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of MeshBuilder from the subsystem API first
MeshBuilder meshBuilder = ...;
meshBuilder.Clear();
```

### Finalize
`public Mesh Finalize()`

**Purpose:** Performs cleanup work when the object is garbage collected (usually for unmanaged resources).

```csharp
// Obtain an instance of MeshBuilder from the subsystem API first
MeshBuilder meshBuilder = ...;
var result = meshBuilder.Finalize();
```

### CreateUnitMesh
`public static Mesh CreateUnitMesh()`

**Purpose:** Constructs a new `unit mesh` entity and returns it to the caller.

```csharp
// Static call; no instance required
MeshBuilder.CreateUnitMesh();
```

### CreateTilingWindowMesh
`public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)`

**Purpose:** Constructs a new `tiling window mesh` entity and returns it to the caller.

```csharp
// Static call; no instance required
MeshBuilder.CreateTilingWindowMesh("example", meshSizeMin, meshSizeMax, borderThickness, bgBorderThickness);
```

### CreateTilingButtonMesh
`public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)`

**Purpose:** Constructs a new `tiling button mesh` entity and returns it to the caller.

```csharp
// Static call; no instance required
MeshBuilder.CreateTilingButtonMesh("example", meshSizeMin, meshSizeMax, borderThickness);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MeshBuilder meshBuilder = ...;
meshBuilder.AddFaceCorner(position, normal, uvCoord, 0);
```

## See Also

- [Area Index](../)