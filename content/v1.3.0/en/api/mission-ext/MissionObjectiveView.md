---
title: "MissionObjectiveView"
description: "Auto-generated class reference for MissionObjectiveView."
---
# MissionObjectiveView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionObjectiveView.cs`

## Overview

`MissionObjectiveView` is an **empty marker class** (`MissionObjectiveView.cs:6`) — a declaration with no body, deriving from `MissionView` and adding nothing. Its job is to be a named, replaceable slot for the mission objective bar. `ViewCreator.CreateMissionObjectiveView(Mission mission = null)` is the factory, and its body is `ViewCreatorManager.CreateMissionView<MissionObjectiveView>(mission != null, mission, Array.Empty<object>())` (`ViewCreator.cs:177`) — unlike most siblings it forwards the `isNetwork` flag from the mission's presence rather than hard-coding `false`.

The slot is occupied in practice by `MissionGauntletObjectiveView`, declared `[OverrideView(typeof(MissionObjectiveView))]`. `ViewCreatorManager.CheckOverridenViews` files it under `MissionObjectiveView` in `_actualViewTypes` (`ViewCreatorManager.cs:245`), and `CreateMissionView<T>` resolves the dictionary, checks the override's assembly against `ModuleHelper.GetActiveGameAssemblies()` (`ViewCreatorManager.cs:200`), and constructs it via `Activator.CreateInstance(type, parameters)` (`ViewCreatorManager.cs:206`), falling back to `Activator.CreateInstance<T>()` when there is none (`ViewCreatorManager.cs:208`).

## Mental Model

The marker is a *key*, not a base class you should derive from. `CreateMissionView<T>` returns `MissionView`, and when an override is present the object at runtime is not a `MissionObjectiveView` at all — it is the Gauntlet class, which inherits from `MissionView` and from the marker only nominally. That means:

Casting down to `MissionObjectiveView` to reach something you added there compiles and yields a usable-looking object, but calling your own added member through that cast throws `InvalidCastException` at runtime, because the actual instance is the override. The static return type is `MissionView` precisely to stop you.

The real content of this type lives on the mission side, not the view side. If you want to know what the objective bar should display, you read `Mission`'s objectives; the view only projects them. `MissionHintLogic` in this same area is the sibling slot that does hold state (`ActiveHint`, set through `SetActiveHint`).

The parameterless-constructor rule is the mechanical boundary. `Array.Empty<object>()` at `ViewCreator.cs:177` means an override must expose a zero-argument constructor; `CreateMissionView` uses `Activator.CreateInstance(type, parameters)` and the runtime binder picks the matching overload, throwing `MissingMethodException` if none fits.

## How to use

**Getting it.** Call the factory; it is internal to the screen layer and not on `Mission.Current`.

```csharp
MissionView objectiveBar = ViewCreator.CreateMissionObjectiveView(Mission.Current);
if (objectiveBar != null)
{
    Mission.Current.AddMissionBehavior(objectiveBar);
}
```

To supply your own objective bar, attribute the class and keep the constructor empty:

```csharp
[OverrideView(typeof(MissionObjectiveView))]
public class MyObjectiveView : MissionView
{
    public MyObjectiveView() { }   // ViewCreator.cs:177 passes Array.Empty<object>()

    public override void OnMissionScreenTick(float dt)
    {
        // MissionHintLogic is the in-mission slot that carries the active hint.
        MissionHintLogic hints = Mission.GetMissionBehavior<MissionHintLogic>();
        if (hints != null && hints.ActiveHint != null)
        {
            Debug.Print("hint active", false);
        }
    }
}
```

**The mistake that is invisible until someone casts.** Subclassing `MissionObjectiveView` and adding members, then expecting to call them. `CreateMissionObjectiveView` returns `MissionView` (`ViewCreator.cs:177`), and unless your subclass is also the registered `[OverrideView]` type the object it hands back is the Gauntlet class. Your members exist, compile, and are unreachable — and the cast that would find them throws `InvalidCastException` rather than returning null, so the failure lands at an unrelated-looking call site.

## See Also

- [MissionLeaveView — the same empty-marker pattern for the leave dialog](../MissionLeaveView)
- [MissionHintLogic — the mission-side slot that carries the hint this view projects](../MissionHintLogic)
- [MissionSpectatorControlView — another on-demand marker](../MissionSpectatorControlView)
- [Mission — behaviour lookup for the live mission](../../mission/Mission)
- [Area Index](../)