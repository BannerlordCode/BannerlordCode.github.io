<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordsHallFightMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`

## Overview

`LordsHallFightMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

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
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionStateFinalized
```csharp
public override void OnMissionStateFinalized()
```

### OnCreated
```csharp
public override void OnCreated()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### StartSpawner
```csharp
public void StartSpawner(BattleSideEnum side)
```

### StopSpawner
```csharp
public void StopSpawner(BattleSideEnum side)
```

### IsSideSpawnEnabled
```csharp
public bool IsSideSpawnEnabled(BattleSideEnum side)
```

### GetReinforcementInterval
```csharp
public float GetReinforcementInterval()
```

### IsSideDepleted
```csharp
public bool IsSideDepleted(BattleSideEnum side)
```

### GetNumberOfPlayerControllableTroops
```csharp
public int GetNumberOfPlayerControllableTroops()
```

### GetAllTroopsForSide
```csharp
public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)
```

### GetSpawnHorses
```csharp
public bool GetSpawnHorses(BattleSideEnum side)
```

### SpawnTroops
```csharp
public void SpawnTroops(Dictionary<int, Dictionary<int, LordsHallFightMissionController.AreaData>> areaMarkerDictionary, int spawnCount)
```

### SpawnTroops
```csharp
public void SpawnTroops(int spawnCount, bool isReinforcement)
```

### SetSpawnTroops
```csharp
public void SetSpawnTroops(bool spawnTroops)
```

### GetAllTroops
```csharp
public IEnumerable<IAgentOriginBase> GetAllTroops()
```

### GetAvailableMachines
```csharp
public IEnumerable<LordsHallFightMissionController.AreaEntityData> GetAvailableMachines(bool isArcher)
```

### AddAreaMarker
```csharp
public void AddAreaMarker(FightAreaMarker marker)
```

### FindAgentMachine
```csharp
public LordsHallFightMissionController.AreaEntityData FindAgentMachine(Agent agent)
```

### AssignAgent
```csharp
public void AssignAgent(Agent agent)
```

### StopUse
```csharp
public void StopUse()
```

## Usage Example

```csharp
// Typical usage of LordsHallFightMissionController (Controller)
Mission.Current.GetMissionBehavior<LordsHallFightMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)