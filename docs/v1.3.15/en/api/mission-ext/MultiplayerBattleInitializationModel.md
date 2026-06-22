<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleInitializationModel.cs`

## Overview

`MultiplayerBattleInitializationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel())` to change how it computes.

## Key Methods

### GetAllAvailableTroopTypes
```csharp
public override List<FormationClass> GetAllAvailableTroopTypes()
```

## Usage Example

```csharp
// Typical usage of MultiplayerBattleInitializationModel (Model)
Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)