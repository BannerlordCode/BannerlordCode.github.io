---
title: "BarterTupleItemButtonWidget"
description: "A Gauntlet ButtonWidget for one barter item row: switches between a count label and a slider when an item is both multi-count and offered, and null-dereferences on the first frame if the prefab does not bind both child widgets."
---

# BarterTupleItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterTupleItemButtonWidget.cs`

## Overview

`BarterTupleItemButtonWidget` is **one row of the barter screen's item list** — the button that represents a single barterable item. The file is 76 lines. Its job is a small state machine over two flags: `IsMultiple` (the item can have a quantity above one) and `IsOffered` (this side is the one offering it).

`Refresh()` (`BarterTupleItemButtonWidget.cs:69-75`) turns those two flags into four widget states: show the slider only when *both* flags are set, hide the count text in exactly that same case, mark the button selected, and disable event handling. So **"multiple AND offered" is the mode where the UI swaps the numeric count for a slider** — which is why this widget references both child widgets by name.

It also runs `Refresh()` once on its first update (`BarterTupleItemButtonWidget.cs:62-66`), so the visual state is correct before any flag has been assigned.

## Mental Model

### What it is / which layer

- It is a **container-and-state widget**: it owns no data about the item, only the two presentation booleans, and it drives four pieces of its own subtree.
- Think of it as "**one barter row, two modes**". Not-multiple, or not-offered → the row is a plain button with a count label. Multiple *and* offered → the row becomes interactive with a slider and the count label is hidden, because the slider already communicates the quantity.
- The two child widgets it holds are `SliderParentList` and `CountText` (`BarterTupleItemButtonWidget.cs:14`, `:16`), both plain auto-properties bound from the prefab. `CountText` is a `TextWidget` — in the barter prefab that is [`BarterItemCountTextWidget`](../BarterItemCountTextWidget); the class is declared as the base type, so the concrete instance is whatever the prefab puts there.
- The class is **not sealed** (`public class BarterTupleItemButtonWidget : ButtonWidget`, `BarterTupleItemButtonWidget.cs:6`), so you may subclass it — but see the consequence below before you do.

### The consequence that matters

**`Refresh()` dereferences `SliderParentList` and `CountText` with no null check, and it runs on the first frame whether you asked for it or not.** `BarterTupleItemButtonWidget.cs:71-72` reads `SliderParentList.IsVisible` and `CountText.IsHidden` directly. `OnLateUpdate` calls `Refresh()` unconditionally on the first update (`BarterTupleItemButtonWidget.cs:62-66`), setting `_initialized = true` right after.

So **if your prefab does not bind both child widgets, the widget throws a `NullReferenceException` on its first frame** — before you set either flag, and regardless of what values you intended. Note the asymmetry: the method `RegisterStatesOfWidgetFromBrush` in the sibling [`BarterItemVisualBrushWidget`](../BarterItemVisualBrushWidget) *does* null-check its widget argument, so this unguarded style is not a house convention you can rely on. Because the failure is on the first frame and from inside `OnLateUpdate`, it surfaces as an exception during the UI update rather than at the point where you forgot the binding — which makes it a genuinely awkward bug to trace back.

## How to use

**How to obtain it.** You cannot usefully construct it: the only constructor takes a `UIContext` (`BarterTupleItemButtonWidget.cs:54`), which the Gauntlet movie system owns. **The real path is the prefab**: declare `<BarterTupleItemButtonWidget>` in Gauntlet XML with the slider container and count text inside it, bind them by `Type`, and the movie instantiates and wires it. Because both flags' setters call `Refresh()` (`BarterTupleItemButtonWidget.cs:31`, `:49`), assigning either one from code re-derives the whole visual state — you never call `Refresh()` yourself.

**A typical use.** Set the two flags and let the row pick its mode:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class BarterRowBinder
{
    // `row` comes from the prefab tree; you never construct it.
    public static void Configure(BarterTupleItemButtonWidget row,
                                 bool itemCanStack,
                                 bool thisSideOffersIt)
    {
        if (row == null)
            return;

        // Each setter calls Refresh() (BarterTupleItemButtonWidget.cs:31 / :49),
        // which recomputes all four widget states. Setting only the second flag
        // leaves the first at its default (false) until you get here.
        row.IsMultiple = itemCanStack;
        row.IsOffered = thisSideOffersIt;

        // Refresh() (BarterTupleItemButtonWidget.cs:71-74) then decided:
        //   slider shown / count hidden  when IsMultiple && IsOffered
        //   button selected + no events   when IsOffered
    }
}
```

Verify the prefab is complete before the first frame, rather than after:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class RowPreflight
{
    // Refresh() dereferences both children with no null check
    // (BarterTupleItemButtonWidget.cs:71-72) and OnLateUpdate calls it on the
    // first update (:62-66). Checking here turns an exception during the UI
    // update into a message you can act on.
    public static bool IsFullyBound(BarterTupleItemButtonWidget row)
    {
        return row != null
            && row.SliderParentList != null
            && row.CountText != null;
    }
}
```

**What to watch out for.** The trap is assuming a flag assignment is safe on a partially bound row. `IsMultiple`'s setter calls `Refresh()` (`BarterTupleItemButtonWidget.cs:31`) the moment the value changes, so the first assignment is enough to trigger the null dereference. If your row crashes on open, check the prefab's bindings before you check your logic. The second thing to know is that `Refresh()` sets `base.DoNotAcceptEvents = IsOffered` (`BarterTupleItemButtonWidget.cs:74`) — so on the offering side the row stops receiving events, and a widget that has been marked offered cannot be clicked to un-offer it.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `SliderParentList` | `public ListPanel SliderParentList { get; set; }` at `BarterTupleItemButtonWidget.cs:14` | The container for the quantity slider, as a `ListPanel`. Declared as a plain auto-property with **no null guard and no `OnPropertyChanged`**. Read only inside `Refresh()` at `BarterTupleItemButtonWidget.cs:71`, where `SliderParentList.IsVisible = IsMultiple && IsOffered`. **Leaving it null crashes the first frame** — see Risks. Bind it from the prefab before the widget's first update. |
| `CountText` | `public TextWidget CountText { get; set; }` at `BarterTupleItemButtonWidget.cs:16` | The quantity label, typed as the base `TextWidget` so any text widget can be bound. Read at `BarterTupleItemButtonWidget.cs:72` where `CountText.IsHidden = IsMultiple && IsOffered` — i.e. the label is hidden in exactly the mode where the slider appears. Also a plain auto-property, also unguarded. In the barter prefab the instance is a [`BarterItemCountTextWidget`](../BarterItemCountTextWidget), but the declared type means you cannot call `Count` through this reference without a cast. |
| `IsMultiple` | `[Editor(false)] public bool IsMultiple { get; set; }` at `BarterTupleItemButtonWidget.cs:19`, backing field `_isMultiple` at `:10` | Whether this item can have a quantity above one. The setter compares, assigns, fires `OnPropertyChanged(value, "IsMultiple")` (`:30`) and then calls `Refresh()` (`:31`) — **so a property assignment changes the whole subtree**. Half of the condition at `BarterTupleItemButtonWidget.cs:71-72`. `[Editor(false)]` keeps it out of the Gauntlet editor's authoring list. |
| `IsOffered` | `[Editor(false)] public bool IsOffered { get; set; }` at `BarterTupleItemButtonWidget.cs:37`, backing field `_isOffered` at `:12` | Whether this side of the barter is the one offering the item. Setter behaves identically to `IsMultiple`: `OnPropertyChanged` then `Refresh()` (`BarterTupleItemButtonWidget.cs:48-49`). **It also drives two extra effects beyond the slider**: `base.IsSelected = IsOffered` (`:73`) and `base.DoNotAcceptEvents = IsOffered` (`:74`), so setting it true both highlights the row and stops it accepting events. |
| `Refresh()` | `private void Refresh()` at `BarterTupleItemButtonWidget.cs:69-75` | The state machine. Sets `SliderParentList.IsVisible = IsMultiple && IsOffered` (`:71`), `CountText.IsHidden = IsMultiple && IsOffered` (`:72`), `base.IsSelected = IsOffered` (`:73`), `base.DoNotAcceptEvents = IsOffered` (`:74`). **`private`, not `protected` and not `virtual`** — so a subclass cannot override it to customise the layout, and cannot call it to force a re-derivation; the only ways to trigger it are changing a flag or the first-frame path. It dereferences both child widgets without null checks. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `BarterTupleItemButtonWidget.cs:59-67` | Calls `base.OnLateUpdate(dt)` (`:61`) and, when `_initialized` is false, runs `Refresh()` and sets `_initialized = true` (`:62-66`). **This is the first-frame crash site**: the refresh happens before any of your code has had a chance to set the flags or verify the bindings. After the first run this method does nothing. |
| `BarterTupleItemButtonWidget(UIContext)` | `public BarterTupleItemButtonWidget(UIContext context) : base(context)` at `BarterTupleItemButtonWidget.cs:54-57` | The only constructor, forwarding to `ButtonWidget` and doing nothing else. **Not callable from mod code**, because `UIContext` belongs to the Gauntlet movie. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `IsSelected` | [`ButtonWidget`](../../gui/ButtonWidget) | Written at `BarterTupleItemButtonWidget.cs:73` to reflect `IsOffered`; the row's highlight is derived, not independent. |
| `DoNotAcceptEvents` | [`Widget`](../../gui/Widget) | Written at `BarterTupleItemButtonWidget.cs:74` to `IsOffered`. On the offering side the row cannot be interacted with at all. |
| `IsHidden` | [`Widget`](../../gui/Widget) | Written at `BarterTupleItemButtonWidget.cs:72`, applied to `CountText` rather than to this widget. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A public `Refresh` or layout override point | **UNRESOLVED — does not exist** | `Refresh()` is `private` (`BarterTupleItemButtonWidget.cs:69`). Positive evidence: `grep -n 'Refresh' BarterTupleItemButtonWidget.cs` returns four hits — the two setter calls at `:31` and `:49`, the definition at `:69`, and the first-frame call at `:64` — and none is `protected` or `virtual`. |
| Any property identifying the item or its quantity | **UNRESOLVED — absent in v1.4.5** | The file declares two public auto-properties and two `[Editor(false)]` booleans; there is no item id, no count, and no data binding. The row is presentation only. Positive evidence: `grep -cE '\[Editor\(false\)\]' BarterTupleItemButtonWidget.cs` returns 2 (`:18`, `:36`), so there are exactly two editor-flagged members. |
| A null guard on the child widgets | **UNRESOLVED — does not exist** | `BarterTupleItemButtonWidget.cs:71-72` dereference both without a check, unlike the guarded style in `BarterItemVisualBrushWidget.RegisterStatesOfWidgetFromBrush`. |

## Examples

Bind a row from the prefab and only then drive its flags:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class BarterRowBinder
{
    private readonly BarterTupleItemButtonWidget _row;

    public BarterRowBinder(BarterTupleItemButtonWidget row)
    {
        // Check the bindings before anything can trigger Refresh()
        // (BarterTupleItemButtonWidget.cs:62-66 fires on the first update).
        if (row == null || row.SliderParentList == null || row.CountText == null)
        {
            Debug.Print("barter row is not fully bound; skipping", 0);
            return;
        }

        _row = row;
    }

    public void Configure(bool itemCanStack, bool thisSideOffersIt)
    {
        if (_row == null)
            return;

        // Both setters call Refresh() (BarterTupleItemButtonWidget.cs:31 / :49).
        _row.IsMultiple = itemCanStack;
        _row.IsOffered = thisSideOffersIt;
    }
}
```

Read back the mode the row chose, instead of recomputing it yourself:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class RowMode
{
    // The slider/count decision is made in exactly one place,
    // BarterTupleItemButtonWidget.cs:71-72. Ask the widget rather than
    // duplicating the `IsMultiple && IsOffered` rule.
    public static bool IsUsingSlider(BarterTupleItemButtonWidget row)
    {
        return row != null && row.SliderParentList != null && row.SliderParentList.IsVisible;
    }

    public static bool IsInteractive(BarterTupleItemButtonWidget row)
    {
        // DoNotAcceptEvents was set to IsOffered at
        // BarterTupleItemButtonWidget.cs:74, so an offered row is inert.
        return row != null && !row.DoNotAcceptEvents;
    }
}
```

The crash, shown so the symptom is recognisable:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class UnboundRow
{
    public static void Configure(BarterTupleItemButtonWidget row)
    {
        if (row == null)
            return;

        // WRONG on a row whose prefab omitted the slider container: the setter
        // calls Refresh() (BarterTupleItemButtonWidget.cs:31), which reads
        // SliderParentList.IsVisible (:71) with no null check. If the widget's
        // first update has not happened yet, you crash here; if it has, you
        // already crashed inside OnLateUpdate (:64). Both surface as a
        // NullReferenceException during the UI update, not as a binding error.
        row.IsMultiple = true;
    }
}
```

## Risks and crash boundaries

- **`NullReferenceException` on the first frame if either child is unbound.** `Refresh()` reads `SliderParentList.IsVisible` and `CountText.IsHidden` at `BarterTupleItemButtonWidget.cs:71-72` with no null check, and `OnLateUpdate` invokes it on the first update (`:64`) before you can intervene. Because the throw happens inside the UI update rather than at your assignment, the stack trace points at the widget, not at the missing binding.
- **A property assignment is enough to trigger it.** `IsMultiple`'s setter calls `Refresh()` at `BarterTupleItemButtonWidget.cs:31`, so setting either flag on a partially bound row crashes immediately.
- **`Refresh()` is private and not virtual.** `BarterTupleItemButtonWidget.cs:69`. You cannot override it to customise the layout and cannot call it to force a re-derivation; the only triggers are a flag change or the first-frame path.
- **An offered row stops accepting events.** `base.DoNotAcceptEvents = IsOffered` at `BarterTupleItemButtonWidget.cs:74`. Once `IsOffered` is true the row cannot be clicked, so a UI that expects the player to toggle the offer by clicking the row cannot do so through this widget.
- **`CountText` is typed as the base `TextWidget`.** `BarterTupleItemButtonWidget.cs:16`. Even though the bound instance is usually a [`BarterItemCountTextWidget`](../BarterItemCountTextWidget), you cannot read or write its `Count` through this reference without casting.
- **`CountText` uses `IsHidden`, the row uses `IsVisible`.** `BarterTupleItemButtonWidget.cs:72` versus `:71`. The two are independent in Gauntlet, so mixing them in your own layout code produces widgets that are neither shown nor logically hidden.
- **No guard on its own visibility.** `Refresh()` only touches its children and two inherited flags; the row's own `IsVisible` is untouched, so an externally hidden row still runs `Refresh()`.
- **Not a save participant.** No `[Serializable]`; two booleans and two widget references, all transient.

## Cross-Version Notes

The v1.4.5 file is 76 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/` layout, and the same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same shape: two plain child-widget properties, two `[Editor(false)]` booleans, a private `Refresh()`, and a first-frame call to it. The stable part across those versions is the `IsMultiple && IsOffered` condition and the fact that both are managed-side with no native symbol protecting them. **The unguarded dereference in `Refresh()` is a managed-side implementation detail and is the most likely thing to change** — a later version may well have added the null checks that this one lacks, so do not carry "this throws" forward as a permanent property of the widget; verify it in the version you are targeting. Conversely, do not rely on a fix: bind both children. **VERIFIED MEASURED for v1.4.5** (76 lines, 4 properties, 1 private method, 1 override, 1 constructor); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`ButtonWidget`](../../gui/ButtonWidget), supplying `IsSelected` (written at `BarterTupleItemButtonWidget.cs:73`) and the button callbacks.
- Visibility, hiding and event plumbing: [`Widget`](../../gui/Widget) — `DoNotAcceptEvents` written at `:74`, `IsVisible` on the child at `:71`, `IsHidden` on the child at `:72`.
- The count label it hides: [`BarterItemCountTextWidget`](../BarterItemCountTextWidget), referenced through the base `TextWidget` type at `BarterTupleItemButtonWidget.cs:16`.
- The quantity button in the same row: [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget), whose `"MoveOne"` event the prefab wires to whatever updates the count label.
- The item-row brush that renders the barter `Type` visuals: [`BarterItemVisualBrushWidget`](../BarterItemVisualBrushWidget).
- Bucket index: [mission-ext API index](../)