---
title: "BattleReinforcementsSpawnController"
description: "Auto-generated class reference for BattleReinforcementsSpawnController."
---
# BattleReinforcementsSpawnController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`

## Overview

`BattleReinforcementsSpawnController` is a `MissionLogic` whose only job is to stop a side's reinforcement spawner while that side is retreating, and to restart it when the retreat is called off. It owns three two-element arrays indexed by `(int)BattleSideEnum` — `_sideReinforcementSuspended` (`BattleReinforcementsSpawnController.cs:107`) and `_sideRequiresUpdate` (`BattleReinforcementsSpawnController.cs:110`) — and one cached `IMissionAgentSpawnLogic` fetched in `OnBehaviorInitialize` (`BattleReinforcementsSpawnController.cs:13`).

Its mechanism is event-driven, not polled. `AfterStart` walks every team and every formation and subscribes `OnBeforeFormationMovementOrderApplied` (`BattleReinforcementsSpawnController.cs:23`); `OnEndMission` walks the same set and unsubscribes (`BattleReinforcementsSpawnController.cs:48`). The handler raises a dirty flag for that formation's side when either the formation's current order or the incoming order is `Retreat` (`BattleReinforcementsSpawnController.cs:96`), and `OnMissionTick` services only the flagged sides and clears the flags (`BattleReinforcementsSpawnController.cs:33`). So this controller never scans for retreat orders itself — it reacts to movement orders being applied.

The decision itself is in `UpdateSide` (`BattleReinforcementsSpawnController.cs:54`): if the side is retreating and the spawner is still enabled it calls `StopSpawner(side)` and marks the side suspended; if the side is no longer retreating but was suspended it calls `StartSpawner(side)` and clears the flag.

## Mental Model

`IsBattleSideRetreating` is an AND over formations, not a side-level flag (`BattleReinforcementsSpawnController.cs:73`). It starts pessimistic — `result = true` (`BattleReinforcementsSpawnController.cs:75`) — and only sets it false when it finds a formation with `CountOfUnits > 0` whose current order is *not* `Retreat` (`BattleReinforcementsSpawnController.cs:82`). Empty formations are skipped, so a side whose troops are all dead still counts as retreating and keeps its spawner stopped. One formation still holding is enough to keep reinforcements flowing.

The dirty-flag indirection has a real consequence: the controller only acts on a retreat order it was told about. A movement order set through a path that does not raise `OnBeforeMovementOrderApplied` leaves `_sideRequiresUpdate[side]` false, `OnMissionTick` skips the side entirely, and reinforcements keep arriving during the retreat. The handler's own belt-and-braces check of the *current* order as well as the incoming one (`BattleReinforcementsSpawnController.cs:96`) narrows that window but does not close it. If your mod changes a formation's movement order directly, call the spawner yourself rather than trusting this controller to notice.

`_sideReinforcementSuspended` is a latch, not a query of the spawner. `StopSpawner` is only called on the transition into the suspended state, and the guard `!_sideReinforcementSuspended[(int)side] && _missionAgentSpawnLogic.IsSideSpawnEnabled(side)` (`BattleReinforcementsSpawnController.cs:58`) means that if something *else* disabled the spawner first, this controller records the side as suspended anyway and will later call `StartSpawner` on a spawner it never stopped.

Two hard dependencies bound the type. `_missionAgentSpawnLogic` is fetched through the interface `IMissionAgentSpawnLogic` (`BattleReinforcementsSpawnController.cs:13`) and never null-checked, so a mission without that behaviour fails inside `UpdateSide`. And all three arrays are length 2 indexed by `(int)side` (`BattleReinforcementsSpawnController.cs:98`), which is safe only because a battle has exactly two sides — a `BattleSideEnum.None` or `NumberOfSides` index would be an `IndexOutOfRangeException`.

The event subscription is symmetric and correct: subscribed in `AfterStart`, unsubscribed in `OnEndMission`. If you ever add the behaviour to a mission that never reaches `OnEndMission`, the formations keep a live delegate reference to this object for as long as they live.

## How to use

**Getting one.** It is a plain `MissionLogic`. The battle mission definitions add one directly — `new BattleReinforcementsSpawnController()` (`SandBoxMissions.cs:448`) — and you can do the same, or add it as a mission behaviour before the mission starts, alongside a behaviour that implements `IMissionAgentSpawnLogic` (`MissionAgentSpawnLogic` is the shipped one). Nothing else constructs it.

**Typical use** — adding it, and reading the spawner state yourself:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class MyReinforcementRules
{
    public static void Install(Mission mission)
    {
        if (mission.GetMissionBehavior<BattleReinforcementsSpawnController>() == null)
        {
            // Must be in place before AfterStart: it subscribes there.
            mission.AddMissionBehavior(new BattleReinforcementsSpawnController());
        }
    }

    public static bool ReinforcementsSuspended(Mission mission, BattleSideEnum side)
    {
        IMissionAgentSpawnLogic spawner =
            mission.GetMissionBehavior<IMissionAgentSpawnLogic>();

        return spawner != null && !spawner.IsSideSpawnEnabled(side);
    }

    // Call this yourself if you set a retreat order directly, because the
    // controller only reacts to OnBeforeMovementOrderApplied.
    public static void ApplyRetreat(Formation formation)
    {
        formation.SetMovementOrder(MovementOrder.MovementOrderRetreat);
    }
}
```

`IMissionAgentSpawnLogic` exposes exactly the three members this controller uses: `StartSpawner(BattleSideEnum)`, `StopSpawner(BattleSideEnum)` and `IsSideSpawnEnabled(BattleSideEnum)` (`IMissionAgentSpawnLogic.cs:11`).

**Most common mistake:** setting the movement order to `Retreat` and assuming reinforcements stop.

```csharp
formation.SetMovementOrder(MovementOrder.MovementOrderRetreat);
// nothing visibly changes: _sideRequiresUpdate[side] stays false
```

The controller updates the spawner on the *next* mission tick and only if the movement-order event reached it (`BattleReinforcementsSpawnController.cs:33`). If your order never reaches the handler, the side keeps receiving reinforcements while it runs away, which reads as "the retreat is not respected" rather than as a mod bug. If you need it immediate, call `spawner.StopSpawner(side)` yourself — and remember the controller will still call `StartSpawner` later if it concludes the side is no longer retreating.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleReinforcementsSpawnController>();
```

## See Also

- [Area Index](../)
- [IMissionAgentSpawnLogic — the interface whose spawner it drives](../IMissionAgentSpawnLogic)
- [MissionAgentSpawnLogic — the shipped implementation of that interface](../MissionAgentSpawnLogic)
- [中文页面](../../../../zh/api/mission-ext/BattleReinforcementsSpawnController)