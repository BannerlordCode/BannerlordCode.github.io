<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameStateManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** none
**File:** `TaleWorlds.Core/GameStateManager.cs`

## Overview

`GameStateManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get { return GameStateManager._current; }` |
| `Listeners` | `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get { return this._listeners.AsReadOnly(); }` |
| `GameStates` | `public IEnumerable<GameState> GameStates { get { return this._gameStates.AsReadOnly(); }` |
| `ActiveStateDisabledByUser` | `public bool ActiveStateDisabledByUser { get { return this._activeStateDisableRequests.Count > 0; }` |
| `ActiveState` | `public GameState ActiveState { get { if (this._gameStates.Count <= 0) { return null; }` |

## Key Methods

### RegisterListener
```csharp
public bool RegisterListener(IGameStateManagerListener listener)
```

### UnregisterListener
```csharp
public bool UnregisterListener(IGameStateManagerListener listener)
```

### RegisterActiveStateDisableRequest
```csharp
public void RegisterActiveStateDisableRequest(object requestingInstance)
```

### UnregisterActiveStateDisableRequest
```csharp
public void UnregisterActiveStateDisableRequest(object requestingInstance)
```

### OnSavedGameLoadFinished
```csharp
public void OnSavedGameLoadFinished()
```

### OnTick
```csharp
public void OnTick(float dt)
```

### PushState
```csharp
public void PushState(GameState gameState, int level = 0)
```

### PopState
```csharp
public void PopState(int level = 0)
```

### CleanAndPushState
```csharp
public void CleanAndPushState(GameState gameState, int level = 0)
```

### CleanStates
```csharp
public void CleanStates(int level = 0)
```

## Usage Example

```csharp
// Typical usage of GameStateManager (Manager)
GameStateManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)