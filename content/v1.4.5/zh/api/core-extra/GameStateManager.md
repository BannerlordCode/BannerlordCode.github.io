---
title: "GameStateManager"
description: "GameStateManager 的自动生成类参考。"
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## 概述

`GameStateManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameStateManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get; set; }` |
| `CurrentType` | `public GameStateManagerType CurrentType { get; }` |
| `Owner` | `public IGameStateManagerOwner Owner { get; }` |
| `ActiveState` | `public GameState ActiveState { get; }` |

## 主要方法

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener)`

**用途 / Purpose:** 将「listener」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
var result = gameStateManager.RegisterListener(listener);
```

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener)`

**用途 / Purpose:** 从当前系统中注销「listener」。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
var result = gameStateManager.UnregisterListener(listener);
```

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance)`

**用途 / Purpose:** 将「active state disable request」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.RegisterActiveStateDisableRequest(requestingInstance);
```

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance)`

**用途 / Purpose:** 从当前系统中注销「active state disable request」。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.UnregisterActiveStateDisableRequest(requestingInstance);
```

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**用途 / Purpose:** 在 「saved game load finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.OnSavedGameLoadFinished();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.OnTick(0);
```

### PushState
`public void PushState(GameState gameState, int level = 0)`

**用途 / Purpose:** 获取或更新 「push state」 的状态。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.PushState(gameState, 0);
```

### PopState
`public void PopState(int level = 0)`

**用途 / Purpose:** 获取或更新 「pop state」 的状态。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.PopState(0);
```

### CleanAndPushState
`public void CleanAndPushState(GameState gameState, int level = 0)`

**用途 / Purpose:** 获取或更新 「clean and push state」 的状态。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.CleanAndPushState(gameState, 0);
```

### CleanStates
`public void CleanStates(int level = 0)`

**用途 / Purpose:** 处理与 「clean states」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameStateManager 实例
GameStateManager gameStateManager = ...;
gameStateManager.CleanStates(0);
```

## 使用示例

```csharp
var manager = GameStateManager.Current;
```

## 参见

- [本区域目录](../)