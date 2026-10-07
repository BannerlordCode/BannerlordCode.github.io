---
title: "IGameStateManagerListener"
description: "Listener interface in TaleWorlds.Core that lets a type react to the game-state stack changing as states are created, pushed, popped, cleaned, or loaded from a save."
---

# IGameStateManagerListener

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStateManagerListener`
**Base:** *(none)*
**File:** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/IGameStateManagerListener.cs`

## Overview

`IGameStateManagerListener` is a listener interface in `TaleWorlds.Core` that lets a type react to the game-state stack changing. The game-state stack is the mechanism Bannerlord uses to move between screens and phases — the map, a mission, a menu, a conversation — and this interface is the hook that fires as those states are created, pushed, popped, cleaned, or loaded from a save.

The interface is consumed by `GameStateManager` (GameStateManager.cs:8), the class that owns the state stack and invokes each registered listener's callbacks as the stack changes. A mod registers a listener to be notified when the player enters the map, starts a mission, returns to a menu, or finishes loading a save.

`GameState` is the base class for all game states, so every callback that carries a state gives you a `GameState` reference you can cast to the concrete state you care about.

## Mental Model

Think of the game-state stack as a stack of screens. `GameStateManager` is the owner of that stack, and `IGameStateManagerListener` is the observer contract. Whenever the stack changes — a state is created, pushed on top, popped off, or the whole stack is cleaned — `GameStateManager` walks its registered listeners and calls the matching callback.

Key rules and invariants:

- `OnCreateState` (IGameStateManagerListener.cs:5) fires when a new `GameState` is instantiated, before it is necessarily on the stack. Use it to observe state creation, not activation.
- `OnPushState` (IGameStateManagerListener.cs:7) fires when a state is pushed onto the stack. The `isTopGameState` argument tells you whether the pushed state is now the top of the stack — the one the player is actually looking at.
- `OnPopState` (IGameStateManagerListener.cs:9) fires when a state is popped off the stack. The state argument is the state being removed, not the one becoming active.
- `OnCleanStates` (IGameStateManagerListener.cs:11) fires when the stack is cleared, for example when returning to the main menu or resetting between sessions.
- `OnSavedGameLoadFinished` (IGameStateManagerListener.cs:13) fires after a save has finished loading. Use it to reinitialize anything that depends on the loaded world state.
- Listeners are invoked by `GameStateManager` (GameStateManager.cs:8); the mod does not call these methods itself. Register with the manager and the callbacks come to you.

## How to use

### How to get it

A mod implements `IGameStateManagerListener` directly on a class — there is no abstract base class to derive from. The source tree path is `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/IGameStateManagerListener.cs`. To receive callbacks, register the listener with `GameStateManager` (GameStateManager.cs:8), the dispatcher that invokes the callbacks as the stack changes.

### Typical usage

A mod creates a class that implements `IGameStateManagerListener`, registers it with `GameStateManager`, and handles the callbacks it cares about. A common pattern is to override `OnPushState` (IGameStateManagerListener.cs:7) to detect entering the map or a mission by casting the `GameState` argument, and to use `OnSavedGameLoadFinished` (IGameStateManagerListener.cs:13) to reinitialize after a load. `OnCleanStates` (IGameStateManagerListener.cs:11) is the place to release resources when the stack is torn down.

### Pitfalls

- Treating `OnCreateState` (IGameStateManagerListener.cs:5) as activation. A state can be created before it is pushed; use `OnPushState` (IGameStateManagerListener.cs:7) to know when the player actually sees it.
- Ignoring the `isTopGameState` argument of `OnPushState` (IGameStateManagerListener.cs:7). A state can be pushed beneath the current top; only the top state is the one the player is interacting with.
- Assuming `OnPopState` (IGameStateManagerListener.cs:9) tells you which state is now active. It tells you which state was removed; the newly active state is the one below it on the stack.
- Forgetting to unregister the listener. A listener that is never removed keeps receiving callbacks and can leak references to destroyed objects.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OnCreateState` | `void OnCreateState(GameState gameState)` | Fires when a new `GameState` is created, before it is necessarily on the stack. |
| `OnPushState` | `void OnPushState(GameState gameState, bool isTopGameState)` | Fires when a state is pushed onto the stack; `isTopGameState` marks the state the player now sees. |
| `OnPopState` | `void OnPopState(GameState gameState)` | Fires when a state is popped off the stack; the argument is the state being removed. |
| `OnCleanStates` | `void OnCleanStates()` | Fires when the whole state stack is cleared, for example on a return to the main menu. |
| `OnSavedGameLoadFinished` | `void OnSavedGameLoadFinished()` | Fires after a save has finished loading, so dependents can reinitialize against the loaded world. |

## Real Example

```csharp
using TaleWorlds.Core;

public class MyStateListener : IGameStateManagerListener
{
    public void OnCreateState(GameState gameState)
    {
        // A state was created; not necessarily visible yet.
    }

    public void OnPushState(GameState gameState, bool isTopGameState)
    {
        if (!isTopGameState) return;

        if (gameState is MapState)
        {
            // The player entered the map; reinitialize map-dependent data.
        }
        else if (gameState is MissionState)
        {
            // A mission started; prepare mission systems.
        }
    }

    public void OnPopState(GameState gameState)
    {
        // The given state was removed from the stack.
    }

    public void OnCleanStates()
    {
        // The stack was cleared; release cached resources.
    }

    public void OnSavedGameLoadFinished()
    {
        // A save finished loading; rebuild anything that depends on world state.
    }
}
```

## See also
- [GameState](../GameState)
- [BindingPath](../BindingPath)

## Navigation
- [core-extra index](../)
- [GameState](../GameState)
