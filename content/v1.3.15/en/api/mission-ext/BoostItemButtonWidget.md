---
title: "BoostItemButtonWidget"
description: "Auto-generated class reference for BoostItemButtonWidget."
---
# BoostItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs`

## Overview

`BoostItemButtonWidget` is a `ButtonWidget` on the gather-army / army-management screen. It does exactly two
things, both in `OnLateUpdate`, and owns no data of its own beyond one integer.

First, it styles its currency icon. `BoostCurrencyType` is an `int` with three meaningful values handled by
a nested test: `0` sets the icon's state to `"Gold"`, `1` sets it to `"Influence"`
(`BoostItemButtonWidget.cs:30`, `BoostItemButtonWidget.cs:37`), and **every other value leaves the icon
untouched** — there is no `else` arm.

Second, it finds its owning popup. `ParentPopupWidget` is a get-only-in-practice auto property
(`BoostItemButtonWidget.cs:13`) populated lazily by `FindParentPopupWidget`, which walks `ParentWidget`
up to `EventManager.Root` looking for a `BoostCohesionPopupWidget` (`BoostItemButtonWidget.cs:51`). When
one is found, `ClosePopup` is appended to `ClickEventHandlers` so clicking the button also dismisses the
cohesion popup (`BoostItemButtonWidget.cs:45`).

The widget is created by the army-menu prefab; there is no code-side construction site in the 1.3.15 tree,
and the only framework requirement is the single-`UIContext` constructor (`BoostItemButtonWidget.cs:16`).

## Mental Model

Read it as a self-configuring button whose popup wiring is a one-time discovery, not a live relationship.
The boundaries:

- **The currency type field starts at `-1`** (`BoostItemButtonWidget.cs:106`) and the switch has no default
  arm, so before anything is bound the icon keeps whatever visual state the prefab gave it. That is the
  intended "unset" state, not a bug to work around.
- **The popup lookup runs at most once per instance.** The `if (this.ParentPopupWidget == null)` guard
  (`BoostItemButtonWidget.cs:40`) means that once a popup has been found, re-parenting the button, tearing
  down and rebuilding the menu, or swapping the popup leaves the stale reference *and* the stale click
  handler in place. The click handler is only ever added, never removed.
- **The walk's second condition is inert.** `while (widget != EventManager.Root && this.ParentPopupWidget == null)`
  (`BoostItemButtonWidget.cs:54`) — `ParentPopupWidget` is still null for the whole walk, so that half is
  always true and the loop is really "walk to the root".
- **Both icon branches re-run every frame.** `SetState` is called unconditionally each late update
  (`BoostItemButtonWidget.cs:32`), so anything else that tries to change the icon's state is overwritten on
  the next frame.

## How to use

**Getting one.** Reference the class from the army-menu prefab, with `BoostCurrencyIconWidget` bound to the
icon inside the button. Bind `BoostCurrencyType` to `0` for gold or `1` for influence; nothing else is
recognised.

**Typical use** — choosing which currency a cohesion-boost button spends:

```csharp
public class BoostCurrencyBinder
{
    private readonly BoostItemButtonWidget _button;

    public void UseInfluence()
    {
        // 1 -> icon state "Influence" (BoostItemButtonWidget.cs:30)
        _button.BoostCurrencyType = 1;
        Debug.Print("boost button will spend influence");
    }

    public void UseGold()
    {
        // 0 -> icon state "Gold" (BoostItemButtonWidget.cs:37)
        _button.BoostCurrencyType = 0;
    }
}
```

**The mistake that bites.** Using `-1`, `2`, or an enum ordinal from your own mod code to mean "use the
default currency". Because there is no `else` branch, the icon keeps whatever state it last had — so
switching a working gold button to an unrecognised value leaves the gold icon on screen while your code
believes it is now spending something else, and the mismatch only shows up as a confusing UI, never as an
exception. Only `0` and `1` are wired.



## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPopupWidget` | `public BoostCohesionPopupWidget ParentPopupWidget { get; }` |
| `BoostCurrencyType` | `public int BoostCurrencyType { get; set; }` |
| `BoostCurrencyIconWidget` | `public Widget BoostCurrencyIconWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BoostItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)
- [ArmyOverlayCohesionFillBarWidget](../ArmyOverlayCohesionFillBarWidget)
- [BoolBrushChangerBrushWidget](../BoolBrushChangerBrushWidget)
- [ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [中文页面](../../../../zh/api/mission-ext/BoostItemButtonWidget)