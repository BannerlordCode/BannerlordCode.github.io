---
title: "GameState — screen and mission lifecycle node"
description: "Source-backed v1.4.5 guide to GameState initialization, activation, deactivation, finalization, listener callbacks, tick boundaries, and safe use through GameStateManager."
---
# GameState

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public abstract class GameState : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source path:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameState.cs`

## One-line responsibility

Own the lifecycle callbacks and listener fan-out for one stack entry in the running game, such as a map, menu, crafting, lobby, or mission state.

## Mental model

Think of a state as a foreground layer owned by a [GameStateManager](../GameStateManager). A state is not active just because it exists: `CreateState<T>()` attaches it to a manager, `PushState` inserts it into the level-ordered stack, and only the top state receives active ticks. The state itself supplies overridable lifecycle hooks; the manager decides when those hooks run.

The lifecycle in v1.4.5 is:

1. `HandleInitialize()` calls `OnInitialize()`, then every registered [IGameStateListener](../IGameStateListener).`OnInitialize()`.
2. `HandleActivate()` runs only if `GameStateManager.ActiveState == this`; it calls `OnActivate()`, then listener `OnActivate()` once for that activation pass, then an optional `GameStateManager.StateActivateCommand`.
3. While active, the manager calls `OnTick(dt)`. If the active state is disabled by a user request, it calls `OnIdleTick(dt)` instead.
4. When another state becomes active, `HandleDeactivate()` calls `OnDeactivate()` and listener `OnDeactivate()`.
5. When removed from the stack, `HandleFinalize()` calls `OnFinalize()`, listener `OnFinalize()`, then clears the listener list and `GameStateManager` reference.

After finalization the object is a stale reference: its listener collection has been nulled and its manager link is gone.

## When to use it / when not to

Use a derived state when you are building a real screen, mission, lobby, or game-mode layer that belongs on the engine state stack. Read it when you need to know whether a state is the active top layer, who its predecessor is, or when state-scoped listeners fire.

Do not use a state as a long-lived service container or save object. Do not manually call `OnInitialize`, `OnActivate`, `OnDeactivate`, or `OnFinalize`; the manager calls the internal `Handle*` methods in the correct order. For campaign world changes, use the appropriate [Actions](../../campaign-ext/StartBattleAction) or campaign systems, not raw state callbacks.

## Dependencies and call chain

| Edge | Source-backed meaning |
|------|-----------------------|
| Upstream | [GameStateManager](../GameStateManager) creates, stacks, activates, deactivates, ticks, and finalizes states. |
| Listeners | [IGameStateListener](../IGameStateListener) receives initialize/activate/deactivate/finalize after the state hook. |
| Manager listeners | [IGameStateManagerListener](../IGameStateManagerListener) observes creation, push, pop, and clean events at manager level. |
| Mission entry | [MissionState](../../campaign-ext/MissionState) is a derived state opened by `MissionState.OpenNew`, which uses `Game.Current.GameStateManager.CreateState<MissionState>()` and then `PushState`. |
| Mission runtime | [Mission](../../mission/Mission) receives `OnMissionStateActivate`, `OnMissionStateDeactivate`, and `OnMissionStateFinalize` from `MissionState`. |
| Save | [SaveManager](../../save-system/SaveManager) persists campaign data, not transient active-state objects. |

## Crash, lifecycle, thread, and save risks

- Registering a null state listener hits `Debug.FailedAssert`; register real listener objects and unregister when your owning UI object is done.
- Holding a state after `HandleFinalize()` is unsafe because `_listeners` and `GameStateManager` are set to null. Reacquire from `Game.Current.GameStateManager.ActiveState` or `LastOrDefault<T>()`.
- `IsActive` is a top-of-stack check, not an initialized check. A created but not pushed state has a manager, but it is not active.
- `OnTick` runs only for the active state unless `ActiveStateDisabledByUser` is set; then `OnIdleTick` runs. Do not move simulation logic into a screen state unless you understand this pause boundary.
- State objects are not campaign save records. Store persistent mod data in a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase).`SyncData`, not in fields on a transient state.

## Key public members

| Member | Use, side effect, timing |
|--------|--------------------------|
| `Predecessor` | Asks the owning manager for the state just below this one. Safe only while `GameStateManager` is still attached. |
| `IsActive` | Returns true only when this instance is the manager's current `ActiveState`; no side effects. |
| `Listeners` | Read-only view of state listeners. It is invalid after finalization because the internal list is nulled. |
| `GameStateManager` | Set internally by `CreateState`/`HandleCreateState`; cleared on finalization. |
| `IsMusicMenuState`, `IsMenuState` | Virtual flags for specialized states; default false. |
| `Activated` | Set true by base `OnActivate()`, false by base `OnDeactivate()`. If overriding, call `base` unless you intentionally change this contract. |
| `RegisterListener` | Adds an [IGameStateListener](../IGameStateListener) unless already present; returns false for duplicates. |
| `UnregisterListener` | Removes a listener; returns whether it was present. |
| `GetListenerOfType<T>()` | Linear search over registered listeners, returning default when none match. |
| `OnTick(float dt)` | Override for active-frame work. It is called by the manager, not by mod code. |
| `OnIdleTick(float dt)` | Override for paused/disabled active state work. |

## Real C# examples

### Observe a mission state without keeping it forever

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class ActiveMissionStateProbe
{
    public MissionState GetActiveMissionState()
    {
        GameStateManager manager = Game.Current.GameStateManager;
        return manager.ActiveState as MissionState;
    }

    public bool IsMissionStateActive(GameState state)
    {
        return state is MissionState && state.IsActive;
    }
}
```

The important part is reacquisition from `Game.Current.GameStateManager`. Do not cache the returned state across mission end.

### Listener registration scoped to the state lifetime

```csharp
using TaleWorlds.Core;

public sealed class StateLifecycleLogger : IGameStateListener
{
    public void Attach(GameState state)
    {
        state.RegisterListener(this);
    }

    public void Detach(GameState state)
    {
        state.UnregisterListener(this);
    }

    public void OnInitialize() { }
    public void OnActivate() { }
    public void OnDeactivate() { }
    public void OnFinalize() { }
}
```

Register on a live state and unregister before your owner disappears. After the state finalizes, the listener list is gone.

## Navigation

**Parent**

- [Core-extra API index](../)
- [Crash boundaries](../../../architecture/crash-boundary)

**Sibling**

- [GameStateManager](../GameStateManager)
- [IGameStateListener](../IGameStateListener)
- [IGameStateManagerListener](../IGameStateManagerListener)
- [WaitForGameState](../WaitForGameState)

**Related / children**

- [MissionState](../../campaign-ext/MissionState)
- [Mission](../../mission/Mission)
- [Game](../../core/Game)
- [SaveManager](../../save-system/SaveManager)
