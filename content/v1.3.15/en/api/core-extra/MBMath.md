---
title: "MBMath"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBMath`
**Area:** core-extra

## Overview

`MBMath` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToRadians
`public static float ToRadians(this float f)`

**Purpose:** Handles logic related to `to radians`.

### ToDegrees
`public static float ToDegrees(this float f)`

**Purpose:** Handles logic related to `to degrees`.

### ApproximatelyEqualsTo
`public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `approximately equals to`.

### ApproximatelyEquals
`public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `approximately equals`.

### IsValidValue
`public static bool IsValidValue(float f)`

**Purpose:** Handles logic related to `is valid value`.

### ClampIndex
`public static int ClampIndex(int value, int minValue, int maxValue)`

**Purpose:** Handles logic related to `clamp index`.

### ClampInt
`public static int ClampInt(int value, int minValue, int maxValue)`

**Purpose:** Handles logic related to `clamp int`.

### ClampFloat
`public static float ClampFloat(float value, float minValue, float maxValue)`

**Purpose:** Handles logic related to `clamp float`.

### ClampUnit
`public static void ClampUnit(ref float value)`

**Purpose:** Handles logic related to `clamp unit`.

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(uint value)`

**Purpose:** Gets the current value of `number of bits to represent number`.

### GetNumberOfBitsToRepresentNumber
`public static int GetNumberOfBitsToRepresentNumber(ulong value)`

**Purpose:** Gets the current value of `number of bits to represent number`.

### Lerp
`public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)`

**Purpose:** Handles logic related to `lerp`.

### LinearExtrapolation
`public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)`

**Purpose:** Handles logic related to `linear extrapolation`.

### Lerp
`public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### Lerp
`public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### Map
`public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)`

**Purpose:** Handles logic related to `map`.

### Lerp
`public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `lerp`.

### LerpRadians
`public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)`

**Purpose:** Handles logic related to `lerp radians`.

### SplitLerp
`public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)`

**Purpose:** Handles logic related to `split lerp`.

### InverseLerp
`public static float InverseLerp(float valueFrom, float valueTo, float value)`

**Purpose:** Handles logic related to `inverse lerp`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBMath.ToRadians(f);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
