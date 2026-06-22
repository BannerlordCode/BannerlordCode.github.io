<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## Overview

`BattleInitializationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleInitializationModel>(new MyBattleInitializationModel())` to change how it computes.

## Key Methods

### GetAllAvailableTroopTypes
```csharp
public abstract List<FormationClass> GetAllAvailableTroopTypes()
```

### CanPlayerSideDeployWithOrderOfBattle
```csharp
public bool CanPlayerSideDeployWithOrderOfBattle()
```

### InitializeModel
```csharp
public void InitializeModel()
```

### FinalizeModel
```csharp
public void FinalizeModel()
```

## Usage Example

```csharp
// Typical usage of BattleInitializationModel (Model)
Game.Current.ReplaceModel<BattleInitializationModel>(new MyBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)