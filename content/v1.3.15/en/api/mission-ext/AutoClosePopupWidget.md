---
title: "AutoClosePopupWidget"
description: "Auto-generated class reference for AutoClosePopupWidget."
---
# AutoClosePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs`

## Overview

`AutoClosePopupWidget` is a `Widget` container that hides itself when the player clicks outside it. It is the
town-management / menu popup shell: it derives straight from `Widget`, adds no rendering, and contributes
two pieces of state — `PopupParentWidget`, the widget that opened it, and a private list of
`AutoClosePopupClosingWidget` children that may veto keeping the popup open
(`AutoClosePopupWidget.cs:88`).

The class runs entirely from `OnLateUpdate` (`AutoClosePopupWidget.cs:26`). Two independent things can
close it. First, a mouse-up that landed neither on `PopupParentWidget` nor anywhere inside the popup makes
`IsVisible` false outright (`AutoClosePopupWidget.cs:31`). Second, `CheckClosingWidgetsAndUpdateVisibility`
asks every registered closing widget in turn, and the first one that returns `true` from
`ShouldClosePopup()` closes the popup (`AutoClosePopupWidget.cs:49`).

The "closing widget" concept is the interesting half. `AutoClosePopupClosingWidget.ShouldClosePopup` returns
true when the click landed exactly on its `Target` (if `IncludeTarget`), or anywhere inside `Target`'s
subtree (if `IncludeChildren`) — otherwise false
(`AutoClosePopupClosingWidget.cs:32`). It is how a popup stays open while the player interacts with
something that is visually outside it, such as an overlay list.

## Mental Model

Read it as a click-scoped container whose children can veto dismissal. The boundaries:

- **It can close but never open.** The whole body of `OnLateUpdate` is gated on `base.IsVisible`
  (`AutoClosePopupWidget.cs:29`), so a hidden popup does nothing on its own. Whatever code owns the
  opening button must set `IsVisible = true`; this class will never do it for you.
- **One mouse-up is evaluated once.** After a close, `_lastCheckedMouseUpWidget` is set to the widget that
  received the mouse-up (or `null` if the popup closed), and the next frame the same mouse-up widget is
  skipped (`AutoClosePopupWidget.cs:29`, `AutoClosePopupWidget.cs:33`). `_lastCheckedMouseUpWidget` is
  `protected`, so a subclass can clear it — but nothing does so for you. This is the anti-flicker latch;
  without it the popup would re-close on the same click that opened it.
- **The closing-widget list only ever grows.** It is populated once in the constructor by scanning existing
  children (`AutoClosePopupWidget.cs:15`) and again in `OnChildAdded`
  (`AutoClosePopupWidget.cs:38`), but there is no matching `OnChildRemoved` override and no removal
  anywhere in the class.
- **`PopupParentWidget` is the exception carve-out, not a parent in the widget tree.** The name is
  misleading: nothing re-parents anything. It is compared by reference against `LatestMouseUpWidget` so
  that clicking the button which opened the popup does not dismiss it
  (`AutoClosePopupWidget.cs:29`).

## How to use

**Getting one.** Drop the class into a Gauntlet prefab as the popup root and set `PopupParentWidget` in
the prefab to the button that opens it. The single-`UIContext` constructor at `AutoClosePopupWidget.cs:12`
is all the framework needs; the child scan happens as part of construction. To add a "keep open while this
is used" region, nest an `AutoClosePopupClosingWidget` inside it with `Target` set.

**Typical use** — from a screen that opens the popup and wires the veto region:

```csharp
public class TownPopupController : ScreenBase
{
    private AutoClosePopupWidget _popup;      // bound from the prefab, never constructed here
    private Widget _openButton;

    public override void OnScreenInitialize()
    {
        // Clicking the button that opened the popup must not dismiss it
        // (AutoClosePopupWidget.cs:29) - that is all PopupParentWidget is for.
        _popup.PopupParentWidget = _openButton;
    }

    public override void OnScreenTick(float dt)
    {
        // The widget can close but never open: OnLateUpdate is gated on IsVisible
        // (AutoClosePopupWidget.cs:29), so the screen owns the open path.
        if (Input.IsKeyPressed(InputKey.Escape) && _popup.IsVisible)
        {
            _popup.IsVisible = false;
        }
    }
}
```

**The mistake that bites.** Removing an `AutoClosePopupClosingWidget` from the tree after registering it
and expecting the popup to start closing on that area again. `OnChildAdded` adds entries but nothing ever
removes them, so the stale entry stays in `_closingWidgets` and keeps returning `true` from
`ShouldClosePopup()` — the popup closes the instant the player touches that region, for the rest of the
session.



## Key Properties

| Name | Signature |
|------|-----------|
| `PopupParentWidget` | `public Widget PopupParentWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AutoClosePopupWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [AutoHideTextWidget](../AutoHideTextWidget)
- [中文页面](../../../../zh/api/mission-ext/AutoClosePopupWidget)