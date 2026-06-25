---
title: "DedicatedCustomServerClientHelperSubModule"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DedicatedCustomServerClientHelperSubModule`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DedicatedCustomServerClientHelperSubModule

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DedicatedCustomServerClientHelperSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DedicatedCustomServerClientHelperSubModule.cs`

## 概述

`DedicatedCustomServerClientHelperSubModule` 位于 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 当 `activate` 事件触发时调用此方法。

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 当 `deactivate` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnInitialize
`public void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### OnCreateState
`public void OnCreateState(GameState gameState)`

**用途 / Purpose:** 当 `create state` 事件触发时调用此方法。

### OnPopState
`public void OnPopState(GameState gameState)`

**用途 / Purpose:** 当 `pop state` 事件触发时调用此方法。

### OnPushState
`public void OnPushState(GameState gameState, bool isTopGameState)`

**用途 / Purpose:** 当 `push state` 事件触发时调用此方法。

### OnCleanStates
`public void OnCleanStates()`

**用途 / Purpose:** 当 `clean states` 事件触发时调用此方法。

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**用途 / Purpose:** 当 `saved game load finished` 事件触发时调用此方法。

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object _)`

**用途 / Purpose:** 当 `multiplayer game start` 事件触发时调用此方法。

### DownloadMapFromHost
`public async Task DownloadMapFromHost(string hostAddress, string mapName, bool replaceExisting = false, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `download map from host` 相关逻辑。

### GetMapListFromHost
`public async Task<MapListResponse> GetMapListFromHost(string hostAddress)`

**用途 / Purpose:** 获取 `map list from host` 的当前值。

### DownloadMapCommand
`public static string DownloadMapCommand(List<string> strings)`

**用途 / Purpose:** 处理 `download map command` 相关逻辑。

### GetMapListCommand
`public static string GetMapListCommand(List<string> strings)`

**用途 / Purpose:** 获取 `map list command` 的当前值。

### OpenDownloadPanel
`public static string OpenDownloadPanel(List<string> strings)`

**用途 / Purpose:** 处理 `open download panel` 相关逻辑。

## 使用示例

```csharp
var value = new DedicatedCustomServerClientHelperSubModule();
value.OnActivate();
```

## 参见

- [完整类目录](../catalog)