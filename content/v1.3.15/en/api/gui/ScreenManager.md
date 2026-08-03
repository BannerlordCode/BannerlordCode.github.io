---
title: "ScreenManager"
description: "The static facade of Bannerlord's GUI layer: it owns the screen stack, tracks the active top screen, manages global layers, and forwards the engine's per-frame Tick/LateTick/Update to the active ScreenBase and its ScreenLayers."
---

# ScreenManager

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public static class ScreenManager`
**Source:** `TaleWorlds.ScreenSystem/ScreenManager.cs`

> This is a hand-written, source-backed page. It is based on a direct reading of `TaleWorlds.ScreenSystem/ScreenManager.cs` (identical in shape across 1.3.15 and 1.4.5) together with `TaleWorlds.Engine/EngineScreenManager.cs` and `ScreenManagerEngineConnection.cs`. It is not a signature-dump.

## Overview

`ScreenManager` is the **static facade** of Bannerlord's UI (GUI) system and the single public entry point modders use to touch the screen/interface layer. It maintains a screen stack (`ObservableCollection<ScreenBase>`) and selects the **last-added, topmost** screen as the current — and only interactable — screen, `TopScreen`. Every frame the engine pumps `Tick` / `LateTick` / `EarlyUpdate` / `Update` into `ScreenManager` via `EngineScreenManager`, and `ScreenManager` dispatches them to `TopScreen` and its `ScreenLayer`s (plus all `GlobalLayer`s). For almost every UI need a mod has, the answer is one of two things: **push your own `ScreenBase`**, or **add a `GauntletLayer` to the current `TopScreen`**.

## Mental Model

Think of `ScreenManager` as the **"screen stack + current screen + input/render dispatcher"** for the whole UI layer:

- **A screen is a unit of game state.** Bannerlord has no separate `GameStateManager` layer; a `ScreenBase` (the main menu, the campaign map, a conversation) *is* a chunk of interface/game state. Pushing a screen (`PushScreen`) means "enter this state"; popping (`PopScreen`) means "return to the previous one". The stack is ordered oldest-to-newest from bottom to top, and `TopScreen` is always the one being interacted with.
- **Who creates and holds it.** `ScreenManager` is a static class with no instance. The engine injects the low-level connection through `Initialize(IScreenManagerEngineConnection)` at startup and it lives for the whole session. The stack `_screenList` is privately held; modders only ever touch it through `PushScreen` / `PopScreen` / `TopScreen`.
- **How the active screen is chosen.** Whenever `_screenList` changes (`CollectionChanged`), `ScreenManager` takes the **last** element as `TopScreen` and wires up its `OnAddLayer` / `OnRemoveLayer` events so `SortedLayers` reflects the current screen's layers. In other words: the screen you push automatically becomes `TopScreen` — you never name it explicitly.
- **The per-frame heartbeat comes from the engine, not from you.** `EngineScreenManager.Tick` → `ScreenManager.Tick(dt)` → `TopScreen.FrameTick` + each `ScreenLayer.Tick/RenderTick`. Modders should **not** call `Tick` / `LateTick` / `Update` / `EarlyUpdate` themselves; those are engine-driven. You write your logic in the screen/layer lifecycle hooks (`OnInitialize` / `OnTick` / `OnFrameTick`, etc.).
- **Global layers coexist with screen layers.** Besides the screen stack there is a `GlobalLayer` collection (a persistent hint layer, debug overlay, etc.) that ticks independently *above* all screens and participates in `SortedLayers` ordering and input hit-testing alongside `TopScreen.Layers`.

## When to Use / When NOT to Use

**Use `ScreenManager` when:**

- You need to enter a whole new interface state: write a `ScreenBase` subclass, then `ScreenManager.PushScreen(new MyScreen())`.
- You want to overlay a Gauntlet UI on the **already-existing** screen (the most common case): grab `ScreenManager.TopScreen` and `AddLayer(gauntletLayer)` to it.
- You want to read or test which screen is active: `ScreenManager.TopScreen`.
- You need a UI that stays on top of *every* screen: `ScreenManager.AddGlobalLayer(globalLayer, isFocusable)`.
- You want to be notified on screen transitions: subscribe to `ScreenManager.OnPushScreen` / `ScreenManager.OnPopScreen`.

**Do NOT use `ScreenManager` (and the correct alternative):**

- **Do not** call `Tick` / `LateTick` / `Update` / `EarlyUpdate` manually — they are driven by the engine every frame; manual calls break frame timing and can crash.
- **Do not** `new` or hold `EngineScreenManager` / `ScreenManagerEngineConnection`. They are engine-internal plumbing (`EngineScreenManager` is `internal`; `ScreenManagerEngineConnection` is constructed and injected by the engine inside `EngineScreenManager.Initialize()`). Always go through the static `ScreenManager` API.
- **Do not** assume there are `AddScreen` / `RemoveScreen` / `CurrentScreen` members — they **do not exist** in the source. Pushing is `PushScreen` / `CleanAndPushScreen`, popping is `PopScreen` / `CleanScreens`, and the current screen is **`TopScreen`** (not `Current` / `CurrentScreen`).
- **Do not** switch screens off the UI thread: `PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` carry a main-thread `FailedAssert` guard in 1.4.5, and even in 1.3.15 (no assert) they may only be called on the **main/UI thread**, or you corrupt `_screenList` and the layer state and crash.

## ScreenManager vs EngineScreenManager vs ScreenManagerEngineConnection

These three names are close but have completely different jobs. Modders only touch the first:

| Type | Namespace / Assembly | Visibility | Role |
|------|----------------------|------------|------|
| `ScreenManager` | `TaleWorlds.ScreenSystem` | `public static` | **The facade you use**: owns the screen stack, global layers, and current screen; exposes `PushScreen` / `PopScreen` / `TopScreen`. |
| `EngineScreenManager` | `TaleWorlds.Engine` | `internal` | **The engine bridge**: marked with `[EngineCallback]`, it receives the native engine's per-frame callbacks and forwards them to `ScreenManager.Tick/LateTick/EarlyUpdate/Update`, and at startup calls `ScreenManager.Initialize(new ScreenManagerEngineConnection())`. Invisible and uncallable from mods. |
| `ScreenManagerEngineConnection` (implements `IScreenManagerEngineConnection`) | `TaleWorlds.Engine` / interface in `TaleWorlds.ScreenSystem` | `public class` / `public interface` | **The low-level connection**: translates `ScreenManager`'s requests for mouse cursor, resolution, and debug panel (ImGui) into native `Screen` / `MouseManager` / `Imgui` calls. Injected by the engine; mods do not construct it. |

In one line: `ScreenManager` is the dispatcher you call, `EngineScreenManager` is the bridge that drives it, and `ScreenManagerEngineConnection` is its plug into the native render backend.

## Dependencies

**Upstream (creates / drives / injects):**

- [EngineScreenManager](../../engine/EngineScreenManager/) — the engine's per-frame callback entry into `ScreenManager` (`internal`, not used directly by mods).
- `IScreenManagerEngineConnection` / `ScreenManagerEngineConnection` (same family as [EngineScreenManager](../../engine/EngineScreenManager/)) — injected via `Initialize(...)`, providing the cursor/resolution/debug-panel backend.
- [ScreenBase](../../campaign-ext/ScreenBase/) — the unit pushed onto the stack; `ScreenManager` owns and drives it.

**Downstream (driven by it / what you overlay on it):**

- [ScreenLayer](../../campaign-ext/ScreenLayer/) — the inputtable/renderable layer inside screens and global layers; `SortedLayers` is built from these.
- [GauntletLayer](../../engine/GauntletLayer/) — the concrete `ScreenLayer` that hosts Gauntlet UI (XAML + ViewModel), usually overlaid via `TopScreen.AddLayer(...)`.
- [ViewModel](../../core-extra/ViewModel/) — the data-binding source for Gauntlet UI, attached to a `GauntletLayer`.
- [Game](../../core-extra/Game/) — the running game session that drives the overall screen lifecycle (e.g. which root screen is activated).

## Members

The members modders use most, each confirmed line-by-line against the source. Each entry gives **purpose + side effect + when to call**. The non-existent `AddScreen` / `RemoveScreen` / `CurrentScreen` are explicitly absent — do not use them.

### Stack management (push / pop / clear)

#### `public static void PushScreen(ScreenBase screen)`

Pushes `screen` onto the screen stack, making it the new `TopScreen`.

- **Side effect**: pauses the old `TopScreen` (`HandlePause`) and `HandleDeactivate`s it if still active; then on the new screen runs `HandleInitialize` → `HandleActivate` → `HandleResume`; raises `OnPushScreen`; marks the global layer order dirty (`_globalOrderDirty`).
- **When to call**: when you need to enter a new interface state — e.g. leaving the main menu for the campaign map, or opening a full-screen custom panel. Equivalent to "enter a new game state". **Main thread only.**
- **Note**: the old screen is merely paused/hidden and stays in the stack; a later `PopScreen()` returns to it.

```csharp
// Enter a custom full-screen interface state
ScreenManager.PushScreen(new RecruitmentScreen());
```

#### `public static void PopScreen()`

Pops the current `TopScreen` off the top of the stack, returning to the previous screen.

- **Side effect**: on the old `TopScreen` runs `HandlePause` → `HandleDeactivate` → `HandleFinalize` (**this destroys the screen and its layers**), raises `OnPopScreen`; if more screens remain, re-`HandleActivate`s the previous one (or `HandleResume`s it if it is the same instance).
- **When to call**: when the screen you `PushScreen`ed should exit. **Only pop a screen you yourself pushed** — do not pop a system screen you did not push, or you break the engine's expected screen sequence and can corrupt the previous screen's state or crash.
- **Risk**: `HandleFinalize` releases the screen's layers and resources; any `GauntletLayer` you added on it is destroyed too.

```csharp
// Close the current custom screen and return to the previous one
ScreenManager.PopScreen();
```

#### `public static void CleanScreens()`

**Empties the entire screen stack**: loops `HandlePause` → `HandleDeactivate` → `HandleFinalize` on each `TopScreen` and raises `OnPopScreen` until the stack is empty.

- **Side effect**: destroys every screen. Normally only called by the engine/system when returning to the main menu or hard-switching game state.
- **When to call**: modders generally **should not** call this unless you deliberately want to discard all interface state (e.g. force back to the main menu). Misuse wipes the engine's own screens and causes a black screen or crash.

#### `public static void CleanAndPushScreen(ScreenBase screen)`

First `DeactivateAndFinalizeAllScreens()` to clear all existing screens, then pushes `screen` as the only screen (again `HandleInitialize` → `HandleActivate` → `HandleResume` and raising `OnPushScreen`).

- **Side effect**: equivalent to "`CleanScreens()` + `PushScreen(screen)`" but fires `OnPushScreen` only once.
- **When to call**: when you need to completely *replace* the current interface context (rather than overlay on it) — e.g. jumping from the campaign map straight into a standalone module's full-screen UI. Discarding everything in the stack, so use with care.

```csharp
// Fully replace the current interface context, keeping only the new screen
ScreenManager.CleanAndPushScreen(new ArenaScreen());
```

#### `public static void ReplaceTopScreen(ScreenBase screen)`

When the stack is non-empty: pause/deactivate/finalize the current `TopScreen`, then activate `screen` as the new `TopScreen`.

- **Side effect**: like `PopScreen` + `PushScreen`, but does **not** keep the replaced old screen (direct `HandleFinalize`). If the stack is empty, `screen` is added as the root screen directly.
- **When to call**: when you want to replace the current screen **in place** (rather than return to the previous one).

#### `public static void SetAndActivateRootScreen(ScreenBase screen)`

Activates `screen` as the **root screen** (first screen in the stack).

- **Side effect**: if `TopScreen` is not `null` it throws `new Exception("TopScreen is not null.")`. On success: `HandleInitialize` → `HandleActivate` → `HandleResume` and raises `OnPushScreen`.
- **When to call**: the engine uses this when starting up and entering the first real interface from the launch screen. Mods almost never need it; calling it while a screen already exists throws.

#### `public static bool ScreenTypeExistsAtList(ScreenBase screen)`

Checks whether a screen of the **same `Type`** as `screen` already exists in the stack.

- **Purpose**: avoid pushing the same kind of screen twice (e.g. prevent opening the same panel repeatedly).
- **When to call**: a de-duplication check before `PushScreen`.

```csharp
if (!ScreenManager.ScreenTypeExistsAtList(myScreen))
{
    ScreenManager.PushScreen(myScreen);
}
```

### Current screen and global layers

#### `public static ScreenBase TopScreen { get; }`

The current active screen — the last element of the screen stack. This is the real name of "current screen" in the source (**not** `Current` / `CurrentScreen`).

- **Purpose**: grab the current screen to overlay a layer on it (the most common use), or test which interface state you are in.
- **Note**: the setter is `private`; you **cannot** assign it — only `PushScreen` / `PopScreen` change it. Returns `null` when no screen is active.

```csharp
// Overlay a Gauntlet UI layer on the current active screen (the most common UI injection)
GauntletLayer layer = new GauntletLayer("GauntletUI", 0);
layer.LoadMovie("MyWidget", myViewModel);
ScreenManager.TopScreen.AddLayer(layer);
```

#### `public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

Adds a `GlobalLayer` to the global layer collection (stays on top of all screens).

- **Side effect**: inserts at the right position by `layer.Layer.InputRestrictions.Order`, calls `layer.Layer.HandleActivate()`, and marks the global order dirty.
- **When to call**: for UI that must persist across screens (a global input hint, a persistent minimap, a debug overlay). Do **not** use this for UI belonging to a single screen — that belongs on a specific `ScreenBase`.

#### `public static void RemoveGlobalLayer(GlobalLayer layer)`

Removes a `GlobalLayer` from the global collection and `HandleDeactivate`s it.

- **When to call**: when a layer you previously `AddGlobalLayer`ed should be destroyed. Only remove your own layers.

### Input routing and focus

#### `public static void TrySetFocus(ScreenLayer layer)`

Attempts to hand input focus to `layer`. Only succeeds if `layer` is the focus layer or passes the focus test, and the current `FocusedLayer`'s `InputRestrictions.Order` is not higher.

- **When to call**: when your layer needs to grab input focus (e.g. opening a modal dialog).

#### `public static void TryLoseFocus(ScreenLayer layer)`

If `layer` is the `FocusedLayer`, releases focus and tries to return it to the highest-order still-active `IsFocusLayer` layer; if none, `FocusedLayer = null`.

#### `public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

Hit-tests from the top layer downward to decide whether, at `position`, `layer` is blocked by a higher layer that consumes mouse buttons/wheel.

- **Purpose**: decide whether a click/scroll should pass through to your layer.

#### `public static bool GetMouseVisibility()` / `IsControllerActive()` / `IsMouseCursorActive()` / `IsMouseCursorHidden()`

Query the current input device and mouse-cursor visibility state. Commonly used to decide whether the UI should show a virtual cursor based on the current screen.

### Engine heartbeat and lifecycle

These members are called by the engine every frame; **modders usually should not call them manually**. They are documented here to explain what they do and who drives them.

#### `public static void Initialize(IScreenManagerEngineConnection engineInterface)`

Injects the low-level engine connection. The engine calls `ScreenManager.Initialize(new ScreenManagerEngineConnection())` inside `EngineScreenManager.Initialize()`; mods do not call it.

#### `public static void Tick(float dt)`

The main per-frame update: ticks all `GlobalLayer.EarlyTick`, then `Update()`, then `TopScreen.FrameTick` + the predecessor screen's `IdleTick`, each `ScreenLayer.Tick`, `LateUpdate`, global-layer `Tick` / `LateTick`, `TopScreen.PostFrameTick`, and finally draws debug info. Driven by `EngineScreenManager.Tick`.

#### `public static void LateTick(float dt)`

The render phase: `RenderTick(dt)` on every active, not-finalized layer in `SortedLayers`. Driven by `EngineScreenManager.LateTick`.

#### `public static void Update(IReadOnlyList<int> lastKeysPressed)`

Dispatches this frame's key presses to `TopScreen.Update` and each active global layer. Driven by `EngineScreenManager.Update`.

#### `public static void EarlyUpdate(Vec2 usableArea)`

Sets the usable area, refreshes global layer order, does hit-testing and pre-dispatches input events (`EarlyProcessEvents`). Driven by `EngineScreenManager.PreTick`.

#### `public static void OnFinalize()`

Unregisters all collection/layer events, clears the screen stack and global layers, and releases `FocusedLayer`. Called by the engine on game shutdown.

#### `public static void OnGameWindowFocusChange(bool focusGained)`

Called by the engine when the window gains/loses focus: updates `_isWindowFocused`, notifies `TopScreen.OnFocusChangeOnGameWindow`, raises `FocusGained` on focus gain, and resets the focused layer's keys.

#### `public static void OnConstrainStateChanged(bool isConstrained)`

Called when the system constrain state changes (e.g. ALT+TAB lock), equivalent to `OnGameWindowFocusChange(!isConstrained)`.

### Events

#### `public static event OnPushScreenEvent OnPushScreen`

Raised after a screen is pushed (becoming `TopScreen`); the argument is that screen. Good for "after screen switch" initialization or telemetry.

#### `public static event OnPopScreenEvent OnPopScreen`

Raised when a screen is popped (before finalize); the argument is the popped screen. Good for cleaning up layers/resources you attached to it.

```csharp
// Listen for screen pops to clean up a layer you overlaid
ScreenManager.OnPopScreen += screen =>
{
    foreach (ScreenLayer layer in screen.Layers)
    {
        if (layer is GauntletLayer gauntlet && gauntlet.MovieName == "MyWidget")
        {
            // Resources are already destroyed with the screen; do logging/telemetry here only
        }
    }
};
```

## Risks

- **Switch screens only on the main (UI) thread.** `PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` carry a `TWParallel.IsMainThread()` `FailedAssert` guard in 1.4.5; 1.3.15 has no assert but is equally not thread-safe. Calling from a background thread (network callback, async task) corrupts `_screenList` and the layer state and crashes. Always switch from a UI-thread moment (a screen lifecycle hook, `OnTick`, an event callback).
- **Do not pop a screen you did not push.** `PopScreen()` always finalizes the **current** `TopScreen`. If you pushed one custom screen but accidentally call `PopScreen()` twice, the second call finalizes a system screen (e.g. the campaign map screen), returning to the wrong state or even a black screen. Pairing rule: what you `PushScreen`, you `PopScreen`.
- **Screen transitions also destroy the layers and ViewModels on them.** `PopScreen` / `CleanScreens` / `ReplaceTopScreen` all `HandleFinalize` the current screen, freeing any `GauntletLayer` and its `ViewModel` with it. If you overlaid a `GauntletLayer` on a screen, do not keep a reference to its `ViewModel` and update it after the screen is destroyed — that touches a freed object.
- **Do not call `Tick` / `LateTick` / `Update` / `EarlyUpdate` as ordinary methods.** They are the engine's per-frame heartbeat; manual calls scramble frame order and double-tick layers, causing input/render glitches. Put your logic in the screen/layer `OnTick` / `OnFrameTick` / `OnLateTick` hooks.
- **`TopScreen` can be `null`.** With no active screen (theoretically only at the very start/end of the session) `ScreenManager.TopScreen` returns `null`, and `TopScreen.AddLayer(...)` is a null reference. Null-check before overlaying, or make sure you are actually inside a screen.
- **Global layer order is decided by `InputRestrictions.Order`.** `AddGlobalLayer` inserts by order; a wrong order leaves your global layer blocked for input by other layers or never able to take focus.

## Example

### Example 1: Overlay a Gauntlet UI layer on the current screen (the most common UI injection)

```csharp
// Assume myViewModel is some ViewModel instance
GauntletLayer gauntletLayer = new GauntletLayer("GauntletUI", 0);
gauntletLayer.LoadMovie("MyPanel", myViewModel);

// The real "current screen" is TopScreen, not Current / CurrentScreen
ScreenBase current = ScreenManager.TopScreen;
if (current != null)
{
    current.AddLayer(gauntletLayer);
}
```

### Example 2: Push a custom full-screen ScreenBase and return on exit

```csharp
// RecruitmentScreen is your own ScreenBase subclass
ScreenManager.PushScreen(new RecruitmentScreen());

// Inside RecruitmentScreen, when deciding to exit:
// only pop the screen you pushed, returning to the previous one
ScreenManager.PopScreen();
```

## See Also

- ↑ Parent: [gui index](../) · [API reference](../../)
- ↔ Siblings / related:
  - [ScreenBase](../../campaign-ext/ScreenBase/) — the screen/game-state unit pushed onto the stack
  - [ScreenLayer](../../campaign-ext/ScreenLayer/) — the inputtable/renderable layer inside screens and global layers
  - [EngineScreenManager](../../engine/EngineScreenManager/) — the engine bridge (incl. `ScreenManagerEngineConnection`), not used directly by mods
  - [GauntletLayer](../../engine/GauntletLayer/) — the `ScreenLayer` that hosts Gauntlet UI
  - [ViewModel](../../core-extra/ViewModel/) — the data-binding source for Gauntlet UI
  - [Game](../../core-extra/Game/) — the running game session driving overall screen lifecycle

> Cross-version: the core screen-stack API is the same shape in 1.3.15 and 1.4.5; 1.4.5 adds a main-thread `FailedAssert` guard to `PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` (1.3.15 has no assert but is still main-thread-only). 1.4.5 removed the `IsWindowFocused` property that 1.3.15 publicly exposed.
