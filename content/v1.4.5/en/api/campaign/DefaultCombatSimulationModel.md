---
title: "DefaultCombatSimulationModel"
description: "Auto-generated class reference for DefaultCombatSimulationModel."
---
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCombatSimulationModel.cs`

## Overview

`DefaultCombatSimulationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCombatSimulationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)`

**Purpose:** **Purpose:** Executes the SimulateHit logic.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, 0, battle, 0, 0);
```

### SimulateHit
`public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**Purpose:** **Purpose:** Executes the SimulateHit logic.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerShip, struckShip, strikerParty, struckParty, siegeEngine, 0, battle, troopCasualties);
```

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the maximum siege equipment progress value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetMaximumSiegeEquipmentProgress(settlement);
```

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the number of equipments built value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetNumberOfEquipmentsBuilt(settlement);
```

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the settlement advantage value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSettlementAdvantage(settlement);
```

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**Purpose:** **Purpose:** Reads and returns the battle advantage value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
defaultCombatSimulationModel.GetBattleAdvantage(mapEvent, defenderAdvantage, attackerAdvantage);
```

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Reads and returns the ship siege engine hit chance value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetShipSiegeEngineHitChance(ship, siegeEngineType, battleSide);
```

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

**Purpose:** **Purpose:** Reads and returns the pursuit round count value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetPursuitRoundCount(mapEvent);
```

### GetBluntDamageChance
`public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)`

**Purpose:** **Purpose:** Reads and returns the blunt damage chance value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetBluntDamageChance(strikerTroop, strikedTroop, strikerParty, strikedParty, battle);
```

### GetSimulationTickInterval
`public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent)`

**Purpose:** **Purpose:** Reads and returns the simulation tick interval value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSimulationTickInterval(mapEvent);
```

### GetParticipatingTroopCount
`public override int GetParticipatingTroopCount(MapEventSide side)`

**Purpose:** **Purpose:** Reads and returns the participating troop count value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetParticipatingTroopCount(side);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## See Also

- [Area Index](../)