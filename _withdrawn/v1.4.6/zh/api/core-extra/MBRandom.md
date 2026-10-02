---
title: "MBRandom"
description: "MBRandom：TaleWorlds.Core 的 public 类；公开成员 17 个（方法 12、属性 4、字段 1）。canonical 桶 core-extra。源文件 TaleWorlds.Core/MBRandom.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBRandom

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBRandom`
**File:** `TaleWorlds.Core/MBRandom.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

MBRandom 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBRandom.cs。它是一个 public 类，继承链为 MBRandom。public/protected 成员共 17 个：12 方法、4 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBRandom 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 MBRandom。成员构成以方法为主（方法 12/17，属性 4/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBRandom.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RandomFloat` | `public static float RandomFloat` | 属性 |
| `RandomFloatRanged` | `public static float RandomFloatRanged(float maxVal)` | 方法 |
| `RandomFloatRanged` | `public static float RandomFloatRanged(float minVal, float maxVal)` | 方法 |
| `RandomFloatNormal` | `public static float RandomFloatNormal` | 属性 |
| `RandomInt` | `public static int RandomInt()` | 方法 |
| `RandomInt` | `public static int RandomInt(int maxValue)` | 方法 |
| `RandomInt` | `public static int RandomInt(int minValue, int maxValue)` | 方法 |
| `RoundRandomized` | `public static int RoundRandomized(float f)` | 方法 |
| `ChooseWeighted` | `public static T ChooseWeighted<T>(IReadOnlyList<ValueTuple<T, float>>weightList)` | 方法 |
| `ChooseWeighted` | `public static T ChooseWeighted<T>(IReadOnlyList<ValueTuple<T, float>>weightList, out int chosenIndex)` | 方法 |
| `RandomFloatGaussian` | `public static float RandomFloatGaussian(float center, float spread, float min, float max)` | 方法 |
| `SetSeed` | `public static void SetSeed(uint seed, uint seed2)` | 方法 |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat` | 属性 |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt` | 属性 |
| `RandomIntWithSeed` | `public static int RandomIntWithSeed(uint seed, uint seed2)` | 方法 |
| `RandomFloatWithSeed` | `public static float RandomFloatWithSeed(uint seed, uint seed2)` | 方法 |
| `MaxSeed` | `public const int MaxSeed` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
