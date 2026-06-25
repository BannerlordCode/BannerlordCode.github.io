---
title: "DefaultVassalRewardsModel"
description: "DefaultVassalRewardsModel 的自动生成类参考。"
---
# DefaultVassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**Base:** `VassalRewardsModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVassalRewardsModel.cs`

## 概述

`DefaultVassalRewardsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVassalRewardsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentRewardsForJoiningKingdom
`public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment rewards for joining kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultVassalRewardsModel 实例
DefaultVassalRewardsModel defaultVassalRewardsModel = ...;
var result = defaultVassalRewardsModel.GetEquipmentRewardsForJoiningKingdom(kingdom);
```

### GetTroopRewardsForJoiningKingdom
`public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「troop rewards for joining kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultVassalRewardsModel 实例
DefaultVassalRewardsModel defaultVassalRewardsModel = ...;
var result = defaultVassalRewardsModel.GetTroopRewardsForJoiningKingdom(kingdom);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel());
```

## 参见

- [本区域目录](../)