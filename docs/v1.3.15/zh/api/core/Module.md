<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Module`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `collect sub modules` 相关逻辑。

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)`

**用途 / Purpose:** 获取 `meta mesh package mapping` 的当前值。

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames)`

**用途 / Purpose:** 获取 `item mesh names` 的当前值。

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments)`

**用途 / Purpose:** 获取 `crafted item mesh names` 的当前值。

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen()`

**用途 / Purpose:** 设置 `initial module screen as root screen` 的值或状态。

### GetSubModuleType
`public Type GetSubModuleType(string name)`

**用途 / Purpose:** 获取 `sub module type` 的当前值。

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)`

**用途 / Purpose:** 处理 `check if submodule can be loadable` 相关逻辑。

### ClearStateOptions
`public void ClearStateOptions()`

**用途 / Purpose:** 处理 `clear state options` 相关逻辑。

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption)`

**用途 / Purpose:** 向当前集合/状态中添加 `initial state option`。

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`

**用途 / Purpose:** 处理 `override initial state option` 相关逻辑。

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions()`

**用途 / Purpose:** 获取 `initial state options` 的当前值。

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id)`

**用途 / Purpose:** 获取 `initial state option with id` 的当前值。

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id)`

**用途 / Purpose:** 执行 `initial state option with id` 操作或流程。

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules)`

**用途 / Purpose:** 设置 `can load modules` 的值或状态。

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)`

**用途 / Purpose:** 设置 `editor mission tester` 的值或状态。

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)`

**用途 / Purpose:** 处理 `start mission for editor aux` 相关逻辑。

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType)`

**用途 / Purpose:** 获取 `multiplayer game mode` 的当前值。

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)`

**用途 / Purpose:** 向当前集合/状态中添加 `multiplayer game mode`。

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()`

**用途 / Purpose:** 获取 `multiplayer game types` 的当前值。

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType, string scene)`

**用途 / Purpose:** 处理 `start multiplayer game` 相关逻辑。

### ShutDownWithDelay
`public void ShutDownWithDelay(string reason, int seconds)`

**用途 / Purpose:** 处理 `shut down with delay` 相关逻辑。

### DeactiveModule
`public void DeactiveModule(string moduleId)`

**用途 / Purpose:** 处理 `deactive module` 相关逻辑。

### ActivateModule
`public void ActivateModule(string moduleId)`

**用途 / Purpose:** 处理 `activate module` 相关逻辑。

## 使用示例

```csharp
var value = new Module();
value.CollectSubModules();
```

## 参见

- [完整类目录](../catalog)