<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentHandler.cs`

## Overview

`MissionAgentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownPassageProps` | `public List<UsableMachine> TownPassageProps { get; }` |
| `DisabledPassages` | `public List<UsableMachine> DisabledPassages { get; }` |
| `UsablePoints` | `public List<UsableMachine> UsablePoints { get; }` |

## Key Methods

### HasPassages
`public bool HasPassages()`

**Purpose:** Checks whether the current object has/contains `passages`.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### DetectMissingEntities
`public void DetectMissingEntities()`

**Purpose:** Handles logic related to `detect missing entities`.

### FindUnusedUsablePointCount
`public Dictionary<string, int> FindUnusedUsablePointCount()`

**Purpose:** Handles logic related to `find unused usable point count`.

### SpawnLocationCharacters
`public void SpawnLocationCharacters(string overridenTagValue = null)`

**Purpose:** Handles logic related to `spawn location characters`.

### SpawnDefaultLocationCharacter
`public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)`

**Purpose:** Handles logic related to `spawn default location character`.

### SimulateAgent
`public void SimulateAgent(Agent agent)`

**Purpose:** Handles logic related to `simulate agent`.

### FadeoutExitingLocationCharacter
`public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)`

**Purpose:** Handles logic related to `fadeout exiting location character`.

### SpawnEnteringLocationCharacter
`public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)`

**Purpose:** Handles logic related to `spawn entering location character`.

### HasUsablePointWithTag
`public bool HasUsablePointWithTag(string tag)`

**Purpose:** Checks whether the current object has/contains `usable point with tag`.

### GetAllSpawnTags
`public IEnumerable<string> GetAllSpawnTags()`

**Purpose:** Gets the current value of `all spawn tags`.

### GetAllUsablePointsWithTag
`public List<UsableMachine> GetAllUsablePointsWithTag(string tag)`

**Purpose:** Gets the current value of `all usable points with tag`.

### SpawnWanderingAgent
`public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)`

**Purpose:** Handles logic related to `spawn wandering agent`.

### SpawnWanderingAgentWithDelay
`public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)`

**Purpose:** Handles logic related to `spawn wandering agent with delay`.

### SpawnWanderingAgentWithInitialFrame
`public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)`

**Purpose:** Handles logic related to `spawn wandering agent with initial frame`.

### GetRandomTournamentTeamColor
`public static uint GetRandomTournamentTeamColor(int teamIndex)`

**Purpose:** Gets the current value of `random tournament team color`.

### GetAgentSettlementColors
`public static ValueTuple<uint, uint> GetAgentSettlementColors(LocationCharacter locationCharacter)`

**Purpose:** Gets the current value of `agent settlement colors`.

### FindUnusedPointWithTagForAgent
`public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)`

**Purpose:** Handles logic related to `find unused point with tag for agent`.

### FindUnusedPoints
`public List<UsableMachine> FindUnusedPoints(string tag)`

**Purpose:** Handles logic related to `find unused points`.

### FindAllUnusedPoints
`public List<UsableMachine> FindAllUnusedPoints(Agent agent, string primaryTag)`

**Purpose:** Handles logic related to `find all unused points`.

### TeleportTargetAgentNearReferenceAgent
`public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)`

**Purpose:** Handles logic related to `teleport target agent near reference agent`.

### GetPointCountOfUsableMachine
`public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)`

**Purpose:** Gets the current value of `point count of usable machine`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentHandler());
```

## See Also

- [Complete Class Catalog](../catalog)