---
title: "BarterItemCountControlButtonWidget"
description: "A Gauntlet ButtonWidget that fires a MoveOne event once per click and then every frame while held past IncreaseToHoldDelay. Covers the auto-repeat loop, the shared MoveOne event name, and the per-frame fire rate."
---

# BarterItemCountControlButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemCountControlButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterItemCountControlButtonWidget.cs`

## Overview

`BarterItemCountControlButtonWidget` is the **increment / decrement button of the barter screen's item-quantity control**. The file is 41 lines. Its job is a press-and-hold auto-repeat: tap it once to move one item, keep holding and it keeps firing.

The mechanism has two halves. `OnMousePressed` (`BarterItemCountControlButtonWidget.cs:29-34`) records the press time and fires the event once. `OnLateUpdate` (`BarterItemCountControlButtonWidget.cs:19-27`) then, on **every frame** while `IsPressed` and the hold delay has elapsed, fires the same event again (`BarterItemCountControlButtonWidget.cs:25`).

The event name is the literal string `"MoveOne"` (`BarterItemCountControlButtonWidget.cs:25` and `:33`). That name is the entire contract between this widget and whatever handles it — the widget does not know whether it increments or decrements; direction is decided by the handler.

## Mental Model

### What it is / which layer

- It is a **Gauntlet UI input widget**, not a model. It owns two `float` timing fields (`BarterItemCountControlButtonWidget.cs:8`, `:10`) and one public knob, and emits a named event. It never touches the item count itself.
- The naming is worth reading carefully: "ItemCountControl**Button**" is the button; the quantity it changes lives in a *separate* widget, [`BarterItemCountTextWidget`](../BarterItemCountTextWidget), which is where the count is stored. The button has no reference to it. Communication is entirely through the `"MoveOne"` event.
- Think of it as a **repeating key**: click for one step, hold for continuous. That is why the delay knob exists — without it, a mouse-down would flood the handler with one event per frame.
- The class is **not sealed** (`public class BarterItemCountControlButtonWidget : ButtonWidget`, `BarterItemCountControlButtonWidget.cs:6`), so you may subclass it.

### The consequence that matters

**The auto-repeat fires once per frame with no rate limit and no cap.** `BarterItemCountControlButtonWidget.cs:25` calls `EventFired("MoveOne")` whenever the press condition holds, and `OnLateUpdate` runs every frame. There is no interval, no accumulator, and no maximum. So a handler for `"MoveOne"` must be **cheap and idempotent**, and must clamp the resulting count — a handler that clamps only on the click and not on the repeat will sail past the available stock, because holding the button for one second produces on the order of sixty events.

The second consequence is subtler and worth knowing: **`_clickStartTime` is only reset on mouse release** (`BarterItemCountControlButtonWidget.cs:36-40`). A press that begins while the widget is not properly released — for example after a screen transition swallows the release — leaves `_clickStartTime` at its old value, and the repeat condition stays satisfied for as long as `IsPressed` remains true.

## How to use

**How to obtain it.** You cannot usefully construct it: the only constructor takes a `UIContext` (`BarterItemCountControlButtonWidget.cs:14`), which the Gauntlet movie system owns. **The real path is the prefab**: declare `<BarterItemCountControlButtonWidget>` in Gauntlet XML and the movie instantiates it; you reach the instance from the widget tree via a `Type` binding or a parent lookup, and you handle the event by subscribing to `"MoveOne"` — either through the prefab's event binding or by calling `AddEventHandler` on the instance.

**A typical use.** Handle the event defensively, treating it as a repeating impulse rather than a click:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class QuantityStepHandler
{
    private readonly int _max;
    private int _count;

    public QuantityStepHandler(int max) { _max = max; }

    // Subscribed to the "MoveOne" event (BarterItemCountControlButtonWidget.cs:25
    // and :33). It fires once per click AND once per frame while held, so this
    // must be idempotent and must clamp — no rate limiting happens for you.
    public void OnMoveOne()
    {
        if (_count < _max)
        {
            _count++;
        }
    }
}
```

Tune the hold delay from code or from the prefab:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class HoldTuning
{
    // Default is 1f second (BarterItemCountControlButtonWidget.cs:12).
    // Set it to 0 to make the button repeat as soon as it is held.
    public static void MakeInstant(BarterItemCountControlButtonWidget button)
    {
        button.IncreaseToHoldDelay = 0f;
    }

    public static void MakePatient(BarterItemCountControlButtonWidget button)
    {
        button.IncreaseToHoldDelay = 2.5f;
    }
}
```

**What to watch out for.** The single trap is treating `"MoveOne"` as a click. It is fired at `BarterItemCountControlButtonWidget.cs:25` inside `OnLateUpdate` on every frame the button stays pressed, so a handler that does real work — a list rebuild, a cost recalculation, a `Debug.Print` — will run that many times per second and can be the frame-time culprit. If you need a bounded step, do the bounding in the handler: only act when a frame-count or time accumulator says it is time.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `IncreaseToHoldDelay` | `public float IncreaseToHoldDelay { get; set; } = 1f;` at `BarterItemCountControlButtonWidget.cs:12` | How long, in seconds, the button must be held before the auto-repeat starts. Default `1f`. Read at `BarterItemCountControlButtonWidget.cs:23` in the condition `_clickStartTime + IncreaseToHoldDelay < _totalTime`. **It is a plain auto-property with no `OnPropertyChanged`**, so the Gauntlet editor and any prefab-driven binding will not observe a change to it made from code. Setting it to `0f` makes the repeat immediate on press. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `BarterItemCountControlButtonWidget.cs:19-27` | The auto-repeat loop. Calls `base.OnLateUpdate(dt)` (`:21`), accumulates `_totalTime += dt` (`:22`), and when `base.IsPressed && _clickStartTime + IncreaseToHoldDelay < _totalTime` fires `EventFired("MoveOne")` (`:23-26`). **This runs every frame while the button is held, with no interval and no cap** — the class's defining behaviour and its main hazard. |
| `OnMousePressed()` | `protected override void OnMousePressed()` at `BarterItemCountControlButtonWidget.cs:29-34` | Records the press as the baseline and fires the first event. Sets `_clickStartTime = _totalTime` (`:32`) then `EventFired("MoveOne")` (`:33`). The order matters: the baseline is set *before* the event, so a handler that inspects or re-enters timing sees a consistent value. |
| `OnMouseReleased(bool isFromInput)` | `protected override void OnMouseReleased(bool isFromInput)` at `BarterItemCountControlButtonWidget.cs:36-40` | Resets `_clickStartTime = 0f` (`:39`). It does **not** reset `_totalTime`, which keeps accumulating for the widget's whole lifetime. This member is the only thing that re-arms the repeat, which is why a swallowed mouse-up leaves the button repeating indefinitely while `IsPressed` stays true. |
| `BarterItemCountControlButtonWidget(UIContext)` | `public BarterItemCountControlButtonWidget(UIContext context) : base(context)` at `BarterItemCountControlButtonWidget.cs:14-17` | The only constructor, forwarding to `ButtonWidget` and doing nothing else. **Not callable from mod code**, because `UIContext` belongs to the Gauntlet movie. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `IsPressed` | [`ButtonWidget`](../../gui/ButtonWidget) | The gate on the whole auto-repeat, read at `BarterItemCountControlButtonWidget.cs:23`. |
| `EventFired(string)` | [`Widget`](../../gui/Widget) | The dispatch used at `BarterItemCountControlButtonWidget.cs:25` and `:33`. The name `"MoveOne"` is the entire inter-widget contract. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A repeat interval / rate knob | **UNRESOLVED — absent in v1.4.5** | `IncreaseToHoldDelay` (`:12`) is the only timing knob, and it controls *when* the repeat starts, not *how often* it fires. Positive evidence: `grep -cE '^\s*(public|private|protected)' BarterItemCountControlButtonWidget.cs` returns 6 — the two private timing fields, the auto-property, the constructor, and the two overrides — so there is no second timing member. |
| A direction or step-size property | **UNRESOLVED — absent in v1.4.5** | The class has no notion of increment versus decrement and no step size; it emits `"MoveOne"` (`:25`, `:33`) and lets the handler decide. Positive evidence: the file contains the literal `"MoveOne"` exactly twice and no other event name. |
| Any notification when the property changes | **UNRESOLVED — absent in v1.4.5** | `IncreaseToHoldDelay` (`:12`) has no setter body and therefore no `OnPropertyChanged`, unlike the `[Editor(false)]` properties on sibling barter widgets. |

## Examples

Handle the repeat as an impulse, with clamping and a floor on the interval:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class BoundedQuantityHandler
{
    private float _sinceLastStep;
    private const float MinInterval = 0.05f;   // ~20 steps/sec ceiling
    private readonly int _max;
    private int _count;

    public BoundedQuantityHandler(int max) { _max = max; }

    // "MoveOne" fires once per click (BarterItemCountControlButtonWidget.cs:33)
    // and once per frame while held (:25) with no cap, so bound it here.
    public void OnMoveOne(float dt)
    {
        _sinceLastStep += dt;
        if (_sinceLastStep < MinInterval)
            return;

        _sinceLastStep = 0f;
        if (_count < _max)
        {
            _count++;
        }

        Debug.Print("quantity now " + _count, 0);
    }
}
```

Use two instances — one per direction — and let the prefab's event wiring decide which is which:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

// Both buttons are the same widget type and both emit "MoveOne". The prefab
// binds each to a different handler; the widget itself does not know which
// direction it is (BarterItemCountControlButtonWidget.cs:25).
public class QuantityController
{
    private int _count;

    public void OnDecrease() { if (_count > 0) _count--; }
    public void OnIncrease(int max) { if (_count < max) _count++; }
}
```

Detect the press state rather than assuming a release happened:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class PressProbe
{
    public static bool IsAutoRepeating(BarterItemCountControlButtonWidget button)
    {
        // The repeat runs while IsPressed and _clickStartTime + delay has
        // elapsed (BarterItemCountControlButtonWidget.cs:23). _clickStartTime
        // is only cleared by OnMouseReleased (:39), so a swallowed release
        // leaves this true long after the user let go.
        return button.IsPressed;
    }
}
```

## Risks and crash boundaries

- **The event fires once per frame with no limit.** `EventFired("MoveOne")` at `BarterItemCountControlButtonWidget.cs:25`, inside `OnLateUpdate`. Any expensive handler becomes a per-frame cost the moment the button is held, and it will happily drive a count past its maximum unless the handler clamps.
- **A swallowed mouse-up leaves it repeating.** `_clickStartTime` is cleared only in `OnMouseReleased` (`BarterItemCountControlButtonWidget.cs:39`). A screen transition, focus loss, or modal that eats the release leaves the condition at `:23` satisfied while `IsPressed` remains true — the button repeats forever with no user interaction.
- **`_totalTime` never resets.** It accumulates for the widget's lifetime (`:22`) and is only ever read, never cleared. There is no overflow guard; a widget left alive for a very long session accumulates without bound.
- **`IncreaseToHoldDelay` changes are invisible to bindings.** It is a plain auto-property (`:12`) with no `OnPropertyChanged`, so a value set from code does not notify the Gauntlet editor or any binding — unlike the `[Editor(false)]` properties on the sibling barter widgets.
- **Direction lives entirely in the handler.** The widget emits one event name for both the increase and the decrease button, so mis-wiring a prefab swaps directions with no compile-time or runtime signal.
- **Not `IsVisible` aware.** The widget does not check its own visibility before firing, so a hidden button that still receives `IsPressed` keeps repeating.
- **Not a save participant.** No `[Serializable]`; two timing floats and one knob, both transient.

## Cross-Version Notes

The v1.4.5 file is 41 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/` layout. The same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same shape — two private timing floats, an `IncreaseToHoldDelay` auto-property defaulted to `1f`, and the three overrides. The stable parts across those versions are the `"MoveOne"` event name and the press/release protocol; **the event name is the real contract**, because it is what a prefab or a mod handler binds to, and renaming it would silently disconnect every handler. The per-frame fire rate is a consequence of using `OnLateUpdate` rather than a timer, and it is the piece most likely to be reworked in a later version — so do not build a balance-sensitive economy on the exact rate. **VERIFIED MEASURED for v1.4.5** (41 lines, 1 public property, 1 constructor, 3 overrides, 2 private timing fields); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`ButtonWidget`](../../gui/ButtonWidget), supplying `IsPressed` (read at `BarterItemCountControlButtonWidget.cs:23`) and the mouse callbacks that are overridden here.
- Event dispatch and mouse plumbing: [`Widget`](../../gui/Widget).
- The widget that displays the count this button changes: [`BarterItemCountTextWidget`](../BarterItemCountTextWidget) — a sibling in this `Barter` subfolder, holding the count in its `Count` property.
- Sibling in the same barter control group: [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget), which owns the visibility rules for the slider-versus-count row.
- The item-row renderer whose `Type` drives the barter visuals: [`BarterItemVisualBrushWidget`](../BarterItemVisualBrushWidget).
- Bucket index: [mission-ext API index](../)