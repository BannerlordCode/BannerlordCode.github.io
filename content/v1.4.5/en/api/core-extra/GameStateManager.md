---
title: "GameStateManager — level-ordered state stack owner"
description: "Source-backed v1.4.5 guide to GameStateManager creation, CreateState, PushState, PopState, CleanStates, level semantics, tick routing, listeners, and main-thread hazards."
---
# GameStateManager

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class GameStateManager`  
**Base:** none  
**Source path:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## One-line responsibility

Own the current stack of game states, route ticks to the active top state, and perform ordered lifecycle transitions for pushed, popped, or cleaned states.

## Mental model

This manager is a small stack machine with levels. `ActiveState` is always the last item in the internal list. The insertion code reads the state's own public `Level` field and inserts the state after the last existing state whose level is less than or equal to that value. The public `PushState(gameState, level)` parameter is queued, but in the v1.4.5 source path visible here `OnPushState` does not assign that parameter back to `gameState.Level`; set or verify the state level before relying on ordering. Higher or equal level states sit above lower ones; a new lower-level state can be inserted below an already active higher-level overlay and may not become active.

Creation and stacking are separate:

- `CreateState<T>()` or `CreateState<T>(params object[])` constructs the object, sets its `GameStateManager`, and notifies manager listeners with `OnCreateState`.
- `PushState` changes the stack, deactivates the previous active state when the active top changes, initializes and activates the new active state, and calls the owner `OnStateChanged`. The insertion logic reads `gameState.Level`.
- `PopState(level)` removes the last state with exactly that level.
- `CleanStates(level)` removes every state whose level is greater than or equal to `level`.
- `CleanAndPushState` first removes states at or above the incoming state's level, then pushes the new state.

`PushState` and `PopState` assert that they run on the main thread. The jobs are queued, but `DoGameStateJobs()` immediately drains that queue.

## When to use it / when not to

Use `Game.Current.GameStateManager` when opening a real state or reading the active state inside game code. Use `GameStateManager.Current` when following engine/global UI code that intentionally switches between the module global manager and the current game's manager.

Do not create an arbitrary `new GameStateManager` for gameplay. Do not push a half-initialized `MissionState`; the real mission entry is [MissionState](../../campaign-ext/MissionState).`OpenNew`, whose source creates a `MissionState`, calls its mission setup, then pushes it. Do not call `PopState` with a level that is not present; source uses `FindLastIndex` and then indexes directly.

## Dependencies and call chain

| Edge | Source-backed meaning |
|------|-----------------------|
| Owned states | [GameState](../GameState) receives initialize/activate/deactivate/finalize and tick calls from the manager. |
| Owner | [Game](../../core/Game) and module-level owners implement [IGameStateManagerOwner](../IGameStateManagerOwner) for `OnStateChanged` and `OnStateStackEmpty`. |
| Manager listeners | [IGameStateManagerListener](../IGameStateManagerListener) receives create/push/pop/clean notifications. |
| Mission opening | [MissionState](../../campaign-ext/MissionState).`OpenNew` uses `Game.Current.GameStateManager.CreateState<MissionState>()`, initializes the mission, then calls `PushState`. |
| Campaign menus | [EncounterGameMenuModel](../../campaign/EncounterGameMenuModel) call sites check `Game.Current.GameStateManager.ActiveState != null` before refreshing siege menu context. |
| Save | [SaveManager](../../save-system/SaveManager) restores campaign objects; `OnSavedGameLoadFinished()` only forwards a manager listener notification. |

## Crash, lifecycle, thread, and old-reference risks

- `PushState` and `PopState` must be called from the main thread; otherwise source raises `Debug.FailedAssert("State should be changed from main thread")`.
- `PopState(level)` assumes a state with that exact level exists. Passing the wrong level can produce an invalid index path.
- `CleanStates(level)` finalizes all states at or above the threshold. Any object keeping references to those states or their listeners must reacquire after the clean.
- `Current` setter first calls `_current?.CleanStates()` before replacing the static manager. Swapping current manager is a global transition, not a cheap pointer assignment.
- If `ActiveStateDisabledByUser` has live weak requests, `OnTick(dt)` routes to `ActiveState.OnIdleTick(dt)` instead of `OnTick(dt)`.
- Old states become invalid after `HandleFinalize()` because the state clears its listener list and manager link.

## Key public members

| Member | Use, side effect, timing |
|--------|--------------------------|
| `Current` | Static active manager. Setting it cleans states on the previous current manager. |
| `CurrentType` | Indicates `Game` or `Global`; set in the constructor. |
| `Owner` | Receives stack-empty and state-changed callbacks. |
| `GameStates` | Read-only view of all stacked states, not only the active one. |
| `ActiveState` | Last state in the internal list, or null when empty. |
| `RegisterListener` / `UnregisterListener` | Manage [IGameStateManagerListener](../IGameStateManagerListener) objects. Duplicates are rejected. |
| `RegisterActiveStateDisableRequest` | Adds a weak request object; while any live request exists, active tick becomes idle tick. |
| `OnSavedGameLoadFinished` | Forwards save-load-finished to manager listeners. It does not rebuild the stack by itself. |
| `LastOrDefault<T>()` | Finds the last stacked state of a given type, useful for reacquiring rather than caching. |
| `CreateState<T>()` | Constructs, attaches manager, notifies listeners. No initialize/activate happens until push. |
| `PushState(GameState, int)` | Main-thread stack mutation; may initialize/activate if this push changes the active top. In this v1.4.5 source, insertion compares `gameState.Level`. |
| `PopState(int)` | Main-thread removal of the last state at exactly that level; finalizes the removed state. |
| `CleanAndPushState(GameState, int)` | Removes states at or above the incoming level, then pushes. |
| `CleanStates(int)` | Finalizes/removes every state whose level is at or above the threshold. |
| `OnTick(float dt)` | Routes time to the active state's `OnTick` or `OnIdleTick`. |

## Real C# examples

### Open a mission through the public entry point

The public entry point hides the protected setup method and performs the manager transition in the source-confirmed order. The initializer record is a real `MissionInitializerRecord` built for the scene that the caller is opening:

```csharp
using System;
using TaleWorlds.MountAndBlade;

public Mission OpenCustomBattle(string scene)
{
    MissionInitializerRecord record = new MissionInitializerRecord(scene)
    {
        PlayingInCampaignMode = false
    };

    return MissionState.OpenNew(
        "CustomBattle",
        record,
        mission => Array.Empty<MissionBehavior>());
}
```

Inside `MissionState.OpenNew`, the engine calls `Game.Current.GameStateManager.CreateState<MissionState>()`, completes mission setup, and then calls `PushState`. Mod code should use this public overload or a TaleWorlds mission helper that reaches it; do not call the protected setup method or push a fresh `MissionState` with no `CurrentMission`.

### Reacquire active state before acting

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MissionStackGuard
{
    public bool TryGetCurrentMission(out Mission mission)
    {
        GameStateManager manager = Game.Current.GameStateManager;
        MissionState missionState = manager.ActiveState as MissionState;
        mission = missionState?.CurrentMission;
        return mission != null;
    }
}
```

This avoids stale references after `CleanStates`, mission end, or manager replacement.

## Navigation

**Parent**

- [Core-extra API index](../)
- [Crash boundaries](../../../architecture/crash-boundary)

**Sibling**

- [GameState](../GameState)
- [GameStateManagerType](../GameStateManagerType)
- [IGameStateManagerOwner](../IGameStateManagerOwner)
- [IGameStateManagerListener](../IGameStateManagerListener)

**Related / children**

- [MissionState](../../campaign-ext/MissionState)
- [Mission](../../mission/Mission)
- [Game](../../core/Game)
- [EncounterGameMenuModel](../../campaign/EncounterGameMenuModel)
- [SaveManager](../../save-system/SaveManager)
