---
title: "MBFastRandom"
description: "MBFastRandom 的自动生成类参考。"
---
# MBFastRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandom`
**Base:** 无
**File:** `TaleWorlds.Core/MBFastRandom.cs`

## 概述

`MBFastRandom` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetSeed
`public void SetSeed(uint seed, uint seed2)`

**用途 / Purpose:** 为 seed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
mBFastRandom.SetSeed(0, 0);
```

### Next
`public int Next()`

**用途 / Purpose:** 调用 Next 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next();
```

### Next
`public int Next(int maxValue)`

**用途 / Purpose:** 调用 Next 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next(0);
```

### Next
`public int Next(int minValue, int maxValue)`

**用途 / Purpose:** 调用 Next 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next(0, 0);
```

### NextDouble
`public double NextDouble()`

**用途 / Purpose:** 调用 NextDouble 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextDouble();
```

### NextFloat
`public float NextFloat()`

**用途 / Purpose:** 调用 NextFloat 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextFloat();
```

### NextFloatRanged
`public float NextFloatRanged(float minVal, float maxVal)`

**用途 / Purpose:** 调用 NextFloatRanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextFloatRanged(0, 0);
```

### NextBytes
`public void NextBytes(byte buffer)`

**用途 / Purpose:** 调用 NextBytes 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBFastRandom 实例
MBFastRandom mBFastRandom = ...;
mBFastRandom.NextBytes(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBFastRandom mBFastRandom = ...;
mBFastRandom.SetSeed(0, 0);
```

## 参见

- [本区域目录](../)