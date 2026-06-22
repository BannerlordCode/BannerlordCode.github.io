<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTroopSacrificeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**Base:** `TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## Overview

`DefaultTroopSacrificeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTroopSacrificeModel>(new MyDefaultTroopSacrificeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
```csharp
public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)
```

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
```csharp
public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)
```

### GetNumberOfTroopsSacrificedForTryingToGetAway
```csharp
public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)
```

### CanPlayerGetAwayFromEncounter
```csharp
public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)
```

### GetShipsToSacrificeForTryingToGetAway
```csharp
public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)
```

## Usage Example

```csharp
// Typical usage of DefaultTroopSacrificeModel (Model)
Game.Current.ReplaceModel<DefaultTroopSacrificeModel>(new MyDefaultTroopSacrificeModel());
```

## See Also

- [Complete Class Catalog](../catalog)