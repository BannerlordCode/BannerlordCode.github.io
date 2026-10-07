---
title: "CircleLoadingAnimWidget"
description: "Auto-generated class reference for CircleLoadingAnimWidget."
---
# CircleLoadingAnimWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircleLoadingAnimWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`

## Overview

`CircleLoadingAnimWidget` is the game's standard spinner: a plain `Widget` that arranges whatever children it
has on a circle and rotates itself. Its children are the dots; the widget supplies the ring, the spin and a
fade-in / hold / fade-out loop.

Six plain auto-properties tune it, each with a default and **no change notification whatsoever**:
`NumOfCirclesInASecond = 0.5f`, `FullAlpha = 1f`, `CircleRadius = 50f`, `StaySeconds = 2f`,
`FadeInSeconds = 0.2f`, `FadeOutSeconds = 0.2f` (`CircleLoadingAnimWidget.cs:15`). They are read directly at
use time, so assigning one does take effect for the *next* frame's maths.

Child positions are computed once and then only when the child list changes. `_isChildPositionsDirty` is set
in the constructor and in `OnChildAdded` / `OnAfterChildRemoved`
(`CircleLoadingAnimWidget.cs:46`, `CircleLoadingAnimWidget.cs:50`,
`CircleLoadingAnimWidget.cs:57`); when it is set, each child is placed at
`cos/sin` of an evenly divided `360f / Children.Count` sweep, scaled by `CircleRadius`
(`CircleLoadingAnimWidget.cs:75`, `CircleLoadingAnimWidget.cs:79`).

The spin and fade state machine lives in `UpdateAlphaValues`, over the nested `VisualState` enum of
`FadeIn`, `Animating`, `FadeOut` (`CircleLoadingAnimWidget.cs:154`). The widget is created by the prefab
that uses it; nothing in the 1.3.15 tree constructs it.

## Mental Model

Read it as a fixed-lifetime looping animation with two clocks that do not agree. The boundaries:

- **`FullAlpha` is dead.** It is declared at `CircleLoadingAnimWidget.cs:20` and never read anywhere in the
  1.3.15 tree; `UpdateAlphaValues` lerps toward a hard-coded `1f`
  (`CircleLoadingAnimWidget.cs:108`) and returns a literal `1f` while animating
  (`CircleLoadingAnimWidget.cs:117`). Setting `FullAlpha = 0.5f` does nothing.
- **Changing `CircleRadius` does not move the dots.** Positions are only recomputed when
  `_isChildPositionsDirty` is set, and only child add/remove sets it
  (`CircleLoadingAnimWidget.cs:73`). The new radius takes effect only after the next child is added or
  removed.
- **Rotation and the fade timer use different clocks and different visibility gates.** Rotation advances
  only while `IsRecursivelyVisible()` (`CircleLoadingAnimWidget.cs:90`), but `_totalTime` accumulates in
  `OnParallelUpdate` unconditionally (`CircleLoadingAnimWidget.cs:99`). A hidden spinner burns through its
  stay and fade-out phases without spinning.
- **`_stayStartTime` is stamped once per cycle, on entering `Animating`**
  (`CircleLoadingAnimWidget.cs:112`), and the restart test then compares `_totalTime` against
  `_stayStartTime + StaySeconds + FadeOutSeconds` (`CircleLoadingAnimWidget.cs:126`). `StaySeconds = -1f`
  means "hold forever" — the `!= -1f` test at `CircleLoadingAnimWidget.cs:118` skips the fade-out.
- **With zero children the sweep divides by zero** (`CircleLoadingAnimWidget.cs:75`). It happens to be
  harmless because the following loop body never runs, but an empty spinner is a real degenerate state.
- The `else` arm of `UpdateAlphaValues` calls `Debug.FailedAssert`
  (`CircleLoadingAnimWidget.cs:133`); since the enum has exactly the three handled values, it is unreachable.

## How to use

**Getting one.** Nest your dot widgets inside a `CircleLoadingAnimWidget` in the prefab. They are positioned
automatically; the widget only ever calls `PositionXOffset` / `PositionYOffset` on them, so give each child a
fixed size.

**Typical use** — a spinner you can hold open until real work finishes:

```csharp
public class DeferredSpinner : MissionBehavior
{
    private readonly CircleLoadingAnimWidget _spinner;
    private bool _busy;

    public void BeginWork() { _busy = true; _spinner.IsVisible = true; }

    public void EndWork()
    {
        _busy = false;

        // -1f means "stay visible forever" (CircleLoadingAnimWidget.cs:118); the default 2f
        // would fade the spinner out on its own two seconds after it appeared.
        _spinner.StaySeconds = -1f;

        // CircleRadius only takes effect on the next child add/remove
        // (CircleLoadingAnimWidget.cs:73); FullAlpha is never read at all.
        Debug.Print("spinner holding: " + _busy.ToString());
    }
}
```

**The mistake that bites.** Expecting the spinner to hide itself when your operation completes. It has no
completion signal: the default `StaySeconds = 2f` simply fades it out two seconds after it finished fading
in, whatever your code is doing. Anything slower than two seconds shows a spinner that has already vanished,
and anything you set up to appear later than that appears and disappears before the work is done. Drive
`IsVisible` from your own state and use `StaySeconds = -1f` to hold it.



## Key Properties

| Name | Signature |
|------|-----------|
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond { get; set; }` |
| `FullAlpha` | `public float FullAlpha { get; set; }` |
| `CircleRadius` | `public float CircleRadius { get; set; }` |
| `StaySeconds` | `public float StaySeconds { get; set; }` |
| `FadeInSeconds` | `public float FadeInSeconds { get; set; }` |
| `FadeOutSeconds` | `public float FadeOutSeconds { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CircleLoadingAnimWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BrightnessDemoWidget](../BrightnessDemoWidget)
- [CharacterCreationOptionsItemWidget](../CharacterCreationOptionsItemWidget)
- [AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [中文页面](../../../../zh/api/mission-ext/CircleLoadingAnimWidget)