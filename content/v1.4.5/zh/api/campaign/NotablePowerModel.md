---
title: "NotablePowerModel"
description: "NotablePowerModel 的自动生成类参考。"
---
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/NotablePowerModel.cs`

## 概述

`NotablePowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `NotablePowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel { get; }` |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit { get; }` |

## 主要方法

### CalculateDailyPowerChangeForHero
`public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily power change for hero的当前值或结果。

```csharp
// 先通过子系统 API 拿到 NotablePowerModel 实例
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.CalculateDailyPowerChangeForHero(hero, false);
```

### GetPowerRankName
`public abstract TextObject GetPowerRankName(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 power rank name 的结果。

```csharp
// 先通过子系统 API 拿到 NotablePowerModel 实例
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetPowerRankName(hero);
```

### GetInfluenceBonusToClan
`public abstract float GetInfluenceBonusToClan(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence bonus to clan 的结果。

```csharp
// 先通过子系统 API 拿到 NotablePowerModel 实例
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInfluenceBonusToClan(hero);
```

### GetInitialPower
`public abstract int GetInitialPower(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial power 的结果。

```csharp
// 先通过子系统 API 拿到 NotablePowerModel 实例
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInitialPower(hero);
```

### GetInitialNotableSupporterCost
`public abstract int GetInitialNotableSupporterCost(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial notable supporter cost 的结果。

```csharp
// 先通过子系统 API 拿到 NotablePowerModel 实例
NotablePowerModel notablePowerModel = ...;
var result = notablePowerModel.GetInitialNotableSupporterCost(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
NotablePowerModel instance = ...;
```

## 参见

- [本区域目录](../)