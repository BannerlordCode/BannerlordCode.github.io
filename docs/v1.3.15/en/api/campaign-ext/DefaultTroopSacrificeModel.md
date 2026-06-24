<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTroopSacrificeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**Base:** `TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## Overview

`DefaultTroopSacrificeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTroopSacrificeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**Purpose:** Gets the current value of `lost troop count for breaking in besieged settlement`.

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**Purpose:** Gets the current value of `lost troop count for breaking out of besieged settlement`.

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**Purpose:** Gets the current value of `number of troops sacrificed for trying to get away`.

### CanPlayerGetAwayFromEncounter
`public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**Purpose:** Checks whether the current object can `player get away from encounter`.

### GetShipsToSacrificeForTryingToGetAway
`public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**Purpose:** Gets the current value of `ships to sacrifice for trying to get away`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTroopSacrificeModel>(new MyDefaultTroopSacrificeModel());
```

## See Also

- [Complete Class Catalog](../catalog)