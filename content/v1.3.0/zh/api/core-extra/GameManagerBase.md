---
title: "GameManagerBase"
description: "GameManagerBase 的自动生成类参考。"
---
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerBase`
**Base:** 无
**File:** `TaleWorlds.Core/GameManagerBase.cs`

## 概述

`GameManagerBase` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GameManagerBase Current { get; }` |
| `Game` | `public Game Game { get; set; }` |
| `Components` | `public IEnumerable<GameManagerComponent> Components { get; }` |
| `ApplicationTime` | `public abstract float ApplicationTime { get; }` |
| `CheatMode` | `public abstract bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public abstract bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public abstract bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public abstract UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.Initialize();
```

### AddComponent
`public GameManagerComponent AddComponent(Type componentType)`

**用途 / Purpose:** **用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.AddComponent(componentType);
```

### GetComponent
`public GameManagerComponent GetComponent(Type componentType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 component 的结果。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.GetComponent(componentType);
```

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.RemoveComponent(component);
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnTick(0);
```

### OnGameNetworkBegin
`public void OnGameNetworkBegin()`

**用途 / Purpose:** **用途 / Purpose:** 在 game network begin 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameNetworkBegin();
```

### OnGameNetworkEnd
`public void OnGameNetworkEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 game network end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameNetworkEnd();
```

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer)`

**用途 / Purpose:** **用途 / Purpose:** 在 player connect 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnPlayerConnect(peer);
```

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer)`

**用途 / Purpose:** **用途 / Purpose:** 在 player disconnect 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnPlayerDisconnect(peer);
```

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 game end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameEnd(game);
```

### DoLoadingForGameManager
`public bool DoLoadingForGameManager()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoLoadingForGameManager 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
var result = gameManagerBase.DoLoadingForGameManager();
```

### OnLoadFinished
`public virtual void OnLoadFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnLoadFinished();
```

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`

**用途 / Purpose:** **用途 / Purpose:** 为 game starter 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.InitializeGameStarter(game, starterObject);
```

### OnGameStart
`public abstract void OnGameStart(Game game, IGameStarter gameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 game start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameStart(game, gameStarter);
```

### BeginGameStart
`public abstract void BeginGameStart(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginGameStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.BeginGameStart(game);
```

### OnNewCampaignStart
`public abstract void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 new campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnNewCampaignStart(game, starterObject);
```

### OnAfterCampaignStart
`public abstract void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 after campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterCampaignStart(game);
```

### RegisterSubModuleObjects
`public abstract void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** **用途 / Purpose:** 将sub module objects注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterRegisterSubModuleObjects 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.AfterRegisterSubModuleObjects(false);
```

### OnGameInitializationFinished
`public abstract void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 game initialization finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameInitializationFinished(game);
```

### OnNewGameCreated
`public abstract void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 new game created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnNewGameCreated(game, initializerObject);
```

### OnGameLoaded
`public abstract void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public abstract void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 after game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterGameLoaded(game);
```

### OnAfterGameInitializationFinished
`public abstract void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 after game initialization finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.OnAfterGameInitializationFinished(game, initializerObject);
```

### RegisterSubModuleTypes
`public abstract void RegisterSubModuleTypes()`

**用途 / Purpose:** **用途 / Purpose:** 将sub module types注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.RegisterSubModuleTypes();
```

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 为 sub module game objects 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameManagerBase 实例
GameManagerBase gameManagerBase = ...;
gameManagerBase.InitializeSubModuleGameObjects(game);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameManagerBase instance = ...;
```

## 参见

- [本区域目录](../)