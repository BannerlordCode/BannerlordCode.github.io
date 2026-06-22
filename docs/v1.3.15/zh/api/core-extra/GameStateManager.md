<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameStateManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameStateManager.cs`

## 概述

`GameStateManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get { return GameStateManager._current; }` |
| `Listeners` | `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get { return this._listeners.AsReadOnly(); }` |
| `GameStates` | `public IEnumerable<GameState> GameStates { get { return this._gameStates.AsReadOnly(); }` |
| `ActiveStateDisabledByUser` | `public bool ActiveStateDisabledByUser { get { return this._activeStateDisableRequests.Count > 0; }` |
| `ActiveState` | `public GameState ActiveState { get { if (this._gameStates.Count <= 0) { return null; }` |

## 主要方法

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

## 使用示例

```csharp
// GameStateManager (Manager) 的典型用法
GameStateManager.Current;
```

## 参见

- [完整类目录](../catalog)