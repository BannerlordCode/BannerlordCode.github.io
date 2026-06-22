<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatSimulationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**Base:** `MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`

## Overview

`CombatSimulationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CombatSimulationModel>(new MyCombatSimulationModel())` to change how it computes.

## Key Methods

### SimulateHit
```csharp
public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)
```

### SimulateHit
```csharp
public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)
```

### GetSimulationTicksForBattleRound
```csharp
public abstract ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)
```

### GetNumberOfEquipmentsBuilt
```csharp
public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement)
```

### GetMaximumSiegeEquipmentProgress
```csharp
public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement)
```

### GetSettlementAdvantage
```csharp
public abstract float GetSettlementAdvantage(Settlement settlement)
```

### GetBattleAdvantage
```csharp
public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)
```

### GetShipSiegeEngineHitChance
```csharp
public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)
```

### GetPursuitRoundCount
```csharp
public abstract int GetPursuitRoundCount(MapEvent mapEvent)
```

### GetBluntDamageChance
```csharp
public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)
```

## Usage Example

```csharp
// Typical usage of CombatSimulationModel (Model)
Game.Current.ReplaceModel<CombatSimulationModel>(new MyCombatSimulationModel());
```

## See Also

- [Complete Class Catalog](../catalog)