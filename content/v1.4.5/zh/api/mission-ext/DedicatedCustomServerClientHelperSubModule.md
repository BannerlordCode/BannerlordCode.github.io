---
title: "DedicatedCustomServerClientHelperSubModule"
description: "DedicatedCustomServerClientHelperSubModule 的自动生成类参考。"
---
# DedicatedCustomServerClientHelperSubModule

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DedicatedCustomServerClientHelperSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DedicatedCustomServerClientHelperSubModule.cs`

## 概述

`DedicatedCustomServerClientHelperSubModule` 位于 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 在 「activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 在 「deactivate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnDeactivate();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnFinalize();
```

### OnInitialize
`public void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnInitialize();
```

### OnCreateState
`public void OnCreateState(GameState gameState)`

**用途 / Purpose:** 在 「create state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnCreateState(gameState);
```

### OnPopState
`public void OnPopState(GameState gameState)`

**用途 / Purpose:** 在 「pop state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnPopState(gameState);
```

### OnPushState
`public void OnPushState(GameState gameState, bool isTopGameState)`

**用途 / Purpose:** 在 「push state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnPushState(gameState, false);
```

### OnCleanStates
`public void OnCleanStates()`

**用途 / Purpose:** 在 「clean states」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnCleanStates();
```

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**用途 / Purpose:** 在 「saved game load finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnSavedGameLoadFinished();
```

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object _)`

**用途 / Purpose:** 在 「multiplayer game start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnMultiplayerGameStart(game, _);
```

### DownloadMapFromHost
`public async Task DownloadMapFromHost(string hostAddress, string mapName, bool replaceExisting = false, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理与 「download map from host」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
var result = dedicatedCustomServerClientHelperSubModule.DownloadMapFromHost("example", "example", false, null, default(CancellationToken));
```

### GetMapListFromHost
`public async Task<MapListResponse> GetMapListFromHost(string hostAddress)`

**用途 / Purpose:** 读取并返回当前对象中 「map list from host」 的结果。

```csharp
// 先通过子系统 API 拿到 DedicatedCustomServerClientHelperSubModule 实例
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
var result = dedicatedCustomServerClientHelperSubModule.GetMapListFromHost("example");
```

### DownloadMapCommand
`public static string DownloadMapCommand(List<string> strings)`

**用途 / Purpose:** 处理与 「download map command」 相关的逻辑。

```csharp
// 静态调用，不需要实例
DedicatedCustomServerClientHelperSubModule.DownloadMapCommand(strings);
```

### GetMapListCommand
`public static string GetMapListCommand(List<string> strings)`

**用途 / Purpose:** 读取并返回当前对象中 「map list command」 的结果。

```csharp
// 静态调用，不需要实例
DedicatedCustomServerClientHelperSubModule.GetMapListCommand(strings);
```

### OpenDownloadPanel
`public static string OpenDownloadPanel(List<string> strings)`

**用途 / Purpose:** 打开「download panel」对应的资源或界面。

```csharp
// 静态调用，不需要实例
DedicatedCustomServerClientHelperSubModule.OpenDownloadPanel(strings);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnActivate();
```

## 参见

- [本区域目录](../)