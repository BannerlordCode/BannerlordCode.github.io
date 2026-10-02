---
title: "CoroutineManager"
description: "The engine's tick-driven C# iterator scheduler: hand it a CoroutineDelegate returning IEnumerator<CoroutineState> and it advances every registered coroutine one CoroutineState per Tick(), removing each one the moment its enumerator runs dry. Used by the network layer and by mission/campaign code that needs frame-synchronised, resumable logic."
---
# CoroutineManager

**Namespace:** TaleWorlds.Network  
**Module:** TaleWorlds.Network  
**Type:** `public class CoroutineManager`  
**Base:** none  
**File:** `TaleWorlds.Network/CoroutineManager.cs`

## Overview

`CoroutineManager` is a miniature scheduler for C# iterator methods. You do not write a class for it: you write a method matching the `CoroutineDelegate` signature — `IEnumerator<CoroutineState> Something()` — and register that method with `AddCoroutine`. The manager stores each registration in a `Coroutine` wrapper and advances it from a single external driver: every call to `Tick()` walks the list, starts any not-yet-started coroutine, pulls exactly one `MoveNext()` from its enumerator, and re-initialises the returned `CoroutineState` with a back-reference to the manager. When `MoveNext()` finally returns `false`, the wrapper is removed from the list and the loop index is rewound so the removal is not skipped. There is no `Start()`, no `Stop()`, no per-coroutine handle — lifetime is entirely "until your iterator returns false".

The important design consequence is that this is **not** `System.Collections.IEnumerator` driven by `yield return null`. The generic argument is `CoroutineState`, so each `yield return` must hand back a state object whose `IsFinished` property is readable. That state object also receives the manager through `Initialize(CoroutineManager)`, which is how a paused coroutine can register further work or query `CurrentTick` without a static reference. Progress is measured in manager ticks (`CurrentTick`, incremented once per `Tick()`), not in seconds.

## Mental Model

Think of it as **"a for-loop that owns a list of paused iterators, stepped by whoever owns the loop"**:

- **Who creates it:** the owner of the loop, not the engine. Nothing in `Campaign` or `Mission` constructs one for you in v1.4.5. If you need coroutines you create the manager, keep it in a field, and call `Tick()` from your own tick hook.
- **Typical call order:** construct in your initialisation hook → `AddCoroutine(...)` any time → drive `Tick()` once per frame/tick from the owner → coroutines remove themselves. There is no explicit teardown; dropping the manager reference is enough, but any coroutine still mid-iterator is simply abandoned, never resumed and never notified.
- **Common misuse trap #1 — yielding the wrong type.** `yield return null` compiles to an `IEnumerator<CoroutineState>` yielding `null`, and `Tick()` then does `coroutine.CurrentState = enumerator.Current as CoroutineState;` followed by `coroutine.CurrentState.Initialize(this)`. A `null` current state therefore throws a `NullReferenceException` on the very next `MoveNext()` check. Every `yield return` must be a real `CoroutineState`.
- **Common misuse trap #2 — reentrancy.** `Tick()` iterates `_coroutines` by index and rewinds `i--` on removal. A coroutine that calls `AddCoroutine` during its own `Tick()` appends to the list, which is safe; a coroutine that somehow triggers a nested `Tick()` mutates the same list mid-iteration and can skip or double-advance entries. Drive the manager from exactly one place.
- **Common misuse trap #3 — assuming a scheduler.** There is no delay/wait-by-seconds primitive. Waiting means "return a `CoroutineState` whose `IsFinished` is false for N ticks"; the state has to own that counter itself.

## When to Use / When NOT to Use

**Use it when:**
- You need multi-step logic that must survive across several ticks without threads or `async` continuations — e.g. a mission logic that waits for an agent to die, then applies an effect.
- You want the flow to be written as a single readable linear method instead of a callback chain.
- You are writing network-facing code and need deterministic, manually-stepped sequencing.

**Do NOT use it when:**
- You need real parallelism or blocking waits — this is strictly single-threaded and cooperatively scheduled.
- You need to cancel a specific coroutine from outside. There is no handle, no `Stop`, and no removal API. The only way out is for the coroutine's own iterator to finish.
- A plain `if` in your existing tick callback will do. `CampaignEvents` and `MissionBehavior` ticks are already "a method called every frame"; wrapping a three-line body in a coroutine adds machinery for nothing.

## Dependencies

- [Coroutine](../Coroutine) — the internal wrapper holding `IsStarted`, `Enumerator`, `CurrentState` and the delegate for one registered coroutine.
- [CoroutineState](../CoroutineState) — the abstract type every `yield return` must produce; it exposes `IsFinished` and receives the manager through `Initialize`.
- [CampaignBehaviorBase](../CampaignBehaviorBase) — the usual campaign-side owner of a manager: register a behavior, keep the manager as a field, and tick it from your `DailyTick` / event callbacks.
- [MissionLogic](../../mission-ext/MissionLogic) — the mission-side counterpart that would own and drive a manager in mission code.
- [MessageContract](../MessageContract) — sibling of `CoroutineManager` in `TaleWorlds.Network`; the network layer pairs hand-stepped coroutines with explicitly serialized messages.

## Key members

### `public void AddCoroutine(CoroutineDelegate coroutineMethod)`

Registers a delegate. Wraps it in a fresh `Coroutine`, sets `IsStarted = false`, and appends to the internal list.
- **When to call:** any time before or during the first `Tick()`. Nothing is executed here — the delegate is not invoked until the manager ticks.
- **Return value:** none. There is no way to obtain a reference to, or later cancel, the registration.
- **Side effect:** `CoroutineCount` grows by one immediately, even though nothing has run.

### `public void Tick()`

The single pump. For each entry, in list order:
1. If `IsStarted` is `false`, flip it to `true`, set the local `flag`, and invoke the delegate to obtain the `IEnumerator<CoroutineState>`. The delegate body therefore runs *up to its first* `yield return` on the first tick.
2. If `flag` (just started) **or** `coroutine.CurrentState.IsFinished` is `true`, call `MoveNext()`.
3. If `MoveNext()` returned `false`, remove the wrapper and rewind the loop index.
4. Otherwise store `Enumerator.Current as CoroutineState` and call `CurrentState.Initialize(this)`.

After the loop, `CurrentTick` is incremented.
- **Key semantic:** a freshly started coroutine advances twice on its first tick (once to get the enumerator, once for the first real step). Budget for that when your steps have side effects.
- **Key semantic:** `CurrentState` is `null` for a wrapper whose delegate has just been invoked but whose enumerator has not yet produced anything — do not read it before step 4 has run at least once.

### `public int CurrentTick { get; private set; }`

Monotonic counter of `Tick()` invocations since construction. It is the only clock a coroutine has; a `CoroutineState` that wants to wait three ticks captures the value at `Initialize` and compares against `CoroutineManager.CurrentTick`.
- The setter is private, so this cannot be reset or fast-forwarded from outside.

### `public int CoroutineCount => _coroutines.Count`

Live count of registrations that have not yet finished. Useful as a cheap assertion in tests ("after N ticks, everything should have drained to zero").

### `public CoroutineManager()`

Creates the manager with an empty list and `CurrentTick = 0`. There is no `Reset()`, so a manager cannot be reused for a second campaign or mission — construct a new one.

## Examples

### Example 1 — a coroutine that waits for an agent, then applies an effect

```csharp
using System.Collections;
using TaleWorlds.Engine;
using TaleWorlds.Network;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class WaitThenDebuffState : CoroutineState
    {
        private readonly Agent _agent;
        private int _remainingTicks;

        public WaitThenDebuffState(Agent agent, int ticks)
        {
            _agent = agent;
            _remainingTicks = ticks;
        }

        protected internal override bool IsFinished => _agent == null || _agent.IsDead();

        protected internal override void Initialize(CoroutineManager coroutineManager)
        {
            base.Initialize(coroutineManager);
            if (--_remainingTicks <= 0)
            {
                _agent?.TakeDamage(10f);
            }
        }
    }

    public class StaggerController : MissionLogic
    {
        private readonly CoroutineManager _coroutines = new CoroutineManager();

        public void Begin(Agent agent)
        {
            _coroutines.AddCoroutine(StaggerSequence(agent));
        }

        private IEnumerator<CoroutineState> StaggerSequence(Agent agent)
        {
            yield return new WaitThenDebuffState(agent, 120);
        }

        public override void MissionTick(float dt)
        {
            _coroutines.Tick();
        }
    }
}
```

### Example 2 — poll until a condition holds, using `CurrentTick` as the clock

```csharp
private IEnumerator<CoroutineState> WaitForFlag(Flag flag)
{
    while (!flag.IsSet())
    {
        yield return new TickWaitState();
    }
    Campaign.Current.CampaignBehaviorManager.DoSomethingAfterWait();
}

private sealed class TickWaitState : CoroutineState
{
    private int _tickAtEntry;

    protected internal override bool IsFinished => true;   // ready to advance on every pump

    protected internal override void Initialize(CoroutineManager coroutineManager)
    {
        base.Initialize(coroutineManager);
        _tickAtEntry = coroutineManager.CurrentTick;         // CoroutineManager is protected on the base
    }
}
```

## Risks and crash boundaries

- **Save serialization:** `CoroutineManager` holds no save hooks at all — no `SyncData`, no `IDataStore` participation, nothing written to a campaign save. Any in-flight coroutine (its local variables, its pending `CoroutineState`) is lost the moment the game is saved and reloaded, and no state object is told about it. If the flow matters across a save/load, re-enter it from a `CampaignBehaviorBase.RegisterEvents`/`SyncData` path instead of from a coroutine.
- **Cross-domain dependencies:** the type lives in `TaleWorlds.Network` but has no networking behaviour of its own. Reaching it from mission code is fine, but note that mission logic ticks on the render frame and campaign logic ticks on the campaign tick — a manager must be owned by exactly one domain and ticked from that domain only, otherwise you will get double-stepping or a manager that never advances.
- **Load order:** `CoroutineState.Initialize(CoroutineManager)` is called from inside `Tick()`, so the back-reference is only valid once the state has been yielded at least once. A state that dereferences `CoroutineManager` from its own constructor has no manager yet and must not.
- **ID stability:** there are no IDs here, but `CurrentTick` is effectively an identity of "when" — never persist it, and never assume it continues across a restart or a domain switch.
- **`yield return null` is a hard crash**, not a soft no-op: see the mental model above. `Tick()` dereferences `CurrentState` unconditionally after a successful `MoveNext()`.
- **Unbounded growth:** nothing removes a coroutine except its own completion. A `while (true)` iterator that always yields a non-finished state makes `Tick()` slower every frame and is never reclaimed.
- **Removal rewind:** the `i--` on removal is what keeps the loop honest; any mod that re-implements a manager and forgets it will skip the element right after the one that finished.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the class, its members, and the `Coroutine` / `CoroutineState` / `CoroutineDelegate` trio are unchanged. It has never been wired into `Campaign` or `Mission` by the base game; it remains a facility for game and mod code that wants to own its own stepping loop.
- **v1.4.5:** `CurrentTick` is `{ get; private set; }` and increments at the end of `Tick()`, after the whole list has been processed. Nothing else changed in the scheduler.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](../)
- ↔ Sibling: [Coroutine](../Coroutine) — one registered iterator's state holder
- ↔ Sibling: [CoroutineState](../CoroutineState) — the abstract state every `yield return` must produce
- ↔ Sibling: [MessageContract](../MessageContract) — the other half of the `TaleWorlds.Network` stepping model
- ↔ Sibling: [CampaignBehaviorBase](../CampaignBehaviorBase) — the campaign-side owner that ticks a manager
- ↔ Sibling: [MissionLogic](../../mission-ext/MissionLogic) — the mission-side owner
