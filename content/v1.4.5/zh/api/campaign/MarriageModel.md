---
title: "MarriageModel"
description: "MarriageModel 的自动生成类参考。"
---
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MarriageModel.cs`

## 概述

`MarriageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MarriageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## 主要方法

### IsCoupleSuitableForMarriage
`public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 couple suitable for marriage 状态或条件。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.IsCoupleSuitableForMarriage(firstHero, secondHero);
```

### GetEffectiveRelationIncrease
`public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effective relation increase 的结果。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.GetEffectiveRelationIncrease(firstHero, secondHero);
```

### GetClanAfterMarriage
`public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan after marriage 的结果。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.GetClanAfterMarriage(firstHero, secondHero);
```

### IsSuitableForMarriage
`public abstract bool IsSuitableForMarriage(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 suitable for marriage 状态或条件。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.IsSuitableForMarriage(hero);
```

### IsClanSuitableForMarriage
`public abstract bool IsClanSuitableForMarriage(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 clan suitable for marriage 状态或条件。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.IsClanSuitableForMarriage(clan);
```

### NpcCoupleMarriageChance
`public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcCoupleMarriageChance 对应的操作。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.NpcCoupleMarriageChance(firstHero, secondHero);
```

### ShouldNpcMarriageBetweenClansBeAllowed
`public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldNpcMarriageBetweenClansBeAllowed 对应的操作。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.ShouldNpcMarriageBetweenClansBeAllowed(consideringClan, targetClan);
```

### GetAdultChildrenSuitableForMarriage
`public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 adult children suitable for marriage 的结果。

```csharp
// 先通过子系统 API 拿到 MarriageModel 实例
MarriageModel marriageModel = ...;
var result = marriageModel.GetAdultChildrenSuitableForMarriage(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MarriageModel instance = ...;
```

## 参见

- [本区域目录](../)