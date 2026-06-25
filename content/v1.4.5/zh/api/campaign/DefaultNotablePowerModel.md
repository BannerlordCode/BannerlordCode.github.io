---
title: "DefaultNotablePowerModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultNotablePowerModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultNotablePowerModel.cs`

## 概述

`DefaultNotablePowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultNotablePowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyPowerChangeForHero
`public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate daily power change for hero` 相关逻辑。

### GetPowerRankName
`public override TextObject GetPowerRankName(Hero hero)`

**用途 / Purpose:** 获取 `power rank name` 的当前值。

### GetInfluenceBonusToClan
`public override float GetInfluenceBonusToClan(Hero hero)`

**用途 / Purpose:** 获取 `influence bonus to clan` 的当前值。

### GetInitialPower
`public override int GetInitialPower(Hero hero)`

**用途 / Purpose:** 获取 `initial power` 的当前值。

### GetInitialNotableSupporterCost
`public override int GetInitialNotableSupporterCost(Hero hero)`

**用途 / Purpose:** 获取 `initial notable supporter cost` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## 参见

- [完整类目录](../catalog)