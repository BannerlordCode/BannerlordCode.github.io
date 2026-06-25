---
title: "DefaultSettlementValueModel"
description: "DefaultSettlementValueModel 的自动生成类参考。"
---
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`

## 概述

`DefaultSettlementValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindMostSuitableHomeSettlement
`public override Settlement FindMostSuitableHomeSettlement(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的most suitable home settlement。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementValueModel 实例
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.FindMostSuitableHomeSettlement(clan);
```

### CalculateSettlementBaseValue
`public override float CalculateSettlementBaseValue(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 计算settlement base value的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementValueModel 实例
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementBaseValue(settlement);
```

### CalculateSettlementValueForFaction
`public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 计算settlement value for faction的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementValueModel 实例
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementValueForFaction(settlement, faction);
```

### CalculateSettlementValueForEnemyHero
`public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 计算settlement value for enemy hero的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementValueModel 实例
DefaultSettlementValueModel defaultSettlementValueModel = ...;
var result = defaultSettlementValueModel.CalculateSettlementValueForEnemyHero(settlement, hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## 参见

- [本区域目录](../)