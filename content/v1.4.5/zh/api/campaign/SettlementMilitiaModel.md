---
title: "SettlementMilitiaModel"
description: "SettlementMilitiaModel 的自动生成类参考。"
---
# SettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Base:** `MBGameModel<SettlementMilitiaModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMilitiaModel.cs`

## 概述

`SettlementMilitiaModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementMilitiaModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MilitiaToSpawnAfterSiege
`public abstract int MilitiaToSpawnAfterSiege(Town town)`

**用途 / Purpose:** 处理与 「militia to spawn after siege」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SettlementMilitiaModel 实例
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.MilitiaToSpawnAfterSiege(town);
```

### CalculateMilitiaChange
`public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「militia change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementMilitiaModel 实例
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.CalculateMilitiaChange(settlement, false);
```

### CalculateVeteranMilitiaSpawnChance
`public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**用途 / Purpose:** 计算「veteran militia spawn chance」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementMilitiaModel 实例
SettlementMilitiaModel settlementMilitiaModel = ...;
var result = settlementMilitiaModel.CalculateVeteranMilitiaSpawnChance(settlement);
```

### CalculateMilitiaSpawnRate
`public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**用途 / Purpose:** 计算「militia spawn rate」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementMilitiaModel 实例
SettlementMilitiaModel settlementMilitiaModel = ...;
settlementMilitiaModel.CalculateMilitiaSpawnRate(settlement, meleeTroopRate, rangedTroopRate);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementMilitiaModel instance = ...;
```

## 参见

- [本区域目录](../)