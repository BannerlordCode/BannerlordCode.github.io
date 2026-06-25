---
title: "SettlementValueModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementValueModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**Base:** `MBGameModel<SettlementValueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs`

## 概述

`SettlementValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindMostSuitableHomeSettlement
`public abstract Settlement FindMostSuitableHomeSettlement(Clan clan)`

**用途 / Purpose:** 处理 `find most suitable home settlement` 相关逻辑。

### CalculateSettlementValueForFaction
`public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**用途 / Purpose:** 处理 `calculate settlement value for faction` 相关逻辑。

### CalculateSettlementBaseValue
`public abstract float CalculateSettlementBaseValue(Settlement settlement)`

**用途 / Purpose:** 处理 `calculate settlement base value` 相关逻辑。

### CalculateSettlementValueForEnemyHero
`public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**用途 / Purpose:** 处理 `calculate settlement value for enemy hero` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementValueModel();
```

## 参见

- [完整类目录](../catalog)