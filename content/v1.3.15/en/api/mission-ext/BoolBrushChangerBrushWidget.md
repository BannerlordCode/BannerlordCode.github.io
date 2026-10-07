---
title: "BoolBrushChangerBrushWidget"
description: "Auto-generated class reference for BoolBrushChangerBrushWidget."
---
# BoolBrushChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolBrushChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolBrushChangerBrushWidget.cs`

## Overview

`BoolBrushChangerBrushWidget` is a `BrushWidget` whose job is to overwrite some *other* widget's brush depending
on a boolean. It is a data-binding helper for prefabs: you bind `BooleanCheck`, and the widget assigns
either the brush named by `TrueBrush` or the brush named by `FalseBrush`.

`OnBooleanUpdated` resolves the name through `Context.GetBrush(text)` (`BoolBrushChangerBrushWidget.cs:32`)
and assigns the result to `TargetWidget`, falling back to `this` when `TargetWidget` is null
(`BoolBrushChangerBrushWidget.cs:33`). With `IncludeChildren` set, it then walks every descendant via
`GetAllChildrenRecursive` and overwrites the brush of each descendant that is a `BrushWidget`
(`BoolBrushChangerBrushWidget.cs:35`).

The instance comes from the prefab; nothing in the 1.3.15 tree constructs it, and the only thing the
framework needs is the single-`UIContext` constructor (`BoolBrushChangerBrushWidget.cs:12`).

## Mental Model

Read it as a one-shot brush assignment with a latch, not as a live binding. The boundaries:

- **The first update fires the whole routine exactly once.** `OnLateUpdate` calls `OnBooleanUpdated()`
  behind `_initialUpdateHandled` and then sets the flag (`BoolBrushChangerBrushWidget.cs:21`). Only
  `BooleanCheck`'s setter re-invokes it (`BoolBrushChangerBrushWidget.cs:65`). The `TrueBrush`,
  `FalseBrush`, `TargetWidget` and `IncludeChildren` setters notify the property but do **not** re-apply
  anything (`BoolBrushChangerBrushWidget.cs:82`, `BoolBrushChangerBrushWidget.cs:102`,
  `BoolBrushChangerBrushWidget.cs:122`, `BoolBrushChangerBrushWidget.cs:142`).
- **`BooleanCheck` only reacts to a change.** The setter is guarded by `!= value`
  (`BoolBrushChangerBrushWidget.cs:61`), so re-pushing the same value from a binding every tick does
  nothing.
- **`Context.GetBrush` on an unset name returns nothing useful.** Both brush names are plain `string`
  fields defaulting to `null` (`BoolBrushChangerBrushWidget.cs:157`). If the first update happens before
  the names are bound, a null brush is assigned and the latch is consumed.
- **`IncludeChildren` is a recursive clobber.** It replaces the brush of *every* descendant `BrushWidget`
  (`BoolBrushChangerBrushWidget.cs:43`), including ones that had purpose-built brushes for hover, disabled
  or highlighted states. Those states are gone afterwards.
- With `TargetWidget` left null the widget overwrites **its own** brush, which is almost never what you
  want from a widget that is also the boolean carrier.

## How to use

**Getting one.** Place the class in a prefab as a hidden carrier widget, bind `BooleanCheck`, `TrueBrush`,
`FalseBrush` and `TargetWidget`, and let the prefab construct it through the single-`UIContext` constructor.
Order your bindings: names and target first, the boolean last.

**Typical use** — restyling an icon when a setting flips:

```csharp
public class SettingsToggleBinding : MissionBehavior
{
    private readonly BoolBrushChangerBrushWidget _changer;
    private readonly BrushWidget _icon;

    public void Apply(bool isEnabled)
    {
        // Order matters: OnBooleanUpdated only re-runs on a BooleanCheck change
        // (BoolBrushChangerBrushWidget.cs:65), so the names must already be bound.
        _changer.TargetWidget = _icon;
        _changer.TrueBrush = "option_checked";
        _changer.FalseBrush = "option_unchecked";

        // Leave IncludeChildren false, or every descendant BrushWidget loses its own brush
        // (BoolBrushChangerBrushWidget.cs:43).
        _changer.IncludeChildren = false;

        _changer.BooleanCheck = isEnabled;
        _icon.SetState(isEnabled ? "Checked" : "Unchecked");
    }
}
```

**The mistake that bites.** Binding `TrueBrush` / `FalseBrush` *after* `BooleanCheck`. The first late update
already consumed the `_initialUpdateHandled` latch and resolved `Context.GetBrush(null)`; the later name
setters only raise `OnPropertyChanged` and never re-apply, so the target keeps the null brush and the
toggle appears to do nothing until the boolean happens to change again. Bind the names first, then the
boolean.



## Key Properties

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueBrush` | `public string TrueBrush { get; set; }` |
| `FalseBrush` | `public string FalseBrush { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BoolBrushChangerBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [BoostItemButtonWidget](../BoostItemButtonWidget)
- [AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/BoolBrushChangerBrushWidget)