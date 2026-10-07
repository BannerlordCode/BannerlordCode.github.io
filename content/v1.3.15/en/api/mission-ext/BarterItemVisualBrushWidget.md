---
title: "BarterItemVisualBrushWidget"
description: "Auto-generated class reference for BarterItemVisualBrushWidget."
---
# BarterItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs`

## Overview

`BarterItemVisualBrushWidget` is the barter-menu cell that decides *how* an offer is drawn. It owns three
child widgets it switches between — `SpriteWidget` (a `BrushWidget`), `MaskedTextureWidget` and
`ImageIdentifierWidget` (`BarterItemVisualBrushWidget.cs:257`) — plus a `SpriteClipWidget` that mirrors the
sprite widget's visibility (`BarterItemVisualBrushWidget.cs:236`).

The choice is made from the `Type` string, which is not an enum but the barterable's `StringID`
(`BarterItemVM.cs:23`) — values like `"item_barterable"`, `"marriage_barterable"`, `"gold_barterable"`. The
dispatch is a compiler-generated `ComputeStringHash` binary search inside `UpdateVisual`
(`BarterItemVisualBrushWidget.cs:59`). It first hides all three children, then enables exactly one:

| `Type` | result |
|---|---|
| `fief_barterable` | sprite from `FiefImagePath + "_t"`, using the shared **default** brush |
| `item_barterable`, `marriage_barterable`, `set_prisoner_free_barterable` | `ImageIdentifierWidget` |
| `mercenary_join_faction_barterable` | `MaskedTextureWidget` |
| everything else, and unknown strings | `SpriteWidget` |

The last row is not an explicit case: the `default:` path of the dispatch falls into `IL_02C1`, which is
just `SpriteWidget.IsVisible = true` (`BarterItemVisualBrushWidget.cs:226`). Nine other real barterable
types (`gold_barterable`, `peace_barterable`, `war_barterable`, `lift_siege_barterable`,
`start_siege_barterable`, `join_faction_barterable`, `leave_faction_barterable`, `safe_passage_barterable`,
`no_attack_barterable`) land there too.

## Mental Model

Read it as a one-shot selector, not as a live binding. The boundaries:

- **`UpdateVisual()` runs exactly once, ever.** `OnParallelUpdate` guards it with `_imageDetermined` and
  sets the flag immediately (`BarterItemVisualBrushWidget.cs:21`). None of the `Type`, `FiefImagePath` or
  `HasVisualIdentifier` setters clear that flag (`BarterItemVisualBrushWidget.cs:357`), so changing `Type`
  after the first update changes nothing — the previous cell's widget choice survives.
- **The fief path is the only one that mutates a shared brush.** It assigns
  `SpriteWidget.Brush = EventManager.Context.DefaultBrush` (`BarterItemVisualBrushWidget.cs:77`) and then
  `SetWidgetSpriteForAllStyles` walks that brush and rewrites the `Sprite` of every `StyleLayer` in every
  style, in place (`BarterItemVisualBrushWidget.cs:240`). That is the shared context default brush, not a
  private copy.
- **The fief layout is re-applied every frame, but only for fiefs.** `OnParallelUpdate` re-runs the sizing
  and clipping block whenever `Type == "fief_barterable"` (`BarterItemVisualBrushWidget.cs:27`), forcing
  `SpriteWidget`'s size from `SpriteClipWidget.Size.X` and a hard-coded `PositionYOffset = 18f`.
- **`HasVisualIdentifier` is never read.** It is declared, backed by a field and notified
  (`BarterItemVisualBrushWidget.cs:337`), but nothing in the class consults it — the decision is made purely
  from `Type`.
- **Visual states are synthesised at runtime.** `RegisterStatesOfWidgetFromBrush` adds one state per
  `BrushLayer` name to `SpriteWidget` (`BarterItemVisualBrushWidget.cs:40`), and only then does the tail of
  `UpdateVisual` call `SetState(this.Type)` if `SpriteWidget.ContainsState(Type)` holds
  (`BarterItemVisualBrushWidget.cs:228`). A `Type` with no matching layer name simply gets no state change.

## How to use

**Getting one.** Reference the class from a barter-menu prefab with all four child widgets bound; the
single-`UIContext` constructor at `BarterItemVisualBrushWidget.cs:12` is all the framework needs. Nothing
in the 1.3.15 tree constructs it.

**Typical use** — a cell whose type is decided before the first update:

```csharp
public class BarterCellBinder
{
    private readonly BarterItemVisualBrushWidget _cell;

    public void Bind(BarterItemVM vm)
    {
        if (Campaign.Current == null || vm == null) { return; }

        // Type is the barterable's StringID (BarterItemVM.cs:23).
        // Set everything BEFORE the first OnParallelUpdate: UpdateVisual runs once and is
        // never re-run (BarterItemVisualBrushWidget.cs:21), and no setter clears the flag.
        _cell.Type = vm.BarterableType;

        // Derived from Barterable.GetVisualIdentifier() != null (BarterItemVM.cs:24).
        _cell.HasVisualIdentifier = vm.HasVisualIdentifier;
    }
}
```

**The mistake that bites.** Binding the cell from a list-selection callback, which fires after the widget
has already been updated at least once. `UpdateVisual()` will not run again, so every cell keeps the visual
chosen for the type it had on its first frame — including the wrong child widget, so an `item_barterable`
shown through the sprite path and a `gold_barterable` shown through the image-identifier path. Either bind
the type before the cell enters the tree, or subclass and reset the `_imageDetermined` guard yourself; there
is no public way to do it.



## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteWidget` | `public BrushWidget SpriteWidget { get; set; }` |
| `SpriteClipWidget` | `public Widget SpriteClipWidget { get; set; }` |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `FiefImagePath` | `public string FiefImagePath { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BarterItemVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AutoClosePopupWidget](../AutoClosePopupWidget)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [CraftingMaterialVisualBrushWidget](../CraftingMaterialVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/BarterItemVisualBrushWidget)