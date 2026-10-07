---
title: "BarterItemCountTextWidget"
description: "A Gauntlet TextWidget that stores a barter item quantity and hides itself when the value is 1 or less. Covers the Count setter, the IsVisible rule inside it, and why a count of 1 is deliberately not shown."
---

# BarterItemCountTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemCountTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterItemCountTextWidget.cs`

## Overview

`BarterItemCountTextWidget` is the **quantity label of the barter screen's item-count control**. The file is 33 lines and holds exactly one piece of state: a private `int _count` (`BarterItemCountTextWidget.cs:8`), exposed through the public `Count` property (`BarterItemCountTextWidget.cs:11`).

The interesting part is what the setter does besides storing. On every change it performs **three** actions (`BarterItemCountTextWidget.cs:19-25`): fires `OnPropertyChanged`, writes `base.IntText = value`, and then sets `base.IsVisible = value > 1;`.

That last line is the class's whole design: **a quantity of 0 or 1 is not displayed.** The widget exists to show "×3", "×7" — the cases where a count is worth stating. At 0 there is nothing to offer; at 1 the default quantity needs no label.

## Mental Model

### What it is / which layer

- It is a **display widget that doubles as the store for its own value**. The count lives in `_count` and in `IntText` simultaneously; this widget does not read the count from the barter model, it *is* the count's current holder in the view.
- Think of it as "**show the multiplier only when it is greater than one**". It is not a general-purpose number label — plug in a leading `1` and the widget correctly refuses to show it.
- It is the display counterpart of [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget), which fires a `"MoveOne"` event to change the quantity. **Neither widget references the other.** The button emits an event; some handler updates this widget's `Count`. The pairing is entirely by prefab wiring.
- The class is **not sealed** (`public class BarterItemCountTextWidget : TextWidget`, `BarterItemCountTextWidget.cs:6`), so you may subclass it.

### The consequence that matters

**Setting `Count` also sets `IsVisible`, and the rule is `value > 1`, not `value > 0`.** The assignment sits at `BarterItemCountTextWidget.cs:24`, inside the setter. So if you want to display a quantity of exactly one — "you have 1 of these" — **this widget will not show it**, and there is no property to change that: the threshold is hard-coded in the setter body with no backing field and no override point.

The second consequence is a subtler one about *when* the write happens. The setter body is wrapped in `if (_count != value)` (`BarterItemCountTextWidget.cs:19`). So **assigning the same value twice does nothing the second time** — no `OnPropertyChanged`, no `IntText` write, no visibility update. If external code has changed `IsVisible` and you re-assign the unchanged count to restore it, nothing happens.

## How to use

**How to obtain it.** You cannot usefully construct it: the only constructor takes a `UIContext` (`BarterItemCountTextWidget.cs:29`), which the Gauntlet movie system owns. **The real path is the prefab**: declare `<BarterItemCountTextWidget>` in Gauntlet XML, let the movie instantiate it, and reach the instance from the widget tree via a `Type` binding or a parent lookup. Since it is `public` and not sealed (`BarterItemCountTextWidget.cs:6`), you can also subclass it.

**A typical use.** Drive the quantity from the barter model and let the widget decide visibility:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class QuantityLabel
{
    // `label` comes from the prefab tree; you never construct it.
    public static void Apply(BarterItemCountTextWidget label, int quantity)
    {
        if (label == null)
            return;

        // One assignment does three things (BarterItemCountTextWidget.cs:19-25):
        // notifies the binding, writes IntText, and sets
        // IsVisible = quantity > 1 (BarterItemCountTextWidget.cs:24).
        label.Count = quantity;

        // For 0 and 1 the widget hides itself. That is by design, not a bug.
        // Do not also set label.IsVisible — the next Count write overwrites it.
    }
}
```

Subclass it when you need a count of 1 to be visible:

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

// BarterItemCountTextWidget is public and not sealed
// (BarterItemCountTextWidget.cs:6). The `value > 1` threshold is hard-coded in
// the base setter (BarterItemCountTextWidget.cs:24) with no override point, so
// re-showing a count of 1 means re-showing it AFTER the base assignment.
public class ShowAtOneItemCountTextWidget : BarterItemCountTextWidget
{
    public ShowAtOneItemCountTextWidget(UIContext context)
        : base(context)
    {
    }

    public new int Count
    {
        get => base.Count;
        set
        {
            base.Count = value;          // base sets IsVisible = value > 1 (:24)
            base.IsVisible = value >= 1; // correct it afterwards
        }
    }
}
```

**What to watch out for.** The trap is the `> 1` threshold. A modder wiring a quantity readout who expects "1" to be visible gets an invisible widget with no error, because the line hiding it is a normal assignment inside a property setter. If your design needs to show a count of one, either use a plain [`TextWidget`](../../gui/TextWidget) instead, or use the subclass pattern above. Second, do not rely on re-assigning the same `Count` to refresh anything — the `if (_count != value)` guard at `BarterItemCountTextWidget.cs:19` makes it a no-op.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Count` | `[Editor(false)] public int Count { get; set; }` at `BarterItemCountTextWidget.cs:11`, backing field `_count` at `:8` | The item quantity this widget displays, and the setter is where the class's real behaviour lives. On change (`:19`) it fires `OnPropertyChanged(value, "Count")` (`:22`), writes `base.IntText = value` (`:23`), then `base.IsVisible = value > 1;` (`:24`). **Three consequences of one assignment**, and the last is a hard-coded threshold with no override point. `IntText` — not `Text` — is what gets written, so this widget renders as a number. `[Editor(false)]` keeps it out of the Gauntlet editor's authoring list. |
| `BarterItemCountTextWidget(UIContext)` | `public BarterItemCountTextWidget(UIContext context) : base(context)` at `BarterItemCountTextWidget.cs:29-32` | The only constructor, forwarding to `TextWidget` and doing nothing else. **Not callable from mod code**, because `UIContext` belongs to the Gauntlet movie. A consequence worth knowing: because `_count` starts at `0` (`BarterItemCountTextWidget.cs:8`) and the visibility assignment lives only in the setter, a freshly created widget has **never had its visibility set** — it takes whatever `TextWidget` defaults to until the first `Count` assignment. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `IntText` | [`TextWidget`](../../gui/TextWidget) | The rendering target, written at `BarterItemCountTextWidget.cs:23`. Because it is `IntText` and not `Text`, this widget displays a number, and the AutoHide family that tests `Text` does not apply to it. |
| `IsVisible` | [`Widget`](../../gui/Widget) | Written at `BarterItemCountTextWidget.cs:24`, once per genuine `Count` change. |
| `OnPropertyChanged` | [`Widget`](../../gui/Widget) | Fired at `BarterItemCountTextWidget.cs:22`; this is what makes the value bindable from a prefab. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A configurable visibility threshold | **UNRESOLVED — does not exist** | `base.IsVisible = value > 1;` is hard-coded at `BarterItemCountTextWidget.cs:24` with no backing field. Positive evidence: `grep -c 'Editor(false)' BarterItemCountTextWidget.cs` returns 1 (`BarterItemCountTextWidget.cs:10`), so `Count` is the only `[Editor]`-flagged member in the file. |
| A max / clamp | **UNRESOLVED — absent in v1.4.5** | The setter stores whatever `int` it is given; clamping is the caller's job. The button that drives it ([`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget)) fires per frame with no cap, so the clamp has to live at the handler. |
| Any read-only display string | **UNRESOLVED — absent in v1.4.5** | The file declares no members beyond `Count` and the constructor, so there is no prefixed form (`"x3"`) available; `TextWidget` renders the bare integer written to `IntText`. |

## Examples

Set a quantity and read back what the widget decided:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class QuantityLabel
{
    public static void Apply(BarterItemCountTextWidget label, int quantity)
    {
        if (label == null)
            return;

        label.Count = quantity;

        // IsVisible is now quantity > 1 (BarterItemCountTextWidget.cs:24).
        // Asking the widget is the honest way to report it.
        Debug.Print("count " + label.Count + ", showing: " + label.IsVisible, 0);
    }
}
```

Handle the repeat from the button without letting it overshoot:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class QuantityController
{
    private readonly BarterItemCountTextWidget _label;
    private readonly int _max;

    public QuantityController(BarterItemCountTextWidget label, int max)
    {
        _label = label;
        _max = max;
    }

    // Wired to "MoveOne" from BarterItemCountControlButtonWidget.cs:25 / :33,
    // which fires once per frame while held. Clamp here, because the button does
    // not and this widget does not either.
    public void OnMoveOne()
    {
        int next = _label.Count + 1;
        if (next > _max)
        {
            next = _max;
        }

        // Assign only on change — re-assigning the same value is a no-op
        // because of the guard at BarterItemCountTextWidget.cs:19.
        _label.Count = next;
    }
}
```

Notice the no-op refresh, which is a genuine trap:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class RefreshTrap
{
    public static void ForceShow(BarterItemCountTextWidget label, bool show)
    {
        if (label == null)
            return;

        label.IsVisible = show;
        label.Count = label.Count;   // does NOTHING: `if (_count != value)`
                                     // fails at BarterItemCountTextWidget.cs:19,
                                     // so OnPropertyChanged, IntText and
                                     // IsVisible are all skipped.
    }
}
```

## Risks and crash boundaries

- **A count of 1 is never displayed.** `base.IsVisible = value > 1;` at `BarterItemCountTextWidget.cs:24`. Hard-coded, no backing field, no override point. Code that sets `Count = 1` and expects a visible "1" gets an invisible widget with no error — this is the modder's "I set it and nothing appeared" case.
- **Re-assigning the same value is a no-op.** The `if (_count != value)` guard at `BarterItemCountTextWidget.cs:19` skips all three side effects. You cannot use a self-assignment to refresh `IsVisible`, `IntText`, or a binding.
- **Every `Count` write also writes `IsVisible`.** At `BarterItemCountTextWidget.cs:24`, so external code that owns this widget's visibility is fighting the setter, and the last writer to `Count` wins.
- **No clamping.** The setter accepts any `int`. Combined with the per-frame `"MoveOne"` repeat from [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget), a handler that does not clamp will drive the count arbitrarily far, and this widget will display it happily.
- **Visibility is never initialised by the constructor.** `_count` starts at `0` (`BarterItemCountTextWidget.cs:8`) and the visibility assignment lives only in the setter, so before the first `Count` assignment the widget's visibility is whatever `TextWidget` defaults to — not necessarily hidden.
- **`IntText`, not `Text`.** At `BarterItemCountTextWidget.cs:23`. The `Text`-based hide rules in [`AutoHideTextWidget`](../AutoHideTextWidget) and [`AutoHideRichTextWidget`](../AutoHideRichTextWidget) do not apply to this widget.
- **Constructing it yourself is not a supported pattern.** The only constructor needs a `UIContext` (`BarterItemCountTextWidget.cs:29`) owned by the movie.
- **Not a save participant.** No `[Serializable]`; one transient int.

## Cross-Version Notes

The v1.4.5 file is 33 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/` layout, and the same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same shape: one `int` field, one `[Editor(false)]` `Count` property, one constructor. The `> 1` visibility threshold has been the stable part across those versions and is the rule to rely on. What is version-sensitive is the **property name** `Count` and the fact that it writes `IntText`: both are managed-side decisions with no native symbol protecting them, so a later version may have renamed the property or switched to a formatted string without any binding break elsewhere. The sibling widgets in this `Barter` subfolder are maintained independently — [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget) has no reference to this class at all — so a change to one does not propagate. **VERIFIED MEASURED for v1.4.5** (33 lines, 1 field, 1 property, 1 constructor); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`TextWidget`](../../gui/TextWidget), supplying the `IntText` written at `BarterItemCountTextWidget.cs:23`.
- Visibility and binding plumbing: [`Widget`](../../gui/Widget) — `IsVisible` written at `:24`, `OnPropertyChanged` fired at `:22`.
- The button that changes this quantity: [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget), which fires the `"MoveOne"` event at `:25` and `:33` and holds no reference to this widget.
- The row widget that decides whether this count or a slider is shown: [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget), whose `Refresh()` toggles `CountText.IsHidden` at `BarterTupleItemButtonWidget.cs:72`.
- The item-row renderer driven by the barter `Type` strings: [`BarterItemVisualBrushWidget`](../BarterItemVisualBrushWidget).
- Bucket index: [mission-ext API index](../)