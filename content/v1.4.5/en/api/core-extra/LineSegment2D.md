---
title: "LineSegment2D"
description: "Auto-generated class reference for LineSegment2D."
---
# LineSegment2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct LineSegment2D`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/LineSegment2D.cs`

## Overview

`LineSegment2D` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec2 this { get; }` |

## Key Methods

### LineSegment2D
`public struct LineSegment2D(Vec2 point1, Vec2 point2)`

**Purpose:** **Purpose:** Executes the LineSegment2D logic.

```csharp
// Obtain an instance of LineSegment2D from the subsystem API first
LineSegment2D lineSegment2D = ...;
var result = lineSegment2D.LineSegment2D(point1, point2);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LineSegment2D lineSegment2D = ...;
lineSegment2D.LineSegment2D(point1, point2);
```

## See Also

- [Area Index](../)