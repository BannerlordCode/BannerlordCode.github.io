---
title: "DefaultTroopSacrificeModel"
description: "DefaultTroopSacrificeModel 的自动生成类参考。"
---
# DefaultTroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**Base:** `TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## 概述

`DefaultTroopSacrificeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTroopSacrificeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty { get; }` |

## 主要方法

### GetLostTroopCountForBreakingInBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 lost troop count for breaking in besieged settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSacrificeModel 实例
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetLostTroopCountForBreakingInBesiegedSettlement(party, siegeEvent);
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 lost troop count for breaking out of besieged settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSacrificeModel 实例
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetLostTroopCountForBreakingOutOfBesiegedSettlement(party, siegeEvent, false);
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of troops sacrificed for trying to get away 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSacrificeModel 实例
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.GetNumberOfTroopsSacrificedForTryingToGetAway(playerBattleSide, mapEvent);
```

### CanPlayerGetAwayFromEncounter
`public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player get away from encounter 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSacrificeModel 实例
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
var result = defaultTroopSacrificeModel.CanPlayerGetAwayFromEncounter(explanation);
```

### GetShipsToSacrificeForTryingToGetAway
`public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ships to sacrifice for trying to get away 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSacrificeModel 实例
DefaultTroopSacrificeModel defaultTroopSacrificeModel = ...;
defaultTroopSacrificeModel.GetShipsToSacrificeForTryingToGetAway(playerBattleSide, mapEvent, shipsToCapture, shipToTakeDamage, damageToApplyForLastShip);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTroopSacrificeModel>(new MyDefaultTroopSacrificeModel());
```

## 参见

- [本区域目录](../)