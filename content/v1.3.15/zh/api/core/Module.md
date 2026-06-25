---
title: "Module"
description: "Module 的自动生成类参考。"
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Module.cs`

## 概述

`Module` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentModule` | `public static Module CurrentModule { get; }` |
| `GlobalGameStateManager` | `public GameStateManager GlobalGameStateManager { get; }` |
| `MultiplayerRequested` | `public bool MultiplayerRequested { get; }` |
| `ReturnToEditorState` | `public bool ReturnToEditorState { get; }` |
| `LoadingFinished` | `public bool LoadingFinished { get; }` |
| `GlobalTextManager` | `public GameTextManager GlobalTextManager { get; }` |
| `IsOnlyCoreContentEnabled` | `public bool IsOnlyCoreContentEnabled { get; }` |
| `JobManager` | `public JobManager JobManager { get; }` |
| `StartupInfo` | `public GameStartupInfo StartupInfo { get; }` |

## 主要方法

### CollectSubModules
`public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectSubModules 对应的操作。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.CollectSubModules();
```

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 meta mesh package mapping 的结果。

```csharp
// 静态调用，不需要实例
Module.GetMetaMeshPackageMapping(dictionary<string, "example");
```

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item mesh names 的结果。

```csharp
// 静态调用，不需要实例
Module.GetItemMeshNames(itemMeshNames);
```

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafted item mesh names 的结果。

```csharp
// 静态调用，不需要实例
Module.GetCraftedItemMeshNames(arguments);
```

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen()`

**用途 / Purpose:** **用途 / Purpose:** 为 initial module screen as root screen 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.SetInitialModuleScreenAsRootScreen();
```

### GetSubModuleType
`public Type GetSubModuleType(string name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sub module type 的结果。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.GetSubModuleType("example");
```

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)`

**用途 / Purpose:** **用途 / Purpose:** 检查if submodule can be loadable在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.CheckIfSubmoduleCanBeLoadable(subModuleInfo);
```

### ClearStateOptions
`public void ClearStateOptions()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的state options。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.ClearStateOptions();
```

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption)`

**用途 / Purpose:** **用途 / Purpose:** 将 initial state option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.AddInitialStateOption(initialStateOption);
```

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`

**用途 / Purpose:** **用途 / Purpose:** 调用 OverrideInitialStateOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.OverrideInitialStateOption("example", newInitialStateOption);
```

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial state options 的结果。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.GetInitialStateOptions();
```

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial state option with id 的结果。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.GetInitialStateOptionWithId("example");
```

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id)`

**用途 / Purpose:** **用途 / Purpose:** 执行 initial state option with id 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.ExecuteInitialStateOptionWithId("example");
```

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules)`

**用途 / Purpose:** **用途 / Purpose:** 为 can load modules 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.SetCanLoadModules(false);
```

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)`

**用途 / Purpose:** **用途 / Purpose:** 为 editor mission tester 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.SetEditorMissionTester(editorMissionTester);
```

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)`

**用途 / Purpose:** **用途 / Purpose:** 启动mission for editor aux流程或状态机。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.StartMissionForEditorAux("example", "example", "example", false, "example", false);
```

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 multiplayer game mode 的结果。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.GetMultiplayerGameMode("example");
```

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)`

**用途 / Purpose:** **用途 / Purpose:** 将 multiplayer game mode 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.AddMultiplayerGameMode(multiplayerGameMode);
```

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 multiplayer game types 的结果。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.GetMultiplayerGameTypes();
```

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 启动multiplayer game流程或状态机。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
var result = module.StartMultiplayerGame("example", "example");
```

### ShutDownWithDelay
`public void ShutDownWithDelay(string reason, int seconds)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShutDownWithDelay 对应的操作。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.ShutDownWithDelay("example", 0);
```

### DeactiveModule
`public void DeactiveModule(string moduleId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeactiveModule 对应的操作。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.DeactiveModule("example");
```

### ActivateModule
`public void ActivateModule(string moduleId)`

**用途 / Purpose:** **用途 / Purpose:** 激活module对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Module 实例
Module module = ...;
module.ActivateModule("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Module module = ...;
module.CollectSubModules();
```

## 参见

- [本区域目录](../)