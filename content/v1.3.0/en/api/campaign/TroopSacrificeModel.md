---
title: "TroopSacrificeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopSacrificeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**Base:** `MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`

## Overview

`TroopSacrificeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TroopSacrificeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty { get; }` |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty { get; }` |

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)`

**Purpose:** Gets the current value of `lost troop count for breaking in besieged settlement`.

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)`

**Purpose:** Gets the current value of `lost troop count for breaking out of besieged settlement`.

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)`

**Purpose:** Gets the current value of `number of troops sacrificed for trying to get away`.

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship> shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)`

**Purpose:** Gets the current value of `ships to sacrifice for trying to get away`.

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

**Purpose:** Checks whether the current object can `player get away from encounter`.

## Usage Example

```csharp
var implementation = new CustomTroopSacrificeModel();
```

## See Also

- [Complete Class Catalog](../catalog)