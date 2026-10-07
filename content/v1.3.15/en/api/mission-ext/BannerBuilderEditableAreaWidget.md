---
title: "BannerBuilderEditableAreaWidget"
description: "Auto-generated class reference for BannerBuilderEditableAreaWidget."
---
# BannerBuilderEditableAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## Overview

`BannerBuilderEditableAreaWidget` is the banner-builder's editing surface: a plain `Widget` that owns a
draggable, rotatable, resizable rectangle drawn over `BannerTableauWidget`. It is the only place in the
banner screen where sigil placement is decided, and it is an *input-polling* widget — it never subscribes
to Gauntlet events, it reads `Input.IsKeyDown(InputKey.LeftMouseButton)`, `EventManager.MousePosition` and
`EventManager.HoveredView` directly each frame (`BannerBuilderEditableAreaWidget.cs:60`).

Its own state is four values in **sigil units**, not pixels: `PositionValue`, `SizeValue`, `RotationValue`
and `LayerIndex` (`BannerBuilderEditableAreaWidget.cs:46`). `TotalAreaSize` is the scale that turns sigil
units into screen space — `UpdateRequiredValues` divides by it and multiplies by the widget's own measured
`Size` (`BannerBuilderEditableAreaWidget.cs:105`). The widget also holds references to the four drag
handles it positions itself (`BannerBuilderEditableAreaWidget.cs:16`), plus `BannerTableauWidget`,
`EditableAreaVisualWidget` and `IsMirrorActive`.

Nothing in the 1.3.15 tree constructs it; the banner-builder prefab owns the instance and binds all of
those references.

## Mental Model

Read it as an input state machine that publishes into a collaborator, not as a passive view. Its private
`BuilderMode` enum (`None`, `Rotating`, `Positioning`, `HorizontalResizing`, `VerticalResizing`,
`RightCornerResizing`, `BannerBuilderEditableAreaWidget.cs:632`) is recomputed from hover and mouse state on
every frame and reset to `None` the moment the button is released.

Four things decide whether edits behave:

- **There are two coordinate spaces and only one is public.** Everything you write into `PositionValue` /
  `SizeValue` is in units of `0..TotalAreaSize`; pixels are derived in `UpdateRequiredValues`
  (`BannerBuilderEditableAreaWidget.cs:103`). `TotalAreaSize` defaults to `0`, and every conversion
  divides by it — a prefab that forgets to bind it produces `0/0` and a `NaN`-scaled editing frame.
- **The widget writes back into `BannerTableauWidget` itself.** Dragging assigns
  `UpdatePositionValueManual` (`BannerBuilderEditableAreaWidget.cs:132`), resizing assigns
  `UpdateSizeValueManual` (`BannerBuilderEditableAreaWidget.cs:206`) and rotating assigns
  `UpdateRotationValueManualWithMirror` with the mirror flag folded in
  (`BannerBuilderEditableAreaWidget.cs:158`). Setting `PositionValue` yourself updates this widget's view
  but does not notify the tableau unless you also assign the matching `...Manual` property.
- **The first `OnUpdate` dereferences `BannerTableauWidget` before the `_initialized` guard runs**
  (`BannerBuilderEditableAreaWidget.cs:63`). There is no null check anywhere on that path, so the binding
  must exist from the first frame, not just before the player interacts.
- **Two rough edges in the source are worth knowing before you copy them.** The `_sizeLimitMin` constant
  declared at `BannerBuilderEditableAreaWidget.cs:593` is never read — both clamp sites hard-code the
  literal `2f` (`BannerBuilderEditableAreaWidget.cs:202`). And the hover guard in `HandleForEdge` tests
  `_currentMode != HorizontalResizing || _currentMode != VerticalResizing`
  (`BannerBuilderEditableAreaWidget.cs:210`), which is tautological: a value cannot equal both, so the
  disjunction is always true and the branch is really just `HoveredView == widgetFor`. Meanwhile the
  publish-on-mouse-up test in `OnLateUpdate` is a numeric range over enum ordinals,
  `currentMode - BuilderMode.Rotating <= 4` (`BannerBuilderEditableAreaWidget.cs:80`), which silently
  changes meaning if the private enum is reordered.

`EditableAreaSize` only affects the visual overlay — `UpdateEditableAreaVisual` scales
`EditableAreaVisualWidget` to `EditableAreaSize / TotalAreaSize` (`BannerBuilderEditableAreaWidget.cs:325`)
— it has no effect on where the sigil actually sits.

## How to use

**Getting one.** Instantiate the banner-builder prefab, or reuse the class in your own prefab with every
reference bound: `BannerTableauWidget`, `EditableAreaVisualWidget`, the three `DragWidget*` handles,
`RotateWidget`, `LayerIndex` and `TotalAreaSize`. The single-`UIContext` constructor at
`BannerBuilderEditableAreaWidget.cs:54` is all the framework requires.

**Typical use** — programmatically placing a sigil, in sigil units, and telling the tableau about it:

```csharp
public static class BannerPlacement
{
    public static void PlaceAtTopLeft(BannerBuilderEditableAreaWidget area)
    {
        // Units are 0..TotalAreaSize; drag clamps to that range
        // (BannerBuilderEditableAreaWidget.cs:130) and resize clamps to [2, TotalAreaSize].
        float limit = MathF.Clamp(area.TotalAreaSize - 20f, 0f, area.TotalAreaSize);
        area.PositionValue = new Vec2(0f, limit);
        area.SizeValue = new Vec2(20f, 20f);

        // The widget's own setter does NOT push to the tableau; dragging does
        // (BannerBuilderEditableAreaWidget.cs:132), so do it yourself.
        area.BannerTableauWidget.UpdatePositionValueManual = area.PositionValue;
        area.BannerTableauWidget.UpdateSizeValueManual = area.SizeValue;

        // Always give the tableau the layer to re-mesh; OnUpdate writes this every frame anyway
        // (BannerBuilderEditableAreaWidget.cs:63).
        area.BannerTableauWidget.MeshIndexToUpdate = area.LayerIndex;
    }
}
```

**The mistake that bites.** Writing pixel coordinates into `PositionValue`. The value is then scaled a
second time by `TotalAreaSize / Size` (`BannerBuilderEditableAreaWidget.cs:105`), so the sigil appears far
outside the frame — and because drag handling accumulates a mouse delta into whatever `PositionValue`
already holds (`BannerBuilderEditableAreaWidget.cs:128`), every subsequent drag and resize compounds the
error instead of correcting it, and the result is clamped to `0..TotalAreaSize` so it can never be dragged
back to where you meant.



## Key Properties

| Name | Signature |
|------|-----------|
| `DragWidgetTopRight` | `public ButtonWidget DragWidgetTopRight { get; set; }` |
| `DragWidgetRight` | `public ButtonWidget DragWidgetRight { get; set; }` |
| `DragWidgetTop` | `public ButtonWidget DragWidgetTop { get; set; }` |
| `RotateWidget` | `public ButtonWidget RotateWidget { get; set; }` |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget { get; set; }` |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget { get; set; }` |
| `LayerIndex` | `public int LayerIndex { get; set; }` |
| `IsMirrorActive` | `public bool IsMirrorActive { get; set; }` |
| `IsLayerPattern` | `public bool IsLayerPattern { get; set; }` |
| `PositionValue` | `public Vec2 PositionValue { get; set; }` |
| `SizeValue` | `public Vec2 SizeValue { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |
| `EditableAreaSize` | `public int EditableAreaSize { get; set; }` |
| `TotalAreaSize` | `public int TotalAreaSize { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BannerBuilderEditableAreaWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BannerTableauWidget](../BannerTableauWidget)
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [中文页面](../../../../zh/api/mission-ext/BannerBuilderEditableAreaWidget)