<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopSacrificeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**Base:** `MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`

## Overview

`TroopSacrificeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TroopSacrificeModel>(new MyTroopSacrificeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of TroopSacrificeModel (Model)
Game.Current.ReplaceModel<TroopSacrificeModel>(new MyTroopSacrificeModel());
```

## See Also

- [Complete Class Catalog](../catalog)