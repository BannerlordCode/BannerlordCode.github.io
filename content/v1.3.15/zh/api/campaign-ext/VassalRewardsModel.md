---
title: "VassalRewardsModel"
description: "VassalRewardsModel 的自动生成类参考。"
---
# VassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**Base:** `MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`

## 概述

`VassalRewardsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VassalRewardsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `InfluenceReward` | `public abstract float InfluenceReward { get; }` |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader { get; }` |

## 主要方法

### GetTroopRewardsForJoiningKingdom
`public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop rewards for joining kingdom 的结果。

```csharp
// 先通过子系统 API 拿到 VassalRewardsModel 实例
VassalRewardsModel vassalRewardsModel = ...;
var result = vassalRewardsModel.GetTroopRewardsForJoiningKingdom(kingdom);
```

### GetEquipmentRewardsForJoiningKingdom
`public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rewards for joining kingdom 的结果。

```csharp
// 先通过子系统 API 拿到 VassalRewardsModel 实例
VassalRewardsModel vassalRewardsModel = ...;
var result = vassalRewardsModel.GetEquipmentRewardsForJoiningKingdom(kingdom);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VassalRewardsModel instance = ...;
```

## 参见

- [本区域目录](../)