---
title: "ShipStatModel"
description: "ShipStatModel 的自动生成类参考。"
---
# ShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipStatModel : MBGameModel<ShipStatModel>`
**Base:** `MBGameModel<ShipStatModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipStatModel.cs`

## 概述

`ShipStatModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ShipStatModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipTierf
`public abstract float GetShipTierf(Ship ship)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship tierf 的结果。

```csharp
// 先通过子系统 API 拿到 ShipStatModel 实例
ShipStatModel shipStatModel = ...;
var result = shipStatModel.GetShipTierf(ship);
```

### GetShipFlagshipScore
`public abstract float GetShipFlagshipScore(Ship ship)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship flagship score 的结果。

```csharp
// 先通过子系统 API 拿到 ShipStatModel 实例
ShipStatModel shipStatModel = ...;
var result = shipStatModel.GetShipFlagshipScore(ship);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ShipStatModel instance = ...;
```

## 参见

- [本区域目录](../)