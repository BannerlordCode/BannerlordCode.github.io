<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCombatSimulationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCombatSimulationModel.cs`

## Overview

`DefaultCombatSimulationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCombatSimulationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)`

**Purpose:** Handles logic related to `simulate hit`.

### SimulateHit
`public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**Purpose:** Handles logic related to `simulate hit`.

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**Purpose:** Gets the current value of `maximum siege equipment progress`.

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**Purpose:** Gets the current value of `number of equipments built`.

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

**Purpose:** Gets the current value of `settlement advantage`.

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**Purpose:** Gets the current value of `battle advantage`.

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `ship siege engine hit chance`.

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

**Purpose:** Gets the current value of `pursuit round count`.

### GetBluntDamageChance
`public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)`

**Purpose:** Gets the current value of `blunt damage chance`.

### GetSimulationTickInterval
`public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent)`

**Purpose:** Gets the current value of `simulation tick interval`.

### GetParticipatingTroopCount
`public override int GetParticipatingTroopCount(MapEventSide side)`

**Purpose:** Gets the current value of `participating troop count`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## See Also

- [Complete Class Catalog](../catalog)