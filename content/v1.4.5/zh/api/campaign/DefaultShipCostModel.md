---
title: "DefaultShipCostModel"
description: "DefaultShipCostModel 的自动生成类参考。"
---
# DefaultShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**Base:** `ShipCostModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultShipCostModel.cs`

## 概述

`DefaultShipCostModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultShipCostModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipTradeValue
`public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**用途 / Purpose:** 读取并返回当前对象中 ship trade value 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultShipCostModel 实例
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipTradeValue(ship, seller, buyer);
```

### GetShipRepairCost
`public override float GetShipRepairCost(Ship ship, PartyBase owner)`

**用途 / Purpose:** 读取并返回当前对象中 ship repair cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultShipCostModel 实例
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipRepairCost(ship, owner);
```

### GetShipUpgradePieceCost
`public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)`

**用途 / Purpose:** 读取并返回当前对象中 ship upgrade piece cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultShipCostModel 实例
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipUpgradePieceCost(ship, piece, owner);
```

### GetShipSellingPenalty
`public override float GetShipSellingPenalty()`

**用途 / Purpose:** 读取并返回当前对象中 ship selling penalty 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultShipCostModel 实例
DefaultShipCostModel defaultShipCostModel = ...;
var result = defaultShipCostModel.GetShipSellingPenalty();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel());
```

## 参见

- [本区域目录](../)