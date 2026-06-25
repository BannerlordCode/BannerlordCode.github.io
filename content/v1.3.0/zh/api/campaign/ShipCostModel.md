---
title: "ShipCostModel"
description: "ShipCostModel 的自动生成类参考。"
---
# ShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**Base:** `MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`

## 概述

`ShipCostModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ShipCostModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipTradeValue
`public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**用途 / Purpose:** 读取并返回当前对象中 「ship trade value」 的结果。

```csharp
// 先通过子系统 API 拿到 ShipCostModel 实例
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipTradeValue(ship, seller, buyer);
```

### GetShipRepairCost
`public abstract float GetShipRepairCost(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 「ship repair cost」 的结果。

```csharp
// 先通过子系统 API 拿到 ShipCostModel 实例
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipRepairCost(ship);
```

### GetShipUpgradeCost
`public abstract int GetShipUpgradeCost(Hero owner, Ship ship, ShipUpgradePiece piece)`

**用途 / Purpose:** 读取并返回当前对象中 「ship upgrade cost」 的结果。

```csharp
// 先通过子系统 API 拿到 ShipCostModel 实例
ShipCostModel shipCostModel = ...;
var result = shipCostModel.GetShipUpgradeCost(owner, ship, piece);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ShipCostModel instance = ...;
```

## 参见

- [本区域目录](../)