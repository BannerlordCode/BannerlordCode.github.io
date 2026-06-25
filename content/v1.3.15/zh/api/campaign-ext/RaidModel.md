---
title: "RaidModel"
description: "RaidModel 的自动生成类参考。"
---
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## 概述

`RaidModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `RaidModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## 主要方法

### GetCommonLootItemScores
`public abstract MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 common loot item scores 的结果。

```csharp
// 先通过子系统 API 拿到 RaidModel 实例
RaidModel raidModel = ...;
var result = raidModel.GetCommonLootItemScores();
```

### CalculateHitDamage
`public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**用途 / Purpose:** **用途 / Purpose:** 计算hit damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 RaidModel 实例
RaidModel raidModel = ...;
var result = raidModel.CalculateHitDamage(attackerSide, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RaidModel instance = ...;
```

## 参见

- [本区域目录](../)