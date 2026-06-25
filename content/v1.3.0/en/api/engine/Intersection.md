---
title: "Intersection"
description: "Auto-generated class reference for Intersection."
---
# Intersection

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct Intersection`
**Base:** none
**File:** `TaleWorlds.Engine/Intersection.cs`

## Overview

`Intersection` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DoSegmentsIntersect
`public static bool DoSegmentsIntersect(Vec2 line1Start, Vec2 line1Direction, Vec2 line2Start, Vec2 line2Direction, ref Vec2 intersectionPoint)`

**Purpose:** **Purpose:** Executes the DoSegmentsIntersect logic.

```csharp
// Static call; no instance required
Intersection.DoSegmentsIntersect(line1Start, line1Direction, line2Start, line2Direction, intersectionPoint);
```

## Usage Example

```csharp
Intersection.DoSegmentsIntersect(line1Start, line1Direction, line2Start, line2Direction, intersectionPoint);
```

## See Also

- [Area Index](../)