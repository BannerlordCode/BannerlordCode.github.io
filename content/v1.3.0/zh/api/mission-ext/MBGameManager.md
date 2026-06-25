---
title: "MBGameManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGameManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase`
**Base:** `GameManagerBase`
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## 概述

`MBGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnding` | `public bool IsEnding { get; }` |
| `Current` | `public new static MBGameManager Current { get; set; }` |
| `IsLoaded` | `public bool IsLoaded { get; set; }` |
| `ApplicationTime` | `public override float ApplicationTime { get; }` |
| `CheatMode` | `public override bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public override bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |

## 主要方法

### StartNewGame
`public static void StartNewGame(MBGameManager gameLoader)`

**用途 / Purpose:** 处理 `start new game` 相关逻辑。

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理 `begin game start` 相关逻辑。

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `new campaign start` 事件触发时调用此方法。

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** 初始化 `sub module game objects` 的状态、资源或绑定。

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `register sub module objects` 相关逻辑。

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

**用途 / Purpose:** 处理 `register sub module types` 相关逻辑。

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `after register sub module objects` 相关逻辑。

### InitializeGameStarter
`public override void InitializeGameStarter(Game game, IGameStarter starterObject)`

**用途 / Purpose:** 初始化 `game starter` 的状态、资源或绑定。

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**用途 / Purpose:** 当 `after game initialization finished` 事件触发时调用此方法。

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** 当 `after game loaded` 事件触发时调用此方法。

### OnNewGameCreated
`public override void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** 当 `new game created` 事件触发时调用此方法。

### OnGameStart
`public override void OnGameStart(Game game, IGameStarter gameStarter)`

**用途 / Purpose:** 当 `game start` 事件触发时调用此方法。

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### EndGame
`public static async void EndGame()`

**用途 / Purpose:** 处理 `end game` 相关逻辑。

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 当 `load finished` 事件触发时调用此方法。

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

**用途 / Purpose:** 处理 `check and set ending` 相关逻辑。

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**用途 / Purpose:** 当 `session invitation accepted` 事件触发时调用此方法。

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 当 `platform requested multiplayer` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomMBGameManager();
```

## 参见

- [完整类目录](../catalog)