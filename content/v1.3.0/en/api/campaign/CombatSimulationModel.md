---
title: "CombatSimulationModel"
description: "Auto-generated class reference for CombatSimulationModel."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, 0, battle);
```

### SimulateHit
`public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.SimulateHit(strikerShip, struckShip, strikerParty, struckParty, siegeEngine, 0, battle, troopCasualties);
```

### GetSimulationTicksForBattleRound
`public abstract ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**Purpose:** Reads and returns the `simulation ticks for battle round` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetSimulationTicksForBattleRound(mapEvent);
```

### GetNumberOfEquipmentsBuilt
`public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**Purpose:** Reads and returns the `number of equipments built` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetNumberOfEquipmentsBuilt(settlement);
```

### GetMaximumSiegeEquipmentProgress
`public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**Purpose:** Reads and returns the `maximum siege equipment progress` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetMaximumSiegeEquipmentProgress(settlement);
```

### GetSettlementAdvantage
`public abstract float GetSettlementAdvantage(Settlement settlement)`

**Purpose:** Reads and returns the `settlement advantage` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetSettlementAdvantage(settlement);
```

### GetBattleAdvantage
`public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**Purpose:** Reads and returns the `battle advantage` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
combatSimulationModel.GetBattleAdvantage(mapEvent, defenderAdvantage, attackerAdvantage);
```

### GetShipSiegeEngineHitChance
`public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**Purpose:** Reads and returns the `ship siege engine hit chance` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetShipSiegeEngineHitChance(ship, siegeEngineType, battleSide);
```

### GetPursuitRoundCount
`public abstract int GetPursuitRoundCount(MapEvent mapEvent)`

**Purpose:** Reads and returns the `pursuit round count` value held by the current object.

```csharp
// Obtain an instance of CombatSimulationModel from the subsystem API first
CombatSimulationModel combatSimulationModel = ...;
var result = combatSimulationModel.GetPursuitRoundCount(mapEvent);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CombatSimulationModel instance = ...;
```

## See Also

- [Area Index](../)