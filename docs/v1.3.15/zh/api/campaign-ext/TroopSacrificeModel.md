<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopSacrificeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `lost troop count for breaking in besieged settlement` 的当前值。

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**用途 / Purpose:** 获取 `lost troop count for breaking out of besieged settlement` 的当前值。

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**用途 / Purpose:** 获取 `number of troops sacrificed for trying to get away` 的当前值。

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**用途 / Purpose:** 获取 `ships to sacrifice for trying to get away` 的当前值。

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player get away from encounter`。

## 使用示例

```csharp
var implementation = new CustomTroopSacrificeModel();
```

## 参见

- [完整类目录](../catalog)