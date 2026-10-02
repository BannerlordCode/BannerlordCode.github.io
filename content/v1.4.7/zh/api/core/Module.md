---
title: "Module"
description: "游戏运行时的全局模块宿主：持有当前模块实例、全局 GameStateManager 与文本管理器，并负责收集所有 SubModule、切换模块、驱动初始状态选项与联机游戏类型。模块系统最上层的单一访问点。"
---
# Module

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**基类：** `TaleWorlds.DotNet.DotNetObject`，实现 `IGameStateManagerOwner`
**源文件：** `TaleWorlds.MountAndBlade/Module.cs`（声明见第 31 行）

## 概述

`Module` 是模块系统最顶层的运行时对象，比 [MBSubModuleBase](../MBSubModuleBase) 高一级。它由引擎在启动早期创建，通过静态 `CurrentModule` 暴露全局访问；它持有 `GlobalGameStateManager`（全局游戏状态栈）、`GlobalTextManager`、`JobManager`（异步作业队列）、`StartupInfo`（启动参数）。它最核心的工作是**收集与管理 SubModule**：`CollectSubModules()` 返回本模块加载的全部 `MBSubModuleBase` 实例，引擎随后按序调用它们的所有生命周期钩子。

对 modder 来说，它的三个用途最实际：一是 `Module.CurrentModule` 作为「游戏是否已完成模块加载」的判据；二是 `GetSubModuleType(string name)` 反查某个 SubModule 的实现类型，配合 `Cast<MBSubModuleBase>` 拿到实例；三是 `ActivateModule` / `DeactiveModule`（注意原文拼写少了一个 `t`）在编辑器场景里动态开关模块。

它还有一组**初始状态选项**（`InitialStateOption`）——主菜单 / 启动画面上的那些入口（编辑器、场景预览等）就是从这里来的。mod 可以 `AddInitialStateOption` 注册自己的启动入口，并用 `OverrideInitialStateOption` 替换本体选项。

## 心智模型

把 `Module` 想成**引擎与 mod 之间的一层间接**：mod 不直接和引擎对话，而是通过 `Module` 找到自己的 SubModule 实例；引擎则通过 `Module.CollectSubModules()` 拿到所有 mod 实例并驱动它们。

正确的使用顺序：

1. **`Module.CurrentModule` 可能为 null。** 它在模块 DLL 加载前不存在。任何依赖它的代码都要判空。
2. **拿具体 SubModule 实例走 `GetSubModuleType`。** 它按名字返回 `System.Type`，需要你自己转型；实例的权威来源仍然是引擎的 SubModule 列表，不要自己 `new` 一个。
3. **`CollectSubModules()` 返回的是活列表。** 遍历它时激活 / 停用模块会导致集合修改异常。
4. **初始状态选项必须在 `AddInitialStateOption` 之后立刻能用。** 它作用于启动界面，早于游戏本体创建。
5. **它是单线程宿主。** `JobManager` 提交的任务在主线程之外执行，回调必须转投主线程才能碰 `Game` / `Campaign`。

`MultiplayerRequested`、`ReturnToEditorState`、`LoadingFinished`、`IsOnlyCoreContentEnabled` 这几个布尔量是**引擎状态位**，mod 读它们来判断「现在处于什么阶段」，但不要写——其中几个的 setter 都不公开。

## 何时使用 / 何时不要使用

- **使用**：判断模块是否加载完成（`Module.CurrentModule != null`）。
- **使用**：反查并转型某个 SubModule 实例。
- **使用**：在编辑器 / 调试场景里动态激活或停用模块。
- **使用**：注册自定义的初始状态选项（启动界面入口）。
- **使用**：提交异步作业（`JobManager`）并在主线程回调。
- **不要**：把 `Module.CurrentModule` 缓存到静态字段——它同样是短生命周期对象。
- **不要**：在遍历 `CollectSubModules()` 结果时调用 `ActivateModule` / `DeactiveModule`。
- **不要**：依赖 `Module` 上那些没有公开 setter 的布尔字段作为配置项。

## 成员说明

### 一、全局入口

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static Module CurrentModule { get; private set; }` | 当前模块实例。**模块 DLL 加载前为 null**。唯一入口，不要静态缓存。 |
| `GameStateManager GlobalGameStateManager { get; private set; }` | 全局游戏状态栈（主菜单 → 战役 → 任务 等状态切换的总调度）。mod 自定义游戏模式要往这里注册状态。 |
| `GameTextManager GlobalTextManager { get; private set; }` | 全局文本管理器。与 `Game.GameTextManager` 不同：后者在游戏实例化后才有，前者在模块期就存在。 |
| `JobManager JobManager { get; private set; }` | 异步作业队列。提交的任务在后台线程跑，回调需转主线程。 |
| `GameStartupInfo StartupInfo { get; private set; }` | 启动参数（命令行参数、启动状态选项、模块配置）。读「为什么这次启动是这个模式」的唯一来源。 |
| `bool MultiplayerRequested` | 是否请求了联机模式（可写）。 |
| `bool ReturnToEditorState` / `bool LoadingFinished` / `bool IsOnlyCoreContentEnabled`（只读） | 引擎阶段标志：是否返回编辑器态、加载是否完成、是否只启用了核心内容。**当状态位读，不要写**。 |
| `event Action SkinsXMLHasChanged` | 皮肤 XML 变化通知。UI / 外观 mod 关心。 |
| `event Action ImguiProfilerTick` | ImGui 性能分析器 tick。 |

### 二、SubModule 管理

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MBReadOnlyList<MBSubModuleBase> CollectSubModules()` | 返回当前加载的全部 SubModule 实例。**返回值是活视图**；需要在循环里排除自己时小心集合修改。 |
| `Type GetSubModuleType(string name)` | 按名字反查 SubModule 的运行时类型。取实例的标准路线。 |
| `bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)` | 判断某个模块描述是否可加载（依赖检查）。启动诊断用。 |
| `void ActivateModule(string moduleId)` | 激活一个模块（编辑器 / 运行时切换）。会触发 `OnSubModuleActivated` 与重新注册。 |
| `void DeactiveModule(string moduleId)` | 停用一个模块。**注意方法名拼写是 `Deactive`（少一个 t），这是 API 原文，不要写成 `Deactivate`。** |
| `void SetCanLoadModules(bool canLoadModules)` | 锁定 / 解锁模块加载。加载中禁止再改模块集合。 |

### 三、初始状态选项（启动界面入口）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddInitialStateOption(InitialStateOption initialStateOption)` | 注册一个启动界面选项（编辑器、预览场景等）。 |
| `void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)` | 替换本体已有的启动选项。 |
| `IEnumerable<InitialStateOption> GetInitialStateOptions()` | 枚举全部启动选项。 |
| `InitialStateOption GetInitialStateOptionWithId(string id)` | 按 id 取启动选项。 |
| `void ExecuteInitialStateOptionWithId(string id)` | 执行某个启动选项。 |
| `void ClearStateOptions()` | 清空启动选项。 |
| `void SetInitialModuleScreenAsRootScreen()` | 把模块的初始屏幕设为根屏幕（覆盖本体的启动画面）。 |

### 四、联机与编辑器

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MultiplayerGameMode GetMultiplayerGameMode(string gameType)` | 按 gameType 取联机模式。 |
| `void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)` | 注册联机模式。 |
| `MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()` | 枚举可用联机类型。 |
| `bool StartMultiplayerGame(string multiplayerGameType, string scene)` | 启动联机游戏。 |
| `async void ShutDownWithDelay(string reason, int seconds)` | 延迟关闭。**`async void` 没有异常传播**，回调里的异常会被吞掉。 |
| `void SetEditorMissionTester(IEditorMissionTester editorMissionTester)` | 注入编辑器任务测试器。 |
| `void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)` | 编辑器里直接启动任务，用于快速调试任务逻辑。 |

### 五、XML 与资源辅助

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)` | 填充 MetaMesh 到资源包的映射。资源 mod 用于让引擎找到正确的包。 |
| `static void GetItemMeshNames(HashSet<string> itemMeshNames)` | 收集全部物品网格名。 |
| `static string GetCraftedItemMeshNames(List<string> arguments)` | 解析合成物品网格名。 |
| `public enum XmlInformationType` | 本类内部使用的 XML 信息类型枚举。 |

## 示例

### 示例 1：反查并转型一个 SubModule 实例

`GetSubModuleType` 返回 `Type`，转型前要判空。

```csharp
using TaleWorlds.MountAndBlade;

public class MyModSubModule : MBSubModuleBase
{
    public static MyModSubModule Instance { get; private set; }

    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        Instance = this;   // 简单可靠的全局引用
    }

    protected override void OnSubModuleUnloaded()
    {
        base.OnSubModuleUnloaded();
        Instance = null;   // 必须清，否则指向已卸载模块
    }
}

// 从别处使用
MyModSubModule sub = Module.CurrentModule != null
    ? Module.CurrentModule.CollectSubModules().OfType<MyModSubModule>().FirstOrDefault()
    : null;

if (sub != null)
{
    sub.DoSomething();
}
```

### 示例 2：枚举已加载的 SubModule

`CollectSubModules()` 返回活视图——需要边遍历边改时先复制。

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.MountAndBlade;

Module module = Module.CurrentModule;
if (module == null) return;

IEnumerable<MBSubModuleBase> snapshot = module.CollectSubModules().ToList();

foreach (MBSubModuleBase submodule in snapshot)
{
    // 只读遍历，安全
    System.Type t = module.GetSubModuleType(submodule.GetType().Name);
}
```

### 示例 3：注册自定义启动选项

启动界面选项作用于游戏本体创建之前，只能在模块加载期注册。

```csharp
using TaleWorlds.MountAndBlade;

protected override void OnBeforeInitialModuleScreenSetAsRootScreen()
{
    base.OnBeforeInitialModuleScreenSetAsRootScreen();

    Module module = Module.CurrentModule;
    if (module == null) return;

    module.AddInitialStateOption(new InitialStateOption(
        id: "my_mod_launcher",
        name: new TextObject("我的启动模式"),
        orderIndex: 100,
        action: () => { /* 选中后执行 */ },
        isDisabledAndReason: () => (false, (TextObject)null)));
}
```

## 风险与边界

- **`CurrentModule` 的 null 窗口**：模块 DLL 加载前不存在。在 `SubModule.xml` 解析阶段或编辑器早期读它会 NRE。
- **静态缓存 `Module.CurrentModule` 是错误做法**：它在模块卸载后失效，跨场景持有会指向已卸载模块。
- **`CollectSubModules()` 是活视图**：在遍历中调用 `ActivateModule` / `DeactiveModule` 会抛集合修改异常。需要边遍历边改时先 `.ToList()`。
- **`DeactiveModule` 的拼写**：API 原文就是少一个 `t`。写 `DeactivateModule` 编译不过，而搜索引擎会把你推向一个不存在的方法名。
- **`ShutDownWithDelay` 是 `async void`**：异常不会传播，内部的崩溃会被静默吞掉。用它做 mod 的关闭逻辑时不要假设异常能被捕获。
- **`JobManager` 的线程模型**：提交的任务在后台线程执行。任务里访问 `Game.Current` / `Campaign.Current` 会跨线程访问主线程对象，必须把结果转投主线程。
- **`ActivateModule` / `DeactiveModule` 的副作用重**：它们会重新注册对象并触发 `OnSubModuleActivated`，可能导致正在运行的 UI / 战役状态失效。仅在编辑器场景使用。
- **`CollectAvailableModules` 类的枚举结果不是配置**：`IsOnlyCoreContentEnabled` 等字段反映引擎阶段，不反映 mod 的意图。
- **模块加载顺序固定**：引擎按自己的顺序调用所有 SubModule 的钩子，与你 `new` 出来的先后无关。

## 依赖关系

- 上游 / 提供者：
  - 引擎在模块加载阶段创建本类，并通过 `CollectSubModules()` 驱动全部 [MBSubModuleBase](../MBSubModuleBase) 实例。
  - [MBSubModuleBase](../MBSubModuleBase) 的 `OnSubModuleLoad` / `OnSubModuleUnloaded` 与本类的模块生命周期一一对应。
- 相互 / 下游：
  - [Game](../../core-extra/Game) 通过 `IGameStateManagerOwner` 与本类的 `GlobalGameStateManager` 协作，完成游戏状态的切换。
  - [ScreenManager](../../gui/ScreenManager) / [ScreenBase](../../gui/ScreenBase) 是初始屏幕设置（`SetInitialModuleScreenAsRootScreen`）的对象。
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 的单例在 `RegisterSubModuleTypes` 阶段由 SubModule 触发注册。

## 参见

- ↑ 父级：[core 索引](../)
- ↔ 相关：[MBSubModuleBase](../MBSubModuleBase) · [Game](../../core-extra/Game) · [ScreenManager](../../gui/ScreenManager) · [MBObjectManager](../../campaign-ext/MBObjectManager)