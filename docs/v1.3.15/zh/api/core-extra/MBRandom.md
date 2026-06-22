<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBRandom`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBRandom

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBRandom` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RandomFloat` | `public static float RandomFloat { get; }` |
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat { get; }` |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)