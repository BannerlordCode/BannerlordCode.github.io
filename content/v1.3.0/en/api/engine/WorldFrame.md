---
title: "WorldFrame"
description: "Auto-generated class reference for WorldFrame."
---
# WorldFrame

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WorldFrame`
**Base:** none
**File:** `TaleWorlds.Engine/WorldFrame.cs`

## Overview

`WorldFrame` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### ToGroundMatrixFrame
`public MatrixFrame ToGroundMatrixFrame()`

**Purpose:** Executes the ToGroundMatrixFrame logic.

```csharp
// Obtain an instance of WorldFrame from the subsystem API first
WorldFrame worldFrame = ...;
var result = worldFrame.ToGroundMatrixFrame();
```

### ToNavMeshMatrixFrame
`public MatrixFrame ToNavMeshMatrixFrame()`

**Purpose:** Executes the ToNavMeshMatrixFrame logic.

```csharp
// Obtain an instance of WorldFrame from the subsystem API first
WorldFrame worldFrame = ...;
var result = worldFrame.ToNavMeshMatrixFrame();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorldFrame worldFrame = ...;
worldFrame.ToGroundMatrixFrame();
```

## See Also

- [Area Index](../)