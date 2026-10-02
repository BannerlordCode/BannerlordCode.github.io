---
title: "GameState"
description: "The abstract base for every screen in Bannerlord's state stack: a GameState gets Initialize, Activate, Deactivate and Finalize callbacks plus a per-frame tick, owns its own IGameStateListener list, and exposes Level as its sort key inside GameStateManager."
---
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**Source:** `TaleWorlds.Core/GameState.cs`

## Overview

`GameState` is what a full-screen state in Bannerlord actually is: the main menu, the map screen, the character creation stage, a video playback, the editor, a loading overlay. It is an abstract class deriving from `MBObjectBase`, instantiated only through `GameStateManager.CreateState<T>()`, and it receives four lifecycle callbacks from its manager — `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnFinalize` — plus a per-frame `OnTick` and an `OnIdleTick` used when a "disable active state" request is pending. It also maintains its own list of `IGameStateListener`, separate from the manager-wide listener list, which is how a state reacts to being pushed without knowing who pushed it. `Level` is a public int field, not a property, and it is the sort key the manager uses when inserting.

## Mental Model

Read it as **"one screen, with a lifecycle the manager drives and a sort key that decides stacking order"**. You never `new` a `GameState` yourself in normal flow — you call `manager.CreateState<T>()` (which sets `GameStateManager` and fires `OnCreateState`) and then `PushState`.

**The real call order, straight from `GameStateManager.OnPushState` / `OnPopState`:**

1. `CreateState<T>()` → `HandleCreateState` sets `state.GameStateManager = this`, fires `IGameStateManagerListener.OnCreateState`. **`OnInitialize` has NOT run yet.**
2. `PushState(state, level)` → insert by `Level`.
3. If the top changed: old top `HandleDeactivate()` → listeners `OnDeactivate`; then manager listeners `OnPushState`; then new top `HandleInitialize()` (→ `OnInitialize`, then each `IGameStateListener.OnInitialize`); then new top `HandleActivate()` (→ `OnActivate`, then each listener's `OnActivate`).
4. Every frame while it is the top: `manager.OnTick(dt)` → `OnTick(dt)` — or `OnIdleTick(dt)` when a disable request is pending.
5. `PopState(level)` → `HandleDeactivate()`, `HandleFinalize()`, removed from the list, then the newly-exposed top gets `HandleActivate()`.

**Three traps:**

- **`OnInitialize` fires only when the state becomes the top**, not at creation time. `CreateState<T>()` alone runs nothing on the state. If you build your state in a field initializer or constructor you cannot see `GameStateManager` yet, because `GameStateManager` is assigned by `HandleCreateState`.
- **`HandleFinalize()` nulls out your own internals.** After it runs, `this._listeners = null` and `this.GameStateManager = null`. Any later `IsActive` read dereferences a null manager and throws. Treat a finalized state as dead; the manager removes it from the list immediately after.
- **`OnActivate` may run more than once for the same state.** Every push that changes the top re-activates, including the re-activation that follows a pop from above it. `Activated` is set to `true` in the base `OnActivate` and `false` in `OnDeactivate`; if you override either and forget `base.OnActivate()` / `base.OnDeactivate()`, `Activated` stays stale.

## When to Use / When NOT to Use

**Use `GameState` when:**
- You are adding a genuinely full-screen surface that participates in the stack — a settings screen, a custom loading overlay, an editor-like view.
- You want per-state activation semantics: build expensive resources in `OnActivate`, release them in `OnDeactivate`.
- You need the state to receive `OnPushState` / `OnPopState` / `OnCleanStates` fan-out from `GameStateManager` listeners.

**Do NOT use `GameState` when:**
- You want an in-campaign overlay such as a map inset or a notification bar. Those are `GauntletLayer` / `ScreenBase` / `IGauntletMapEventVisualHandler` territory, not state-stack members.
- You want reactive campaign logic. `CampaignBehaviorBase` gives you `RegisterEvents` / `SyncData`; a `GameState` gives you neither.
- You want a mission-scoped thing. That is a `MissionBehavior`.
- Your type needs constructor arguments — `CreateState<T>()` requires `new()`; the `params object[]` overload still goes through `Activator.CreateInstance(typeof(T), parameters)`, so a public parameterless constructor must still exist for the parameterless overload to be usable.

## Dependencies

- [GameStateManager](../GameStateManager/) — creates, stacks and ticks this object; owns `GameStateManager` back-reference.
- [IGameStateListener](../IGameStateListener/) — the four per-state callbacks a state fans out to its own listeners.
- [IGameStateManagerOwner](../IGameStateManagerOwner/) — receives `OnStateChanged` from the manager when this state becomes active.
- [GameStateManagerType](../GameStateManagerType/) — the manager that owns you decides whether you are in the `Global` or `Game` stack.
- [Module](../../core/Module/) — owns the global manager and pushes `InitialState`, `EditorState`, `VideoPlaybackState`.
- [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — the object-registration extension surface that `MBObjectBase` participates in.

## Key Members

### Lifecycle overrides

#### `protected virtual void OnInitialize()`
Called once per top-of-stack transition into this state, via the `internal HandleInitialize()`. **Contract:** by the time it runs, `GameStateManager` is already assigned (it was set at `CreateState` time). `OnInitialize` on the state runs *before* `IGameStateListener.OnInitialize` on its listeners, so listeners may already assume the base state is initialized.

#### `protected virtual void OnActivate()`
Called via the `internal HandleActivate()`. **Contract:** always call `base.OnActivate()` — that is what sets the public `Activated` flag to `true`. Immediately after this, if the state is active and has listeners and nothing in `OnActivate` pushed another state, the base calls `IGameStateListener.OnActivate()` for each listener. If you push a state from inside `OnActivate`, `IsActive` becomes false and the listener fan-out is skipped — the listeners silently never activate.

#### `protected virtual void OnDeactivate()`
Called via the `internal HandleDeactivate()`, before `HandleFinalize()` on pop and before the manager activates the new top. **Contract:** always call `base.OnDeactivate()` to clear `Activated`.

#### `protected virtual void OnFinalize()`
Called via `HandleFinalize()`, immediately before the state is dropped from the manager's list. After it returns, the base nulls `_listeners` and `GameStateManager`. This is your last chance to release unmanaged or engine resources.

#### `protected internal virtual void OnTick(float dt)` / `protected internal virtual void OnIdleTick(float dt)`
`OnTick` is the normal per-frame path, driven by `GameStateManager.OnTick` only while this state is the top of the stack. `OnIdleTick` is the replacement used while `ActiveStateDisabledByUser` is true — implement one or the other, never assume both run. Both are declared `protected internal virtual`, so an override may be `protected` or `protected internal`.

### Read-only surface

#### `public bool IsActive { get; }`
`GameStateManager != null && GameStateManager.ActiveState == this`. Reads through to the manager, so it is **false after finalize** (manager is null) rather than throwing — the null check is inside the property.

#### `public GameState Predecessor { get; }`
`GameStateManager.FindPredecessor(this)`, i.e. the element one position below this one in the manager's list, or `null` when this state is first in the stack. Throws if `GameStateManager` is null (finalized), since `FindPredecessor` is called unguarded.

#### `public bool Activated { get; private set; }`
Set only by the base `OnActivate` / `OnDeactivate`. Private setter — override the virtuals, never try to assign it.

#### `public virtual bool IsMenuState { get; }` / `public virtual bool IsMusicMenuState { get; }`
Both return `false` in the base and are **override points for framework queries**, not for your own state. Return `true` from `IsMenuState` when your state is a full menu — code elsewhere branches on it. In an override supply a get-only property (`public override bool IsMenuState { get { return true; } }`); there is no setter on the base.

#### `public IReadOnlyCollection<IGameStateListener> Listeners { get; }`
Read-only view over the state's own listener list, `AsReadOnly()`, rebuilt per access. Null after finalize.

#### `public GameStateManager GameStateManager { get; internal set; }`
Assigned by `GameStateManager.HandleCreateState`. The setter is `internal`, so a mod cannot move a state between managers.

#### `public int Level;`
A **public field**, not a property, and the manager sorts on it. Assign it before `PushState`; changing it afterwards does not re-sort the live stack.

### Listeners

#### `public bool RegisterListener(IGameStateListener listener)`
Adds a listener, returning `false` if already present. **Contract:** passing `null` hits a `Debug.FailedAssert("Can not register null listener to game state.")` and then still appends `null` to the list — the assert is not a guard, so the following `foreach` throws. Check for null yourself.

#### `public bool UnregisterListener(IGameStateListener listener)`
`List.Remove`, returning whether anything was removed.

#### `public T GetListenerOfType<T>()`
First `IGameStateListener` that is a `T`, in registration order, else `default(T)`.

## Examples

### Example 1 — a minimal full-screen state

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Localization;
using TaleWorlds.ScreenSystem;

namespace MyMod
{
    public class MyOverlayState : GameState
    {
        private ScreenBase _cached;

        public MyOverlayState()
        {
            // GameStateManager is still null here: it is assigned by CreateState<T>().
            this.Level = 10;
        }

        protected override void OnActivate()
        {
            base.OnActivate();               // sets Activated = true
            _cached = MyViewModelCache.Get();
            MBDebug.Print("overlay activated at level " + this.Level);
        }

        protected override void OnDeactivate()
        {
            base.OnDeactivate();             // sets Activated = false
            _cached = null;
        }

        protected override void OnFinalize()
        {
            // Last chance: GameStateManager and Listeners are nulled right after this.
            MBDebug.Print("overlay finalized");
        }

        protected internal override void OnTick(float dt)
        {
            // Only runs while this state is the top of the stack.
            if (this.IsActive)
            {
                _cached.Tick(dt);
            }
        }
    }

    public static class MyOverlay
    {
        public static void Show()
        {
            MyOverlayState state = GameStateManager.Current.CreateState<MyOverlayState>();
            GameStateManager.Current.PushState(state, state.Level);
        }
    }
}
```

### Example 2 — reacting to push and pop with a per-state listener

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyStateWatcher : IGameStateListener
    {
        public void OnActivate() { MBDebug.Print("state activated"); }
        public void OnDeactivate() { MBDebug.Print("state deactivated"); }
        public void OnInitialize() { MBDebug.Print("state initialized"); }
        public void OnFinalize() { MBDebug.Print("state finalized"); }
    }

    public static class MyOverlay
    {
        public static void Show()
        {
            MyOverlayState state = GameStateManager.Current.CreateState<MyOverlayState>();
            bool added = state.RegisterListener(new MyStateWatcher());
            MBDebug.Print("listener added = " + added);
            GameStateManager.Current.PushState(state, state.Level);
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** `GameState` derives from `MBObjectBase`, which brings identity registration but no automatic save integration. **A `GameState` is not a saveable campaign object** — anything it holds that must survive a reload belongs in a `CampaignBehaviorBase.SyncData(IDataStore)` or a `MBObjectManager` type registered through `SaveableTypeDefiner`. The `InitialState`, `CharacterCreationState` and similar states are recreated on every load precisely because the stack is not saved.
- **Cross-domain dependency.** `GameState.cs` references `TaleWorlds.Library` (`Debug.FailedAssert`) and `TaleWorlds.ObjectSystem` (`MBObjectBase`), but the concrete states you will copy from span `TaleWorlds.MountAndBlade`, `TaleWorlds.ScreenSystem` and `TaleWorlds.CampaignSystem`. Deriving from a concrete state pulls its whole dependency closure. Keep your subclass in the assembly that already references what you need.
- **Load order.** `GameStateManager` is assigned at `CreateState<T>()`, not in the constructor. Any field initializer or constructor body that reads `this.GameStateManager` or `this.Predecessor` sees `null`. Set `Level` in the constructor (it is a plain field), but resolve everything else in `OnInitialize` or `OnActivate`.
- **ID stability.** `Level` is the only identity and it is caller-assigned with no uniqueness check. Two mods pushing at the same level fight over the top of the stack. There is no name, no id and no dedup; if you need identity, keep your own map from instance to key.
- **Pushing from `OnActivate`.** The base checks `IsActive` after `OnActivate()` returns; if your override pushed another state, `IsActive` is false and the `IGameStateListener.OnActivate()` fan-out is skipped. Listeners then never get `OnActivate` even though the state was briefly active. Queue the push instead of doing it inline.
- **`RegisterListener(null)`.** The `Debug.FailedAssert` does not return; `null` is appended and every later fan-out `foreach` throws. Guard the argument.
- **Reading after finalize.** `Predecessor` calls `GameStateManager.FindPredecessor(this)` with no null check on `GameStateManager` (which `HandleFinalize` nulled), so it throws `NullReferenceException`. `IsActive` is safe; `Predecessor`, `Listeners` and `GameStateManager` are not.

## Cross-Version Notes

- **v1.3.0:** `GameState` is `public abstract class GameState : MBObjectBase` with a `protected GameState()`. The full virtual surface is `OnInitialize`, `OnFinalize`, `OnActivate`, `OnDeactivate`, `OnTick(float)`, `OnIdleTick(float)`, plus `IsMusicMenuState` and `IsMenuState`. `Level` is a public field. `HandleInitialize` / `HandleFinalize` / `HandleActivate` / `HandleDeactivate` are `internal`, so a mod cannot drive the lifecycle by hand.
- **A quirk worth knowing:** `GameState.NumberOfListenerActivations` is a `public static int` used as a one-frame guard so that the listener fan-out runs at most once per activation. It is public, so it is readable — and writable — by mod code, and writing to it suppresses listener activation.
- **v1.3.15 / v1.4.5:** the lifecycle and the `internal` handle methods are unchanged. Later versions add new concrete state types and a couple of extra virtuals, but nothing here was re-modifiered; `OnTick` / `OnIdleTick` remain `protected internal virtual`.

## See Also

- ↑ Parent bucket: [Core-extra API index](../)
- ↔ Sibling: [GameStateManager](../GameStateManager/) — creates, stacks and ticks this
- ↔ Sibling: [IGameStateListener](../IGameStateListener/) · [IGameStateManagerOwner](../IGameStateManagerOwner/)
- ↖ Creator: [Module](../../core/Module/)
- ↪ Reactive alternative: [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- ↑ Architecture: [SDK overview](../../../architecture/sdk-overview/)