---
title: "ScreenLayer"
description: "One layer within a screen: it decides draw and input order, hit testing and focus eligibility. A screen is a stack of layers, and this class is the contract every layer, Gauntlet or custom, must honour."
---
# ScreenLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenLayer : IComparable`
**Base:** none; implements `System.IComparable`
**Source:** `TaleWorlds.ScreenSystem/ScreenLayer.cs` (declaration at line 10)

## Overview

`ScreenLayer` is one translucent panel inside a [ScreenBase](../ScreenBase) — the unit that actually draws pixels and answers "did the mouse hit me?". A screen is a stack of these, and the stack order determines both what is painted on top and which layer sees an input first.

Three concerns live here, and they are coupled even though they look separate:

**Ordering.** The class implements `IComparable`, and `CompareTo(object obj)` is how the engine sorts layers for both drawing and input dispatch. The `localOrder` passed to the constructor is the initial hint; the authoritative order is recomputed by `RefreshGlobalOrder(ref int currentOrder)`, which every layer in the system participates in, including global layers. Layers shared across screens need a high enough `localOrder` to end up where you want.

**Input.** Raw key presses arrive in `Update(IReadOnlyList<int> lastKeysPressed)`. Handling them is only half the job — the layer must then call `EarlyProcessEvents(InputType handledInputs)` to declare what it consumed, otherwise every layer below it reacts to the same key. `IsHitThisFrame` reports whether the mouse touched the layer, and `IsFocusedOnInput()` reports whether it currently receives keyboard or controller input.

**Focus.** `FocusTest()` decides whether the layer is eligible for focus at all; `IsFocusLayer` gates eligibility ahead of that; `OnGainFocus()` and `OnLoseFocus()` report transitions. Active and focused are different states — a layer can be visible and processing nothing because a dialog above it took focus.

The class also carries per-layer state a derived layer actually needs: `Name`, `Input`, `InputRestrictions`, the protected `_usedInputs`, `ActiveCursor`, `IsActive`, `IsFinalized`, `LastActiveState`, `ScreenOrderInLastFrame`, and the static `OnLayerActiveStateChanged` event.

## Mental Model

A layer is a z-ordered transparent input panel. Design with that picture and most mistakes disappear.

**Order is priority, and it is recomputed.** `localOrder` in the constructor is a starting preference, not a guarantee. `RefreshGlobalOrder(ref int currentOrder)` allocates the real global slot. Override it only with `base` — it participates in a cross-screen computation, and skipping `base` scrambles stacking in ways that look like "the HUD draws under the dialog".

**Input is consumption-based, not broadcast.** This is the single most important rule on the class. If your layer handles a key and does not report it through `EarlyProcessEvents`, the layer below handles it too. The symptom is very recognisable: a close button needs two presses, a list scrolls two rows per notch, a toggle flips twice and lands back where it started.

**Hit testing must be truthful.** `HitTest(Vector2 position)` should return true only over the area the layer actually owns. A layer whose `HitTest` always returns true swallows the entire screen and every button underneath becomes unclickable. `HitTest()` with no argument is the whole-layer test. In a stack, use [ScreenManager](../ScreenManager)'s `IsLayerBlockedAtPosition` to tell whether something above you is in the way.

**Active is not focused.** `IsActive` means visible and participating in dispatch; `IsFocusedOnInput()` means currently receiving keyboard and controller input. Gate keyboard handling on `IsFocusedOnInput()`, not on `IsActive`. A layer with `IsFocusLayer` set to false can never take focus, whatever `FocusTest()` says.

**Ticks are per frame, per active layer.** `Tick(float dt)` and `LateUpdate(float dt)` run for every active layer, every frame; `RenderTick(float dt)` is the draw phase. The cost is linear in the number of layers, so `Tick` is where discipline matters. Do not change logical state from `RenderTick`.

**`OnLayerActiveStateChanged` is static.** It fires for any layer, including layers owned by other screens. Subscribing from a layer means unsubscribing in `OnFinalize`, or the subscription keeps a destroyed layer alive.

## When to Use / When Not To Use

- **Use** as the base class for a hand-rolled UI panel that is not a Gauntlet prefab.
- **Use** `EarlyProcessEvents` on every path that consumes a key.
- **Use** `HitTest(Vector2)` to describe a precise clickable region.
- **Use** `OnGainFocus` / `OnLoseFocus` to start and stop input-dependent work.
- **Use** a `GlobalLayer` wrapper to make a layer survive screen changes (see the `ScreenManager` page).
- **Do not** handle input in `Update` without calling `EarlyProcessEvents`.
- **Do not** return a constant `true` from `HitTest` unless the layer genuinely covers everything.
- **Do not** do heavy work in `Tick`.
- **Do not** override `RefreshGlobalOrder` without `base`.
- **Do not** mutate logical state from `RenderTick`.

## Members

### Identity and state

| Member | What it is for |
| --- | --- |
| `protected ScreenLayer(string name, int localOrder)` | Constructor. `name` is what cross-screen lookup and debugging use; `localOrder` is the initial stacking preference. Always call the base constructor. |
| `string Name { get; private set; }` | The layer's name. Shared layers are located by name. |
| `bool IsActive { get; private set; }` | Visible and participating in dispatch. Not the same as focused. |
| `bool IsFinalized { get; private set; }` | Teardown has happened. Nothing on this layer is valid afterwards. |
| `bool IsHitThisFrame { get; internal set; }` | Whether the mouse hit this layer during the current frame. |
| `bool LastActiveState { get; set; }` | The previous activation state, for detecting transitions. |
| `int ScreenOrderInLastFrame { get; internal set; }` | The layer's global order last frame. The first thing to read when layers draw in the wrong order. |
| `bool IsFocusLayer { get; set; }` | Eligibility for focus. Set to false and the layer can never be focused. |
| `CursorType ActiveCursor { get; set; }` | The cursor shown while the mouse is over this layer. |
| `InputContext Input { get; private set; }` | The input context for this layer, a `TaleWorlds.InputSystem.InputContext`. Carries the controller/keyboard-mouse device state. |
| `InputRestrictions InputRestrictions { get; private set; }` | The restrictions applied to this layer's input. |
| `protected InputType _usedInputs { get; set; }` | The inputs this layer has consumed. Maintained by `EarlyProcessEvents`; a derived layer can read it. |
| `static event Action<ScreenLayer> OnLayerActiveStateChanged` | Raised for any layer's activation change. Static — unsubscribe in `OnFinalize`. |
| `int CompareTo(object obj)` | The `IComparable` implementation behind global draw and input order. |

### Lifecycle

| Member | What it is for |
| --- | --- |
| `protected virtual void OnActivate()` | Layer shown. Prepare display state. May run many times. |
| `protected virtual void OnDeactivate()` | Layer hidden. May run many times. |
| `protected virtual void OnFinalize()` | One-time teardown. The place to unsubscribe from static events. |
| `protected internal virtual void OnGainFocus()` | Keyboard and controller focus arrived. |
| `protected internal virtual void OnLoseFocus()` | Focus left. Drop transient input state here. |

### Frame phases

| Member | What it is for |
| --- | --- |
| `protected internal virtual void Tick(float dt)` | Logic frame. Runs for every active layer. Put logic here. |
| `protected internal virtual void LateUpdate(float dt)` | End-of-frame update. |
| `protected internal virtual void RenderTick(float dt)` | Draw frame. Do not change logical state here. |
| `protected internal virtual void Update(IReadOnlyList<int> lastKeysPressed)` | Receives this frame's key presses. **Call `EarlyProcessEvents` after handling them.** |
| `protected internal virtual void RefreshGlobalOrder(ref int currentOrder)` | Allocates the layer's global order slot. Override only with `base`. |
| `public virtual void UpdateLayout()` | Recompute layout after content or viewport changes. |

### Input, hit testing and focus

| Member | What it is for |
| --- | --- |
| `public virtual void EarlyProcessEvents(InputType handledInputs)` | **Declares which inputs this layer consumed.** Without it, layers below react to the same key. |
| `public virtual void ProcessEvents()` | Runs after `Update`; the phase for resolving UI events. |
| `public virtual bool HitTest(Vector2 position)` | Whether a screen point is on this layer. Returning true unconditionally swallows the screen. |
| `public virtual bool HitTest()` | Whole-layer hit test. |
| `public virtual bool FocusTest()` | Whether the layer may take focus at all. |
| `public virtual bool IsFocusedOnInput()` | Whether it currently holds keyboard and controller input. Gate keyboard handling on this. |
| `public virtual void OnOnScreenKeyboardDone(string inputText)` | Platform on-screen keyboard returned text. |
| `public virtual void OnOnScreenKeyboardCanceled()` | Platform on-screen keyboard was cancelled. |
| `public virtual void DrawDebugInfo()` | Draws layer debug information for `ScreenManager`'s debug overlay. |

## Examples

### Example 1: A layer that declares what it consumes

Without the `EarlyProcessEvents` call, this layer and the one below it both act on Enter.

```csharp
using System.Collections.Generic;
using TaleWorlds.InputSystem;
using TaleWorlds.ScreenSystem;

public class MyConfirmLayer : ScreenLayer
{
    private bool _pendingConfirm;

    // Larger localOrder stacks higher; the real slot is assigned by RefreshGlobalOrder
    public MyConfirmLayer() : base("MyConfirmLayer", 100)
    {
    }

    protected override void OnActivate()
    {
        base.OnActivate();

        // Without this the layer never joins the focus chain
        IsFocusLayer = true;
    }

    protected internal override void Update(IReadOnlyList<int> lastKeysPressed)
    {
        base.Update(lastKeysPressed);

        // Active is not focused — check the focused state, not the active state
        if (!IsFocusedOnInput())
        {
            return;
        }

        foreach (int key in lastKeysPressed)
        {
            if (key == (int)InputKey.Enter)
            {
                _pendingConfirm = true;

                // Declare the consumption so lower layers do not also react.
                // InputType is one of Invalid, Keyboard, MouseButton, MouseWheel, Controller.
                EarlyProcessEvents(InputType.Keyboard);
            }
        }
    }

    public bool ConsumeConfirm()
    {
        bool result = _pendingConfirm;
        _pendingConfirm = false;
        return result;
    }
}
```

### Example 2: An honest hit region

A layer that claims the whole screen makes every button beneath it unclickable.

```csharp
using TaleWorlds.Core;
using TaleWorlds.ScreenSystem;

public class MyClickableRegion : ScreenLayer
{
    private readonly float _left;
    private readonly float _top;
    private readonly float _width;
    private readonly float _height;

    public MyClickableRegion(float left, float top, float width, float height)
        : base("MyClickableRegion", 50)
    {
        _left = left;
        _top = top;
        _width = width;
        _height = height;
    }

    public override bool HitTest(Vector2 position)
    {
        // Only claim points inside our own rectangle; let the rest through
        return position.x >= _left && position.x <= _left + _width
            && position.y >= _top && position.y <= _top + _height;
    }

    public override bool FocusTest()
    {
        return IsActive;
    }
}
```

### Example 3: Subscribe to the static activity event, and release it

`OnLayerActiveStateChanged` is static, so the subscription outlives the layer unless you remove it.

```csharp
using TaleWorlds.ScreenSystem;

public class MyWatcherLayer : ScreenLayer
{
    public MyWatcherLayer() : base("MyWatcherLayer", 900)
    {
    }

    protected override void OnActivate()
    {
        base.OnActivate();
        ScreenLayer.OnLayerActiveStateChanged += HandleLayerActiveChanged;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        ScreenLayer.OnLayerActiveStateChanged -= HandleLayerActiveChanged;
    }

    private void HandleLayerActiveChanged(ScreenLayer layer)
    {
        if (ReferenceEquals(layer, this))
        {
            return;
        }

        // React to other layers becoming visible
    }
}
```

### Example 4: Diagnose stacking by reading the resolved order

When two layers draw in the wrong order, the recorded slot tells you which one won.

```csharp
using TaleWorlds.ScreenSystem;

public class MyOrderProbe
{
    public int Describe(ScreenLayer a, ScreenLayer b)
    {
        // CompareTo drives both draw order and input priority
        int comparison = a.CompareTo(b);

        if (comparison > 0)
        {
            return a.ScreenOrderInLastFrame;
        }

        return b.ScreenOrderInLastFrame;
    }
}
```

## Risks and Boundaries

- **Forgetting `EarlyProcessEvents` is the most common layer bug.** One key, two reactions: double presses, double scrolls, toggles that flip back.
- **`HitTest` returning a constant true swallows the screen.** Every control underneath becomes unclickable. Describe the real region.
- **`Tick` cost is linear in active layers.** Work there runs for every active layer every frame; accumulate elapsed time and process periodically instead.
- **`RenderTick` is the draw phase.** Changing logical state there desynchronises logic from rendering and races on threaded renderers.
- **Overriding `RefreshGlobalOrder` without `base` breaks global order.** The symptom is a HUD appearing under a dialog, or input reaching the wrong layer.
- **`IsFocusLayer = false` is absolute.** The layer can never take focus, so keyboard input silently does nothing even though the screen looks correct.
- **`IsActive` and `IsFocusedOnInput` are different things.** Using the wrong one as a gate gives a layer that looks enabled but ignores keys.
- **`OnLayerActiveStateChanged` is static.** An unremoved subscription keeps a finalized layer reachable and keeps firing.
- **`IsFinalized` ends everything.** After `ScreenManager.CleanScreens()` triggers `OnFinalize`, the layer's state is not valid to read.
- **Main thread and native code.** Layer drawing and input dispatch run in the main-thread UI loop and reach native code. Background threads must not touch a layer.

## Dependencies

- **Upstream / providers**
  - [ScreenBase](../ScreenBase) owns and drives the layer stack through `AddLayer` / `RemoveLayer` / `ActivateAllLayers`.
  - [ScreenManager](../ScreenManager) allocates the global order, distributes input, arbitrates focus and registers global layers.
- **Peers / downstream**
  - [GauntletLayer](../../engine/GauntletLayer) is the concrete layer almost every screen actually uses, and it overrides the hit-test and input members described above.
  - [ViewModel](../../core-extra/ViewModel) supplies the data a Gauntlet layer binds.

## See Also

- ↑ Parent: [gui index](../)
- ↔ Related: [ScreenBase](../ScreenBase) · [ScreenManager](../ScreenManager) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel) · [Chinese twin](../../../../zh/api/gui/ScreenLayer)