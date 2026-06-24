<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutMissionController.cs`

## Overview

`HideoutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## Key Methods

### SpawnTroops
`public void SpawnTroops(List<CommonAreaMarker> areaMarkers, List<PatrolArea> patrolAreas, Dictionary<Agent, UsedObject> defenderAgentObjects, int spawnCount)`

**Purpose:** Handles logic related to `spawn troops`.

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames, int spawnCount, CharacterObject overriddenHideoutBossCharacterObject)`

**Purpose:** Handles logic related to `spawn remaining troops for boss fight`.

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Sets the value or state of `spawn troops`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object stopped being used` event is raised.

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Called when the `mission state finalized` event is raised.

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** Sets the value or state of `overridden hideout boss character object`.

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
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**Purpose:** Gets the current value of `reinforcement interval`.

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**Purpose:** Handles logic related to `start boss fight duel mode`.

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**Purpose:** Handles logic related to `start boss fight battle mode`.

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `all troops for side`.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Gets the current value of `spawn horses`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)