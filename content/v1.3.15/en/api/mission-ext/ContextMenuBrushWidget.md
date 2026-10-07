---
title: "ContextMenuBrushWidget"
description: "Auto-generated class reference for ContextMenuBrushWidget."
---
# ContextMenuBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`

## Overview

`ContextMenuBrushWidget` is the right-click / context menu shell — a `BrushWidget` that positions itself
next to the cursor, flips to the other side of the cursor near a screen edge, wires each item's click to
close it, and brings up gamepad navigation while it is open.

Its constructor allocates two add/remove staging lists and then **registers its own late-update action**
with the event manager (`ContextMenuBrushWidget.cs:60`). `CustomLateUpdate` re-registers itself on every
invocation (`ContextMenuBrushWidget.cs:68`) and stops only when `_isDestroyed` is set — which happens in
`OnDisconnectedFromRoot` (`ContextMenuBrushWidget.cs:108`). This is a self-perpetuating callback, not an
override.

`IsActivated` is the public command (`ContextMenuBrushWidget.cs:225`): setting it `true` runs `Activate()`,
which records the mouse-down widgets, shows the menu and adds gamepad navigation
(`ContextMenuBrushWidget.cs:112`); setting it `false` runs `Deactivate()`, which hides the menu and tears
the navigation down (`ContextMenuBrushWidget.cs:122`). The two child containers — `ActionListPanel` and
`ScrollPanelToWatch` — and the `HorizontalPadding` / `VerticalPadding` auto-properties (both `10f`,
`ContextMenuBrushWidget.cs:17`) are the rest of the surface.

The widget is created by the GauntletUI context-menu prefab; nothing in the 1.3.15 tree constructs it, and
the single-`UIContext` constructor (`ContextMenuBrushWidget.cs:55`) is all the framework requires.

## Mental Model

Read it as a self-driving popup whose open/close is a two-state command, not a visibility toggle. The
boundaries:

- **Show and hide must go through `IsActivated`, not `IsVisible`.** `Activate` positions the menu from the
  cursor and calls `AddGamepadNavigation` (`ContextMenuBrushWidget.cs:118`); setting `IsVisible = true`
  directly does neither, so the menu appears wherever it was last parked with no controller support.
- **`Deactivate` parks the menu at the bottom-right of the page**, at `PageSize.X / PageSize.Y`
  (`ContextMenuBrushWidget.cs:124`), and only then sets `IsVisible = false`. Position is not reset.
- **Position is captured on one frame only.** `_isActivatedThisFrame` gates the single
  `DetermineMenuPositionFromMousePosition` + `GetLocalPoint` call (`ContextMenuBrushWidget.cs:77`), so
  after that frame the menu follows nothing — it only gets clamped to the page each frame
  (`ContextMenuBrushWidget.cs:83`).
- **Near an edge the menu flips sides.** `DetermineMenuPositionFromMousePosition` subtracts the menu's own
  size and negates the padding when the cursor is past the page midpoint horizontally or vertically
  (`ContextMenuBrushWidget.cs:212`, `ContextMenuBrushWidget.cs:216`).
- **The padding properties raise no notification.** They are plain auto-properties
  (`ContextMenuBrushWidget.cs:17`) read at position time, so changing one only affects the *next* activation.
- **Item click handlers are staged, not immediate.** Newly added and removed `ContextMenuItemWidget`s are
  queued into two lists and wired or unwired in `HandleNewlyAddedRemovedList`
  (`ContextMenuBrushWidget.cs:90`), so an item added mid-frame is not wired until the next late update.
- **There are two independent deactivation triggers.** `IsVisible && !IsRecursivelyVisible()`
  (`ContextMenuBrushWidget.cs:69`) and `IsVisible && !_isActivatedThisFrame && _isClickedOnOtherWidget`
  (`ContextMenuBrushWidget.cs:73`). The first fires when the widget is made visible while an ancestor is
  hidden, which is how a menu closes when its parent screen goes away.

## How to use

**Getting one.** Reference it from a prefab as the context-menu root and put `ContextMenuItemWidget` rows
inside `ActionListPanel`. Open it by assigning `IsActivated`, never by assigning `IsVisible`.

**Typical use** — opening the menu at the cursor and closing it on any item click:

```csharp
public class ContextMenuOpener : MissionBehavior
{
    private readonly ContextMenuBrushWidget _menu;
    private readonly ContextMenuItemWidget _attackItem;

    public void Open()
    {
        if (_menu == null) { return; }

        // IsActivated runs Activate(), which positions from the cursor and adds gamepad
        // navigation (ContextMenuBrushWidget.cs:112). Setting IsVisible alone does neither.
        _menu.IsActivated = true;

        // Item clicks are handled by the widget itself via OnAnyAction, wired on the next
        // late update (ContextMenuBrushWidget.cs:94); you only supply the item's own action.
        _attackItem.ActionButtonWidget.ClickEventHandlers.Add(w => Debug.Print("attack chosen"));
    }

    public void Close()
    {
        if (_menu != null) { _menu.IsActivated = false; }
    }
}
```

**The mistake that bites.** Opening the menu with `IsVisible = true`. `Activate` never runs, so the menu is
never positioned from the cursor and never registers its gamepad navigation scope — it appears parked at the
bottom-right of the page (where `Deactivate` left it, `ContextMenuBrushWidget.cs:124`) and is
controller-unreachable. Worse, `CustomLateUpdate` will deactivate it on the next frame anyway, because
`_isClickedOnOtherWidget` is still set from the click that was meant to open it
(`ContextMenuBrushWidget.cs:73`).



## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalPadding` | `public float HorizontalPadding { get; set; }` |
| `VerticalPadding` | `public float VerticalPadding { get; set; }` |
| `IsActivated` | `public bool IsActivated { get; set; }` |
| `ActionListPanel` | `public ListPanel ActionListPanel { get; set; }` |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ContextMenuBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AutoClosePopupWidget](../AutoClosePopupWidget)
- [ConversationNameButtonWidget](../ConversationNameButtonWidget)
- [CompassWidget](../CompassWidget)
- [中文页面](../../../../zh/api/mission-ext/ContextMenuBrushWidget)