---
title: "ClanFinancePaymentSliderWidget"
description: "Auto-generated class reference for ClanFinancePaymentSliderWidget."
---
# ClanFinancePaymentSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs`

## Overview

`ClanFinancePaymentSliderWidget` is a `SliderWidget` in the clan-finance screen that renders a payment as a
two-sided comparison: how much the clan currently holds versus what the player is about to spend or
withdraw. It adds four child-widget slots to the base slider — `InitialFillWidget`, `NewIncreaseFillWidget`,
`NewDecreaseFillWidget` and `CurrentRatioIndicatorWidget`
(`ClanFinancePaymentSliderWidget.cs:47`) — plus three integers: `CurrentSize`, `TargetSize` and `SizeLimit`.

All of the layout is recomputed in `OnLateUpdate` (`ClanFinancePaymentSliderWidget.cs:18`). The indicator is
placed at `Size.X * (CurrentSize / SizeLimit)` minus half its own width, clamped to the slider
(`ClanFinancePaymentSliderWidget.cs:20`). The base slider's handle is then compared against the indicator:
handle to the right fills `NewIncreaseFillWidget` (`ClanFinancePaymentSliderWidget.cs:23`), handle to the
left fills `NewDecreaseFillWidget` (`ClanFinancePaymentSliderWidget.cs:29`), and equal positions zero both
(`ClanFinancePaymentSliderWidget.cs:35`).

The widget is created by the clan-finance prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`ClanFinancePaymentSliderWidget.cs:12`) is all the framework requires.

## Mental Model

Read it as a three-number widget with no property notification and a non-standard update order. The
boundaries:

- **`OnLateUpdate` calls `base.OnLateUpdate(dt)` last, not first** (`ClanFinancePaymentSliderWidget.cs:40`).
  Every measurement above — including `base.Size` and `base.Handle.PositionXOffset` — is taken against the
  base slider's state as it was *before* this frame's base update, so the layout is always one frame behind
  what the base slider just computed.
- **None of the seven setters raise a change notification.** `InitialFillWidget`
  (`ClanFinancePaymentSliderWidget.cs:57`), `NewIncreaseFillWidget`
  (`ClanFinancePaymentSliderWidget.cs:76`), `NewDecreaseFillWidget`
  (`ClanFinancePaymentSliderWidget.cs:95`), `CurrentRatioIndicatorWidget`
  (`ClanFinancePaymentSliderWidget.cs:114`), `CurrentSize` (`ClanFinancePaymentSliderWidget.cs:133`),
  `TargetSize` (`ClanFinancePaymentSliderWidget.cs:152`) and `SizeLimit`
  (`ClanFinancePaymentSliderWidget.cs:171`) all just assign the backing field. They still short-circuit on
  an unchanged value, but nothing listens. A data-binding path that expects `OnPropertyChanged` here gets
  silence.
- **`TargetSize` is never read by this class.** It is stored and returned, and it appears nowhere in the
  layout maths — only `CurrentSize` and `SizeLimit` are used (`ClanFinancePaymentSliderWidget.cs:20`).
  Whatever "target" concept you infer from the name lives in the view model.
- **`SizeLimit` defaults to `0`.** `CurrentSize / (float)SizeLimit` then divides by zero
  (`ClanFinancePaymentSliderWidget.cs:20`); the resulting infinity is clamped into `[0, Size.X]` and the
  indicator pins to the far right. A prefab that forgets to bind `SizeLimit` looks like "always full" rather
  than broken.
- The two fill branches treat the handle's `PositionXOffset` differently: the increase branch treats it as a
  centre (`ClanFinancePaymentSliderWidget.cs:25`), the decrease branch adds `Handle.Size.X / 2f` to
  convert it to an edge (`ClanFinancePaymentSliderWidget.cs:31`). That is not a typo you can assume away — it
  is what makes the two bars meet flush at the handle.

## How to use

**Getting one.** Reference it from the clan-finance prefab and bind all four child widgets plus `SizeLimit`
and `CurrentSize`. There is no code-side construction path.

**Typical use** — pointing the slider at a clan's treasury:

```csharp
public class ClanFinanceSliderBinder : MissionBehavior
{
    private readonly ClanFinancePaymentSliderWidget _slider;
    private readonly Clan _clan;

    public void Refresh()
    {
        if (_slider == null || _clan == null || Campaign.Current == null) { return; }

        // SizeLimit MUST be non-zero or the ratio divides by zero (ClanFinancePaymentSliderWidget.cs:20)
        // and the indicator clamps to the far right.
        _slider.SizeLimit = 1000;
        _slider.CurrentSize = _clan.Gold;

        // None of these setters notify (ClanFinancePaymentSliderWidget.cs:133); the layout is
        // recomputed from them in OnLateUpdate instead.
        Debug.Print("clan gold ratio: " + _slider.CurrentSize + "/" + _slider.SizeLimit);
    }
}
```

**The mistake that bites.** Treating `TargetSize` as the value the slider is aiming at. The class never
reads it — the visible bar is driven entirely by the base `SliderWidget`'s handle position and by
`CurrentSize` / `SizeLimit` (`ClanFinancePaymentSliderWidget.cs:20`). Setting `TargetSize` therefore changes
nothing on screen, and a mod that reads it back to show "you are paying X of Y" shows a number that was
never part of any calculation.



## Key Properties

| Name | Signature |
|------|-----------|
| `InitialFillWidget` | `public Widget InitialFillWidget { get; set; }` |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget { get; set; }` |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget { get; set; }` |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget { get; set; }` |
| `CurrentSize` | `public int CurrentSize { get; set; }` |
| `TargetSize` | `public int TargetSize { get; set; }` |
| `SizeLimit` | `public int SizeLimit { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanFinancePaymentSliderWidget widget = ...;
```

## See Also

- [Area Index](../)
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [ArmyOverlayCohesionFillBarWidget](../ArmyOverlayCohesionFillBarWidget)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/ClanFinancePaymentSliderWidget)