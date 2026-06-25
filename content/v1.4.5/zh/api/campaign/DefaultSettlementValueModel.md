---
title: "DefaultSettlementValueModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementValueModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementValueModel.cs`

## 概述

`DefaultSettlementValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindMostSuitableHomeSettlement
`public override Settlement FindMostSuitableHomeSettlement(Clan clan)`

**用途 / Purpose:** 处理 `find most suitable home settlement` 相关逻辑。

### CalculateSettlementBaseValue
`public override float CalculateSettlementBaseValue(Settlement settlement)`

**用途 / Purpose:** 处理 `calculate settlement base value` 相关逻辑。

### CalculateSettlementValueForFaction
`public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**用途 / Purpose:** 处理 `calculate settlement value for faction` 相关逻辑。

### CalculateSettlementValueForEnemyHero
`public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**用途 / Purpose:** 处理 `calculate settlement value for enemy hero` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## 参见

- [完整类目录](../catalog)