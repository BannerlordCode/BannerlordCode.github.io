---
title: "MultiplayerBattleSpawnModel"
description: "Auto-generated class reference for MultiplayerBattleSpawnModel."
---
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## Overview

`MultiplayerBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the `initial spawn assignments` value held by the current object.

```csharp
// Obtain an instance of MultiplayerBattleSpawnModel from the subsystem API first
MultiplayerBattleSpawnModel multiplayerBattleSpawnModel = ...;
var result = multiplayerBattleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the `reinforcement assignments` value held by the current object.

```csharp
// Obtain an instance of MultiplayerBattleSpawnModel from the subsystem API first
MultiplayerBattleSpawnModel multiplayerBattleSpawnModel = ...;
var result = multiplayerBattleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## See Also

- [Area Index](../)