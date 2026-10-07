---
title: "CraftingPieceTypeSelectorButtonWidget"
description: "Auto-generated class reference for CraftingPieceTypeSelectorButtonWidget."
---
# CraftingPieceTypeSelectorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceTypeSelectorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceTypeSelectorButtonWidget.cs`

## Overview

`CraftingPieceTypeSelectorButtonWidget` is a 49-line `ButtonWidget` that mirrors its own Gauntlet visual
state onto a separate child widget. Its one member of interest is `VisualsWidget`
(`CraftingPieceTypeSelectorButtonWidget.cs:31`), the widget that should display the button's appearance.

The mechanism is an override of `SetState(string)`. Every time the button's state changes — from the base
`ButtonWidget` for hover, press, or disabled, or from your own code — the override calls
`base.SetState(stateName)` and then forwards the same name to `VisualsWidget`
(`CraftingPieceTypeSelectorButtonWidget.cs:17`). The forwarding is null-guarded
(`CraftingPieceTypeSelectorButtonWidget.cs:21`).

That is the entire class. It exists so a button can be composed of a clickable shell and a separate visual
element, without wiring hover and press states onto that element by hand.

The widget is created by the crafting prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CraftingPieceTypeSelectorButtonWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a one-way state mirror installed at the `SetState` boundary, not as a container that manages its
child. The boundaries:

- **The override catches *every* state, including ones you did not intend.** Because it sits on
  `SetState` rather than on a specific input event, the child also receives hover, pressed, disabled and any
  state the base `ButtonWidget` produces. That is the feature — but it also means the child cannot have an
  independent state, because anything that sets one on the child directly is overwritten the next time the
  button changes state.
- **`VisualsWidget` is typed as `Widget`, not `BrushWidget`.** The forward calls `visualsWidget.SetState(...)`
  (`CraftingPieceTypeSelectorButtonWidget.cs:25`), which is the generic `Widget.SetState`. Only widgets that
  actually have named visual states will visibly react.
- **`VisualsWidget`'s setter raises no notification** (`CraftingPieceTypeSelectorButtonWidget.cs:41`). It
  short-circuits on an unchanged value and otherwise just assigns; nothing is told that the mirror target
  changed.
- **Binding `VisualsWidget` after the button has already changed state does not replay.** The mirror only
  fires on a subsequent `SetState`; the child keeps whatever state it had until the button changes again.

## How to use

**Getting one.** Reference it from the crafting prefab, put the visual element inside the button as
`VisualsWidget`, and give both the button's brush and the visual widget's brush the same set of state names.

**Typical use** — composing a selector button from a shell plus its visuals:

```csharp
public class PieceTypeSelectorBinder : MissionBehavior
{
    private readonly CraftingPieceTypeSelectorButtonWidget _button;
    private readonly Widget _visuals;
    private bool _selected;

    public void Select(bool selected)
    {
        if (_button == null || _visuals == null) { return; }

        // The mirror target has no OnPropertyChanged (CraftingPieceTypeSelectorButtonWidget.cs:41),
        // so assign it before changing any state.
        _button.VisualsWidget = _visuals;

        // SetState on the button is overridden to forward the name to the visuals
        // (CraftingPieceTypeSelectorButtonWidget.cs:25); hover and press come through for free.
        _button.SetState(selected ? "Selected" : "Default");
        Debug.Print("piece selector state: " + _button.CurrentState);
    }
}
```

**The mistake that bites.** Setting the state on the visuals widget directly, or binding `VisualsWidget`
only after the button has already been through its hover states. `SetState` is overridden
(`CraftingPieceTypeSelectorButtonWidget.cs:17`), so any state you put on the child is at the mercy of the
next button transition — hovering the button wipes a "Selected" state you set by hand, and swapping the
mirror target mid-interaction leaves the new child on whatever state it was constructed in.



## Key Properties

| Name | Signature |
|------|-----------|
| `VisualsWidget` | `public Widget VisualsWidget { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of CraftingPieceTypeSelectorButtonWidget from the subsystem API first
CraftingPieceTypeSelectorButtonWidget craftingPieceTypeSelectorButtonWidget = ...;
craftingPieceTypeSelectorButtonWidget.SetState("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingPieceTypeSelectorButtonWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CraftingMaterialVisualBrushWidget](../CraftingMaterialVisualBrushWidget)
- [CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [ConversationNameButtonWidget](../ConversationNameButtonWidget)
- [中文页面](../../../../zh/api/mission-ext/CraftingPieceTypeSelectorButtonWidget)