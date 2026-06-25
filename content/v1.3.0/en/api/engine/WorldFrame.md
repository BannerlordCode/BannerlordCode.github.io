---
title: "WorldFrame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorldFrame`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `to ground matrix frame`.

### ToNavMeshMatrixFrame
`public MatrixFrame ToNavMeshMatrixFrame()`

**Purpose:** Handles logic related to `to nav mesh matrix frame`.

## Usage Example

```csharp
var value = new WorldFrame();
value.ToGroundMatrixFrame();
```

## See Also

- [Complete Class Catalog](../catalog)