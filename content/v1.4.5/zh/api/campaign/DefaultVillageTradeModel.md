---
title: "DefaultVillageTradeModel"
description: "DefaultVillageTradeModel 的自动生成类参考。"
---
# DefaultVillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTradeModel : VillageTradeModel`
**Base:** `VillageTradeModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVillageTradeModel.cs`

## 概述

`DefaultVillageTradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVillageTradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TradeBoundDistanceLimitAsDays
`public override float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TradeBoundDistanceLimitAsDays 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultVillageTradeModel 实例
DefaultVillageTradeModel defaultVillageTradeModel = ...;
var result = defaultVillageTradeModel.TradeBoundDistanceLimitAsDays(navigationType);
```

### GetTradeBoundToAssignForVillage
`public override Settlement GetTradeBoundToAssignForVillage(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trade bound to assign for village 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultVillageTradeModel 实例
DefaultVillageTradeModel defaultVillageTradeModel = ...;
var result = defaultVillageTradeModel.GetTradeBoundToAssignForVillage(village);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel());
```

## 参见

- [本区域目录](../)