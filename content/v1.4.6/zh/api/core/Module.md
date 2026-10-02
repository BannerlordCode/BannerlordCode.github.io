---
title: "Module"
description: "模块宿主单例：反射装载所有子模块，维护全局状态栈与初始状态选项，并提供模块启停与多人模式注册。"
---
# Module

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `TaleWorlds.DotNet.DotNetObject`
**Source:** `TaleWorlds.MountAndBlade/Module.cs`

## 概述

它是整个游戏进程的**模块宿主**，而且是 `sealed` 的、只能有一个（静态 `CurrentModule`）。私有构造器里已经建好了：空 `GameStartupInfo`、`TestContext`、`_subModuleBases` 字典、一个 `GameStateManager`（`GameStateManagerType.Global`）并立刻赋给 `GameStateManager.Current`、`GameTextManager` 和 `JobManager`。也就是说**在游戏第一个 Game 出现之前，`GameStateManager.Current` 指向的就是这个全局栈**。

它做三件事：**装载**（`internal static CreateModule()` 新建实例 → 扫描 `ModuleHelper.GetAllModules()` → 对每个活动的 `SubModuleInfo` 用 `AddSubModule` 反射实例化 [MBSubModuleBase](../MBSubModuleBase) 并 `Managed.AddTypes`）、**托管全局 UI 状态栈**（`GlobalGameStateManager` + `SetInitialModuleScreenAsRootScreen`）、**对外服务**（查子模块类型、模块启停、初始状态选项、多人游戏模式）。

1939 行里绝大部分是 private 的装载与回调分发逻辑，public 面是刻意收窄的。

## 心智模型

进程的时序是：

1. `internal static CreateModule()` —— 由启动器/native 调用，写 `CurrentModule` 并 `Utilities.SetLoadingScreenPercentage(0.4f)`。
2. 随后 `Module` 遍历模块清单，依次 `AddSubModule(subModuleInfo, assembly)`：收集程序集里所有 `ManagedObject` / `DotNetObject` 派生类型交给 `Managed.AddTypes`，反射 new 出 `MBSubModuleBase` 存进 `_subModuleBases`。
3. 各子模块的 `OnSubModuleLoad` 被调用。
4. 之后全程通过 `CurrentModule` 访问；`GlobalGameStateManager` 承载主菜单这类跨局状态。

`IGameStateManagerOwner` 的两个成员在 1.4.6 里是**显式接口实现**（`void IGameStateManagerOwner.OnStateStackEmpty()` / `OnStateChanged(GameState)`），不是 public，mod 侧调不到，只能通过 [GameStateManager](../../core-extra/GameStateManager) 间接触发。

**「初始状态选项」（`InitialStateOption`）是编辑器/主菜单的钩子机制**：构造器是 `InitialStateOption(string id, TextObject name, int orderIndex, Action action, Func<ValueTuple<bool, TextObject>> isDisabledAndReason, TextObject enabledHint = null, Func<bool> isHidden = null)`——六个可选显示状态全部在构造时定死，之后只有 `private set`。`AddInitialStateOption` 往列表里加一条，`GetInitialStateOptions()` 按 `OrderIndex` 排序返回，`ExecuteInitialStateOptionWithId(id)` 找到后调 `DoAction()`（内部就是 invoke 那个 `action` 委托）。这是 mod 往主菜单塞自定义入口的标准方式。

**模块启停**：`ActivateModule(moduleId)` / `DeactiveModule(moduleId)` 通过 `ModuleHelper` 改模块的 active 状态并**逐个调用该模块所有子模块的 `OnSubModuleActivated` / `OnSubModuleDeactivated`**。注意 `DeactiveModule` 有 `!moduleInfo.IsNative` 判断——对原生/官方模块是静默 no-op。

常见误用：**在 `CurrentModule` 为 null 时访问**——它由 `internal static CreateModule()` 赋值，mod 程序集的静态初始化早于它，任何字段初始化里读 `Module.CurrentModule` 都可能拿到 null。第二个是**误以为 `CurrentModule.GlobalGameStateManager` 和 `Game.GameStateManager` 是同一个**——前者全局（跨局存活），后者局内（`Destroy` 时置 null）。第三个是**在 `ShutDownWithDelay` 之后再操作模块**——它 `async void` 且内部有 `_isShuttingDown` 一次性闸门。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CurrentModule` | `public static Module CurrentModule { get; private set; }` | 进程内唯一的模块宿主。**只在 `internal static CreateModule()` 里赋值**，mod 侧只能读。启动早期为 null。 |
| `GlobalGameStateManager` | `public GameStateManager GlobalGameStateManager { get; private set; }` | 全局状态栈（`GameStateManagerType.Global`），构造器里创建并立刻设为 `GameStateManager.Current`。承载主菜单、加载屏这类跨局 UI 状态。 |
| `StartupInfo` | `public GameStartupInfo StartupInfo { get; private set; }` | 启动参数，构造器里 `new GameStartupInfo()`。`MultiplayerRequested` 就是读它的 `StartupType`。 |
| `GlobalTextManager` | `public GameTextManager GlobalTextManager { get; private set; }` | 全局文本管理器，与局内 [Game](../../core-extra/Game) 的 `GameTextManager` 并存。 |
| `JobManager` | `public JobManager JobManager { get; private set; }` | 全局 Job 管理器，构造器里创建。 |
| `LoadingFinished` | `public bool LoadingFinished { get; private set; }` | 加载是否已完成的标志。 |
| `ReturnToEditorState` | `public bool ReturnToEditorState { get; private set; }` | 是否要返回编辑器状态。 |
| `IsOnlyCoreContentEnabled` | `public bool IsOnlyCoreContentEnabled { get; private set; }` | 是否只启用了核心内容（无官方模块）。mod 自测时的有用信号。 |
| `MultiplayerRequested` | `public bool MultiplayerRequested { get; }` | 组合判断：`StartupInfo.StartupType == GameStartupType.Multiplayer`，或平台层请求了多人会话（`PlatformServices.SessionInvitationType` / `IsPlatformRequestedMultiplayer`）。**平台相关，主机上与 Steam 客户端上取值可能不同。** |
| `CollectSubModules` | `public MBReadOnlyList<MBSubModuleBase> CollectSubModules()` | 遍历 `ModuleHelper.GetAllModules()` 里所有 `IsActive` 的模块，返回它们的 `MBSubModuleBase` 实例快照。**每次调用都重建列表**，别在每帧里调。 |
| `GetSubModuleType` | `public Type GetSubModuleType(string name)` | 按 `SubModuleInfo.SubModuleClassTypeName` 找已装载子模块的 `Type`。找不到返回 **null**。 |
| `CheckIfSubmoduleCanBeLoadable` | `public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)` | 按 `SubModuleInfo.Tags` 校验可加载性：`RejectedPlatform` / `ExclusivePlatform` / `DedicatedServerType`。**任何一条不满足就返回 false**。 |
| `SetInitialModuleScreenAsRootScreen` | `public void SetInitialModuleScreenAsRootScreen()` | 把初始模块屏幕（主菜单）设为根屏幕。 |
| `GetInitialStateOptions` | `public IEnumerable<InitialStateOption> GetInitialStateOptions()` | 返回初始状态选项，**按 `OrderIndex` 升序**（`OrderBy` 是延迟求值的）。 |
| `GetInitialStateOptionWithId` | `public InitialStateOption GetInitialStateOptionWithId(string id)` | 按 `Id` 线性查找，找不到返回 **null**。 |
| `ExecuteInitialStateOptionWithId` | `public void ExecuteInitialStateOptionWithId(string id)` | 找到选项就调它的 `DoAction()`；**找不到时什么都不做、不报错**。 |
| `AddInitialStateOption` | `public void AddInitialStateOption(InitialStateOption initialStateOption)` | 往列表追加一条。`GetInitialStateOptions()` 用的是插入顺序 + `OrderIndex` 排序，重排索引不会改变存储顺序。 |
| `OverrideInitialStateOption` | `public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)` | 找到 `Id` 匹配的第一条就替换并 return。**找不到时静默不动**——想覆盖别人的选项必须确认它已被加载。 |
| `ClearStateOptions` | `public void ClearStateOptions()` | 清空所有初始状态选项。 |
| `SetCanLoadModules` | `public void SetCanLoadModules(bool canLoadModules)` | 转发 `EngineApplicationInterface.IUtil.SetCanLoadModules`。 |
| `SetEditorMissionTester` | `public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)` | 设置编辑器任务测试器。 |
| `StartMissionForEditorAux` | `public void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)` | 编辑器内部用的任务启动辅助。 |
| `StartMultiplayerGame` | `public bool StartMultiplayerGame(string multiplayerGameType, string scene)` | 按名查已注册的 `MultiplayerGameMode` 并启动。**返回 false 表示名字没注册**，不会抛。 |
| `AddMultiplayerGameMode` | `public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)` | 注册一个多人游戏模式，按其 `GameType` 建索引。 |
| `GetMultiplayerGameTypes` | `public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()` | 返回已注册的多人模式列表。 |
| `GetMultiplayerGameMode` | `public MultiplayerGameMode GetMultiplayerGameMode(string gameType)` | 按名取已注册模式。 |
| `ShutDownWithDelay` | `public async void ShutDownWithDelay(string reason, int seconds)` | **async void**。逐秒打印倒计时；若 `Game.Current` 非 null 先 `MBGameManager.EndGame()`，然后 `Utilities.QuitGame()`。内部 `_isShuttingDown` 一次性闸门：重复调用直接 return。 |
| `DeactiveModule` | `public void DeactiveModule(string moduleId)` | 停用模块。**有 `!moduleInfo.IsNative` 判断，对官方模块是 no-op**。会调 `ModuleHelper.OnModuleDeactivated` 并逐个触发子模块的 `OnSubModuleDeactivated`。 |
| `ActivateModule` | `public void ActivateModule(string moduleId)` | 启用模块并逐个触发子模块的 `OnSubModuleActivated`。 |
| `SkinsXMLHasChanged` | `public event Action SkinsXMLHasChanged` | 皮肤 XML 变更事件，用于刷新 UI 资源缓存。 |
| `ImguiProfilerTick` | `public event Action ImguiProfilerTick` | ImGui 分析器每帧 tick 事件。调试用。 |
| `GetMetaMeshPackageMapping` | `public static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)` | 填充「metamesh 名 → package 名」映射，模组换模型包时用。 |
| `GetItemMeshNames` | `public static void GetItemMeshNames(HashSet<string> itemMeshNames)` | 把已知的物品 mesh 名填进集合，供加载器预取。 |
| `GetCraftedItemMeshNames` | `public static string GetCraftedItemMeshNames(List<string> arguments)` | 由参数列表拼出合成物品的 mesh 名。 |
| `XmlInformationType` | `public enum XmlInformationType` | XML 信息分类枚举，编辑器用。 |
| `DotNetObject` | 基类 | 继承自 `TaleWorlds.DotNet.DotNetObject`，这是 native 侧能持有的托管对象基类。 |

## 真实示例

拿到子模块实例并调用它的钩子（典型：mod 之间互相通知）：

```csharp
Module module = Module.CurrentModule;
if (module == null)
{
    return;
}

MBReadOnlyList<MBSubModuleBase> subModules = module.CollectSubModules();
foreach (MBSubModuleBase sub in subModules)
{
    if (sub is MyModSubModule mine)
    {
        mine.OnSubModuleActivated();
    }
}

Type loaderType = module.GetSubModuleType("SandBox.SandBoxSubModule");
if (loaderType != null)
{
    Debug.Print("sandbox submodule loaded: " + loaderType.FullName, 0);
}
```

往主菜单塞一条自定义入口（编辑器/主菜单的选项机制）：

```csharp
Module module = Module.CurrentModule;
InitialStateOption option = new InitialStateOption(
    "my_mod_menu",
    new TextObject("{=MyModMenu}我的模组菜单"),
    100,
    ShowMyScreen,
    () => ValueTuple.Create(false, (TextObject)null));

module.AddInitialStateOption(option);

// 覆盖已加载的官方选项
module.OverrideInitialStateOption("StoryMode", option);

// 触发（UI 列表项被点时）
module.ExecuteInitialStateOptionWithId("my_mod_menu");

// 主菜单构建时按 OrderIndex 枚举
foreach (InitialStateOption opt in module.GetInitialStateOptions())
{
    Debug.Print(opt.Id + " @ " + opt.OrderIndex, 0);
}
```

模块启停与平台可加载性校验：

```csharp
Module module = Module.CurrentModule;
module.DeactiveModule("MyOptionalFeatureModule");
module.ActivateModule("MyOptionalFeatureModule");

// 校验可加载性（平台标签）
SubModuleInfo info = ModuleHelper.GetModuleInfo("MyModule");
bool canLoad = module.CheckIfSubmoduleCanBeLoadable(info);
Debug.Print("can load on this platform: " + canLoad, 0);
```

## 风险与边界

- **单例且启动早期为 null。** `CurrentModule` 由 `internal static CreateModule()` 赋值。任何静态字段初始化器、静态构造函数里读它都可能拿到 null。
- **`sealed` + 私有构造。** 不能继承也不能自己 new，唯一入口是 `internal static CreateModule()`。
- **全局栈与局内栈是两回事。** `GlobalGameStateManager` 跨局存活；[Game](../../core-extra/Game) 的 `GameStateManager` 在 `Destroy()` 时置 null。搞混会导致「菜单还在但游戏已销毁」或反之。
- **`ShutDownWithDelay` 是 async void。** 没有 Task 可 await、没有异常出口；异常会被吞。倒计时期间用 `_isShuttingDown` 闸门挡重复调用。
- **`DeactiveModule` 对官方模块无效。** `!moduleInfo.IsNative` 判断让它静默 no-op，只有 mod 模块能这样开关。
- **选项 API 大量静默失败。** `OverrideInitialStateOption` 找不到 id 不动、`ExecuteInitialStateOptionWithId` 找不到不执行、`StartMultiplayerGame` 名字不对返回 false。**全部无异常**，只能自己查。
- **`CollectSubModules()` 每次重建列表。** 它遍历所有模块所有子模块并 new 一个 `MBList`。别在 `OnApplicationTick` 里调。
- **`GetInitialStateOptions()` 是延迟求值。** 返回的 `IEnumerable` 捕获了内部列表；在遍历过程中 `AddInitialStateOption` 会抛 `InvalidOperationException`。
- **`MultiplayerRequested` 触碰平台服务。** 它读 `PlatformServices.SessionInvitationType` 与 `IsPlatformRequestedMultiplayer`，在某些平台/无平台服务的环境下行为不同，且平台层初始化前调用不安全。
- **`CreateModule` 里 `SetLoadingScreenPercentage(0.4f)`。** 它假定自己处在加载流程的固定位置，重复调用会打乱加载进度。
- **`DotNetObject` 基类意味着 native 持有。** 实例生命周期跨越一次加载-运行周期，mod 侧不要缓存过多对它的引用。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.MountAndBlade/Module.cs` 逐行比对，**public 表面只有一处变化**：`ShutDownWithDelay` 在 1.4.6 里从 `public void ShutDownWithDelay(string reason, int seconds)` 变成了 `public async void ShutDownWithDelay(string reason, int seconds)`。其余成员（`CurrentModule`、`GlobalGameStateManager`、`MultiplayerRequested`、`StartupInfo`、`JobManager`、`CollectSubModules`、`GetSubModuleType`、`CheckIfSubmoduleCanBeLoadable`、四个 `InitialStateOption` 方法、两个多人模式方法、`ActivateModule` / `DeactiveModule`、两个事件、三个静态 mesh 方法、嵌套枚举）全都没变。`bannerlord-1.4.5/` 本机未解出 C# 源码，未能核对。

## 依赖关系

- 被实例化的子类：[MBSubModuleBase](../MBSubModuleBase) 是 `CollectSubModules()` 返回的元素类型
- 全局状态栈：[GameStateManager](../../core-extra/GameStateManager) 的 `GameStateManagerType.Global` 那一档由本类构造
- 局内对象：[Game](../../core-extra/Game) 的 `CreateGameManager()` 会把 `GameStateManager.Current` 从本类的全局栈切走
- 架构地图：[模块地图](../../../architecture/module-map)

- 上一级：[v1.4.6 内容根](../../../)
- 桶首页：[core API 分区](../)
