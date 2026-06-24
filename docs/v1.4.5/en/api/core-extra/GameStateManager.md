<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameStateManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## Overview

`GameStateManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameStateManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get; set; }` |
| `CurrentType` | `public GameStateManagerType CurrentType { get; }` |
| `Owner` | `public IGameStateManagerOwner Owner { get; }` |
| `ActiveState` | `public GameState ActiveState { get; }` |

## Key Methods

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener)`

**Purpose:** Handles logic related to `register listener`.

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener)`

**Purpose:** Handles logic related to `unregister listener`.

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance)`

**Purpose:** Handles logic related to `register active state disable request`.

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance)`

**Purpose:** Handles logic related to `unregister active state disable request`.

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**Purpose:** Called when the `saved game load finished` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### PushState
`public void PushState(GameState gameState, int level = 0)`

**Purpose:** Handles logic related to `push state`.

### PopState
`public void PopState(int level = 0)`

**Purpose:** Handles logic related to `pop state`.

### CleanAndPushState
`public void CleanAndPushState(GameState gameState, int level = 0)`

**Purpose:** Handles logic related to `clean and push state`.

### CleanStates
`public void CleanStates(int level = 0)`

**Purpose:** Handles logic related to `clean states`.

## Usage Example

```csharp
var manager = GameStateManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)