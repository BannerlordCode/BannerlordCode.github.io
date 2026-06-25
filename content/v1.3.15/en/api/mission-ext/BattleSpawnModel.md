---
title: "BattleSpawnModel"
description: "Auto-generated class reference for BattleSpawnModel."
---
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## Overview

`BattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public virtual void OnMissionStart()`

**Purpose:** Invoked when the `mission start` event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public virtual void OnMissionEnd()`

**Purpose:** Invoked when the `mission end` event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the `initial spawn assignments` value held by the current object.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the `reinforcement assignments` value held by the current object.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleSpawnModel instance = ...;
```

## See Also

- [Area Index](../)