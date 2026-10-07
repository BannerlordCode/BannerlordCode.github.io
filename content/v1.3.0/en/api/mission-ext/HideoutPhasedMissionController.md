---
title: "HideoutPhasedMissionController"
description: "Auto-generated class reference for HideoutPhasedMissionController."
---
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs`

## Overview

`HideoutPhasedMissionController` is the `MissionLogic` that turns a hideout mission into **phased reinforcements**: it pre-computes where each reinforcement phase's spawn points will be, removes them from the scene, then recreates them one phase at a time as the defender side's spawn logic advances. It also unconditionally disables order gestures for the whole mission.

It runs entirely at mission start. `OnBehaviorInitialize` calls `ReadySpawnPointLogic()` — the expensive scene surgery — and then subscribes a gesture-disabling predicate (`HideoutPhasedMissionController.cs:53`, `HideoutPhasedMissionController.cs:55`, `HideoutPhasedMissionController.cs:56`). `AfterStart` hooks the defender side's phase-change callback, but only if a `MissionAgentSpawnLogic` exists (`HideoutPhasedMissionController.cs:63`, `HideoutPhasedMissionController.cs:64`, `HideoutPhasedMissionController.cs:66`). `OnPhaseChanged` is private and is only ever reached through that hook.

Like several types in this area it is **not constructed by managed code in 1.3.0**: a tree-wide search finds one reference, and it is a presence *test*, not a construction — `BattleEndLogic.cs:279` checks `GetMissionBehavior<HideoutPhasedMissionController>() != null` and returns early. `BattleEndLogic` uses that to skip the player-retreat timer (`BattleEndLogic.cs:279`), so the controller's mere presence disables that safety net. Since nothing adds it, that branch never fires in a stock game.

## Mental Model

Three things in this class look like configuration and are not.

`IsPhasingInitialized` is a private property whose getter returns the literal `true` (`HideoutPhasedMissionController.cs:76`). The guard at `HideoutPhasedMissionController.cs:64` therefore reduces to a null check on `missionBehavior`, and reads as though phasing can be switched off. It cannot.

`AreOrderGesturesEnabled_AdditionalCondition` is a private method returning the literal `false` (`HideoutPhasedMissionController.cs:151`), wired into `Mission.AreOrderGesturesEnabled_AdditionalCondition` at `HideoutPhasedMissionController.cs:56` and unwired in `OnEndMission` at `HideoutPhasedMissionController.cs:49`. So the contribution is constant: while this behaviour is present, order gestures are off for every agent, for the whole mission. The subscribe/unsubscribe pair is correct and balanced, which is the only part of it that is negotiable.

`PhaseCount = 4` (`HideoutPhasedMissionController.cs:155`) is a public constant that nothing in this class uses. The real phase count is whatever the scene contains.

`ReadySpawnPointLogic` has three hard preconditions that are not enforced anywhere. It gathers every `HideoutSpawnPointGroup` entity and indexes a flat array by `PhaseNumber - 1` (`HideoutPhasedMissionController.cs:92`), so a `PhaseNumber` of `0` throws `IndexOutOfRangeException` and two groups sharing a phase number leave a null hole in the array. It then removes phase 1 and three *randomly chosen* groups from consideration (`HideoutPhasedMissionController.cs:95`, `HideoutPhasedMissionController.cs:98`), and pushes only the survivors onto the stack (`HideoutPhasedMissionController.cs:105`). Finally `CreateSpawnPoints` pops that stack immediately (`HideoutPhasedMissionController.cs:116`). With four groups in the scene the removals empty the stack and the `Pop` throws; with five groups exactly one phase is ever available. So the scene must contain **more than four** spawn point groups, and each phase number must be unique and ≥ 1.

The last of those is the one worth internalising: the randomness is not cosmetic. `MBRandom.RandomInt(list2.Count)` picks which phases are dropped for the rest of the mission (`HideoutPhasedMissionController.cs:98`), so two runs of the same hideout mission legitimately expose different reinforcement phases.

The tick block in `OnMissionTick` is dead on the first phase. `_isNewlyPopulatedFormationGivenOrder` starts as `true` (`HideoutPhasedMissionController.cs:164`), so `if (!this._isNewlyPopulatedFormationGivenOrder)` (`HideoutPhasedMissionController.cs:27`) is false until `OnPhaseChanged` resets it (`HideoutPhasedMissionController.cs:145`). Its real job is to issue one `MovementOrderMove` to the median position of the first defender formation that has units, so a freshly-spawned phase walks in rather than standing still.

## How to use

**Getting it.** Construct it yourself and add it as a mission behaviour; it has a default constructor and no arguments. Add it *before* the mission starts, because the scene surgery happens in `OnBehaviorInitialize`.

```csharp
using TaleWorlds.MountAndBlade.Source.Missions;

public class HideoutPhaser : MissionBehavior
{
    public override void OnAfterMissionCreated()
    {
        // OnBehaviorInitialize reads and removes the HideoutSpawnPointGroup entities
        // (HideoutPhasedMissionController.cs:83, HideoutPhasedMissionController.cs:108),
        // so it must be added while those entities still exist.
        if (Mission.Scene.FindEntityWithTag("hideout_spawn_points") != null)
        {
            Mission.AddMissionBehavior(new HideoutPhasedMissionController());
        }
    }
}
```

If you only want the order-gesture suppression — the one effect with no scene prerequisites — subclass and override nothing; the gesture hook is independent of the phasing:

```csharp
public class NoOrderGestures : HideoutPhasedMissionController
{
    // base.OnBehaviorInitialize still calls ReadySpawnPointLogic, so this only
    // works on a scene that actually has the spawn point groups.
    public override void OnBehaviorInitialize()
    {
        // Deliberately skip the base call so the scene surgery never runs.
        Mission.AreOrderGesturesEnabled_AdditionalCondition += () => false;
    }
}
```

**The mistake that crashes mission start with an unhelpful stack.** Adding this behaviour to a hideout scene that has four or fewer `HideoutSpawnPointGroup` entities. `ReadySpawnPointLogic` drops phase 1 plus three random groups (`HideoutPhasedMissionController.cs:95`, `HideoutPhasedMissionController.cs:98`) and `CreateSpawnPoints` then calls `Pop` on the resulting stack (`HideoutPhasedMissionController.cs:116`), which throws `InvalidOperationException` from inside mission initialisation — before any reinforcement has spawned, with the stack pointing at the controller rather than at the scene that did not have enough spawn points.

## Key Properties

| Name | Signature |
|------|-----------|
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnMissionTick(0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## See Also

- [MissionReinforcementsHelper — the reinforcement logic this controller phases](../MissionReinforcementsHelper)
- [MissionLogic — the base class whose defaults it also inherits](../MissionLogic)
- [HideoutPhasedMissionController's sibling: MissionSiegeEnginesLogic — another logic whose presence changes policy](../MissionSiegeEnginesLogic)
- [Mission — behaviour list and `AreOrderGesturesEnabled_AdditionalCondition`](../../mission/Mission)
- [Area Index](../)