---
title: "GameManagerBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameManagerBase`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddComponent
`public GameManagerComponent AddComponent(Type componentType)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### GetComponent
`public GameManagerComponent GetComponent(Type componentType)`

**用途 / Purpose:** 获取 `component` 的当前值。

### RemoveComponent
`public void RemoveComponent(GameManagerComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnGameNetworkBegin
`public void OnGameNetworkBegin()`

**用途 / Purpose:** 当 `game network begin` 事件触发时调用此方法。

### OnGameNetworkEnd
`public void OnGameNetworkEnd()`

**用途 / Purpose:** 当 `game network end` 事件触发时调用此方法。

### OnPlayerConnect
`public void OnPlayerConnect(VirtualPlayer peer)`

**用途 / Purpose:** 当 `player connect` 事件触发时调用此方法。

### OnPlayerDisconnect
`public void OnPlayerDisconnect(VirtualPlayer peer)`

**用途 / Purpose:** 当 `player disconnect` 事件触发时调用此方法。

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### DoLoadingForGameManager
`public bool DoLoadingForGameManager()`

**用途 / Purpose:** 处理 `do loading for game manager` 相关逻辑。

### OnLoadFinished
`public virtual void OnLoadFinished()`

**用途 / Purpose:** 当 `load finished` 事件触发时调用此方法。

### InitializeGameStarter
`public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`

**用途 / Purpose:** 初始化 `game starter` 的状态、资源或绑定。

### OnGameStart
`public abstract void OnGameStart(Game game, IGameStarter gameStarter)`

**用途 / Purpose:** 当 `game start` 事件触发时调用此方法。

### BeginGameStart
`public abstract void BeginGameStart(Game game)`

**用途 / Purpose:** 处理 `begin game start` 相关逻辑。

### OnNewCampaignStart
`public abstract void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `new campaign start` 事件触发时调用此方法。

### OnAfterCampaignStart
`public abstract void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** 当 `after campaign start` 事件触发时调用此方法。

### RegisterSubModuleObjects
`public abstract void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `register sub module objects` 相关逻辑。

### AfterRegisterSubModuleObjects
`public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `after register sub module objects` 相关逻辑。

### OnGameInitializationFinished
`public abstract void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### OnNewGameCreated
`public abstract void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** 当 `new game created` 事件触发时调用此方法。

### OnGameLoaded
`public abstract void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnAfterGameLoaded
`public abstract void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** 当 `after game loaded` 事件触发时调用此方法。

### OnAfterGameInitializationFinished
`public abstract void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**用途 / Purpose:** 当 `after game initialization finished` 事件触发时调用此方法。

### RegisterSubModuleTypes
`public abstract void RegisterSubModuleTypes()`

**用途 / Purpose:** 处理 `register sub module types` 相关逻辑。

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** 初始化 `sub module game objects` 的状态、资源或绑定。

## 使用示例

```csharp
var implementation = new CustomGameManagerBase();
```

## 参见

- [完整类目录](../catalog)