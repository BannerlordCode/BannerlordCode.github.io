---
title: "TroopSacrificeModel"
description: "TroopSacrificeModel 的自动生成类参考。"
---
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**Base:** `MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`

## 概述

`TroopSacrificeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TroopSacrificeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty { get; }` |

## 主要方法

### GetLostTroopCountForBreakingInBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「lost troop count for breaking in besieged settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopSacrificeModel 实例
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetLostTroopCountForBreakingInBesiegedSettlement(party, siegeEvent);
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**用途 / Purpose:** 读取并返回当前对象中 「lost troop count for breaking out of besieged settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopSacrificeModel 实例
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetLostTroopCountForBreakingOutOfBesiegedSettlement(party, siegeEvent, false);
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops sacrificed for trying to get away」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopSacrificeModel 实例
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.GetNumberOfTroopsSacrificedForTryingToGetAway(playerBattleSide, mapEvent);
```

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**用途 / Purpose:** 读取并返回当前对象中 「ships to sacrifice for trying to get away」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopSacrificeModel 实例
TroopSacrificeModel troopSacrificeModel = ...;
troopSacrificeModel.GetShipsToSacrificeForTryingToGetAway(playerBattleSide, mapEvent, shipsToCapture, shipToTakeDamage, damageToApplyForLastShip);
```

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**用途 / Purpose:** 检查当前对象是否满足 「player get away from encounter」 的前置条件。

```csharp
// 先通过子系统 API 拿到 TroopSacrificeModel 实例
TroopSacrificeModel troopSacrificeModel = ...;
var result = troopSacrificeModel.CanPlayerGetAwayFromEncounter(explanation);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TroopSacrificeModel instance = ...;
```

## 参见

- [本区域目录](../)