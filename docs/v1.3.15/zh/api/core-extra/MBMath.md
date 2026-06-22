<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMath

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBMath` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)