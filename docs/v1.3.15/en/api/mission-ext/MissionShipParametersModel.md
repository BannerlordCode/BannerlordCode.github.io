<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionShipParametersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## Overview

`MissionShipParametersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MissionShipParametersModel>(new MyMissionShipParametersModel())` to change how it computes.

## Key Methods

### CalculateMainDeckCrewSize
```csharp
public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)
```

### CalculateWindBonus
```csharp
public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)
```

### CalculateOarForceMultiplier
```csharp
public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)
```

## Usage Example

```csharp
// Typical usage of MissionShipParametersModel (Model)
Game.Current.ReplaceModel<MissionShipParametersModel>(new MyMissionShipParametersModel());
```

## See Also

- [Complete Class Catalog](../catalog)