---
title: "MBSubModuleBase"
description: "MBSubModuleBase 的自动生成类参考。"
---
# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBSubModuleBase`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## 概述

`MBSubModuleBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnConfigChanged
`public virtual void OnConfigChanged()`

**用途 / Purpose:** 在 「config changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnConfigChanged();
```

### OnGameLoaded
`public virtual void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public virtual void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** 在 「after game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnAfterGameLoaded(game);
```

### OnNewGameCreated
`public virtual void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** 在 「new game created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnNewGameCreated(game, initializerObject);
```

### BeginGameStart
`public virtual void BeginGameStart(Game game)`

**用途 / Purpose:** 处理与 「begin game start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.BeginGameStart(game);
```

### OnCampaignStart
`public virtual void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnCampaignStart(game, starterObject);
```

### RegisterSubModuleObjects
`public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 将「sub module objects」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 在 「register sub module objects」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.AfterRegisterSubModuleObjects(false);
```

### OnMultiplayerGameStart
`public virtual void OnMultiplayerGameStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「multiplayer game start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnMultiplayerGameStart(game, starterObject);
```

### OnGameInitializationFinished
`public virtual void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 在 「game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameInitializationFinished(game);
```

### OnAfterGameInitializationFinished
`public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)`

**用途 / Purpose:** 在 「after game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnAfterGameInitializationFinished(game, starterObject);
```

### DoLoading
`public virtual bool DoLoading(Game game)`

**用途 / Purpose:** 处理与 「do loading」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
var result = mBSubModuleBase.DoLoading(game);
```

### OnGameEnd
`public virtual void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnGameEnd(game);
```

### OnMissionBehaviorInitialize
`public virtual void OnMissionBehaviorInitialize(Mission mission)`

**用途 / Purpose:** 在 「mission behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnMissionBehaviorInitialize(mission);
```

### OnBeforeMissionBehaviorInitialize
`public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)`

**用途 / Purpose:** 在 「before mission behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnBeforeMissionBehaviorInitialize(mission);
```

### OnInitialState
`public virtual void OnInitialState()`

**用途 / Purpose:** 在 「initial state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnInitialState();
```

### OnSubModuleActivated
`public virtual void OnSubModuleActivated()`

**用途 / Purpose:** 在 「sub module activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnSubModuleActivated();
```

### OnSubModuleDeactivated
`public virtual void OnSubModuleDeactivated()`

**用途 / Purpose:** 在 「sub module deactivated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.OnSubModuleDeactivated();
```

### InitializeSubModuleGameObjects
`public virtual void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** 为 「sub module game objects」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBSubModuleBase 实例
MBSubModuleBase mBSubModuleBase = ...;
mBSubModuleBase.InitializeSubModuleGameObjects(game);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MBSubModuleBase instance = ...;
```

## 参见

- [本区域目录](../)