---
title: "MathF"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MathF`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MathF

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MathF`
**Base:** none
**File:** `TaleWorlds.Library/MathF.cs`

## Overview

`MathF` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### Round
`public static int Round(double f)`

**Purpose:** Handles logic related to `round`.

### Round
`public static int Round(float f)`

**Purpose:** Handles logic related to `round`.

### Round
`public static float Round(float f, int digits)`

**Purpose:** Handles logic related to `round`.

### Round
`public static int Round(int f)`

**Purpose:** Handles logic related to `round`.

### Floor
`public static int Floor(double f)`

**Purpose:** Handles logic related to `floor`.

### Floor
`public static int Floor(float f)`

**Purpose:** Handles logic related to `floor`.

### Floor
`public static int Floor(int f)`

**Purpose:** Handles logic related to `floor`.

### Ceiling
`public static int Ceiling(double f)`

**Purpose:** Handles logic related to `ceiling`.

### Ceiling
`public static int Ceiling(float f)`

**Purpose:** Handles logic related to `ceiling`.

### Ceiling
`public static int Ceiling(int f)`

**Purpose:** Handles logic related to `ceiling`.

### Abs
`public static double Abs(double f)`

**Purpose:** Handles logic related to `abs`.

### Abs
`public static float Abs(float f)`

**Purpose:** Handles logic related to `abs`.

### Abs
`public static int Abs(int f)`

**Purpose:** Handles logic related to `abs`.

### Max
`public static double Max(double a, double b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static float Max(float a, float b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static float Max(float a, int b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static float Max(int a, float b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static int Max(int a, int b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static long Max(long a, long b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static uint Max(uint a, uint b)`

**Purpose:** Handles logic related to `max`.

### Max
`public static float Max(float a, float b, float c)`

**Purpose:** Handles logic related to `max`.

### Min
`public static double Min(double a, double b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static float Min(float a, float b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static short Min(short a, short b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static int Min(int a, int b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static long Min(long a, long b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static uint Min(uint a, uint b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static int Min(int a, float b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static int Min(float a, int b)`

**Purpose:** Handles logic related to `min`.

### Min
`public static float Min(float a, float b, float c)`

**Purpose:** Handles logic related to `min`.

### PingPong
`public static float PingPong(float min, float max, float time)`

**Purpose:** Handles logic related to `ping pong`.

### GreatestCommonDivisor
`public static int GreatestCommonDivisor(int a, int b)`

**Purpose:** Handles logic related to `greatest common divisor`.

### Log
`public static float Log(float a)`

**Purpose:** Handles logic related to `log`.

### Log
`public static float Log(float a, float newBase)`

**Purpose:** Handles logic related to `log`.

### Sign
`public static int Sign(float f)`

**Purpose:** Handles logic related to `sign`.

### Sign
`public static int Sign(int f)`

**Purpose:** Handles logic related to `sign`.

### SinCos
`public static void SinCos(float a, out float sa, out float ca)`

**Purpose:** Handles logic related to `sin cos`.

### Log10
`public static float Log10(float val)`

**Purpose:** Handles logic related to `log10`.

## Usage Example

```csharp
MathF.Sqrt(0);
```

## See Also

- [Complete Class Catalog](../catalog)