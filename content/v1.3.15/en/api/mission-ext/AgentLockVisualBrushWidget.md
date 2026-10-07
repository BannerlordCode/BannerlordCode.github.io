---
title: "AgentLockVisualBrushWidget"
description: "Auto-generated class reference for AgentLockVisualBrushWidget."
---
# AgentLockVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentLockVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentLockVisualBrushWidget.cs`

## Overview

`AgentLockVisualBrushWidget` is a mission-HUD `BrushWidget` that draws the small marker the game places on
an agent it is tracking — the order-of-battle / formation-class lock indicator. It carries two pieces of
state and nothing else: `Position`, a screen-space `Vec2`, and `LockState`, an integer visual state.

It is entirely driven from outside. The view model that feeds it is
`MissionAgentLockItemVM`, which exposes both members as `[DataSourceProperty]` bindings
(`MissionAgentLockItemVM.cs:37`, `MissionAgentLockItemVM.cs:57`) and declares the matching
`MissionAgentLockItemVM.LockStates` enum with `Possible` and `Active`
(`MissionAgentLockItemVM.cs:80`). No game code constructs the widget: it comes from the HUD prefab.

The class does the positioning itself every frame. `OnLateUpdate` writes
`ScaledPositionXOffset = Position.X - Size.X / 2f` and the same for Y
(`AgentLockVisualBrushWidget.cs:18`) — so `Position` is the *centre* of the brush, not its top-left
corner.

## Mental Model

Read `LockState` as an enum with a hole in it, and `Position` as a centre point. The boundaries:

- Only `0` and `1` do anything. `UpdateVisualState` maps `0` to the `"Possible"` state and `1` to
  `"Active"`; every other value falls through the `lockState != 1` early return with no `SetState` call at
  all (`AgentLockVisualBrushWidget.cs:26`). The backing field starts at `-1`
  (`AgentLockVisualBrushWidget.cs:85`), so before the view model says anything the brush keeps whatever
  state the prefab gave it. Pushing an out-of-range value such as `2` is silently ignored and the *previous*
  state stays on screen — there is no "hide" path in this class.
- The setter short-circuits on an unchanged value (`AgentLockVisualBrushWidget.cs:72`), so re-selecting the
  same lock state produces no `SetState` and no `OnPropertyChanged`.
- Unlike some sibling brush widgets, this one never calls `RegisterBrushStatesOfWidget()`. Its states must
  already be resolvable on the brush, so the `"Possible"` and `"Active"` visual states have to exist in the
  prefab you reuse it in.

## How to use

**Getting one.** The HUD prefab builds it from the single-`UIContext` constructor at
`AgentLockVisualBrushWidget.cs:12`; there is no code-side construction site in the 1.3.15 tree. From a
mission behaviour you write into the instance the screen already holds, or you supply your own
`MissionAgentLockItemVM`-shaped data source for the prefab's bindings.

**Typical use** — pinning a marker over an agent you have just locked:

```csharp
public class LockMarkerDriver : MissionLogic
{
    private readonly MissionAgentLockItemVM _item;   // the bound data source
    private readonly Agent _target;
    private readonly Func<Vec2> _projectToScreen;    // your mission-screen projection

    public LockMarkerDriver(MissionAgentLockItemVM item, Agent target, Func<Vec2> projectToScreen)
    {
        _item = item; _target = target; _projectToScreen = projectToScreen;
    }

    public override void OnMissionTick(int tick)
    {
        if (_target == null || !_target.IsActive()) { return; }

        // Position is the brush CENTRE - OnLateUpdate subtracts half of Size itself
        // (AgentLockVisualBrushWidget.cs:21), so pass the projected point unchanged.
        _item.UpdatePosition(_projectToScreen());                            // MissionAgentLockItemVM.cs:28

        // Possible(0) -> "Possible", Active(1) -> "Active"; other values are ignored
        // (AgentLockVisualBrushWidget.cs:26, enum at MissionAgentLockItemVM.cs:80)
        _item.SetLockState(MissionAgentLockItemVM.LockStates.Active);
    }
}
```

**The mistake that bites.** Treating `Position` as a top-left corner. The widget subtracts half of its own
measured `Size` on both axes every late update, so feeding it an already-offset position shifts the marker
by exactly half the brush in both directions — and because it re-derives the offset every frame, "fixing" it
by moving the value is the only thing that ever works; adjusting the prefab's layout position fights the
code and loses.



## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentLockVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AgentWeaponPassiveUsageVisualBrushWidget](../AgentWeaponPassiveUsageVisualBrushWidget)
- [AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [FormationFocusedMarkerWidget](../FormationFocusedMarkerWidget)
- [中文页面](../../../../zh/api/mission-ext/AgentLockVisualBrushWidget)