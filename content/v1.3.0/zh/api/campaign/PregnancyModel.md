---
title: "PregnancyModel"
description: "PregnancyModel 的自动生成类参考。"
---
# PregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`

## 概述

`PregnancyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PregnancyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public abstract float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability { get; }` |

## 主要方法

### GetDailyChanceOfPregnancyForHero
`public abstract float GetDailyChanceOfPregnancyForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「daily chance of pregnancy for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 PregnancyModel 实例
PregnancyModel pregnancyModel = ...;
var result = pregnancyModel.GetDailyChanceOfPregnancyForHero(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PregnancyModel instance = ...;
```

## 参见

- [本区域目录](../)