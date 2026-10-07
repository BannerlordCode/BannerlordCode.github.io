---
title: "CrosshairWidget"
description: "Auto-generated class reference for CrosshairWidget."
---
# CrosshairWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`

## Overview

`CrosshairWidget` is the shooting reticle and its hit feedback. It is a plain `Widget` that owns six
`BrushWidget` children — the four direction arrows `LeftArrow`, `RightArrow`, `TopArrow`, `BottomArrow`, plus
`HitMarker` and `HeadshotMarker` (`CrosshairWidget.cs:297` … `CrosshairWidget.cs:398`) — and exposes the
values that drive them: four opacities, `CrosshairAccuracy`, `IsTargetInvalid`, `IsVictimDead`,
`IsHumanoidHeadshot`, `ShowHitMarker`, and `CrosshairScale`.

`OnUpdate` does two things every frame (`CrosshairWidget.cs:17`). While visible it resizes itself to
`74 + CrosshairAccuracy * 300` in both axes (`CrosshairWidget.cs:22`) — the less accurate the shot, the bigger
the reticle. Then it copies the four opacity values onto the arrows' brushes' `AlphaFactor`
(`CrosshairWidget.cs:25` … `CrosshairWidget.cs:28`).

Hit feedback is event-driven rather than per-frame. `ShowHitMarker`'s setter runs `ShowHitMarkerChanged`,
which picks `"ShowDeath"` or `"Show"` from `IsVictimDead` and either switches state or *restarts the brush
animation* if the state is already correct (`CrosshairWidget.cs:57`). `IsHumanoidHeadshot`'s setter runs the
equivalent `ShowHeadshotMarkerChanged` (`CrosshairWidget.cs:73`). `IsTargetInvalid` applies `"Invalid"` or
`"Default"` to **every descendant** through `ApplyActionToAllChildrenRecursive`
(`CrosshairWidget.cs:183`), and `OnChildAdded` gives any newly added child the `"Invalid"` state up front
(`CrosshairWidget.cs:35`).

The widget is created by the mission HUD prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CrosshairWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a per-frame sizing job plus a set of one-shot visual triggers, and mind the cross-wiring in the
headshot path. The boundaries:

- **`HeadshotMarkerUpdated` touches the wrong widget.** It null-checks `HeadshotMarker` and then calls
  `this.HitMarker.AddState("Show")` (`CrosshairWidget.cs:52`). So rebinding `HeadshotMarker` registers the
  `"Show"` state on `HitMarker` instead. It only runs from the `HeadshotMarker` setter, so a rebind at
  runtime silently mis-registers the state and the marker shows the wrong visual until something else
  re-registers it.
- **The "already correct" branch restarts the animation instead of setting the state.** In
  `ShowHitMarkerChanged`, when `CurrentState` already matches, the method calls `RestartAnimation()` and
  returns (`CrosshairWidget.cs:69`). Repeatedly assigning `true` to `ShowHitMarker` is a no-op (the setter
  short-circuits), but a *rebind* of `HitMarker` is what actually re-triggers it.
- **`ShowHeadshotMarkerChanged` always restarts**, with no `else`
  (`CrosshairWidget.cs:84`) — unlike its hit-marker sibling, it restarts on every change, including changes
  of state.
- **`IsTargetInvalid` overwrites every descendant's state.** `ApplyActionToAllChildrenRecursive` sets each
  child to `"Invalid"` or `"Default"` (`CrosshairWidget.cs:185`), so any state a child had for its own
  reasons — the hit marker mid-animation, an arrow's own hover state — is discarded while the flag is true.
- **`CrosshairScale` is never read inside this class.** It is stored and notified
  (`CrosshairWidget.cs:219`, `CrosshairWidget.cs:226`) but appears nowhere else in the file; if it affects
  anything, it is through a `OnPropertyChanged` listener, not through this class's own layout. `OnUpdate`
  scales from `CrosshairAccuracy` instead (`CrosshairWidget.cs:22`).
- **The arrows are dereferenced without null checks in `OnUpdate`**
  (`CrosshairWidget.cs:25`), so all four must be bound or the first update throws.
- `SuggestedWidth` and `SuggestedHeight` are set to the same truncated integer
  (`CrosshairWidget.cs:22`), so the reticle is always square and always truncated toward zero.

## How to use

**Getting one.** Reference it from the mission HUD prefab, bind all six children, and drive the values from
your own aim/targeting logic each tick.

**Typical use** — sizing the reticle from accuracy and flashing the hit marker on a confirmed hit:

```csharp
public class CrosshairDriver : MissionLogic
{
    private readonly CrosshairWidget _crosshair;

    public override void OnMissionTick(float tick)
    {
        Agent main = Agent.Main;
        if (_crosshair == null || main == null) { return; }

        // 0..1 accuracy; OnUpdate turns it into 74 + accuracy*300 px on both axes
        // (CrosshairWidget.cs:22) and truncates to an int.
        _crosshair.CrosshairAccuracy = Math.Clamp(main.GetAgentFlags().HasAnyFlag(AgentFlag.CanWieldWeapon) ? 1f : 0.3f, 0f, 1f);

        // SetState is not needed: the setter calls ApplyActionToAllChildrenRecursive for you
        // (CrosshairWidget.cs:183). Every child gets "Invalid" or "Default".
        _crosshair.IsTargetInvalid = false;

        Debug.Print("reticle size now " + _crosshair.SuggestedWidth);
    }

    public void OnConfirmedHit(bool wasLethal)
    {
        if (_crosshair == null) { return; }

        // IsVictimDead selects "ShowDeath" vs "Show" (CrosshairWidget.cs:63); the setter
        // must change value for the marker to react at all.
        _crosshair.IsVictimDead = wasLethal;
        _crosshair.ShowHitMarker = true;
    }
}
```

**The mistake that bites.** Setting `ShowHitMarker = true` again to make the marker flash a second time. The
setter short-circuits on an unchanged value (`CrosshairWidget.cs:284`), so the second assignment does
nothing at all — no state change, no `RestartAnimation()`. And setting `ShowHitMarker = false` first does
not help either if `IsVictimDead` has not changed, because the chosen state name is identical and
`ShowHitMarkerChanged` then takes the "already correct" branch and restarts the animation with no visible
change (`CrosshairWidget.cs:69`). Toggle `IsVictimDead` or rebind the marker to force a fresh flash.



## Key Properties

| Name | Signature |
|------|-----------|
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `ShowHitMarker` | `public bool ShowHitMarker { get; set; }` |
| `LeftArrow` | `public BrushWidget LeftArrow { get; set; }` |
| `RightArrow` | `public BrushWidget RightArrow { get; set; }` |
| `TopArrow` | `public BrushWidget TopArrow { get; set; }` |
| `BottomArrow` | `public BrushWidget BottomArrow { get; set; }` |
| `HitMarker` | `public BrushWidget HitMarker { get; set; }` |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CrosshairWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CompassWidget](../CompassWidget)
- [AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CrosshairWidget)