---
title: "MBFastRandom"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBFastRandom`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBFastRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandom`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandom.cs`

## 概述

`MBFastRandom` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetSeed
`public void SetSeed(uint seed, uint seed2)`

**用途 / Purpose:** 设置 `seed` 的值或状态。

### Next
`public int Next()`

**用途 / Purpose:** 处理 `next` 相关逻辑。

### Next
`public int Next(int maxValue)`

**用途 / Purpose:** 处理 `next` 相关逻辑。

### Next
`public int Next(int minValue, int maxValue)`

**用途 / Purpose:** 处理 `next` 相关逻辑。

### NextDouble
`public double NextDouble()`

**用途 / Purpose:** 处理 `next double` 相关逻辑。

### NextFloat
`public float NextFloat()`

**用途 / Purpose:** 处理 `next float` 相关逻辑。

### NextFloatRanged
`public float NextFloatRanged(float minVal, float maxVal)`

**用途 / Purpose:** 处理 `next float ranged` 相关逻辑。

### NextBytes
`public void NextBytes(byte buffer)`

**用途 / Purpose:** 处理 `next bytes` 相关逻辑。

## 使用示例

```csharp
var value = new MBFastRandom();
value.SetSeed(0, 0);
```

## 参见

- [完整类目录](../catalog)