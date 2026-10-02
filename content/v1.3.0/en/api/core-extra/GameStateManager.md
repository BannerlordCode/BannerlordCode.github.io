---
title: "GameStateManager"
description: "The state-stack engine behind Bannerlord's screens: a manager owns an ordered list of GameState objects, pushes and pops them by Level, and ticks only the top of the stack. Covers CreateState<T>, PushState, CleanAndPushState, RegisterActiveStateDisableRequest and the static GameStateManager.Current switch."
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** none
**Source:** `TaleWorlds.Core/GameStateManager.cs`

## Overview

`GameStateManager` is the stack machine that decides which screen the player is looking at. It holds an ordered `List<GameState>`, treats the **last** element as the active state, and ticks only that one. `Module` creates one with `GameStateManagerType.Global` for the main menu, splash video, profile selection and editor; `Game` creates another per game for the in-game states. Which one is live is published through the static `GameStateManager.Current`, which the module and the game both overwrite. Everything a mod does with screens — push an overlay, close a menu, put the game on hold — goes through this class, and every operation is deferred through an internal `Queue<GameStateJob>` that is drained synchronously by `DoGameStateJobs()`.

## Mental Model

Read it as **"the owner of a stack of screens, plus the job queue that mutates that stack"**, not as a state object itself.

**The real call order for a push:**

1. You call `PushState(state, level)`. It does **not** mutate anything directly — it enqueues a `GameStateJob(JobType.Push, state, level)`.
2. `DoGameStateJobs()` dequeues it and runs `OnPushState(state)`.
3. `OnPushState` inserts the new state *after the last state whose `Level` is `<=` the new state's level* — that is what keeps levels ordered. It then compares `ActiveState` before and after: if the top changed, it calls `HandleDeactivate()` on the old top, fires `IGameStateManagerListener.OnPushState` on every listener, calls `HandleInitialize()` then `HandleActivate()` on the new top, and finally `Owner.OnStateChanged(oldTop)`.
4. `Common.MemoryCleanupGC(false)` runs at the end of both `OnPushState` and `OnPopState`.

**Three traps:**

- **`ActiveState` is `null` when the stack is empty — it does not throw, and it does not return a sentinel.** `this._gameStates.Count <= 0` returns `null` explicitly. Every read of `GameStateManager.Current.ActiveState` outside a push/pop callback needs a null check.
- **`ActiveStateDisabledByUser` swaps `OnTick` for `OnIdleTick`.** If any registered request is alive, `OnTick(dt)` calls `ActiveState.OnIdleTick(dt)` and **returns early** — the normal tick is skipped entirely. The requests are held as `WeakReference`s and pruned in `CleanRequests()` at the top of every tick, so forgetting to `UnregisterActiveStateDisableRequest` freezes the game once the requesting object is collected... or rather, once it is collected the request is pruned and the game resumes. The dangerous window is a request whose referent stays alive.
- **Reentrant pushes are queued, not nested.** Because every public mutator enqueues and then drains, a `PushState` from inside a listener callback appends to the queue and is drained by the *same* `while (_gameStateJobs.Count > 0)` loop. `OnPopState` explicitly checks `_gameStateJobs.Peek().Job` to decide whether the stack is genuinely empty, precisely because of this.

## When to Use / When NOT to Use

**Use `GameStateManager` when:**
- You are pushing or popping a full-screen state: `PushState`, `PopState`, `CleanAndPushState`, `CleanStates`, all level-aware.
- You need to observe stack changes without owning a state: `RegisterListener(IGameStateManagerListener)` gives you `OnCreateState`, `OnPushState`, `OnPopState`, `OnCleanStates`, `OnSavedGameLoadFinished`.
- You need to freeze the active state while a modal overlay is up: `RegisterActiveStateDisableRequest(object)` / `UnregisterActiveStateDisableRequest(object)`.

**Do NOT use `GameStateManager` when:**
- You want in-game screens that belong to the campaign. Those are still `GameState` objects, but the campaign builds them through `IGameStateManagerOwner` implementations, and `Game.Current.GameStateManager` is a different instance from the global one — check which is `Current` before you touch it.
- You want to run code every frame. Use a `CampaignBehaviorBase` or the mission tick, not `OnTick`.
- You need a singleton manager. `CreateState<T>()` is the only way to build a state (`where T : GameState, new()`), and the manager will happily create many instances of the same type.

## Dependencies

- [GameState](../GameState/) — the objects this manager stacks; `CreateState<T>` requires `T : GameState, new()`.
- [IGameStateManagerOwner](../IGameStateManagerOwner/) — receives `OnStateChanged(oldState)` and `OnStateStackEmpty()`.
- [IGameStateManagerListener](../IGameStateManagerListener/) — the five stack notifications you can subscribe to.
- [GameStateManagerType](../GameStateManagerType/) — `Game` or `Global`; stored on the read-only `CurrentType`.
- [Module](../../core/Module/) — creates the `Global` manager in its constructor and installs it as `GameStateManager.Current`.
- [Game](../Game/) — owns the per-game manager that takes over `GameStateManager.Current` while a game runs.

## Key Members

### Stack mutation

#### `public void PushState(GameState gameState, int level = 0)`
Enqueues a push. The new state lands above every state with `Level <= level`, which means `level` is a *sort key*, not a stack depth — pushing two states at level 0 twice makes the second one active.

#### `public void PopState(int level = 0)`
Enqueues a pop that removes the **last state whose `Level` equals** `level`, then activates whatever is now on top. If no state has that level, `FindLastIndex` returns `-1` and the method indexes `-1` — that is an unguarded `ArgumentOutOfRangeException`. Always pop the level you pushed.

#### `public void CleanAndPushState(GameState gameState, int level = 0)`
Enqueues a combined job: every state with `Level >= gameState.Level` is deactivated and finalized and removed, *then* the new state is pushed. This is the "replace the whole screen at this level" call the main menu uses (`CleanAndPushState(CreateState<InitialState>(), 0)`).

#### `public void CleanStates(int level = 0)`
Enqueues removal of every state at or above `level`, fires `OnCleanStates()` on all listeners, and activates the new top (or `Owner.OnStateStackEmpty()`). Note the static `Current` **setter** also calls this with level `0`, so assigning a new `Current` wipes the old manager's entire stack.

### Creation and inspection

#### `public T CreateState<T>() where T : GameState, new()` / `public T CreateState<T>(params object[] parameters) where T : GameState, new()`
Both use `Activator.CreateInstance` (the parameterless one as a generic call, the other via `Type` + `object[]`), then run `HandleCreateState`, which sets `state.GameStateManager = this` and fires `OnCreateState(state)` on every listener. **Contract:** creation does *not* activate the state — you must still push it.

#### `public GameState ActiveState { get; }`
The top of the stack, or `null`. Recomputed on every get; there is no cached field.

#### `public IEnumerable<GameState> GameStates { get; }` / `public T LastOrDefault<T>() where T : GameState`
`GameStates` is the backing list wrapped read-only; `LastOrDefault<T>()` searches backwards for the most recent state of a given type, which is how you find "the map screen, if one is still on the stack".

#### `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get; }`
A read-only *view* — `this._listeners.AsReadOnly()` — created fresh per access. Not a snapshot you can safely cache and enumerate later if listeners are being added concurrently.

### Listeners

#### `public bool RegisterListener(IGameStateManagerListener listener)` / `public bool UnregisterListener(IGameStateManagerListener listener)`
Register returns `false` (and adds nothing) if the listener is already present. Unregister returns `true`/`false` from `List.Remove`.

#### `public T GetListenerOfType<T>()`
Linear scan of the listener list, first match wins, `default(T)` when nothing matches. The listeners are added in module/game init order, so "first match" is load-order dependent — do not register two listeners of the same type and expect a specific one.

#### `public void OnSavedGameLoadFinished()`
Fan-out of `OnSavedGameLoadFinished()` to every listener. Nothing else in this class fires it; the save-load path calls it.

### Tick throttling

#### `public void RegisterActiveStateDisableRequest(object requestingInstance)` / `public void UnregisterActiveStateDisableRequest(object requestingInstance)`
Stores a `WeakReference` to your object. While at least one request is alive, `OnTick` routes to `OnIdleTick` instead of `OnTick`. Registration is idempotent by reference (the `Contains` check compares the object, not the `WeakReference`).

#### `public bool ActiveStateDisabledByUser { get; }`
True when `_activeStateDisableRequests.Count > 0`. Read-only; the list is private and only mutated through the two methods above.

#### `public void OnTick(float dt)`
Prunes dead weak references, then either calls `ActiveState.OnIdleTick(dt)` (if disabled) or `ActiveState.OnTick(dt)`, guarded by a null check on `ActiveState`.

### Singleton

#### `public static GameStateManager Current { get; set; }`
The setter is **not** a plain assignment: it calls `CleanStates(0)` on the outgoing manager before storing the new one. Anything you did not pop before the switch is finalized without warning.

#### `public static string StateActivateCommand`
A public static string read by `GameState.HandleActivate()`: when non-empty it calls `CommandLineFunctionality.CallFunction(StateActivateCommand, "", out flag)`. Used by the native side to drive console commands from activation; a mod that assigns a bogus value here gets an engine-level call on every activation.

## Examples

### Example 1 — create and push a state

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyOverlayState : GameState
    {
        protected override void OnActivate()
        {
            MBDebug.Print("overlay active");
        }
    }

    public class MyPusher
    {
        public void Show()
        {
            // GameStateManagerType.Game for an in-game screen; Current is the live manager.
            GameStateManager manager = GameStateManager.Current;
            MyOverlayState state = manager.CreateState<MyOverlayState>();
            manager.PushState(state, 10);
            MBDebug.Print("active now = " + manager.ActiveState.GetType().Name);
        }

        public void Hide()
        {
            // Pop the exact Level you pushed, or you index -1 and throw.
            GameStateManager.Current.PopState(10);
        }
    }
}
```

### Example 2 — observe the stack without owning a state

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyStackWatcher : IGameStateManagerListener
    {
        public void OnCreateState(GameState gameState) { }
        public void OnPushState(GameState gameState, bool isTopGameState) { }
        public void OnPopState(GameState gameState) { }
        public void OnCleanStates() { }
        public void OnSavedGameLoadFinished() { }

        public void Attach()
        {
            GameStateManager.Current.RegisterListener(this);
        }

        public void FindMapScreen()
        {
            // LastOrDefault searches backwards through the live stack.
            GameState found = GameStateManager.Current.LastOrDefault<GameState>();
            MBDebug.Print("top of stack = " + (found == null ? "none" : found.GetType().Name));
        }
    }
}
```

### Example 3 — hold the active state while a modal is up

```csharp
using TaleWorlds.Core;

namespace MyMod
{
    public class MyModal
    {
        // A request object kept alive for as long as the modal is open.
        private readonly object _request = new object();

        public void Open()
        {
            GameStateManager.Current.RegisterActiveStateDisableRequest(_request);
        }

        public void Close()
        {
            // Forget the object AND drop the request, or OnTick keeps routing to OnIdleTick.
            GameStateManager.Current.UnregisterActiveStateDisableRequest(_request);
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** `GameStateManager` holds no serialized data and creates no saved objects. A `GameState` that carries gameplay state must persist it through the campaign's save path, not through the state stack; a popped state is finalized with `HandleFinalize()`, which nulls `_listeners` and `GameStateManager`, so a reference to a popped state is dead weight and any later `IsActive` read throws.
- **Cross-domain dependency.** Two managers exist — `Module.GlobalGameStateManager` (`GameStateManagerType.Global`) and `Game.Current.GameStateManager`. The static `Current` is swapped between them: the `Current` **setter** calls `CleanStates(0)` on the outgoing instance. Caching `GameStateManager.Current` into a field across a game start/return-to-menu boundary leaves you holding a wiped stack.
- **Load order.** `CreateState<T>` requires `T : GameState, new()`, so the type must have a public parameterless constructor **and** be resolvable by `Activator` in the assembly that is loaded at that moment. `Module.FindMissions()` and `AddSubModule`'s `Managed.AddTypes(...)` registration both run before the first game, but a type declared in a module whose `SubModule.xml` failed to load is simply not there.
- **ID stability.** The `Level` int is the only identity a state has and it is **caller-assigned**. Two different mods pushing at level 0 means the second silently takes over the top of the stack. There is no registry, no unique id, and no dedup on push.
- **`PopState` with a level nobody pushed.** `FindLastIndex(state => state.Level == level)` returning `-1` indexes `_gameStates[-1]` and throws `ArgumentOutOfRangeException` from the tick loop, not from your call site in any useful sense.
- **Null `ActiveState`.** Any code reading `GameStateManager.Current.ActiveState.SomeMember` during teardown or from an `async` continuation gets a `NullReferenceException`. `Module.FinalizeModule()` does not clear the global stack defensively.
- **Thread affinity.** Nothing here is thread-safe. `Module.OnApplicationTick` calls `OnTick` from the main thread; a background `Task` calling `PushState` races the `Queue<GameStateJob>`.

## Cross-Version Notes

- **v1.3.0:** `GameStateManager` is `public class GameStateManager` with no base. The public surface is exactly: `Current`, `Listeners`, `CurrentType`, `Owner`, `GameStates`, `ActiveStateDisabledByUser`, `ActiveState`, the two-listener registration methods, `GetListenerOfType<T>`, the two disable-request methods, `OnSavedGameLoadFinished`, `LastOrDefault<T>`, both `CreateState<T>` overloads, `OnTick`, `PushState`, `PopState`, `CleanAndPushState`, `CleanStates`, and the public static `StateActivateCommand`.
- **The nested `GameStateManagerType { Game, Global }` enum and the nested private `GameStateJob` struct are not members you can use from outside** — `GameStateJob` is `private`, so the queue is entirely an implementation detail with no public inspection surface.
- **v1.3.15 / v1.4.5:** the push/pop/clean family and the two `CreateState<T>` overloads are stable. Later versions extend the *contents* of the stack with new state types and add campaign-side owners, but the level-sorting contract and the `Current` setter's `CleanStates(0)` side effect are unchanged.

## See Also

- ↑ Parent bucket: [Core-extra API index](../)
- ↔ Sibling: [GameState](../GameState/) — the stacked objects
- ↔ Sibling: [IGameStateManagerListener](../IGameStateManagerListener/) · [IGameStateManagerOwner](../IGameStateManagerOwner/)
- ↖ Creator: [Module](../../core/Module/) — builds the global manager
- ↪ Per-game owner: [Game](../Game/)
- ↑ Architecture: [SDK overview](../../../architecture/sdk-overview/)