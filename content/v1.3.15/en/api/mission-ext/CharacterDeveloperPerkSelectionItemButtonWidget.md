---
title: "CharacterDeveloperPerkSelectionItemButtonWidget"
description: "Auto-generated class reference for CharacterDeveloperPerkSelectionItemButtonWidget."
---
# CharacterDeveloperPerkSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperPerkSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerkSelectionItemButtonWidget.cs`

## Overview

`CharacterDeveloperPerkSelectionItemButtonWidget` is a `ButtonWidget` in the character-developer (perk) screen. It
holds exactly one child reference — `PerkSelectionIndicatorWidget`, a plain auto-property
(`CharacterDeveloperPerkSelectionItemButtonWidget.cs:13`) — and all of its behaviour is deciding whether
that indicator sits at the top or the bottom of the row.

`OnLateUpdate` implements a zig-zag connector list. If the button's parent has exactly one child, the
indicator is centred (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:29`). Otherwise the alignment is
derived from the button's own index among its siblings: even index gets `VerticalAlignment.Bottom`, odd
index gets `VerticalAlignment.Top` (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:32`). With an
indented perk tree that produces the familiar alternating indent/connector column.

The class also overrides `OnHoverBegin` and `OnHoverEnd` — both bodies do nothing but call the base
implementation (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:37`,
`CharacterDeveloperPerkSelectionItemButtonWidget.cs:43`). They exist so the prefab can attach hover visuals;
no logic is added here.

The instance comes from the perk-selection prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:16`) is all the framework
requires.

## Mental Model

Read it as a pure layout helper that reads its siblings' count, not as a selectable perk button. The
boundaries:

- **The parent is dereferenced without a null check.** `PerkSelectionIndicatorWidget` is guarded
  (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:25`) but `base.ParentWidget.ChildCount` is not
  (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:27`). A button with an indicator but no parent is a
  null reference on the very first late update.
- **The alignment is recomputed from `GetSiblingIndex()` every frame**
  (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:32`), so it is a function of position, not of state.
  Inserting or removing one perk row shifts every row after it and flips their connectors — the visuals move
  even though nothing about those perks changed.
- **The single-child case bypasses the zig-zag entirely.** One perk row in a parent centres its indicator
  (`CharacterDeveloperPerkSelectionItemButtonWidget.cs:29`) rather than aligning it bottom or top, so moving
  the last row out of a parent visibly restyles it.
- The two hover overrides are no-ops; hover visuals come from the `ButtonWidget` brush states, not from
  this class.

## How to use

**Getting one.** Reference it from the perk-selection prefab, nest it inside whatever container holds the
perk rows, and bind `PerkSelectionIndicatorWidget` to the connector element in the row. There is no code-side
construction path.

**Typical use** — adding a perk row that picks up the zig-zag automatically:

```csharp
public class PerkRowBinder : MissionBehavior
{
    private readonly CharacterDeveloperPerkSelectionItemButtonWidget _row;

    public void Show()
    {
        if (_row == null) { return; }

        // The indicator must be bound before the first late update: base.ParentWidget is
        // dereferenced without a null check (CharacterDeveloperPerkSelectionItemButtonWidget.cs:27).
        _row.PerkSelectionIndicatorWidget = _connector;

        // VerticalAlignment is recomputed every frame from GetSiblingIndex() % 2
        // (CharacterDeveloperPerkSelectionItemButtonWidget.cs:32) - nothing else to configure.
        Debug.Print("perk row visible: " + _row.IsVisible.ToString());
    }
}
```

**The mistake that bites.** Creating the button and attaching the indicator while it is detached from any
parent. `OnLateUpdate` null-checks the indicator but not `base.ParentWidget`
(`CharacterDeveloperPerkSelectionItemButtonWidget.cs:27`), so as soon as the widget is updated before it is
added to the tree the game throws — and because the exception happens inside the UI update loop rather than
in your binding code, it surfaces far from the `new` that caused it. Always add the widget to its parent
first, then bind the indicator.



## Key Properties

| Name | Signature |
|------|-----------|
| `PerkSelectionIndicatorWidget` | `public Widget PerkSelectionIndicatorWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterDeveloperPerkSelectionItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CharacterCreationOptionsItemWidget](../CharacterCreationOptionsItemWidget)
- [CharacterTableauWidget](../CharacterTableauWidget)
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [中文页面](../../../../zh/api/mission-ext/CharacterDeveloperPerkSelectionItemButtonWidget)