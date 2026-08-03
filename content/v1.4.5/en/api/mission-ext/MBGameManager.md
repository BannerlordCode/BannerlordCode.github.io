---
title: "MBGameManager"
description: "The Mount & Blade game-session coordinator for loading, SubModule lifecycle dispatch, and orderly shutdown, including the real timing of Current, GameLoadingState, MissionState, and IsEnding."
---
# MBGameManager

| Metadata | Value |
|---|---|
| Namespace | `TaleWorlds.MountAndBlade` |
| Module | `TaleWorlds.MountAndBlade` |
| Type | `public abstract class MBGameManager : GameManagerBase` |
| Base | [`GameManagerBase`](../../core-extra/GameManagerBase) |
| Source file | `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs` |

**Namespace:** `TaleWorlds.MountAndBlade`

**Module:** `TaleWorlds.MountAndBlade`

**Type:** `public abstract class MBGameManager : GameManagerBase`

**Base:** [`GameManagerBase`](../../core-extra/GameManagerBase)

**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

`MBGameManager` connects a concrete game-mode loader to the engine state machine, dispatches lifecycle callbacks to loaded SubModules, and brings an entire game session down in the correct order when a Mission exists. It owns the hand-off timing for session-level `Current`, the load-complete latch, and the shutdown latch; it is not a business service for arbitrary mods to instantiate.

## ↑ Parent Navigation

- [Mission and Mount & Blade extension index](../)
- [Version home](../../../)

## ↔ Sibling Navigation

- [GameLoadingState](../GameLoadingState) - the state that drives loading steps and eventually calls `OnLoadFinished`.
- [MultiplayerSubModule](../MultiplayerSubModule) - one multiplayer entry point using the same SubModule lifecycle.
- [CustomBattleSubModule](../CustomBattleSubModule) - another mode entry point that participates through a SubModule.

## Mental model: a session bus, not a mod service container

`MBGameManager` is where three layers meet: a concrete game-mode loader below it; the `Game`, component collection, and static `Current` inherited from [`GameManagerBase`](../../core-extra/GameManagerBase) above it; and the loaded [`MBSubModuleBase`](../../core/MBSubModuleBase) instances owned by [`Module`](../../core/Module) alongside the state stack owned by [`GameStateManager`](../../core-extra/GameStateManager).

```text
SandBoxGameManager / MultiplayerGameManager / EditorGameManager
                         |
                         v
                  MBGameManager.Current
                         |
      +------------------+------------------+
      |                                     |
GameLoadingState -> Game / GameStateManager  Module.CurrentModule
                                              |
                                    CollectSubModules()
                                              |
                                      MBSubModuleBase hooks
```

The game or an official mode constructs the concrete manager. Its base constructor immediately writes it to `GameManagerBase.Current`, while `MBGameManager.Current` is only a casted view of that static slot. It is not a global service for a mod to construct, cache, or replace. Before loading completes, `GameLoadingState` calls its `DoLoadingForGameManager()` every tick; only after that succeeds does it call `OnLoadFinished()`, where the implementation or its base marks `IsLoaded`.

## Dependencies

- [`GameManagerBase`](../../core-extra/GameManagerBase) supplies static `Current`, `Game`, the component container, and the base loading steps.
- [`Module`](../../core/Module) exposes the actual [`MBSubModuleBase`](../../core/MBSubModuleBase) instances through `CollectSubModules()`.
- [`GameLoadingState`](../GameLoadingState) drives a derived loader while [`GameStateManager`](../../core-extra/GameStateManager) owns the stack rewritten during loading and shutdown.
- [`MissionState`](../../campaign-ext/MissionState) reads `IsEnding` after Mission completion to choose whole-stack cleanup or a normal state pop.

### When to use it, and when not to

- Put type registration, models, Behaviors, and game-start/end observations in real [`MBSubModuleBase`](../../core/MBSubModuleBase) lifecycle hooks; `MBGameManager` delivers the corresponding callbacks there.
- Read `MBGameManager.Current` only after the engine has created a session, treating it as a nullable, session-scoped reference. Use [`Mission.Current`](../../mission/Mission) for a Mission and `Game.Current.GameStateManager` for the state stack.
- Do not `new` an `MBGameManager` subclass from ordinary mod code, and do not manually invoke `BeginGameStart`, `OnGameStart`, `OnGameEnd`, or other dispatch methods. Either action can replace global `Current` or give every SubModule duplicate, out-of-order notifications.
- Do not treat `EndGame()` as a generic "close the current Mission" API. Normal Mission completion belongs to the Mission's own path; this method rewrites the entire game-state stack.

## Creation, ownership, and lifecycle

### From mode selection to a loaded game

The public `StartNewGame(MBGameManager gameLoader)` is a game-mode transition entry point, not a shortcut for creating a campaign. Its fixed sequence is:

1. Call `Module.CurrentModule.OnBeforeGameStart(gameLoader)`. That first invokes `OnBeforeGameStart(manager, disabledModules)` for every loaded SubModule, then deactivates modules requested through that list.
2. Create a `GameLoadingState` through `GameStateManager.Current.CreateState<GameLoadingState>()`, pass it the loader through `SetLoadingParameters`, then clear the old stack and push it with `CleanAndPushState`.
3. `GameLoadingState.OnTick` repeatedly calls `gameLoader.DoLoadingForGameManager()`. When it completes, it switches `GameStateManager.Current` to `Game.Current.GameStateManager` and calls `gameLoader.OnLoadFinished()`.

The official Sandbox path is concrete: `SandBoxSubModule.StartGame` constructs `new SandBoxGameManager(loadResult)` and passes it to `MBGameManager.StartNewGame(...)`. `SandBoxGameManager` loads module data, creates or loads a `Campaign`, waits for each SubModule's `DoLoading(Game.Current)`, then moves to character creation, the map, or another final UI state. Mods normally participate in its SubModule hooks instead of reproducing that start chain.

### What it really dispatches to MBSubModuleBase

The following overrides enumerate `Module.CurrentModule.CollectSubModules()` in order and directly forward to each entry. The manager neither catches exceptions nor retries a hook, and it gives mods no isolation:

| Manager phase | Hook sent to each `MBSubModuleBase` | Appropriate work |
|---|---|---|
| `BeginGameStart` | `BeginGameStart(game)` | The game is starting, but not every object need be registered yet. |
| `OnNewCampaignStart` | `OnCampaignStart(game, starterObject)` | Attach Campaign-specific services for a new Campaign. |
| `InitializeSubModuleGameObjects` | `InitializeSubModuleGameObjects(game)` | Configure SubModule-owned game objects. |
| `RegisterSubModuleTypes` | `RegisterSubModuleTypes()` | Register serialization/object types before relying on loaded objects. |
| `RegisterSubModuleObjects` / `AfterRegisterSubModuleObjects` | Same-named hooks, with `isSavedCampaign` | Register XML objects, then perform work that depends on registered objects. |
| `InitializeGameStarter` | `InitializeGameStarter(game, starter)` | Add Models, Behaviors, and other starter content. |
| Init complete / new game / load | `OnGameInitializationFinished`, `OnAfterGameInitializationFinished`, `OnNewGameCreated`, `OnGameLoaded`, `OnAfterGameLoaded` | Keep restore work appropriate to new-game versus load-game timing. |
| `OnGameStart` | `OnGameStart(game, gameStarter)` | The manager first creates `MonsterMissionDataCreator`, then dispatches; afterwards it installs `MissionGameModels` and binds monster-bone lookup delegates. |
| `OnGameEnd` | `OnGameEnd(game)` | It dispatches first, then restores disabled modules, clears `MissionGameModels`, and finally lets the base clear `Current` and `Game`. |

`OnGameInitializationFinished` has a non-SubModule side effect too: it walks the `SkeletonScale` instances in `Game.Current.ObjectManager`, resolves their named bones, and writes the bone-index arrays. It is not a harmless notification that can safely be called twice.

## Key members and shutdown timing

### `Current`, `IsLoaded`, and `IsEnding`

- `Current` returns `(MBGameManager)GameManagerBase.Current`. It is replaced during the construction of any manager and is cleared by the base `OnGameEnd`; field initializers, module-load code, and asynchronous continuations therefore cannot assume it is non-null or still belongs to the same session.
- `IsLoaded` is controlled by the manager and writable only by subclasses. The base `OnLoadFinished()` sets it to `true`; `SandBoxGameManager` does so after its extra UI/load cleanup. It means the loading pipeline has handed over, **not** that a Mission exists.
- `IsEnding` starts as `false`; after a successful `CheckAndSetEnding()` it remains `true` until that manager instance is torn down. It is a one-shot "this session is ending" latch, not a pause flag and not something to reset for another game.

### `CheckAndSetEnding()`: a one-time latch only

The method locks a private object, checks `IsEnding`, and sets it. The first caller receives `true`; later callers receive `false`. That prevents two `EndGame` continuations from both starting cleanup, but it protects only the Boolean. It does **not** make `Mission`, `Game`, or `GameStateManager` thread-safe.

Do not trigger the shutdown sequence from a background thread, and do not pop or clean states yourself while `EndGame` is waiting. `EndGame` is `async void`, so callers cannot await it; operations outside the latch still need to remain on the engine's expected game thread and lifecycle.

### `EndGame()`: settle loading first, then resolve the Mission

`EndGame()` does not destroy objects immediately:

1. While `Current` exists and `IsLoaded` is false, it waits 100 ms for loading to finish; it also stops waiting if the manager disappears.
2. It returns when an existing manager has already lost `CheckAndSetEnding()`, or when `Game.Current.GameStateManager` is `null`.
3. If `Mission.Current` exists but the top state is not [`MissionState`](../../campaign-ext/MissionState), it repeatedly calls `PopState()` until that Mission state is reached.
4. With `MissionState` on top, it calls `CurrentMission.EndMission()` and polls until `Mission.Current` is `null`; only when there is no MissionState does it call `CleanStates()` directly.

That sequence explains the finish branch in [`MissionState`](../../campaign-ext/MissionState): once a Mission becomes `Over`, it calls `CleanStates()` when `MBGameManager.Current.IsEnding` is true, but merely `PopState()` otherwise. Clearing the stack directly or starting a new session while a Mission is still active bypasses this coordination.

Platform invitations and a platform multiplayer request reach `MBGameManager.Current.OnSessionInvitationAccepted(...)` and `OnPlatformRequestedMultiplayer()` through engine jobs. The default implementations call `EndGame()` respectively for a non-`None` invitation and unconditionally. An override that does not preserve an equivalent shutdown route can leave an active state or Mission behind during a platform transition.

## Real SubModule and state-transition examples

This is the actual start entry in the official `SandBoxSubModule`. It is game-mode code, not a construction pattern that an ordinary mod should copy:

```csharp
private void StartGame(LoadResult loadResult)
{
    MBGameManager.StartNewGame(new SandBoxGameManager(loadResult));
    MouseManager.ShowCursor(false);
}
```

`StartNewGame` immediately makes [`GameLoadingState`](../GameLoadingState) the root state. When the load-game path completes, `SandBoxGameManager.OnLoadFinished` then creates and pushes `MapState` through the real `Game.Current.GameStateManager`; a new game instead moves to character creation or a video state. This is why the game loader owns state transitions rather than any SubModule arbitrarily clearing the stack.

For registration, the official Sandbox SubModule uses this real acquisition path:

```csharp
public override void RegisterSubModuleObjects(bool isSavedCampaign)
{
    Campaign.Current.SandBoxManager.InitializeSandboxXMLs(isSavedCampaign);
}

public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)
{
    Campaign.Current.SandBoxManager.InitializeCharactersAfterLoad(isSavedCampaign);
}
```

The manager dispatches these hooks in order through `RegisterSubModuleObjects` and `AfterRegisterSubModuleObjects`. They rely on `Campaign.Current` and previously registered objects, so they do not belong in `OnSubModuleLoad` and should not construct a manager. During `OnGameEnd`, `Current` remains readable because base cleanup happens only after every SubModule receives its end callback.

## Risks and diagnosis

- **Duplicate shutdown:** Calling `EndGame()` and then cleaning the stack directly, or overriding a platform callback without the controlled exit, races `MissionState`'s finishing tick. Observe `IsEnding`; do not treat it as permission to perform your own cleanup.
- **Static initialization:** Capturing `Current` in a field initializer, `OnSubModuleLoad`, or a thread continuation can capture `null`, an old manager, or one just replaced by another subclass. Read it just-in-time in the appropriate game phase and null-check it.
- **Misreading loading:** `EndGame()` waits while `IsLoaded == false`. A subclass that fails to set it during loading finalization can leave an exit request pending. A derived loader must eventually call the base `OnLoadFinished` or set the property.
- **Mission/state-stack mismatch:** When `Mission.Current` exists but `MissionState` is not on top, the engine pops states until it finds it. A custom state must have a normally poppable parent/child relationship; it must not block this path with a persistent state.
- **Hook exceptions:** Lifecycle forwarding is direct. An exception from one SubModule aborts that manager phase, potentially skipping later modules and engine cleanup. Put registrations in their proper phase and make cleanup tolerate partial initialization.

## Related types

- [MBSubModuleBase](../../core/MBSubModuleBase) - lifecycle endpoints mods actually override.
- [GameManagerBase](../../core-extra/GameManagerBase) - parent owner of `Current`, `Game`, components, and the loading-step machine.
- [Module](../../core/Module) - owns and collects active SubModules, and performs requested deactivation in `OnBeforeGameStart`.
- [GameStateManager](../../core-extra/GameStateManager) - owner of `GameLoadingState`, `MissionState`, and state-stack operations.
- [Mission](../../mission/Mission) - the real Mission object behind `Mission.Current`, not the game session itself.
- [MissionState](../../campaign-ext/MissionState) - returns a completed Mission to `CleanStates` or `PopState`.
- [SandBoxGameManager](../../campaign-ext/SandBoxGameManager) - a concrete Campaign loader and real derived example.
