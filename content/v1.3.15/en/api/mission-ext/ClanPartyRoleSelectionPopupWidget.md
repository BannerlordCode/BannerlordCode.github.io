---
title: "ClanPartyRoleSelectionPopupWidget"
description: "Auto-generated class reference for ClanPartyRoleSelectionPopupWidget."
---
# ClanPartyRoleSelectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPartyRoleSelectionPopupWidget : AutoClosePopupWidget`
**Base:** `AutoClosePopupWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanPartyRoleSelectionPopupWidget.cs`

## Overview

`ClanPartyRoleSelectionPopupWidget` is the popup that lets the player pick which clan party they want when
joining or leaving a clan. It extends `AutoClosePopupWidget` — the town-management popup shell that hides
itself on an outside click — and adds two things: a registry of "toggle" widgets that must *not* dismiss
it, and an `ActiveToggleWidget` that is cleared whenever the popup closes.

The constructor allocates the toggle list and **starts the popup hidden**, setting `base.IsVisible = false`
in the constructor body (`ClanPartyRoleSelectionPopupWidget.cs:17`). The screen that owns it is responsible
for showing it.

`AddToggleWidget(Widget)` appends to the list, skipping duplicates
(`ClanPartyRoleSelectionPopupWidget.cs:36`). There is no removal counterpart — like the base class, the list
only grows for the life of the instance.

## Mental Model

Read it as the base popup with its close rule replaced, not as the base popup plus an extension. That
distinction matters because the override re-implements the logic rather than extending it:

- **`OnLateUpdate` never calls the base implementation.** The whole body is bespoke
  (`ClanPartyRoleSelectionPopupWidget.cs:21`); `AutoClosePopupWidget.OnLateUpdate` is skipped entirely.
- **The `PopupParentWidget` exception is dropped and replaced.** The base guard is
  `IsVisible && LatestMouseUpWidget != PopupParentWidget && LatestMouseUpWidget != _lastCheckedMouseUpWidget`
  (`AutoClosePopupWidget.cs:29`); this class tests
  `IsVisible && LatestMouseUpWidget != _lastCheckedMouseUpWidget && !_toggleWidgets.Contains(LatestMouseUpWidget)`
  instead (`ClanPartyRoleSelectionPopupWidget.cs:23`). If you set `PopupParentWidget` on this popup, nothing
  reads it here.
- **`_lastCheckedMouseUpWidget` is updated unconditionally, on every frame** — the assignment at
  `ClanPartyRoleSelectionPopupWidget.cs:32` is outside the `if`. The base only updates it inside the close
  check, and only records the mouse-up widget when the popup stayed visible
  (`AutoClosePopupWidget.cs:33`). Because this version consumes the latch even when it skipped the check,
  the anti-flicker protection is weaker than the base's.
- **`ActiveToggleWidget` is reset on hide, not on selection.** Any time the popup is invisible the setter is
  driven to `null` (`ClanPartyRoleSelectionPopupWidget.cs:30`), so the active toggle is a property of the
  popup being *open*, and it does not survive a close.
- `CheckClosingWidgetsAndUpdateVisibility` is still called (`ClanPartyRoleSelectionPopupWidget.cs:26`), so
  the base's `AutoClosePopupClosingWidget` veto mechanism keeps working — but only while the popup is
  visible, since the base method checks that first (`AutoClosePopupWidget.cs:51`).

## How to use

**Getting one.** Reference it from the clan-menu prefab as a popup root, set `PopupParentWidget` only if some
other code reads it, and register the clickable toggle rows with `AddToggleWidget` before the popup is shown.

**Typical use** — opening the popup and registering the toggles that must keep it open:

```csharp
public class ClanRolePopupDriver : MissionBehavior
{
    private readonly ClanPartyRoleSelectionPopupWidget _popup;
    private readonly Widget _partyToggle;
    private readonly Widget _armyToggle;

    public void Open()
    {
        // The widget hides itself in its constructor (ClanPartyRoleSelectionPopupWidget.cs:17),
        // so the owner is the only thing that can show it.
        _popup.IsVisible = true;

        // Toggles are matched by reference; clicking one must not dismiss the popup
        // (ClanPartyRoleSelectionPopupWidget.cs:23).
        _popup.AddToggleWidget(_partyToggle);
        _popup.AddToggleWidget(_armyToggle);

        // Cleared automatically whenever the popup becomes invisible
        // (ClanPartyRoleSelectionPopupWidget.cs:30).
        _popup.ActiveToggleWidget = _partyToggle;
    }
}
```

**The mistake that bites.** Setting `PopupParentWidget` and expecting the popup to survive a click on that
button. This class's `OnLateUpdate` never reads `PopupParentWidget`
(`ClanPartyRoleSelectionPopupWidget.cs:23`) — only `_toggleWidgets` gets that exemption — so the popup
closes on the same click that opened it and appears to flicker shut. Register the button with
`AddToggleWidget` instead.



## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveToggleWidget` | `public Widget ActiveToggleWidget { get; set; }` |

## Key Methods

### AddToggleWidget
`public void AddToggleWidget(Widget widget)`

**Purpose:** Adds toggle widget to the current collection or state.

```csharp
// Obtain an instance of ClanPartyRoleSelectionPopupWidget from the subsystem API first
ClanPartyRoleSelectionPopupWidget clanPartyRoleSelectionPopupWidget = ...;
clanPartyRoleSelectionPopupWidget.AddToggleWidget(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanPartyRoleSelectionPopupWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AutoClosePopupWidget](../AutoClosePopupWidget)
- [AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [中文页面](../../../../zh/api/mission-ext/ClanPartyRoleSelectionPopupWidget)