---
title: "AgentWeaponPassiveUsageVisualBrushWidget"
description: "Auto-generated class reference for AgentWeaponPassiveUsageVisualBrushWidget."
---
# AgentWeaponPassiveUsageVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentWeaponPassiveUsageVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentWeaponPassiveUsageVisualBrushWidget.cs`

## Overview

`AgentWeaponPassiveUsageVisualBrushWidget` is a mission-HUD `BrushWidget` that reports whether the player
can couch a lance right now, and if so, whether the passive usage is already engaged. It owns a single
piece of state, the integer `CouchLanceState`, and maps it onto visibility plus one of four visual states
(`AgentWeaponPassiveUsageVisualBrushWidget.cs:17`).

The value is produced outside the widget. `MissionAgentStatusVM.GetCouchLanceState()` recomputes it and
pushes it into its own `CouchLanceState` property each refresh (`MissionAgentStatusVM.cs:105`), returning
`3` when the passive usage is already active, `2` when the conditions are merely met, and `0` otherwise
(`MissionAgentStatusVM.cs:361`). The widget instance comes from the mission HUD prefab — nothing in the
1.3.15 C# tree constructs it.

## Mental Model

Read it as a four-position enum with a deliberate dead zone, not a boolean. `UpdateVisualState` switches
on the value and handles only `0` to `3` (`AgentWeaponPassiveUsageVisualBrushWidget.cs:24`):

| value | effect |
|---|---|
| `0` | `IsVisible = false` |
| `1` | visible, state `"ConditionsNotMet"` |
| `2` | visible, state `"Possible"` |
| `3` | visible, state `"Active"` |

Three consequences follow, and they are the whole difficulty of this class:

- **State `1` is never produced by stock code.** `GetCouchLanceState()` returns only `0`, `2` or `3`
  (`MissionAgentStatusVM.cs:361`), so `"ConditionsNotMet"` exists in the prefab but nothing in the base game
  ever shows it. It is a reserved slot for mods that want a "near miss" band between "no" and "possible".
- **`0` is the only value that hides the brush.** The `default:` arm at
  `AgentWeaponPassiveUsageVisualBrushWidget.cs:41` returns without touching `IsVisible`, so the initial
  sentinel `-1` (`AgentWeaponPassiveUsageVisualBrushWidget.cs:71`) leaves the widget visible exactly as the
  prefab declares it. Writing `-1` to "reset" it does not reset it.
- **The first update registers brush states explicitly.** `UpdateVisualState` calls
  `RegisterBrushStatesOfWidget()` once, guarded by `_firstUpdate`
  (`AgentWeaponPassiveUsageVisualBrushWidget.cs:19`), because the very first assignment can arrive before
  the prefab's visual states exist. Sibling brush widgets in the same namespace do not do this, and the
  difference is visible if you copy the pattern.

## How to use

**Getting one.** The mission HUD prefab builds it through the single-`UIContext` constructor at
`AgentWeaponPassiveUsageVisualBrushWidget.cs:11`. From a mission behaviour, hold the instance the screen
created and write to it; the setter only fires when the value actually changes
(`AgentWeaponPassiveUsageVisualBrushWidget.cs:58`), so re-pushing the same integer is free but also does
nothing.

**Typical use** — extending the couch-lance indicator with the stock's unused band:

```csharp
public class CouchLanceOverlay : MissionLogic
{
    private readonly AgentWeaponPassiveUsageVisualBrushWidget _brush;
    private readonly Func<MissionWeapon> _wielded;

    public CouchLanceOverlay(AgentWeaponPassiveUsageVisualBrushWidget brush, Func<MissionWeapon> wielded)
    {
        _brush = brush; _wielded = wielded;
    }

    public override void OnMissionTick(int tick)
    {
        Agent main = Agent.Main;
        if (main == null) { return; }

        MissionWeapon weapon = _wielded();
        bool canCouch = main.HasMount && weapon != null && !weapon.IsEmpty;

        // 0 hides it and is the ONLY value that does (AgentWeaponPassiveUsageVisualBrushWidget.cs:27).
        // 1 is never emitted by the stock VM (MissionAgentStatusVM.cs:361) - it is ours to use.
        _brush.CouchLanceState = canCouch ? 1 : 0;
    }
}
```

**The mistake that bites.** Using `-1` (or any value outside `0..3`) as a reset value. Because the
`default:` arm does nothing at all, the brush keeps whatever state and visibility it had — so "clearing"
the indicator by writing `-1` leaves the last `"Active"` glyph frozen on screen for the rest of the
mission. Write `0`.



## Key Properties

| Name | Signature |
|------|-----------|
| `CouchLanceState` | `public int CouchLanceState { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentWeaponPassiveUsageVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [CrosshairWidget](../CrosshairWidget)
- [AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [中文页面](../../../../zh/api/mission-ext/AgentWeaponPassiveUsageVisualBrushWidget)