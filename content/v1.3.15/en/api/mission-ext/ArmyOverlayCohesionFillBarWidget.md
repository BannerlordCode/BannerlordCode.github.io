---
title: "ArmyOverlayCohesionFillBarWidget"
description: "Auto-generated class reference for ArmyOverlayCohesionFillBarWidget."
---
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Menu/Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## Overview

`ArmyOverlayCohesionFillBarWidget` is a `FillBarWidget` in the map-screen army menu
(`TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay`). It extends `FillBarWidget` with two
booleans — `IsCohesionWarningEnabled` and `IsArmyLeader` — and uses them to pick the *visual state* of the
bar's fill brush: `"Default"`, `"WarningNormal"`, or `"WarningLeader"`
(`ArmyOverlayCohesionFillBarWidget.cs:29`).

Both booleans come from the army-menu view model, not from the widget. `ArmyMenuOverlayVM` refresh sets
`IsCohesionWarningEnabled = army.Cohesion <= 30f` (`ArmyMenuOverlayVM.cs:190`) against its own
`CohesionWarningMin = 30f` constant (`ArmyMenuOverlayVM.cs:577`), and computes leadership separately
(`ArmyMenuOverlayVM.cs:191`). The widget itself holds no `Army` reference and does no cohesion arithmetic;
the prefab binds both properties. Nothing in the 1.3.15 tree constructs the type.

## Mental Model

Read it as a *warning skin on an existing fill bar*, not as the bar itself. The boundaries that matter:

- **It only reaches the fill brush through a cast.** `DetermineBarAnimState` starts with
  `base.FillWidget as BrushWidget` and gives up silently if that cast fails
  (`ArmyOverlayCohesionFillBarWidget.cs:32`). If your prefab declares `FillWidget` as anything other than
  a `BrushWidget`, both booleans become no-ops with no warning and no exception.
- **Each setter runs the update twice, by design.** Both setters call `DetermineBarAnimState()` and then
  raise the private `_isWarningDirty` flag (`ArmyOverlayCohesionFillBarWidget.cs:78`,
  `ArmyOverlayCohesionFillBarWidget.cs:101`), and `OnLateUpdate` calls it a third time on the next frame
  (`ArmyOverlayCohesionFillBarWidget.cs:21`). On the leader path the repeat is what restarts the pulsing
  animation via `BrushRenderer.RestartAnimation()` (`ArmyOverlayCohesionFillBarWidget.cs:39`); on the
  non-leader path it just re-applies `"WarningNormal"`.
- **Leadership is checked second.** When the warning is on and the current state is already
  `"WarningLeader"`, the method restarts the animation and returns before it ever looks at `IsArmyLeader`
  (`ArmyOverlayCohesionFillBarWidget.cs:37`). Toggling `IsArmyLeader` from true to false therefore restarts
  the pulse once and only switches to `"WarningNormal"` on the following refresh — the flag order in the
  prefab matters for how the transition looks.
- The `_isWarningDirty` flag is a one-shot latch that starts `true`, so the very first late update applies
  the state even if nobody ever set a property.

## How to use

**Getting one.** The army-menu prefab builds it via the single-`UIContext` constructor at
`ArmyOverlayCohesionFillBarWidget.cs:12`. To feed it from a mod, either bind the two properties to your own
data source in XML, or write to the instance the menu screen holds.

**Typical use** — showing the cohesion warning from a custom army panel:

```csharp
public static class CohesionBarBinder
{
    // Called when the army menu is opened and whenever the panel refreshes.
    public static void Bind(ArmyOverlayCohesionFillBarWidget bar, Army army)
    {
        if (bar == null || army == null || Campaign.Current == null) { return; }

        // 30f is the stock threshold (ArmyMenuOverlayVM.cs:190, constant at :577)
        bar.IsCohesionWarningEnabled = army.Cohesion <= 30f;

        // Must be set AFTER the warning flag: DetermineBarAnimState reads both
        // (ArmyOverlayCohesionFillBarWidget.cs:35), and the leader branch returns first (:37).
        // Army.cs:659 uses the same LeaderParty.IsMainParty test.
        bar.IsArmyLeader = army.LeaderParty != null && army.LeaderParty.IsMainParty;
    }
}
```

**The mistake that bites.** Setting `IsArmyLeader` first and `IsCohesionWarningEnabled` second in the same
refresh. The first setter already runs `DetermineBarAnimState`, which takes the `"WarningLeader"` branch
and returns early if the brush was already in that state — so with a leader-owned army the flag order
decides whether the bar ends up on `"WarningNormal"` or `"WarningLeader"`, and swapping the two lines is
enough to make the pulse appear to never start.



## Key Properties

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ArmyOverlayCohesionFillBarWidget widget = ...;
```

## See Also

- [Area Index](../)
- [ArmyOverlayWidget](../ArmyOverlayWidget)
- [AutoClosePopupWidget](../AutoClosePopupWidget)
- [ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [中文页面](../../../../zh/api/mission-ext/ArmyOverlayCohesionFillBarWidget)