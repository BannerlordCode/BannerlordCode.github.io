---
title: "MissionAgentHandler"
description: "Auto-generated class reference for MissionAgentHandler."
---
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentHandler.cs`

## Overview

`MissionAgentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownPassageProps` | `public List<UsableMachine> TownPassageProps { get; }` |
| `UsablePoints` | `public List<UsableMachine> UsablePoints { get; }` |

## Key Methods

### HasPassages
`public bool HasPassages()`

**Purpose:** **Purpose:** Determines whether the this instance already holds passages.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.HasPassages();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.EarlyStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** **Purpose:** Invoked when the rendering started event is raised.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnMissionTick(0);
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** **Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnMissionModeChange(oldMissionMode, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### DetectMissingEntities
`public void DetectMissingEntities()`

**Purpose:** **Purpose:** Executes the DetectMissingEntities logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.DetectMissingEntities();
```

### FindUnusedUsablePointCount
`public Dictionary<string, int> FindUnusedUsablePointCount()`

**Purpose:** **Purpose:** Looks up the matching unused usable point count in the current collection or scope.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedUsablePointCount();
```

### SpawnLocationCharacters
`public void SpawnLocationCharacters(string overridenTagValue = null)`

**Purpose:** **Purpose:** Executes the SpawnLocationCharacters logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnLocationCharacters("example");
```

### SpawnDefaultLocationCharacter
`public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)`

**Purpose:** **Purpose:** Executes the SpawnDefaultLocationCharacter logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnDefaultLocationCharacter(locationCharacter, false);
```

### SimulateAgent
`public void SimulateAgent(Agent agent)`

**Purpose:** **Purpose:** Executes the SimulateAgent logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SimulateAgent(agent);
```

### FadeoutExitingLocationCharacter
`public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Executes the FadeoutExitingLocationCharacter logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.FadeoutExitingLocationCharacter(locationCharacter);
```

### SpawnEnteringLocationCharacter
`public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)`

**Purpose:** **Purpose:** Executes the SpawnEnteringLocationCharacter logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnEnteringLocationCharacter(locationCharacter, fromLocation);
```

### HasUsablePointWithTag
`public bool HasUsablePointWithTag(string tag)`

**Purpose:** **Purpose:** Determines whether the this instance already holds usable point with tag.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.HasUsablePointWithTag("example");
```

### GetAllSpawnTags
`public IEnumerable<string> GetAllSpawnTags()`

**Purpose:** **Purpose:** Reads and returns the all spawn tags value held by the this instance.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.GetAllSpawnTags();
```

### GetAllUsablePointsWithTag
`public List<UsableMachine> GetAllUsablePointsWithTag(string tag)`

**Purpose:** **Purpose:** Reads and returns the all usable points with tag value held by the this instance.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.GetAllUsablePointsWithTag("example");
```

### SpawnWanderingAgent
`public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Executes the SpawnWanderingAgent logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnWanderingAgent(locationCharacter);
```

### SpawnWanderingAgentWithDelay
`public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)`

**Purpose:** **Purpose:** Executes the SpawnWanderingAgentWithDelay logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.SpawnWanderingAgentWithDelay(locationCharacter, matrixFrame, spawnEntity, false, false, 0);
```

### SpawnWanderingAgentWithInitialFrame
`public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)`

**Purpose:** **Purpose:** Executes the SpawnWanderingAgentWithInitialFrame logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.SpawnWanderingAgentWithInitialFrame(locationCharacter, spawnPointFrame, spawnEntity, false, false);
```

### GetRandomTournamentTeamColor
`public static uint GetRandomTournamentTeamColor(int teamIndex)`

**Purpose:** **Purpose:** Reads and returns the random tournament team color value held by the this instance.

```csharp
// Static call; no instance required
MissionAgentHandler.GetRandomTournamentTeamColor(0);
```

### FindUnusedPointWithTagForAgent
`public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)`

**Purpose:** **Purpose:** Looks up the matching unused point with tag for agent in the current collection or scope.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedPointWithTagForAgent(agent, "example");
```

### FindUnusedPoints
`public List<UsableMachine> FindUnusedPoints(string tag)`

**Purpose:** **Purpose:** Looks up the matching unused points in the current collection or scope.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindUnusedPoints("example");
```

### FindAllUnusedPoints
`public List<UsableMachine> FindAllUnusedPoints(Agent agent, string primaryTag)`

**Purpose:** **Purpose:** Looks up the matching all unused points in the current collection or scope.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
var result = missionAgentHandler.FindAllUnusedPoints(agent, "example");
```

### TeleportTargetAgentNearReferenceAgent
`public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)`

**Purpose:** **Purpose:** Executes the TeleportTargetAgentNearReferenceAgent logic.

```csharp
// Obtain an instance of MissionAgentHandler from the subsystem API first
MissionAgentHandler missionAgentHandler = ...;
missionAgentHandler.TeleportTargetAgentNearReferenceAgent(referenceAgent, teleportAgent, false, false);
```

### GetPointCountOfUsableMachine
`public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)`

**Purpose:** **Purpose:** Reads and returns the point count of usable machine value held by the this instance.

```csharp
// Static call; no instance required
MissionAgentHandler.GetPointCountOfUsableMachine(usableMachine, false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentHandler>();
```

## See Also

- [Area Index](../)