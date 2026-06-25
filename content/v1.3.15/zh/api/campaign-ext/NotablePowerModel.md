---
title: "NotablePowerModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotablePowerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`

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

**用途 / Purpose:** 处理 `calculate daily power change for hero` 相关逻辑。

### GetPowerRankName
`public abstract TextObject GetPowerRankName(Hero hero)`

**用途 / Purpose:** 获取 `power rank name` 的当前值。

### GetInfluenceBonusToClan
`public abstract float GetInfluenceBonusToClan(Hero hero)`

**用途 / Purpose:** 获取 `influence bonus to clan` 的当前值。

### GetInitialPower
`public abstract int GetInitialPower(Hero hero)`

**用途 / Purpose:** 获取 `initial power` 的当前值。

### GetInitialNotableSupporterCost
`public abstract int GetInitialNotableSupporterCost(Hero hero)`

**用途 / Purpose:** 获取 `initial notable supporter cost` 的当前值。

## 使用示例

```csharp
var implementation = new CustomNotablePowerModel();
```

## 参见

- [完整类目录](../catalog)