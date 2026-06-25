---
title: "CombatSimulationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatSimulationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**Base:** `MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`

## Overview

`CombatSimulationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CombatSimulationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SimulateHit
`public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle)`

**Purpose:** Handles logic related to `simulate hit`.

### SimulateHit
`public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**Purpose:** Handles logic related to `simulate hit`.

### GetSimulationTicksForBattleRound
`public abstract ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**Purpose:** Gets the current value of `simulation ticks for battle round`.

### GetNumberOfEquipmentsBuilt
`public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**Purpose:** Gets the current value of `number of equipments built`.

### GetMaximumSiegeEquipmentProgress
`public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**Purpose:** Gets the current value of `maximum siege equipment progress`.

### GetSettlementAdvantage
`public abstract float GetSettlementAdvantage(Settlement settlement)`

**Purpose:** Gets the current value of `settlement advantage`.

### GetBattleAdvantage
`public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**Purpose:** Gets the current value of `battle advantage`.

### GetShipSiegeEngineHitChance
`public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `ship siege engine hit chance`.

### GetPursuitRoundCount
`public abstract int GetPursuitRoundCount(MapEvent mapEvent)`

**Purpose:** Gets the current value of `pursuit round count`.

## Usage Example

```csharp
var implementation = new CustomCombatSimulationModel();
```

## See Also

- [Complete Class Catalog](../catalog)