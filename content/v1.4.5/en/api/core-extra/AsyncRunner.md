---
title: "AsyncRunner"
description: "A three-method abstract contract (Run / SyncTick / OnRemove) for test drivers. Its only consumer in 1.4.5's managed source is TaleWorlds.Library's TestContext -- the automated test harness that locates an implementation type reflectively from a /runTest command-line argument. The mod runtime never calls it, and neither does the battle loop."
---

# AsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AsyncRunner`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AsyncRunner.cs`

## Overview

**Starting with the conclusion: this type is not a game API, it is test infrastructure.** `AsyncRunner` is a ten-line abstract class with three abstract methods: `Run()` (executed on a dedicated thread), `SyncTick()` (advances one frame on the main loop), and `OnRemove()` (cleanup).

Its **only consumer in 1.4.5's managed source is `TaleWorlds.Library/TaleWorlds.Library/TestContext.cs`** — an automated test harness that takes a command-line `/runTest <TypeName>` argument and reflectively scans the loaded assemblies to locate an implementing type. Nothing in the battle, campaign, or mission pipeline calls it.

So the real job of this page is to **explain what it actually is and why you will almost never touch it**, rather than to invent a usage for it.

## Mental Model

Treat it as **a three-method contract between a test harness and the code under test**, not as "part of the game main loop".

**The centre of the mental model is the harness's actual flow** — all of it inside `TestContext.cs`:

1. `RunTestAux(string commandLine)` (`:19-…`) parses the command line and extracts the string after `/runTest` as the **type name**;
2. `GetAsyncRunnerConstructor(test)` (`:77-93`) walks every type in every assembly returned by `GetAsyncRunnerAssemblies()`, **matching on `type.Name == asyncRunner`**, then filters by type with `typeof(AsyncRunner).IsAssignableFrom(type)` or `typeof(AwaitableAsyncRunner).IsAssignableFrom(type)`, and finally looks for a **parameterless constructor**;
3. It instantiates via reflective `Invoke` (`:53-57`);
4. `_asyncRunner = obj as AsyncRunner;` (`:59`);
5. If non-null it **starts a new thread named `"ManagedAsyncThread"`** to run `_asyncRunner.Run()` (`:61-66`);
6. Every frame the harness's own main loop calls `_asyncRunner.SyncTick()` — but **only while `_asyncThread.IsAlive`** (`:137-139`);
7. It nulls the fields at teardown (`:154-155`).

**That flow yields four direct consequences.** First, **discovery is by type name, not by attribute or registration** — so a duplicate type name gets picked up wrongly. Second, **`Run()` must be safe on a thread that is not the game thread**, because it runs on `"ManagedAsyncThread"` while `SyncTick()` runs on another one. Third, **`SyncTick()` has a liveness condition**: once `_asyncThread.IsAlive` goes false it is simply never called again, so your `Run()` returning silently stops all subsequent ticking — **no exception, no log**. Fourth, and about `OnRemove()`: **`TestContext.cs` in 1.4.5 never calls it at all.** I checked all seven references to `_asyncRunner` in that file (`:11`, `:59`, `:61`, `:65`, `:137`, `:139`, `:154`) and **`OnRemove` appears in none of them.** It is a contract that was declared but is currently unfulfilled — implementing it has no effect, and not implementing it causes no problem either, unless you host `AsyncRunner` somewhere else.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `Run` | `public abstract void Run();` | The body, executed on a **dedicated thread**. `TestContext.cs:61-66` constructs a `Thread`, names it `"ManagedAsyncThread"`, starts it, and invokes this. **It must run independently of the game main loop**, because the harness's own loop is simultaneously calling `SyncTick()`. **Once the thread exits, `SyncTick` is no longer called** (the `_asyncThread.IsAlive` guard at `:137`). |
| `SyncTick` | `public abstract void SyncTick();` | Advances the code under test one frame from the harness's own main loop. The condition at `TestContext.cs:137-139` is `if (_asyncThread != null && _asyncThread.IsAlive && _asyncRunner != null)`. **This is the two-thread collaboration point** — `Run`'s thread and the caller of `SyncTick` are different threads, so the implementation must synchronise shared state itself. |
| `OnRemove` | `public abstract void OnRemove();` | A cleanup hook. **It has zero callers in 1.4.5's `TestContext.cs`** — that file references `_asyncRunner` seven times and this is not among them. **It is declared but unfulfilled; implementing it produces no observable behaviour.** |
| (sole consumer) `TestContext` | `TaleWorlds.Library/TestContext.cs:59-65`, `:137-139` | `TestContext.RunTestAux` reflectively locates an implementation from the `/runTest <TypeName>` command line, casts with `as AsyncRunner`, starts a thread for `Run()`, and calls `SyncTick()` every frame. **This is the only call site in the tree.** |
| (sibling type) `AwaitableAsyncRunner` | `TaleWorlds.Library/AwaitableAsyncRunner.cs`, likewise three abstract methods (`RunAsync()` / `OnTick(float)`) | **The harness accepts two contracts**: the condition at `TestContext.cs:84` is `typeof(AsyncRunner).IsAssignableFrom(type) || typeof(AwaitableAsyncRunner).IsAssignableFrom(type)`. The two are parallel, non-inheriting abstract classes. |

## Real Example

**Stated plainly: in 1.4.5's managed source there is no real call site to copy for this type**, because its only consumer is a reflection-driven test harness. The class below follows the real flow in `TestContext.cs`, **with each step annotated to the harness action that drives it**:

```csharp
public class MyTestRunner : AsyncRunner
{
    private volatile bool _shouldKeepRunning;
    private int _tickCount;

    // Called on a dedicated thread named "ManagedAsyncThread"
    // (TestContext.cs:61-66). It must not touch game state directly.
    public override void Run()
    {
        _shouldKeepRunning = true;
        while (_shouldKeepRunning)
        {
            // The test body would go here. Nothing in the game engine drives
            // this loop; the runner's own loop does, via SyncTick below.
        }
    }

    // Called from the runner's main loop, but ONLY while Run's thread is
    // alive (TestContext.cs:137-139). When Run returns, this stops being called
    // silently -- no exception, no log.
    public override void SyncTick()
    {
        _tickCount++;
    }

    // Never called by TestContext in 1.4.5: the file references _asyncRunner
    // seven times and OnRemove is not among them. Implementing it changes
    // nothing observable.
    public override void OnRemove()
    {
        _shouldKeepRunning = false;
    }

    public int TickCount => _tickCount;
}
```

Reproducing the harness's discovery logic — **the most direct evidence of who actually uses this type** (shape taken from `TestContext.cs:77-93`):

```csharp
public static class RunnerLookup
{
    // TestContext.GetAsyncRunnerAssemblies (:95-112) collects every loaded
    // assembly that references TaleWorlds.Library, then this code scans them.
    public static Type FindRunnerType(Assembly[] candidateAssemblies, string runnerTypeName)
    {
        foreach (Assembly assembly in candidateAssemblies)
        {
            foreach (Type type in assembly.GetTypes())
            {
                // Matching is by NAME, not by attribute or registration.
                if (type.Name != runnerTypeName)
                {
                    continue;
                }

                // TestContext.cs:84 accepts either contract.
                bool isRunner = typeof(AsyncRunner).IsAssignableFrom(type)
                    || typeof(AwaitableAsyncRunner).IsAssignableFrom(type);
                if (!isRunner)
                {
                    continue;
                }

                ConstructorInfo ctor = type.GetConstructor(
                    BindingFlags.Instance | BindingFlags.Static | BindingFlags.Public
                    | BindingFlags.NonPublic | BindingFlags.CreateInstance,
                    null, new Type[0], null);
                if (ctor != null)
                {
                    return type;
                }
            }
        }
        return null;
    }
}
```

## Risks and Boundaries

- **It is not a game API, and mods will not call it.** Evidence: `grep -rn "AsyncRunner"` across 1.4.5's managed source hits only four kinds of location — its own ten lines, the definition in `AwaitableAsyncRunner.cs`, seven references in `TestContext.cs`, and nothing else. **No battle, campaign, or mission code path calls it.**
- **`Run()` and `SyncTick()` run on different threads.** `Run` is on `"ManagedAsyncThread"` (`TestContext.cs:61-66`); `SyncTick` is on the harness main loop (`:137-139`). **Shared state must be synchronised by you.**
- **`SyncTick()` stops silently.** The guard is `_asyncThread.IsAlive`. **The moment `Run()` returns, `SyncTick` is no longer called — with no exception and no log.** This is the easiest place to write a silent hang.
- **`OnRemove()` has no caller in 1.4.5.** The contract is declared, but `TestContext.cs` never calls it. **Implementing it has no observable effect.**
- **Discovery matches on a type-name string, not an attribute or registry.** `TestContext.cs:82` reads `if (type.Name == asyncRunner ...)`. **Two types with the same name collide**, and `GetTypes()` scans **every loaded assembly that references TaleWorlds.Library** — mod assemblies included.
- **A public parameterless constructor is mandatory.** The `GetConstructor(...)` at `:85-86` skips any type it cannot find one for. **Your class cannot have a constructor with parameters.**
- **It is an abstract class, not an interface.** The two parallel abstract classes (`AsyncRunner` and `AwaitableAsyncRunner`) do not inherit from each other, and the harness accepts both with `||`. **Either path works for writing a runner; inheriting from a blend of them does not.**
- **`GetTypes()` can throw `ReflectionTypeLoadException`.** The harness's `GetAsyncRunnerAssemblies` (`:97`, `asyncRunnerAssemblies[i].GetTypes()`) **has no try/catch** — so a single unloadable type anywhere in one assembly collapses the whole lookup. A mod assembly that fails to load will take the test harness down with it.
- **The `AwaitableAsyncRunner` path has a different lifecycle.** When it is that contract instead, `TestContext.cs:70-72` calls `_awaitableAsyncRunner.RunAsync()` and stores the `Task`, and `:141-143` calls `OnTick(dt)` each frame. **The two paths are managed differently — do not assume they behave alike.**

## Cross-Version Notes

`AsyncRunner.cs` is 10 lines with 3 abstract methods in 1.4.5, in original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output and will carry abstract-class boilerplate. **What genuinely deserves checking across versions is not these three methods (they are extremely unlikely to change) but "who consumes it".** If some version deletes or refactors `TestContext`, this type becomes outright dead code; conversely, if it is ever wired into the real game startup sequence — a resource-loading harness, say — its status changes completely. **So the only reliable way to judge whether it is useful is to re-run `grep -rn "AsyncRunner"` against the target version and look at the callers, not at the type itself.** Also keep in mind the parallel `AwaitableAsyncRunner` type: **1.4.5's `TestContext` accepts both, so watching only `AsyncRunner` misses half the usage.**

## Dependencies

- Sole consumer: [TestContext](../TestContext) at `:59-65` (starts the thread running `Run`) and `:137-139` (calls `SyncTick` each frame)
- Parallel contract: [AwaitableAsyncRunner](../AwaitableAsyncRunner)'s `RunAsync()` / `OnTick(float)`, accepted alongside by the `||` at `TestContext.cs:84`
- Test switch: [TestCommonBase](../TestCommonBase)'s `BaseInstance.IsTestEnabled` and `SceneNameToOpenOnStartup`, written by `TestContext.RunTestAux` from the command line
- Assertion output: [Debug](../Debug)'s `SetTestModeEnabled` and `Print(..., Debug.DebugColor.Yellow)`, used by `TestContext.RunTestAux` while it hunts for the test
- Discovery mechanism: `TestContext.GetAsyncRunnerAssemblies` (`:95-112`) collects every loaded assembly referencing `TaleWorlds.Library` (via `Assembly.GetReferencedAssemblies()`), and `:77-93` reflectively searches them by **type name**
- Reflection dependency: `System.Reflection`'s `Assembly.GetTypes()`, `Type.GetConstructor(BindingFlags...)`, `ConstructorInfo.Invoke`
- Thread dependency: `System.Threading`'s `Thread` and `ThreadStart`, with the thread hard-named `"ManagedAsyncThread"`
- Trigger: the `/runTest <TypeName>` command-line argument, parsed by `TestContext.RunTestAux(string commandLine)`
- Bucket index: [core-extra API section](../)