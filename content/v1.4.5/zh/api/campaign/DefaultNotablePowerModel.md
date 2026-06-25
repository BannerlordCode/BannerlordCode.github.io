---
title: "DefaultNotablePowerModel"
description: "DefaultNotablePowerModel 的自动生成类参考。"
---
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultNotablePowerModel.cs`

## 概述

`DefaultNotablePowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultNotablePowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyPowerChangeForHero
`public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「daily power change for hero」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotablePowerModel 实例
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.CalculateDailyPowerChangeForHero(hero, false);
```

### GetPowerRankName
`public override TextObject GetPowerRankName(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「power rank name」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotablePowerModel 实例
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetPowerRankName(hero);
```

### GetInfluenceBonusToClan
`public override float GetInfluenceBonusToClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「influence bonus to clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotablePowerModel 实例
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInfluenceBonusToClan(hero);
```

### GetInitialPower
`public override int GetInitialPower(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「initial power」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotablePowerModel 实例
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialPower(hero);
```

### GetInitialNotableSupporterCost
`public override int GetInitialNotableSupporterCost(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「initial notable supporter cost」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotablePowerModel 实例
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialNotableSupporterCost(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## 参见

- [本区域目录](../)