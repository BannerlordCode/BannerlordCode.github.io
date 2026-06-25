---
title: "VassalRewardsModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VassalRewardsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `troop rewards for joining kingdom` 的当前值。

### GetEquipmentRewardsForJoiningKingdom
`public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**用途 / Purpose:** 获取 `equipment rewards for joining kingdom` 的当前值。

## 使用示例

```csharp
var implementation = new CustomVassalRewardsModel();
```

## 参见

- [完整类目录](../catalog)