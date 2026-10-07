---
title: "MissionMainAgentControlModeView"
description: "Auto-generated class reference for MissionMainAgentControlModeView."
---
# MissionMainAgentControlModeView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControlModeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentControlModeView.cs`

## Overview

`MissionMainAgentControlModeView` is, like several other view types in this namespace, an **empty marker class** — but it is the only marker of its kind that is created **automatically in every mission**, without anyone asking for it by name. It is nine lines: an attribute and a declaration (`MissionMainAgentControlModeView.cs:6`, `MissionMainAgentControlModeView.cs:7`). Everything it does comes from `MissionView`.

The `[DefaultView]` attribute is the whole mechanism. `ViewCreatorManager.CollectDefaults(Assembly)` walks an assembly's types and adds every type assignable to `MissionBehavior` that carries exactly one `DefaultView` attribute into the `_defaultTypes` hash set (`ViewCreatorManager.cs:267`). `CreateDefaultMissionBehaviors(Mission)` then iterates that set, resolves any `[OverrideView]` replacement the same way it does for named views, and calls `Activator.CreateInstance(type2)` on each — parameterless, no arguments (`ViewCreatorManager.cs:102`). `MissionScreen` is the single caller, at `MissionScreen.cs:696`. So this view is added to every mission's behaviour list whether or not the mission has a control mode UI.

The `Length == 1` in both `CollectDefaults` and `CheckOverridenViews` is a real constraint, not a stylistic choice: it requires exactly one occurrence, so `DefaultView` is declared `AllowMultiple = false` and inheriting it is impossible to do twice.

## Mental Model

The distinction from `MissionLeaveView`, `MissionObjectiveView`, `MissionSpectatorControlView` and `MissionOrderOfBattleUIHandler` is the difference between *declared* and *discovered*. Those four are created only when a `ViewCreator` factory method names them; this one is discovered by attribute scan and instantiated whether the mission wants it or not. That matters when you write your own default view: it will exist in **every** mission, including editor missions, hideout interiors and multiplayer lobbies, and it must therefore be cheap and must not assume `Mission.Current.MainAgent` exists.

`CreateDefaultMissionBehaviors` is also where the failure is loud rather than silent. If a default type resolves to something it cannot construct, the branch produces `Debug.FailedAssert("Failed to initialize default mission view type: {0}", ...)` (`ViewCreatorManager.cs:107`) instead of an entry in the list. So a `[DefaultView]` class with a non-public or non-parameterless constructor does not throw during mission start — it is dropped, with a failed assert, and your view simply is not there.

`MissionView` itself hands you `Input`, which is not an input service but a live dereference into the screen's scene layer: `this.MissionScreen.SceneLayer.Input` (`MissionView.cs:21`). The `MissionScreen` property has an `internal` setter (`MissionView.cs:13`), so it is assigned by the framework during behaviour initialisation. Touch `Input` before that and you get a null dereference rather than a graceful no-op.

## How to use

**Getting it.** Do not construct it and do not look it up — from a mission behaviour, read the control-mode state you need directly, or, if you want the view's presence, use the same lookup you would use for any behaviour:

```csharp
public class ControlModeProbe : MissionBehavior
{
    public override void OnBehaviorInitialize()
    {
        // The default view is already in the list by this point; this only tells you
        // whether an [OverrideView] replacement beat the stock empty class.
        MissionView stock = Mission.GetMissionBehavior<MissionMainAgentControlModeView>();
        Debug.Print("control-mode view present: " + (stock != null)
                    + " concrete=" + (stock == null ? "none" : stock.GetType().Name), false);
    }
}
```

To replace it, declare an override — it does not need `[DefaultView]` of its own, because the entry into `_defaultTypes` came from the base type:

```csharp
[OverrideView(typeof(MissionMainAgentControlModeView))]
public class MyControlModeView : MissionView
{
    // CreateDefaultMissionBehaviors uses Activator.CreateInstance(type2)
    // (ViewCreatorManager.cs:102): a parameterless constructor is mandatory.
    public MyControlModeView() { }

    public override void OnMissionScreenTick(float dt)
    {
        if (Input.IsGameKeyPressed(62))
        {
            Debug.Print("control mode toggled", false);
        }
    }
}
```

**The mistake that makes a default view silently absent.** Giving it a constructor that takes arguments. `CreateDefaultMissionBehaviors` calls `Activator.CreateInstance(type2)` with no argument array (`ViewCreatorManager.cs:102`), so there is no constructor it can satisfy; the type is skipped with a failed assert (`ViewCreatorManager.cs:107`) and every mission starts without your UI, with no exception in the log.

## See Also

- [MissionLeaveView — the marker created on demand rather than by attribute scan](../MissionLeaveView)
- [MissionObjectiveView — another on-demand marker](../MissionObjectiveView)
- [MissionOrderOfBattleUIHandler — a marker whose creator passes a constructor argument](../MissionOrderOfBattleUIHandler)
- [MissionGauntletMainAgentControlModeView — the Gauntlet replacement for this slot](../MissionGauntletMainAgentControlModeView)
- [Area Index](../)