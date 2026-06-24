<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBRandom`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBRandom

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class MBRandom`
**领域:** core-extra

## 概述

`MBRandom` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RandomFloat` | `public static float RandomFloat { get; }` |
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat { get; }` |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt { get; }` |

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
// 先准备该类型需要的上下文，然后直接调用静态入口
MBRandom.RandomFloatRanged(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
