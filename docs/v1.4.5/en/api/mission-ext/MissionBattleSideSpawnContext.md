<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBattleSideSpawnContext`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBattleSideSpawnContext

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSideSpawnContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`

## Overview

`MissionBattleSideSpawnContext` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |
| `ForceSpawnPlayerMounted` | `public bool ForceSpawnPlayerMounted { get; }` |

## Key Methods

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**Purpose:** Attempts to get `reinforcement spawn`, usually returning the result in an out parameter.

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData(out MBList<(Team team, MissionFormationSpawnData formationSpawnData)> teamFormationsSpawnData)`

**Purpose:** Gets the current value of `team formations spawn data`.

### ReserveTroops
`public void ReserveTroops(int number)`

**Purpose:** Handles logic related to `reserve troops`.

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Gets the current value of `general character`.

### CheckReinforcementBatch
`public bool CheckReinforcementBatch()`

**Purpose:** Handles logic related to `check reinforcement batch`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**Purpose:** Handles logic related to `spawn troops`.

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**Purpose:** Sets the value or state of `spawn with horses`.

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Sets the value or state of `banner bearer logic`.

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**Purpose:** Sets the value or state of `reinforcements notified on last batch`.

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Sets the value or state of `spawn troops`.

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**Purpose:** Called when the `initial spawn over` event is raised.

## Usage Example

```csharp
var value = new MissionBattleSideSpawnContext();
value.GetNumberOfPlayerControllableTroops();
```

## See Also

- [Complete Class Catalog](../catalog)