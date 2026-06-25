---
title: "DefaultSettlementMilitiaModel"
description: "DefaultSettlementMilitiaModel 的自动生成类参考。"
---
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementMilitiaModel.cs`

## 概述

`DefaultSettlementMilitiaModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementMilitiaModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MilitiaToSpawnAfterSiege
`public override int MilitiaToSpawnAfterSiege(Town town)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementMilitiaModel 实例
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.MilitiaToSpawnAfterSiege(town);
```

### CalculateMilitiaChange
`public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「militia change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementMilitiaModel 实例
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.CalculateMilitiaChange(settlement, false);
```

### CalculateVeteranMilitiaSpawnChance
`public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**用途 / Purpose:** 计算「veteran militia spawn chance」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementMilitiaModel 实例
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
var result = defaultSettlementMilitiaModel.CalculateVeteranMilitiaSpawnChance(settlement);
```

### CalculateMilitiaSpawnRate
`public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**用途 / Purpose:** 计算「militia spawn rate」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementMilitiaModel 实例
DefaultSettlementMilitiaModel defaultSettlementMilitiaModel = ...;
defaultSettlementMilitiaModel.CalculateMilitiaSpawnRate(settlement, meleeTroopRate, rangedTroopRate);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## 参见

- [本区域目录](../)