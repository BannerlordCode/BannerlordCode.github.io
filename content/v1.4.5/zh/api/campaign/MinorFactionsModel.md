---
title: "MinorFactionsModel"
description: "MinorFactionsModel 的自动生成类参考。"
---
# MinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**Base:** `MBGameModel<MinorFactionsModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MinorFactionsModel.cs`

## 概述

`MinorFactionsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MinorFactionsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit { get; }` |

## 主要方法

### GetMercenaryAwardFactorToJoinKingdom
`public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mercenary award factor to join kingdom 的结果。

```csharp
// 先通过子系统 API 拿到 MinorFactionsModel 实例
MinorFactionsModel minorFactionsModel = ...;
var result = minorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MinorFactionsModel instance = ...;
```

## 参见

- [本区域目录](../)