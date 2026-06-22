<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCombatSimulationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`

## Overview

`DefaultCombatSimulationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel())` to change how it computes.

## Key Methods

### SimulateHit
```csharp
public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)
```

### SimulateHit
```csharp
public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)
```

### GetMaximumSiegeEquipmentProgress
```csharp
public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)
```

### GetNumberOfEquipmentsBuilt
```csharp
public override int GetNumberOfEquipmentsBuilt(Settlement settlement)
```

### GetSettlementAdvantage
```csharp
public override float GetSettlementAdvantage(Settlement settlement)
```

### GetSimulationTicksForBattleRound
```csharp
public override ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)
```

### GetBattleAdvantage
```csharp
public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)
```

### GetShipSiegeEngineHitChance
```csharp
public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)
```

### GetPursuitRoundCount
```csharp
public override int GetPursuitRoundCount(MapEvent mapEvent)
```

### GetBluntDamageChance
```csharp
public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)
```

## Usage Example

```csharp
// Typical usage of DefaultCombatSimulationModel (Model)
Game.Current.ReplaceModel<DefaultCombatSimulationModel>(new MyDefaultCombatSimulationModel());
```

## See Also

- [Complete Class Catalog](../catalog)