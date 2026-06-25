---
title: "SandboxBattleSpawnModel"
description: "Auto-generated class reference for SandboxBattleSpawnModel."
---
# SandboxBattleSpawnModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## Overview

`SandboxBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public override void OnMissionStart()`

**Purpose:** Invoked when the mission start event is raised.

```csharp
// Obtain an instance of SandboxBattleSpawnModel from the subsystem API first
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public override void OnMissionEnd()`

**Purpose:** Invoked when the mission end event is raised.

```csharp
// Obtain an instance of SandboxBattleSpawnModel from the subsystem API first
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the initial spawn assignments value held by the this instance.

```csharp
// Obtain an instance of SandboxBattleSpawnModel from the subsystem API first
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the reinforcement assignments value held by the this instance.

```csharp
// Obtain an instance of SandboxBattleSpawnModel from the subsystem API first
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleSpawnModel>(new MySandboxBattleSpawnModel());
```

## See Also

- [Area Index](../)