<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs`

## Overview

`CustomBattleInitializationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleInitializationModel>(new MyCustomBattleInitializationModel())` to change how it computes.

## Key Methods

### GetAllAvailableTroopTypes
```csharp
public override List<FormationClass> GetAllAvailableTroopTypes()
```

## Usage Example

```csharp
// Typical usage of CustomBattleInitializationModel (Model)
Game.Current.ReplaceModel<CustomBattleInitializationModel>(new MyCustomBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)