<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMoraleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**Base:** `MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## Overview

`BattleMoraleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleMoraleModel>(new MyBattleMoraleModel())` to change how it computes.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
```csharp
public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
```

### CalculateMaxMoraleChangeDueToAgentPanicked
```csharp
public abstract ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
```

### CalculateMoraleChangeToCharacter
```csharp
public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
```

### GetEffectiveInitialMorale
```csharp
public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale)
```

### CanPanicDueToMorale
```csharp
public abstract bool CanPanicDueToMorale(Agent agent)
```

### CalculateCasualtiesFactor
```csharp
public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)
```

### GetAverageMorale
```csharp
public abstract float GetAverageMorale(Formation formation)
```

### CalculateMoraleChangeOnShipSunk
```csharp
public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
```

### CalculateMoraleOnRamming
```csharp
public abstract float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
```

### CalculateMoraleOnShipsConnected
```csharp
public abstract float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
```

## Usage Example

```csharp
// Typical usage of BattleMoraleModel (Model)
Game.Current.ReplaceModel<BattleMoraleModel>(new MyBattleMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)