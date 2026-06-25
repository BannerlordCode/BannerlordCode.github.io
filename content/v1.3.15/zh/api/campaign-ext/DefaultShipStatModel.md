---
title: "DefaultShipStatModel"
description: "DefaultShipStatModel 的自动生成类参考。"
---
# DefaultShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipStatModel : ShipStatModel`
**Base:** `ShipStatModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipStatModel.cs`

## 概述

`DefaultShipStatModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultShipStatModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipFlagshipScore
`public override float GetShipFlagshipScore(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 ship flagship score 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultShipStatModel 实例
DefaultShipStatModel defaultShipStatModel = ...;
var result = defaultShipStatModel.GetShipFlagshipScore(ship);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel());
```

## 参见

- [本区域目录](../)