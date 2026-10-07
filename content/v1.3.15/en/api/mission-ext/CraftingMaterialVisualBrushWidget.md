---
title: "CraftingMaterialVisualBrushWidget"
description: "Auto-generated class reference for CraftingMaterialVisualBrushWidget."
---
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingMaterialVisualBrushWidget.cs`

## Overview

`CraftingMaterialVisualBrushWidget` is a `BrushWidget` that shows a crafting material's icon, in a small or
a large size. It has exactly two inputs — `MaterialType` (a `string`) and `IsBig` (a `bool`) — and composes
them into a single brush-state name.

The composition is plain string concatenation: the state is `MaterialType`, with the literal `"Big"`
appended when `IsBig` is true (`CraftingMaterialVisualBrushWidget.cs:31`). So a prefab bound with
`MaterialType = "wood"` and `IsBig = true` asks the brush for a state named `"woodBig"`. That naming
convention is the widget's contract with the prefab and is not documented anywhere else.

Application is dirty-flagged: `_visualDirty` starts `true`, and `OnLateUpdate` calls `UpdateVisual()` once
per flag and clears it (`CraftingMaterialVisualBrushWidget.cs:20`). `UpdateVisual` also calls
`RegisterBrushStatesOfWidget()` every time it runs (`CraftingMaterialVisualBrushWidget.cs:30`).

The widget is created by the crafting prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CraftingMaterialVisualBrushWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a name-builder with no notifications, not as a bound property. The boundaries:

- **Neither setter raises `OnPropertyChanged`.** `MaterialType` (`CraftingMaterialVisualBrushWidget.cs:50`)
  and `IsBig` (`CraftingMaterialVisualBrushWidget.cs:69`) only raise the dirty flag. A databinding path that
  listens for a change is told nothing; the widget repaints itself instead. They do short-circuit on an
  unchanged value, so a repeated identical assignment costs nothing and also does nothing.
- **A missing state name is not an error.** `SetState(text)` is called with whatever was composed
  (`CraftingMaterialVisualBrushWidget.cs:36`). A material type the brush does not declare simply renders the
  current state.
- **The first update can run with a null material.** `_materialType` has no initialiser
  (`CraftingMaterialVisualBrushWidget.cs:81`), so before the prefab binds it, `text` is `null` and
  `SetState(null)` is called. With `IsBig` true the composition yields `"Big"` instead, because string
  concatenation with `null` produces the non-null side.
- **Changing `IsBig` alone changes the state name**, not just the size — so a prefab that declares
  `woodBig` but not `wood` will render correctly in the large size and silently fall back in the small one.

## How to use

**Getting one.** Reference it from the crafting prefab and ensure the brush attached to this widget declares
one state per `<material>` and one per `<material>Big`.

**Typical use** — binding a material chip in a crafting recipe:

```csharp
public class MaterialChipBinder : MissionBehavior
{
    private readonly CraftingMaterialVisualBrushWidget _chip;

    public void Bind(string materialId, bool large)
    {
        if (_chip == null) { return; }

        // Neither setter notifies (CraftingMaterialVisualBrushWidget.cs:50); they only mark the
        // visual dirty, and the state name is composed on the next late update.
        _chip.MaterialType = materialId;
        _chip.IsBig = large;

        // "wood" + "Big" -> "woodBig" (CraftingMaterialVisualBrushWidget.cs:31)
        Debug.Print("material chip state: " + (large ? materialId + "Big" : materialId));
    }
}
```

**The mistake that bites.** Declaring only the small states in the brush and expecting the large size to
scale. `IsBig` does not pick a different sprite or adjust a size — it appends `"Big"` to the state name
(`CraftingMaterialVisualBrushWidget.cs:34`). A brush with `wood` but no `woodBig` renders fine in the small
size and shows nothing, or the previous material's icon, in the large one.



## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingMaterialVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [CraftingPieceTypeSelectorButtonWidget](../CraftingPieceTypeSelectorButtonWidget)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CraftingMaterialVisualBrushWidget)