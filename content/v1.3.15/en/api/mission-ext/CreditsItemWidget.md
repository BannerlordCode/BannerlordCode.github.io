---
title: "CreditsItemWidget"
description: "Auto-generated class reference for CreditsItemWidget."
---
# CreditsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs`

## Overview

`CreditsItemWidget` is one row of the end-of-game credits scroll. It is a plain `Widget` that renders one
of five row shapes — `CategoryWidget`, `SectionWidget`, `EntryWidget`, `EmptyLineWidget` and `ImageWidget`
(`CreditsItemWidget.cs:84`) — chosen by a single string, `ItemType`.

`ItemType` takes exactly five meaningful values: `"Category"`, `"Section"`, `"Entry"`, `"EmptyLine"` and
`"Image"`. `RefreshItemWidget` tests each one and sets the matching child visible and the rest hidden
(`CreditsItemWidget.cs:34` … `CreditsItemWidget.cs:50`). The `Image` case additionally sizes the widget to
its sprite's pixel dimensions (`CreditsItemWidget.cs:53`).

Application is one-shot: `_initialized` starts false, the first `OnLateUpdate` calls `RefreshItemWidget`
and latches the flag (`CreditsItemWidget.cs:20`). The widget is created by the credits prefab; nothing in the
1.3.15 tree constructs it, and the single-`UIContext` constructor (`CreditsItemWidget.cs:11`) is all the
framework requires.

## Mental Model

Read it as a one-shot row-shape switch, and mind what happens when `ItemType` does not match. The
boundaries:

- **It runs exactly once.** `_initialized` is set on the first late update (`CreditsItemWidget.cs:23`) and
  never cleared. `ItemType`'s setter only notifies (`CreditsItemWidget.cs:75`); it does not re-run
  `RefreshItemWidget`. Recycling one row for a different entry type leaves the previous shape on screen.
- **Every value that is not one of the five strings produces no change at all.** The whole body is inside
  `if (!string.IsNullOrEmpty(this.ItemType))` (`CreditsItemWidget.cs:30`) and each branch is an equality
  test with no `else`. An unknown or empty type leaves all five children exactly as they were.
- **All five children are null-guarded individually** (`CreditsItemWidget.cs:32` … `CreditsItemWidget.cs:48`),
  so a partially bound prefab simply shows fewer shapes rather than throwing. This is the opposite of the
  unguarded dereference in `CharacterDeveloperPerkSelectionItemButtonWidget`.
- **Sprite sizing only happens on the `"Image"` path and only if the sprite is already loaded**
  (`CreditsItemWidget.cs:51`). A sprite that arrives after the one-shot refresh never resizes the widget.
- **Sizing is in raw sprite pixels**, not scaled units (`CreditsItemWidget.cs:53`), so the row's size depends
  on the current resolution scale at the moment it is refreshed.

## How to use

**Getting one.** Reference it from the credits prefab as a row template, bind all five child widgets, and
set `ItemType` **before** the row's first late update — or the shape never changes.

**Typical use** — filling a credits list with mixed row types:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits;

public class CreditsListFiller : MissionBehavior
{
    private readonly IList<CreditsItemWidget> _rows;

    public void Fill(IEnumerable<(string type, string text)> entries)
    {
        int i = 0;
        foreach ((string type, string text) entry in entries)
        {
            if (i >= _rows.Count) { break; }

            CreditsItemWidget row = _rows[i++];

            // Set ItemType BEFORE the row's first OnLateUpdate: RefreshItemWidget runs once
            // and latches (CreditsItemWidget.cs:20). Recycling a row will not re-shape it.
            row.ItemType = entry.type;    // "Category" | "Section" | "Entry" | "EmptyLine" | "Image"
            Debug.Print("credits row " + i + " -> " + row.ItemType);
        }
    }
}
```

**The mistake that bites.** Recycling a credits row — setting `ItemType` to `"Entry"` after the row has
already been used for a `"Category"`. The setter only raises `OnPropertyChanged`
(`CreditsItemWidget.cs:75`); `_initialized` was latched on the row's first late update
(`CreditsItemWidget.cs:23`), so `RefreshItemWidget` never runs again and the row keeps its old shape with the
new text inside it. Bind `ItemType` before the row enters the tree, or use a fresh widget per row.



## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `CategoryWidget` | `public Widget CategoryWidget { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |
| `SectionWidget` | `public Widget SectionWidget { get; set; }` |
| `EntryWidget` | `public Widget EntryWidget { get; set; }` |
| `EmptyLineWidget` | `public Widget EmptyLineWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CreditsItemWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CircleLoadingAnimWidget](../CircleLoadingAnimWidget)
- [CustomGameBannedPlayerManager](../CustomGameBannedPlayerManager)
- [CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CreditsItemWidget)