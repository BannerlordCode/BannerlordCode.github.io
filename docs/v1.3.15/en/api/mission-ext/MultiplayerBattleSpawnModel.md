<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleSpawnModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## Overview

`MultiplayerBattleSpawnModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel())` to change how it computes.

## Key Methods

### GetInitialSpawnAssignments
```csharp
public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### GetReinforcementAssignments
```csharp
public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

## Usage Example

```csharp
// Typical usage of MultiplayerBattleSpawnModel (Model)
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)