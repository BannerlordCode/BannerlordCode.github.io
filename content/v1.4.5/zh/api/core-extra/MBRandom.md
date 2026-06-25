---
title: "MBRandom"
description: "MBRandom 的自动生成类参考。"
---
# MBRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBRandom`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBRandom.cs`

## 概述

`MBRandom` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |

## 主要方法

### RandomFloatRanged
`public static float RandomFloatRanged(float maxVal)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatRanged 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomFloatRanged(0);
```

### RandomFloatRanged
`public static float RandomFloatRanged(float minVal, float maxVal)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatRanged 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomFloatRanged(0, 0);
```

### RandomInt
`public static int RandomInt()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomInt();
```

### RandomInt
`public static int RandomInt(int maxValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomInt(0);
```

### RandomInt
`public static int RandomInt(int minValue, int maxValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomInt(0, 0);
```

### RoundRandomized
`public static int RoundRandomized(float f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RoundRandomized 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RoundRandomized(0);
```

### RandomFloatGaussian
`public static float RandomFloatGaussian(float center, float spread, float min, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatGaussian 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomFloatGaussian(0, 0, 0, 0);
```

### SetSeed
`public static void SetSeed(uint seed, uint seed2)`

**用途 / Purpose:** **用途 / Purpose:** 为 seed 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBRandom.SetSeed(0, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(uint seed, uint seed2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomIntWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomIntWithSeed(0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(uint seed, uint seed2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
MBRandom.RandomFloatWithSeed(0, 0);
```

## 使用示例

```csharp
MBRandom.RandomFloatRanged(0);
```

## 参见

- [本区域目录](../)