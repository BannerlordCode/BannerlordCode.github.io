---
title: "DailyTroopXpBonusModel"
description: "DailyTroopXpBonusModel 的自动生成类参考。"
---
# DailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DailyTroopXpBonusModel : MBGameModel<DailyTroopXpBonusModel>`
**Base:** `MBGameModel<DailyTroopXpBonusModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DailyTroopXpBonusModel.cs`

## 概述

`DailyTroopXpBonusModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DailyTroopXpBonusModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyTroopXpBonus
`public abstract int CalculateDailyTroopXpBonus(Town town)`

**用途 / Purpose:** 计算daily troop xp bonus的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DailyTroopXpBonusModel 实例
DailyTroopXpBonusModel dailyTroopXpBonusModel = ...;
var result = dailyTroopXpBonusModel.CalculateDailyTroopXpBonus(town);
```

### CalculateGarrisonXpBonusMultiplier
`public abstract float CalculateGarrisonXpBonusMultiplier(Town town)`

**用途 / Purpose:** 计算garrison xp bonus multiplier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DailyTroopXpBonusModel 实例
DailyTroopXpBonusModel dailyTroopXpBonusModel = ...;
var result = dailyTroopXpBonusModel.CalculateGarrisonXpBonusMultiplier(town);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DailyTroopXpBonusModel instance = ...;
```

## 参见

- [本区域目录](../)