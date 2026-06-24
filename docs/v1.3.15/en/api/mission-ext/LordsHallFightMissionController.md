<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordsHallFightMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`

## Overview

`LordsHallFightMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `LordsHallFightMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `AreaList` | `public IEnumerable<FightAreaMarker> AreaList { get; }` |
| `ArcherUsablePoints` | `public IEnumerable<LordsHallFightMissionController.AreaEntityData> ArcherUsablePoints { get; }` |
| `InfantryUsablePoints` | `public IEnumerable<LordsHallFightMissionController.AreaEntityData> InfantryUsablePoints { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `InUse` | `public bool InUse { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Called when the `mission state finalized` event is raised.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `start spawner`.

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `stop spawner`.

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side spawn enabled`.

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**Purpose:** Gets the current value of `reinforcement interval`.

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `all troops for side`.

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Gets the current value of `spawn horses`.

### SpawnTroops
`public void SpawnTroops(Dictionary<int, Dictionary<int, LordsHallFightMissionController.AreaData>> areaMarkerDictionary, int spawnCount)`

**Purpose:** Handles logic related to `spawn troops`.

### SpawnTroops
`public void SpawnTroops(int spawnCount, bool isReinforcement)`

**Purpose:** Handles logic related to `spawn troops`.

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Sets the value or state of `spawn troops`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### GetAvailableMachines
`public IEnumerable<LordsHallFightMissionController.AreaEntityData> GetAvailableMachines(bool isArcher)`

**Purpose:** Gets the current value of `available machines`.

### AddAreaMarker
`public void AddAreaMarker(FightAreaMarker marker)`

**Purpose:** Adds `area marker` to the current collection or state.

### FindAgentMachine
`public LordsHallFightMissionController.AreaEntityData FindAgentMachine(Agent agent)`

**Purpose:** Handles logic related to `find agent machine`.

### AssignAgent
`public void AssignAgent(Agent agent)`

**Purpose:** Handles logic related to `assign agent`.

### StopUse
`public void StopUse()`

**Purpose:** Handles logic related to `stop use`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<LordsHallFightMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)