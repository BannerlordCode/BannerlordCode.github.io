---
title: "MathF"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MathF`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MathF

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MathF`
**Area:** core-extra

## Overview

`MathF` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Sqrt
`public static float Sqrt(float x)`

**Purpose:** Handles logic related to `sqrt`.

### Sin
`public static float Sin(float x)`

**Purpose:** Handles logic related to `sin`.

### Asin
`public static float Asin(float x)`

**Purpose:** Handles logic related to `asin`.

### Cos
`public static float Cos(float x)`

**Purpose:** Handles logic related to `cos`.

### Acos
`public static float Acos(float x)`

**Purpose:** Handles logic related to `acos`.

### Tan
`public static float Tan(float x)`

**Purpose:** Handles logic related to `tan`.

### Tanh
`public static float Tanh(float x)`

**Purpose:** Handles logic related to `tanh`.

### Atan
`public static float Atan(float x)`

**Purpose:** Handles logic related to `atan`.

### Atan2
`public static float Atan2(float y, float x)`

**Purpose:** Handles logic related to `atan2`.

### Pow
`public static double Pow(double x, double y)`

**Purpose:** Handles logic related to `pow`.

### Pow
`public static double Pow(float x, double y)`

**Purpose:** Handles logic related to `pow`.

### Pow
`public static double Pow(double x, float y)`

**Purpose:** Handles logic related to `pow`.

### Pow
`public static float Pow(float x, float y)`

**Purpose:** Handles logic related to `pow`.

### PowTwo32
`public static int PowTwo32(int x)`

**Purpose:** Handles logic related to `pow two32`.

### PowTwo64
`public static ulong PowTwo64(int x)`

**Purpose:** Handles logic related to `pow two64`.

### IsValidValue
`public static bool IsValidValue(float f)`

**Purpose:** Handles logic related to `is valid value`.

### Clamp
`public static float Clamp(float value, float minValue, float maxValue)`

**Purpose:** Handles logic related to `clamp`.

### AngleClamp
`public static float AngleClamp(float angle)`

**Purpose:** Handles logic related to `angle clamp`.

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**Purpose:** Handles logic related to `lerp`.

### AngleLerp
`public static float AngleLerp(float angleFrom, float angleTo, float amount, float minimumDifference = 1E-05f)`

**Purpose:** Handles logic related to `angle lerp`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MathF.Sqrt(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
