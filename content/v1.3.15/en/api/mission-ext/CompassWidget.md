---
title: "CompassWidget"
description: "Auto-generated class reference for CompassWidget."
---
# CompassWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs`

## Overview

`CompassWidget` is the mission compass strip — the horizontal band at the top of the battle screen. It is a
plain `Widget` that positions two different sets of children every frame from a normalised bearing:
`ItemContainerPanel` holds `CompassElementWidget` children (formation and objective pips), and
`MarkerContainerPanel` holds `CompassMarkerTextWidget` children (named markers). Both container properties
are `[DataSourceProperty]` (`CompassWidget.cs:105`, `CompassWidget.cs:125`).

`OnUpdate` calls two positioning passes (`CompassWidget.cs:19`). `HandleMarkerPositioning` is the simple one:
it maps each marker's `Position` into a margin and centres the marker on it, then hides markers sitting
exactly at either extreme (`CompassWidget.cs:98`). `HandleHorizontalPositioning` is the complex one: it maps
each element's position to a margin and then runs a hand-written collision pass that nudges elements apart
by 10 units and, when a stack would overflow the right edge, shifts the whole stack left to make room
(`CompassWidget.cs:50`, `CompassWidget.cs:55`).

The normalised coordinate is worth stating precisely: both passes compute
`(Position + 1f) * 0.5f` (`CompassWidget.cs:41`, `CompassWidget.cs:96`), so a child's `Position` is expected
in **-1 to 1**, not in degrees and not in 0 to 1.

The widget is created by the mission HUD prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CompassWidget.cs:13`) is all the framework requires.

## Mental Model

Read it as a per-frame layout engine over a normalised bearing axis, and mind the coordinate convention and
the casts. The boundaries:

- **`Position` is -1..1, not degrees.** Writing degrees into it puts every element far off the right edge,
  because `(180 + 1) * 0.5 = 90.5` clamps to the strip's end (`CompassWidget.cs:42`).
- **The item path reserves 50 units at the edges; the marker path does not.**
  `HandleHorizontalPositioning` computes its right limit as `ParentWidget.MeasuredSize.X * _inverseScaleToUse - 50f`
  (`CompassWidget.cs:35`), while `HandleMarkerPositioning` uses the full width
  (`CompassWidget.cs:92`). Markers can therefore run right up to the ends where pips cannot.
- **Child types are cast with `as` and dereferenced immediately.** `ItemContainerPanel.GetChild(i) as CompassElementWidget`
  is used on the next line with no null check (`CompassWidget.cs:38`), so putting any non-`CompassElementWidget`
  inside the item container is an immediate null reference on the first update.
- **The collision pass only ever shifts elements right, and shifts the whole stack left on overflow**
  (`CompassWidget.cs:55`). Its comparison threshold is a hard-coded `10f`
  (`CompassWidget.cs:50`), not the widgets' measured widths, so elements of very different sizes still
  overlap.
- **`IsHidden` is treated asymmetrically.** The item pass *reads* `compassElementWidget.IsHidden` to skip
  hidden pips (`CompassWidget.cs:39`); the marker pass *writes* it to hide edge markers
  (`CompassWidget.cs:98`). Setting `IsHidden` on a marker from outside is overwritten every frame.
- Layout happens in `OnUpdate`, not `OnLateUpdate`, so it runs before the container's own measurement
  settles.

## How to use

**Getting one.** Reference it from the mission HUD prefab with both containers bound, then add
`CompassElementWidget` and `CompassMarkerTextWidget` children and set their `Position` in **-1..1**.

**Typical use** — publishing a squad's bearing on the compass:

```csharp
public class CompassBearingDriver : MissionLogic
{
    private readonly CompassWidget _compass;
    private readonly CompassElementWidget _element;
    private readonly Func<float> _normalisedBearing;   // -1 left .. 0 ahead .. +1 right

    public void Refresh()
    {
        if (_compass == null || _element == null) { return; }

        // Position is normalised to -1..1, not degrees (CompassWidget.cs:41).
        _element.Position = _normalisedBearing();

        // The collision pass skips hidden elements entirely (CompassWidget.cs:39).
        _element.IsHidden = false;

        if (_compass.ItemContainerPanel.ChildCount == 0)
        {
            Debug.Print("compass has no items yet");
        }
    }
}
```

**The mistake that bites.** Writing a bearing in degrees into `Position`. Because the layout maps with
`(Position + 1f) * 0.5f` (`CompassWidget.cs:41`), a value of `180` clamps to the far right edge and the
element stacks there permanently — and because the collision pass then keeps nudging same-positioned
elements 10 units apart and shifting stacks left to stay in bounds
(`CompassWidget.cs:55`), the rest of the compass visibly rearranges around the bogus pip. Normalise to
-1..1 yourself.



## Key Properties

| Name | Signature |
|------|-----------|
| `ItemContainerPanel` | `public Widget ItemContainerPanel { get; set; }` |
| `MarkerContainerPanel` | `public Widget MarkerContainerPanel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CompassWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CompassElementWidget](../CompassElementWidget)
- [CompassMarkerTextWidget](../CompassMarkerTextWidget)
- [CrosshairWidget](../CrosshairWidget)
- [中文页面](../../../../zh/api/mission-ext/CompassWidget)