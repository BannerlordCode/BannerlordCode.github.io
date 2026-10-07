---
title: "MissionCustomBattlePreloadView"
description: "Auto-generated class reference for MissionCustomBattlePreloadView."
---
# MissionCustomBattlePreloadView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomBattlePreloadView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionCustomBattlePreloadView.cs`

## Overview

`MissionCustomBattlePreloadView` is a `MissionView` that does asset preloading during the mission's load window, not UI. Its three overrides split cleanly across the load phases: `OnPreMissionTick` collects the combatants' characters and the siege missiles and hands them to a `PreloadHelper` exactly once (`MissionCustomBattlePreloadView.cs:11`, `MissionCustomBattlePreloadView.cs:21`, `MissionCustomBattlePreloadView.cs:27`), `OnSceneRenderingStarted` then blocks on the meshes finishing (`MissionCustomBattlePreloadView.cs:32`, `MissionCustomBattlePreloadView.cs:34`), and `OnMissionStateDeactivated` clears the helper (`MissionCustomBattlePreloadView.cs:38`, `MissionCustomBattlePreloadView.cs:41`).

The `PreloadHelper` is created eagerly in the field initialiser (`MissionCustomBattlePreloadView.cs:45`), so the helper exists from construction, and the `_preloadDone` flag is what makes the expensive collection run only on the first pre-mission tick.

It is unreferenced in this tree. A search for the type name returns only its own declaration — no `ViewCreator` factory names it, and it carries no `[DefaultView]` or `[OverrideView]` attribute. In 1.3.0 nothing creates it.

## Mental Model

The design is a one-shot pipeline, and each guard in it is load-bearing.

`OnPreMissionTick` opens with `if (!this._preloadDone)` (`MissionCustomBattlePreloadView.cs:13`) and closes by setting it (`MissionCustomBattlePreloadView.cs:27`). Pre-mission ticks run many times during a load; without the flag the helper would be asked to preload the whole roster repeatedly. The flag is never reset, so this runs at most once per mission instance.

The character collection is built from `MissionCombatantsLogic.GetAllCombatants()` and then hard-cast to `CustomBattleCombatant` inside the loop (`MissionCustomBattlePreloadView.cs:19`). That cast is the sharp edge: `GetAllCombatants` returns `IBattleCombatant`, and the code assumes every element is a `CustomBattleCombatant`. A mission whose combatant list contains any other `IBattleCombatant` implementation throws `InvalidCastException` here, on the first pre-mission tick, with a stack that points into this view rather than into whatever registered the odd combatant. It is a view that only works in a custom battle, which the name promises, but the failure mode is a cast, not a graceful skip.

The siege part is guarded properly by contrast: `SiegeDeploymentMissionController` is null-checked before `GetSiegeMissiles()` is called (`MissionCustomBattlePreloadView.cs:23`, `MissionCustomBattlePreloadView.cs:25`). Note it looks the controller up on `Mission.Current` rather than through `base.Mission` — same object in practice, but the inconsistency matters if you ever use the view outside `Mission.Current`.

`OnSceneRenderingStarted` calling `WaitForMeshesToBeLoaded()` (`MissionCustomBattlePreloadView.cs:34`) is a *blocking* wait on the render thread's first frame. That is why the preload must be issued in `OnPreMissionTick` and the wait in `OnSceneRenderingStarted`: they are two different lifecycle points, and moving the wait earlier deadlocks against the scene that has not started rendering.

The helper's own work ties into `MissionLogic`: `PreloadHelper.PreloadCharacters` calls `Mission.Current.GetExtraEquipmentElementsForCharacter(basicCharacterObject, true)` (`PreloadHelper.cs:32`) for every character, which merges contributions from all 125+ `MissionLogic` implementations. Preloading is therefore downstream of your equipment logic even when this view is dead.

## How to use

**Getting it.** Construct it and add it as a mission behaviour during the load window, before the scene starts rendering:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

// Nothing in 1.3.0 instantiates this view; register it yourself, early.
Mission.Current.AddMissionBehavior(new MissionCustomBattlePreloadView());
```

Do it from the mission assembly or `OnAfterMissionCreated`, not from `OnMissionScreenTick` — by then `OnSceneRenderingStarted` may already have run and `WaitForMeshesToBeLoaded()` would be waiting on a request that was never issued.

To preloading with the stock behaviour but without the hard cast, drive `PreloadHelper` yourself from a behaviour:

```csharp
public class SafePreloader : MissionView
{
    private readonly PreloadHelper _helper = new PreloadHelper();
    private bool _done;

    public override void OnPreMissionTick(float dt)
    {
        if (_done)
        {
            return;
        }

        MissionCombatantsLogic combatants = Mission.GetMissionBehavior<MissionCombatantsLogic>();
        var list = new List<BasicCharacterObject>();
        if (combatants != null)
        {
            foreach (IBattleCombatant combatant in combatants.GetAllCombatants())
            {
                // as? instead of the stock (CustomBattleCombatant) cast at
                // MissionCustomBattlePreloadView.cs:19
                var custom = combatant as CustomBattleCombatant;
                if (custom != null)
                {
                    list.AddRange(custom.Characters);
                }
            }
        }

        _helper.PreloadCharacters(list);
        _done = true;
    }

    public override void OnSceneRenderingStarted()
    {
        _helper.WaitForMeshesToBeLoaded();
    }

    public override void OnMissionStateDeactivated()
    {
        _helper.Clear();
    }
}
```

**The mistake that crashes the load on a mixed-combatant mission.** Assuming this view is combatant-agnostic because it looks up combatants generically. It fetches `IBattleCombatant` and then casts each element to `CustomBattleCombatant` without a check (`MissionCustomBattlePreloadView.cs:19`), so any non-custom combatant in the mission throws `InvalidCastException` on the first pre-mission tick — before the battle starts, with the stack pointing at the view rather than at the mission definition that introduced the combatant.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the scene rendering started event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the mission state deactivated event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnMissionStateDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCustomBattlePreloadView view = ...;
```

## See Also

- [DeploymentView — the other unreferenced view in this namespace](../DeploymentView)
- [MissionSiegeEnginesLogic — where the preloaded siege missiles come from](../MissionSiegeEnginesLogic)
- [MissionLogic — the equipment contributions this preload pulls in](../MissionLogic)
- [Mission — behaviour list and the pre-mission tick order](../../mission/Mission)
- [Area Index](../)