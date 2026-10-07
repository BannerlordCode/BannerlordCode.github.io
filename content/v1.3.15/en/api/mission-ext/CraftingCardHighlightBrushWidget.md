---
title: "CraftingCardHighlightBrushWidget"
description: "Auto-generated class reference for CraftingCardHighlightBrushWidget."
---
# CraftingCardHighlightBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingCardHighlightBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingCardHighlightBrushWidget.cs`

## Overview

`CraftingCardHighlightBrushWidget` is a 38-line `BrushWidget` whose only job is to start the crafting
card's highlight animation. It holds two booleans and a single call: `BrushRenderer.RestartAnimation()`
(`CraftingCardHighlightBrushWidget.cs:27`).

The timing is the whole class, and it is unusual. `_firstFrame` starts `true`. On the first
`OnParallelUpdate` where the widget is visible, the class clears `_firstFrame` and **returns without
starting anything** (`CraftingCardHighlightBrushWidget.cs:20`). Only on the *second* visible frame does it
restart the animation and latch `_playingAnimation = true`
(`CraftingCardHighlightBrushWidget.cs:25`).

`_playingAnimation` is never cleared. The highlight therefore plays exactly once per widget instance, ever —
not once per hover, not once per craft, and not again when the widget is hidden and re-shown.

The widget is created by the crafting prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CraftingCardHighlightBrushWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a fire-once latch, not as a repeating animation. The boundaries:

- **Visibility gates the latch, not the animation.** If the widget is never visible, `_firstFrame` is never
  consumed and the animation never starts — no error, no warning.
- **The first visible frame is consumed and wasted** (`CraftingCardHighlightBrushWidget.cs:20`). If the
  widget is shown for exactly one frame and hidden again, the highlight is consumed without ever playing.
- **Hiding and re-showing does not replay.** Contrast `ArmyOverlayCohesionFillBarWidget`, which restarts the
  brush animation each time its state is re-applied (`ArmyOverlayCohesionFillBarWidget.cs:39`). Here
  `_playingAnimation` is write-once.
- **The work happens in `OnParallelUpdate`, not `OnLateUpdate`** (`CraftingCardHighlightBrushWidget.cs:17`),
  so it runs during the parallel phase, before late update ordering is settled.
- There is no property and no notification: nothing in this class can be bound or configured.

## How to use

**Getting one.** Reference it from the crafting-card prefab and keep it visible for the duration of the
craft interaction. To replay the highlight, you must create a fresh widget instance (or drive the underlying
brush animation yourself through `BrushRenderer.RestartAnimation()`).

**Typical use** — putting a highlight behind the card being crafted:

```csharp
public class CraftHighlightDriver : MissionBehavior
{
    private readonly CraftingCardHighlightBrushWidget _highlight;
    private bool _crafting;

    public void BeginCraft() { _crafting = true; _highlight.IsVisible = true; }
    public void EndCraft()   { _crafting = false; _highlight.IsVisible = false; }

    public override void OnMissionTick(float tick)
    {
        // One-shot: the animation is latched on the second visible frame and never repeats
        // (CraftingCardHighlightBrushWidget.cs:25). To play it again, restart it yourself.
        if (_crafting && _highlight != null)
        {
            _highlight.BrushRenderer.RestartAnimation();
        }
    }
}
```

**The mistake that bites.** Assuming the highlight replays each time the player returns to a card. The
`_playingAnimation` latch is never reset (`CraftingCardHighlightBrushWidget.cs:28`), so the second craft, the
third, and every one after it shows a static highlight with no animation — which reads as a broken prefab
rather than a one-shot widget. Call `BrushRenderer.RestartAnimation()` yourself when you need a repeat.



## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingCardHighlightBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CraftingMaterialVisualBrushWidget](../CraftingMaterialVisualBrushWidget)
- [CraftingPieceTypeSelectorButtonWidget](../CraftingPieceTypeSelectorButtonWidget)
- [BoolBrushChangerBrushWidget](../BoolBrushChangerBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CraftingCardHighlightBrushWidget)