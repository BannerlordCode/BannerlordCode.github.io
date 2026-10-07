---
title: "MissionLeaveView"
description: "Auto-generated class reference for MissionLeaveView."
---
# MissionLeaveView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionLeaveView.cs`

## Overview

`MissionLeaveView` is an **empty marker class**: eight lines, a class declaration and nothing else (`MissionLeaveView.cs:6`). It derives from `MissionView` and adds no members, so all of its behaviour is inherited. Its entire purpose is to exist as a *named slot* that the view layer can be asked for by type and that a mod can replace with a different implementation.

That slot is filled by `ViewCreator.CreateMissionLeaveView()` (`ViewCreator.cs:133`), whose whole body is `ViewCreatorManager.CreateMissionView<MissionLeaveView>(false, null, Array.Empty<object>())` (`ViewCreator.cs:135`) — note that it passes `mission: null` and `isNetwork: false`. It is never constructed by hand and it is never added by a mod; it comes into existence when the mission screen asks for a leave-mission confirmation UI, and it dies with the mission.

The replacement mechanism is what makes the emptiness sensible. `MissionGauntletLeaveView` is declared `[OverrideView(typeof(MissionLeaveView))]`, and `ViewCreatorManager.CheckOverridenViews` walks every assembly, finds `MissionView`-assignable types carrying exactly one `OverrideView` attribute, and files the replacement under the overridden base type in the `_actualViewTypes` dictionary (`ViewCreatorManager.cs:245`). `CreateMissionView<T>` then resolves that dictionary, picks the override whose assembly is in `ModuleHelper.GetActiveGameAssemblies()` (`ViewCreatorManager.cs:200`), and instantiates it with `Activator.CreateInstance(type, parameters)` (`ViewCreatorManager.cs:206`) — falling back to `Activator.CreateInstance<T>()` when there is no override (`ViewCreatorManager.cs:208`).

## Mental Model

This is the pattern to internalise, because it repeats for `MissionObjectiveView`, `MissionSpectatorControlView` and `MissionOrderOfBattleUIHandler`: the legacy view classes are deliberately hollow, and the *name* is the API.

The consequences that bite:

`Activator.CreateInstance` means the type you get back is not statically typed as `MissionLeaveView` — it is whatever the override resolved to, cast to `MissionView` (`ViewCreatorManager.cs:206`). So `CreateMissionLeaveView()` returns a `MissionView`, not a `MissionLeaveView`, and nothing on the returned object can be reached through the marker type. There is nothing to reach: the marker has no members. A mod that wants to *add* behaviour cannot subclass the marker and expect its code to run, because the Gauntlet override already occupies the slot and wins on assembly precedence.

To add behaviour you therefore do one of two things: put it on a **mission behaviour** you register yourself, or register your own `[OverrideView(typeof(MissionLeaveView))]` subclass — in which case your class must be reachable from an assembly in `ModuleHelper.GetActiveGameAssemblies()` or the dictionary lookup falls through to the stock empty class and your code silently never runs.

The `parameters` array matters for the marker types that take arguments. `MissionLeaveView` is created with `Array.Empty<object>()`, so any override you write must have a constructor that accepts zero arguments. `MissionOrderOfBattleUIHandler` is the contrast: it is created with a one-element array holding an `OrderOfBattleVM` (`ViewCreator.cs:105`), so its override must accept exactly that shape or `Activator.CreateInstance` throws at mission-screen construction.

## How to use

**Getting it.** Call the view creator — never `new MissionLeaveView()`, and never `Mission.Current.GetMissionBehavior<MissionLeaveView>()`: the instance is created by the mission screen and handed to `MissionViewsContainer`, not registered where a behaviour lookup would find it.

```csharp
// Open the stock leave-mission confirmation, honouring any [OverrideView] replacement.
MissionView leave = ViewCreator.CreateMissionLeaveView();
if (leave != null)
{
    Mission.Current.AddMissionBehavior(leave);
}
```

To contribute your own implementation instead, attribute it and give it the parameterless constructor the creator expects:

```csharp
[OverrideView(typeof(MissionLeaveView))]
public class MyLeaveView : MissionView
{
    // ViewCreatorManager.CreateMissionView passes Array.Empty<object>() here
    // (ViewCreator.cs:135), so a constructor taking arguments will throw.
    public MyLeaveView() { }

    public override void OnMissionScreenTick(float dt)
    {
        if (Input.IsGameKeyPressed(27))   // Escape
        {
            Debug.Print("leaving", false);
        }
    }

    public override bool OnEscape() => true;   // returning true consumes the Escape key
}
```

**The mistake that produces a mod that loads and does nothing.** Writing the override but forgetting that `_actualViewTypes` is consulted per assembly and matched against `ModuleHelper.GetActiveGameAssemblies()`. If your assembly is not in the active set, `CreateMissionView<T>` never selects your type and instantiates the empty `MissionLeaveView` instead (`ViewCreatorManager.cs:208`). There is no exception and no log line — the view exists, is added to the mission, and does nothing, which is indistinguishable from your code never running.

## See Also

- [MissionObjectiveView — the same empty-marker pattern for the objective bar](../MissionObjectiveView)
- [MissionSpectatorControlView — the marker for spectator mode](../MissionSpectatorControlView)
- [MissionOrderOfBattleUIHandler — the marker that does take a constructor argument](../MissionOrderOfBattleUIHandler)
- [MissionMainAgentControlModeView — the one marker created automatically as a default](../MissionMainAgentControlModeView)
- [Area Index](../)