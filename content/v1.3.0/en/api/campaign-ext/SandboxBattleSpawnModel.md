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

`SandboxBattleSpawnModel` is the deployment half of mission start-up: it decides which formation each troop origin joins, and it holds the reinforcement queue. `GetInitialSpawnAssignments` (`SandBox/GameComponents/SandboxBattleSpawnModel.cs:33`) builds the configuration table for the side and then pairs every `IAgentOriginBase` with the best matching `FormationClass`, resolving close matches through a secondary class so a mixed roster still fills every row (`:45`, `:48`). Reinforcements are not decided here at all — `GetReinforcementAssignments` forwards the question to `MissionReinforcementsHelper` (`:80`), and `OnMissionStart`/`OnMissionEnd` forward the lifecycle events to the same helper (`:18`, `:24`), which means this class is deliberately a thin routing layer with only the order-of-battle assignment written inline.

## Mental Model

Understand the ordering constraint before touching it: the model is entered at three separate points in the spawn logic's lifetime, and not in sequence. `MissionAgentSpawnLogic.cs:225` calls `OnMissionStart`, `MissionAgentSpawnLogic.cs:344` calls `OnMissionEnd`, and `MissionAgentSpawnLogic.cs:1463` calls `GetInitialSpawnAssignments` for the side being spawned. Because `OnMissionStart` only delegates, an override that forgets to call the base implementation silently stops the whole reinforcement system for the mission — no exception, just troops that never arrive. The returned list is a list of `(origin, FormationClass)` pairs built fresh each call, so mutating it after the fact has no effect on the already-spawned agents; a mod that wants a different formation layout must return different pairs, not adjust the existing ones.

## Key Methods

### OnMissionStart
`public override void OnMissionStart()`

**Purpose:** Invoked when the mission start event is raised.

```csharp
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public override void OnMissionEnd()`

**Purpose:** Invoked when the mission end event is raised.

```csharp
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
sandboxBattleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the initial spawn assignments value held by this instance.

```csharp
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the reinforcement assignments value held by this instance.

```csharp
SandboxBattleSpawnModel sandboxBattleSpawnModel = ...;
var result = sandboxBattleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleSpawnModel>(new SandboxBattleSpawnModel());
}
```

`BattleSpawnModel` is declared as `MBGameModel<BattleSpawnModel>` (`BattleSpawnModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:43`.

## See Also

- [Area Index](../)