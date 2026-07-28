---
title: "ScreenBase"
description: "Abstract base for fullscreen UI: owns the Layer list and Initialize/Activate/Resume/Pause/Deactivate/Finalize lifecycle; every screen on the ScreenManager stack."
---

# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public abstract class ScreenBase`  
**Base:** —  
**File:** `TaleWorlds.ScreenSystem/ScreenBase.cs`  
**Authority semantics:** `bannerlord-1.4.5` (same module as 1.3.15)

> **Path note:** This page lives under `api/campaign-ext/` for **URL stability** (historical partition only). The real namespace is **`TaleWorlds.ScreenSystem`**, unrelated to campaign `Campaign`. In code use `using TaleWorlds.ScreenSystem;`. Do not look for it under `CampaignSystem`.

## Overview / one-line job

`ScreenBase` is Bannerlord's **lifecycle container for one fullscreen UI**: it does not draw controls itself. It holds an ordered list of `ScreenLayer`s and responds to `ScreenManager`-driven Initialize → Activate → Resume → FrameTick → Pause → Deactivate → Finalize.

Mods usually take one of two subclass shapes:

| Shape | Open | Close |
|-------|------|-------|
| Custom tool screen | `ScreenManager.PushScreen(new MyScreen())` | `ScreenManager.PopScreen()` |
| Official / extended campaign panel | `[GameStateScreen(typeof(SomeState))]` + `GameStateManager.PushState` | `Game.Current.GameStateManager.PopState(0)` |

The real Gauntlet control tree hangs on [GauntletLayer](../../engine/GauntletLayer). Real data lives on [ViewModel](../../core-extra/ViewModel).

## Mental Model

```
ScreenManager stack
  └── ScreenBase (this type)
        ├── IsInitialized / IsActive / IsPaused / IsFinalized
        ├── Layers[]  ──► ScreenLayer / GauntletLayer
        │                     └── movie + ViewModel
        └── virtual OnInitialize / OnActivate / OnFrameTick / OnFinalize …
```

| Dimension | Meaning |
|-----------|---------|
| Lifecycle | Driven by internal `ScreenManager` `Handle*` calls; **do not** assume a bare `new` is live |
| Who creates | You `new` the subclass; who **owns and schedules** is `ScreenManager` (or `GameStateScreenManager` re-entry) |
| Layer | SDK **L1 ScreenSystem**; used by L4 Gauntlet / view modules |
| Save | **Not saveable**; never put a `ScreenBase` ref in a `[SaveableField]` |

### State machine (aligned with ScreenManager)

```
Ctor: IsPaused=true, IsActive=false, IsInitialized=false, IsFinalized=false

PushScreen / become Top:
  HandleInitialize  → OnInitialize     (once until Finalize)
  HandleActivate    → each Layer Activate → OnActivate
  HandleResume      → OnResume
  first FrameTick   → OnReady (once, pending) → OnFrameTick(dt)
  every frame       → OnFrameTick; then OnPostFrameTick

Covered by a higher screen (still on stack):
  HandlePause → each Layer Deactivate → OnPause
  then only IdleTick → OnIdleTick (no more FrameTick)

PopScreen (this screen leaves stack):
  HandlePause → HandleDeactivate → HandleFinalize
    after OnFinalize, base Finalizes remaining Layers in reverse order
  lower screen gets Activate + Resume again
```

### When to use

- **Custom fullscreen UI** (debug tools, standalone panels): subclass `ScreenBase`, `AddLayer` in `OnInitialize` / `OnActivate`.
- **Campaign GameState panels**: subclass `ScreenBase`, implement `IGameStateListener`, hang `[GameStateScreen(typeof(...))]`.
- Read Layer input in `OnFrameTick` (Exit / Confirm hotkeys) to close or commit.
- Query the current screen: `ScreenManager.TopScreen` (official screen or your subclass).

### When not to use

| Don't | Do instead |
|-------|------------|
| Keep long-lived business data on Screen fields and expect it across saves | Write via `CampaignBehaviorBase.SyncData` / world objects |
| `new` + `PushScreen` off the main thread | Main thread; 1.4.5 `ScreenManager` asserts |
| Only `Pop` without releasing VM / events in `OnFinalize` | Pair release in `OnFinalize` (or official Deactivate path) |
| Treat `ScreenBase` as the only Mission HUD approach | Mission overlays often use `MissionView` / `MissionBehavior` + Layer without a full-screen push |
| Official panels via `PushScreen(new GauntletInventoryScreen(...))` bypassing State | `Game.Current.GameStateManager.PushState(new InventoryState(...))` |
| `AddLayer` after Finalize / cache a Popped instance | Instance is dead; `new` again next time |

## Dependencies

### Upstream

| Type / system | Relationship |
|---------------|--------------|
| [ScreenManager](../../gui/ScreenManager) | Stack scheduler; all `Handle*` / `FrameTick` / `IdleTick` |
| `GameStateScreenManager` | `PushState`/`PopState` → `PushScreen`/`PopScreen` |
| `Game.Current.GameStateManager` | Preferred open/close entry for campaign panels |

### Downstream

| Type / system | Relationship |
|---------------|--------------|
| [ScreenLayer](../ScreenLayer) | `AddLayer` / `RemoveLayer`; draw and input |
| [GauntletLayer](../../engine/GauntletLayer) | Most common Layer: `LoadMovie` + VM |
| [ViewModel](../../core-extra/ViewModel) | Data context; lifetime ≤ Screen |
| `ScreenComponent` | Light component bag (`AddComponent` / `FindComponent<T>`), rarely used |

### Events / Save

| Item | Notes |
|------|-------|
| `OnAddLayer` / `OnRemoveLayer` | Instance events; cleared on `HandleFinalize` |
| Save | **None**; pure runtime UI |

## Risks and crash boundaries

| Risk | Outcome | Guard |
|------|---------|-------|
| **`OnFinalize` never releases** VM / Campaign events / sprite category | Leaks, double subscribe on reopen, ghost callbacks | Official pattern: Deactivate removes Layers; Finalize calls `ViewModel.OnFinalize` |
| **`RemoveLayer` immediately `HandleFinalize`s that Layer** | Using Layer after remove → assert / null | Null the field after Remove; prefer `ReleaseMovie` first |
| **`AddLayer(null)` or already finalized Layer** | `FailedAssert("Trying to add a null or finalized layer")` | Only add new, non-finalized layers |
| **Same Layer added twice** | `FailedAssert("Layer is already added")` | `HasLayer` or a single field |
| **Finalize then Finalize again** | `FailedAssert("Screen is already finalized")` | Do not call `HandleFinalize` by hand; go through `ScreenManager` |
| **Assume every-frame `OnFrameTick` when not Top** | Covered screens only get `OnIdleTick` | Background work via Idle or events, not FrameTick |
| Treat Screen as a save root | Bad design / dead after load | See [crash boundaries §8 UI/ViewModel](../../../architecture/crash-boundaries) |

Lifecycle hard rules (same as [ScreenManager](../../gui/ScreenManager)):

```
Push → Initialize → Activate → Resume → (OnReady) → FrameTick…
Covered → Pause (Layers stop) → IdleTick
Pop  → Pause → Deactivate → Finalize (must release)
```

## Key members (purpose + timing)

### State properties

| Member | Purpose | Timing |
|--------|---------|--------|
| `IsInitialized` | Whether `OnInitialize` has run | Debug; false again after Finalize |
| `IsActive` | Active screen (not Pause/Deactivate) | Only Active screens get `OnFrameTick` from FrameTick |
| `IsPaused` | Covered by a higher screen | When true, IdleTick path |
| `IsFinalized` | Destroyed | Do not touch after true |
| `Layers` | Read-only layer list (Order-sorted) | Debug, lookup |
| `MouseVisible` | Virtual; subclass can override | Mouse show/hide policy |
| `DebugInput` | `Input.DebugInput` | Debug input |

### Lifecycle hooks (what you override)

| Hook | Purpose | Typical timing |
|------|---------|----------------|
| `OnInitialize` | One-shot init (SFX, hide messages, …) | First push; Layer creation **not always** here |
| `OnActivate` | Become active | Official quest/inventory screens often `new GauntletLayer` + `LoadMovie` + `AddLayer` here (via `IGameStateListener.OnActivate`) |
| `OnResume` | Return from Pause | After upper screen pops |
| `OnReady` | Once, before first FrameTick after activate | Deferred layout / navigation |
| `OnFrameTick(dt)` | Top-screen per-frame logic, hotkeys | Read `_layer.Input.IsHotKeyReleased("Exit")` |
| `OnPostFrameTick(dt)` | After-frame logic | Rare |
| `OnIdleTick(dt)` | Light tick while **on stack but not top** | Background anim / poll; no heavy work |
| `OnPause` / `OnDeactivate` | Covered / inactive | Clear focus; may `RemoveLayer` |
| `OnFinalize` | **Final release** | `ViewModel.OnFinalize`, clear refs |
| `OnFocusChangeOnGameWindow` | Game window focus | Pause input, etc. |
| `UpdateLayout` | Resolution / safe-area change | Default forwards to non-finalized Layers |

### Layers and components

| Member | Purpose | Side effects |
|--------|---------|--------------|
| `AddLayer(layer)` | Attach layer; if Active, immediate `HandleActivate` | Sorts; fires `OnAddLayer` |
| `RemoveLayer(layer)` | Detach and **Finalize** that layer | `ScreenManager.RefreshGlobalOrder` |
| `HasLayer` / `FindLayer<T>()` / `FindLayer<T>(name)` | Lookup | — |
| `ActivateAllLayers` / `DeactivateAllLayers` | Batch layer on/off | Does not change Screen `IsActive` |
| `Activate` / `Deactivate` | Manual screen on/off | Prefer ScreenManager; avoid fighting stack state |
| `SetLayerCategoriesState*` | Batch on/off/toggle by `layer.Name` | Multi-HUD category cases |
| `AddComponent` / `FindComponent<T>` | Attach `ScreenComponent` | Rare extension point |

## Real examples

### Example 1: Custom tool screen (direct ScreenManager)

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.InputSystem;
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

public sealed class MyToolScreen : ScreenBase
{
    private GauntletLayer _layer;
    private GauntletMovieIdentifier _movie;
    private MyToolVM _vm;

    protected override void OnInitialize()
    {
        base.OnInitialize();
        _vm = new MyToolVM(closeAction: () => ScreenManager.PopScreen());
        _layer = new GauntletLayer("MyToolScreen", localOrder: 200, shouldClear: true)
        {
            IsFocusLayer = true
        };
        _layer.InputRestrictions.SetInputRestrictions(isMouseVisible: true, InputUsageMask.All);
        _layer.Input.RegisterHotKeyCategory(HotKeyManager.GetCategory("GenericPanelGameKeyCategory"));
        _movie = _layer.LoadMovie("MyToolMovie", _vm);
        AddLayer(_layer);
        ScreenManager.TrySetFocus(_layer);
    }

    protected override void OnFrameTick(float dt)
    {
        base.OnFrameTick(dt);
        if (_layer != null && _layer.Input.IsHotKeyReleased("Exit"))
        {
            ScreenManager.PopScreen();
        }
    }

    protected override void OnFinalize()
    {
        if (_layer != null && _movie != null)
        {
            _layer.ReleaseMovie(_movie);
            _movie = null;
        }
        if (_layer != null)
        {
            RemoveLayer(_layer);
            _layer = null;
        }
        _vm?.OnFinalize();
        _vm = null;
        base.OnFinalize();
    }
}

// Open on main thread (map hotkey, menu callback, etc.):
// ScreenManager.PushScreen(new MyToolScreen());
```

### Example 2: Match official campaign panels (GameState + IGameStateListener)

Official `GauntletQuestsScreen` pattern (semantic summary, not a full file copy):

```csharp
// [GameStateScreen(typeof(QuestsState))]
// class GauntletQuestsScreen : ScreenBase, IGameStateListener
//
// IGameStateListener.OnActivate:
//   _vm = new QuestsVM(CloseQuestsScreen);
//   _layer = new GauntletLayer("QuestScreen", 1, shouldClear: true);
//   _layer.InputRestrictions.SetInputRestrictions(...);
//   _layer.LoadMovie("QuestsScreen", _vm);
//   AddLayer(_layer);
//   ScreenManager.TrySetFocus(_layer);
//
// IGameStateListener.OnDeactivate:
//   RemoveLayer(_layer);   // Finalizes Layer internally
//
// IGameStateListener.OnFinalize:
//   _vm.OnFinalize(); _vm = null; _layer = null;
//
// Close:
//   Game.Current.GameStateManager.PopState(0);
//   // → GameStateScreenManager → ScreenManager.PopScreen()
```

Open side:

```csharp
if (Game.Current?.GameStateManager != null)
{
    Game.Current.GameStateManager.PushState(new QuestsState());
}
```

Query top screen:

```csharp
ScreenBase top = ScreenManager.TopScreen;
if (top is MyToolScreen)
{
    // only while your tool screen is open
}
```

## Cross-version notes

| Version | Notes |
|---------|-------|
| 1.3.0 / 1.3.15 | Lifecycle and Layer API already stable |
| 1.4.5 | Pairs with `ScreenManager` main-thread asserts; stricter double-Finalize on `HandleFinalize` |

## ↑ Parent Navigation

- [campaign-ext index](../) — partition for this page (historical path)
- [API reference](../../) — full API
- [SDK overview](../../../architecture/sdk-overview/) — L1 ScreenSystem / L4 UI
- [Gauntlet UI guide](../../../guide/gauntlet-ui/) — task walkthrough

## 🔀 Sibling Navigation

| Page | Relationship |
|------|--------------|
| [ScreenManager](../../gui/ScreenManager/) | Stack scheduler; Push/Pop this type |
| [ScreenLayer](../ScreenLayer/) | Layer base |
| [GauntletLayer](../../engine/GauntletLayer/) | Gauntlet movie layer |
| [ViewModel](../../core-extra/ViewModel/) | Bound data; Finalize with the screen |
| [GauntletMovie](../../gui/GauntletMovie/) | Prefab / movie binding |

## See also

- [Doc contract](../../../architecture/doc-contract/) — handwritten deep-page bar
- [Crash boundaries §8](../../../architecture/crash-boundaries/) — UI / ViewModel lifetime
- Source: `SandBox.GauntletUI.GauntletQuestsScreen` / `GauntletInventoryScreen`
- Source: `TaleWorlds.MountAndBlade.View.Screens.GameStateScreenManager`
