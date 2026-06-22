<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleMoraleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`

## Overview

`CustomBattleMoraleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel())` to change how it computes.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
```csharp
public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
```

### CalculateMaxMoraleChangeDueToAgentPanicked
```csharp
public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
```

### CalculateMoraleChangeToCharacter
```csharp
public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
```

### GetEffectiveInitialMorale
```csharp
public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
```

### CanPanicDueToMorale
```csharp
public override bool CanPanicDueToMorale(Agent agent)
```

### CalculateCasualtiesFactor
```csharp
public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
```

### GetAverageMorale
```csharp
public override float GetAverageMorale(Formation formation)
```

### CalculateMoraleChangeOnShipSunk
```csharp
public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
```

### CalculateMoraleOnRamming
```csharp
public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
```

### CalculateMoraleOnShipsConnected
```csharp
public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
```

## Usage Example

```csharp
// Typical usage of CustomBattleMoraleModel (Model)
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)