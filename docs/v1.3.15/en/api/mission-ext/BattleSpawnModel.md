<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSpawnModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## Overview

`BattleSpawnModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleSpawnModel>(new MyBattleSpawnModel())` to change how it computes.

## Key Methods

### OnMissionStart
```csharp
public virtual void OnMissionStart()
```

### OnMissionEnd
```csharp
public virtual void OnMissionEnd()
```

### GetInitialSpawnAssignments
```csharp
public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### GetReinforcementAssignments
```csharp
public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

## Usage Example

```csharp
// Typical usage of BattleSpawnModel (Model)
Game.Current.ReplaceModel<BattleSpawnModel>(new MyBattleSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)