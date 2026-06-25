---
title: "ShipCostModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipCostModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `ship trade value` 的当前值。

### GetShipRepairCost
`public abstract float GetShipRepairCost(Ship ship)`

**用途 / Purpose:** 获取 `ship repair cost` 的当前值。

### GetShipUpgradeCost
`public abstract int GetShipUpgradeCost(Hero owner, Ship ship, ShipUpgradePiece piece)`

**用途 / Purpose:** 获取 `ship upgrade cost` 的当前值。

## 使用示例

```csharp
var implementation = new CustomShipCostModel();
```

## 参见

- [完整类目录](../catalog)