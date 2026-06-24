<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSubModuleBase`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBSubModuleBase`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## 概述

`MBSubModuleBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnConfigChanged
`public virtual void OnConfigChanged()`

**用途 / Purpose:** 当 `config changed` 事件触发时调用此方法。

### OnGameLoaded
`public virtual void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnAfterGameLoaded
`public virtual void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** 当 `after game loaded` 事件触发时调用此方法。

### OnNewGameCreated
`public virtual void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** 当 `new game created` 事件触发时调用此方法。

### BeginGameStart
`public virtual void BeginGameStart(Game game)`

**用途 / Purpose:** 处理 `begin game start` 相关逻辑。

### OnCampaignStart
`public virtual void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `campaign start` 事件触发时调用此方法。

### RegisterSubModuleObjects
`public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `register sub module objects` 相关逻辑。

### AfterRegisterSubModuleObjects
`public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `after register sub module objects` 相关逻辑。

### OnMultiplayerGameStart
`public virtual void OnMultiplayerGameStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `multiplayer game start` 事件触发时调用此方法。

### OnGameInitializationFinished
`public virtual void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### OnAfterGameInitializationFinished
`public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)`

**用途 / Purpose:** 当 `after game initialization finished` 事件触发时调用此方法。

### DoLoading
`public virtual bool DoLoading(Game game)`

**用途 / Purpose:** 处理 `do loading` 相关逻辑。

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### OnMissionBehaviorInitialize
`public virtual void OnMissionBehaviorInitialize(Mission mission)`

**用途 / Purpose:** 当 `mission behavior initialize` 事件触发时调用此方法。

### OnBeforeMissionBehaviorInitialize
`public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)`

**用途 / Purpose:** 当 `before mission behavior initialize` 事件触发时调用此方法。

### OnInitialState
`public virtual void OnInitialState()`

**用途 / Purpose:** 当 `initial state` 事件触发时调用此方法。

### OnSubModuleActivated
`public virtual void OnSubModuleActivated()`

**用途 / Purpose:** 当 `sub module activated` 事件触发时调用此方法。

### OnSubModuleDeactivated
`public virtual void OnSubModuleDeactivated()`

**用途 / Purpose:** 当 `sub module deactivated` 事件触发时调用此方法。

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** 初始化 `sub module game objects` 的状态、资源或绑定。

## 使用示例

```csharp
var implementation = new CustomMBSubModuleBase();
```

## 参见

- [完整类目录](../catalog)