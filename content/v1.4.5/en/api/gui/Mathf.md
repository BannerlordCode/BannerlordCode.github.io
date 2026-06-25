---
title: "Mathf"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mathf`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Mathf

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Mathf`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Mathf.cs`

## Overview

`Mathf` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Sqrt
`public static float Sqrt(float f)`

**Purpose:** Handles logic related to `sqrt`.

### Abs
`public static float Abs(float f)`

**Purpose:** Handles logic related to `abs`.

### Floor
`public static float Floor(float f)`

**Purpose:** Handles logic related to `floor`.

### Cos
`public static float Cos(float radian)`

**Purpose:** Handles logic related to `cos`.

### Sin
`public static float Sin(float radian)`

**Purpose:** Handles logic related to `sin`.

### Acos
`public static float Acos(float f)`

**Purpose:** Handles logic related to `acos`.

### Atan2
`public static float Atan2(float y, float x)`

**Purpose:** Handles logic related to `atan2`.

### Clamp
`public static float Clamp(float value, float min, float max)`

**Purpose:** Handles logic related to `clamp`.

### Clamp
`public static int Clamp(int value, int min, int max)`

**Purpose:** Handles logic related to `clamp`.

### Min
`public static float Min(float a, float b)`

**Purpose:** Handles logic related to `min`.

### Max
`public static float Max(float a, float b)`

**Purpose:** Handles logic related to `max`.

### IsZero
`public static bool IsZero(float f)`

**Purpose:** Handles logic related to `is zero`.

### IsZero
`public static bool IsZero(Vector2 vector2)`

**Purpose:** Handles logic related to `is zero`.

### Sign
`public static float Sign(float f)`

**Purpose:** Handles logic related to `sign`.

### Ceil
`public static float Ceil(float f)`

**Purpose:** Handles logic related to `ceil`.

### Round
`public static float Round(float f)`

**Purpose:** Handles logic related to `round`.

### Lerp
`public static float Lerp(float start, float end, float amount)`

**Purpose:** Handles logic related to `lerp`.

### GetClosestPointInLineSegmentToLine
`public static Vec3 GetClosestPointInLineSegmentToLine(Vec3 linePosition, Vec3 lineDirection, Vec3 lineSegmentBegin, Vec3 lineSegmentEnd)`

**Purpose:** Gets the current value of `closest point in line segment to line`.

## Usage Example

```csharp
Mathf.Sqrt(0);
```

## See Also

- [Complete Class Catalog](../catalog)