<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBRandom`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBRandom`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBRandom.cs`

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

**用途 / Purpose:** 处理 `random float ranged` 相关逻辑。

### RandomFloatRanged
`public static float RandomFloatRanged(float minVal, float maxVal)`

**用途 / Purpose:** 处理 `random float ranged` 相关逻辑。

### RandomInt
`public static int RandomInt()`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RandomInt
`public static int RandomInt(int maxValue)`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RandomInt
`public static int RandomInt(int minValue, int maxValue)`

**用途 / Purpose:** 处理 `random int` 相关逻辑。

### RoundRandomized
`public static int RoundRandomized(float f)`

**用途 / Purpose:** 处理 `round randomized` 相关逻辑。

### RandomFloatGaussian
`public static float RandomFloatGaussian(float center, float spread, float min, float max)`

**用途 / Purpose:** 处理 `random float gaussian` 相关逻辑。

### SetSeed
`public static void SetSeed(uint seed, uint seed2)`

**用途 / Purpose:** 设置 `seed` 的值或状态。

### RandomIntWithSeed
`public static int RandomIntWithSeed(uint seed, uint seed2)`

**用途 / Purpose:** 处理 `random int with seed` 相关逻辑。

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(uint seed, uint seed2)`

**用途 / Purpose:** 处理 `random float with seed` 相关逻辑。

## 使用示例

```csharp
MBRandom.RandomFloatRanged(0);
```

## 参见

- [完整类目录](../catalog)