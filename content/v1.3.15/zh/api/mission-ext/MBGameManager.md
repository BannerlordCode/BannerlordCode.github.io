---
title: "MBGameManager"
description: "MBGameManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 启动「new game」流程或状态机。

```csharp
// 静态调用，不需要实例
MBGameManager.StartNewGame(gameLoader);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理与 「begin game start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.BeginGameStart(game);
```

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「new campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnNewCampaignStart(game, starterObject);
```

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

**用途 / Purpose:** 为 「sub module game objects」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.InitializeSubModuleGameObjects(game);
```

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 将「sub module objects」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleObjects(false);
```

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

**用途 / Purpose:** 将「sub module types」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleTypes();
```

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 在 「register sub module objects」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.AfterRegisterSubModuleObjects(false);
```

### InitializeGameStarter
`public override void InitializeGameStarter(Game game, IGameStarter starterObject)`

**用途 / Purpose:** 为 「game starter」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.InitializeGameStarter(game, starterObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 在 「game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnGameInitializationFinished(game);
```

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**用途 / Purpose:** 在 「after game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameInitializationFinished(game, initializerObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

**用途 / Purpose:** 在 「after game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameLoaded(game);
```

### OnNewGameCreated
`public override void OnNewGameCreated(Game game, object initializerObject)`

**用途 / Purpose:** 在 「new game created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnNewGameCreated(game, initializerObject);
```

### OnGameStart
`public override void OnGameStart(Game game, IGameStarter gameStarter)`

**用途 / Purpose:** 在 「game start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnGameStart(game, gameStarter);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnGameEnd(game);
```

### EndGame
`public static void EndGame()`

**用途 / Purpose:** 处理与 「end game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBGameManager.EndGame();
```

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 在 「load finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnLoadFinished();
```

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

**用途 / Purpose:** 检查「and set ending」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
var result = mBGameManager.CheckAndSetEnding();
```

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**用途 / Purpose:** 在 「session invitation accepted」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnSessionInvitationAccepted(targetGameType);
```

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 在 「platform requested multiplayer」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBGameManager 实例
MBGameManager mBGameManager = ...;
mBGameManager.OnPlatformRequestedMultiplayer();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MBGameManager instance = ...;
```

## 参见

- [本区域目录](../)