---
title: "CharacterCreationOptionsItemWidget"
description: "Auto-generated class reference for CharacterCreationOptionsItemWidget."
---
# CharacterCreationOptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationOptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs`

## Overview

`CharacterCreationOptionsItemWidget` is a plain `Widget` that hosts exactly one of four interchangeable
child widgets — `ActionOptionWidget`, `BooleanOptionWidget`, `SelectionOptionWidget` and
`NumericOptionWidget` (`CharacterCreationOptionsItemWidget.cs:134`) — and shows only the one that matches
its `Type`. It is the row container for the options list in character creation: one prefab, four layouts.

The mapping is an `int`, decided in a dirty-flagged pass inside `OnLateUpdate`
(`CharacterCreationOptionsItemWidget.cs:17`):

| `Type` | visible child |
|---|---|
| `0` | `BooleanOptionWidget` |
| `1` | `NumericOptionWidget` |
| `2` | `SelectionOptionWidget` |
| `3` | `ActionOptionWidget` |

Each branch explicitly sets all four children, so there is no reliance on a previous layout
(`CharacterCreationOptionsItemWidget.cs:24`).

The widget also owns gamepad navigation. After applying the layout it calls `ResetNavigationIndices`
(`CharacterCreationOptionsItemWidget.cs:50`), which hands this row's `GamepadNavigationIndex` to whichever
child is visible and then clears the row's own index; `OnGamepadNavigationIndexUpdated` calls the same
routine (`CharacterCreationOptionsItemWidget.cs:106`).

The instance comes from the character-creation prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CharacterCreationOptionsItemWidget.cs:11`) is all the framework needs.

## Mental Model

Read it as an exclusive-child switch with a fixed navigation priority, not as a general container. The
boundaries:

- **The `int` values are positional, and there is no `else`.** The chain is `if (Type == 0) … else if
  (Type == 1) … else if (Type == 2) … else if (Type == 3)`
  (`CharacterCreationOptionsItemWidget.cs:22`). A `Type` outside `0..3` produces **no change at all** —
  the four children keep whatever visibility they had, and the class does not complain.
- **`Type` only reacts to a change.** The setter is guarded by `!= value` and merely raises `_isDirty`
  (`CharacterCreationOptionsItemWidget.cs:121`). Re-assigning the same value is free but re-asserts nothing.
- **The dirty flag starts `true`** (`CharacterCreationOptionsItemWidget.cs:211`), so the first late update
  always applies a layout even if `Type` was bound before that.
- **`ResetNavigationIndices` has a hard priority order.** Its `if / else if` chain tests
  `BooleanOptionWidget`, then `NumericOptionWidget`, then `SelectionOptionWidget`, then `ActionOptionWidget`
  (`CharacterCreationOptionsItemWidget.cs:64`). If more than one child is visible — which the missing `else`
  makes possible — only the earliest one receives the index, and the rest become unreachable by gamepad.
- **Rows without a navigation index are skipped entirely.** `ResetNavigationIndices` returns immediately
  when `GamepadNavigationIndex == -1` (`CharacterCreationOptionsItemWidget.cs:58`), so a mouse-only row
  never propagates an index to its child.
- On a successful hand-off the row's own index is set to `-1`
  (`CharacterCreationOptionsItemWidget.cs:98`), so the row is deliberately not itself focusable.

## How to use

**Getting one.** Put the class in the options-row prefab, bind all four child widgets, and drive `Type` from
the option's kind. Only `0`–`3` are wired.

**Typical use** — building a character-creation options row:

```csharp
public class OptionsRowBinder : MissionBehavior
{
    private readonly CharacterCreationOptionsItemWidget _row;
    private readonly CharacterCreationOptionsItemWidget.BooleanOptionWidget _bool;
    private readonly CharacterCreationOptionsItemWidget.NumericOptionWidget _numeric;

    public void Bind(bool asBoolean)
    {
        if (_row == null) { return; }

        // 0 -> BooleanOptionWidget, 1 -> NumericOptionWidget
        // (CharacterCreationOptionsItemWidget.cs:22 / :29)
        _row.Type = asBoolean ? 0 : 1;

        // The layout and the gamepad index are applied on the next late update, not here.
        Debug.Print("row type set to " + _row.Type);
    }
}
```

**The mistake that bites.** Assigning a `Type` outside `0..3`, for instance `4` for a new option kind, or
using an enum ordinal that happens to be larger. Because the chain has no `else`, the assignment is accepted
without complaint and the row keeps showing whichever child was visible before — so the option appears with
the wrong editor (a boolean checkbox where a slider belongs) with no error anywhere. There is no way to
extend the mapping without replacing this class.



## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `ActionOptionWidget` | `public Widget ActionOptionWidget { get; set; }` |
| `NumericOptionWidget` | `public Widget NumericOptionWidget { get; set; }` |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget { get; set; }` |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterCreationOptionsItemWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CharacterCreationCultureVisualBrushWidget](../CharacterCreationCultureVisualBrushWidget)
- [AutoClosePopupWidget](../AutoClosePopupWidget)
- [CircleLoadingAnimWidget](../CircleLoadingAnimWidget)
- [中文页面](../../../../zh/api/mission-ext/CharacterCreationOptionsItemWidget)