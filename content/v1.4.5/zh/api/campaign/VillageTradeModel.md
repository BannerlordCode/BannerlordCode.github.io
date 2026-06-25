---
title: "VillageTradeModel"
description: "VillageTradeModel 的自动生成类参考。"
---
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VillageTradeModel.cs`

## 概述

`VillageTradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VillageTradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TradeBoundDistanceLimitAsDays
`public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理与 「trade bound distance limit as days」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 VillageTradeModel 实例
VillageTradeModel villageTradeModel = ...;
var result = villageTradeModel.TradeBoundDistanceLimitAsDays(navigationType);
```

### GetTradeBoundToAssignForVillage
`public abstract Settlement GetTradeBoundToAssignForVillage(Village village)`

**用途 / Purpose:** 读取并返回当前对象中 「trade bound to assign for village」 的结果。

```csharp
// 先通过子系统 API 拿到 VillageTradeModel 实例
VillageTradeModel villageTradeModel = ...;
var result = villageTradeModel.GetTradeBoundToAssignForVillage(village);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VillageTradeModel instance = ...;
```

## 参见

- [本区域目录](../)