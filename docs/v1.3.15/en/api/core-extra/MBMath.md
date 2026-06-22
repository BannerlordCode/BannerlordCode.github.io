<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBMath` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### ToRadians

```csharp
public static float ToRadians(this float f)
```

### ToDegrees

```csharp
public static float ToDegrees(this float f)
```

### ApproximatelyEqualsTo

```csharp
public static bool ApproximatelyEqualsTo(this float f, float comparedValue, float epsilon = 1E-05f)
```

### ApproximatelyEquals

```csharp
public static bool ApproximatelyEquals(float first, float second, float epsilon = 1E-05f)
```

### IsValidValue

```csharp
public static bool IsValidValue(float f)
```

### ClampIndex

```csharp
public static int ClampIndex(int value, int minValue, int maxValue)
```

### ClampInt

```csharp
public static int ClampInt(int value, int minValue, int maxValue)
```

### ClampFloat

```csharp
public static float ClampFloat(float value, float minValue, float maxValue)
```

### ClampUnit

```csharp
public static void ClampUnit(ref float value)
```

### GetNumberOfBitsToRepresentNumber

```csharp
public static int GetNumberOfBitsToRepresentNumber(uint value)
```

### GetNumberOfBitsToRepresentNumber

```csharp
public static int GetNumberOfBitsToRepresentNumber(ulong value)
```

### Lerp

```csharp
public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)
```

### LinearExtrapolation

```csharp
public static float LinearExtrapolation(float valueFrom, float valueTo, float amount)
```

### Lerp

```csharp
public static Vec3 Lerp(Vec3 vecFrom, Vec3 vecTo, float amount, float minimumDifference)
```

### Lerp

```csharp
public static Vec2 Lerp(Vec2 vecFrom, Vec2 vecTo, float amount, float minimumDifference)
```

### Map

```csharp
public static float Map(float input, float inputMinimum, float inputMaximum, float outputMinimum, float outputMaximum)
```

### Lerp

```csharp
public static Mat3 Lerp(ref Mat3 matFrom, ref Mat3 matTo, float amount, float minimumDifference)
```

### LerpRadians

```csharp
public static float LerpRadians(float valueFrom, float valueTo, float amount, float minChange, float maxChange)
```

### SplitLerp

```csharp
public static float SplitLerp(float value1, float value2, float value3, float cutOff, float amount, float minimumDifference)
```

### InverseLerp

```csharp
public static float InverseLerp(float valueFrom, float valueTo, float value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)