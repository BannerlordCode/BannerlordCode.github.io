---
title: "DefaultDailyTroopXpBonusModel"
description: "DefaultDailyTroopXpBonusModel 的自动生成类参考。"
---
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## 概述

`DefaultDailyTroopXpBonusModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDailyTroopXpBonusModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyTroopXpBonus
`public override int CalculateDailyTroopXpBonus(Town town)`

**用途 / Purpose:** 计算daily troop xp bonus的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultDailyTroopXpBonusModel 实例
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateDailyTroopXpBonus(town);
```

### CalculateGarrisonXpBonusMultiplier
`public override float CalculateGarrisonXpBonusMultiplier(Town town)`

**用途 / Purpose:** 计算garrison xp bonus multiplier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultDailyTroopXpBonusModel 实例
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateGarrisonXpBonusMultiplier(town);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## 参见

- [本区域目录](../)