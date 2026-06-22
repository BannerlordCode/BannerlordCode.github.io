<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBRandom`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBRandom` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RandomFloat` | `public static float RandomFloat { get; }` |
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat { get; }` |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt { get; }` |


## Key Methods

### RandomFloatRanged

```csharp
public static float RandomFloatRanged(float maxVal)
```

### RandomFloatRanged

```csharp
public static float RandomFloatRanged(float minVal, float maxVal)
```

### RandomInt

```csharp
public static int RandomInt()
```

### RandomInt

```csharp
public static int RandomInt(int maxValue)
```

### RandomInt

```csharp
public static int RandomInt(int minValue, int maxValue)
```

### RoundRandomized

```csharp
public static int RoundRandomized(float f)
```

### RandomFloatGaussian

```csharp
public static float RandomFloatGaussian(float center, float spread, float min, float max)
```

### SetSeed

```csharp
public static void SetSeed(uint seed, uint seed2)
```

### RandomIntWithSeed

```csharp
public static int RandomIntWithSeed(uint seed, uint seed2)
```

### RandomFloatWithSeed

```csharp
public static float RandomFloatWithSeed(uint seed, uint seed2)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)