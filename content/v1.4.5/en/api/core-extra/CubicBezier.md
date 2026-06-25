---
title: "CubicBezier"
description: "Auto-generated class reference for CubicBezier."
---
# CubicBezier

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CubicBezier`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/CubicBezier.cs`

## Overview

`CubicBezier` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateEase
`public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**Purpose:** Constructs a new ease entity and returns it to the caller.

```csharp
// Static call; no instance required
CubicBezier.CreateEase(0, 0, 0, 0);
```

### CreateYBeginToYEndWithRelativeControlDirs
`public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)`

**Purpose:** Constructs a new y begin to y end with relative control dirs entity and returns it to the caller.

```csharp
// Static call; no instance required
CubicBezier.CreateYBeginToYEndWithRelativeControlDirs(0, 0, 0, 0, 0, 0);
```

### CreateYBeginToYEnd
`public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)`

**Purpose:** Constructs a new y begin to y end entity and returns it to the caller.

```csharp
// Static call; no instance required
CubicBezier.CreateYBeginToYEnd(0, 0, 0, 0, 0, 0);
```

### Sample
`public double Sample(double x)`

**Purpose:** Executes the Sample logic.

```csharp
// Obtain an instance of CubicBezier from the subsystem API first
CubicBezier cubicBezier = ...;
var result = cubicBezier.Sample(0);
```

## Usage Example

```csharp
CubicBezier.CreateEase(0, 0, 0, 0);
```

## See Also

- [Area Index](../)