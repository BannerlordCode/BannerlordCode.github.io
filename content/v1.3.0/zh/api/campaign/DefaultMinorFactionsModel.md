---
title: "DefaultMinorFactionsModel"
description: "DefaultMinorFactionsModel 的自动生成类参考。"
---
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`

## 概述

`DefaultMinorFactionsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMinorFactionsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public override float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public override int MinorFactionHeroLimit { get; }` |

## 主要方法

### GetMercenaryAwardFactorToJoinKingdom
`public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**用途 / Purpose:** 读取并返回当前对象中 mercenary award factor to join kingdom 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMinorFactionsModel 实例
DefaultMinorFactionsModel defaultMinorFactionsModel = ...;
var result = defaultMinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());
```

## 参见

- [本区域目录](../)