---
title: "DefaultMarriageModel"
description: "DefaultMarriageModel 的自动生成类参考。"
---
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMarriageModel.cs`

## 概述

`DefaultMarriageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMarriageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsCoupleSuitableForMarriage
`public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 判断当前对象是否处于 「couple suitable for marriage」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsCoupleSuitableForMarriage(firstHero, secondHero);
```

### IsClanSuitableForMarriage
`public override bool IsClanSuitableForMarriage(Clan clan)`

**用途 / Purpose:** 判断当前对象是否处于 「clan suitable for marriage」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsClanSuitableForMarriage(clan);
```

### NpcCoupleMarriageChance
`public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.NpcCoupleMarriageChance(firstHero, secondHero);
```

### ShouldNpcMarriageBetweenClansBeAllowed
`public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.ShouldNpcMarriageBetweenClansBeAllowed(consideringClan, targetClan);
```

### GetAdultChildrenSuitableForMarriage
`public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「adult children suitable for marriage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetAdultChildrenSuitableForMarriage(hero);
```

### GetEffectiveRelationIncrease
`public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 读取并返回当前对象中 「effective relation increase」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetEffectiveRelationIncrease(firstHero, secondHero);
```

### IsSuitableForMarriage
`public override bool IsSuitableForMarriage(Hero maidenOrSuitor)`

**用途 / Purpose:** 判断当前对象是否处于 「suitable for marriage」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsSuitableForMarriage(maidenOrSuitor);
```

### GetClanAfterMarriage
`public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 读取并返回当前对象中 「clan after marriage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMarriageModel 实例
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetClanAfterMarriage(firstHero, secondHero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## 参见

- [本区域目录](../)