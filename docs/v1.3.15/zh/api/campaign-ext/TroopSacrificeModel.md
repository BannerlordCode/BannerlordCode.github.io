<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopSacrificeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**Base:** `MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`

## 概述

`TroopSacrificeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TroopSacrificeModel>(new MyTroopSacrificeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty { get; }` |

## 主要方法

### GetLostTroopCountForBreakingInBesiegedSettlement
```csharp
public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
```csharp
public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
```csharp
public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)
```

### GetShipsToSacrificeForTryingToGetAway
```csharp
public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)
```

### CanPlayerGetAwayFromEncounter
```csharp
public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)
```

## 使用示例

```csharp
// TroopSacrificeModel (Model) 的典型用法
Game.Current.ReplaceModel<TroopSacrificeModel>(new MyTroopSacrificeModel());
```

## 参见

- [完整类目录](../catalog)