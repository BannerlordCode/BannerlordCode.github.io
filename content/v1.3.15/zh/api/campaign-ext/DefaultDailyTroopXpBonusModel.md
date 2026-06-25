---
title: "DefaultDailyTroopXpBonusModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDailyTroopXpBonusModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate daily troop xp bonus` 相关逻辑。

### CalculateGarrisonXpBonusMultiplier
`public override float CalculateGarrisonXpBonusMultiplier(Town town)`

**用途 / Purpose:** 处理 `calculate garrison xp bonus multiplier` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## 参见

- [完整类目录](../catalog)